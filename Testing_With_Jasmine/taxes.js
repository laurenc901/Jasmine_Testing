function calculateTaxes(income){
    if (income > 30000) {
        return income * 0.25;
    }
    else{
        return income * 0.15;
    
    }
}

function removeDupes (values) {
  const arr = [...new Set(values)];
    if(typeof values === 'string')
return arr.join('')
   
    return arr;
}

let usernames = [];

let input = document.getElementById('username');

function submitForm(){
    usernames.push(input.value);
}

