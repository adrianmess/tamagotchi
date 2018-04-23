class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.health = 200;
    this.food = 60;
    this.sleep = 50;
    this.play = 30;
    this.status = "";
  }
  viewHealth() {
      return this.health;
    }

  setHealth() {
    setInterval(() => {
      this.health--;
    }, 1000);
    }

  setSleep() {
    setInterval(() => {
      this.sleep--;
    }, 1000);
  }
  setFood(){
    setInterval(() => {
      this.food--;
    }, 1000);
    }
  addFood(){
    this.food+=30;
  }

  sleeping() {
    setInterval (() => {
      do { this.sleep +=2;
      }
        while (this.sleep < 50)
      }




        console.log("else");
      }
    }, 1000);
    return this.sleep;
  }

  // play(){
  //   this.play;
  // }
}

export {Tamagotchi};
