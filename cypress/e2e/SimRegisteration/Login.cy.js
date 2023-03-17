import{UserLogin} from "../selectors.cy.js";

describe("User Login", ()=>{
    it('Login with Valid username and password', ()=>{
       cy.visit('https://10.184.1.72/');
       //cy.get('.col-sm-6').should('contain', 'Log in')
       cy.get(UserLogin.Login).type('testuser3')
       cy.get(UserLogin.Password).type('tecnotree')
       cy.get(UserLogin.submit).click();
       cy.get(UserLogin.Landingpage).should('be.visible', 'customers')
  
    })  
  
  })