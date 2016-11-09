import Grub from './Grub'

class Bee {
  // TODO..
  constructor() {
    Grub.call(this);
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
}

Bee.prototype = Object.create(Grub.prototype);

Bee.prototype.constructor = Bee;

export default Bee;