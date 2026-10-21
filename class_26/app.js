// // console.log("hello js");


// // // function sayhi(a,b,c="ali") {
// // //     console.log(a,b,c);
    

// // //     // console.log("say hi");
// // // }


// // // sayhi("1"  ,2 ,3);


// // // let obj = [
// // //     {
// // //     fname : "ali",
// // //     lname : 'hasan',
// // //     age : 21
// // // },

// // //    {
// // //     fname : "usman",
// // //     lname : 'hasan',
// // //     age : 20
// // // }
// // // ]

// // // console.log(obj);



// // // class Person {
// // //   constructor(name, age) {
// // //     this.name = name;
// // //     this.age = age;
// // //   }
// // // }

// // // // Usage
// // // const user1 = new Person("Alice", 25);
// // // const user2 = new Person("ali", 25);
// // // const user3 = new Person("hassan", 25);

// // // console.log(user1);
// // // console.log(user2);
// // // console.log(user3);





// // class Person {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }

// //   sayhi(){
// //     console.log(`hello methods`);
    
// //   }
// // }


// // class Student extends Person{
// //     constructor(name,age,id){
// //         super(name,age)
// //         this.id = id
// //     }

// // }

// // var obj3 = new Student("hassan" , 21  ,101)
// // console.log(obj3);
// // obj3.sayhi()




// // // var obj1 = new Person("ali" , 21);
// // // var obj2 = new Person("hassan" , 21);

// // // console.log(obj1);
// // // console.log(obj2);

// // // obj1.sayhi()
// // // obj2.sayhi()







// // synchronous  
// // asynchronous
// // setInterval
// // setTimeout
// // promises
// API
// // fetch
// // axios






// // synchronous  js


// // console.log("A");

// // for (let index = 0; index <= 10; index++) {
// //     console.log(index);
// // }

// // console.log("C");


// // asynchronous

// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 1000);
// console.log("C");
// console.log("C");












// // setInterval(fun,dealy)

// // setInterval(() => {
// //     console.log("settime intervel start....");
// // },5000);


// // setTimeout(() => {
// //     console.log("set time out...");
    
    
// // }, 2000);




// var h1 = document.getElementById("h1")
// // console.log(h1);

// let counter = 0
//  let timer = setInterval(() => {
//     // console.log(h1.innerHTML);
//     counter++
//     h1.innerHTML = counter

//     if (counter >= 5) {
//         console.log("counter stop");
        
//          clearInterval(timer)
        
        
//     }
    
    
// }, 1000);





// promises


// let promises = new Promise((resolve,reject)=>{
//     // console.log("hellow promises");
//     if (false) {
//         // console.log("resolve chal rha hay log ");
//         resolve("resolve chal rha hay !")
//     } else{
//         reject("reject chal rha hay !")
//     }

// })

// promises
// .then((res)=>{
//     console.log(res); 
// })
// .catch((err)=>{
//     console.log(err);
// })



// API 


// var div = document.getElementById("h1");

// fetch("https://dummyjson.com/products")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     data.products.map((items)=>{
//         // div.innerHTML += items.title
//         console.log(items);
        
//     })
//     // console.log(data.products[2]);
//   })
//   .catch((err) => {
//     console.log("Fetch error:", err);
//   });

 fetch("https://dummyjson.com/products")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }
                return res.json();
            })
            .then((data) => {
                const container = document.getElementById("div");

                data.products.forEach((product) => {
                    const card = document.createElement("div");
                    card.className = "card";

                    const oldPrice = (
                        product.price /
                        (1 - product.discountPercentage / 100)
                    ).toFixed(2);

                    card.innerHTML = `
                        <img
                            src="${product.thumbnail}"
                            alt="${product.title}"
                            loading="lazy"
                        >

                        <div class="card-content">
                            <h2>${product.title}</h2>

                            <div class="price">
                                $${product.price.toFixed(2)}
                            </div>

                            <div>
                                <span class="old-price">
                                    $${oldPrice}
                                </span>

                                <span class="discount">
                                    -${product.discountPercentage}%
                                </span>
                            </div>

                            <div class="rating">
                                ★ ${product.rating} | ${product.brand || product.category}
                            </div>

                            <p class="description">
                                ${product.description}
                            </p>

                            <p class="stock">
                                ${product.availabilityStatus}
                            </p>

                            <button class="buy-btn">
                               Add to Card
                            </button>
                        </div>
                    `;

                    container.appendChild(card);
                });
            })
            .catch((err) => {
                document.getElementById("div").textContent =
                    "Error loading products: " + err.message;
                console.error(err);
            });