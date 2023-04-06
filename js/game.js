let optionsP = document.getElementsByClassName('main-button-left-option');
let optionsC = document.getElementsByClassName('main-button-right-option');
var play = document.getElementById('play-button');
var resFrame = document.getElementById('result');
var resText = document.getElementById('result-text');
var scUser = 0;
var scTie = 0;
var scComp = 0;
let u = 0;

function selectOption(option){
    this.unselectOption();
    option.style.backgroundColor = '#2B3A67';
    option.style.color = 'white';
    option.style.border = '1px solid white';
    play.className = 'main-play-button';
}

function unselectOption(){
    for (let i = 0; i < optionsP.length; i++){
        var option = optionsP[i];
        option.style.backgroundColor = 'white';
        option.style.color = 'black';
    }
}

function playGame(){
    if (u == 0){
        let name = prompt('Digite seu nome', 'Usuário');
        if (name == ''){
            document.getElementById('username').innerHTML = 'Usuário';
        }
        else{
            document.getElementById('username').innerHTML = name;
        }
        u++;
    }
    unselectOptionC();
    var userPlay;
    for (let x = 0; x < optionsP.length; x++){
        var option = optionsP[x];
        let bgColor = window.getComputedStyle(option).backgroundColor;
        if (bgColor == 'rgb(43, 58, 103)'){
            switch (x){
                case 0 /* Pedra */:
                    userPlay = 0;
                    break;
                case 1 /* Papel */:
                    userPlay = 1;
                    break;
                case 2 /* Tesoura */:
                    userPlay = 2;    
                    break;   
            }
        }
    }

    var cpPlay = Math.floor(Math.random() * 3);
    optionsC[cpPlay].style.backgroundColor = '#BD3131';
    optionsC[cpPlay].style.color = 'white';
    optionsC[cpPlay].style.border = '1px solid white';

    if (cpPlay - userPlay == 1 || cpPlay - userPlay == -2){
        resFrame.style.display = 'block';
        resText.innerHTML = 'Computador Venceu';
        scComp ++;
        document.getElementById('score-comp').innerHTML = scComp;
    }
    else if (cpPlay - userPlay == 2 || cpPlay - userPlay == -1){
        resFrame.style.display = 'block';
        resText.innerHTML = 'Você Venceu!';
        scUser ++;
        document.getElementById('score-user').innerHTML = scUser;
    }
    else{
        resFrame.style.display = 'block';
        resText.innerHTML = 'Empate';
        scTie ++;
        document.getElementById('score-tie').innerHTML = scTie;
    }
    document.getElementById('footer-frame').style.bottom = '-50px';
}

function unselectOptionC(){
    for (let z = 0; z < optionsC.length; z++){
        var option = optionsC[z];
        option.style.backgroundColor = 'white';
        option.style.color = 'black';
    }
}

function resetScore(){
    scComp = 0;
    document.getElementById('score-comp').innerHTML = scComp;
    scTie = 0;
    document.getElementById('score-tie').innerHTML = scTie;
    scUser = 0;
    document.getElementById('score-user').innerHTML = scUser;
}
