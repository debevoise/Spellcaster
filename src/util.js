export function addCoordinates(a1, a2) {
    return [a1[0] + a2[0], a1[1] + a2[1]];
}

export function replaceChildren(parent, child) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    parent.appendChild(child);
}