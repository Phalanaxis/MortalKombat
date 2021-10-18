const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');


let player1 = {
    player: 1,
    name : 'Kitana',
    hp : 100,
    img : "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon : ['axe','sword', 'tower shield'],
    attack : function(name){
        console.log(this.name + 'Fight...');
    }
};

let player2 = {
    player: 2,
    name : 'Putin',
    hp : 100,
    img : "https://i.gifer.com/y4.gif",
    weapon : ['left hand','right hand', 'head'],
    attack : function(name){
        console.log(this.name + 'Fight...');
    }
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);

    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(playerObj){
    const $player = createElement('div', 'player'+playerObj.player);  
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);

    return $player;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    

    
    player.hp -= getRandomInt(1, 20);

    if(player.hp < 0 ){
        player.hp = 0
    }

    console.log(player.hp);

    $playerLife.style.width = player.hp + '%';

    if (player1.hp < 0 ) {
        $arenas.appendChild(playerWin(player2.name));
    } else if (player2.hp == 0 ) {
        $arenas.appendChild(playerWin(player1.name));
    }
}

function playerWin(name){
    console.log(name);
    const $WinTitle = createElement('div', 'WinTitle');
    $WinTitle.InnerText = name + ' wins';
    $randomButton.disabled = true;

    return $WinTitle;
}

function playerLose(name){
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';

    return $loseTitle;
}

$randomButton.addEventListener('click',function() {
    console.log('click');
    changeHP(player1);
    changeHP(player2);
})


$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
