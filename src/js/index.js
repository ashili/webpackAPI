import getJSON from "./getJSON";


getJSON('http://localhost:8000/api/v1/cities',
    function (err, records) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            let table = document.querySelector("table");
            let data = Object.keys((records.data[0]));
            let dataRecords = records.data;
            generateTableHead(table, data);
            generateTable(table, dataRecords);
        }
    });
function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    data.map(key => {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    });
}

function generateTable(table, data) {

    let map = data.map(element=>{
        let row = table.insertRow();
        for (let key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    });
}
