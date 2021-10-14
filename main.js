/*Task 0*/

let player1 = {
    name : 'Kitana',
    hp : 100,
    img : "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon : ['axe','sword', 'tower shield'],
    atack : function(){
        console.log(this.name + 'Fight...');
    }
};

console.log(player1);

let player2 = {
    name : 'Putin',
    hp : 100,
    img : "https://i.gifer.com/y4.gif",
    weapon : ['left hand','right hand', 'head'],
    atack : function(){
        console.log(this.name + 'Fight...');
    }
};

/*Task 1*/

function createPlayer(name, hp, img){
    const $player1 = document.createElement('div');
    
    const $progressbar = document.createElement('div');
    const $character = document.createElement('div');

    const $life = document.createElement('div');
    const $name = document.createElement('div');
    const $img = document.createElement('img');

    $player1.classList.add('player1');
    $progressbar.classList.add('progressbar');
    $character.classList.add('character');
    $life.classList.add('life');
    $name.classList.add('name');

    const arenas = document.querySelector('.arenas');
    arenas.appendChild($player1);
    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $life.style.width = hp + '%';
    $name.innerText = name;
    $img.src = img;
    $character.appendChild($img);
}

createPlayer(player1.name, player1.hp, player1.img);
createPlayer(player2.name, player2.hp, player2.img);