// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
  let customers = document.querySelector(".customers");
(function () {
  'use strict';
fetch("https://randomuser.me/api/?results=15")
  .then(function (response){
    response.json().then(function (data) {
      console.log(data);
      console.log(data.results[0]);
      let users = data.results;
      let userData = "";
      for (var i = 0; i < users.length; i++) {
        userData += "<img src=" + users[i].picture.large + ">";
        userData += users[i].name.first + " " + users[i].name.last;
        userData += " " + users[i].email;
        userData += " " + users[i].location.street + " " + users[i].location.city + " " + users[i].location.state;
        userData += " " + users[i].cell;
        userData += "<br>";
      }
      customers.innerHTML = userData;
      //}
    })
  })
})();
