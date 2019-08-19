const board = [];

function play(clickedId) {
  const playerSpan = document.getElementById('player');
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    board[clickedId] = 'X';
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    board[clickedId] = 'O';
  }
  console.log(board);

  let topLeft = board[0];
  let topCenter = board[1];
  let topRight = board[2];
  let middleLeft = board[3];
  let middleCenter = board[4];
  let middleRight = board[5];
  let bottomLeft = board[6];
  let bottomCenter = board[7];
  let bottomRight = board[8];


  function reset() {
    let td = document.getElementsByTagName('td')
    for (i = 0; i <= 8; i++){
      td.innerText = ''
    }
    console.log(td)




  }

  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} wins`);
    reset()
    console.log('l')
    return;
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} wins`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} wins`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} wins`);
    return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} wins`);
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} wins`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} wins`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} wins`);
    return;
  }


  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game");
  }
}

