// from data.js
var filteredData = data;

showData(data);
d3.selectAll('input').on('change',handleChange);

// Select the button 
var button = d3.select("button"); 

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

// Prevent the page from refreshing
// d3.event.preventDefault();

// Select the input element and get the raw HTML node
d3.selectAll('input').property('value','');
showData(data);
}

function showData(data) {
    d3.select('tbody').html('')
    data.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val=>{
            row.append('td').text(val)
        });
    });
};

function handleChange() {
    var key = d3.select(this).property('id');
    var value = d3.select(this).property('value');

    filteredData = filteredData.filter(obj=> obj[key] == value);
    showData(filteredData);
}
