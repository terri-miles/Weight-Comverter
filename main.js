// Adding an event to the input form
document.getElementById('lbsInput').addEventListener('input', outputDisplay);

document.querySelector('.output').style.visibility = 'hidden';

// creating a function for the event listner
function outputDisplay(e){
    

    let lbsPound = e.target.value;
    if(lbsPound === ""){
        document.querySelector('.output').style.visibility = 'hidden';
    }else{
        document.querySelector('.output').style.visibility = 'visible';
    }
    document.getElementById('gramOutput').innerHTML = lbsPound / 0.0022046 + 'g';
    document.getElementById('kgOutput').innerHTML = lbsPound/2.2046 + 'kg';
    document.getElementById('ozOutput').innerHTML = lbsPound*16 + 'oz';
}