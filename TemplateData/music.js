new Vue({
    el: '#music',
    data: {
        html:null,
    },
    mounted: function() {
        this.html = music()
    }
});