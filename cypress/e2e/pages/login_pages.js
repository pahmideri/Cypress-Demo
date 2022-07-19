export class LoginPage{
    txt_username = '#user-name'
    txt_password = '#password'
    btn_login = '#login-button'

    navigate(url){
        cy.visit(url)
    }
    inputUsername(username){
        cy.get(this.txt_username).type(username)
    }
    inputPassword(password){
        cy.get(this.txt_password).type(password)
    }
    clickLogin(){
        cy.get(this.btn_login).click()
    }
    assertLogin(){
        cy.get('.title').should('be.visible')
        cy.get('.peek').should('be.visible')
        cy.contains('Products').should('contain','Products')
    }
    assertLoginFail(){
        cy.get('[data-test="error"]').should('be.visible')
    }
    login(url,username,password){
        this.navigate(url)
        this.inputUsername(username)
        this.inputPassword(password)
        this.clickLogin()
    }
}