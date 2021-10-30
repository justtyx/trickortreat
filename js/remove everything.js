window.addEventListener('load', openTitleScreen);

let lives = 3;
let points = 0;

let gameIsPaused = false;
let gameHasEnded = false;

let musicIsOn = true;
let soundIsOn = true;

function openTitleScreen() {
    console.log('openTitleScreen()');

    document.querySelector('#title_screen').classList.remove('hidden');
    document.querySelector('#instructions_screen').classList.add('hidden');
    document.querySelector('#game_over_screen').classList.add('hidden');
    document.querySelector('#level_complete_screen').classList.add('hidden');
    document.querySelector('#settings').classList.add('hidden');

    document.querySelector('#instructions_close').classList.value = '';
    document.querySelector('#home_button').classList.value = '';

    //start playing music

    document.querySelector('#title').classList.add('title_appear');

    document.querySelector('#pause_button').classList.value = '';
    document.querySelector('#pause_button').removeEventListener('mouseup', pauseButton);

    document.querySelector('#play_button').addEventListener('mouseup', activatePlayButton);
    document.querySelector('#instructions_button').addEventListener('mouseup', instructionsButton);

    document.querySelector('#title_sound_button').classList.add('title_sound_button');
    document.querySelector('#title_music_button').classList.add('title_music_button');

    document.querySelector('#title_music_button').addEventListener('mouseup', musicButton);
    document.querySelector('#title_sound_button').addEventListener('mouseup', soundButton);
}

function activatePlayButton() {
    console.log('activatePlayButton()');
    console.log(this);

    this.classList.add('click');
    this.addEventListener('animationiteration', openGameScreen);
}

function instructionsButton() {
    document.querySelector('#instructions_button').classList.add('click');
    document.querySelector('#instructions_button').addEventListener('animationiteration', openInstructionsScreen);
}

function openInstructionsScreen() {
    console.log('openInstructionsScreen()');
    document.querySelector('#instructions_button').classList.value = '';
    document.querySelector('#instructions_screen').classList.remove('hidden');

    document.querySelector('#button').addEventListener('mouseup', activatePlayButton);
    document.querySelector('#instructions_close').addEventListener('mouseup', closeInstructionsButton);
}

function closeInstructionsButton() {
    this.classList.add('click');
    this.addEventListener('animationiteration', openTitleScreen);
}

function settingsButton() {
    console.log('settingsButton()');
    console.log(this);

    this.classList.add('click');
    this.addEventListener('animationiteration', openSettingsScreen);
}

function openSettingsScreen() {
    console.log('openSettingsScreen()');

    document.querySelector('#settings_button').classList.value = '';

    document.querySelector('#settings').classList.remove('hidden');
    document.querySelector('#settings').removeEventListener('mouseup', openSettingsScreen);

    if (gameIsPaused === false) {
        pauseGame();
    }

    document.querySelector('#sound_button').classList.add('sound_button');
    document.querySelector('#music_button').classList.add('music_button');

    document.querySelector('#sound_button').addEventListener('mouseup', soundButton);
    document.querySelector('#music_button').addEventListener('mouseup', musicButton);
    document.querySelector('#home_button').addEventListener('mouseup', homeButton);
    document.querySelector('#replay_button').addEventListener('mouseup', reactivatePlayButton);
    document.querySelector('#close_button').addEventListener('mouseup', closeButton);
}

function closeButton() {
    console.log('closeButton()');
    console.log(this);

    this.classList.add('click');
    this.addEventListener('animationiteration', closeSettingsScreen);
}

function closeSettingsScreen() {
    console.log('openSettingsScreen()');

    document.querySelector('#settings_button').classList.value = '';

    document.querySelector('#settings').classList.add('hidden');
    this.removeEventListener('animationiteration', closeSettingsScreen);
    this.classList.remove = '';


    if (gameIsPaused === true) {
        resumeGame();
    }
}

function musicButton() {
    console.log('musicButton()');
    console.log(this);

    this.classList.add('click');

    this.addEventListener('animationiteration', playMusic);
}

function soundButton() {
    console.log('soundButton()');
    console.log(this);

    this.classList.add('click');
    this.addEventListener('animationiteration', playSound);

}

function playMusic() {
    if (musicIsOn === true) {
        console.log('Music is off');

        document.querySelector('#title_music_button').classList.remove('title_music_button');
        document.querySelector('#music_button').classList.remove('music_button');

        document.querySelector('#title_music_button').classList.add('title_musicoff_button');
        document.querySelector('#music_button').classList.add('musicoff_button');

        this.removeEventListener('animationiteration', playMusic);

        document.querySelector('#title_music_button').classList.remove('click');
        document.querySelector('#music_button').classList.remove('click');

        musicIsOn = false;

        this.addEventListener('mouseup', musicButton);

    } else {
        console.log('Music is on');

        document.querySelector('#title_music_button').classList.remove('title_musicoff_button');
        document.querySelector('#music_button').classList.remove('musicoff_button');

        document.querySelector('#title_music_button').classList.add('title_music_button');
        document.querySelector('#music_button').classList.add('music_button');

        this.removeEventListener('animationiteration', playMusic);

        document.querySelector('#title_music_button').classList.remove('click');
        document.querySelector('#music_button').classList.remove('click');

        musicIsOn = true;

        this.addEventListener('mouseup', musicButton);


    }
}

function playSound() {
    if (soundIsOn === true) {
        console.log('Sound is off');

        document.querySelector('#title_sound_button').classList.remove('title_sound_button');
        document.querySelector('#sound_button').classList.remove('sound_button');

        document.querySelector('#title_sound_button').classList.add('title_soundoff_button');
        document.querySelector('#sound_button').classList.add('soundoff_button');

        this.removeEventListener('animationiteration', playSound);

        document.querySelector('#title_sound_button').classList.remove('click');
        document.querySelector('#sound_button').classList.remove('click');

        soundIsOn = false;

        this.addEventListener('mouseup', soundButton);

    } else {
        console.log('Music is on');

        document.querySelector('#title_sound_button').classList.remove('title_soundoff_button');
        document.querySelector('#sound_button').classList.remove('soundoff_button');

        document.querySelector('#title_sound_button').classList.add('title_sound_button');
        document.querySelector('#sound_button').classList.add('sound_button');

        this.removeEventListener('animationiteration', playSound);

        document.querySelector('#title_sound_button').classList.remove('click');
        document.querySelector('#sound_button').classList.remove('click');

        soundIsOn = true;

        this.addEventListener('mouseup', soundButton);


    }
}

function openGameScreen() {
    console.log('openGameScreen()');

    document.querySelector('#title_screen').classList.add('hidden');
    document.querySelector('#instructions_screen').classList.add('hidden');
    document.querySelector('#settings').classList.add('hidden');
    document.querySelector('#game').classList.remove('hidden');

    document.querySelector('#play_button').classList.value = '';
    document.querySelector('#button').classList.value = '';

    document.querySelector("#timebar_MG").classList.add("timer");
    document.querySelector("#timebar_MG").addEventListener("animationiteration", timeIsOut);

    gameIsPaused = false;
    points = 0;
    lives = 3;

    document.querySelector('#score').textContent = points;

    document.querySelector('#heart1').classList.remove('badHeart');
    document.querySelector('#heart2').classList.remove('badHeart');
    document.querySelector('#heart3').classList.remove('badHeart');
    document.querySelector('#heart1').classList.add('goodHeart');
    document.querySelector('#heart2').classList.add('goodHeart');
    document.querySelector('#heart3').classList.add('goodHeart');

    //containers positions
    document.querySelector('#candy_item_container').classList.add('position1');
    document.querySelector('#extra_point_candy_container').classList.add('position2');
    document.querySelector('#heart_candy_container').classList.add('position3');
    document.querySelector('#lollipop_container').classList.add('position4');
    document.querySelector('#apple_container').classList.add('position5');
    document.querySelector('#lemon_container').classList.add('position6');
    document.querySelector('#carrot_container').classList.add('position7');

    //containers animation
    document.querySelector('#candy_item_container').classList.add('fall1');
    document.querySelector('#extra_point_candy_container').classList.add('fall2');
    document.querySelector('#heart_candy_container').classList.add('fall3');
    document.querySelector('#lollipop_container').classList.add('fall4');
    document.querySelector('#apple_container').classList.add('fall5');
    document.querySelector('#lemon_container').classList.add('fall6');
    document.querySelector('#carrot_container').classList.add('fall7');

    document.querySelector('#candy_item_container').addEventListener('animationiteration', positionCandy);
    document.querySelector('#extra_point_candy_container').addEventListener('animationiteration', positionPolka);
    document.querySelector('#lollipop_container').addEventListener('animationiteration', positionCandy);
    document.querySelector('#heart_candy_container').addEventListener('animationiteration', positionCandy);
    document.querySelector('#apple_container').addEventListener('animationiteration', positionVeggie);
    document.querySelector('#lemon_container').addEventListener('animationiteration', positionVeggie);
    document.querySelector('#carrot_container').addEventListener('animationiteration', positionVeggie);

    document.querySelector('#candy_item_container').addEventListener('click', animateCandy);
    document.querySelector('#extra_point_candy_container').addEventListener('click', animatePolka);
    document.querySelector('#heart_candy_container').addEventListener('click', animateCandy);
    document.querySelector('#lollipop_container').addEventListener('click', animateCandy);
    document.querySelector('#apple_container').addEventListener('click', animateVeggie);
    document.querySelector('#lemon_container').addEventListener('click', animateVeggie);
    document.querySelector('#carrot_container').addEventListener('click', animateVeggie);

    document.querySelector('#pause_button').classList.add('pause_button');
    document.querySelector('#pause_button').addEventListener('mouseup', pauseButton);
    document.querySelector('#settings_button').addEventListener('mouseup', settingsButton);
}

function animateCandy() {
    console.log('animateCandy()');
    console.log(this);

    this.removeEventListener('click', animateCandy);

    points++;
    console.log('You have ' + points + ' points');

    document.querySelector('#score').textContent = points;

    this.classList.add('paused');
    this.firstElementChild.classList.add('fade');
    this.addEventListener('animationend', restartCandy);
}

function animatePolka() {
    console.log('animatePolka()');
    console.log(this);

    this.removeEventListener('click', animatePolka);

    points += 2;

    console.log('You have ' + points + ' points');

    document.querySelector('#score').textContent = points;

    this.classList.add('paused');
    //add sound
    this.firstElementChild.classList.add('fade');
    this.addEventListener('animationend', restartPolka);
}

function animateVeggie() {
    console.log('animateVeggie()');
    console.log(this);

    this.removeEventListener('click', animateVeggie);

    document.querySelector('#heart' + lives).classList.remove('goodHeart');
    document.querySelector('#heart' + lives).classList.add('badHeart');
    lives--;

    console.log('You have ' + lives + ' lives');
    console.log(lives);

    if (lives === 0) {
        console.log('openGameOver()');

        if (gameHasEnded === false) {

            openGameOver();
        }
    } else {
        this.classList.add('paused');
        this.firstElementChild.classList.add('heavy');
        this.addEventListener('animationend', restartVeggie);
        this.addEventListener('animationend', startHeart);
    }
}

function positionSprite() {
    let randPos = Math.floor(Math.random() * 8) + 1;
    this.classList.add('position' + randPos);
}

function positionCandy() {
    console.log('positionCandy()');
    console.log(this);

    this.classList.value = '';
    this.offsetHeight;
    let randFall = Math.floor(Math.random() * 3) + 1;
    this.classList.add('fall' + randFall);
    let randPos = Math.floor(Math.random() * 8) + 1;
    this.classList.add('position' + randPos);
}

function positionPolka() {
    console.log('positionPolka()');
    console.log(this);

    this.classList.value = '';
    this.offsetHeight;
    this.classList.add('fall4');
    let randPos = Math.floor(Math.random() * 8) + 1;
    this.classList.add('position' + randPos);
}

function positionVeggie() {
    console.log('positionVeggie()');
    console.log(this);

    this.classList.value = '';
    this.offsetHeight;
    let randFall = Math.floor(Math.random() * 3) + 4;
    this.classList.add('fall' + randFall);
    let randPos = Math.floor(Math.random() * 8) + 1;
    this.classList.add('position' + randPos);
}

function restartCandy() {
    console.log('restartCandy()');
    console.log(this);

    this.removeEventListener('animationend', restartCandy);

    this.classList.value = '';
    this.firstElementChild.classList.remove('fade');
    this.offsetHeight;

    let randFall = Math.floor(Math.random() * 3) + 1;
    this.classList.add('fall' + randFall);

    this.addEventListener('click', animateCandy);

    let randPos = Math.floor(Math.random() * 8) + 1;
    this.classList.add('position' + randPos);

}

function restartPolka() {
    console.log('restartPolka()');
    console.log(this);

    this.removeEventListener('animationend', restartPolka);

    this.classList.value = '';
    this.firstElementChild.classList.remove('fade');
    this.offsetHeight;

    this.classList.add('fall4');

    this.addEventListener('click', animatePolka);

    let randPos = Math.floor(Math.random() * 8) + 1;
    console.log(randPos);
    this.classList.add('position' + randPos);
}

function restartVeggie() {
    console.log('restartVeggie()');
    console.log(this);

    this.removeEventListener('animationend', restartVeggie);

    this.classList.value = '';
    this.firstElementChild.classList.remove('heavy');
    this.offsetHeight;

    let randFall = Math.floor(Math.random() * 3) + 4;
    this.classList.add('fall' + randFall);

    this.addEventListener('click', animateVeggie);

    let randPos = Math.floor(Math.random() * 8) + 1;
    this.classList.add('position' + randPos);
}

function startHeart() {
    console.log('startHeart()');

    document.querySelector('#heart_container').classList.add('position8');
    document.querySelector('#heart_container').classList.add('fall8');
    document.querySelector('#heart_container').addEventListener('click', animateHeart);
    document.querySelector('#heart_container').addEventListener('animationiteration', positionHeart);
}

function animateHeart() {
    console.log('animateHeart()');
    console.log(this);

    this.removeEventListener('click', animateHeart);

    lives++;
    console.log(lives);
    document.querySelector('#heart' + lives).classList.remove('badHeart');
    document.querySelector('#heart' + lives).classList.add('goodHeart');

    this.classList.add('paused');

    this.firstElementChild.classList.add('move');

    this.addEventListener('animationiteration', restartHeart);
}

function positionHeart() {
    console.log('positionHeart()');
    console.log(this);

    this.classList.value = '';
    this.offsetHeight;
    this.classList.add('fall8');
    let randPos = Math.floor(Math.random() * 8) + 1;
    this.classList.add('position' + randPos);
}

function restartHeart() {

    if (lives === 3) {
        this.classList.value = '';
        this.firstElementChild.classList.value = '';
        this.removeEventListener('click', animateHeart);
        this.removeEventListener('animationend', restartHeart);
    } else {
        console.log('restartHeart');
        console.log(this);

        this.removeEventListener('animationend', restartHeart);

        this.classList.value = '';
        this.firstElementChild.classList.remove('move');
        this.offsetHeight;

        this.classList.add('fall8');

        this.addEventListener('click', animateHeart);
        let randPos = Math.floor(Math.random() * 8) + 1;
        console.log(randPos);
        this.classList.add('position' + randPos);
    }

}

function pauseButton() {
    console.log('pauseButton()');

    document.querySelector('#pause_button').classList.add('click');
    document.querySelector('#pause_button').addEventListener('animationiteration', pauseGame);

    if (gameIsPaused === true) {

    } else {

    }
}

function pauseGame() {

    document.querySelector('#pause_button').classList.remove('click');

    if (gameIsPaused === false) {
        console.log('Game is paused');

        document.querySelector('#pause_button').classList.remove('pause_button');
        document.querySelector('#pause_button').classList.add('unpause_button');
        document.querySelector("#timebar_MG").classList.add("paused");

        document.querySelector('#candy_item_container').classList.add('paused');
        document.querySelector('#extra_point_candy_container').classList.add('paused');
        document.querySelector('#heart_candy_container').classList.add('paused');
        document.querySelector('#lollipop_container').classList.add('paused');
        document.querySelector('#apple_container').classList.add('paused');
        document.querySelector('#lemon_container').classList.add('paused');
        document.querySelector('#carrot_container').classList.add('paused');
        document.querySelector('#heart_container').classList.add('paused');

        document.querySelector('#candy_item_sprite').classList.add('paused');
        document.querySelector('#extra_point_candy_sprite').classList.add('paused');
        document.querySelector('#heart_candy_sprite').classList.add('paused');
        document.querySelector('#lollipop_sprite').classList.add('paused');
        document.querySelector('#apple_sprite').classList.add('paused');
        document.querySelector('#lemon_sprite').classList.add('paused');
        document.querySelector('#carrot_sprite').classList.add('paused');
        document.querySelector('#heart_sprite').classList.add('paused');

        document.querySelector('#candy_item_container').removeEventListener('click', animateCandy);
        document.querySelector('#extra_point_candy_container').removeEventListener('click', animatePolka);
        document.querySelector('#heart_candy_container').removeEventListener('click', animateCandy);
        document.querySelector('#lollipop_container').removeEventListener('click', animateCandy);
        document.querySelector('#apple_container').removeEventListener('click', animateVeggie);
        document.querySelector('#lemon_container').removeEventListener('click', animateVeggie);
        document.querySelector('#carrot_container').removeEventListener('click', animateVeggie);
        document.querySelector('#heart_container').removeEventListener('click', animateHeart);

        gameIsPaused = true;
    } else {
        console.log('Game is unpaused');

        document.querySelector('#pause_button').classList.remove('unpause_button');
        document.querySelector('#pause_button').classList.add('pause_button');
        setTimeout(resumeGame, 300);

        gameIsPaused = false;
    }
}

function resumeGame() {
    console.log('resumeGame()');

    document.querySelector('#close_button').classList.value = '';
    document.querySelector('#settings').classList.add('hidden');
    document.querySelector("#timebar_MG").classList.remove("paused");

    document.querySelector('#pause_button').classList.remove('unpause_button');
    document.querySelector('#pause_button').classList.add('pause_button');

    document.querySelector('#candy_item_container').classList.remove('paused');
    document.querySelector('#extra_point_candy_container').classList.remove('paused');
    document.querySelector('#heart_candy_container').classList.remove('paused');
    document.querySelector('#lollipop_container').classList.remove('paused');
    document.querySelector('#apple_container').classList.remove('paused');
    document.querySelector('#lemon_container').classList.remove('paused');
    document.querySelector('#carrot_container').classList.remove('paused');
    document.querySelector('#heart_container').classList.remove('paused');

    document.querySelector('#candy_item_sprite').classList.remove('paused');
    document.querySelector('#extra_point_candy_sprite').classList.remove('paused');
    document.querySelector('#heart_candy_sprite').classList.remove('paused');
    document.querySelector('#lollipop_sprite').classList.remove('paused');
    document.querySelector('#apple_sprite').classList.remove('paused');
    document.querySelector('#lemon_sprite').classList.remove('paused');
    document.querySelector('#carrot_sprite').classList.remove('paused');
    document.querySelector('#heart_sprite').classList.remove('paused');

    document.querySelector('#candy_item_container').addEventListener('click', animateCandy);
    document.querySelector('#extra_point_candy_container').addEventListener('click', animatePolka);
    document.querySelector('#heart_candy_container').addEventListener('click', animateCandy);
    document.querySelector('#lollipop_container').addEventListener('click', animateCandy);
    document.querySelector('#apple_container').addEventListener('click', animateVeggie);
    document.querySelector('#lemon_container').addEventListener('click', animateVeggie);
    document.querySelector('#carrot_container').addEventListener('click', animateVeggie);

    gameIsPaused = false;
}

function timeIsOut() {
    console.log('timeIsOut()');

    document.querySelector("#timebar_MG").removeEventListener("animationiteration", timeIsOut);

    if (points < 25) {
        openGameOver();
    } else {
        openLevelComplete();
    }
}

function reactivatePlayButton() {
    console.log('reactivatePlayButton');
    console.log(this);

    this.removeEventListener('mouseup', reactivatePlayButton);

    document.querySelector('#timebar_MG').classList.remove('paused');
    document.querySelector('#timebar_MG').classList.remove('timer');

    this.classList.add('click');
    this.addEventListener('animationiteration', restartGame);
}

function homeButton() {
    console.log('homeButton()');
    console.log(this);

    this.removeEventListener('mouseup', homeButton);

    document.querySelector('#timebar_MG').classList.remove('paused');
    document.querySelector('#timebar_MG').classList.remove('timer');

    this.classList.add('click');
    this.addEventListener('animationiteration', restartGameTitle);
}

function removeEverything() {
    document.querySelector('#candy_item_container').classList.value = '';
    document.querySelector('#extra_point_candy_container').classList.value = '';
    document.querySelector('#heart_candy_container').classList.value = '';
    document.querySelector('#lollipop_container').classList.value = '';
    document.querySelector('#apple_container').classList.value = '';
    document.querySelector('#lemon_container').classList.value = '';
    document.querySelector('#carrot_container').classList.value = '';
    document.querySelector('#heart_container').classList.value = '';

    document.querySelector('#candy_item_sprite').classList.value = '';
    document.querySelector('#extra_point_candy_sprite').classList.value = '';
    document.querySelector('#heart_candy_sprite').classList.value = '';
    document.querySelector('#lollipop_sprite').classList.value = '';
    document.querySelector('#apple_sprite').classList.value = '';
    document.querySelector('#lemon_sprite').classList.value = '';
    document.querySelector('#carrot_sprite').classList.value = '';
    document.querySelector('#heart_sprite').classList.value = '';

    document.querySelector('#candy_item_container').removeEventListener('click', animateCandy);
    document.querySelector('#extra_point_candy_container').removeEventListener('click', animatePolka);
    document.querySelector('#heart_candy_container').removeEventListener('click', animateCandy);
    document.querySelector('#lollipop_container').removeEventListener('click', animateCandy);
    document.querySelector('#apple_container').removeEventListener('click', animateVeggie);
    document.querySelector('#lemon_container').removeEventListener('click', animateVeggie);
    document.querySelector('#carrot_container').removeEventListener('click', animateVeggie);
}

function openGameOver() {
    document.querySelector('#title_screen').classList.add('hidden');
    document.querySelector('#instructions_screen').classList.add('hidden');
    document.querySelector('#game').classList.add('hidden');
    document.querySelector('#level_complete_screen').classList.add('hidden');

    document.querySelector('#game_over_screen').classList.remove('hidden');
    document.querySelector('#game_over').classList.add('title_appear');

    document.querySelector("#timebar_MG").classList.remove("timer");
    
    removeEverything();

    /*document.querySelector('#candy_item_container').classList.value = '';
    document.querySelector('#extra_point_candy_container').classList.value = '';
    document.querySelector('#heart_candy_container').classList.value = '';
    document.querySelector('#lollipop_container').classList.value = '';
    document.querySelector('#apple_container').classList.value = '';
    document.querySelector('#lemon_container').classList.value = '';
    document.querySelector('#carrot_container').classList.value = '';
    document.querySelector('#heart_container').classList.value = '';

    document.querySelector('#candy_item_sprite').classList.value = '';
    document.querySelector('#extra_point_candy_sprite').classList.value = '';
    document.querySelector('#heart_candy_sprite').classList.value = '';
    document.querySelector('#lollipop_sprite').classList.value = '';
    document.querySelector('#apple_sprite').classList.value = '';
    document.querySelector('#lemon_sprite').classList.value = '';
    document.querySelector('#carrot_sprite').classList.value = '';
    document.querySelector('#heart_sprite').classList.value = '';

    document.querySelector('#candy_item_container').removeEventListener('click', animateCandy);
    document.querySelector('#extra_point_candy_container').removeEventListener('click', animatePolka);
    document.querySelector('#heart_candy_container').removeEventListener('click', animateCandy);
    document.querySelector('#lollipop_container').removeEventListener('click', animateCandy);
    document.querySelector('#apple_container').removeEventListener('click', animateVeggie);
    document.querySelector('#lemon_container').removeEventListener('click', animateVeggie);
    document.querySelector('#carrot_container').removeEventListener('click', animateVeggie);*/

    document.querySelector('#game_over_screen').classList.remove('hidden');
    document.querySelector('#GO_replay_button').addEventListener('mouseup', reactivatePlayButton);
    document.querySelector('#GO_home_button').addEventListener('mouseup', homeButton);

    gameHasEnded = true;
}

function openLevelComplete() {
    document.querySelector('#title_screen').classList.add('hidden');
    document.querySelector('#instructions_screen').classList.add('hidden');
    document.querySelector('#game').classList.add('hidden');
    document.querySelector('#game_over_screen').classList.add('hidden');

    document.querySelector('#level_complete_screen').classList.remove('hidden');
    document.querySelector('#level_complete').classList.add('title_appear');
    
    removeEverything();

   /* document.querySelector('#candy_item_container').classList.value = '';
    document.querySelector('#extra_point_candy_container').classList.value = '';
    document.querySelector('#heart_candy_container').classList.value = '';
    document.querySelector('#lollipop_container').classList.value = '';
    document.querySelector('#apple_container').classList.value = '';
    document.querySelector('#lemon_container').classList.value = '';
    document.querySelector('#carrot_container').classList.value = '';
    document.querySelector('#heart_container').classList.value = '';

    document.querySelector('#candy_item_sprite').classList.value = '';
    document.querySelector('#extra_point_candy_sprite').classList.value = '';
    document.querySelector('#heart_candy_sprite').classList.value = '';
    document.querySelector('#lollipop_sprite').classList.value = '';
    document.querySelector('#apple_sprite').classList.value = '';
    document.querySelector('#lemon_sprite').classList.value = '';
    document.querySelector('#carrot_sprite').classList.value = '';
    document.querySelector('#heart_sprite').classList.value = '';

    document.querySelector('#candy_item_container').removeEventListener('click', animateCandy);
    document.querySelector('#extra_point_candy_container').removeEventListener('click', animatePolka);
    document.querySelector('#heart_candy_container').removeEventListener('click', animateCandy);
    document.querySelector('#lollipop_container').removeEventListener('click', animateCandy);
    document.querySelector('#apple_container').removeEventListener('click', animateVeggie);
    document.querySelector('#lemon_container').removeEventListener('click', animateVeggie);
    document.querySelector('#carrot_container').removeEventListener('click', animateVeggie);*/

    document.querySelector('#game_over_screen').classList.remove('hidden');
    document.querySelector('#LC_replay_button').addEventListener('mouseup', reactivatePlayButton);
    document.querySelector('#LC_home_button').addEventListener('mouseup', homeButton);
}

function restartGame() {
    console.log('restartGame()');
    document.querySelector('#title_screen').classList.add('hidden');
    document.querySelector('#instructions_screen').classList.add('hidden');
    document.querySelector('#game').classList.add('hidden');
    document.querySelector('#level_complete_screen').classList.add('hidden');
    document.querySelector('#game_over_screen').classList.add('hidden');
    document.querySelector('#settings').classList.add('hidden');

    lives = 3;
    points = 0;

    document.querySelector('#GO_replay_button').removeEventListener('animationiteration', restartGame);
    document.querySelector('#LC_replay_button').removeEventListener('animationiteration', restartGame);
    document.querySelector('#replay_button').removeEventListener('animationiteration', restartGame);
    document.querySelector('#GO_replay_button').classList.value = '';
    document.querySelector('#LC_replay_button').classList.value = '';
    document.querySelector('#replay_button').classList.value = '';

    document.querySelector("#timebar_MG").classList.remove('timer');
    document.querySelector("#timebar_MG").classList.add('timer');
    
    removeEverything();

    /*document.querySelector('#candy_item_container').classList.value = '';
    document.querySelector('#extra_point_candy_container').classList.value = '';
    document.querySelector('#heart_candy_container').classList.value = '';
    document.querySelector('#lollipop_container').classList.value = '';
    document.querySelector('#apple_container').classList.value = '';
    document.querySelector('#lemon_container').classList.value = '';
    document.querySelector('#carrot_container').classList.value = '';
    document.querySelector('#heart_container').classList.value = '';

    document.querySelector('#candy_item_sprite').classList.value = '';
    document.querySelector('#extra_point_candy_sprite').classList.value = '';
    document.querySelector('#heart_candy_sprite').classList.value = '';
    document.querySelector('#lollipop_sprite').classList.value = '';
    document.querySelector('#apple_sprite').classList.value = '';
    document.querySelector('#lemon_sprite').classList.value = '';
    document.querySelector('#carrot_sprite').classList.value = '';
    document.querySelector('#heart_sprite').classList.value = '';
    document.querySelector('#pause_button').classList.value = '';

    document.querySelector('#candy_item_container').removeEventListener('click', animateCandy);
    document.querySelector('#extra_point_candy_container').removeEventListener('click', animatePolka);
    document.querySelector('#heart_candy_container').removeEventListener('click', animateCandy);
    document.querySelector('#lollipop_container').removeEventListener('click', animateCandy);
    document.querySelector('#apple_container').removeEventListener('click', animateVeggie);
    document.querySelector('#lemon_container').removeEventListener('click', animateVeggie);
    document.querySelector('#carrot_container').removeEventListener('click', animateVeggie);*/
    document.querySelector('#pause_button').removeEventListener('animationiteration', pauseGame);

    gameHasEnded = false;

    openGameScreen();
}

function restartGameTitle() {
    document.querySelector('#title_screen').classList.add('hidden');
    document.querySelector('#instructions_screen').classList.add('hidden');
    document.querySelector('#game').classList.add('hidden');
    document.querySelector('#level_complete_screen').classList.add('hidden');
    document.querySelector('#game_over_screen').classList.add('hidden');

    lives = 3;
    points = 0;

    document.querySelector('#GO_home_button').classList.value = '';
    document.querySelector('#LC_home_button').classList.value = '';
    document.querySelector('#GO_home_button').removeEventListener('animationiteration', restartGameTitle);
    document.querySelector('#LC_home_button').removeEventListener('animationiteration', restartGameTitle);


    document.querySelector("#timebar_MG").classList.remove("timer");

    document.querySelector('#pause_button').classList.value = '';
    document.querySelector('#pause_button').removeEventListener('mouseup', pauseButton);

    document.querySelector('#candy_item_container').classList.remove('paused');
    document.querySelector('#extra_point_candy_container').classList.remove('paused');
    document.querySelector('#heart_candy_container').classList.remove('paused');
    document.querySelector('#lollipop_container').classList.remove('paused');
    document.querySelector('#apple_container').classList.remove('paused');
    document.querySelector('#lemon_container').classList.remove('paused');
    document.querySelector('#carrot_container').classList.remove('paused');
    document.querySelector('#heart_container').classList.remove('paused');

    document.querySelector('#candy_item_sprite').classList.remove('paused');
    document.querySelector('#extra_point_candy_sprite').classList.remove('paused');
    document.querySelector('#heart_candy_sprite').classList.remove('paused');
    document.querySelector('#lollipop_sprite').classList.remove('paused');
    document.querySelector('#apple_sprite').classList.remove('paused');
    document.querySelector('#lemon_sprite').classList.remove('paused');
    document.querySelector('#carrot_sprite').classList.remove('paused');
    document.querySelector('#heart_sprite').classList.remove('paused');

    gameHasEnded = false;

    openTitleScreen();
}
