const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            middleName: '',
            url: 'https://google.com',
            rawUrl: '<a href="https://google.com">Google</a>',
            age: 20
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
        increment() {
            this.age++
        },
        updateLastName(msg, event) {
            console.log(msg)
            this.lastName = event.target.value
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
        }
    }
}).mount('#app');