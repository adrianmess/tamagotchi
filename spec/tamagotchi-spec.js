import { Tamagotchi } from './../src/tamagotchi.js';

describe('Tamagotchi', function() {
  let gerald;
  beforeEach(function() {
    gerald = new Tamagotchi("Gerald");
    jasmine.clock().install();
    gerald.setHealth();
    gerald.setSleep();
    gerald.setFood();
  });
  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it('Shows current health status of Tamagotchi every second', function() {
    jasmine.clock().tick(1000);
//    console.log(gerald.viewHealth());
    jasmine.clock().tick(1999);
  //  console.log(gerald.viewHealth());
  });

  it('will show sleep after 10 seconds', function() {
    jasmine.clock().tick(10000);
    let currentSleep= gerald.sleep;
    expect(currentSleep).toEqual(40);
  });

  it('will subtract 1 point of food every second', function() {
    jasmine.clock().tick(10000);
    let currentFood = gerald.food;
    expect(currentFood).toEqual(50);
  });

  it('will add 30 points of food', function() {
    jasmine.clock().tick(30000);
    gerald.addFood();
    let currentFood = gerald.food;
    expect(currentFood).toEqual(60);
  });

  it('will regenerate sleep meter', function() {
    jasmine.clock().tick(50000);
    console.log("gerry's sleep level" + gerald.sleep); //sleep is now 49

    gerald.sleeping();
    jasmine.clock().tick(25000);
    console.log("gerry's sleep level" + gerald.sleep);

    jasmine.clock().tick(25001);
    console.log("gerry's sleep level" + gerald.sleep);

    jasmine.clock().tick(50000);
    console.log("gerry's sleep level" + gerald.sleep);

    expect(gerald.sleep).toEqual(50);
  });
});
