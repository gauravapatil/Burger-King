let order=document.getElementById("order");
let orderId=document.getElementById("orderid");
let foodImg=document.getElementById("food-img");
order.addEventListener("click",()=>{
    foodImg.style.display = 'none';
    orderId.innerHTML=`Your food is being prepared.Your Order ID is'<span id="id-value"></span>'`;
    let selectedItem=[];
    let foods=document.getElementsByName("food");
    foods.forEach((food)=>{
        if(food.checked){
            selectedItem.push(food.value);
        }
    })
    if(selectedItem.length===0){
        alert("Please select atleast one food-item");
        return;
    }
    order.disabled=true;
    
    let idValue=document.getElementById("id-value");
    

    orderId.style.display = 'none';
    


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function getRandomDelay(min = 2000, max = 5000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random order ID
function getRandomOrderId() {
    return  Math.floor(Math.random() * 10000);
}


const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        const Id = getRandomOrderId();
        idValue.textContent = Id;
        orderId.style.display = 'block';
        resolve();  
    }, 3000); 
});


promise
    .then(function() {
        
        return delay(getRandomDelay());
    })
    .then(function() {
        orderId.textContent="Your meal is ready.Collect it!";


   
        const foodToShow = selectedItem[Math.floor(Math.random() * selectedItem.length)];

        switch(foodToShow) {
            case 'burger':
                foodImg.src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60';
                break;
            case 'fries':
                foodImg.src = 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60';
                break;
            case 'drinks':
                foodImg.src = 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60';
                break;
        }
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
    
    foodImg.style.display = 'block';
    order.disabled = false;
    


})






// function getRandomTime(){
//     return Math.floor(Math.random() * 5000) + 2000 //random time between 2 to 7 sec
// }

// function getRandomOrderId(){
//     return Math.floor(Math.random() * 1000) + 100;  //random ID between 100 to 1099
// }

// document.getElementById('orderButton').addEventListener('click', function(){
//     const selecteditems = [];
//     const checkBoxes = document.getElementsByName('foodItem');

//     checkBoxes.forEach(function(checkbox){
//         if(checkbox.checked){
//             selecteditems.push(checkbox.value);
//         }
//     });

//     if(selecteditems.length === 0){
//         alert("Please select atleast one item");
//         return;
//     }

//     const orderButton = document.getElementById('orderButton');
//     orderButton.disabled = true;

//     const foodImage = document.getElementById('foodImage');
//     const orderIdElement = document.getElementById('orderId');
//     const orderIdValueElement = document.getElementById('orderIdValue');

//     orderIdElement.style.display = 'none';
//     foodImage.style.display = 'none';

//     const promise = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve()
//         }, getRandomTime())
//     });

//     promise.then(function(){
//         const orderId = getRandomOrderId();
//         orderIdValueElement.textContent = orderId;
//         orderIdElement.style.display = 'block';

//         const foodToShow = selecteditems[Math.floor(Math.random() * selecteditems.length)];

//         switch(foodToShow){
//             case 'Burger':
//                 foodImage.src= 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
//                 break;
//             case 'Fries':
//                 foodImage.src = 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
//                 break;
//             case 'Drink':
//                 foodImage.src = 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
//                 break;
//             default:
//                 foodImage.src = 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
//         }

//         foodImage.style.display = 'block';
//         orderButton.disabled = false;
//     });
// });