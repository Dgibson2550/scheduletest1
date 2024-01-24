function nextStep() {
    document.getElementById('issueSection').style.display = 'block';
}

function submitForm() {
    // Add logic to handle form submission
    alert('Form submitted successfully!');
}

function loadCSVData(filePath, callback) {
    // Code for loading CSV data
}

function parseCSV(csvText) {
    // Code for parsing CSV
}

function populateDropdowns(data, dropdownId, columnName) {
    // Code for dynamically populating dropdowns
}

// Call the function to load CSV data and populate year dropdown
loadCSVData('car_data.csv', function (data) {
    populateDropdowns(data, 'year', 'year');
    populateDropdowns(data, 'make', 'make');
    populateDropdowns(data, 'model', 'model');
});
