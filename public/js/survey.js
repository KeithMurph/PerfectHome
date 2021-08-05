document.getElementById("petTypeBtn").addEventListener("click", function() {
    petParams.push(type.value)

    console.log(petParams)
});

document.getElementById("homeTypeBtn").addEventListener("click", function() {
    petParams.push(house_size.value)

    console.log(petParams)
});

document.getElementById("yardTypeBtn").addEventListener("click", function() {
   petParams.push(has_yard.value)

    console.log(petParams)
});

document.getElementById("otherDogBtn").addEventListener("click", function() {
    petParams.push(good_with_dogs.value)

    console.log(petParams)
});

document.getElementById("otherCatBtn").addEventListener("click", function() {
    petParams.push(good_with_cats.value)

    console.log(petParams)
});

document.getElementById("childrenBtn").addEventListener("click", function() {
    petParams.push(good_with_children.value)
    console.log(petParams)
});


document.getElementById("petSizeBtn").addEventListener("click", function() {
   petParams.push(size.value)

    console.log(petParams)
});

document.getElementById("petAgeBtn").addEventListener("click", function() {
   petParams.push(age.value)

    console.log(petParams)
});

document.getElementById("clawedBtn").addEventListener("click", function() {
   petParams.push(has_claws.value)

    console.log(petParams)
});

document.getElementById("spayedBtn").addEventListener("click", function() {
   petParams.push(spayed.value)
    console.log(petParams)
});

document.getElementById("specialBtn").addEventListener("click", function() {
    petParams.push(special_needs.value)

    console.log(petParams)
});

var petParams = [];

console.log(petParams);