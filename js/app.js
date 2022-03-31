const vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
            size: 150
        }
    },
    computed: {
        circleClasses() {
            return {
                // object syntax where key is class name and value is the condition to check to determine whether to include class
                purple: this.isPurple
            }
        }
    }
}).mount('#app');