class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, res, pow) {
    super(name, cost);
    this.resilience = res;
    this.power = pow;
  }
  attack(target){
    if(target instanceof Unit){
        target.resilience -= this.power;
        console.log("New resilience for"+" "+target.name+" is"+" "+target.resilience+" after reducing "+this.power+" power");
    }
    else{
        throw new Error( "Target must be a unit!" );
    }
  }
}

class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  play(target) {
    if (target instanceof Unit) {
      console.log(this.text +" "+ target.name +" "+ this.stat +" "+ "by" +" "+ this.magnitude);
    }
    else{
         throw new Error( "Target must be a unit!" );
    }
  }
}

let unit1 = new Unit("Red Belt Ninja",3,4,3);
let unit2 = new Unit("Black Belt Ninja",4,4,5);
let effect1 = new Effect("Hard Algorith",2,"increase","resilience",3);
let effect2 = new Effect("Unhandled Promise Rejection",1,"reduce","resilience",2);
let effect3 = new Effect("Pair Programming",3,"increase","power",3);
effect1.play(unit1);
effect2.play(unit1);
effect3.play(unit1);
unit1.attack(unit2);