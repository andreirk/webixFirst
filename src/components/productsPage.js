
const productsJsonUrl = '/mockapi/data/products.js';


const productsPage = {
    view:"treetable",
    autoconfig: true,
    columns:[
      { id:"id", header:"", width:50},
      { id:"value", header:"Film title", width:250,
       template:"{common.treetable()} #title#" },
      { id:"price", header:"Price",
       template: function (obj) {
            return obj.price ? obj.price : ''
      }, 
       width:200}
    ],
    url:  productsJsonUrl   

}

export default productsPage