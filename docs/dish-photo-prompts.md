# Dish photo prompts — Stonewall Pub mockup

Prompts to generate one realistic photo per dish with an AI image tool
(Magnific, Midjourney, ChatGPT, Firefly…). These images are **illustrative, for
the layout mockup only** — they are not Stonewall's real plates. The final site
uses photos from the in-house photo session.

## How to use

1. Paste **the style block + the dish line** as one prompt.
2. Export as **JPG, 1600 × 1000 px (16:10, landscape)**. Keep the dish centred
   with some table around it: on phones the card crops to a square from the centre.
3. Save it as `assets/dishes/<file>.jpg` using the exact file name below.
4. Add the file name (without `.jpg`) to `photos: [ … ]` in `js/data.js`
   — or send the images to Claude and it wires them in.

Tips for a consistent set: generate all dishes in the same session/tool, reuse
the same seed or style reference if the tool allows, and reject images with
text, logos, hands, cutlery clutter or cartoonish colours.

## Style block (start every prompt with this)

```
Realistic professional food photography for a neighbourhood pub menu. One plate
of food on a dark, worn wooden pub table, shot from a 45-degree angle. Warm,
low amber light from the side like a pub at evening, soft shadows, shallow depth
of field, a pint of beer and pub interior softly blurred in the background.
Rich warm tones, natural textures, generous hearty portion, appetizing and
honest — not fine dining. Dish centred with space around it. No text, no logos,
no people, no hands. Landscape 16:10.
```

## Appetizers (real menu items)

| File | Dish line |
| --- | --- |
| `pounds-of-wings` | A pound of crispy saucy chicken wings piled on a plate, with carrot sticks, celery sticks and a small ramekin of ranch dip. |
| `veggie-cheese-plate` | A wooden board with carrot and celery sticks, cucumber slices, cherry tomatoes, cubes of cheddar and Swiss cheese, cracked black pepper. |
| `garlic-ribs` | Sticky garlic pork ribs (dry ribs) glistening with garlic and herbs, served with carrot sticks, celery and a ramekin of ranch. |
| `potato-boats-skins` | Crispy potato skins loaded with melted three-cheese blend, crumbled bacon and sliced green onion, a ramekin of sour cream on the side. |
| `roast-beef-stuffed-yorkies` | Four golden Yorkshire puddings stuffed with thinly shaved roast beef and a little gravy, on a white plate. |
| `nachos` | A big platter of tortilla chips smothered in melted three-cheese blend, diced bell peppers, onions, jalapeño slices and black olives. |
| `fish-tacos` | Three soft tacos with grilled haddock, fresh salsa, shredded cheese, sliced avocado and coleslaw, lined up on a plate. |
| `chipotle-chicken-taco` | Soft tacos filled with Cajun chicken, salsa, cheese, avocado, chipotle mayo, slaw and lettuce. |
| `poutine` | Classic Canadian poutine: thick-cut fries, squeaky cheese curds and rich red-wine gravy poured over, in a bowl. |
| `chicken-strips-and-fries` | Golden breaded chicken strips with a pile of fries and a small ramekin of dipping sauce. |
| `10-pc-rocket-prawns` | Ten crispy battered "rocket" prawns with a dipping sauce ramekin and two slices of garlic toast. |
| `20-pc-rocket-prawns` | A large pile of twenty crispy battered "rocket" prawns, dipping sauce and garlic toast — clearly a sharing portion. |
| `3-pc-beef-tacos` | Three soft tacos with seasoned ground beef, coleslaw, three-cheese blend, salsa, sour cream and a chipotle drizzle. |
| `buffalo-chicken-cheese-dip` | A hot cast-iron skillet of bubbling buffalo chicken cheese dip with aged cheddar and green onion, surrounded by pita wedges and corn chips. |
| `quesadilla` | A grilled quesadilla cut into wedges, oozing three-cheese blend with bell pepper and onion, with ramekins of salsa and sour cream. |

## Sliders (example dishes)

| File | Dish line |
| --- | --- |
| `classic-beef-sliders` | Three mini beef burgers (sliders) with melted cheddar, pickles and house sauce on soft buns, held with wooden picks. |
| `pulled-pork-sliders` | Three pulled pork sliders with smoky BBQ sauce and coleslaw spilling out of soft buns. |
| `crispy-chicken-sliders` | Three crispy buttermilk chicken sliders with lettuce and chipotle mayo on soft buns. |
| `mix-and-match-sliders` | Three different sliders side by side — beef with cheddar, BBQ pulled pork with slaw, crispy chicken — with a side of fries. |

## Handhelds (example dishes)

| File | Dish line |
| --- | --- |
| `bacon-cheeseburger` | A juicy bacon cheeseburger with melted cheddar, lettuce and tomato on a toasted bun, with a side of fries. |
| `steak-sandwich` | An open-faced steak sandwich: sliced grilled steak on garlic toast topped with sautéed onions, with fries. |
| `clubhouse` | A classic clubhouse sandwich cut in triangles with turkey, bacon, lettuce and tomato, held with picks, with fries. |
| `chicken-caesar-wrap` | A grilled chicken Caesar wrap cut in half showing chicken, romaine and parmesan inside, with fries. |

## Pies (example dishes)

| File | Dish line |
| --- | --- |
| `shepherds-pie` | A shepherd's pie in an individual baking dish, golden-browned mashed potato on top, steaming, with seasoned beef and vegetables visible at the edge. |
| `beef-pie` | An individual beef pie with a flaky golden pastry crust, one slice cut open showing braised beef in gravy. |
| `chicken-pie` | An individual chicken pot pie with a golden flaky pastry top, cut open showing creamy chicken and vegetables. |
| `veggie-pie` | An individual vegetable pie with a golden pastry crust, cut open showing seasonal vegetables in herb gravy. |

## Sides (example dishes)

| File | Dish line |
| --- | --- |
| `daily-kettle` | A hearty bowl of homemade soup of the day with a slice of crusty bread on the side. |
| `fries` | A basket of golden hand-cut fries with a ramekin of ketchup. |
| `onion-rings` | A stack of thick beer-battered onion rings with a ramekin of chipotle mayo. |
| `side-caesar-salad` | A small Caesar salad with crisp romaine, shaved parmesan and croutons. |

## Main Course (example dishes)

| File | Dish line |
| --- | --- |
| `striploin-steak` | A grilled 8 oz striploin steak with char marks, garlic toast and a side of fries. |
| `fish-and-chips` | Beer-battered haddock fish and chips with coleslaw, a lemon wedge and tartar sauce. |
| `chicken-caesar-salad` | A large Caesar salad topped with sliced grilled chicken breast, parmesan and croutons. |
| `liver-and-onions` | Pan-fried beef liver smothered in caramelised onions with mashed potatoes and gravy. |

## Breakfast (example dishes)

| File | Dish line |
| --- | --- |
| `classic-breakfast` | A classic pub breakfast: two sunny-side-up eggs, crispy bacon, hash browns and buttered toast. Morning light instead of evening light. |
| `eggs-benedict` | Eggs Benedict: two poached eggs on English muffins with ham and hollandaise, hash browns on the side. Morning light. |
| `breakfast-sandwich` | A breakfast sandwich with fried egg, bacon and melted cheddar on a toasted bun, with hash browns. Morning light. |
| `steak-and-eggs` | Steak and eggs: a grilled striploin, two fried eggs, hash browns and toast. Morning light. |
