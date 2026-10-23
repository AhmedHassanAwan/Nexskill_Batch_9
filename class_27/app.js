
// // fetch(`https://dummyjson.com/products`)
// // .then((res)=>{
// //      return res.json()
// // })
// // .then((data)=>{
// //      console.log(data.products);  
// //      data.products.map((items)=>{
// //         div.innerHTML += `
// //         <div class="card">
// //             <div class="image-box">
// //                 <img
// //                     src="${items.images}"
// //                     alt="images"
// //                 >
// //                 <span class="discount">${items.discountPercentage}% OFF</span>
// //             </div>

// //             <div class="card-content">
// //                 <h2${items.description}</h2>

// //                 <p class="price">$${items.price}</p>

// //                 <p class="old-price">
// //                     Original price:
// //                     <span>$11.16</span>
// //                 </p>

// //                 <div class="rating">
// //                     ★★★☆☆ <span>${items.rating} / 5</span>
// //                 </div>

// //                 <p class="stock">● ${items.availabilityStatus}</p>

// //                 <button class="buy-btn" onclick="buyNow()">
// //                     Add to Card
// //                 </button>
// //             </div>

// //         </div>
        
// //         `
// //     })
// // })

// // .catch((err)=>{
// //     console.log(err);
// // })


// // let h1 = document.getElementById("h1");
// // let counter = Number(localStorage.getItem("data")) || 0;

// //     h1.innerHTML = counter

// // function buyNow() {
// //     console.log(h1);
// //     counter++
// //     localStorage.setItem("data" , counter)
// //     h1.innerHTML = counter
// //     // alert("items added")
// //     // console.log("hellow js");


// //     Swal.fire({
// //   title: "Good job!",
// //   text: "Card items added",
// //   icon: "success"
// // });
    
    
// // }






// axios.get(`https://dummyjson.com/produc`)
// .then((res)=>{
//     console.log(res.data.products);
    
//     // console.log(res.data.products);
// })
// .catch((error)=>{
//     console.log(error);
    
// })





import { add , name } from "./sum.js";
// import { name } from "./sum.js";


console.log(name);

console.log(add(2, 3));
