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

//  fetch('/mockapi/data/data.js')
//  .then((res) => {
//     let arr = res.json()
//     console.log(typeof arr);
    
//     // arr.forEach(console.log)
//     console.log('fetch result',res.json())
//  })



