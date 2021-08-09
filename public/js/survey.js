// Pet type Event listeners

document.getElementById("petTypeBtn").addEventListener("click", function() {
    
    
    
    petParams.push(type.value)

    if(type.value === "type:Dog"){
    document.getElementById("typeConfirm").innerText="🐕Dog"
    }else{
        document.getElementById("typeConfirm").innerText="😺Cat"
    }


    
});

// house type Listener/confirm

document.getElementById("homeTypeBtn").addEventListener("click", function() {
    petParams.push(house_size.value)

    if(house_size.value === "house_size:Small"){
    document.getElementById("houseTypeConfirm").innerText="🌇Apartment"
    }else{
        document.getElementById("houseTypeConfirm").innerText="🏡House"

    }

    
});

// yard type Listener/confirm 

document.getElementById("yardTypeBtn").addEventListener("click", function() {
   petParams.push(has_yard.value)

   if(has_yard.value === "has_yard:true"){
       document.getElementById("yardTypeConfirm").innerText="🌳Yard"
   }else {
       document.getElementById("yardTypeConfirm").innerText="🔑No yard"
   }

   
});

// good with dogs Listener/confirm

document.getElementById("otherDogBtn").addEventListener("click", function() {
    petParams.push(good_with_dogs.value)

    if(good_with_dogs.value === "good_with_dogs:true"){
        document.getElementById("goodWithDogsConfirm").innerText="🐶🐶 I have dog(s)"
    }else{
        document.getElementById("goodWithDogsConfirm").innerText="🤷‍♀️ I need a dog!"
    }

   
});

// good with cats Listener/confirm

document.getElementById("otherCatBtn").addEventListener("click", function() {
    petParams.push(good_with_cats.value)

    if(good_with_cats.value === "good_with_cats:true"){
        document.getElementById("goodWithCatsConfirm").innerText="🐱🐱‍🚀 I have cat(s)"
    }else{
        document.getElementById("goodWithCatsConfirm").innerText="🤷‍♀️ I need a cat!"
    }

    
});

// good with children Listener/confirm

document.getElementById("childrenBtn").addEventListener("click", function() {
    petParams.push(good_with_children.value)

    if(good_with_children.value === "good_with_children:true"){
        document.getElementById("goodWithChildrenConfirm").innerText="👶🧒 I have children"
    }else{
        document.getElementById("goodWithChildrenConfirm").innerText="🎅 I don't have children"
    }

    
});

// pet size Listener/confirm

document.getElementById("petSizeBtn").addEventListener("click", function() {
   petParams.push(size.value)

   if(size.value === "size:Large"){
       document.getElementById("sizeConfirm").innerText="🐳 I'll take your largest pet please"
   } else if(size.value === "size:Medium"){
    document.getElementById("sizeConfirm").innerText="🐕 Not too big not too small"
} else if(size.value === "size:Small"){
    document.getElementById("sizeConfirm").innerText="🐈 Nice small pet"
} else{
    document.getElementById("sizeConfirm").innerText="🦕 I'll take anything"
} 

    
});


// pet age Listener/confirm

document.getElementById("petAgeBtn").addEventListener("click", function() {
   petParams.push(age.value)

   if(age.value === "age:Baby"){
    document.getElementById("ageConfirm").innerText="🐱🐶 I want a puppy/kitten"
} else if(age.value === "age:Young"){
 document.getElementById("ageConfirm").innerText="🐱🐶 Young just not a puppy/kitten"
} else if(age.value === "age:Adult"){
 document.getElementById("ageConfirm").innerText="🐶🐱 I want a full grown pet"
} else if(age.value === "age:Senior"){
 document.getElementById("ageConfirm").innerText="👴 I'll give a senior pet a home"
} else{
    document.getElementById("ageConfirm").innerText="🦕 I'll take anything"
   } 

    
});

// cat claw Listener/confirm
// Does your new pet need to be declawed????


document.getElementById("clawedBtn").addEventListener("click", function() {
   petParams.push(has_claws.value)

   if(has_claws.value === "has_claws:true"){
    document.getElementById("clawConfirm").innerText="💩 Yes but I feel horible"
}else{
    document.getElementById("clawConfirm").innerText="💅 Please don't declaw your pets!"
}

    
});

// pet spayed/neutered Listener/confirm
document.getElementById("spayedBtn").addEventListener("click", function() {
   petParams.push(spayed.value)

   if(spayed.value === "spayed:true"){
    document.getElementById("spayedConfirm").innerText="🐾Yes!"
}else{
    document.getElementById("spayedConfirm").innerText="🐾No but I will consider it"
}

   
    
});

// pet special needs Listener/Conform
document.getElementById("specialBtn").addEventListener("click", function() {
    petParams.push(special_needs.value)

    if(special_needs.value === "special_needs:true"){
        document.getElementById("specialConfirm").innerText="👼 Sure I'd love to help a pet in need"
    }else{
        document.getElementById("specialConfirm").innerText="🐱‍🚀 I've got enough on my plate"
    }
    
    console.log(petParams);

});

// petParams array rules
var petParams = [];

// function uniqueElements(petParams) {
//     const unique=[];
//     petParams.each((type.value)=>{
//         if(!unique.includes(type.value)){
//             unique.push(type.value)
//         }
//     })
//     return unique;
// }






console.log(petParams);