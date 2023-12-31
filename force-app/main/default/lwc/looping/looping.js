import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["BMW", "Porsche", "Mercedes", "Rolls Royce"];

    ceoList = [
        {
            id : 1,
            company : "Google",
            name : 'Sundar Pichai'
        },

        {
            id : 2,
            company : "Amazon",
            name : 'Jeff Bezos'
        },

        {
            id : 3,
            company : "Facebook",
            name : 'Mark Zuckerberg'
        },

        {
            id : 4,
            company : "Apple",
            name : 'Tim Cook'
        }
    ];
}