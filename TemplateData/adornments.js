new Vue({
    el: '#adornments',
    data: {
        html:null,
    },
    mounted: function() {
        this.html = adornments()
    }
});