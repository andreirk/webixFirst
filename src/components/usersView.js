
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
    view:"list",
    id:"usersList",
    
    template: '#name# from #country#',
    select: true,
    url: '/mockapi/data/users.js',
    datatype: 'json',

}

let userChart = {

}

let usersView = {
    rows: [userListHeader, userList, ]
}

export default usersView