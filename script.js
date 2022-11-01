var selectedRow = null;
var storeList = document.getElementById("storeList");
var productCode = document.getElementById("productCode");
var productName = document.getElementById("productName");
var productQuantity = document.getElementById("productQuantity");
var productPrice = document.getElementById("productPrice");

function onFormSubmit() {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}

// Create
function insertNewRecord(data) {
    var table = storeList.getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.productName;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.productQuantity;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.productPrice;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>`
}

// Read
function readFormData() {
    var formData = {};
    formData["productCode"] = productCode.value;
    formData["productName"] = productName.value;
    formData["productQuantity"] = productQuantity.value;
    formData["productPrice"] = productPrice.value;

    return formData;
}

// Update
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    productCode.value = selectedRow.cells[0].innerHTML;
    productName.value = selectedRow.cells[1].innerHTML;
    productQuantity.value = selectedRow.cells[2].innerHTML;
    productPrice.value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.productName;
    selectedRow.cells[2].innerHTML = formData.productQuantity;
    selectedRow.cells[3].innerHTML = formData.productPrice;
}

// Delete
function onDelete(td) {
    if (confirm("Do you want to delete this record?")) {
        row = td.parentElement.parentElement;
        storeList.deleteRow(row.rowIndex);
    }
    resetForm();
}

// Reset Form
function resetForm() {
    productCode.value = "";
    productName.value = "";
    productQuantity.value = "";
    productPrice.value = "";
    selectedRow = null;
}