class Ninja {
  constructor(myName) {
    this.name = myName;
    this.health = 0;
    this.speed = 3;
    this.strength = 3;
  }
  sayName() {
    console.log(this.name);
  }
  showStatus() {
    console.log(
      "Name is: " +
        this.name+
        "\nStrength is: " +
        this.strength +
        "\nSpeed is: " +
        this.speed +
        "\nHealth is: " +
        this.health
    );
  }
  drinkSake() {
    this.health = +10;
  }
}

const ninja1 = new Ninja("Ninja1");
ninja1.sayName();
ninja1.showStatus();
ninja1.drinkSake();
ninja1.showStatus();