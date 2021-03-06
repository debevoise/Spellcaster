const keywords = {
  all: { type: "all" },
  clear: { type: "clear" },
  spell: { type: "spell" },
  snake: { type: "snake" },
  type: { type: "typetest" },
  test: { type: "typetest" },
  circle: { type: "circle" },
  fast: { type: "speed", action: 0.8 },
  slow: { type: "speed", action: 1.25 },
  big: { type: "fontsize", action: 1.25 },
  little: { type: "fontsize", action: 0.8 },
  up: { type: "move", action: [-1, 0] },
  down: { type: "move", action: [1, 0] },
  left: { type: "move", action: [0, -1] },
  right: { type: "move", action: [0, 1] },
  comic: { type: "font", action: "comic" },
  sans: { type: "font", action: "sans" },
  fun: { type: "font", action: "fun" },
  mono: { type: "font", action: "mono" },
  serif: { type: "font", action: "serif" },
  blue: { type: "color", action: "#5798ad" },
  green: { type: "color", action: "#57ad6e" },
  yellow: { type: "color", action: "#dbc035" },
  purple: { type: "color", action: "#9d64e3" },
  orange: { type: "color", action: "#e67e39" },
  pink: { type: "color", action: "#f20aee" },
  black: { type: "color", action: "#222e2c" },
  red: { type: "color", action: "#de481b" },
  emoji: { type: "emoji" },
  hello: { type: "text", action: "world" },
  madeby: { type: "text", action: " simon debevoise" },
  foo: { type: "text", action: "bar" },
  explode: { type: "explode" }
  // help: { type: "text", action: " I can't" }
};

export default keywords;

// TODO: 
// rotate, snake, typetest, about, index,  