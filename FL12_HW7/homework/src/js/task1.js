const email1 = 'user@gmail.com';
const email2 = 'admin@gmail.com';
const pass1 = 'UserPass';
const pass2 = 'AdminPass';
let email = prompt('Enter your email','');
if (email === '' || email === null) {
    alert('Canceled.');
} else {
    const maxEmailLength = 5;
    if (email.length < maxEmailLength) {
    alert('I don’t know any emails having name length less than 5 symbols');
    } else {
        if (email === email1 || email === email2) {
        let password = prompt('Enter the password','');
        if (email === email1 && password === pass1 || email === email2 && password === pass2) {
           if (confirm('Do you want to change your password?')) { 
               let passwordOld = prompt('Enter old password');
               if (passwordOld === '' || passwordOld === null) {
                alert('Canceled.');
               }
               if (email === email1 && passwordOld !== pass1 || email === email2 && passwordOld !==pass2) {
                alert('Wrong password');
               } else {
                if (passwordOld === password) {
                    let newPassword = prompt('Enter new password','');   
                    if (newPassword === '' || newPassword === null) {
                       alert('Canceled');
                    } else {
                        const maxPasswordLength = 6;
                        if(newPassword.length < maxPasswordLength) {
                            alert('It’s too short password. Sorry.');
                        } else {
                            let newPasswordcheck = prompt('Enter again','');
                            if (newPasswordcheck === newPassword) {
                                alert('You have successfully changed your password.');
                            } else {
                                alert('You wrote the wrong password.');
                            }
                        }
                    }
                   }
               }
            } else {
                alert('You have failed the change.');
            }
        } else {
            if (password === '' || password === null) { 
                alert('Canceled.');
            } else {
            alert('Wrong password');
            }
          }  
} else {
    alert('I don’t know you');
  }
      }
  }

