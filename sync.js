
//creating objects

let stocks = {

    //creating arrays inside objects
    

    Fruits: ["strawberry", "grapes", "banana", "apple"],

    toppings: ["chocolate", "peanuts"]
  };
  
  let is_shop_open = true;
  



  
  let order = (time, work) => {
    return new Promise((resolve, reject) => {
      if (is_shop_open) {
        setTimeout(() => {
          resolve(work()); //resolve is used to signal the successful completion of an asynchronous task, and work() represents the actual task to be performed.
        }, time);
      } else {
        reject(console.log("our shop is closed"));
      }
    });
  };






  

  
//   order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  
//   .then(()=>{
//     return order(2000, ()=>console.log("The fruit was chopped"));
//   })
  
//   .then(()=>{
//     return order(1000, ()=>console.log("Start the machine"));
//   })
  
//   .then(()=>{
//       return order(3000,()=>{
//       console.log(` ${stocks.toppings[0]} was selected`)
//     })
//   })
  
//   .then(()=>{
//     return order(1000, ()=>console.log("ice ream was served"));
//   })

  
//   .catch(()=>{
//     console.log("Customer left");
//   })
  
  
//   .finally(()=>{
//     console.log("day ended, shop is closed")
//   })

  //Inside the order function, when the time delay is completed (i.e., after 2000 milliseconds), it calls resolve(work()). Here, work() is the callback function . So, in this context, resolve is saying that the work represented by () => console.log(${stocks.Fruits[0]} was selected) has been successfully completed, and any subsequent .then callbacks will be executed.











// Async and await


// async function kitchen(){
//     console.log("a");
//     console.log("b");
//     console.log("c");
    
//    order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
    
//     console.log("d");
//     console.log("e");
//   }
  
//   kitchen();
  
//   console.log("Doing the dishes");
//   console.log("Cleaning the tables");
//   console.log("Taking other's order");
  









    //Updated example --



//   function time(ms){
//     return new Promise((resolve, reject)=>{
//       if(is_shop_open){
//         setTimeout(resolve,ms)  //it creates a promise that resolves after a specified delay.This means that after the delay, the promise will be resolved without providing any specific value or result.
//       }
//       else{
//         reject(console.log("shop is closed"));
//       }
//     });
//   }
  
  
//   async function kitchen(){
//     try{
//       await time(2000);
//       console.log(`${stocks.Fruits[0]} was selected`)
      
//          await time(2000)
//       console.log("Cut the fruit");
      
//       await time(1000)
//       console.log("Start the machine")
      
//       await time(3000)
//           console.log(` ${stocks.toppings[0]} was selected`)
      
//       await time(2000)
//       console.log("Icecream was served")
//     }
//     catch(error){
//       console.log("Customer left", error)
//     }
//     finally{
//       console.log("day ended, shop is closed")
//     }
//   }
  
//   kitchen();