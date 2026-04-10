# ❄️ Multi Air Conditioner Card - A cleaner approach | forked from doanlong1412 |
doanlong1412 made a great card but it was too much for me, visually. i really liked the way it work but the visuals were too much with the emojis. So i made it my own version of it, that suits me.

A custom Home Assistant Lovelace card for multi-room air conditioner control — live temperature dial, fan & swing controls, per-room status tabs, eco mode, timer scheduling, environment sensors, and a full visual editor with up to 8 rooms.

## Features

###  Display & Interface **Every field is possible to hide/show via visual UI so you can adjust it to your needs without effort.**
- 
- ❄️ **Temperature dial** — animated arc gauge showing current room temperature with colour-coded mode glow
- 🏠 **Room photo panel** — per-room custom image with live ON/OFF overlay badge and temperature badge
- 📊 **Status block** — running state, air quality indicator, PM2.5 ring, outdoor temperature, humidity and power consumption
- 🕐 **Live clock** — real-time date and time display with greeting by time of day
- 🌿 **Eco mode badge** — toggle eco/preset mode directly from the card header

### ❄️ Multi-Room Control (up to 8 rooms)
- **Room selector tabs** — shows icon, name, current temperature and ON/OFF badge for every room; always displays 4 at a time with smooth scrolling for more
- **Per-room HVAC control** — Cool / Heat / Dry / Fan Only mode buttons with colour-coded active state
- **Temperature set** — `+` / `−` buttons to adjust set-point; current temperature shown on the dial
- **Fan speed** — cycle through Auto / Low / Medium / High with animated fan blade SVG and bar chart
- **Swing direction** — cycle through Fixed / Up-Down / Left-Right / Both with animated wave SVG
- **Sensors** - Temperature, Humidity and Power consumption Sensors per room

### 🌿 Eco & Quick Actions
- **Eco toggle** — activates eco/preset mode on the selected room's AC unit
- **Quick-action chips** — Eco, Fav, Clean shortcut buttons on the control panel

### ⏱️ Timer Scheduling
- **Per-room timer** — set a 1 / 2 / 4 / 8 hour timer to turn the AC on or off automatically
- **Countdown display** — live countdown shown on the timer button
- **Persistent timers** — timer state is saved to localStorage and restored after page reload

### 🌐 Multi-language Support (11 languages)
- 🇻🇳 Tiếng Việt / 🇬🇧 English / 🇩🇪 Deutsch / 🇫🇷 Français / 🇳🇱 Nederlands / PT Português
- 🇵🇱 Polski / 🇸🇪 Svenska / 🇭🇺 Magyar / 🇨🇿 Čeština / 🇮🇹 Italiano
- **Real country flag images** in language selector

### 🎨 Visual Customisation
- **16 background gradient presets** — Default, Night, Sunset, Forest, Aurora, Desert, Ocean, Cherry, Volcano, Galaxy, Ice, Olive, Slate, Rose, Teal, Custom
- **3 colour pickers** — Accent, Text, Background custom colours
- **Background transparency** - Slider to  adjust the transparency of the background

---

## 📦 Installation

### Option 1 — HACS (recommended)

**Step 1:** Add Custom Repository to HACS:

[![Open HACS Repository](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=m1xminus&repository=multi-air-conditioner-card&category=plugin)

> If the button doesn't work, add manually:
> **HACS → Frontend → ⋮ → Custom repositories**
> → URL: `https://github.com/m1xminus/multi-air-conditioner-card` → Type: **Dashboard** → Add

**Step 2:** Search for **Multi Air Conditioner Card** → **Install**

**Step 3:** Hard-reload your browser (`Ctrl+Shift+R`)

---

### Option 2 — Manual

1. Download [`multi-air-conditioner-card.js`](https://github.com/m1xminus/multi-air-conditioner-card/releases/latest)
2. Copy to `/config/www/multi-air-conditioner-card.js`
3. Go to **Settings → Dashboards → Resources** → **Add resource**:
   ```
   URL:  /local/multi-air-conditioner-card.js
   Type: JavaScript module
   ```
4. Hard-reload your browser (`Ctrl+Shift+R`)

---
## 📄 License

MIT License — free to use, modify, and distribute.
If you find this useful, **star the repo**!

---

## 🙏 Credits

Originally Designed and developed by **https://github.com/doanlong1412**
