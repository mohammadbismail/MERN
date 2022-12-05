class Ninja {
  constructor(myName, myHealth = 0, mySpeed = 3, myStrength = 3) {
    this.name = myName;
    this.health = myHealth;
    this.speed = mySpeed;
    this.strength = myStrength;
  }
  sayName() {
    console.log(this.name);
  }
  showStatus() {
    console.log(
      "Name is: " +
        this.name +
        "\nStrength is: " +
        this.strength +
        "\nSpeed is: " +
        this.speed +
        "\nHealth is: " +
        this.health
    );
  }
  drinkSake() {
    this.health += 10;
  }
}

class Sensi extends Ninja {
  constructor(myName) {
    super(myName, 200, 10, 10);
    this.wisdom = 10;
  }
  speakWisdom() {
    super.drinkSake();
    console.log(
      "What one programmer can do in one month, two programmers can do in two months."
    );
  }
}

// const ninja1 = new Ninja("Ninja1");
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStatus();

const dojo1 = new Sensi("dojo1");
dojo1.speakWisdom();
dojo1.showStatus();
