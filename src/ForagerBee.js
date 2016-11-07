import Bee from './Bee'

class ForagerBee {
  // TODO..
  constructor() {
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
};

ForagerBee.prototype = new Bee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}

ForagerBee.prototype.constructor = ForagerBee;

export default ForagerBee;