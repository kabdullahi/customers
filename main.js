// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

var customers = document.querySelector(".customers");

fetch("https://randomuser.me/api/?results=12")
.then(function (response) {
  response.json()
  .then(function(data){
    console.log(data);
    customers.innerHTML = data.customers;
  });
});
