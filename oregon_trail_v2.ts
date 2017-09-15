(function () {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
      }
    // TRAVELER

    //interface describing what attributes and methods a traveler should have
    interface ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        //when implemented, There should be 50% chance to increase the traveler's food by 100.
        //return the travelers new food value
        hunt(): number;

        //when implemented, we should check to see if the traveler has a food supply of 20
        //If they do then we should consume 20 of the available food supply
        //If they don't have 20 food then we should change isHealthy to false
        //return the travelers health after attempting to eat
        eat(): boolean;

    }

    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    class Traveler implements ITraveler {

        food: number;
        name: string;
        isHealthy: boolean;

        constructor( name: string, food: number=getRandomIntInclusive(0,100), isHealthy: boolean=true) {
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }

        hunt() {
            if (Math.random() > .5) {
                this.food += 100;
            }
            return this.food

        }
        eat() {
            if (this.food < 20) {
                this.isHealthy = false;
            }
            else {
                this.food -= 20;
            }

            return this.isHealthy;

        }

    }
    // WAGON

    //interface describing attributes and methods a wagon should have
    interface IWagon {
        capacity: number;
        passengerArray: Traveler[];

        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        addPassenger(traveler: Traveler): string;

        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        isQuarantined(): boolean;

        //Return the total amount of food among all passengers of the wagon.
        getFood(): number;

    }

    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    class Wagon implements IWagon {

        capacity: number;
        passengerArray: Traveler[];

        constructor(capacity: number, passengerArray: Traveler[]=[]) {
            this.capacity = capacity;
            this.passengerArray = passengerArray;
        }

        addPassenger(traveler: Traveler) {
            if (this.passengerArray.length < this.capacity) {
                this.passengerArray.push(traveler);
                return "added";
            } else {
                return "sorry";
            }
        }

        isQuarantined() {
            for (let passenger of this.passengerArray) {
                if (passenger.isHealthy == false) {
                    return true;
                }
                return false;
            }
        }

        getFood() {
            let food_total = 0
            for (let i = 0; i < this.passengerArray.length; i++) {
                food_total += this.passengerArray[i].food
            }
            return food_total;
        }

    }
// Traveler test logging
    // let traveler1 = new Traveler(50, "bob", true);
    // let traveler2 = new Traveler(50, "rob", false);
    // console.log(traveler1);
    // console.log(traveler1.eat());
    // console.log(traveler1.hunt());
    
// Wagon test logging
    // let wagon1 = new Wagon(4,[traveler1]);
    // console.log(wagon1);
    // console.log(wagon1.addPassenger(traveler2));
    // console.log(wagon1.isQuarantined());
    // console.log(wagon1.getFood());
    

// Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    let ant = new Traveler ("ant");
    let joe = new Traveler ("joe");
    let elliot = new Traveler ("elliot");
    let susanne = new Traveler ("susanne");
    let liz = new Traveler ("liz");

// Create wagon with an empty passenger list and a capacity of 4.
    let wagon2 = new Wagon (4);

// Make 3 of 5 the travelers eat by calling their eat methods
    console.log(ant.eat());
    console.log(joe.eat());
    console.log(elliot.eat());

// Make the remaining 2 travelers hunt
    console.log(susanne.hunt());
    console.log(liz.hunt());

    // Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    // * of attempting to be being added to the wagon using the wagons addPassenger method.
    let travelerArray = [ant,joe,elliot,susanne,liz]
    
    travelerArray.forEach(person => {
        if(Math.random()>.5){
       console.log(wagon2.addPassenger(person));
    }
        
    });

    // Run the isQuarantined method for the wagon
    console.log(wagon2.isQuarantined());

    // Run the getFood method for the wagon
    console.log(wagon2.getFood());

})();