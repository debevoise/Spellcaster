export function addCoordinates(a1, a2) {
    return [a1[0] + a2[0], a1[1] + a2[1]];
}

export function addBoundedCoordinates(a1, a2, grid) {
    let x = a1[0] + a2[0]
    let y = a1[1] + a2[1];
    x = x % grid.height;
    y = y % grid.width;
    if (x < 0) x += grid.height;
    if (y < 0) y += grid.width;
    return [x,y]
}

export function replaceChildren(parent, child) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    parent.appendChild(child);
}

export function equalCoordinates(a1, a2) {
    return a1[0] === a2[0] && a1[1] === a2[1];
}

export function includesCoordinates(coordList, coord) {
    let res = false;

    coordList.forEach(xy => {
        if (equalCoordinates(xy, coord)) {
            res = true;
        }
    });

    return res;
}

export function toEmoji(str) {
    str = str.toLowerCase();

    let EMOJIS = [
      "😠",
      "😳",
      "👨‍👨‍👦",
      "🍆",
      "🐵",
      "🐱",
      "💩",
      "🌞",
      "🌈",
      "🌊",
      "🗽",
      "🛸",
      "👨‍👨‍👦",
      "🥓",
      "👌",
      "🏞",
      "🎢",
      "🚖",
      "🍩",
      "🍔",
      "🇮🇷",
      "🤥",
      "👂",
      "☢",
      "🈵",
      "🤣"
    ];


    let code = str.charCodeAt(0) - 97;
    return EMOJIS[code];
}