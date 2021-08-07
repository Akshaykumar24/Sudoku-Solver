function blank(sud) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (sud[i][j] === 0) {
        return [i, j];
      }
    }
  }
  return false;
}

function check(sud, r, c, n) {
  for (let i = 0; i < 9; i++) {
    if (sud[r][i] === n) {
      if (i !== c) {
        return false;
      }
    }
    if (sud[i][c] === n) {
      if (i !== r) {
        return false;
      }
    }
  }
  let x = r - (r % 3);
  let y = c - (c % 3);
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      if (i === r && j === c) {
        continue;
      }
      if (sud[i][j] === n) {
        return false;
      }
    }
  }
  return true;
}

export function solver(sud) {
  let x = blank(sud);
  if (x === false) {
    console.log(sud);
    return true;
  }
  let [a, b] = x;
  for (let i = 1; i <= 9; i++) {
    let see = check(sud, a, b, i);
    if (see) {
      sud[a][b] = i;
      if (solver(sud)) {
        return true;
      } else {
        sud[a][b] = 0;
      }
    }
  }
  return false;
}
