// this syntax (seperate variables with comma and remove the following var
//is common when you have more than one variable being declared at a time

var Car = require('../src/car.js'),
expect = require('chai').expect;

var myCar;

describe('Car', function(){

  beforeEach(function(){
    // create a new myCar object each time
    myCar = new Car("BMW", "328i", 2014, "black");
  });

  describe('#year', function(){
    //think about using the new Date() and getFullYear functions
    var x = new Date().getFullYear();
    it('should be the current year', function(){
      expect(myCar.year).to.equal(x);
    });
  });

  describe('#state', function(){
    it('should initially be off', function(){
      expect(myCar.state).to.equal("off");
    });
  });

  describe('#previousOwners', function(){
    it('should initially be empty', function(){
      expect(myCar.previous_owners).to.eql([]);
    });
  });

  describe('#curretOwner', function(){
    it('should initially be manufacturer', function(){
      expect(myCar.current_owner).to.equal("manufacturer");
    });
  });

  describe('#passengers', function(){
    it('should initially be empty', function(){
      expect(myCar.passengers).to.eql([]);
    });
  });

  describe('#sale', function(){

    it('should move currentOwner to previousOwners array', function(){
      myCar.sale("Larry");
      expect(myCar.previous_owners).to.eql(["Larry"]);
    });

    it('should update currentOwner with the new owner', function(){
      myCar.sale("Larry");
      expect(myCar.current_owner).to.equal("Larry");
    });
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){
      myCar.paint("blue");
      expect(myCar.color).to.equal("blue");
    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){
      myCar.start();
      expect(myCar.state).to.equal("on");
    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){
      myCar.off();
      expect(myCar.state).to.equal("off");
    });
  });

  describe('#park', function(){
    it('should make sure to only work when the car is off', function(){
      expect(myCar.park()).to.equal(true);
    });
  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array if car is on', function(){
      myCar.start();
      myCar.pickup("Anna");
      expect(myCar.passengers).to.eql(["Anna"]);
    });

    it('should not modify the passengers array if car is off', function(){
      myCar.off();
      myCar.pickup("Lauren");
      expect(myCar.passengers.length).to.equal(1);
    });
  });

  describe('#dropOff', function(){
    it('should remove passenger from the passengers array if car is on', function(){
      myCar.start();
      myCar.dropoff("Anna");
      expect(myCar.passengers.length).to.be.empty;
    });

    it('should leave passenger in the passengers array if car is off', function(){
      myCar.start();
      myCar.pickup("Elie");
      myCar.pickup("Ilias");
      console.log(myCar.passengers)
      myCar.off();
      myCar.dropoff("Lauren");
      expect(myCar.passengers.length).to.equal(2);
    });
  });

});


