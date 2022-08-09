document.querySelector('.btn-primary').addEventListener('click',function(){


    const passWord = document.querySelector('.passWord').value;
    const  emailAddress = document.querySelector('.emailAddress').value;

    const  person = {
        emailAddress : emailAddress,
        passWord: passWord,
    };
    alert('signIn successful');

});