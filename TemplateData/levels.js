new Vue({
    el: '#levels',
    data: {
        html:null,
    },
    mounted: function() {
        this.html = levels()
    }
});