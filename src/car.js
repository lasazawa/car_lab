function Car(make, model, year, color)  {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}


Car.prototype.previous_owners = [];

Car.prototype.current_owner = "manufacturer";

Car.prototype.sale = function(newOwner) {
//changes current owner and adds current owner to previous owners array
    Car.prototype.current_owner = newOwner;
    Car.prototype.previous_owners.push(newOwner);
};

//updates color if this function is called
Car.prototype.paint = function(newColor) {
    this.color = newColor;
};

//default car to off; turn on/off by calling start/off function
Car.prototype.state = "off";
Car.prototype.start = function() {
    Car.prototype.state = "on";
};
Car.prototype.off = function() {
    Car.prototype.state = "off";
};

Car.prototype.park = function() {
    if (Car.prototype.state === "off") {
        console.log("parked!");
        return true;
    }
};

Car.prototype.drive = function(destination) {
    if(Car.prototype.state === "on") {
        console.log("Driving to pick up " + destination);
    }
};

Car.prototype.passengers = [];

Car.prototype.pickup = function(name) {
    if(Car.prototype.state === "on"){
        console.log("Driving to pick up " + name);
        Car.prototype.passengers.push(name);
    }
};

Car.prototype.dropoff = function (name) {
    if(Car.prototype.state === "on" && Car.prototype.passengers.indexOf(name)!== -1) {
            Car.prototype.passengers.splice(Car.prototype.passengers.indexOf(name), 1);
        }
    };


module.exports = Car;

