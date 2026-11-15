/* Stonewall Pub — homepage behaviour. Plain JS, no libraries.
   All click handlers are attached here (no inline handlers). */
(function () {
  "use strict";

  var D = window.STONEWALL;
  var TZ = "America/Edmonton";
  var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  /* ---------- time helpers (always Calgary time, whatever the phone's zone) ---------- */

  function calgaryNow() {
    var parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    }).formatToParts(new Date());
    var p = {};
    parts.forEach(function (x) { p[x.type] = x.value; });
    var y = +p.year, m = +p.month - 1, d = +p.day;
    var dow = new Date(Date.UTC(y, m, d)).getUTCDay();
    return { y: y, m: m, d: d, dow: dow, mins: (+p.hour) * 60 + (+p.minute) };
  }

  function toMins(hhmm) {
    var a = hhmm.split(":");
    return (+a[0]) * 60 + (+a[1]);
  }

  /* closing minutes relative to the opening day (past midnight => > 1440) */
  function closeMins(h) {
    var c = toMins(h.close);
    return c <= toMins(h.open) ? c + 1440 : c;
  }

  function fmt12(mins) {
    mins = mins % 1440;
    var h = Math.floor(mins / 60), m = mins % 60;
    var ampm = h >= 12 ? "PM" : "AM";
    var h12 = h % 12 === 0 ? 12 : h % 12;
    if (mins === 0) return "Midnight";
    return h12 + (m ? ":" + (m < 10 ? "0" : "") + m : "") + " " + ampm;
  }

  function iso(y, m, d) {
    return y + "-" + (m < 9 ? "0" : "") + (m + 1) + "-" + (d < 10 ? "0" : "") + d;
  }

  function addDays(y, m, d, n) {
    var t = new Date(Date.UTC(y, m, d + n));
    return { y: t.getUTCFullYear(), m: t.getUTCMonth(), d: t.getUTCDate(), dow: t.getUTCDay() };
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  var now = calgaryNow();

  /* ---------- open / closed status ---------- */

  function renderStatus() {
    var status = document.getElementById("openStatus");
    var today = D.hours[now.dow];
    var yday = D.hours[(now.dow + 6) % 7];
    var open = false, until = null;

    // still open from yesterday's late night?
    var ydClose = closeMins(yday);
    if (ydClose > 1440 && now.mins < ydClose - 1440) { open = true; until = ydClose; }
    else if (now.mins >= toMins(today.open) && now.mins < closeMins(today)) { open = true; until = closeMins(today); }

    if (open) {
      status.textContent = "Open now · until " + fmt12(until);
      status.classList.add("status--open");
    } else {
      var opensToday = now.mins < toMins(today.open);
      status.textContent = "Closed · opens " + fmt12(toMins(today.open)) + (opensToday ? "" : " tomorrow");
      status.classList.add("status--closed");
    }
    document.getElementById("todayHours").textContent =
      fmt12(toMins(today.open)) + " – " + fmt12(closeMins(today));
  }

  /* ---------- specials ---------- */

  function specialItems(list) {
    var ul = el("ul", "special-items");
    if (!list.length) {
      var li = el("li", "special-items__tbc");
      li.appendChild(el("span", null, "Special to be announced "));
      li.appendChild(el("span", "tbc", "[a confirmar]"));
      ul.appendChild(li);
      return ul;
    }
    list.forEach(function (s) {
      var li = el("li");
      li.appendChild(el("span", "special-items__price", s.price));
      li.appendChild(el("span", "special-items__name", s.name));
      ul.appendChild(li);
    });
    return ul;
  }

  function renderSpecials() {
    var dateLabel = DAYS[now.dow] + ", " + MONTHS[now.m] + " " + now.d;
    document.getElementById("todayLabel").textContent = "Today · " + dateLabel;

    var card = document.getElementById("todayCard");
    card.textContent = "";
    card.appendChild(specialItems(D.specials[now.dow]));
    if (now.dow === 0) card.appendChild(el("p", "today-card__note", "Sunday is happy hour all day — and the pool tables are free."));
    var hh = el("p", "today-card__hh");
    hh.appendChild(el("span", null, "Happy hour on other days: "));
    hh.appendChild(el("span", "tbc", "[a confirmar]"));
    card.appendChild(hh);

    var list = document.getElementById("weekList");
    list.textContent = "";
    for (var i = 0; i < 7; i++) {
      var day = addDays(now.y, now.m, now.d, i);
      var li = el("li", "week__day" + (i === 0 ? " is-today" : ""));
      li.appendChild(el("span", "week__date", (i === 0 ? "Today · " : "") + DAYS[day.dow].slice(0, 3) + " " + MONTHS[day.m].slice(0, 3) + " " + day.d));
      li.appendChild(specialItems(D.specials[day.dow]));
      list.appendChild(li);
    }
  }

  /* ---------- menu ---------- */

  var activeCat = null;

  function renderCats() {
    var list = document.getElementById("catList");
    list.textContent = "";
    D.menu.forEach(function (c, i) {
      var li = el("li");
      var b = el("button", "cat", c.name);
      b.type = "button";
      b.dataset.cat = c.id;
      if (c.dishes.length) b.appendChild(el("span", "cat__count", String(c.dishes.length)));
      b.addEventListener("click", function () { selectCat(c.id); });
      li.appendChild(b);
      list.appendChild(li);
      if (i === 0) activeCat = c.id;
    });
    selectCat(activeCat, true);
  }

  function selectCat(id, silent) {
    activeCat = id;
    Array.prototype.forEach.call(document.querySelectorAll(".cat"), function (b) {
      var on = b.dataset.cat === id;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    var cat = D.menu.filter(function (c) { return c.id === id; })[0];
    var list = document.getElementById("dishList");
    list.textContent = "";

    if (!cat.dishes.length) {
      var li = el("li", "dish dish--pending");
      li.appendChild(el("h3", "dish__name", cat.name));
      li.appendChild(el("p", "dish__desc", "These dishes move over from the current menu — each with its own photo — in the full menu page."));
      list.appendChild(li);
      return;
    }

    cat.dishes.forEach(function (d, i) {
      var li = el("li", "dish");
      var photo = el("div", "dish__photo photo-slot photo-slot--v" + (i % 4));
      photo.setAttribute("role", "img");
      photo.setAttribute("aria-label", "Photo slot: " + d.name);
      photo.appendChild(el("span", "photo-slot__tag", "Photo slot"));
      photo.appendChild(el("span", "photo-slot__label", d.name));
      li.appendChild(photo);

      var body = el("div", "dish__body");
      var top = el("div", "dish__top");
      top.appendChild(el("h3", "dish__name", d.name));
      top.appendChild(el("span", "dish__dots"));
      top.appendChild(el("span", "dish__price", "$" + d.price.toFixed(2)));
      body.appendChild(top);
      body.appendChild(el("p", "dish__desc", d.desc));
      li.appendChild(body);
      list.appendChild(li);
    });
    if (!silent) document.getElementById("menuTitle").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---------- booking: date, party, sane time slots ---------- */

  var bkDate, bkTimes, bkParty, chosenTime = null;

  function slotsFor(dateStr) {
    var p = dateStr.split("-");
    var dow = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2])).getUTCDay();
    var h = D.hours[dow];
    var start = toMins(h.open);
    var last = closeMins(h) - D.booking.lastSeatingBeforeClose;
    var isToday = dateStr === iso(now.y, now.m, now.d);
    var out = [];
    for (var t = start; t <= last; t += D.booking.stepMinutes) {
      if (isToday && t < now.mins + 30) continue;
      out.push(t);
    }
    return out;
  }

  function renderTimes() {
    bkTimes.textContent = "";
    chosenTime = null;
    if (!bkDate.value) {
      bkTimes.appendChild(el("p", "times__empty", "Pick a date first."));
      return;
    }
    var slots = slotsFor(bkDate.value);
    if (!slots.length) {
      var p = el("p", "times__empty", "No more tables today online — ");
      var a = el("a", null, "call us");
      a.href = "tel:+14032412877";
      p.appendChild(a);
      p.appendChild(document.createTextNode(" or pick another date."));
      bkTimes.appendChild(p);
      return;
    }
    var groups = [
      { label: "Lunch", from: 0, to: 15 * 60 },
      { label: "Afternoon", from: 15 * 60, to: 18 * 60 },
      { label: "Evening", from: 18 * 60, to: 9999 }
    ];
    groups.forEach(function (g) {
      var inG = slots.filter(function (t) { return t >= g.from && t < g.to; });
      if (!inG.length) return;
      var wrap = el("div", "times__group");
      wrap.appendChild(el("span", "times__label", g.label));
      var row = el("div", "times__row");
      inG.forEach(function (t) {
        var b = el("button", "slot", fmt12(t));
        b.type = "button";
        b.setAttribute("role", "radio");
        b.setAttribute("aria-checked", "false");
        b.dataset.mins = t;
        b.addEventListener("click", function () {
          Array.prototype.forEach.call(bkTimes.querySelectorAll(".slot"), function (s) {
            s.classList.remove("is-on");
            s.setAttribute("aria-checked", "false");
          });
          b.classList.add("is-on");
          b.setAttribute("aria-checked", "true");
          chosenTime = t;
        });
        row.appendChild(b);
      });
      wrap.appendChild(row);
      bkTimes.appendChild(wrap);
    });
    var note = el("p", "times__note");
    note.appendChild(el("span", null, "Last booking 1 hour before close. "));
    note.appendChild(el("span", "tbc", "[a confirmar]"));
    bkTimes.appendChild(note);
  }

  function initBooking() {
    bkDate = document.getElementById("bkDate");
    bkTimes = document.getElementById("bkTimes");
    bkParty = document.getElementById("bkParty");

    var first = iso(now.y, now.m, now.d);
    // if today has no slots left, default to tomorrow
    var startDay = slotsFor(first).length ? 0 : 1;
    var s = addDays(now.y, now.m, now.d, startDay);
    var max = addDays(now.y, now.m, now.d, D.booking.maxDaysAhead);
    bkDate.min = first;
    bkDate.max = iso(max.y, max.m, max.d);
    bkDate.value = iso(s.y, s.m, s.d);

    for (var i = 1; i <= D.booking.maxParty; i++) {
      var o = el("option", null, i + (i === 1 ? " person" : " people"));
      o.value = i;
      if (i === 2) o.selected = true;
      bkParty.appendChild(o);
    }
    var big = el("option", null, "13+ — call us");
    big.value = "13+";
    bkParty.appendChild(big);

    bkDate.addEventListener("change", renderTimes);
    renderTimes();

    var form = document.getElementById("bookForm");
    var err = document.getElementById("bkError");
    var done = document.getElementById("bookDone");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var problems = [];
      if (bkParty.value === "13+") problems.push("For 13 or more, please call us at 403-241-2877.");
      if (!bkDate.value) problems.push("Pick a date.");
      if (chosenTime === null) problems.push("Pick a time.");
      if (!form.elements["name"].value.trim()) problems.push("Add your name.");
      if (form.elements["phone"].value.replace(/\D/g, "").length < 10) problems.push("Add a 10-digit phone number.");
      if (problems.length) {
        err.textContent = problems.join(" ");
        err.hidden = false;
        return;
      }
      err.hidden = true;
      var p = bkDate.value.split("-");
      var dow = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2])).getUTCDay();
      document.getElementById("bookSummary").textContent =
        "Table for " + bkParty.value + " on " + DAYS[dow] + ", " + MONTHS[+p[1] - 1] + " " + (+p[2]) +
        " at " + fmt12(chosenTime) + ", under " + form.elements["name"].value.trim() + ".";
      form.hidden = true;
      done.hidden = false;
      done.focus();
      done.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    document.getElementById("bookAgain").addEventListener("click", function () {
      done.hidden = true;
      form.hidden = false;
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ---------- hours table ---------- */

  function renderHours() {
    var body = document.getElementById("hoursBody");
    body.textContent = "";
    // Monday first, like a week reads
    [1, 2, 3, 4, 5, 6, 0].forEach(function (i) {
      var h = D.hours[i];
      var tr = el("tr", i === now.dow ? "is-today" : null);
      tr.appendChild(el("th", null, h.day));
      tr.appendChild(el("td", null, fmt12(toMins(h.open)) + " – " + fmt12(closeMins(h))));
      body.appendChild(tr);
    });
  }

  /* ---------- smooth scroll for in-page links ---------- */

  function initScroll() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-scroll]"), function (a) {
      a.addEventListener("click", function (e) {
        var target = document.querySelector(a.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", a.getAttribute("href"));
      });
    });
  }

  // on wider screens the whole week sits open beside today's special
  if (window.matchMedia("(min-width: 720px)").matches) {
    document.querySelector(".week").open = true;
  }

  document.getElementById("year").textContent = now.y;
  renderStatus();
  renderSpecials();
  renderCats();
  initBooking();
  renderHours();
  initScroll();
})();
