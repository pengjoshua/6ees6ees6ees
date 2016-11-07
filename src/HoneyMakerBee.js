import Bee from './Bee'

class HoneyMakerBee {
  // TODO..
  constructor() {
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
};

HoneyMakerBee.prototype = new Bee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

export default HoneyMakerBee;