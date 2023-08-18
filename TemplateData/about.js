new Vue({
    el: '#about',
    data: {
        html:null,
    },
    mounted: function() {
        this.html = about()
    }
});