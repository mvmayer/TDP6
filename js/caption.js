// Span Element Variables

let one = document.querySelector('span.one');
let two = document.querySelector('span.two');
let three = document.querySelector('span.three');
let four = document.querySelector('span.four');
let five = document.querySelector('span.five');
let six = document.querySelector('span.six');
let seven = document.querySelector('span.seven');
let eight = document.querySelector('span.eight');
let nine = document.querySelector('span.nine');
let ten = document.querySelector('span.ten');
let eleven = document.querySelector('span.eleven');
let twelve = document.querySelector('span.twelve');
let thirteen = document.querySelector('span.thirteen');
let fourteen = document.querySelector('span.fourteen');
let fifteen = document.querySelector('span.fifteen');
let sixteen = document.querySelector('span.sixteen');

// highlights current Span element while video plays

let timeChange = document.querySelector('video');
timeChange.addEventListener('timeupdate', () => {
  let time = document.querySelector('video');
  let playtime = time.getCurrentTime();
  if (playtime > 0.24 && playtime < 4.13) {
    one.style.color = 'blue';
  } else {
    one.style.color = 'black';
  }
  if (playtime > 4.13 && playtime < 7.535) {
    two.style.color = 'blue';
  } else {
    two.style.color = 'black';
  }
  if (playtime > 7.535 && playtime < 11.27) {
    three.style.color = 'blue';
  } else {
    three.style.color = 'black';
  }
  if (playtime > 11.27 && playtime < 13.96) {
    four.style.color = 'blue';
  } else {
    four.style.color = 'black';
  }
  if (playtime > 13.96 && playtime < 17.94) {
    five.style.color = 'blue';
  } else {
    five.style.color = 'black';
  }
  if (playtime > 17.94 && playtime < 22.37) {
    six.style.color = 'blue';
  } else {
    six.style.color = 'black';
  }
  if (playtime > 22.37 && playtime < 26.88) {
    seven.style.color = 'blue';
  } else {
    seven.style.color = 'black';
  }
  if (playtime > 26.88 && playtime < 30.92) {
    eight.style.color = 'blue';
  } else {
    eight.style.color = 'black';
  }
  if (playtime > 32.1 && playtime < 34.73) {
    nine.style.color = 'blue';
  } else {
    nine.style.color = 'black';
  }
  if (playtime > 34.73 && playtime < 39.43) {
    ten.style.color = 'blue';
  } else {
    ten.style.color = 'black';
  }
  if (playtime > 39.43 && playtime < 41.19) {
    eleven.style.color = 'blue';
  } else {
    eleven.style.color = 'black';
  }
  if (playtime > 42.35 && playtime < 46.3) {
    twelve.style.color = 'blue';
  } else {
    twelve.style.color = 'black';
  }
  if (playtime > 46.3 && playtime < 49.27) {
    thirteen.style.color = 'blue';
  } else {
    thirteen.style.color = 'black';
  }
  if (playtime > 49.27 && playtime < 53.76) {
    fourteen.style.color = 'blue';
  } else {
    fourteen.style.color = 'black';
  }
  if (playtime > 53.76 && playtime < 57.78) {
    fifteen.style.color = 'blue';
  } else {
    fifteen.style.color = 'black';
  }
  if (playtime > 57.78 && playtime < 61.01) {
    sixteen.style.color = 'blue';
  } else {
    sixteen.style.color = 'black';
  }
});
