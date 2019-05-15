interface product{
    shape:string;
    weight:string;
    details:()=>void;
}
interface brand{
    brandName:string;
    estd:string;
}
class Chip {
    // material:string;
    prepareProcessor(){
        console.log(this.material)
    }   
    constructor(protected material){
        // this.material = type;
    }
    
    public set materialProp(v : string) {
        this.material = v;
    }
    
    public get getMaterialValue() : string {
        return this.material;
    }
}

let processor = new Chip('polycarbonate')
processor.materialProp = 'metal';
console.log(processor.getMaterialValue);
class Laptop extends Chip implements product {
    shape:string;
    weight = '3kilos';
    material;
    constructor(){
        super('i5');
    }
    details(){
        this.shape = 'yoga';
        this.material
    }
}
class Mobile implements product,brand{
    shape:string;
    weight:string;
    details:()=>void;
    brandName:string;
    estd:string;
}

// instances 
let dell = new Laptop();
dell.details();
console.log(dell.shape);
