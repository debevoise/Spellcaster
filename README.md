# Spellcaster

Cast spells with words! In Spellcaster, a user can chain sequences of keywords that effects the properties of a 'spell'. These spells move about and effect a grid of cells that contain either a character or nothing at all. For example, the spell 'upfooupleftredbar' contains the keywords 'up', 'up', 'left', 'red', which determines that the spell will have a red background and will move up 2 spaces and left 1 space per animation frame. By pressing space, a user releases that spell and can start a new one. Spells take effect even as a user is creating one, so the cursor will move with the spell. Ultimately, the grid will be populated with various spells that are changing dynamically. 

Example keywords: 

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
