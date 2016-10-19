country[0][0] = "Albania";
country[0][1] = 42;
country[0][2] = 33;

country[1][0] = "Austria";
country[1][1] = 45;
country[1][2] = 35;

country[2][0] = "Belgium";
country[2][1] = 50;
country[2][2] = 30;

createTable();

function createTable() {
    var table = document.getElementById("table_js");
    
    for(var i = 0; i < country.length; i++) {
        var row = table.insertRow(i);
        for(var k = 0; k < country[i].length; k++) {
            var cell = row.insertCell(k);
            cell.innerHTML = country[i][k];
        }
    }
}