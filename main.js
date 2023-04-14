var formular = document.getElementById("formular");

formular.addEventListener("submit", (e) => {   
    e.preventDefault(); 
    var name = document.getElementById("name");
    var email = document.getElementById("email");

    if(name.value == "" ||email.value == "")
    {}

    else{console.log(` ${name.value} ${email.value}`)}
});