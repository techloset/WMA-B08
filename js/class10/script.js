
function checkNumber(){
  var userNumber = document.getElementById('userNumber').value
  var result = document.getElementById('result')
  if(userNumber % 2 === 0) {
      result.innerHTML = 'Result: Even Number'
 }
      else {
            result.innerHTML = 'Result: Odd Number'
      }
}







function submitForm(){
      var userName = document.getElementById('userName').value
      var password = document.getElementById('password').value
      var email = document.getElementById('email').value  
      var output = `Username: ${userName} Password: ${password} Email: ${email}`

      var h1Tag = document.getElementById('userId')
      h1Tag.innerHTML = userName


      var h1TagEmail = document.getElementById('emailId')
      h1TagEmail.innerHTML = email
}



function onChangeHandler(){
      var inputTag = document.getElementById('input')
     console.log(inputTag.value)
}



function clickMe() {
   var inputTag = document.getElementById('input')
   
   if(inputTag.type === 'password') {
       inputTag.type = 'text'
   }
   else {
   inputTag.type = 'password'
      }
    console.log('Button Clicked')
}     


// console.log(tags)







// var h1tag = document.getElementById('heading')
// var ptag = document.getElementById('para')
// var tags = document.getElementsByTagName('p')
// var tags = document.getElementsByClassName('para')
// var tags = document.querySelector('p')
// var tags = document.querySelectorAll('p')
// var tags = document.querySelectorAll('.para')
// var tags = document.querySelectorAll('p.para')
// var tags = document.querySelectorAll('p#para')
// var tags = document.querySelectorAll('.para#para')
// var tags = document.querySelectorAll('p.para#para')
