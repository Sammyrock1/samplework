/*let Name,Email,Password;*/

document.querySelector(".btn").addEventListener('click',function(){
    let Name = document.querySelector(".Name").value;
    let Email = document.querySelector(".Email").value;
    let Password = document.querySelector(".Password").value;

    alert('successful');
    window.location.href = "./login/index.html";
});
