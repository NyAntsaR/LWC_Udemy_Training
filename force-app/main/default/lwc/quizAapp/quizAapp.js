import { LightningElement } from 'lwc';

export default class QuizAapp extends LightningElement {
    myQuestions = [
        {
            id:"Question 1",
            question:"Which one of the following is not a template loop?",
            answers: {
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correcteAnswer:"c"
        },

        {
            id:"Question 2",
            question:"Which of these files is invalid LWC component folder?",
            answers: {
                a:".svg",
                b:"apex",
                c:".js"
            },
            correcteAnswer:"b"
        },

        {
            id:"Question 3",
            question:"Which one of the following is not a directive",
            answers: {
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correcteAnswer:"c"
        }
    ];
    //store the selected value in an object
    selected = {};
    //count correct answer
    correctAnswers = 0;
    //show result 
    isSubmitted = false;

    changeHandler(event){
        const {name, value} = event.target;
        this.selected = {...this.selected, [name]:value};
    };

    handleSubmit(event) {
        event.preventDefault();
        const correct = this.myQuestions.filter(items=>this.selected[items.id] === items.correcteAnswer);
        this.correctAnswers = correct.length;
        this.isSubmitted = true;
    }

    handleReset() {
        this.template.querySelector('form').reset();
        this.correctAnswers = 0;
        this.isSubmitted = false;
    }

    get allAreNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }

    get isScoredFull(){
        return `slds-text-heading_large slds-var-m-bottom_medium ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`;
    }
}