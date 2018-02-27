import {strip} from '../utils/common'

let formComponent =     {
    view:"form", 
    id: 'myform',
    css: 'main',
    elements:[
        { type:"section", template:"Edit films" },
        { view:"text", label:"Title", name:'title', invalidMessage:"Title must be present!" },
        { view:"text",  label:"Year", name: 'year', invalidMessage:"Year between 1970 and current" },
        { view:"text",  label:"Rating", name: 'rating', invalidMessage:"Not empty and not 0" },
        { view:"text",  label:"Votes", name: 'votes', invalidMessage:"votes not more then 10000" },

        {cols:[
            { view:"button", value:"Add new", type:"form",
                on: {
                        onItemClick: function(id){
                            let values = $$("myform").getValues();
                          
                            console.log(values);
                            var result = $$("myform").validate();
                            console.log('validate result', result);
                            if(result){
                                let newResults = {}
                                _.map(values, function (value, key) {
                                    console.log('key value', {key, value})
                                    if(typeof value === 'string'){
                                        newResults[key] = strip(value)
                                    }
                                    
                                })
                                $$("mydata").add(newResults);
                                webix.message({
                                    type: 'info',
                                    text: 'Success'
                                })

                            } else {
                                webix.message({
                                    type: 'error',
                                    text: 'Please check fields for errors',
                                    expire: -1
                                })
                            }
                            let form2 = webix.copy(formComponent);
                            form2.config.id = 'formCopy'
                            webix.ui({
                                view: "window",
                                id:"my_window",
                                head:"My Window",
                                height:450,
                                modal: true,
                                width:500,
                                position: "center",
                                left:250, top:250,
                                body:form2
                            }).show()
                            // webix.modalbox({
                            //     title:"Custom title",
                            //     buttons:["Yes", "No", "Maybe"],
                            //     width:500,
                            //     text: `${values.title}`,
                            //     callback:function(result){

                            //     }
                            // })
                            // webix.message('item was cliced ' + id)
                        }
                    }  
            },
            { view:"button", value:"Clear",
                on: {
                    onItemClick: function(id){
                        $$("myform").clear();
                    }
                }
            }
        ]}
    ],
    rules:{
        title:webix.rules.isNotEmpty,
        year:function(value){
                let curYear = (new Date()).getFullYear
                return value>1970 && value < curYear;
            },
        votes: function(value){
            return value < 100000 && !!value
        },
        rating: function(value){
            return !!value && value != 0
        }
        } 

};

export default formComponent