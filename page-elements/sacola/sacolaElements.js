module.exports = {

    
    elements: {

        modalcheckout: {
            selector: "pre-checkout",
            locateStrategy: "id"
        },

 
        totalprice: {
             selector: "total-price",
             locateStrategy: "id"   
        },


        finishorder: {
             selector: "finish-order",
             locateStrategy: "id"   
        },


        // payment page


        paymenttype: {
            selector: "offline-payment-selector-card",
            locateStrategy: "id"   
        },

        cardaddress: {
            selector: "checkout-card-address-details",
            locateStrategy: "id"      
        },

        paydeliverytitle: {
            selector: '//*[@id="__next"]/div/div/section/h2',
            locateStrategy: "xpath"    

        },


        paymentmoney: {
            selector: "Dinheiro",
            locateStrategy: "id"   
        },
  
        totalorder: {
            selector: "offline-payment-method-accordion-body",
            locateStrategy: "id"   
        }


    }
}
