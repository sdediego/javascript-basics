// Validate mandatory text field
var value = document.getElementById("field").value;
var pattern = new RexExp('^\\s+$');
if (value == null || value.length == 0 || pattern.test(value)) {
  return false;
}

// Validate numeric text field.
var value = document.getElementById("number").value;
if (isNaN(value)) {
  return false;
}

// Validate that at least one list item has been selected.
var index = document.getElementById("options").selectedIndex;
if (index == null || index == 0) {
  return false;
}

// Validate email field.
var value = document.getElementById("email").value;
var pattern = new RexExp('\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)');
if (!pattern.test(value)) {
  return false;
}

// Validate date field.
var year = document.getElementById("year").value;
var month = document.getElementById("month").value;
var day = document.getElementById("day").value;
var value = new Date(year, month, day);
if (!isNaN(value)) {
  return false;
}

// Validate personal identification number.
var value = document.getElementById("field").value;
var letters = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T');
var pattern = new RexExp('^\\d{8}[A-Z]$');
if (!pattern.test(value) && (value.charAt(8) != letters[(value.substring(0,8)) % 23])) {
  return false;
}

// Validate phone number.
var value = document.getElementById("campo").value;
var pattern = new RexExp('^\\d{9}$');
if (!pattern.test(value)) {
  return false;
}

// Validate that a checkbox has been selected.
var item = document.getElementById("field");
if (!item.checked) {
  return false;
}

// Validate that a radiobutton has been selected.
var options = document.getElementsByName("options");
var selected = false;
for (var i = 0; i < options.length; i++) {
  if (options[i].checked) {
    selected = true;
    break;
  }
}

if (!selected) {
  return false;
}
