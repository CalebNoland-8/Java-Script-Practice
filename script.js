
var fruit = ['white', 'black', 'custom'];
//var newColors = new Array('white', 'black', 'custom');

//colors[2] = 'beige';

var el = document.getElementById('array');
el.textContent = fruit[0];


var car = {
    wheels: 4,
    doors: 2,
    engineVGrade: 8,
    color: ['Orange', 'White', 'Red'
    ],

    carModel: function(color){
        if(color == 'Orange'){
            return 'McClaren'
        }else if(color == 'White'){
            return 'Ram'
        }else if(color == 'Red'){
            return 'Jeep'
        }else{
            return "IDK"
        }
    }

}

var el1 = document.getElementById('color');
el1.textContent = car.color[0];

var el2 = document.getElementById('model');
el2.textContent = car.carModel(car.color[0]);


var input = prompt("Do an input dum dum");
var el3 = getElementById('test');
el3.textContent = input;

function myFunction(){
    var testInput = document.getElementById('testInput').value;
    var inputs = document.getElementById('test');
    inputs.textContent = testInput;
}

