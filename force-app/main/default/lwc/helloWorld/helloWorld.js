import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    /***Data binding****/
    fullName = "Zero to Hero";
    title = "LWC";

    handleChange(event){
        this.title = event.target.value;
    }

    /***Track property***/
   //make a copy of the object or array to update it
    address = {
        city:"Melbourne",
        postalCode:"3008",
        country:"Australia"
    }
    trackHandler(event){
        this.address = {...this.address, "city":event.target.value};
    }

    /***Getters***/
    users = ["Fred", "Smith", "Barni"];
    num1 = 23;
    num2 = 50;

    get firstName() {
        return this.users[0].toUpperCase();
    }

    get multiplication() {
        return this.num1 * this.num2;
    }
}