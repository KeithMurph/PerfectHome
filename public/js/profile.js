const newPostForm = document.querySelector("#newPostForm");

newPostForm?.addEventListener("submit",e=>{
    e.preventDefault();
    const postObj ={
        body: document.querySelector("#newPostBody").value
    }
    fetch("/api/posts",{
        method:"POST",
        body:JSON.stringify(postObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.reload();
        } else {
            alert("oh no!!!!")

        }
    })
})

document.addEventListener("click",e=>{
    if(e.target.matches(".delPostBtn")){
        const idToDel = e.target.getAttribute("data-id");
        fetch(`/api/posts/${idToDel}`,{
            method:"DELETE"
        }).then(res=>{
            if(res.ok) {
                location.reload();
            } else {
                alert("womp womp")
            }
        })
    }
})
