


import Login_PO from "../support/PageObjects/Login_PO"

describe('Login Scenarios', ()=>{
  const login_PO = new Login_PO();
  beforeEach( () => {
    login_PO.launchURL();
  });

  before(function() {
  cy.fixture('testdata').then( (data) =>{
    globalThis.data = data;

  })
});

  it.only('Verify that a user with a valid username and a valid password can login', function(){
    
    login_PO.login(data.login.validdataset1.username,data.login.validdataset1.password);
  })

  it('Verify that a user with invalid username and a valid password can not login', function(){
    
    login_PO.invalid(data.login.invaliddataset1.username,data.login.invaliddataset1.password);
  })

  it('Verify that a user with a valid username and invalid password can not login', function(){
    
    login_PO.invalid(data.login.invaliddataset2.username,data.login.invaliddataset2.password);
  })

  it('Verify that a user with a invalid username and invalid password can not login', function(){
    
    login_PO.invalid(data.login.invaliddataset3.username,data.login.invaliddataset3.password);
  })

  it('Verify that a user can not login when username and password fields are blank', function(){
    login_PO.blankfields();
    
  })

  it('Verify the forgot password link', function(){
    Login_PO.forgotPasswordl();
    
  })



})