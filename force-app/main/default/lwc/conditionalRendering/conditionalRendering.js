import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible = false;
    name;

    handleClick(){
        this.isVisible = true;
    }

    handleInputChange(event){
        this.name = event.target.value;
    }
    
    get isHello(){
        return this.name === "Hello";
    }
}