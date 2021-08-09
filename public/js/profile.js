const newPostForm = document.querySelector("#newPostForm");

newPostForm?.addEventListener("submit",e=>{
    e.preventDefault();
    const postObj ={
        name: document.querySelector("#petName").value,
        description: document.querySelector("#petDes").value,
        type: document.querySelector("#petType").value,
        breed: document.querySelector("#petBreed").value,
        size: document.querySelector("#petSize").value,
        age: document.querySelector("#petAge").value,
        house_size: document.querySelector("#houseSize").value,
        good_with_children: document.querySelector("#children").value,
        good_with_dogs: document.querySelector("#dogs").value,
        good_with_cats: document.querySelector("#cats").value,
        has_yard: document.querySelector("#yard").value,
        has_claws: document.querySelector("#claws").value,
        spayed: document.querySelector("#sOrN").value,
        special_needs: document.querySelector("#special").value,
        image_url: document.querySelector('preview').src,    
    }
    
    console.log(postObj)

    fetch("/api/adoptable",{
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
