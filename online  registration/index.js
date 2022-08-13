/*let Name,Email,Password;*/

document.querySelector(".btn").addEventListener('click',function(){
    let Name = document.querySelector(".Name").value;
    let Email = document.querySelector(".Email").value;
    let Password = document.querySelector(".Password").value;

    alert('Successful');
    window.location.href = "./login/index.html";
});
const Account=[{
     Name:  'Name',
     Email: "Email",
     Password: 'Password',
}];
Object= {
    Name : "samuel",
    Email :  "exampl@gmail.com",
    Password : 123,
};
Account.push(Object);
console.log(Account);
