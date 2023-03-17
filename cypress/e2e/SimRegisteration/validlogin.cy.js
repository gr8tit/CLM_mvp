import Login_PO from '../../support/pageObjects/Login_PO'

describe('Login CLM Application with valid credentials', function(){
    const login_PO = new Login_PO();
    before(function() {
        cy.fixture('Credentials').then(function (data) {
            globalThis.data = data;
        });
    });
    it('Login CLM application with valid credentials', () => {
        login_PO.launchURL();
        login_PO.login(data.login.validdataset1.username,data.login.validdataset1.password,'true');
    })
})