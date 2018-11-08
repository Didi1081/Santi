 // Declare Consts & Lets
var elMonth = document.getElementById('js-month');
var monthNames = ['', '', '', '', '', '', '', '', '', '', 'Demo Mode Only', ''];
var today = new Date();
var month = monthNames[today.getMonth()];


// Write To Page
elMonth.textContent = month;