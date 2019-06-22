import { Directive, Input, HostListener, Output, EventEmitter } from "@angular/core";


@Directive({
    selector:"[sortBy]"
})
export class SortByDirective{
    sortByVal;
    @Input('sortBy')
    
    public set value(v : string) {
        console.log(v);
        this.sortByVal = v;
    }

    @HostListener('click')
    getValue(){
        console.log(this.sortByVal);
        this.sorted.emit(this.sortByVal);
    }
    @Output() sorted = new EventEmitter();
    
}