
new Vue({
    el:'#app',
    data:{
        total: '',
        moneyList:[
            {
                value:10
            },
            {
                value:20
            },
            {
                value:30
            },
            {
                value:50
            },
            {
                value:100
            },
            {
                value:200
            },
            {
                value:500
            },
            {
                value: 1000
            }
        ]
    },
    methods:{
            money(obj){
                this.total =  obj.value;
            }
    }
})