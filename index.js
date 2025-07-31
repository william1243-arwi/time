btnGreet.onclick = function(){
    let userInput = document.getElementById("userInput");
    letdisPlayText  = document.getElementById('userinput');
    let btnGreet = document.getElementById('btnGreet');

    userInput = parseInt(userInput.value);
    console.log(userInput);

    if (userInput < 12){
          displayText.innerHTML = 'Good Morning!';
    }
    else{
        displayText.innerHTML = 'Good Afternoon!';
    }

       
};