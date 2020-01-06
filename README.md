# Spellcaster

Cast spells with words! In Spellcaster, a user can chain sequences of keywords that effects the properties of a 'spell'. These spells move about and effect a grid of cells that contain either a character or nothing at all. For example, the spell 'upfooupleftredbar' contains the keywords 'up', 'up', 'left', 'red', which determines that the spell will have a red background and will move up 2 spaces and left 1 space per animation frame. By pressing space, a user releases that spell and can start a new one. Spells take effect even as a user is creating one, so the cursor will move with the spell. Ultimately, the grid will be populated with various spells that are changing dynamically. 

#### Example keywords: 

* up, down, left, right - determines direction
* all, last, clear - effects preexisting spells
* mono, sans, serif - sets font type
* big, small - sets font size
* blue, red, green, yellow - changes background color
* smile, frown, eggplant - creates emoji spells with corresponding properties
* two, three, four, five - creates that many instances of current spell
* spell - creates random spell
* bounce - bounces off walls
* explode - letters of spell each go off in random direction

## Functionality/MVP

* informational section with about and help tutorial
* interpret spells and change styling correspondingly
* enable grid animations that render spells at given framerate
* tutorial mode: prepopulates with spells that demonstrate functionality
* create dynamic grid that updates height and witdh with window change

## Technologies

This app won't depend heavily on external libraries beyond Webpack. Technologies will include Javascript for spell and Grid logic as well as HTML and CSS for structure and styling. 

#### Game structure

* `index.js` - queries for `#root` element and passes it to `Grid`
* `grid.js`
    * handles rendering
    * populates window with grid of container elements, stores these elements in easily accessible 2d-array
    * contains instances of all active spells    
* `spell.js` 
    * handles parsing text, dispatching action if scope is beyond the individual spell
    * contains properties that correspond to spell actions
    
## Timeline

* Monday: install dependencies, set up file structure, create basic html structure
* Tuesday: flesh out grid class, create spell class and work through logic.
* Wednesday: handle rendering and animation
* Thursday: set up tutorial session
