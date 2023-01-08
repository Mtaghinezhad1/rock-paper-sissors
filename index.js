const moves = [
    { name: 'rock', icon: '&#9994' },
    { name: 'paper', icon: '&#9995' },
    { name: 'sissor', icon: '&#9996' }
]
let yourReuslt = 0;
let pcReuslt = 0;

const play = (yourMove, icon) => {
    //showing your move
    document.getElementById('your-move').innerHTML = `${icon}`;
    //set and show pc move
    let pcMove = moves[Math.floor(Math.random() * 3)];
    document.getElementById('pc-move').innerHTML = `${pcMove.icon}`;
    //compare moves
    compare(yourMove, pcMove)
}


const compare = (yourMove, pcMove) => {
    if (yourMove === 'rock') {
        if (pcMove.name === 'sissor') {
            updateYourResult()
        }
        if (pcMove.name === 'paper') {
            updatePcResult()
        }
    }
    if (yourMove === 'paper') {
        if (pcMove.name === 'rock') {
            updateYourResult()
        }
        if (pcMove.name === 'sissor') {
            updatePcResult()
        }
    }
    if (yourMove === 'sissor') {
        if (pcMove.name === 'paper') {
            updateYourResult()
        }
        if (pcMove.name === 'rock') {
            updatePcResult()
        }
    }
}

const updateYourResult = () => {
    yourReuslt++;
    document.getElementById('your-result').innerHTML = `you: ${yourReuslt}`;
}

const updatePcResult = () => {
    pcReuslt++;
    document.getElementById('pc-result').innerHTML = `computer: ${pcReuslt}`;
}

const reset = () => {
    yourReuslt = 0;
    pcReuslt = 0;
    document.getElementById('your-result').innerHTML = `you: ${yourReuslt}`;
    document.getElementById('pc-result').innerHTML = `computer: ${pcReuslt}`;

}