const dogBreedInput = document.querySelector("#breed-info")
const dogBreedBtn = document.querySelector("#dog-breed-btn")
//grabs dog breed name


dogBreedBtn.addEventListener("click",event => {
    event.preventDefault();
    const dogBreed = dogBreedInput.value;
    
   location.assign(`/breeds/${dogBreed}`)
})


