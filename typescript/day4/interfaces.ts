interface customer {
    name : string; 
    age?: number; 
    details:(product:string)=>string;
    [key:string]: any
}

let obj : customer

obj = {
    name : 'srikanth',
    age: 25,
    details:function(productDetails){
        typeof(this.age);
        return productDetails;
    }
}
obj.details('phone')
function CustomerConst(name,gender){
    this.name = name;
    // this.age = age;
    this.gender = gender;
}
function createCustomer():customer {
    let customerDetails: customer
    customerDetails =  new CustomerConst('Krishna','male');
    return customerDetails;
}