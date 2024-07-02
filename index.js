let submitButton = document.getElementById('button');
let fullNameInput = document.getElementById('fname');
let emailInput = document.getElementById('email');
let messageInput = document.getElementById('message');

let emailCheck = /^\w+@[a-zA-Z_]+?/

function validateForm() {
  
    let data = {};
    let errors = [];

   
    if (fullNameInput.value.trim() !== '') {
        data.fullName = fullNameInput.value.trim();
    } else {
        errors.push('write your fullname.');
    }


    if (emailInput.value.trim() !== '') {
      
        if (emailCheck.test(emailInput.value.trim())) {
           
            data.email = emailInput.value.trim();
        } else {
          
            errors.push('Email format is invalid.');
        }
    } else {
        
        errors.push('write your email.');
    }

   
    if (messageInput.value.trim() !== '') {
       
        data.message = messageInput.value.trim();
    } else {
        
        errors.push('write your message.');
    }

   
    if (errors.length > 0) {
       
        console.error(errors.join('\n'));
    } else {
     
        console.log(data);
        
        fullNameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
}


submitButton.addEventListener('click', validateForm);