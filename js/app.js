const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }
}).mount('#app');

setTimeout(() => {
    // proxy setter and getter for data properties
    // without a proxy: vm.$data.firstName
    vm.firstName = 'Bob'
}, 2000)