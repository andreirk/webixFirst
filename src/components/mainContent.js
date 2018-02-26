import * as _ from 'lodash'
import formComponent from './formComponent'

let JSONUrl = 'data/data.js';

const plays = [];
fetch(JSONUrl)
  .then(blob => blob.json())
  .then(data => plays.push(...data));

console.log('plays', plays)  
var small_film_set = [
        { id:1, title:"The Shawshank Redemption", year:1994, votes:678790, rating:9.2, rank: 6 },
        { id:2, title:"The Godfather", year:1972, votes:511495, rating:9.2, rank:2}
    ];

let listComponent =  {
    view:"list",
    id:"mylist",
    width:200,
    select: true,
    data:[ "Dashboard", "Users", "Products", "Locations" ],
    // url:'/mockapi/data/data.js',
    datatype: 'json',
    on: {
        // onItemClick: function(id){
        //     $$(id).show()
        //     // webix.message('item was cliced ' + id)
        // },
        onAfterSelect: function(id) {
            $$(id).show()
        }
    }
};


let datatableComponent =  {
    view:"datatable",
    select: true,
    autoConfig: true,
    id: 'mydata',
    // columns:[
    //     { id:"rank",    header:"Title",         width:50},
    //     { id:"title",   header:"Film title",    width:200},
    //     { id:"year",    header:"Released",      width:80},
    //     { id:"votes",   header:"Votes",         width:100}
    // ],
    editable: true,
    url: '/mockapi/data/data.js',
    // data: small_film_set
};



export default  {
    cols:[
        listComponent,
        { view:"resizer" },
        {cells: [
            {id: "Dashboard", cols: [datatableComponent,  { view:"resizer" }, formComponent]},
            {id: 'Users', template: "Users View"},
            {id: 'Products', template: "Products View"},
            {id: 'Locations', template: "Locations View"},

        ]}

    ]
 };


 function strip(text){
    return text.replace(/<(?:.|\n)*?>/gm, '');
 }