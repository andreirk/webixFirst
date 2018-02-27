

const usersJsonUrl = '/mockapi/data/users.js'

let userListFilter = {
    view: 'text',
    id: 'userListFilter',
    placeholder: 'Type to filter',
    on: {
        onTimedKeyPress: function(code,id){
            var value = this.getValue().toLowerCase();
            console.log('on change id', value);
            $$("usersList").filter('#name#', value);    
        }
    }
}

let sortAscButton = {
    view: 'button',
    id: 'sortAscButton',
    value: 'Sort asc',
    click: function(code,id){
            $$("usersList").sort("#name#","asc");  
    }
}

let sortDescButton = {
    view: 'button',
    id: 'sortDescButton',
    value: 'Sort desc',
    click: function(code,id){
        $$("usersList").sort("#name#","desc");  
    }

}


let userListHeader = {
    cols: [userListFilter, sortAscButton, sortDescButton],
    margin: 10
}

let userList = {
    view:"editlist",
    id:"usersList",
    value: "name",
    editable: true,
    editor: 'text',
    template: '#name# from #country#',
    select: true,
    url: usersJsonUrl,
    datatype: 'json',

}

let userChart = {
    view:"chart",
    id: 'usersChart',
    type:"bar",
    preset:"column",
    gradient:"falling",
    barWidth:35,
    xAxis: {
        title: 'Age',
        template: '#age#'
    },
    // color:"#f6960a",
    border:true,
    value: '#age#',
    // url: usersJsonUrl
}



let usersView = {
    rows: [userListHeader, userList, userChart]
}

export default usersView