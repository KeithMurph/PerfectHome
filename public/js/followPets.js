const followBtn = document.querySelector("#followBtn");
followBtn?.addEventListener("click",e=>{
    const followObj = {
        follow:e.target.getAttribute("data-user")
    }
    fetch("/api/users/follow",{
        method:"POST",
        body:JSON.stringify(followObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})


const unfollowBtn = document.querySelector("#unfollowBtn");
unfollowBtn?.addEventListener("click",e=>{
    const unfollowObj = {
        unfollow:e.target.getAttribute("data-user")
    }
    fetch("/api/users/unfollow",{
        method:"POST",
        body:JSON.stringify(unfollowObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})