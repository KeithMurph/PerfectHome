const dogBreedInput = document.querySelector("#breed-info")
const dogBreedBtn = document.querySelector("#dog-breed-btn")
//grabs dog breed name


dogBreedBtn.addEventListener("click",event => {
    event.preventDefault();
    const dogBreed = dogBreedInput.value;
    fetch(`/breeds/${dogBreed}`,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
          },
    }).then(response => response.json())
    .then(data =>{
        console.log(data)
        
    }).catch(err =>{
        console.log(err)
    })
 
})


