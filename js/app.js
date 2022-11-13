var app = new Vue({
    el : '#wrapper',
    data : {
        currentPage : false,
        pages : [
            {
                name : 'Add Route',
                type : 'Form',
                form : [
                    {
                        name : 'Name',
                        type : 'text',
                        value : ''
                    },
                    {
                        name : 'API URL',
                        label : '$template can be used!',
                        type : 'text'
                    },
                    {
                        name : 'Method',
                        type : 'select',
                        options : [
                            'GET',
                            'POST'
                        ]
                    },
                    {
                        name : 'Request Body',
                        label : '$template can be used!',
                        type : 'textarea'
                    }
                ]
            }
        ],
        alert : {
            display : false,
            message : ''
        }
    },
    methods : {
        init : function(){
            this.callPage('Add Route');
        },
        getPageByName : function(name){
            return this.pages.find(function(page){
                return page.name === name;
            });
        },
        callPage : function(pageName) {
            var page = this.getPageByName(pageName);

            if(page){
                this.currentPage = page;
            }
        }
    }
});

window.onload = function(){
    app.init();
};