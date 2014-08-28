/**
 * Created by Josh on 8/28/14.
 */


//Step 1 : Setup Constructor Function

function Dog(n, c, b){
    console.log("New Dg Added to Kennel!");
    this.name = n; //dog's name
    this.color = c;  //dog's color
    this.breed = b;  //dog's breed

}


//Step 2: Add more Functionality to "Dog" Constructor Function by using Prototype Property

Dog.prototype.bark =  function(barkingsound){
    console.log(this.name + " says: " + barkingsound);
    var dogsound = barkingsound;
    return dogsound;
}