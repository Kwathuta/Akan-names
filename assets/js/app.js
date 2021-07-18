
const arrayAkanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const arrayAkanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
// Collecting data from input
    function getDate() {
        let dateInput = document.getElementById('dob').value;
        console.log(dateInput);
        male = document.getElementById('maleRadio');
        female = document.getElementById('femaleRadio');
    
        if(dateInput == '') {
            alert('Please enter a valid date');
        } else if (male.checked==false && female.checked==false) {
            alert('Please select gender');
            
        } else {
    
                // Parsing the date
                date = new Date(dateInput);
                console.log(date);
    
    
                // Getting century
                CC = date.getFullYear();
                CC = CC.toString().substr(0, 2);
                console.log(CC);
    
                // Getting year
                YY = date.getFullYear();
                YY = YY.toString().substr(2, 4);
                console.log(YY);
    
                // Getting month
                MM = date.getMonth();
                console.log(MM);
    
                // Getting date
                DD = date.getDate();
                console.log(DD);
    
                // Getting day of the week
                d = date.getDay();
                dd = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
                console.log(d);             
                
                    return d;
        }
    }

        validate = () => {
        getDate();
        if(male.checked) {
            console.log(arrayAkanMale[d]);
            document.getElementById("display").innerHTML =`Your Akan Name is ` + `<span>` + arrayAkanMale[d] + `</span>` + `<br>` + `It means a Male born on ` + date.toLocaleString('en-us', {weekday : 'long'});
        }
        else if (female.checked) {
            console.log(arrayAkanFemale[d]);
            document.getElementById("display").innerHTML =`Your Akan Name is ` + `<span>` + arrayAkanFemale[d] + `</span>` + `<br>` + `It means a Female born on ` + date.toLocaleString('en-us', {weekday : 'long'});
        }
    }
    
    buttonRead = () => {
       validate(); 
    }
    