// // // // // console.log("hellow js");






// // // // var a = "ali";




// // // // // // localStorage.setItem("name" , "ali");
// // // // // sessionStorage.setItem("name" , "hassan");


// // // // // // console.log(localStorage.getItem("name"));
// // // // // console.log(sessionStorage.getItem("name"));



// // // // var btn = document.getElementById("h1");

// // // // // var count = Number(localStorage.getItem("data")) || 0;
// // // // var count = Number(sessionStorage.getItem("data")) || 0;


// // // // btn.innerHTML = count
// // // // function plus() {

// // // //     count++
// // // //     // localStorage.setItem("data", count);
// // // //     sessionStorage.setItem("data", count);

// // // //     // console.log(localStorage.getItem("data"));
    
// // // //     btn.innerHTML = count

// // // //     // console.log(btn.innerHTML);
// // // //     // console.log("btn");
// // // // }




// // // // New Features in ES6

// // // // var a = "ali";
// // // // var a = "hassan";


// // // // let a = "ali";
// // // // let a = "hamza"

// // // // // a= "hassan";
// // // // // console.log(a);

// // // // let a = 21;
// // // // {

// // // //     let b = 22;
// // // //     console.log(a);
    
// // // //     console.log(b);
    
    
// // // // }

// // // // // console.log(b);


// // // // // console.log(a);



// // // // const a = "hamza";
// // // // // a= "ali"
// // // // const a  = "ali"

// // // // console.log(a);



// // // // var a;

// // // // a=10;


// // // // console.log(a);


// // // // var a = 10;
// // // // console.log(a);


// // // // console.log(a);

// // // // let a = 20;


// // // // 3. Arrow Functions
// // // // sum()

// // // // function sum() {
// // // //     console.log("hellow js");
// // // // }



// // // // add();

// // // // const add = ()=>{
// // // //     console.log("hellow arrow fun");
    
// // // // }



// // // // 4. Destructuring Assignment



// // // // let obj = {
// // // //     name : "ali",
// // // //     age  : 21,
// // // // }

// // // // // console.log(obj.name);
// // // // // console.log(obj.age);


// // // // obj.city = "karachi"

// // // // const {name , age , city} = obj;


// // // // console.log(name);
// // // // console.log(age);
// // // // console.log(city);




// // // // const a = [ "red", "blue", "green"];

// // // // const [first , ,  b] = a

// // // // console.log(b);

// // // // // console.log(a[0]);





// // // // 5. The Spread (...) Operator


// // // // let arr1 = [1,2,3,4,5];
// // // // let arr2 = [...arr1,6,7,8,9,10];


// // // // console.log(arr2);

// // // // // console.log(arr1);
// // // // // console.log(...arr1,arr2);




// // // // Resert Operator


// // // function num(a,b,...number) {
// // //     console.log(a,b,number);
    
    
// // // }


// // // num(1,2,3,4,25,525545);


// // const arr = [ "apple", "banana", "cherry"];
// // // for(var i = 0; i < a.length;i++){
// // //     console.log(a[i]);
    
// // // }


// // for(const b of arr){
// //     console.log(b);   
// // }


// // // console.log(a);



// // array method
// // map
// // for each
// // filter
// // reduce



// // map 
// // const arr = [ "apple", "banana", "cherry"];



// // even 2,4,6,8,10


// // var res = arr.map((items)=>{
// //     return items * 10
// //     // console.log(items * 2);
    

// // })

// // console.log(res);





// // for each 

// //  var res = arr.forEach((items)=>{
// //     return items * 10
// //     // console.log(items * 2);
    

// // })

// // console.log(res);


// /// filter


// // var res = arr.filter((items)=>{
// //     // console.log();
// //     return items %2 !== 0;
    
// // })

// // console.log(res);





// /// reduce;
// const arr = [1,2,3];

// var res = arr.reduce((acc,curr)=>{

//     return acc + curr
//     //      3  +   

// } , 10);

// console.log(res);


















