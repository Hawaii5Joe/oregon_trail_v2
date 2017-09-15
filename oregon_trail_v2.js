(function () {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = /** @class */ (function () {
        function Traveler(name, food, isHealthy) {
            if (food === void 0) { food = getRandomIntInclusive(0, 100); }
            if (isHealthy === void 0) { isHealthy = true; }
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }
        Traveler.prototype.hunt = function () {
            if (Math.random() > .5) {
                this.food += 100;
            }
            return this.food;
        };
        Traveler.prototype.eat = function () {
            if (this.food < 20) {
                this.isHealthy = false;
            }
            else {
                this.food -= 20;
            }
            return this.isHealthy;
        };
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = /** @class */ (function () {
        function Wagon(capacity, passengerArray) {
            if (passengerArray === void 0) { passengerArray = []; }
            this.capacity = capacity;
            this.passengerArray = passengerArray;
        }
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.passengerArray.length < this.capacity) {
                this.passengerArray.push(traveler);
                return "added";
            }
            else {
                return "sorry";
            }
        };
        Wagon.prototype.isQuarantined = function () {
            for (var _i = 0, _a = this.passengerArray; _i < _a.length; _i++) {
                var passenger = _a[_i];
                if (passenger.isHealthy == false) {
                    return true;
                }
                return false;
            }
        };
        Wagon.prototype.getFood = function () {
            var food_total = 0;
            for (var i = 0; i < this.passengerArray.length; i++) {
                food_total += this.passengerArray[i].food;
            }
            return food_total;
        };
        return Wagon;
    }());
    // Traveler test
    // let traveler1 = new Traveler(50, "bob", true);
    // let traveler2 = new Traveler(50, "rob", false);
    // console.log(traveler1);
    // console.log(traveler1.eat());
    // console.log(traveler1.hunt());
    // Wagon test
    // let wagon1 = new Wagon(4,[traveler1]);
    // console.log(wagon1);
    // console.log(wagon1.addPassenger(traveler2));
    // console.log(wagon1.isQuarantined());
    // console.log(wagon1.getFood());
    // Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    var ant = new Traveler("ant");
    var joe = new Traveler("joe");
    var elliot = new Traveler("elliot");
    var susanne = new Traveler("susanne");
    var liz = new Traveler("liz");
    // Create wagon with an empty passenger list and a capacity of 4.
    var wagon2 = new Wagon(4);
    // Make 3 of 5 the travelers eat by calling their eat methods
    console.log(ant.eat());
    console.log(joe.eat());
    console.log(elliot.eat());
    // Make the remaining 2 travelers hunt
    console.log(susanne.hunt());
    console.log(liz.hunt());
    // Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    // * of attempting to be being added to the wagon using the wagons addPassenger method.
    var travelerArray = [ant, joe, elliot, susanne, liz];
    travelerArray.forEach(function (person) {
        if (Math.random() > .5) {
            console.log(wagon2.addPassenger(person));
        }
    });
    // Run the isQuarantined method for the wagon
    console.log(wagon2.isQuarantined());
    // Run the getFood method for the wagon
    console.log(wagon2.getFood());
})();
