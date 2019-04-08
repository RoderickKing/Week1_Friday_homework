myFunctions = {
  // Write your functions here

  getName(petShop) {
    return petShop.name;
  },
  getTotalCash(petShop) {
    return petShop.admin.totalCash;
  },
   addOrRemoveCash(petShop, amount) {
     petShop.admin.totalCash += amount;
   },
   getPetsSold(petShop){
     return petShop.admin.petsSold;
   },
   increasePetsSold(petShop, sold){
     petShop.admin.petsSold += sold;
   },
   getStockCount(petShop){
     return petShop.pets.length;
   },
   getPetsByBreed(petShop, pet_breed) {
     let counter = 0;
     for (var pet of petShop.pets) {
       if (pet.breed === pet_breed) {
         counter ++;
       }
     }
     return counter;
   },
   getPetByName(petShop, pets_name) {
     for (var pet of petShop.pets) {
       if (pet.name === pets_name) {
         return pet;
       }
     }
     return undefined;
   },
  removePetByName(petShop, pets_name){
    for(var i = petShop.pets.length-1; i >= 0; i--) {
      if (petShop.pets[i].name === pets_name){
        petShop.pets.splice(i);
      }
    }
  },
  addPetToStock(petShop, newPet){
    petShop.pets.push(newPet);
  },
  getCustomersCash(customer) {
    return customer.cash;
  },
  getCustomersCashTotal(customers){
    var total = 0;
    for(var i = 0; i < customers.length; i++){
        total += customers[i].cash;
    }
    return total;
  },
  removeCustomerCash(customer, amount) {
    customer.cash = customer.cash - amount;
  },

  getCustomerPetCount(customer){
      return customer.pets.length;
  },
  addPetToCustomer(customer, newPet) {
    customer.pets.push(newPet);
  },
  customerCanAffordPet(customers, newPet){
    if (customers.cash >= newPet.price){
      return true; }
      else {
        return false; }
  },
  sellPetToCustomer(petShop, pet, customer){
// Bizzarely these extensions were much easier than the rest !
// It's all about pluging in the existing routines just written.
// The most important thing to note, is that the pet
// object must be defined to do any operations on it. 


  if (pet !== undefined){
    if (myFunctions.customerCanAffordPet(customer, pet)){
      myFunctions.removeCustomerCash(customer, pet.price);
      myFunctions.addOrRemoveCash(petShop, pet.price);
      myFunctions.addPetToCustomer(customer, pet);
      myFunctions.removePetByName(petShop, pet.name)
      myFunctions.increasePetsSold(petShop, 1);
    }
  }
  },
};

module.exports = myFunctions;
