
//const cypress =require("cypress")
class Login{

txtuserName="input[placeholder='Username']"
txtPassword="input[placeholder='Password']"
btnSubmit="button[type='submit']"
lblMessage=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"

setUserName(username){
    cy.get(this.txtuserName).type(username);
}
setPassword(password){
    cy.get(this.txtPassword).type(password);
}
clickSubmitBtn(){
    cy.get(this.btnSubmit).click();
}
verifyLogin(){
    cy.get(this.lblMessage).should('have.text', 'Dashboard');
}

}

export default Login;