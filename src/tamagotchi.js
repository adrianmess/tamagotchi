class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.health = 200;
    this.food = 60;
    this.sleep = 50;
    this.needSleep = false ;
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
      if (this.sleep > 0){
        this.sleep--;
      } else {
        this.needSleep = true;
      }
    }, 1000);
  }

  sleeping() {
    setInterval (() => {
      while (this.sleep < 50) {
        this.sleep +=1;
      }  
        this.needSleep = false;
      }, 1000);
    return this.sleep;
  }

  setFood(){
    setInterval(() => {
      this.food--;
    }, 1000);
    }
  addFood(){
    this.food+=30;
  }

  // play(){
  //   this.play;
  // }
}

export {Tamagotchi};
