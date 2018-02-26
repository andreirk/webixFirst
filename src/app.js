import  'webix/webix_debug'
import toolbar from './components/toolbar'
import main from './components/mainContent'
import footer from './components/footer'


console.log('toolbar', toolbar)
console.log('webix', webix)


 webix.ready(() => {
    webix.ui({
        id:"app",
        rows:[toolbar, main, footer]
     });
 })




