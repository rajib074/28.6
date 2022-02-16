function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if (pinString.length == 4){
        return pin;
    }
    else{
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}
function generatPin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
} 
document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');
    if (isNaN(number)) {
        if (number == 'C')
        calcInput.value = '';
    }
    else{
        
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});
function verifyPin(){
    // console.log('going to verify')
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-number').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');
    if (pin == typedNumber){
        // const notifySuccess = document.getElementById('notify-success');
        notifySuccess.style.display='block';
        notifyFail.style.display='none';

    }
    else{
        // const notifyFail = document.getElementById('notify-fail');
        notifyFail.style.display='block';
        notifySuccess.style.display='none';
    }
}