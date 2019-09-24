var button = document.getElementsByClassName("btn-default");

for (var i = 0; i < 3; i++) {
    if (i % 2) button[i].classList.add("btn-danger");
    else button[i].classList.add("btn-warning")
}

var primaryButton = document.querySelector('.btn-primary');
var myDiv = document.querySelector('.myDiv:nth-child(2)');


//myDiv.style.background = '#ccc';
console.log(myDiv);


primaryButton.addEventListener('click', onSubmit);
console.log(primaryButton);

function onSubmit(e) {
    e.preventDefault(e);

    console.log(primaryButton);
    console.log(myDiv);

    myDiv.firstElementChild.style.background = '#ccc';
    primaryButton.classList.remove('btn-default');
    primaryButton.classList.add('btn-success');

}

myDiv.addEventListener('mouseover', function (e) {
    myDiv.style.background = 'red';

});

