


async function handleSubmit(event) {
    event.preventDefault();
    const petType = document.querySelector("select[name='petType']").value;
    const homeType = document.getElementById("house_size").value
    const petSize = document.getElementById("pet_size").value
    const otherDogs = document.getElementById("good_with_dogs").value
    const dogAge = document.getElementById("pet_age").value
    const otherCats = document.getElementById("good_with_cats").value
    const otherKids = document.getElementById("good_with_children").value
    const spayed = document.getElementById("spayed").value
    const specialNeeds = document.getElementById("special_needs").value
    await fetch("/api/adoptable", {
        method:"GET",
        headers:{ "Content-Type":"application/json"}
    }).then(res => res.json())
    .then(data => {
            for (let i = 0; i < data.length; i++) {
            const pets = data[i];
    //    console.log(pets)
            if(pets.type === petType && pets.house_size === homeType && pets.size === petSize && pets.age === dogAge && `${pets.good_with_dogs}` === otherDogs && `${pets.good_with_cats}` === otherCats && `${pets.good_with_children}` === otherKids && `${pets.spayed}` === spayed && `${pets.special_needs}` === specialNeeds) {
                console.log(pets)
            }
        }
    })
    
}

document.querySelector("#pet-preferences").addEventListener("submit", handleSubmit)

const preferenceBtn = document.querySelector("#preference-btn")

// preferenceBtn.addEventListener("click", event =>{
//     handleSubmit()
//     event.preventDefault();
//     location.assign(`/adopt/preferences`)
// })