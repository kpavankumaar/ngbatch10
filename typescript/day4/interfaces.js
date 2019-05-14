var obj;
obj = {
    name: 'srikanth',
    age: 25,
    details: function (productDetails) {
        typeof (this.age);
        return 'details';
    }
};
obj.details('phone');
function CustomerConst(name, gender) {
    this.name = name;
    // this.age = age;
    this.gender = gender;
}
function createCustomer() {
    var customerDetails;
    customerDetails = new CustomerConst('Krishna', 'male');
    return customerDetails;
}
