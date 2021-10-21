// Getting all the input and output boxes


const bill = document.getElementById('tipAmount');
const noPeople = document.getElementById('people');
const tipPerson = document.querySelector('.tip-amount h4');
const tipPeople = document.querySelector('.tipPeople h4');

// Getting buttons for tip percentage

const five = document.getElementById('five');
const ten = document.getElementById('ten');
const fifteen = document.getElementById('fifteen');
const twentyFive = document.getElementById('twentyFive');
const fifty = document.getElementById('fifty');
const custom = document.getElementById('custom');
const reset = document.getElementById('reset');


// calculating tip amount
function tip (){
   

    let btnAll = document.querySelectorAll('.btn') 
    btnAll.forEach(option => {
        option.addEventListener("click", function (){
       
            let billAble =  bill.value;
            let servicePeople = noPeople.value;
            // calculate tip discount
            if(billAble == 0 || billAble == ''){
               bill.style.borderColor = 'Red'
            }
    let fivePercent = (0.05 * billAble).toFixed(2);
    let tenPercent = (0.1 * billAble).toFixed(2);
    let fifteenPercent = (0.15 * billAble).toFixed(2);
    let twentyFivePercent = (0.25 * billAble).toFixed(2);
    let fiftyPercent = (0.5 * billAble).toFixed(2);
    let fivePercentEach;
    let tenPercentEach;
    let fifteenPercentEach;
    let twentyFivePercentEach;
    let fiftyPercentEach;

    // calculate tip per person
    if (servicePeople > 1){
       fivePercentEach = (fivePercent / servicePeople).toFixed(2)
        tenPercentEach = (tenPercent / servicePeople).toFixed(2)
        fifteenPercentEach = (fifteenPercent / servicePeople).toFixed(2)
        twentyFivePercentEach = (twentyFivePercent / servicePeople).toFixed(2)
        fiftyPercentEach = (fiftyPercent / servicePeople).toFixed(2)


    }else if(servicePeople < 1){
       
        tipPeople.innerText = '$0.00';
        tipPerson.innerText = '$0.00';
        fivePercentEach = 0;
        tenPercentEach = 0;
        fifteenPercentEach = 0;
        twentyFivePercentEach = 0;
        fiftyPercentEach = 0;
         fivePercent =0; 
         tenPercent =0;
        fifteenPercent = 0;
         twentyFivePercent  =0;
        fiftyPercent =0;

      
        

    }
    else{
       fivePercentEach = fivePercent 
        tenPercentEach = tenPercent
        fifteenPercentEach = fifteenPercent
        twentyFivePercentEach = twentyFivePercent 
        fiftyPercentEach = fiftyPercent

    }
          if(option.id == 'five'){
            tipPeople.innerText = '$' + fivePercent;
            tipPerson.innerText = '$' + fivePercentEach;
            bill.style.borderColor = 'Red'
            console.log(bill.style)
          } else if(option.id == 'ten'){
            tipPeople.innerText = '$' + tenPercent;
            tipPerson.innerText = '$' + tenPercentEach;
          }else if(option.id == 'fifteen'){
            tipPeople.innerText = '$' + fifteenPercent;
            tipPerson.innerText = '$' + fifteenPercentEach;
          }else if(option.id == 'twentyFive'){
            tipPeople.innerText = '$' + twentyFivePercent;
            tipPerson.innerText = '$' + twentyFivePercentEach;
          }else if(option.id == 'fifty'){
            tipPeople.innerText = '$' + fiftyPercent;
            tipPerson.innerText = '$' + fiftyPercentEach;
          }else{
            tipPeople.innerText = '$' + fivePercent;
            tipPerson.innerText = '$' + fivePercentEach;
          }
    });
  });
   

    
    

 
   
   

    // console.log(fivePercentEach, tenPercentEach, fifteenPercent, twentyFivePercentEach, fiftyPercentEach)
    
   
    
}
tip();

// reset button
reset.onclick = () =>{
    tipPeople.innerText = '$0.00';
    tipPerson.innerText = '$0.00';
    bill.value = '0';
}












