const MAX = 800;
// container is connected to the html element here
let container = document.getElementById('square-container');

class Square{
    constructor(x,y){

        this.div = document.createElement('div');
        //styling of div
        this.div.classList.add('square');
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.style.position = `absolute`;

        //using method
        this.updateColor();


        //Add an event listener to the div upon action click.
        //Upon action click, use an arrow function to bind "this"
        //Upon action click, it runs the code in the arrow function
        this.div.addEventListener('click', () => {
            this.updateLocation();
            this.updateColor();

        });

        // adding the div we created to the container.
        container.appendChild(this.div);

    }

    //methods 
    updateLocation(){
    let xVal = randomVal(0,MAX);
    let yVal = randomVal(0,MAX);
    this.div.style.left = `${xVal}px`;
    this.div.style.top = `${yVal}px`;
    }

    updateColor(){
        let randomColor = `rgb(${randomVal(0,255)},${randomVal(0,255)},${randomVal(0,255)})`;
        this.div.style.backgroundColor = randomColor;
    }

    

}


let sqButton = document.getElementById('sq-button');
sqButton.addEventListener('click', insertSquare);


function insertSquare(){
    let xVal = randomVal(0,MAX);
    let yVal = randomVal(0,MAX);
    let sq = new Square(xVal,yVal);
}

function randomVal(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}