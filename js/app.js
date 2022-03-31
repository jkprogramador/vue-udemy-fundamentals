const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    }
}).mount('#app');

setTimeout(() => {
    // proxy setter and getter for data properties
    // without a proxy: vm.$data.firstName
    vm.firstName = 'Bob'
}, 2000)