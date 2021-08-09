// write to new pet card NAME from form
function magicInputName() {
  var x = document.getElementById("newPetsNameForm").value;
  document.getElementById("newName").innerText = "" + x;
}
// write to new pet card DESCRIPTION from form
function magicInputDescription() {
  var x = document.getElementById("newDescriptionForm").value;
  document.getElementById("newDescription").innerText = "" + x;
}
// write to new pet card PETTYPE from form
document.getElementById("newPetTypeBtn").addEventListener("click", function () {
  if (newPetTypeForm.value === "type:Dog") {
    document.getElementById("newPetType").innerText = "Dog";
  } else {
    document.getElementById("newPetType").innerText = "Cat";
  }
});
// write to new pet card SIZE from form
document.getElementById("newPetSizeBtn").addEventListener("click", function () {
  if (newPetSizeForm.value === "size:Large") {
    document.getElementById("newPetSize").innerText = "Large";
  } else if (newPetSizeForm.value === "size:Medium") {
    document.getElementById("newPetSize").innerText = "Medium";
  } else {
    document.getElementById("newPetSize").innerText = "Small";
  }
});
// write to new pet card AGE from form
function magicInputAge() {
  var x = document.getElementById("newAgeForm").value;
  document.getElementById("newPetAge").innerText = "" + x;
}
// write to new pet card AGERANGE from form
document.getElementById("newPetAgeBtn").addEventListener("click", function () {
  if (newPetAgeForm.value === "age:Baby") {
    document.getElementById("newPetAgeRange").innerText = "Baby";
  } else if (newPetAgeForm.value === "age:Young") {
    document.getElementById("newPetAgeRange").innerText = "Young";
  } else if (newPetAgeForm.value === "age:Adult") {
    document.getElementById("newPetAgeRange").innerText = "Adult";
  } else {
    document.getElementById("newPetAgeRange").innerText = "Senior";
  }
});
// write to new pet card from GOODWITHCHILDREN from form
document
  .getElementById("newChildrenBtn")
  .addEventListener("click", function () {
    if (newGoodWithChildrenForm.value === "good_with_children:true") {
      document.getElementById("newGoodWithChildren").innerText = "Yes";
    } else {
      document.getElementById("newGoodWithChildren").innerText = "No";
    }
  });
// write to new pet card GOODWITHDOGS from form
document.getElementById("newDogBtn").addEventListener("click", function () {
  if (newGoodWithDogsForm.value === "good_with_dogs:true") {
    document.getElementById("newGoodWithDogs").innerText = "Yes";
  } else {
    document.getElementById("newGoodWithDogs").innerText = "No";
  }
});
// write to new pet card GOODWITHCATS from form
document.getElementById("newCatBtn").addEventListener("click", function () {
  if (newGoodWithCatsForm.value === "good_with_cats:true") {
    document.getElementById("newGoodWithCats").innerText = "Yes";
  } else {
    document.getElementById("newGoodWithCats").innerText = "No";
  }
});
// write to new pet card SPAYED from form
document.getElementById("newSpayedBtn").addEventListener("click", function () {
  if (newSpayedForm.value === "spayed:true") {
    document.getElementById("newPetSpayed").innerText = "Yes";
  } else {
    document.getElementById("newPetSpayed").innerText = "No";
  }
});





// post new pet
document.getElementById("postNewPet").addEventListener("click", function () {
 const newPet ={
   name:document.querySelector("#newPetsNameForm").value,
   description:document.querySelector("#newDescriptionForm").value,
   breed:document.querySelector("#newPetsBreed").value,
   type:document.querySelector("#newPetTypeForm").value,
   size:document.querySelector("#newPetSizeForm").value,
   age:document.querySelector("#newPetAgeForm").value,
   good_with_children:document.querySelector("#newGoodWithChildrenForm").value,
   good_with_dogs:document.querySelector("#newGoodWithDogsForm").value,
   good_with_cats:document.querySelector("#newGoodWithCatsForm").value,
   spayed:document.querySelector("#newSpayedForm").value,
   phone_number:document.querySelector("#newPhoneForm").value,
  
   image_url: document.querySelector("#preview").src
 }
 console.log(newPet)
 fetch("/api/adoptable",{
  method:"POST",
  body:JSON.stringify(newPet),
  headers:{
      "Content-Type":"application/json"
  }
}).then(res=>{
  if(res.ok){
      console.log("success")
      res.json().then(data=>{
          location.assign(`/adopt`)
      })
  } else {
      alert("error!")
  }
})
})


var newPetData = {}
