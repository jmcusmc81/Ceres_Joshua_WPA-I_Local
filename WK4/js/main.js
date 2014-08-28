
/**
 * Created by Josh on 8/28/14.
 */


function(){     //Self executing function

    //Create !st Instance of the dog object and assign it myDog variable and running Constructor Function
    var myDog1 = new Dog();
    myDog1.name = "Max";
    myDog1.color = "Brown";
    myDog1.breed = "German Shepard";
    myDog1.bark("Woof! Woof! Wooff!!")


    //Setting up another instance: My Friend's Dog - 2nd Dog
    var myDog2 = new Dog();
    myDog2.name = "Samantha";
    myDog2.color = "Black and White";
    myDog2.breed = "Poodle";
    myDog2.bark("Arf-f Arff!")


    //Setting another instance: My other Friend's Dog - 3rd Dog
    var myDog3 = new Dog("Fido", "Brown", "Pitbull");
    myDog3.bark("Growl!!! Grrr!")

}