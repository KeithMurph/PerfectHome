// Pet type Event listeners

document.getElementById("petTypeBtn").addEventListener("click", function() {
    petParams.push(type.value)

    if(type.value === "Dog"){
    document.getElementById("typeConfirm").innerText="🐕Dog"
    }else{
        document.getElementById("typeConfirm").innerText="😺Cat"
    }

    console.log(petParams)
});

// house type Listener/confirm

document.getElementById("homeTypeBtn").addEventListener("click", function() {
    petParams.push(house_size.value)

    if(house_size.value === "Apartment"){
    document.getElementById("houseTypeConfirm").innerText="🌇Apartment"
    }else{
        document.getElementById("houseTypeConfirm").innerText="🏡House"

    }

    console.log(petParams)
});

// yard type Listener/confirm 

document.getElementById("yardTypeBtn").addEventListener("click", function() {
   petParams.push(has_yard.value)

   if(has_yard.value === "true"){
       document.getElementById("yardTypeConfirm").innerText="🌳Yard"
   }else {
       document.getElementById("yardTypeConfirm").innerText="🔑No yard"
   }

    console.log(petParams)
});

// good with dogs Listener/confirm

document.getElementById("otherDogBtn").addEventListener("click", function() {
    petParams.push(good_with_dogs.value)

    if(good_with_dogs.value === "true"){
        document.getElementById("goodWithDogsConfirm").innerText="🐶🐶 I have dog(s)"
    }else{
        document.getElementById("goodWithDogsConfirm").innerText="🤷‍♀️ I need a dog!"
    }

    console.log(petParams)
});

// good with cats Listener/confirm

document.getElementById("otherCatBtn").addEventListener("click", function() {
    petParams.push(good_with_cats.value)

    if(good_with_cats.value === "true"){
        document.getElementById("goodWithCatsConfirm").innerText="🐱🐱‍🚀 I have cat(s)"
    }else{
        document.getElementById("goodWithCatsConfirm").innerText="🤷‍♀️ I need a cat!"
    }

    console.log(petParams)
});

// good with children Listener/confirm

document.getElementById("childrenBtn").addEventListener("click", function() {
    petParams.push(good_with_children.value)

    if(good_with_children.value === "true"){
        document.getElementById("goodWithChildrenConfirm").innerText="👶🧒 I have children"
    }else{
        document.getElementById("goodWithChildrenConfirm").innerText="🎅 I don't have children"
    }

    console.log(petParams)
});

// pet size Listener/confirm

document.getElementById("petSizeBtn").addEventListener("click", function() {
   petParams.push(size.value)

   if(size.value === "Large"){
       document.getElementById("sizeConfirm").innerText="🐳 I'll take your largest pet please"
   } else if(size.value === "Medium"){
    document.getElementById("sizeConfirm").innerText="🐕 Not too big not too small"
} else if(size.value === "Small"){
    document.getElementById("sizeConfirm").innerText="🐈 Nice small pet"
} else{
    document.getElementById("sizeConfirm").innerText="🦕 I'll take anything"
} 

    console.log(petParams)
});


// pet age Listener/confirm

document.getElementById("petAgeBtn").addEventListener("click", function() {
   petParams.push(age.value)

   if(age.value === "Baby"){
    document.getElementById("ageConfirm").innerText="🐱🐶 I want a puppy/kitten"
} else if(age.value === "Young"){
 document.getElementById("ageConfirm").innerText="🐱🐶 Young just not a puppy/kitten"
} else if(age.value === "Adult"){
 document.getElementById("ageConfirm").innerText="🐶🐱 I want a full grown pet"
} else if(age.value === "Senior"){
 document.getElementById("ageConfirm").innerText="👴 I'll give a senior pet a home"
} else{
    document.getElementById("ageConfirm").innerText="🦕 I'll take anything"
   } 

    console.log(petParams)
});

// cat claw Listener/confirm
// Does your new pet need to be declawed????


document.getElementById("clawedBtn").addEventListener("click", function() {
   petParams.push(has_claws.value)

   if(has_claws.value === "true"){
    document.getElementById("clawConfirm").innerText="💩 Yes but I feel horible"
}else{
    document.getElementById("clawConfirm").innerText="💅 Please don't declaw your pets!"
}

    console.log(petParams)
});

// pet spayed/neutered Listener/confirm
document.getElementById("spayedBtn").addEventListener("click", function() {
   petParams.push(spayed.value)

   if(spayed.value === "true"){
    document.getElementById("spayedConfirm").innerText="🐾Yes!"
}else{
    document.getElementById("spayedConfirm").innerText="🐾No but I will consider it"
}

   
    console.log(petParams)
});

// pet special needs Listener/Conform
document.getElementById("specialBtn").addEventListener("click", function() {
    petParams.push(special_needs.value)

    if(special_needs.value === "true"){
        document.getElementById("specialConfirm").innerText="👼 Sure I'd love to help a pet in need"
    }else{
        document.getElementById("specialConfirm").innerText="🐱‍🚀 I've got enough on my plate"
    }

    console.log(petParams)
});

var petParams = [];

console.log(petParams);