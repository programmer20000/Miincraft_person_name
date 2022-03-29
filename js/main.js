let FirstName = document.getElementById('FirstName');
let SecondName = document.getElementById('SecondName');
let ButtonSubmit = document.getElementById('ButtonSubmit');

var fs = require('fs');

function WritingDateInFile(error){
    fs.appendFile('date.txt',FirstName.value + '\n'+ SecondName.value)
    if(error) throw error;
}

ButtonSubmit.addEventListener('click', e=> WritingDateInFile())