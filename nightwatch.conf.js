require('babel-core/register');

const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

module.exports = {

    page_objects_path: './page-elements',

    
    test_settings: {


          default: {
          
                start_process: true,
                server_path: chromedriver.path,
                port: 9515,
                launch_url: "https://www.ze.delivery/",
     
            desiredCapabilities: {
                browserName: 'chrome',
                'goog:chromeOptions':{
                args: [
                    'start-maximized', '--disable-infobars', '--disable-notifications', '--ignore-ssl-errors', "--allow-insecure-localhost"
                ],

                
                excludeSwitches: [
                    'enable-automation'
                ],
                useAutomationExtension: false
                }
            }
        
        },
        
        
         chrome: {
            webdriver: {
                start_process: true,
                server_path: chromedriver.path,
                port: 9515,
            launch_url: "https://www.ze.delivery/",

            desiredCapabilities: {
                browserName: 'chrome',
                'goog:chromeOptions':{
                args: [
                    'start-maximized', '--disable-infobars', '--disable-notifications', '--ignore-ssl-errors', "--allow-insecure-localhost"
                ],
                
                
                excludeSwitches: [
                    'enable-automation'
                ],
                useAutomationExtension: false
                }
            }
            }
        },


        //  firefox: {
        //     webdriver: {
        //         start_process: true,
        //         server_path: geckodriver.path,
        //         port: 9515,
        //     launch_url: "https://www.ze.delivery/",
        //     desiredCapabilities: {
        //         browserName: 'firefox'
        //         // 'firefoxOptions': {
        //         //  args: [
                    
        //         // ]}
        //         ,
        //     }
        //     }
        // },
      

    }    

    }
