
/*let background_box=document.querySelector('.background_box');
let toggle_box=document.querySelector('.toggle_box');
let circle=document.querySelector('.circle');
let checkbox=document.getElementById('checkbox');

toggle_box.onclick = function () {
    if(checkbox.checked) {
        checkbox.checked = false; 
        circle.style.transform = 'translateX(100px)';
        circle.style.backgroundColor = '#000';
        toggle_box.style.backgroundColor = '#fff';
        background_box.style.backgroundColor = '#000';
    }else{
        checkbox.checked = true; 
        circle.style.transform = 'translateX(100px)';
        circle.style.backgroundColor = '#fff';
        toggle_box.style.backgroundColor = '#000';
        background_box.style.backgroundColor = '#fff';
    }
}*/


let toggle_box = document.querySelector('.toggle_box');
let checkbox = document.getElementById('checkbox');
let circle = document.querySelector('.circle');

toggle_box.onclick = function () {
    console.log("Toggle box clicked"); 
    if (checkbox.checked) {
        console.log("Switching to light mode"); 
        document.body.classList.remove('dark-mode');
        checkbox.checked = false;
    } else {
        console.log("Switching to dark mode"); 
        document.body.classList.add('dark-mode');
        checkbox.checked = true;
    }
}