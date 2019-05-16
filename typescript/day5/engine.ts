export module EngineDef{
    abstract class Engine{
        constructor(public engineType){
        }
    }
    
    export class PetrolEngine extends Engine{
        constructor(){
            super('1000cc')
        }
    }
    
    export class DesielEngine extends Engine{
        constructor(){
            super('1500cc')
        }
    }
    export class BikeEngine extends Engine{
        constructor(){
            super('400cc')
        }
    }
}
