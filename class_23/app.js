// // // console.log("hello js");

// // // var abc = "abc"


// // // console.log(`${abc}  def `);

// // // console.log(abc + " " +  "def");



// // // var obj = {
// // //     name : "ali",
// // //     age : 21,
// // //     city : "karachi",

// // //     greet : function () {
// // //         console.log(`welcome to ${this.name}`);
// // //         console.log(`welcome to ${this.email}`);

        
// // //         // console.log("hello js");
        
        
// // //     }
// // // }


// // // obj.email = "ali@gmail.com"
// // // obj.age = 31,

// // // obj.skills = ["HTML" , "CSS" , "JS"]

// // // // console.log(obj);
// // // obj.greet()


// // // // console.log(obj.name); // dot
// // // // console.log(obj["name"]);


// // // // console.log(obj);
// // // // console.log(obj.skills[2]);








// // // var  person = {
// // //     name : "ali",
// // //     age : 21 ,
// // //     ciy : "karachi",


// // //     sayhi : function(){
// // //         console.log(`welcom to ${this.name}`);
        
// // //     }
// // // }


// // // delete person.age


// // // console.log(person);
// // // // person.sayhi()

// // // // console.log("email" in person);
// // // console.log("sayhi" in person);


// // var div  = document.getElementById("main")


// // var students = [
// //     { name: "ali", age: 21, city: "karachi" },
// //     { name: "ahmed", age: 22, city: "lahore" },
// //     { name: "usman", age: 20, city: "islamabad" },
// //     { name: "hamza", age: 23, city: "multan" },
// //     { name: "sara", age: 19, city: "karachi" },
// //     { name: "ayesha", age: 21, city: "lahore" },
// //     { name: "bilal", age: 24, city: "peshawar" },
// //     { name: "hassan", age: 22, city: "quetta" },
// //     { name: "fatima", age: 20, city: "hyderabad" },
// //     { name: "zain", age: 23, city: "faisalabad" },
// //     { name: "zain", age: 23, city: "faisalabad" },
// //     { name: "zain", age: 23, city: "faisalabad" },
// //     { name: "zain", age: 23, city: "faisalabad" },
// //     { name: "zain", age: 23, city: "faisalabad" },
// //     { name: "zain", age: 23, city: "faisalabad" },
// //     { name: "zain", age: 23, city: "faisalabad" },
// //     { name: "zain", age: 23, city: "faisalabad" },
// //     { name: "zain", age: 23, city: "faisalabad" },
// //     { name: "zain", age: 23, city: "faisalabad" },
// //     { name: "zain", age: 23, city: "faisalabad" },

// // ];


// // for(var i = 0; i < students.length;i++){
// //     // console.log(i);
// //     // console.log(students[i].city);
// //     // console.log(students[i].name);

// //     div.innerHTML += `
// //      <div class="card">
// //             <h2>Name : ${students[i].name}</h2>
// //             <p>Age : ${students[i].age}</p>
// //             <h2> City : ${students[i].city}</h2>

// //         </div>
// //     `

    

    
// // }


// // // console.log(studentsdata[4].city);
// // // console.log(students[].city);
// // // console.log(students[1].city);
// // // console.log(students[2].city);
// // // console.log(students[3].city);
// // // console.log(students[0].city);
// // // console.log(students[0].city);
// // // console.log(students[0].city);








// // Objects:
// // Constructors



// function Student(name,age,city){
//     this.name = name,
//     this.age = age,
//     this.city = city

//     // this.greet = function () {
//     //     console.log(`welcom to ${name}`);
        
//     //     // console.log("hello worlds");
        
        
//     // }
// }


// Student.prototype.greet = function(){
//     console.log("hello world");
    
// }



// console.log("isenrolled" in Student);







// var obj1 = new Student("ali" , 21 , "karachi");
// var obj2 = new Student("hamza" , 20 , "multan");
// var obj3 = new Student("hassan" , 22 , "karachi");

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);


// obj1.greet()





// console.log(window.location.assign("https://www.google.com/"));
// console.log(window.location.hostname);


// window.location.assign("https://www.google.com/")
// window.location.replace("https://www.google.com/")


// window.location.href = "https://www.google.com/"



// window.location.reload();


