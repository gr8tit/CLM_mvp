// import{UserLogin} from "../selectors.cy.js";

describe('CLM Web Automation Test', () => {
  //Application under test description
    // before(()=>{
      cy.on('uncaught:exception', (err, runnable) => {
        return false
      })

      it('Visit URL', {defaultCommandTimeout: 8000},()=>{
        cy.visit('https://10.184.1.72/')

      });
    // });
     
      
})



