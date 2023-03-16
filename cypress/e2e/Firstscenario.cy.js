import{jumiahome} from "./selectors.cy.js";

describe('Jumia Web Automation Test', () => {
  //Application under test description
    it('Visit URL', () => {
      //Use the CLM URL
      cy.visit('https://www.jumia.com.ng')
      //Assert that user is on the right page
      cy.get(jumiahome.home).should('contain', 'Search')
    })
})

    //write the first testcase for login

describe("User Login Scenario", ()=>{
  it('User Login testcase', ()=>{

  })  

})