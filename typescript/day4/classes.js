var Chip = /** @class */ (function () {
    function Chip(material) {
        this.material = material;
        // this.material = type;
    }
    // material:string;
    Chip.prototype.prepareProcessor = function () {
    };
    return Chip;
}());
var processor = new Chip('polycarbonate');
processor.material;
var Laptop = /** @class */ (function () {
    function Laptop() {
    }
    return Laptop;
}());
var Mobile = /** @class */ (function () {
    function Mobile() {
    }
    return Mobile;
}());
