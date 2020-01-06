const keywords = {
    up: { type: 'move', action: [-1, 0] },
    down: { type: 'move', action: [1, 0] },
    left: { type: 'move', action: [0, -1] },
    right: { type: 'move', action: [0, 1] },
    all: { type: 'all' },
    clear: { type: 'clear' },
    comic: { type: 'font', action: 'comic' },
    sans: { type: 'font', action: 'sans' },
    fun: { type: 'font', action: 'fun' },
    mono: { type: 'font', action: 'mono' },
    serif: { type: 'font', action: 'serif' },

};

export default keywords;