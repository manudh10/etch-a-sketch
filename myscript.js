const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 
let size = Number.parseInt(slider.value);

const conatiner = document.querySelector('.board');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
/*let ht = 640/24;
let wdth = 640/24;*/
let ht = 640/size;
let wdth = 640/size;

function defaultGrid(){
    /*makeRows(24);
    makeColumns(24);*/
    makeRows(size);
    makeColumns(size);
}

function makeRows(rowNum){
    for(let r=0; r<rowNum; r++){
        let row = document.createElement('div');
        row.style.height = ht+"px";   
        if(r=== rowNum -1){
            row.setAttribute('style','border-bottom: 1px solid rgb(114, 114, 117);');
            row.style.height = ht+"px";
        }
        conatiner.appendChild(row).className='gridRow';
    }
}

function makeColumns(cellNum){
    for (i=0; i<rows.length; i++) {
        for(j=0; j< cellNum; j++){
            let newCell = document.createElement('div');
            newCell.id='C'+i+j;
            newCell.style.width=wdth+"px";
            
            if(j=== cellNum -1){
                newCell.setAttribute('style','border-right: 1px solid rgb(114, 114, 117);');
                newCell.style.width=wdth+"px";
            }
            rows[i].appendChild(newCell).className="cell";
            const test = document.getElementById(newCell.id);
            test.addEventListener('mouseover',(e)=>{
                e.target.style.backgroundColor = "rgba(92, 89, 89, 0.404)";
            }, false)
        }
    }
}



defaultGrid();


