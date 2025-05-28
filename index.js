


// function changeText() {
 
// let fpara = document.getElementById('fpara');

// fpara.textContent = " Babbar";

// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changeText);

// //fpara.removeEventListener('click',changeText); //remove listener



// let paras = document.querySelectorAll('p');

function alertPara(event) {
    alert ("You have Clicked on para: " + event.target.textContent);
}

// for(let i = 0; i<paras.length; i++)
// {
//     let para = paras[i];

//     console.log("eventListener added");
//     para.addEventListener('click', alertPara);
// }



let mydiv = document.getElementById('wrapper');

document.addEventListener('click', alertPara);
