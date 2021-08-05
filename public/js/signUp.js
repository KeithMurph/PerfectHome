const signupForm = document.querySelector("#signupForm");
signupForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const authObj={
        email:document.querySelector("#signupEmail").value,
        username:document.querySelector("#signupUsername").value,
        password:document.querySelector("#signupPassword").value,
    }
    fetch("/api/users",{
        method:"POST",
        body:JSON.stringify(authObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            console.log("success")
            res.json().then(data=>{
                location.assign(`/profile/${data.id}`)
            })
        } else {
            alert("error!")
        }
    })
})