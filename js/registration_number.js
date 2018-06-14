var textField = document.querySelector("");
var regCar = document.querySelector(".dropdown");
var carElement = document.querySelector(".messageArea");
var countElem = document.querySelector(".counts")

var users = localStorage.getItem('carsRegistered')
var carReg = JSON.parse(users)

window.addEventListener('load', function(){

  countElem.innerHTML = user.counts()
  console.log( user.counts());

})
var user = carsRegistered(carReg);



regCar.addEventListener('click', function(){

  var checkedRadioBtn = document.querySelector("input[name='carTown']:checked");
           if (checkedRadioBtn) {
             var carTown = checkedRadioBtn.value
           }

  var carString = user.reg(carTown,textField.value);
  //getregCarcar.innerHTML = carsRegistered;
  carElement.innerHTML = carString.toUpperCase();
  textField.value = '';

  countElem.innerHTML = user.counts()
localStorage.setItem('carsRegistered', JSON.stringify(user.getcar()))
});

function clickTheClearButton() {
  carsRegistered.innerHTML = '';
};
