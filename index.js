Sortable.create(simpleList, { 
    group: {
        name: 'shared',
        put: function (to) {
            return to.el.children.length < 15;
        }
    }  
});

Sortable.create(simpleList2, { 
    group: 'shared',
 });