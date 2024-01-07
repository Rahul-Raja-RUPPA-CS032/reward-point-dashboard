let spreadSheet = SpreadsheetApp.openById(
  '1kTbbLnpqxe132blfsF-aK9c8Opdz8f93JIGpTtuCgfE'
);
let user = Session.getActiveUser().getEmail();

function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setTitle('SmartToolbox UI Standards');
}

function getData() {
  let data = spreadSheet.getSheetByName('Data').getDataRange().getValues();
  console.log(data);
  return JSON.stringify({
    data: data,
    user: user
  });
}

function crudUser(res) {
  // { selectedRecord: [ '', 'Rahul Raja', '', '4' ], action: 'Add' }
  try {
    let message = '';
    let response = JSON.parse(res);
    let index = response.selectedRecord[0];
    if (response.action == 'Add') {
      let config = spreadSheet
        .getSheetByName('Config')
        .getRange(2, 2)
        .getValue();
      let newGenIdNumber = parseInt(config) + 1;
      response.selectedRecord[0] = newGenIdNumber;
      spreadSheet
        .getSheetByName('Config')
        .getRange(2, 2)
        .setValue(newGenIdNumber);
      spreadSheet.getSheetByName('Data').appendRow(response.selectedRecord);
      message = 'Data Added Successfully';
    } else if (response.action == 'Edit') {
      let data = response.selectedRecord[3];
      spreadSheet
        .getSheetByName('Data')
        .getRange(index + 1, 4)
        .setValue(data);
      message = 'Data Edited Successfully';
    } else if (response.action == 'Delete') {
      spreadSheet.getSheetByName('Data').deleteRow(index + 1);
      message = 'Data Deleted Successfully';
    }
    return JSON.stringify({
      success: true,
      message: message
    });
  } catch (e) {
    console.error(e);
    return JSON.stringify({
      success: false,
      message: e
    });
  }
}
