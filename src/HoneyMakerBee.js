import Bee from './Bee'

class HoneyMakerBee {
  // TODO..
  constructor() {
    Bee.call(this);
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}

export default HoneyMakerBee;