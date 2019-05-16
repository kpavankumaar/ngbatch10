import { EngineDef } from './engine';
class Car extends EngineDef.PetrolEngine{

}
let audi = new Car();
audi.engineType

class SuvCar extends EngineDef.DesielEngine {

}
let venue = new SuvCar();
venue.engineType