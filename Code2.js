function writeNumbersToSheet1() {
  // Open the spreadsheet by its ID
  var ss = SpreadsheetApp.openById("1srfvkxWuYK-jvk7wY8IC4vTPzlY7-2blOG4mD2PgdbQ");
  
  // Always get Sheet1 directly
  var sheet = ss.getSheetByName("Sheet2");
  
  // Clear old content
  sheet.clear();
  
  // Prepare numbers 1 to 10
  var numbers = [];
  for (var i = 1; i <= 15; i++) {
    numbers.push([i]); // wrap in array for column format
  }
  
  // Write all at once to column A
  sheet.getRange(1, 1, numbers.length, 1).setValues(numbers);
}

