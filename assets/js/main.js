let duration = 60 ;
let questionInterval ;
let level = 0 ;

//Audio Player
var correctTrack = document.querySelector('#correct');
var scoreHTML = document.querySelector('#score');
var background = document.querySelector('#background');
var winMusic = document.querySelector('#win');
var loseMusic = document.querySelector('#lose');

// Play-btn
$('.play-btn').on('click',function(){
    ticTic()
    questionInterval = setInterval(function(){
        ticTic()
    }, 1000);
    $('.play-page').fadeIn(500);
    $('.start-page').fadeOut(500);
    winMusic.play();
    loseMusic.play();
    winMusic.pause();
    loseMusic.pause();
    // background.play();
    // startMusic.pause()
    startSound(background,true)

});



// start sound
function startSound(audio,loopOption = false){
    audio.play();
    audio.loop = loopOption;
}

// Score Count
var score = 0;

function scorePass(item_id) {
    level ++
    score = score + 200;
    const item = document.getElementById(item_id);
    const buttonList = document.getElementsByClassName(item_id);
    const listItem = document.getElementsByClassName('img-' + item_id);
    item.style.display = 'none';
    listItem[0].classList.add("animated");
    buttonList[0].classList.add("active");
    setTimeout(function () {
        listItem[0].style.display = 'none';
    }, 1000);
    correctTrack.play();
    scoreHTML.innerHTML = score;

    if (level == 6)
    {
        clearInterval(questionInterval)
        finishGame()
    }
}


function ticTic()
{
    duration-- ;
    if (duration == 0)
    {
        clearInterval(questionInterval)
        finishGame(false)
        return ;
    }
    let minutes = Math.floor(duration/60)  ;
    let seconds = duration%60
    $('#countdown').text(minutes+':'+seconds)
}

function finishGame(win = true)
{
    background.pause()
    $('.play-page').fadeOut(1000);
    if(win)
    {
        correctTrack.pause();
        $('.win-popup').fadeIn()
        winMusic.play() 
    }
    else 
    {
        correctTrack.pause();
        $('.lose-popup').fadeIn()
        loseMusic.play()
    }
    
    setTimeout(function (){
        window.location.reload()
    },5500)
}

$(window).on('load',function(){
    $('#loader-wrapper').hide();
});
