"use strict" ;
Done.arr = [];
function Done (task, date) {
    this.task = task;
    this.date = date;
    
    Done.arr.push(this);
    
    saveData();
}
    

let ToDo = document.getElementById("ToDo");
ToDo.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    let newTask = event.target.taskfield.value;
    let newDate = event.target.datefield.value;

    let inst = new Done (newTask, newDate);
    
    
    inst.renderData();
    
    
    // ToDo.reset();
}

function saveData(){
    let savedData = JSON.stringify(Done.arr);
    localStorage.setItem('InPut', savedData);
}


function loadData(){
    let loadedData = localStorage.getItem('InPut')
    let parseData = JSON.parse(loadedData);
    if (parseData){
        // Done.arr = parseData
        for (let i = 0; i < parseData.length; i++) {
            let reinst = new Done(parseData[i].task, parseData[i].date )
            console.log(reinst);

            // Done.arr = [];
        }
    }

}
loadData();
// console.log(Done.arr);


//   function renderheader(){
//     let table = document.getElementById ('table');
//      let headerRow = document.createElement ('tr');
//      table.appendChild(headerRow);
//      let task1 = document.createElement('th');
//      headerRow.appendChild(task1);
//      task1.textContent = 'Tasks To Do';
//      let date1 = document.createElement('th');
//      headerRow.appendChild(date1);
//      date1.textContent = 'Date';


//      }
//      renderheader();
    
    Done.prototype.renderData = function(){
        let list = document.getElementById ('list');
        // table.textContent = "";
    //  let dataRow = document.createElement ('ol');
    //  table.appendChild(dataRow);
     let td1 = document.createElement('li');
     list.appendChild(td1);
     td1.textContent = this.task;
     let td2 = document.createElement('p');
    list.appendChild(td2);
     td2.textContent = this.date;
     

    }
    
console.log();
