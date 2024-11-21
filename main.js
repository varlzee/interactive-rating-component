let buttonSelected = document.querySelectorAll('button');
let ratingState = document.querySelector('.rating_state_start');
let thankState = document.querySelector('.thank_you_state');
let textRating = document.getElementById('rating');
let number = 0;

document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault();
    thankState.style.display = "flex";
    ratingState.style.display = "none";
    textRating.textContent = number;
});

for( let x=0; x < buttonSelected.length; x++){
    buttonSelected[x].addEventListener('click', function(){
        changeState(buttonSelected);
        if (!(buttonSelected[x].classList.contains('active'))) {
           buttonSelected[x].classList.add('active');
           number = buttonSelected[x].innerHTML;
        }
    });
}


function changeState(button) {

    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove('active')
    }
 
}  
