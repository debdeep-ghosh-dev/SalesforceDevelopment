import { LightningElement, track} from 'lwc';

export default class ShapeCalculator extends LightningElement {
    @track showShapeButtons = true;
    @track showRectangleInputs = false;
    @track showCircleInputs = false;
    @track showSquareInputs = false;
    @track squareAreaOutput;
    @track rectangleAreaOutput;
    @track circleAreaOutput;
    @track length;
    @track breadth;
    @track radius;
    @track side;

    handleSideChange(event){
        this.side = parseInt(event.target.value);
        }

    handleLengthChange(event){
        this.length = parseInt(event.target.value);
    }

    handleWidthChange(event){
        this.breadth = parseInt(event.target.value);
    }

    handleRadiusChange(event){
        this.radius = parseInt(event.target.value);
    }
    
    handleSquareClick(){
        this.showSquareInputs = true;
        this.showShapeButtons = false;
        this.showRectangleInputs = false;
        this.showCircleInputs = false;
        
    }

    handleRectangleClick(){
        this.showRectangleInputs = true;
        this.showShapeButtons = false;
        this.showSquareInputs = false;
        this.showCircleInputs = false;
        
    }

    handleCircleClick(){
        this.showCircleInputs = true;
        this.showShapeButtons = false;
        this.showSquareInputs = false;
        this.showRectangleInputs = false;
        

    }

    calculateSquareArea(){
        this.squareAreaOutput = 'Area of Square is: ' + this.side * this.side;
    }

    calculateRectangleArea(){
        this.rectangleAreaOutput = 'Area of Rectangle is: ' + this.length * this.breadth;
    }  

    calculateCircleArea(){
        this.circleAreaOutput = 'Area of Circle is: ' + 3.14 * this.radius * this.radius;
    }

    handleBack(){
        this.showShapeButtons = true;
        this.showSquareInputs = false;
        this.showRectangleInputs = false;
        this.showCircleInputs = false;
    }
}
