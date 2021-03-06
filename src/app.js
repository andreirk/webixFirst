import  'webix/webix_debug'
import toolbar from './components/toolbar'
import main from './components/mainContent'
import footer from './components/footer'


 webix.ready(() => {
    webix.debug = true;

    webix.protoUI({
        name:"editlist" // or "edittree", "dataview-edit" in case you work with them
    }, webix.EditAbility, webix.ui.list);

    webix.ui({
        id:"app",
        rows:[toolbar, main, { view:"resizer" }, footer]
     });


    $$("myform").attachEvent("onChange", function(){
        this.save();
    });
    $$('myform').bind($$('mydata'))

    $$('mydataview').sync($$("mydata"))

    $$('usersChart').sync($$("usersList"))
    
    
 })




