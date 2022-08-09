
document.querySelector('.btn-primary').addEventListener('click',function () {
/*const firstName,lastName,emailAddress,passWord,comfirmPassword;*/


const firstName = document.querySelector('.firstName').value;
const  lastName = document.querySelector('.lastName').value;
const  emailAddress = document.querySelector('.emailAddress').value;
const  passWord = document.querySelector('.passWord').value;
const  comfirmPassword = document.querySelector('.comfirmPassword').value;


const  person = {
    firstName: firstName,
    lastName: lastName,
    emailAddress : emailAddress,
    PassWord: passWord,
    comfirmPassword: comfirmPassword
};
alert('signup successful');
});




