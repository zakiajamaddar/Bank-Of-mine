document.getElementById('login-submit').addEventListener('click', function () {
  //console.log('button clicked')
  //get user email
  const emailField = document.getElementById('user-email')
  const userEmail = emailField.value
  console.log(userEmail)

  //get user password :
  const passwordField = document.getElementById('user-password')
  const userPassword = passwordField.value
  if (userEmail == 'zakia@gmail.com' && userPassword == 'secret') {
    window.location.href = 'banking.html'
  }
})
