const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

let size = Number.parseInt(slider.value);
const conatiner = document.querySelector('.board');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
/*let ht = 640/24;
let wdth = 640/24;*/
let ht = 640/size;
let wdth = 640/size;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  size = Number.parseInt(slider.value);
  ht = 640/size;
  wdth = 640/size;
  defaultGrid(size);
} 

const colorInput = document.getElementById("inp-color");
let colorSel=colorInput.value;
colorInput.addEventListener('input',()=>{
    colorSel = colorInput.value;
})


function defaultGrid(sz){
    /*makeRows(24);
    makeColumns(24);
    makeRows(size);
    makeColumns(size);*/
    conatiner.innerHTML="";
    makeRows(sz);
    makeColumns(sz);
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
                e.target.style.backgroundColor = colorSel;
            }, false)
        }
    }
}

defaultGrid(size);




const button = document.getElementById("btn-reset");
button.addEventListener('click',()=>{
    for( let i=0; i<cells.length; i++){
        cells[i].style.backgroundColor = "white";
    }    
})


