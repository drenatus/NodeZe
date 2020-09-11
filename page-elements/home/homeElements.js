module.exports = {

    
    elements: {

        under18: {
            selector: "//*[@id='__next']/div[1]/div/div/p",
            locateStrategy: "xpath"
          },

          under18yes: {
            selector: "age-gate-button-yes",
            locateStrategy: "id"
          },

          acceptCookies: {
            selector: "/html/body/div[1]/div[2]/div[4]/div[2]/div/button",
            locateStrategy: "xpath"
  
          }, 

          header: {
             selector: "//div[@id='__next']/div/div/header/div" ,
             locateStrategy: "xpath"
          },

          signinButton: {
            selector: "welcome-button-sign-in" ,
            locateStrategy: "id"
          },

          loggeduser: {
            selector: "//*[@id='header-user-badge']/div/div",
            locateStrategy: "xpath"  

          },


          beersMenu: {
            selector: "category-Cervejas",
            locateStrategy: "id"

          } 
          

        
        
        }
    
    }