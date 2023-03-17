class Login_PO {
    //Launch the CLM URL
    launchURL(){
        cy.visit('https://'+Cypress.env("url")+'/clm-ui/');
        //cy.waitUntil(() => cy.url().should('include', 'authenticationendpoint/login'))
    }

    //Login to CLM
    login(username, password){
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('.btn').click();
        cy.wait(10000);
        cy.get('.pl-0').should('contain', 'Customers 360 & Registration');        
   }

   //Negative Login Scenario
   invalid(username, password){
    cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('.btn').click();
        cy.get('p').should('have.text','Login failed! Please recheck the username and password and try again.')
    }

    blankfields(){
        cy.get('.btn').click();
        cy.get('p').should('have.text','Login failed! Please recheck the username and password and try again.')
    }

    forgotPasswordl(){
        cy.get('[style="text-align:center"] > a').click();
        cy.get('.alert').should('be.visible')
    }

   
}

export default Login_PO

