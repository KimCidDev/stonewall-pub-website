/*
 * Stonewall Pub — site content.
 * Edit this file to update hours, specials and the menu. No build step needed.
 *
 * Source: current site stonewallpub.ca, as shown on Nov 15, 2026.
 * Prices are NOT confirmed with the owner yet.
 */
window.STONEWALL = {

  /* Opening hours. Day index: 0 = Sunday … 6 = Saturday.
     "close" can be past midnight (e.g. "02:00" means 2 AM the next morning). */
  hours: [
    { day: "Sunday",    open: "11:00", close: "23:30" },
    { day: "Monday",    open: "11:00", close: "23:30" },
    { day: "Tuesday",   open: "11:00", close: "23:30" },
    { day: "Wednesday", open: "11:00", close: "00:00" },
    { day: "Thursday",  open: "11:00", close: "00:30" },
    { day: "Friday",    open: "11:00", close: "02:00" },
    { day: "Saturday",  open: "11:00", close: "02:00" }
  ],

  /* Daily specials. Empty list = not confirmed yet (shown as [a confirmar]). */
  specials: [
    /* Sun */ [ { name: "Caesars Happy Hour — all day", price: "$6" }, { name: "Wings", price: "80¢" } ],
    /* Mon */ [ { name: "Steak Sandwich", price: "$15" } ],
    /* Tue */ [],
    /* Wed */ [],
    /* Thu */ [],
    /* Fri */ [],
    /* Sat */ [ { name: "Bacon Cheeseburger", price: "$15" } ]
  ],

  /* Booking rules used by the time picker.
     lastSeatingBeforeClose: minutes before closing for the last booking — [a confirmar] */
  booking: {
    stepMinutes: 30,
    lastSeatingBeforeClose: 60,
    maxDaysAhead: 90,
    maxParty: 12
  },

  /* Menu. Only categories with dishes are browsable; the rest are listed as coming. */
  menu: [
    {
      id: "appetizers",
      name: "Appetizers",
      dishes: [
        { name: "Pounds of Wings", desc: "Served with carrots, celery and ranch", price: 17.00 },
        { name: "Veggie Cheese Plate", desc: "Carrots, celery, cucumber, cherry tomatoes, cheddar, Swiss and pepper", price: 15.00 },
        { name: "Garlic Ribs", desc: "Served with carrots, celery and ranch", price: 16.00 },
        { name: "Potato Boats (Skins)", desc: "Green onion, 3 cheese, bacon, sour cream", price: 17.00 },
        { name: "Roast Beef Stuffed Yorkies", desc: "4 Yorkshire puddings stuffed with shaved beef", price: 17.00 },
        { name: "Nachos", desc: "3-cheese blend, bell peppers, onions, jalapeño and black olives", price: 18.00 },
        { name: "Fish Tacos", desc: "3 tacos with grilled haddock, salsa, cheese, avocado and coleslaw", price: 19.00 },
        { name: "Chipotle Chicken Taco", desc: "Cajun chicken, salsa, cheese, avocado, mayo, slaw and lettuce", price: 18.00 },
        { name: "Poutine", desc: "Fries, cheese curds, red wine house-made gravy", price: 10.50 },
        { name: "Chicken Strips and Fries", desc: "Served with your choice of sauce", price: 18.00 },
        { name: "10 pc Rocket Prawns", desc: "Your choice of sauce and garlic toast", price: 14.00 },
        { name: "20 pc Rocket Prawns", desc: "Your choice of sauce and garlic toast", price: 20.00 },
        { name: "3 pc Beef Tacos", desc: "Beef, coleslaw, 3-cheese, salsa, sour cream, chipotle", price: 17.00 },
        { name: "Buffalo Chicken Cheese Dip", desc: "Old aged cheddar, green onion, chicken breast, pita, corn chips", price: 17.00 },
        { name: "Quesadilla", desc: "Grilled with bell pepper, onions, 3-cheese, salsa, sour cream", price: 15.00 }
      ]
    },
    { id: "sliders",    name: "Sliders",     dishes: [] },
    { id: "handhelds",  name: "Handhelds",   dishes: [] },
    { id: "pies",       name: "Pies",        dishes: [] },
    { id: "sides",      name: "Sides",       dishes: [] },
    { id: "main",       name: "Main Course", dishes: [] },
    { id: "breakfast",  name: "Breakfast",   dishes: [] }
  ]
};
