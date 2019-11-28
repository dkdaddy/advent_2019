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
    `enigmatic cuisine container`,
];
const ben = [
    `Thor's brother liked mustard! Who knew!`
];
function getImage(day) {
    return `./media/${images[day - 1]}.webp`;
}
function getClue(day) {
    const today = (new Date()).getDate()-20; // todo -20 hack
    if (day>today) return 'X';
    const href = window.location.href;
    const clues = href.indexOf('ja') > 0 ? james : ben;
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
                if (clue.indexOf('.jpg')>0) 
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