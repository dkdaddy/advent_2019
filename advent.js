const images = [
    'bells',
    'reindeer',
    'sack',
    'santa',
    'snowman',
    'stocking',
    'santa2',
    'present',
    'penguin',
    'bells',
    'reindeer',
    'sack',
    'santa',
    'snowman',
    'stocking',
    'santa2',
    'present',
    'penguin',
    'bells',
    'reindeer',
    'sack',
    'santa',
    'snowman',
    'stocking',
    'santa2',
    'present',
    'penguin',
];
const james = [
    `j1.jpg`,
    `j2.jpg`,
    `j3.jpg`,
    `j4.jpg`,
    `j5.jpg`,
    `enigmatic cuisine container`,
    '12.2cm does not seem far to wave',
    'Need a fuse?',
    'j9.jpg',
    `You'll need to paradiddle`,
    `2.616e2 cycles per second`,
    `when is a door not a door?`,
    `Famous cricketer looks behind to 1880`,
    `Turning the tables leads to a nutty outcome`,
    `Don't let the pirate sink you`,
    `j16.png`,
    `j17.png`,
    `only time will tell`,
    `Don't let your fan be left behind`,
    `HP rests at hedge 1 Wood `,
    `You'll need to co-operate. 388___`,
    `How to make a pizza rustic?`,
    `gm1.png`,
    `gm3.png`
];
const ben = [
    `Thor's brother liked mustard! Who knew! 907810`,
    'Did you hear the news about Colonel Mustard? 321706',
    'Where did the rain in Spain fall mainly? QT839200340GB',
    'Feeling unwell? Maybe you should visit the hospital. 000194',
    'Still ill? Try again. 455033',
    `Martell or Lieberher, IT's all the same. 899558`,
    'You will need to Co-Operate again for this one. 300350',
    'What did the Dr say to the man who swallowed a coin? Any change? 253554',
    'album.universally.cowboy',
    `The MIB's rapping son's name mis-spelt. 017592`,
    '127.0.0.1',
    `enigmatic cuisine container`,
    `12.2cm does not seem far to wave`,
    `When Ben met Coleman`,
    `Don't let the pirate sink you`,
    `j5.jpg`,
    `b17.png`,
    `The door to nowhere`,
    `Don't get bowled en placard`,
    `Don't get trapped`,
    `You'll need to co-operate. ___510`,
    `Contrate on 28`,
    `gm2.png`,
    `gm4.png`
];
function getImage(day) {
    return `./media/${images[day - 1]}.webp`;
}
function getClue(day) {
    const now = new Date();
    const today = now.getDate();
    const month = now.getMonth();
    if (month<11 || day>today) 
        return ''; // no clue until the day
    const href = window.location.href;
    const clues = href.indexOf('james') > 0 ? james : ben;
    return clues[day - 1];
}
function load() {
    console.log('loaded', window.location.href);
    var calendar = document.getElementById('container');

    const ROWS = 4;
    const COLS = 6;
    let html = '';
    let day = 1;
    for (let r = 0; r < ROWS; r++) {
        html += `<div class="row">`;
        for (let c = 0; c < COLS; c++) {
            const day = 1+c+r*COLS;
            html += `<div class="flip-container" onClick="play(${2});event.stopPropagation();">`;
            html += `<div class="flipper">`;
            html += `<div class="front">`;
            html += `<img src="${getImage(day)}" height='180px' width='180px'></img>`;
            html += `<div class='day_of_month'>${day}</div>`;
            html += `</div>`;
            html += `<div class="back">`;
            const clue = getClue(day);
            if (clue) {
                if (clue.indexOf('.jpg')>0 || clue.indexOf('.png')>0 ) 
                    html += `<img src="./media/${clue}" height='180px' width='180px'></img>`;
                else
                    html += `<div class='clue'>${clue}</div>`;
            }
            else {
                html += `<img src="./media/under-construction.png" height='180px' width='180px'></img>`;
            }
            html += `</div>`;
            html += `</div>`;
            html += `</div>`;
        }
        html += `</div>`;
    }
    calendar.innerHTML = html;
}
function play(n) {
    console.log('play');
    document.getElementById("my_audio" + n).play();
}