// var test = function(){
//     console.log('abc');
// }
// test();
// part of js file 
    // example 1 
    // var sum =  (a, b) =>  {
    //     console.log(this);
    //    return  a + b
    // }; 
    // var val = sum(10, 20);
    // console.log(val);

    // function test(){
    //     console.log(this);
    // }

    // test();

    // example2 
    // var obj1 = {
    //     name:'srk'
    // }
    // var obj = {
    
    
    //     name:'ravi',
    //     test:function(){
    //         console.log(this);
    //         var run = () => {console.log(this)};
    //         run();
    //         function run1(){
    //             console.log(this);
    //         }
    //         run1();
    //     },
    //     test1:() => {
    //         console.log(this);
            
    //         console.log(this);
    //         var run = () => {console.log(this)};
    //         run();
    //     }
    // }
    

var sum = (a:number = 20,b:number = 30) => a + b;

var val = sum(10,25);
let num1 = sum();

console.log(val);

// let arr: [number,number]
// let arr: number[];
let arr : Array<number | string | []>
arr = [10,20,'ravi', [] ] ;

// let obj : { name : string, age: number}

// obj = {
//     name : 'srikanth',
//     age: 25
// }

let obj : { name : string, age: number, [key:string]: any}

obj = {
    name : 'srikanth',
    age: 25
}

