
/**
 * Created by Josh on 8/28/14.
 */


(function(){     //Self executing function

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


    //Console.log and sumarize all new Dogs

    console.log(" ");
    console.log(" ******** New Dog Kennel Summary ******** ");
    console.log(" ");
    console.log("My Dog is a : ", myDog1.color = " " + myDog1.breed + " called", myDog1.name);  //1st dog
    console.log(" ");
    console.log("My Best Friend's Dog is a : ", myDog2.color = " " + myDog2.breed + " called", myDog2.name); //2nd Dog
    console.log(" ");
    console.log("My Other Friend's Dog is a : ", myDog3.color = " " + myDog3.breed + " called", myDog3.name);  //3rd Dog

})(); //End Wrapper