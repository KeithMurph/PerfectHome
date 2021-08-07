const e = require("express")

const favoriteBtn = document.querySelector("#favorite-pet")

favoriteBtn.addEventListener("click", event =>{
  
fetch(`/profile/${id}/favoritePets`,{
    method:"POST",
    body:JSON.stringify
})
    location.assign(`/profile/${id}/favoritePets`)
})