import * as _ from 'lodash'
import formComponent from './formComponent'
import usersView from './usersView';
import productsPage from './productsPage';


let JSONUrl = '/mockapi/data/data.js';

var small_film_set = [
        { id:1, title:"The Shawshank Redemption", year:1994, votes:678790, rating:9.2, rank: 6 },
        { id:2, title:"The Godfather", year:1972, votes:511495, rating:9.2, rank:2}
    ];

let listComponent =  {
    view:"list",
    id:"mylist",
    width:200,
    select: true,
    data:[ "Dashboard", "Users", "Products", ],
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
    // autoConfig: true,
    id: 'mydata',
    height:400,
    width:300,
    columns:[
        { id:"rank",    header:"Rank",   width:50, },
        { id:"title",   header: ["Film Title", {content:"textFilter"}, ], editor:'text', width:200,},
        { id:"year",    header: ["Released", {content:"textFilter"}, ], editor:'text', width:80},
        { id:"votes",   header: ["Votes", {content:"textFilter"}, ], editor:'text',  width:100}
    ],
    editable: true,
    url: JSONUrl,
    save: JSONUrl,
    rules: {
        "votes": webix.rules.isNumber
    }
    // data: small_film_set
};

const dataview = {
    view:"dataview",
    id: "mydataview",
    type: {
        height: 80,
        width: 200
    },
    template:"<div> <div> #id#. #title# </div> <div></div>#year# </div> ",
    xCount:2, //the number of items in a row
    yCount:4 //the number of items in a column
}


export default  {
    cols:[
        listComponent,
        { view:"resizer" },
        {cells: [
            {id: "Dashboard", cols: [{rows: [datatableComponent, dataview ]},  { view:"resizer" }, formComponent]},
            {id: 'Users', rows: [usersView]},
            {id: 'Products', rows: [productsPage]},
            // {id: 'Locations', template: "Locations View"},

        ]}
    ]
 };


