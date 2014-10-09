function Car(make, model, year, color)  {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.state = "off";
    this.previous_owners = [];
    this.passengers = [];
}

// ownership, sell
Car.prototype.current_owner = "manufacturer";
Car.prototype.sale = function(newOwner) {
    Car.prototype.current_owner = newOwner;
    this.previous_owners.push(newOwner);
};

//updates color if this function is called
Car.prototype.paint = function(newColor) {
    this.color = newColor;
};

//default car to off; turn on/off by calling start/off function
Car.prototype.start = function() {
    this.state = "on";
};
Car.prototype.off = function() {
    this.state = "off";
};

Car.prototype.park = function() {
    if (this.state === "off") {
        console.log("parked!");
        return true;
    }
};
Car.prototype.drive = function(destination) {
    if(this.state === "on") {
        console.log("Driving to pick up " + destination);
    }
};

Car.prototype.pickup = function(name) {
    if(this.state === "on"){
        console.log("Driving to pick up " + name);
        this.passengers.push(name);
    }
};
Car.prototype.dropoff = function (name) {
    if(this.state === "on" && this.passengers.indexOf(name)!== -1) {
            this.passengers.splice(this.passengers.indexOf(name), 1);
        }
    };


module.exports = Car;

