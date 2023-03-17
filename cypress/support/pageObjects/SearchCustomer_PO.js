class SubscriberSearch_PO {
    /* Subscriber search for different options */
    SearchRegCustomer(CustView, CustOptions, value, popup) {
        if (CustView == 'Customer 360') {
            if (CustOptions == 'MSISDN') {
                cy.get('input[ng-model=inputValue]').type(value)
            } else {
                cy.get('div:nth-child(2) > select').select(CustOptions)
                cy.get('input[ng-model=inputValue]').type(value)
            }
        } else {
            cy.get('div:nth-child(1) > select').select(CustView)
            cy.get('div:nth-child(2) > select').select(CustOptions)
            cy.get('input[ng-model=inputValue]').type(value)
        }
        cy.get('form').eq(0).submit()
        if (CustOptions == 'MSISDN') {
            if (cy.get('.ng-isolate-scope > :nth-child(1) > .ng-binding').should('be.exist')) {
                cy.get('.ng-isolate-scope > :nth-child(6)').each(($e1, index) => {
                    const text = $e1.text();
                    if (text.includes('Active')) {
                        cy.log(index)
                        cy.get('tr:nth-child(' + (index + 1) + ').ng-isolate-scope > :nth-child(1) > .ng-binding').click()
                    } else if (text.includes('Suspension')) {
                        cy.log(index)
                        cy.get('tr:nth-child(' + (index + 1) + ').ng-isolate-scope > :nth-child(1) > .ng-binding').click()
                    } else if (text.includes('Inactive')) {
                        cy.log(index)
                        cy.get('tr:nth-child(' + (index + 1) + ').ng-isolate-scope > :nth-child(1) > .ng-binding').click()
                    }
                })
            }
            
        } else {
            if (cy.get('.ng-isolate-scope > :nth-child(1) > .ng-binding').should('be.exist')) {
                cy.get('.ng-isolate-scope > :nth-child(1) > .ng-binding').click()
            }
        }
        
    }
}
export default SubscriberSearch_PO;