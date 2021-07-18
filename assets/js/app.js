
// Collecting data from input
buttonRead = () => {
    function getDate() {
        let dateInput = document.getElementById('dob').value;
        console.log(dateInput);
    
        if(dateInput == '') {
            alert('Please enter a valid date');
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
                console.log(d);
    
                return d;
    
                // d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
                // console.log(d);
        }
    }
        console.log(getDate());
    
       const arrayAkanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
       const arrayAkanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    
        male = document.getElementById('maleRadio');
        female = document.getElementById('femaleRadio');
        if(male.checked) {
            console.log(arrayAkanMale[d]);
            console.log(date.toLocaleString('en-us', {weekday : 'long'}));
    
        }
        else if(female.checked) {
            console.log(arrayAkanFemale[d]);
            console.log(date.toLocaleString('en-us', {weekday : 'long'}));
        }
        else {
            alert('Please select gender');
        }
    
    
    }