// from data.js
// var tableData = data;

showData(data);

// Select the button 
var button = d3.select("#filter-btn"); 

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

// Prevent the page from refreshing
d3.event.preventDefault();

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime").node().value;
var tableData = data.filter(obj=>obj.datetime==inputElement);

showData(tableData);
}

function showData(data) {
    d3.select('tbody').html('')
    data.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val=>{
            row.append('td').text(val)
        });
    });
}
