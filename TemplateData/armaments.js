new Vue({
    el: '#armaments',
    data: {
        html:null,
    },
    mounted: function() {
        this.html = armaments()
    }
});