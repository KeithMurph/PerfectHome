const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit",event=>{
    event.preventDefault();
    console.log("login form submitted!");
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify({
            username: document.querySelector("#loginUsername").value,
            password: document.querySelector("#loginPassword").value,
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        return res.json()
    }).then(data=>{
        console.log(data);
        location.assign("/profile")
    })
})