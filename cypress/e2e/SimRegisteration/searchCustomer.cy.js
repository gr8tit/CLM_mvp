//import{UserLogin} from "../selectors.cy.js";


import Login_PO from "../../support/pageObjects/Login_PO";
import SubscriberSearch_PO from "../../support/pageObjects/SearchCustomer_PO";


describe('Login CLM Application with valid credentials', function(){
    const login_PO = new Login_PO();
    const subscribersearch_PO = new SubscriberSearch_PO();
    before(function() {
        cy.fixture('Credentials').then(function (data) {
            globalThis.data = data;
        cy.fixture('testdata').then(function (data1) {
            globalThis.data1 = data1;
            });
        });
    });

    it('Login CLM application with valid credentials', () => {
        login_PO.launchURL();
        login_PO.login(data.login.validdataset1.username,data.login.validdataset1.password,'true');
    })

    it('Subscriber_Search_Vas_MSISDN', () => {
        login_PO.LaunchURL();
        cy.login_PO.login(data.login.validdataset1.username,data.login.validdataset1.password,'true');
        cy.get.subscribersearch_PO.SearchRegCustomer(data1.TC021.CustView,data1.TC021.CustOptions,data1.TC021.value)
    });
});

