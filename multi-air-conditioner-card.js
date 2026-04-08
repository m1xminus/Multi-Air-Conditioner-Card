/**
 * Multi Air Conditioner Card
 * v1.1 Designed by @doanlong1412 from Vietnam
 * HACS-compatible Web Component
 *
 * ─── What's new in v1.1 ───────────────────────────────────────────────────────
 *  10 languages — full editor + card UI translation
 *  16 background gradient presets (same as Gate Card)
 *  Visual Editor y hệt Gate Card: ha-entity-picker, accordion,
 *      color picker 3-layer, CSS-only toggle, bg preset grid
 *  Focus fix — text inputs không mất focus khi gõ
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── i18n ─────────────────────────────────────────────────────────────────────
const AC_TRANSLATIONS = {
  vi: {
    lang: 'Tiếng Việt', flag: 'vn',
    cardTitle: 'Điều Hòa Không Khí',
    cardSub:   'Nhà Thông Minh',
    greet: function() {
      var h = new Date().getHours();
      if (h>=6  && h<11) return 'Chào buổi sáng,';
      if (h>=11 && h<13) return 'Chào buổi trưa,';
      if (h>=13 && h<18) return 'Chào buổi chiều,';
      if (h>=18 && h<21) return 'Chào buổi tối,';
      return 'Chúc ngủ ngon,';
    },
    tempLabel: 'NHIỆT ĐỘ',
    selectRoom: 'CHỌN PHÒNG',
    statusLabel: 'TRẠNG THÁI',
      statusOn: 'ĐANG BẬT', statusOff: 'TẮT',
    airGood: 'Chất lượng không khí tốt', pressOn: 'Nhấn nguồn để bật',
    dustLabel: 'Bụi mịn',
    fanLabel: 'Tốc độ quạt', swingLabel: 'Hướng gió',
    allOff: 'Tắt tất cả', allOffSub: 'Nhấn để tắt mọi phòng',
    tapOff: 'Nhấn để tắt', tapOn: 'Nhấn để bật',
    confirmOff: '⚠ Tắt tất cả?', confirmSub: function(n) { return 'Sẽ tắt ' + n + ' điều hòa cùng lúc'; },
    cancel: 'Hủy', doOff: '⏻ Tắt hết',
    overlayOn: 'ĐANG BẬT', overlayOff: 'TẮT',
    modes: { cool:'Làm lạnh', heat:'Sưởi', dry:'Hút ẩm', fan_only:'Quạt', off:'Tắt' },
    fans:   ['Tự động','Thấp','Vừa','Cao'],
    swings: ['Cố định','Lên xuống','Trái phải','Tất cả'],
    comfort: { dry:'Không khí khô ráo', fan_only:'Gió nhẹ mát mẻ', off:'Đang tắt' },
    comfortTemp: function(t) {
      t = Math.round(t);
      if (t<=19) return 'Lạnh buốt, mặc thêm áo nhé!';
      if (t<=23) return 'Nhiệt độ lý tưởng, thư giãn thôi';
      if (t<=27) return 'Cảm giác dễ chịu, thoải mái';
      if (t<=31) return 'Hơi ấm, cần làm mát thêm';
      return 'Quá nóng! Hãy điều chỉnh nhiệt độ';
    },
    timerBtn: 'Hẹn giờ',
    bgLabel: 'Màu nền gradient', bgPresets: 'Preset',
    colorLabel: 'Màu sắc', accentColor: 'Màu nhấn (accent)', textColor: 'Màu chữ',
    color1: 'Màu 1 (trên trái)', color2: 'Màu 2 (dưới phải)',
    edLang: 'Ngôn ngữ',
    edEntities: 'Thực thể (Entity)',
    edOwnerName: 'Tên hiển thị (Smart Home)',
    edRoomCountLabel: function(n) { return 'Số lượng phòng (1–8, mặc định 4)'; },
    edRoomsHeader: function(n) { return 'Điều hòa (' + n + ' phòng)'; },
    edRooms: 'Điều hòa',
    edSensors: 'Cảm biến môi trường',
    edColors: 'Màu sắc',
    edBg: 'Màu nền',
    edAcEntity: 'Entity điều hòa (climate.*)',
    edAcName: 'Tên hiển thị',
    edAcIcon: 'Icon (mdi)',
    edPm25: 'Bụi mịn PM2.5',
    edOutdoorTemp: 'Nhiệt độ ngoài trời',
    edHumidity: 'Độ ẩm ngoài trời',
    edPower: 'Tiêu thụ điện (kW)',
    rooms: ['Phòng khách','Phòng ngủ','Phòng ăn','Văn phòng'],
    roomIcons: ['','','',''],
  },
  pt: {
    lang: 'Português (PT)', flag: 'pt',
    cardTitle: 'Ar Condicionado',
    cardSub:   'Casa Inteligente',
    greet: function() {
      var h = new Date().getHours();
      if (h>=6  && h<11) return 'Bom dia,';
      if (h>=11 && h<13) return 'Boa tarde,';
      if (h>=13 && h<18) return 'Boa tarde,';
      if (h>=18 && h<21) return 'Boa noite,';
      return 'Boa noite,';
    },
    tempLabel: 'TEMPERATURA',
    selectRoom: 'SELECIONAR DIVISÃO',
    statusLabel: 'ESTADO',
      statusOn: 'LIGADO', statusOff: 'DESLIGADO',
    airGood: 'Qualidade do ar boa', pressOn: 'Premir para ligar',
    dustLabel: 'Poeira fina',
    fanLabel: 'Velocidade do ventilador', swingLabel: 'Direção do ar',
    allOff: 'Desligar tudo', allOffSub: 'Premir para desligar todas as divisões',
    tapOff: 'Premir para desligar', tapOn: 'Premir para ligar',
    confirmOff: '⚠ Desligar tudo?', confirmSub: function(n) { return 'Irá desligar ' + n + ' aparelhos de AC de uma só vez'; },
    cancel: 'Cancelar', doOff: '⏻ Desligar tudo',
    overlayOn: 'LIGADO', overlayOff: 'DESLIGADO',
    modes: { cool:'Arrefecer', heat:'Aquecimento', dry:'Desumidificar', fan_only:'Ventilador', off:'Desligado' },
    fans:   ['Auto','Baixo','Médio','Alto'],
    swings: ['Fixo','Cima/Baixo','Esquerda/Direita','Todos'],
    comfort: { dry:'Ar seco e confortável', fan_only:'Brisa ligeira e fresca', off:'Atualmente desligado' },
    comfortTemp: function(t) {
      t = Math.round(t);
      if (t<=19) return 'Muito frio, vista mais roupa!';
      if (t<=23) return 'Temperatura ideal, relaxe';
      if (t<=27) return 'Confortável e agradável';
      if (t<=31) return 'Um pouco quente, arrefecer mais';
      return 'Demasiado quente! Ajuste a temperatura';
    },
    timerBtn: 'Temporizador',
    bgLabel: 'Fundo em gradiente', bgPresets: 'Predefinição',
    colorLabel: 'Cores', accentColor: 'Cor de destaque', textColor: 'Cor do texto',
    color1: 'Cor 1 (superior esquerdo)', color2: 'Cor 2 (inferior direito)',
    edLang: 'Idioma',
    edEntities: 'Entidades',
    edOwnerName: 'Nome exibido (Casa Inteligente)',
    edRoomCountLabel: function(n) { return 'Número de divisões (1–8, padrão 4)'; },
    edRoomsHeader: function(n) { return 'Aparelhos AC (' + n + ' divisões)'; },
    edRooms: 'Aparelhos AC',
    edSensors: 'Sensores ambientais',
    edColors: 'Cores',
    edBg: 'Fundo',
    edAcEntity: 'Entidade AC (climate.*)',
    edAcName: 'Nome exibido',
    edAcIcon: 'Icon (mdi)',
    edPm25: 'Poeira PM2.5',
    edOutdoorTemp: 'Temperatura exterior',
    edHumidity: 'Humidade exterior',
    edPower: 'Consumo (kW)',
    rooms: ['Sala','Quarto','Sala de jantar','Escritório'],
    roomIcons: ['','','',''],
  },
  en: {
    lang: 'English', flag: 'gb',
    cardTitle: 'Air Conditioning',
    cardSub:   'Smart Home',
    greet: function() {
      var h = new Date().getHours();
      if (h>=6  && h<11) return 'Good morning,';
      if (h>=11 && h<13) return 'Good noon,';
      if (h>=13 && h<18) return 'Good afternoon,';
      if (h>=18 && h<21) return 'Good evening,';
      return 'Good night,';
    },
    tempLabel: 'TEMPERATURE',
    selectRoom: 'SELECT ROOM',
    statusLabel: 'STATUS',
    statusOn: 'RUNNING', statusOff: 'OFF',
    airGood: 'Air quality is good', pressOn: 'Press power to turn on',
    dustLabel: 'Fine dust',
    fanLabel: 'Fan speed', swingLabel: 'Airflow',
    allOff: 'Turn all off', allOffSub: 'Tap to turn off all rooms',
    tapOff: 'Tap to turn off', tapOn: 'Tap to turn on',
    confirmOff: '⚠ Turn all off?', confirmSub: function(n) { return 'Will turn off ' + n + ' AC units at once'; },
    cancel: 'Cancel', doOff: '⏻ Turn all off',
    overlayOn: 'ON', overlayOff: 'OFF',
    modes: { cool:'Cool', heat:'Heat', dry:'Dry', fan_only:'Fan', off:'Off' },
    fans:   ['Auto','Low','Medium','High'],
    swings: ['Fixed','Up/Down','Left/Right','Both'],
    comfort: { dry:'Dry and comfortable', fan_only:'Light fresh breeze', off:'Currently off' },
    comfortTemp: function(t) {
      t = Math.round(t);
      if (t<=19) return 'Very cold, grab a jacket!';
      if (t<=23) return 'Ideal temperature, relax';
      if (t<=27) return 'Comfortable and pleasant';
      if (t<=31) return 'A bit warm, cool down more';
      return 'Too hot! Adjust the temperature';
    },
    timerBtn: 'Timer',
    bgLabel: 'Gradient background', bgPresets: 'Preset',
    colorLabel: 'Colors', accentColor: 'Accent color', textColor: 'Text color',
    color1: 'Color 1 (top left)', color2: 'Color 2 (bottom right)',
    edLang: 'Language',
    edEntities: 'Entities',
    edOwnerName: 'Display name (Smart Home)',
    edRoomCountLabel: function(n) { return 'Number of rooms (1–8, default 4)'; },
    edRoomsHeader: function(n) { return 'Air Conditioners (' + n + ' rooms)'; },
    edRooms: 'Air Conditioners',
    edSensors: 'Environment Sensors',
    edColors: 'Colors',
    edBg: 'Background',
    edAcEntity: 'AC entity (climate.*)',
    edAcName: 'Display name',
    edAcIcon: 'Icon (mdi)',
    edPm25: 'Fine dust PM2.5',
    edOutdoorTemp: 'Outdoor temperature',
    edHumidity: 'Outdoor humidity',
    edPower: 'Power consumption (kW)',
    rooms: ['Living room','Bedroom','Dining room','Office'],
    roomIcons: ['','','',''],
  },
  de: {
    lang: 'Deutsch', flag: 'de',
    cardTitle: 'Klimaanlage',
    cardSub:   'Smart Home',
    greet: function() {
      var h = new Date().getHours();
      if (h>=6  && h<11) return 'Guten Morgen,';
      if (h>=11 && h<13) return 'Guten Tag,';
      if (h>=13 && h<18) return 'Guten Nachmittag,';
      if (h>=18 && h<21) return 'Guten Abend,';
      return 'Gute Nacht,';
    },
    tempLabel: 'TEMPERATUR',
    selectRoom: 'RAUM WÄHLEN',
    statusLabel: 'STATUS',
    statusOn: 'LÄUFT', statusOff: 'AUS',
    airGood: 'Luftqualität gut', pressOn: 'Einschalten drücken',
    dustLabel: 'Feinstaub',
    fanLabel: 'Lüfterstufe', swingLabel: 'Luftrichtung',
    allOff: 'Alle ausschalten', allOffSub: 'Alle Räume ausschalten',
    tapOff: 'Zum Ausschalten', tapOn: 'Zum Einschalten',
    confirmOff: '⚠ Alle ausschalten?', confirmSub: function(n) { return n + ' Klimaanlagen gleichzeitig ausschalten'; },
    cancel: 'Abbrechen', doOff: '⏻ Alle aus',
    overlayOn: 'AN', overlayOff: 'AUS',
    modes: { cool:'Kühlen', heat:'Heizen', dry:'Entfeuchten', fan_only:'Lüfter', off:'Aus' },
    fans:   ['Auto','Niedrig','Mittel','Hoch'],
    swings: ['Fest','Auf/Ab','Links/Rechts','Alle'],
    comfort: { dry:'Trockene Luft', fan_only:'Angenehme Brise', off:'Ausgeschaltet' },
    comfortTemp: function(t) {
      t = Math.round(t);
      if (t<=19) return 'Sehr kalt, zieh etwas an!';
      if (t<=23) return 'Ideale Temperatur, entspann dich';
      if (t<=27) return 'Angenehm und komfortabel';
      if (t<=31) return 'Etwas warm, mehr kühlen';
      return 'Zu heiß! Temperatur anpassen';
    },
    timerBtn: 'Timer',
    bgLabel: 'Verlaufshintergrund', bgPresets: 'Voreinstellung',
    colorLabel: 'Farben', accentColor: 'Akzentfarbe', textColor: 'Textfarbe',
    color1: 'Farbe 1 (oben links)', color2: 'Farbe 2 (unten rechts)',
    edLang: 'Sprache',
    edEntities: 'Entitäten',
    edOwnerName: 'Anzeigename (Smart Home)',
    edRoomCountLabel: function(n) { return 'Anzahl der Räume (1–8, Standard 4)'; },
    edRoomsHeader: function(n) { return 'Klimaanlagen (' + n + ' Räume)'; },
    edRooms: 'Klimaanlagen',
    edSensors: 'Umgebungssensoren',
    edColors: 'Farben',
    edBg: 'Hintergrund',
    edAcEntity: 'Klimaanlage-Entity (climate.*)',
    edAcName: 'Anzeigename',
    edAcIcon: 'Icon (mdi)',
    edPm25: 'Feinstaub PM2.5',
    edOutdoorTemp: 'Außentemperatur',
    edHumidity: 'Außenluftfeuchtigkeit',
    edPower: 'Stromverbrauch (kW)',
    rooms: ['Wohnzimmer','Schlafzimmer','Esszimmer','Büro'],
    roomIcons: ['','','',''],
  },
  fr: {
    lang: 'Français', flag: 'fr',
    cardTitle: 'Climatisation',
    cardSub:   'Maison Intelligente',
    greet: function() {
      var h = new Date().getHours();
      if (h>=6  && h<11) return 'Bonjour,';
      if (h>=11 && h<13) return 'Bonne journée,';
      if (h>=13 && h<18) return 'Bon après-midi,';
      if (h>=18 && h<21) return 'Bonsoir,';
      return 'Bonne nuit,';
    },
    tempLabel: 'TEMPÉRATURE',
    selectRoom: 'CHOISIR PIÈCE',
    statusLabel: 'STATUT',
    statusOn: 'EN MARCHE', statusOff: 'ÉTEINT',
    airGood: 'Qualité de l\'air bonne', pressOn: 'Appuyer pour allumer',
    dustLabel: 'Particules fines',
    fanLabel: 'Vitesse ventilateur', swingLabel: 'Direction d\'air',
    allOff: 'Tout éteindre', allOffSub: 'Éteindre toutes les pièces',
    tapOff: 'Appuyer pour éteindre', tapOn: 'Appuyer pour allumer',
    confirmOff: '⚠ Tout éteindre?', confirmSub: function(n) { return 'Éteindra ' + n + ' climatiseurs à la fois'; },
    cancel: 'Annuler', doOff: '⏻ Tout éteindre',
    overlayOn: 'ALLUMÉ', overlayOff: 'ÉTEINT',
    modes: { cool:'Refroidir', heat:'Chauffer', dry:'Déshumidifier', fan_only:'Ventilateur', off:'Éteint' },
    fans:   ['Auto','Faible','Moyen','Élevé'],
    swings: ['Fixe','Haut/Bas','Gauche/Droite','Tous'],
    comfort: { dry:'Air sec et confortable', fan_only:'Brise légère et fraîche', off:'Actuellement éteint' },
    comfortTemp: function(t) {
      t = Math.round(t);
      if (t<=19) return 'Très froid, mettez une veste!';
      if (t<=23) return 'Température idéale, détendez-vous';
      if (t<=27) return 'Confortable et agréable';
      if (t<=31) return 'Un peu chaud, refroidir davantage';
      return 'Trop chaud! Ajustez la température';
    },
    timerBtn: 'Minuterie',
    bgLabel: 'Dégradé de fond', bgPresets: 'Préréglage',
    colorLabel: 'Couleurs', accentColor: 'Couleur d\'accent', textColor: 'Couleur du texte',
    color1: 'Couleur 1 (haut gauche)', color2: 'Couleur 2 (bas droite)',
    edLang: 'Langue',
    edEntities: 'Entités',
    edOwnerName: 'Nom affiché (Maison Intelligente)',
    edRoomCountLabel: function(n) { return 'Nombre de pièces (1–8, défaut 4)'; },
    edRoomsHeader: function(n) { return 'Climatiseurs (' + n + ' pièces)'; },
    edRooms: 'Climatiseurs',
    edSensors: 'Capteurs environnementaux',
    edColors: 'Couleurs',
    edBg: 'Arrière-plan',
    edAcEntity: 'Entité clim. (climate.*)',
    edAcName: 'Nom affiché',
    edAcIcon: 'Icon (mdi)',
    edPm25: 'Particules fines PM2.5',
    edOutdoorTemp: 'Température extérieure',
    edHumidity: 'Humidité extérieure',
    edPower: 'Consommation (kW)',
    rooms: ['Salon','Chambre','Salle à manger','Bureau'],
    roomIcons: ['','','',''],
  },
  nl: {
    lang: 'Nederlands', flag: 'nl',
    cardTitle: 'Airconditioning',
    cardSub:   'Slim Huis',
    greet: function() {
      var h = new Date().getHours();
      if (h>=6  && h<11) return 'Goedemorgen,';
      if (h>=11 && h<13) return 'Goedemiddag,';
      if (h>=13 && h<18) return 'Goedemiddag,';
      if (h>=18 && h<21) return 'Goedenavond,';
      return 'Goedenacht,';
    },
    tempLabel: 'TEMPERATUUR',
    selectRoom: 'KAMER KIEZEN',
    statusLabel: 'STATUS',
    statusOn: 'ACTIEF', statusOff: 'UIT',
    airGood: 'Luchtkwaliteit goed', pressOn: 'Druk om in te schakelen',
    dustLabel: 'Fijnstof',
    fanLabel: 'Ventilatorsnelheid', swingLabel: 'Luchtrichting',
    allOff: 'Alles uitschakelen', allOffSub: 'Alle kamers uitschakelen',
    tapOff: 'Tik om uit te schakelen', tapOn: 'Tik om in te schakelen',
    confirmOff: '⚠ Alles uitschakelen?', confirmSub: function(n) { return n + ' airconditioners tegelijk uitschakelen'; },
    cancel: 'Annuleren', doOff: '⏻ Alles uit',
    overlayOn: 'AAN', overlayOff: 'UIT',
    modes: { cool:'Koelen', heat:'Verwarmen', dry:'Ontvochtigen', fan_only:'Ventilator', off:'Uit' },
    fans:   ['Auto','Laag','Medium','Hoog'],
    swings: ['Vast','Op/Neer','Links/Rechts','Alle'],
    comfort: { dry:'Droge lucht', fan_only:'Lichte frisse bries', off:'Momenteel uit' },
    comfortTemp: function(t) {
      t = Math.round(t);
      if (t<=19) return 'Erg koud, trek iets aan!';
      if (t<=23) return 'Ideale temperatuur, ontspan';
      if (t<=27) return 'Aangenaam en comfortabel';
      if (t<=31) return 'Iets warm, meer koelen';
      return 'Te heet! Temperatuur aanpassen';
    },
    timerBtn: 'Timer',
    bgLabel: 'Verloopachtergrond', bgPresets: 'Voorinstelling',
    colorLabel: 'Kleuren', accentColor: 'Accentkleur', textColor: 'Tekstkleur',
    color1: 'Kleur 1 (linksboven)', color2: 'Kleur 2 (rechtsonder)',
    edLang: 'Taal',
    edEntities: 'Entiteiten',
    edOwnerName: 'Weergavenaam (Slim Huis)',
    edRoomCountLabel: function(n) { return 'Aantal kamers (1–8, standaard 4)'; },
    edRoomsHeader: function(n) { return 'Airconditioners (' + n + ' kamers)'; },
    edRooms: 'Airconditioners',
    edSensors: 'Omgevingssensoren',
    edColors: 'Kleuren',
    edBg: 'Achtergrond',
    edAcEntity: 'AC-entiteit (climate.*)',
    edAcName: 'Weergavenaam',
    edAcIcon: 'Icon (mdi)',
    edPm25: 'Fijnstof PM2.5',
    edOutdoorTemp: 'Buitentemperatuur',
    edHumidity: 'Buitenvochtigheid',
    edPower: 'Stroomverbruik (kW)',
    rooms: ['Woonkamer','Slaapkamer','Eetkamer','Kantoor'],
    roomIcons: ['','','',''],
  },
  pl: {
    lang: 'Polski', flag: 'pl',
    cardTitle: 'Klimatyzacja',
    cardSub:   'Inteligentny Dom',
    greet: function() {
      var h = new Date().getHours();
      if (h>=6  && h<11) return 'Dzień dobry,';
      if (h>=11 && h<13) return 'Dobry dzień,';
      if (h>=13 && h<18) return 'Dzień dobry,';
      if (h>=18 && h<21) return 'Dobry wieczór,';
      return 'Dobranoc,';
    },
    tempLabel: 'TEMPERATURA',
    selectRoom: 'WYBIERZ POKÓJ',
    statusLabel: 'STATUS',
    statusOn: 'DZIAŁA', statusOff: 'WYŁ',
    airGood: 'Jakość powietrza dobra', pressOn: 'Naciśnij aby włączyć',
    dustLabel: 'Pył zawieszony',
    fanLabel: 'Prędkość wentylatora', swingLabel: 'Kierunek przepływu',
    allOff: 'Wyłącz wszystkie', allOffSub: 'Naciśnij aby wyłączyć wszystkie pokoje',
    tapOff: 'Naciśnij aby wyłączyć', tapOn: 'Naciśnij aby włączyć',
    confirmOff: '⚠ Wyłączyć wszystkie?', confirmSub: function(n) { return 'Wyłączy ' + n + ' klimatyzatorów naraz'; },
    cancel: 'Anuluj', doOff: '⏻ Wyłącz wszystkie',
    overlayOn: 'WŁ', overlayOff: 'WYŁ',
    modes: { cool:'Chłodzenie', heat:'Ogrzewanie', dry:'Osuszanie', fan_only:'Wentylator', off:'Wyłącz' },
    fans:   ['Auto','Niski','Średni','Wysoki'],
    swings: ['Stały','Góra/Dół','Lewo/Prawo','Wszystkie'],
    comfort: { dry:'Suche powietrze', fan_only:'Lekka świeża bryza', off:'Aktualnie wyłączone' },
    comfortTemp: function(t) {
      t = Math.round(t);
      if (t<=19) return 'Bardzo zimno, ubierz się!';
      if (t<=23) return 'Idealna temperatura, zrelaksuj się';
      if (t<=27) return 'Wygodnie i przyjemnie';
      if (t<=31) return 'Trochę ciepło, więcej chłodzić';
      return 'Zbyt gorąco! Dostosuj temperaturę';
    },
    timerBtn: 'Timer',
    bgLabel: 'Tło gradientowe', bgPresets: 'Ustawienie wstępne',
    colorLabel: 'Kolory', accentColor: 'Kolor akcentu', textColor: 'Kolor tekstu',
    color1: 'Kolor 1 (lewy górny)', color2: 'Kolor 2 (prawy dolny)',
    edLang: 'Język',
    edEntities: 'Encje',
    edOwnerName: 'Nazwa wyświetlana (Inteligentny Dom)',
    edRoomCountLabel: function(n) { return 'Liczba pokojów (1–8, domyślnie 4)'; },
    edRoomsHeader: function(n) { return 'Klimatyzatory (' + n + ' pokoje)'; },
    edRooms: 'Klimatyzatory',
    edSensors: 'Czujniki środowiskowe',
    edColors: 'Kolory',
    edBg: 'Tło',
    edAcEntity: 'Encja klimatyzatora (climate.*)',
    edAcName: 'Nazwa wyświetlana',
    edAcIcon: 'Icon (mdi)',
    edPm25: 'Pył zawieszony PM2.5',
    edOutdoorTemp: 'Temperatura zewnętrzna',
    edHumidity: 'Wilgotność zewnętrzna',
    edPower: 'Zużycie energii (kW)',
    rooms: ['Salon','Sypialnia','Jadalnia','Biuro'],
    roomIcons: ['','','',''],
  },
  sv: {
    lang: 'Svenska', flag: 'se',
    cardTitle: 'Luftkonditionering',
    cardSub:   'Smart Hem',
    greet: function() {
      var h = new Date().getHours();
      if (h>=6  && h<11) return 'God morgon,';
      if (h>=11 && h<13) return 'God dag,';
      if (h>=13 && h<18) return 'God eftermiddag,';
      if (h>=18 && h<21) return 'God kväll,';
      return 'God natt,';
    },
    tempLabel: 'TEMPERATUR',
    selectRoom: 'VÄLJ RUM',
    statusLabel: 'STATUS',
    statusOn: 'IGÅNG', statusOff: 'AV',
    airGood: 'Luftkvalitet bra', pressOn: 'Tryck för att slå på',
    dustLabel: 'Fint damm',
    fanLabel: 'Fläkthastighet', swingLabel: 'Luftriktning',
    allOff: 'Stäng av alla', allOffSub: 'Stäng av alla rum',
    tapOff: 'Tryck för att stänga av', tapOn: 'Tryck för att slå på',
    confirmOff: '⚠ Stäng av alla?', confirmSub: function(n) { return 'Stänger av ' + n + ' AC-enheter'; },
    cancel: 'Avbryt', doOff: '⏻ Stäng av alla',
    overlayOn: 'PÅ', overlayOff: 'AV',
    modes: { cool:'Kyla', heat:'Värme', dry:'Avfuktning', fan_only:'Fläkt', off:'Av' },
    fans:   ['Auto','Låg','Medel','Hög'],
    swings: ['Fast','Upp/Ned','Vänster/Höger','Alla'],
    comfort: { dry:'Torr luft', fan_only:'Lätt fräsch bris', off:'För närvarande av' },
    comfortTemp: function(t) {
      t = Math.round(t);
      if (t<=19) return 'Mycket kallt, ta på dig något!';
      if (t<=23) return 'Idealisk temperatur, koppla av';
      if (t<=27) return 'Bekväm och trevlig';
      if (t<=31) return 'Lite varmt, kyl mer';
      return 'För varmt! Justera temperaturen';
    },
    timerBtn: 'Timer',
    bgLabel: 'Gradientbakgrund', bgPresets: 'Förinställning',
    colorLabel: 'Färger', accentColor: 'Accentfärg', textColor: 'Textfärg',
    color1: 'Färg 1 (övre vänster)', color2: 'Färg 2 (nedre höger)',
    edLang: 'Språk',
    edEntities: 'Entiteter',
    edOwnerName: 'Visningsnamn (Smart Hem)',
    edRoomCountLabel: function(n) { return 'Antal rum (1–8, standard 4)'; },
    edRoomsHeader: function(n) { return 'Luftkonditioneringar (' + n + ' rum)'; },
    edRooms: 'Luftkonditioneringar',
    edSensors: 'Miljösensorer',
    edColors: 'Färger',
    edBg: 'Bakgrund',
    edAcEntity: 'AC-entitet (climate.*)',
    edAcName: 'Visningsnamn',
    edAcIcon: 'Icon (mdi)',
    edPm25: 'Fint damm PM2.5',
    edOutdoorTemp: 'Utomhustemperatur',
    edHumidity: 'Utomhusfuktighet',
    edPower: 'Elförbrukning (kW)',
    rooms: ['Vardagsrum','Sovrum','Matsal','Kontor'],
    roomIcons: ['','','',''],
  },
  hu: {
    lang: 'Magyar', flag: 'hu',
    cardTitle: 'Légkondicionáló',
    cardSub:   'Okos Otthon',
    greet: function() {
      var h = new Date().getHours();
      if (h>=6  && h<11) return 'Jó reggelt,';
      if (h>=11 && h<13) return 'Jó napot,';
      if (h>=13 && h<18) return 'Jó napot,';
      if (h>=18 && h<21) return 'Jó estét,';
      return 'Jó éjszakát,';
    },
    tempLabel: 'HŐMÉRSÉKLET',
    selectRoom: 'SZOBA VÁLASZTÁSA',
    statusLabel: 'ÁLLAPOT',
    statusOn: 'MŰKÖDİK', statusOff: 'KI',
    airGood: 'Levegőminőség jó', pressOn: 'Nyomja meg a bekapcsoláshoz',
    dustLabel: 'Finom por',
    fanLabel: 'Ventilátorsebesség', swingLabel: 'Légáramlás iránya',
    allOff: 'Mindet kikapcsolni', allOffSub: 'Összes szoba kikapcsolása',
    tapOff: 'Érintse ki a kikapcsoláshoz', tapOn: 'Érintse meg a bekapcsoláshoz',
    confirmOff: '⚠ Mindet kikapcsolni?', confirmSub: function(n) { return n + ' légkondicionálót kapcsol ki egyszerre'; },
    cancel: 'Mégse', doOff: '⏻ Mindet ki',
    overlayOn: 'BE', overlayOff: 'KI',
    modes: { cool:'Hűtés', heat:'Fűtés', dry:'Párátlanítás', fan_only:'Ventilátor', off:'Ki' },
    fans:   ['Auto','Alacsony','Közepes','Magas'],
    swings: ['Rögzített','Fel/Le','Bal/Jobb','Mindkettő'],
    comfort: { dry:'Száraz levegő', fan_only:'Könnyű friss szellő', off:'Jelenleg kikapcsolt' },
    comfortTemp: function(t) {
      t = Math.round(t);
      if (t<=19) return 'Nagyon hideg, vegyél fel valamit!';
      if (t<=23) return 'Ideális hőmérséklet, pihenj';
      if (t<=27) return 'Kényelmes és kellemes';
      if (t<=31) return 'Kicsit meleg, jobban hűteni';
      return 'Túl meleg! Állítsa be a hőmérsékletet';
    },
    timerBtn: 'Időzítő',
    bgLabel: 'Gradiens háttér', bgPresets: 'Előbeállítás',
    colorLabel: 'Színek', accentColor: 'Kiemelőszín', textColor: 'Szövegszín',
    color1: 'Szín 1 (bal felső)', color2: 'Szín 2 (jobb alsó)',
    edLang: 'Nyelv',
    edEntities: 'Entitások',
    edOwnerName: 'Megjelenítési név (Okos Otthon)',
    edRoomCountLabel: function(n) { return 'Szobák száma (1–8, alapértelmezett 4)'; },
    edRoomsHeader: function(n) { return 'Légkondicionáló (' + n + ' szoba)'; },
    edRooms: 'Légkondicionáló',
    edSensors: 'Környezeti érzékelők',
    edColors: 'Színek',
    edBg: 'Háttér',
    edAcEntity: 'Légkondicionáló entitás (climate.*)',
    edAcName: 'Megjelenítési név',
    edAcIcon: 'Icon (mdi)',
    edPm25: 'Finom por PM2.5',
    edOutdoorTemp: 'Kültéri hőmérséklet',
    edHumidity: 'Kültéri páratartalom',
    edPower: 'Energiafogyasztás (kW)',
    rooms: ['Nappali','Hálószoba','Étkező','Iroda'],
    roomIcons: ['','','',''],
  },
  cs: {
    lang: 'Čeština', flag: 'cz',
    cardTitle: 'Klimatizace',
    cardSub:   'Chytrý Dům',
    greet: function() {
      var h = new Date().getHours();
      if (h>=6  && h<11) return 'Dobré ráno,';
      if (h>=11 && h<13) return 'Dobrý den,';
      if (h>=13 && h<18) return 'Dobré odpoledne,';
      if (h>=18 && h<21) return 'Dobrý večer,';
      return 'Dobrou noc,';
    },
    tempLabel: 'TEPLOTA',
    selectRoom: 'VYBRAT MÍSTNOST',
    statusLabel: 'STAV',
    statusOn: 'BĚŽÍ', statusOff: 'VYPNUTO',
    airGood: 'Kvalita vzduchu dobrá', pressOn: 'Stiskněte pro zapnutí',
    dustLabel: 'Jemný prach',
    fanLabel: 'Rychlost ventilátoru', swingLabel: 'Směr proudění',
    allOff: 'Vše vypnout', allOffSub: 'Vypnout všechny místnosti',
    tapOff: 'Stiskněte pro vypnutí', tapOn: 'Stiskněte pro zapnutí',
    confirmOff: '⚠ Vše vypnout?', confirmSub: function(n) { return 'Vypne ' + n + ' klimatizací najednou'; },
    cancel: 'Zrušit', doOff: '⏻ Vše vypnout',
    overlayOn: 'ZAP', overlayOff: 'VYP',
    modes: { cool:'Chlazení', heat:'Topení', dry:'Odvlhčování', fan_only:'Ventilátor', off:'Vypnout' },
    fans:   ['Auto','Nízká','Střední','Vysoká'],
    swings: ['Pevný','Nahoru/Dolů','Vlevo/Vpravo','Vše'],
    comfort: { dry:'Suchý vzduch', fan_only:'Lehký svěží vánek', off:'Momentálně vypnuto' },
    comfortTemp: function(t) {
      t = Math.round(t);
      if (t<=19) return 'Velmi chladno, oblečte se!';
      if (t<=23) return 'Ideální teplota, relaxujte';
      if (t<=27) return 'Pohodlné a příjemné';
      if (t<=31) return 'Trochu teplo, více chladit';
      return 'Příliš horko! Nastavte teplotu';
    },
    timerBtn: 'Časovač',
    bgLabel: 'Přechodové pozadí', bgPresets: 'Předvolba',
    colorLabel: 'Barvy', accentColor: 'Barva zvýraznění', textColor: 'Barva textu',
    color1: 'Barva 1 (vlevo nahoře)', color2: 'Barva 2 (vpravo dole)',
    edLang: 'Jazyk',
    edEntities: 'Entity',
    edOwnerName: 'Zobrazovaný název (Chytrý Dům)',
    edRoomCountLabel: function(n) { return 'Počet místností (1–8, výchozí 4)'; },
    edRoomsHeader: function(n) { return 'Klimatizace (' + n + ' místností)'; },
    edRooms: 'Klimatizace',
    edSensors: 'Senzory prostředí',
    edColors: 'Barvy',
    edBg: 'Pozadí',
    edAcEntity: 'Entita klimatizace (climate.*)',
    edAcName: 'Zobrazovaný název',
    edAcIcon: 'Icon (mdi)',
    edPm25: 'Jemný prach PM2.5',
    edOutdoorTemp: 'Venkovní teplota',
    edHumidity: 'Venkovní vlhkost',
    edPower: 'Spotřeba energie (kW)',
    rooms: ['Obývací pokoj','Ložnice','Jídelna','Kancelář'],
    roomIcons: ['','','',''],
  },
  it: {
    lang: 'Italiano', flag: 'it',
    cardTitle: 'Condizionatore',
    cardSub:   'Casa Intelligente',
    greet: function() {
      var h = new Date().getHours();
      if (h>=6  && h<11) return 'Buongiorno,';
      if (h>=11 && h<13) return 'Buon pomeriggio,';
      if (h>=13 && h<18) return 'Buon pomeriggio,';
      if (h>=18 && h<21) return 'Buonasera,';
      return 'Buonanotte,';
    },
    tempLabel: 'TEMPERATURA',
    selectRoom: 'SELEZIONA STANZA',
    statusLabel: 'STATO',
    statusOn: 'IN FUNZIONE', statusOff: 'SPENTO',
    airGood: 'Qualità dell\'aria buona', pressOn: 'Premi per accendere',
    dustLabel: 'Polvere fine',
    fanLabel: 'Velocità ventilatore', swingLabel: 'Direzione flusso',
    allOff: 'Spegni tutti', allOffSub: 'Spegni tutte le stanze',
    tapOff: 'Premi per spegnere', tapOn: 'Premi per accendere',
    confirmOff: '⚠ Spegnere tutto?', confirmSub: function(n) { return 'Spegnerà ' + n + ' condizionatori contemporaneamente'; },
    cancel: 'Annulla', doOff: '⏻ Spegni tutti',
    overlayOn: 'ACCESO', overlayOff: 'SPENTO',
    modes: { cool:'Raffreddamento', heat:'Riscaldamento', dry:'Deumidificazione', fan_only:'Ventilatore', off:'Spento' },
    fans:   ['Auto','Bassa','Media','Alta'],
    swings: ['Fisso','Su/Giù','Sinistra/Destra','Tutti'],
    comfort: { dry:'Aria secca', fan_only:'Brezza leggera e fresca', off:'Attualmente spento' },
    comfortTemp: function(t) {
      t = Math.round(t);
      if (t<=19) return 'Molto freddo, mettiti qualcosa!';
      if (t<=23) return 'Temperatura ideale, rilassati';
      if (t<=27) return 'Comodo e piacevole';
      if (t<=31) return 'Un po\' caldo, raffreddare di più';
      return 'Troppo caldo! Regola la temperatura';
    },
    timerBtn: 'Timer',
    bgLabel: 'Sfondo sfumato', bgPresets: 'Preimpostazione',
    colorLabel: 'Colori', accentColor: 'Colore accento', textColor: 'Colore testo',
    color1: 'Colore 1 (in alto a sinistra)', color2: 'Colore 2 (in basso a destra)',
    edLang: 'Lingua',
    edEntities: 'Entità',
    edOwnerName: 'Nome visualizzato (Casa Intelligente)',
    edRoomCountLabel: function(n) { return 'Numero di stanze (1–8, predefinito 4)'; },
    edRoomsHeader: function(n) { return 'Condizionatori (' + n + ' stanze)'; },
    edRooms: 'Condizionatori',
    edSensors: 'Sensori ambientali',
    edColors: 'Colori',
    edBg: 'Sfondo',
    edAcEntity: 'Entità condizionatore (climate.*)',
    edAcName: 'Nome visualizzato',
    edAcIcon: 'Icon (mdi)',
    edPm25: 'Polvere fine PM2.5',
    edOutdoorTemp: 'Temperatura esterna',
    edHumidity: 'Umidità esterna',
    edPower: 'Consumo energetico (kW)',
    rooms: ['Soggiorno','Camera da letto','Sala da pranzo','Ufficio'],
    roomIcons: ['','','',''],
  },
};

// ─── Background presets (y hệt Gate Card) ─────────────────────────────────────
const AC_BG_PRESETS = [
  { id: 'default', label: 'Default',  c1: '#001e2b', c2: '#12c6f3' },
  { id: 'night',   label: 'Night',    c1: '#0d0d1a', c2: '#1a0a3a' },
  { id: 'sunset',  label: 'Sunset',   c1: '#1a0a00', c2: '#ff6b35' },
  { id: 'forest',  label: 'Forest',   c1: '#0a1a0a', c2: '#1a5c1a' },
  { id: 'aurora',  label: 'Aurora',   c1: '#0a0a1a', c2: '#00cc88' },
  { id: 'desert',  label: 'Desert',   c1: '#1a0e00', c2: '#c8860a' },
  { id: 'ocean',   label: 'Ocean',    c1: '#001020', c2: '#0055aa' },
  { id: 'cherry',  label: 'Cherry',   c1: '#1a0010', c2: '#cc2255' },
  { id: 'volcano', label: 'Volcano',  c1: '#1a0500', c2: '#dd3300' },
  { id: 'galaxy',  label: 'Galaxy',   c1: '#080818', c2: '#6633cc' },
  { id: 'ice',     label: 'Ice',      c1: '#0a1828', c2: '#88ddff' },
  { id: 'olive',   label: 'Olive',    c1: '#0e1200', c2: '#7a9a00' },
  { id: 'slate',   label: 'Slate',    c1: '#101820', c2: '#445566' },
  { id: 'rose',    label: 'Rose',     c1: '#1a0808', c2: '#ee6688' },
  { id: 'teal',    label: 'Teal',     c1: '#001818', c2: '#00aa88' },
  { id: 'custom',  label: 'Custom', c1: null,      c2: null       },
];

function acPresetGradient(preset, c1, c2) {
  const p = AC_BG_PRESETS.find(x => x.id === preset) || AC_BG_PRESETS[0];
     const gc1 = (preset === 'custom' ? c1 : p.c1) || '#001e2b';
     const gc2 = (preset === 'custom' ? c2 : p.c2) || '#12c6f3';
  return 'linear-gradient(135deg, ' + gc1 + 'bb 0%, ' + gc2 + '44 100%)';
}

const AC_DEFAULT_CONFIG = {
  language: 'vi',
  background_preset: 'default',
  bg_color1: '#001e2b',
  bg_color2: '#12c6f3',
    accent_color: '#00ffcc',
  text_color: '#ffffff',
  room_count: 4,
  features: {
    show_avg_temp: true,
    show_welcome: true,
    show_eco: true,
    modes: { cool: true, heat: true, dry: true, fan_only: true },
    show_airflow: true,
    show_fav: true,
    show_clean: true,
    show_pm25: true,
    show_room_temp: true,
    show_metrics_temp: true,
    show_metrics_humidity: true,
    show_metrics_power: true,
  },
  icons: {
    eco: '',
    fav: '',
    clean: '',
    power: '',
    timer: '',
    all_off: '',
    metric_temp: '',
    metric_humidity: '',
    metric_power: '',
    header: '',
    mode_cool: '',
    mode_heat: '',
    mode_dry: '',
    mode_fan_only: '',
  },
};

const ROOM_IMAGES = [
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=85', // phòng khách
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=85', // phòng ngủ
  'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=900&q=85',    // phòng ăn
  'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=85', // văn phòng
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=85', // phòng tắm
  'https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?w=900&q=85', // phòng trẻ em
  'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=900&q=85', // phòng gym
  'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=85', // phòng kho/tiện ích
];

const ROOMS_DEFAULT = [
  { id: 'climate.dieu_hoa_living',         label: 'Ph\xf2ng kh\xe1ch', area: '25 m\xb2', icon: '' },
  { id: 'climate.bed_air_conditioning',     label: 'Ph\xf2ng ng\u1ee7',  area: '18 m\xb2', icon: '' },
  { id: 'climate.kitchen_air_conditioning', label: 'Ph\xf2ng \u0103n',   area: '20 m\xb2', icon: '' },
  { id: 'climate.dieu_hoa_office',          label: 'V\u0103n ph\xf2ng',  area: '15 m\xb2', icon: '' },
  { id: 'climate.dieu_hoa_bathroom',        label: 'Ph\xf2ng t\u1eafm',  area: '8 m\xb2',  icon: '' },
  { id: 'climate.dieu_hoa_kids',            label: 'Ph\xf2ng tr\u1ebb',  area: '14 m\xb2', icon: '' },
  { id: 'climate.dieu_hoa_gym',             label: 'Ph\xf2ng gym',       area: '20 m\xb2', icon: '' },
  { id: 'climate.dieu_hoa_utility',         label: 'Kho',                area: '10 m\xb2', icon: '' },
];
var ROOMS = ROOMS_DEFAULT.slice(0, 4);

const GREET = function() {
  var h = new Date().getHours();
  if (h >= 6  && h < 11) return 'Ch\xe0o bu\u1ed5i s\xe1ng,';   // 06–10
  if (h >= 11 && h < 13) return 'Ch\xe0o bu\u1ed5i tr\u01b0a,';  // 11–12
  if (h >= 13 && h < 18) return 'Ch\xe0o bu\u1ed5i chi\u1ec1u,'; // 13–17
  if (h >= 18 && h < 21) return 'Ch\xe0o bu\u1ed5i t\u1ed1i,';   // 18–20
  return 'Ch\xfac ng\u1ee7 ngon,';                               // 21–05
};

const MODE_CFG = {
  cool:     { lbl: 'L\xe0m l\u1ea1nh', icon: '',      color: '#3b9eff', glow: 'rgba(59,158,255,0.55)'   },
  heat:     { lbl: 'S\u01b0\u1edfi',   icon: '', color: '#ff7b3b', glow: 'rgba(255,123,59,0.55)'  },
  dry:      { lbl: 'H\xfat \u1ea9m',   icon: '', color: '#a78bfa', glow: 'rgba(167,139,250,0.55)' },
  fan_only: { lbl: 'Qu\u1ea1t',        icon: '', color: '#34d399', glow: 'rgba(52,211,153,0.55)'  },
  off:      { lbl: 'T\u1eaft',         icon: '',       color: '#4b5563', glow: 'rgba(75,85,99,0.3)'     },
};

const FAN_LEVELS  = ['auto','low','medium','high'];
const FAN_VI      = ['T\u1ef1 \u0111\u1ed9ng','Th\u1ea5p','V\u1eeba','Cao'];
const SWING_LEVELS = ['off','vertical','horizontal','both'];
const SWING_VI    = ['C\u1ed1 \u0111\u1ecbnh','L\u00ean xu\u1ed1ng','Tr\xe1i ph\u1ea3i','T\u1ea5t c\u1ea3'];
const SWING_ICONS  = ['\u2014','\u2195','\u2194','\u2716'];
// Comfort text by temperature range (every 4°C from 16–32)
// 16-19: lạnh buốt, 20-23: dễ chịu, 24-27: ấm áp, 28-31: nóng, 32+: rất nóng
function getTempComfort(temp) {
  var t = Math.round(temp);
  if (t <= 19) return 'L\u1ea1nh bu\u1ed1t, m\u1eb7c th\xeam \xe1o nh\xe9!';
  if (t <= 23) return 'Nhi\u1ec7t \u0111\u1ed9 l\xfd t\u01b0\u1edfng, th\u01b0 gi\xe3n th\xf4i';
  if (t <= 27) return 'C\u1ea3m gi\xe1c d\u1ec5 ch\u1ecbu, tho\u1ea3i m\xe1i';
  if (t <= 31) return 'H\u01a1i \u1ea5m, c\xe2n l\xe0m m\xe1t th\xeam';
  return 'Qu\xe1 n\xf3ng! H\xe3y \u0111i\u1ec1u ch\u1ec9nh nhi\u1ec7t \u0111\u1ed9';
}

const COMFORT    = {
  cool:     '',
  heat:     '',
  dry:      'Kh\xf4ng kh\xed kh\xf4 r\xe1o',
  fan_only: 'Gi\xf3 nh\u1eb9 m\xe1t m\u1ebb',
  off:      '\u0110ang t\u1eaft',
};

// ─── CSS tách riêng – chỉ inject 1 lần ───────────────────────────────────────
const CARD_CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
button,a{touch-action:manipulation;-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none}
:host{display:block;font-family:'Sora',sans-serif}
.card{background:linear-gradient(135deg,rgba(180,220,255,0.22) 0%,rgba(120,200,220,0.18) 50%,rgba(100,180,210,0.22) 100%);
  backdrop-filter:blur(28px) saturate(1.6);-webkit-backdrop-filter:blur(28px) saturate(1.6);
  border-radius:28px;overflow:hidden;display:flex;min-height:580px;
  box-shadow:0 0 0 1px rgba(255,255,255,0.28),0 40px 120px rgba(0,0,0,0.35),inset 0 1px 0 rgba(255,255,255,0.45)}
.left{flex:1.2;background:linear-gradient(160deg,rgba(200,235,255,0.18) 0%,rgba(140,210,230,0.12) 100%);
  display:flex;flex-direction:column;padding:16px 16px 14px;gap:8px;
  position:relative;border-right:1px solid rgba(255,255,255,0.2);overflow:hidden}
.left::before{content:"";position:absolute;top:-120px;left:-70px;width:380px;height:380px;
  background:radial-gradient(circle,var(--glow) 0%,transparent 65%);pointer-events:none;opacity:0.25}
.hdr{display:flex;align-items:center;justify-content:space-between}
.hdr-brand{display:flex;align-items:center;gap:10px}
.hdr-ico{width:40px;height:40px;background:linear-gradient(135deg,var(--accent),color-mix(in srgb,var(--accent) 45%,#000));
  border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 4px 24px var(--glow)}
.hdr-title{font-size:11px;font-weight:600;letter-spacing:2px;color:rgba(255,255,255,0.85);text-transform:uppercase}
.hdr-sub{font-size:9px;color:rgba(40,80,110,0.5);margin-top:1px}
.hdr-icons{display:flex;gap:12px;align-items:center}
.greet-row{display:flex;align-items:flex-start;justify-content:space-between}
.greet-sub{font-size:11.5px;color:rgba(255,255,255,0.65);font-weight:300}
.greet-name{font-size:22px;font-weight:700;color:#ffffff;line-height:1.15;letter-spacing:-0.5px}

.eco-badge{display:inline-flex;align-items:center;gap:4px;padding:5px 13px;border-radius:20px;
  font-size:9.5px;font-weight:600;cursor:pointer;outline:none;transition:all 0.2s;border:none}
.eco-on{background:rgba(52,211,153,0.38);border:1px solid rgba(52,211,153,0.7)!important;color:#ffffff}
.eco-off{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09)!important;color:rgba(255,255,255,0.55)}
.eco-badge:hover{filter:brightness(1.25);transform:scale(1.04)}
.dial-wrap{display:flex;justify-content:center;position:relative;margin:-2px 0 -14px}
.dial-center{position:absolute;top:50%;left:50%;transform:translate(-50%,-38%);
  display:flex;flex-direction:column;align-items:center;pointer-events:none;user-select:none;width:144px;height:144px}
.dial-lbl{font-size:9px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.55);font-weight:500}
.dial-temp{font-family:'Orbitron',sans-serif;font-size:60px;font-weight:800;color:#ffffff;line-height:1;
  text-shadow:0 0 30px var(--glow),0 0 60px var(--glow)}
.dial-deg{font-size:24px;font-weight:400;vertical-align:super;line-height:0}
.dial-feel{font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px;font-weight:300;text-align:center}
.temp-ctrl{display:flex;align-items:center;justify-content:center}
.temp-btn{width:36px;height:36px;border-radius:50%;background:rgba(0,20,50,0.25);
  border:1px solid rgba(255,255,255,0.25);color:rgba(255,255,255,0.9);font-size:18px;
  display:flex;align-items:center;justify-content:center;cursor:pointer;outline:none;transition:all 0.15s;font-family:'Sora',sans-serif}
.temp-btn:hover{background:rgba(0,30,70,0.4);border-color:var(--accent);color:var(--accent);box-shadow:0 0 18px var(--glow)}
.temp-btn:active{transform:scale(0.88)}
.temp-set{min-width:100px;text-align:center;font-family:'Orbitron',sans-serif;font-size:12px;font-weight:600;color:rgba(255,255,255,0.85)}
.mode-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:7px}
.mode-btn{background:rgba(0,20,50,0.3);border:1px solid rgba(255,255,255,0.25);border-radius:13px;
  padding:8px 3px 6px;display:flex;flex-direction:column;align-items:center;gap:4px;
  cursor:pointer;outline:none;color:rgba(255,255,255,0.75);font-size:8px;font-weight:600;
  font-family:'Sora',sans-serif;transition:all 0.2s}
.mode-btn:hover{background:rgba(0,30,70,0.45);border-color:rgba(255,255,255,0.5);transform:translateY(-1px)}
.mode-btn:active{transform:scale(0.94)}
.mode-btn--active{background:linear-gradient(160deg,color-mix(in srgb,var(--bc,var(--accent)) 55%,rgba(0,15,40,0.5)),color-mix(in srgb,var(--bc,var(--accent)) 35%,rgba(0,15,40,0.4)));
  border-color:color-mix(in srgb,var(--bc,var(--accent)) 80%,transparent);color:#ffffff;
  box-shadow:0 0 24px var(--bg,var(--glow)),inset 0 1px 0 rgba(255,255,255,0.25)}
.mode-icon{font-size:18px;line-height:1}
.mode-lbl{font-size:8px}
.fan-swing-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.fan-card,.swing-card{background:rgba(0,20,50,0.28);border:1px solid rgba(255,255,255,0.22);
  border-radius:14px;padding:9px 12px;display:flex;flex-direction:column;gap:6px}
.fc-head{display:flex;align-items:center;justify-content:space-between}
.fc-label{font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.55);font-weight:700}
.fc-val{font-size:10px;color:rgba(255,255,255,0.95);font-weight:700}
.fan-body{display:flex;align-items:flex-end;gap:10px}
.fan-ico{font-size:22px;opacity:0.9;line-height:1;flex-shrink:0;display:flex;align-items:center;min-width:42px}
@keyframes fanSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
.fan-bars{display:flex;align-items:flex-end;gap:3px;height:32px}
.fbar{width:6px;border-radius:3px 3px 2px 2px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.18);transition:all 0.3s;flex-shrink:0}
.fbar.fbar-on{background:var(--accent);border-color:rgba(255,255,255,0.55);box-shadow:0 0 8px var(--glow),0 0 3px rgba(255,255,255,0.3),inset 0 1px 0 rgba(255,255,255,0.35)}
.fan-tap{display:flex;align-items:flex-end;gap:10px;cursor:pointer;outline:none;
  background:none;border:none;padding:0;width:100%}
.swing-body{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;flex:1}
.swing-btn{display:flex;flex-direction:column;align-items:center;gap:4px;
  background:none;border:none;cursor:pointer;outline:none;padding:0;width:100%}
.swing-lbl{font-size:9px;color:rgba(255,255,255,0.7);font-weight:600}
.chips{display:flex;gap:7px}
.chip{flex:1;background:rgba(0,20,50,0.28);border:1px solid rgba(255,255,255,0.25);
  border-radius:12px;padding:6px 4px;display:flex;align-items:center;justify-content:center;gap:4px;
  cursor:pointer;outline:none;font-size:8px;font-weight:600;font-family:'Sora',sans-serif;
  color:rgba(255,255,255,0.75);transition:all 0.2s;white-space:nowrap}
.chip:hover{background:rgba(0,30,70,0.45);transform:translateY(-1px)}
.chip:active{transform:scale(0.95)}
.chip--g{color:#ffffff;border-color:rgba(52,211,153,0.7)!important;background:rgba(52,211,153,0.35)!important}
.chip--a{color:#ffffff;border-color:rgba(251,191,36,0.7)!important;background:rgba(251,191,36,0.35)!important}
.chip--b{color:#ffffff;border-color:rgba(96,165,250,0.7)!important;background:rgba(96,165,250,0.35)!important}
.power-row{display:flex;align-items:center;gap:12px;background:rgba(0,20,50,0.3);
  border:1px solid rgba(255,255,255,0.25);border-radius:18px;padding:10px 14px;
  cursor:pointer;outline:none;text-align:left;transition:all 0.2s;font-family:'Sora',sans-serif;width:100%}
.power-row:hover{background:rgba(0,30,70,0.45)}
.power-row:active{transform:scale(0.98)}
.pw-btn{width:36px;height:36px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:16px;transition:all 0.35s}
.pw-on{background:linear-gradient(135deg,#3b9eff,#1a5faa);
  box-shadow:0 0 26px rgba(59,158,255,0.7),0 0 50px rgba(59,158,255,0.25);animation:pwP 2.5s ease-in-out infinite}
.pw-off{background:rgba(0,20,50,0.25);border:1px solid rgba(255,255,255,0.5)}
@keyframes pwP{0%,100%{box-shadow:0 0 26px rgba(59,158,255,0.7),0 0 50px rgba(59,158,255,0.25)}50%{box-shadow:0 0 40px rgba(59,158,255,0.95),0 0 70px rgba(59,158,255,0.45)}}
.pw-sub{font-size:9px;color:rgba(255,255,255,0.5);margin-top:2px}
.pw-sub--big{font-size:11px;font-weight:600;color:rgba(255,255,255,0.85);letter-spacing:0.2px}
.confirm-popup{position:fixed;z-index:9999;
  background:rgba(6,10,24,0.98);backdrop-filter:blur(28px) saturate(1.8);-webkit-backdrop-filter:blur(28px) saturate(1.8);
  border:1px solid rgba(255,80,80,0.35);border-radius:20px;padding:18px 16px 14px;width:220px;
  box-shadow:0 8px 48px rgba(0,0,0,0.7),inset 0 1px 0 rgba(255,255,255,0.1)}
.cp-title{font-size:13px;font-weight:700;color:#ffffff;text-align:center;margin-bottom:5px}
.cp-sub{font-size:9px;color:rgba(255,150,150,0.75);text-align:center;margin-bottom:14px;letter-spacing:0.3px}
.cp-acts{display:flex;gap:8px}
.cp-cancel{flex:1;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.18);
  border-radius:10px;padding:9px;font-size:10px;font-weight:600;font-family:'Sora',sans-serif;
  color:rgba(255,255,255,0.6);cursor:pointer;outline:none;touch-action:manipulation}
.cp-ok{flex:1;background:rgba(255,60,60,0.22);border:1px solid rgba(255,80,80,0.6);
  border-radius:10px;padding:9px;font-size:10px;font-weight:700;font-family:'Sora',sans-serif;
  color:#ff6b6b;cursor:pointer;outline:none;touch-action:manipulation}
.pw-arrow{color:rgba(255,255,255,0.4);font-size:20px}
.right{flex:1;background:linear-gradient(160deg,rgba(160,220,240,0.10) 0%,rgba(100,180,210,0.08) 100%);display:flex;flex-direction:column;position:relative;overflow-x:hidden;overflow-y:visible;min-height:0}
.room-image{flex:0 0 185px;position:relative;overflow:hidden}
.room-img-el{width:100%;height:100%;object-fit:cover;transition:opacity 0.6s ease,transform 0.8s ease;display:block}
.room-img-el.fade-out{opacity:0;transform:scale(1.04)}
.room-image::after{content:"";position:absolute;inset:0;
  background:linear-gradient(to bottom,rgba(10,12,16,0.05) 0%,rgba(10,12,16,0) 15%,rgba(10,12,16,0.45) 55%,rgba(10,12,16,0.82) 78%,rgba(10,12,16,1) 100%);
  pointer-events:none;z-index:1}
.room-image::before{content:"";position:absolute;bottom:-1px;left:0;right:0;height:80px;
  background:inherit;filter:blur(18px) brightness(0.4);
  mask-image:linear-gradient(to bottom,transparent 0%,black 60%);
  -webkit-mask-image:linear-gradient(to bottom,transparent 0%,black 60%);
  pointer-events:none;z-index:0}
.ac-overlay{position:absolute;top:12px;left:50%;transform:translateX(-50%);
  background:rgba(8,10,20,0.52);backdrop-filter:blur(16px) saturate(1.8);-webkit-backdrop-filter:blur(16px) saturate(1.8);
  border:1px solid rgba(255,255,255,0.18);border-radius:30px;padding:6px 16px;
  display:flex;align-items:center;gap:8px;z-index:3;white-space:nowrap;
  box-shadow:0 8px 32px rgba(0,0,0,0.35),inset 0 1px 0 rgba(255,255,255,0.12)}
.ac-led{width:7px;height:7px;border-radius:50%;flex-shrink:0}
.led-on{background:#34d399;box-shadow:0 0 10px #34d399,0 0 20px rgba(52,211,153,0.5);animation:blink 2.5s infinite}
.led-off{background:#4b5563}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0.35}}
.ac-overlay-txt{font-size:9.5px;font-weight:700;color:rgba(255,255,255,0.85);letter-spacing:1.5px}
.ac-mode-chip{background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:var(--accent);
  font-size:8.5px;font-weight:600;padding:2px 9px;border-radius:10px}
.img-temp-badge{position:absolute;bottom:18px;left:14px;z-index:3;
  font-family:'Orbitron',sans-serif;font-size:28px;font-weight:800;
  color:#ffffff;line-height:1;
  text-shadow:0 0 18px var(--glow),0 0 40px var(--glow),0 2px 20px rgba(0,0,0,0.7);
  animation:tempPulse 2.2s ease-in-out infinite}
.img-temp-badge span{font-size:13px;opacity:0.7;font-weight:400}
@keyframes tempPulse{
  0%,100%{text-shadow:0 0 14px var(--glow),0 0 30px var(--glow),0 2px 20px rgba(0,0,0,0.7);opacity:1}
  40%{text-shadow:0 0 28px var(--glow),0 0 60px var(--glow),0 0 90px var(--glow),0 2px 20px rgba(0,0,0,0.6);opacity:1}
  55%{text-shadow:0 0 14px var(--glow),0 0 30px var(--glow),0 2px 20px rgba(0,0,0,0.7);opacity:0.92}
  70%{text-shadow:0 0 22px var(--glow),0 0 50px var(--glow),0 0 75px var(--glow),0 2px 20px rgba(0,0,0,0.6);opacity:1}
  85%{text-shadow:0 0 14px var(--glow),0 0 30px var(--glow),0 2px 20px rgba(0,0,0,0.7);opacity:0.95}
}
.img-room-name{position:absolute;bottom:18px;right:14px;z-index:3;
  font-size:11px;font-weight:600;color:rgba(255,255,255,0.7);text-align:right}
.status-block{padding:8px 12px 6px;display:flex;flex-direction:column;gap:7px;
  background:linear-gradient(to bottom,rgba(10,12,16,0.92) 0%,rgba(10,20,40,0.55) 100%);
  margin-top:-2px}
.status-header{display:flex;align-items:center;justify-content:space-between}
.st-title{font-size:8.5px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.55);font-weight:600}
.st-on{font-size:13px;font-weight:700;color:#34d399;margin-top:2px}
.st-off{font-size:13px;font-weight:700;color:rgba(255,255,255,0.45);margin-top:2px}
.st-sub{font-size:9.5px;color:rgba(255,255,255,0.5);margin-top:1px}
.pm-ring{width:52px;height:52px;border-radius:50%;
  background:radial-gradient(circle,rgba(52,211,153,0.22) 0%,rgba(52,211,153,0.08) 60%,rgba(0,20,50,0.4) 100%);
  border:1.5px solid rgba(52,211,153,0.5);display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;
  box-shadow:0 0 18px rgba(52,211,153,0.35),0 0 40px rgba(52,211,153,0.15),inset 0 1px 0 rgba(52,211,153,0.25)}
.pm-val{font-family:'Orbitron',sans-serif;font-size:14px;font-weight:600;color:#34d399;line-height:1.1}
.pm-unit{font-size:7px;color:rgba(52,211,153,0.5);letter-spacing:0.5px}
.metrics{display:flex;gap:5px}
.met{flex:1;background:rgba(255,255,255,0.22);border:1px solid rgba(255,255,255,0.06);
  border-radius:11px;padding:7px 6px;display:flex;flex-direction:row;align-items:center;gap:5px;justify-content:center}
.met-ico{font-size:16px;line-height:1;flex-shrink:0}
.met-val{font-family:'Orbitron',sans-serif;font-size:11px;font-weight:600;color:#ffffff;white-space:nowrap}
.met-lbl{font-size:7.5px;color:rgba(255,255,255,0.55)}

.room-status-badge{font-size:9px;font-weight:700;letter-spacing:0.3px;padding:3px 8px;border-radius:7px;flex-shrink:0;line-height:1.5;min-width:32px;text-align:center;align-self:center}
.rsb-on{background:color-mix(in srgb,var(--accent) 55%,rgba(0,10,30,0.4));color:#ffffff;border:1px solid color-mix(in srgb,var(--accent) 80%,transparent)}
.rsb-off{background:rgba(0,20,50,0.25);color:rgba(255,255,255,0.55);border:1px solid rgba(255,255,255,0.3)}
.all-off-btn{margin:0 10px 6px;background:rgba(255,60,60,0.06);border:1px solid rgba(255,80,80,0.18);
  border-radius:13px;padding:9px 12px;display:flex;align-items:center;gap:10px;
  cursor:pointer;outline:none;width:calc(100% - 20px);text-align:left;transition:all 0.2s;font-family:'Sora',sans-serif}
.all-off-btn:hover{background:rgba(255,60,60,0.12);border-color:rgba(255,80,80,0.35)}
.all-off-btn:active{transform:scale(0.97)}
.all-off-ico{width:36px;height:36px;border-radius:50%;background:rgba(255,60,60,0.15);border:1px solid rgba(255,80,80,0.3);
  display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;
  box-shadow:0 0 14px rgba(255,60,60,0.2)}
.all-off-info{flex:1}
.all-off-title{font-size:11px;font-weight:600;color:rgba(255,150,150,0.85)}
.all-off-sub{font-size:8.5px;color:rgba(255,255,255,0.5);margin-top:1px}
.all-off-arr{color:rgba(255,100,100,0.35);font-size:18px}
.bottom-row{display:flex;gap:8px}
.power-row{display:flex;align-items:center;gap:10px;background:rgba(0,20,50,0.3);
  border:1px solid rgba(255,255,255,0.25);border-radius:18px;padding:12px 14px;
  cursor:pointer;outline:none;text-align:left;transition:all 0.2s;font-family:'Sora',sans-serif;flex:1.6;min-width:0}
.power-row:hover{background:rgba(0,30,70,0.45)}
.power-row:active{transform:scale(0.98)}
.timer-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;
  background:rgba(0,20,50,0.3);border:1px solid rgba(255,255,255,0.22);border-radius:18px;
  padding:10px 8px;cursor:pointer;outline:none;font-family:'Sora',sans-serif;
  transition:all 0.2s;flex:1;min-width:0;touch-action:manipulation;-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none}
.timer-btn:hover{background:rgba(0,30,70,0.45);border-color:rgba(251,191,36,0.45)}
.timer-btn--active{border-color:rgba(251,191,36,0.75)!important;background:rgba(251,191,36,0.12)!important;box-shadow:0 0 14px rgba(251,191,36,0.2)}
.timer-ico{font-size:18px;line-height:1;pointer-events:none}
.timer-lbl{font-size:7px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);text-transform:uppercase;pointer-events:none}
.timer-cd{font-family:'Orbitron',sans-serif;font-size:10px;font-weight:600;color:rgba(251,191,36,0.9);line-height:1;min-height:13px;pointer-events:none}
.timer-popup{position:fixed;z-index:9999;
  background:rgba(6,10,24,0.98);backdrop-filter:blur(28px) saturate(1.8);-webkit-backdrop-filter:blur(28px) saturate(1.8);
  border:1px solid rgba(255,255,255,0.18);border-radius:20px;padding:15px 13px 13px;width:218px;
  box-shadow:0 8px 48px rgba(0,0,0,0.7),0 0 0 1px rgba(255,255,255,0.06),inset 0 1px 0 rgba(255,255,255,0.12)}
.tp-title{font-size:8px;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,0.45);
  font-weight:700;text-align:center;margin-bottom:10px}
.tp-tabs{display:flex;gap:5px;margin-bottom:11px}
.tp-tab{flex:1;padding:7px 4px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.14);
  border-radius:10px;font-size:9px;font-weight:700;font-family:'Sora',sans-serif;
  color:rgba(255,255,255,0.5);cursor:pointer;outline:none;transition:all 0.15s;text-align:center;
  touch-action:manipulation;-webkit-tap-highlight-color:transparent;user-select:none}
.tp-tab-off-sel{background:rgba(251,191,36,0.18)!important;border-color:rgba(251,191,36,0.7)!important;color:#fbbf24!important}
.tp-tab-on-sel{background:rgba(52,211,153,0.18)!important;border-color:rgba(52,211,153,0.7)!important;color:#34d399!important}
.tp-hours{display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-bottom:11px}
.tp-h{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.13);
  border-radius:9px;padding:7px 3px;font-size:10px;font-weight:600;font-family:'Orbitron',sans-serif;
  color:rgba(255,255,255,0.65);cursor:pointer;outline:none;transition:all 0.13s;text-align:center;
  touch-action:manipulation;-webkit-tap-highlight-color:transparent;user-select:none}
.tp-h:hover{background:rgba(255,255,255,0.12);color:#fff}
.tp-h-off{background:rgba(251,191,36,0.22)!important;border-color:rgba(251,191,36,0.8)!important;color:#fbbf24!important;box-shadow:0 0 10px rgba(251,191,36,0.25)}
.tp-h-on{background:rgba(52,211,153,0.22)!important;border-color:rgba(52,211,153,0.8)!important;color:#34d399!important;box-shadow:0 0 10px rgba(52,211,153,0.25)}
.tp-acts{display:flex;gap:6px}
.tp-cancel{flex:1;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.16);
  border-radius:9px;padding:8px;font-size:9px;font-weight:600;font-family:'Sora',sans-serif;
  color:rgba(255,255,255,0.55);cursor:pointer;outline:none;touch-action:manipulation;-webkit-tap-highlight-color:transparent;user-select:none}
.tp-del{flex:1;background:rgba(255,60,60,0.08);border:1px solid rgba(255,80,80,0.25);
  border-radius:9px;padding:8px;font-size:9px;font-weight:600;font-family:'Sora',sans-serif;
  color:rgba(255,130,130,0.8);cursor:pointer;outline:none;touch-action:manipulation;-webkit-tap-highlight-color:transparent;user-select:none}
.tp-ok{flex:1.3;border-radius:9px;padding:8px;font-size:9px;font-weight:700;font-family:'Sora',sans-serif;
  cursor:pointer;outline:none;touch-action:manipulation;-webkit-tap-highlight-color:transparent;user-select:none}
.tp-ok-off{background:rgba(251,191,36,0.2);border:1px solid rgba(251,191,36,0.6);color:#fbbf24}
.tp-ok-on{background:rgba(52,211,153,0.2);border:1px solid rgba(52,211,153,0.6);color:#34d399}
.rt-header{font-size:8.5px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.5);font-weight:600;margin-bottom:4px;margin-top:6px;text-align:center}
.room-tabs{padding:0 10px 6px;display:flex;flex-direction:column;gap:4px;flex-shrink:0}
.room-tabs-inner{background:rgba(0,15,40,0.45);border:1px solid rgba(255,255,255,0.16);border-radius:14px;padding:7px;display:flex;flex-direction:column;gap:6px;box-shadow:0 4px 20px rgba(0,0,0,0.25),inset 0 1px 0 rgba(255,255,255,0.08)}
.room-tabs-inner.scrollable{max-height:calc(4 * 58px + 3 * 6px + 14px);overflow-y:auto !important;overflow-x:hidden !important;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,0.25) rgba(0,0,0,0.15)}
.room-tabs-inner.scrollable::-webkit-scrollbar{width:5px}
.room-tabs-inner.scrollable::-webkit-scrollbar-track{background:rgba(0,0,0,0.15);border-radius:4px}
.room-tabs-inner.scrollable::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.25);border-radius:4px}
.room-tab{display:flex;align-items:center;gap:10px;background:rgba(0,20,50,0.28);
  border:1px solid rgba(255,255,255,0.2);border-radius:14px;padding:14px 14px;min-height:58px;
  cursor:pointer;outline:none;text-align:left;transition:all 0.2s;width:100%;font-family:'Sora',sans-serif;overflow:hidden;box-sizing:border-box}
.room-tab--active.room-tab--on{background:rgba(0,40,80,0.55)!important;border-color:color-mix(in srgb,var(--accent) 70%,transparent)!important;box-shadow:0 0 14px color-mix(in srgb,var(--accent) 30%,transparent)}
.room-tab--active.room-tab--off{background:rgba(30,20,50,0.55)!important;border-color:rgba(251,191,36,0.5)!important}
.room-tab--running{border-color:color-mix(in srgb,var(--accent) 35%,rgba(255,255,255,0.2))!important}
.room-tab-ico{font-size:22px;line-height:1;flex-shrink:0;width:28px;text-align:center}
.room-tab-info{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.room-tab-name{font-size:13px;font-weight:600;color:rgba(255,255,255,0.9);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.room-tab-temp{font-family:'Orbitron',sans-serif;font-size:11px;font-weight:600;color:rgba(255,255,255,0.5)}
`;

class AcControllerCardV2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._activeIdx   = 0;
    this._hass        = null;
    this._clockInt    = null;
    this._initialized = false;
    // timers: map roomIdx → { end, mode, hrs, int }
    this._timers           = {};
    this._outsideHandler   = null;
    this._confirmJustOpened = false;
    this._popupJustOpened  = false;
    // Khôi phục timer từ localStorage sau khi reload trang
    try {
      var saved = localStorage.getItem('ac_timer_state_v2');
      if (saved) {
        var ts = JSON.parse(saved);
        var now0 = Date.now();
        var self0 = this;
        Object.keys(ts).forEach(function(idx) {
          var t = ts[idx];
          if (t.end && t.end > now0) {
            self0._timers[idx] = { end: t.end, mode: t.mode || 'off', hrs: t.hrs || null, int: null };
          }
        });
      }
    } catch(e) {}
  }

  // ── FIX: So sánh state trước khi render ──────────────────────────────────
  set hass(h) {
    var prev = this._hass;
    this._hass = h;

    // Lần đầu tiên → phải render full
    if (!this._initialized) {
      this._renderFull();
      return;
    }

    // Chỉ re-render khi state của phòng đang chọn thực sự thay đổi
    var id = ROOMS[this._activeIdx].id;
    var changed = !prev
      || this._stateOf(h, id)   !== this._stateOf(prev, id)
      || this._attrOf(h, id, 'temperature')         !== this._attrOf(prev, id, 'temperature')
      || this._attrOf(h, id, 'current_temperature') !== this._attrOf(prev, id, 'current_temperature')
      || this._attrOf(h, id, 'fan_mode')            !== this._attrOf(prev, id, 'fan_mode')
      || this._attrOf(h, id, 'swing_mode')          !== this._attrOf(prev, id, 'swing_mode')
      || this._attrOf(h, id, 'preset_mode')         !== this._attrOf(prev, id, 'preset_mode');

    // Kiểm tra thêm badge ON/OFF của tất cả phòng (cho room tabs)
    if (!changed) {
      for (var i = 0; i < ROOMS.length; i++) {
        if (this._stateOf(h, ROOMS[i].id) !== this._stateOf(prev, ROOMS[i].id)) {
          changed = true;
          break;
        }
      }
    }

    if (changed) this._renderFull();
  }

  // Helpers để đọc state/attr an toàn từ bất kỳ hass object nào
  _stateOf(hassObj, id) {
    return hassObj && hassObj.states && hassObj.states[id] ? hassObj.states[id].state : 'off';
  }
  _attrOf(hassObj, id, k) {
    return hassObj && hassObj.states && hassObj.states[id] && hassObj.states[id].attributes
      ? hassObj.states[id].attributes[k]
      : null;
  }

  setConfig(c) {
    this._config = Object.assign({}, AC_DEFAULT_CONFIG, c);
    var lang = this._config.language || 'vi';
    var tr   = AC_TRANSLATIONS[lang] || AC_TRANSLATIONS.vi;
    var roomCount = Math.max(1, Math.min(8, parseInt(this._config.room_count) || 4));
    this._config.room_count = roomCount;

    // Reset ROOMS theo room_count, copy từ ROOMS_DEFAULT
    ROOMS.length = 0;
    for (var r = 0; r < roomCount; r++) {
      ROOMS.push(Object.assign({}, ROOMS_DEFAULT[r] || {
        id: 'climate.room_' + (r + 1),
        label: 'Ph\xf2ng ' + (r + 1),
        area: '15 m\xb2',
        icon: '\u2744',
      }));
    }

    // Ghi đè ROOMS từ config entities
    if (c && c.entities && Array.isArray(c.entities)) {
      for (var i = 0; i < Math.min(c.entities.length, ROOMS.length); i++) {
        if (c.entities[i] && c.entities[i].entity_id) ROOMS[i].id    = c.entities[i].entity_id;
        if (c.entities[i] && c.entities[i].label)     ROOMS[i].label = c.entities[i].label;
        if (c.entities[i] && c.entities[i].area)      ROOMS[i].area  = c.entities[i].area;
        if (c.entities[i] && c.entities[i].icon)      ROOMS[i].icon  = c.entities[i].icon;
      }
    }
    // Áp dụng ngôn ngữ vào ROOMS nếu label chưa tuỳ chỉnh
    for (var j = 0; j < ROOMS.length; j++) {
      if (!c.entities || !c.entities[j] || !c.entities[j].label) {
        ROOMS[j].label = (tr.rooms && tr.rooms[j]) || ROOMS[j].label;
        ROOMS[j].icon  = (tr.roomIcons && tr.roomIcons[j]) || ROOMS[j].icon;
      }
    }
    // Đảm bảo activeIdx không vượt quá số phòng
    if (this._activeIdx >= ROOMS.length) this._activeIdx = 0;
  }

  static getConfigElement() {
    return document.createElement('multi-air-conditioner-card-editor');
  }

  static getStubConfig() {
    return {
      entities: [
        { entity_id: 'climate.dieu_hoa_living',         label: 'Phòng khách', area: '25 m²', icon: '' },
        { entity_id: 'climate.bed_air_conditioning',     label: 'Phòng ngủ',   area: '18 m²', icon: '' },
        { entity_id: 'climate.kitchen_air_conditioning', label: 'Phòng ăn',    area: '20 m²', icon: '' },
        { entity_id: 'climate.dieu_hoa_office',          label: 'Văn phòng',   area: '15 m²', icon: '' },
      ],
      pm25_entity:      'sensor.pm25',
      outdoor_temp_entity: 'sensor.outdoor_temperature',
      humidity_entity:  'sensor.outdoor_humidity',
      power_entity:     'sensor.ac_power_kwh',
    };
  }
  getCardSize() { return 8; }

  _s(id)       { return this._stateOf(this._hass, id); }
  _a(id, k)    { return this._attrOf(this._hass, id, k); }
  _call(d,s,x) { this._hass.callService(d, s, x); }

  // ── FIX: connectedCallback – inject font + CSS 1 lần duy nhất ────────────
  connectedCallback() {
    if (this.shadowRoot.querySelector('[data-ac-style]')) return;

    var link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Orbitron:wght@400;600;800&display=swap';
    link.setAttribute('data-ac-style', 'font');
    this.shadowRoot.appendChild(link);

    var style = document.createElement('style');
    style.setAttribute('data-ac-style', 'css');
    style.textContent = CARD_CSS;
    this.shadowRoot.appendChild(style);

    // Resume tất cả timer đang chạy (sau reload)
    var self2 = this;
    Object.keys(this._timers).forEach(function(idx) {
      var t = self2._timers[idx];
      if (t && t.end > Date.now() && !t.int) {
        self2._startTick(parseInt(idx));
      }
    });
  }

  _arc(cx, cy, r, a1, a2) {
    var rad = function(d) { return (d - 90) * Math.PI / 180; };
    var x1 = cx + r * Math.cos(rad(a1)), y1 = cy + r * Math.sin(rad(a1));
    var x2 = cx + r * Math.cos(rad(a2)), y2 = cy + r * Math.sin(rad(a2));
    var lg = (a2 - a1 > 180) ? 1 : 0;
    return 'M' + x1.toFixed(2) + ' ' + y1.toFixed(2) + ' A' + r + ' ' + r + ' 0 ' + lg + ' 1 ' + x2.toFixed(2) + ' ' + y2.toFixed(2);
  }

  _renderFull() {
    if (!this._hass) return;

    var cfg    = this._config || {};
    var lang   = cfg.language || 'vi';
    var tr     = AC_TRANSLATIONS[lang] || AC_TRANSLATIONS.vi;
    var bgGrad = acPresetGradient(cfg.background_preset, cfg.bg_color1, cfg.bg_color2);
    var accent = cfg.accent_color || '#00ffcc';
    var txtClr = cfg.text_color   || '#ffffff';
    // Features config (early so room-tabs can use them)
    var features = cfg.features || {};
    var icons = cfg.icons || {};
    var showAvg    = features.show_avg_temp !== false;
    var showWelcome= features.show_welcome !== false;
    var showEco    = features.show_eco !== false;
    var showAirflow= features.show_airflow !== false;
    var showFav    = features.show_fav !== false;
    var showClean  = features.show_clean !== false;
    var showPm25   = features.show_pm25 !== false;
    var showRoomTemp = features.show_room_temp !== false;
    var showMetricTemp = features.show_metrics_temp !== false;
    var showMetricHumidity = features.show_metrics_humidity !== false;
    var showMetricPower = features.show_metrics_power !== false;
    var ecoIcon = icons.eco || '';
    var favIcon = icons.fav || '';
    var cleanIcon = icons.clean || '';
    var powerIcon = icons.power || '';
    var timerIcon = icons.timer || '';
    var allOffIcon = icons.all_off || '';
    var metricTempIcon = icons.metric_temp || '';
    var metricHumidityIcon = icons.metric_humidity || '';
    var metricPowerIcon = icons.metric_power || '';
    var headerIcon = icons.header || '';
    var modeCoolIcon = icons.mode_cool || '';
    var modeHeatIcon = icons.mode_heat || '';
    var modeDryIcon = icons.mode_dry || '';
    var modeFanOnlyIcon = icons.mode_fan_only || '';
    var featureModes = (features.modes && typeof features.modes === 'object') ? features.modes : { cool:true,heat:true,dry:true,fan_only:true };

    var room    = ROOMS[this._activeIdx];
    var roomCfg = (this._config.entities && this._config.entities[this._activeIdx]) || {};
    var hvac    = this._s(room.id);
    var isOn    = hvac && hvac !== 'off' && hvac !== 'unknown' && hvac !== 'unavailable';
    // temperature: prefer per-room temp sensor, fall back to climate current_temperature
    var curTemp = (roomCfg.temp_entity && this._hass.states && this._hass.states[roomCfg.temp_entity])
      ? parseFloat(this._hass.states[roomCfg.temp_entity].state || 0)
      : parseFloat(this._a(room.id,'current_temperature') || 0) || 0;
    var setTemp = parseFloat(this._a(room.id,'temperature') || 24);
    var fanMode  = this._a(room.id,'fan_mode') || 'auto';
    var swingMode= this._a(room.id,'swing_mode') || 'off';
    var ecoOn   = this._a(room.id,'preset_mode') === 'eco';
    var fi  = Math.max(0, FAN_LEVELS.indexOf(fanMode));
    var si  = Math.max(0, SWING_LEVELS.indexOf(swingMode));
    var mode    = MODE_CFG[hvac] || MODE_CFG.cool;
    // Localise mode labels and fan/swing labels
    mode = Object.assign({}, mode, { lbl: tr.modes[hvac] || mode.lbl });
    var fanLabels   = tr.fans   || ['Auto','Low','Medium','High'];
    var swingLabels = tr.swings || ['Fixed','Up/Down','Left/Right','Both'];

    // Normalize temperatures to a 0–40°C scale for the dials
    var clamp = function(v) { return Math.max(0, Math.min(1, v)); };
    var pctActual = clamp(curTemp / 40);
    var pctSet    = clamp(setTemp / 40);
    var arcEndAct = -140 + pctActual * 280;
    var arcEndSet = -140 + pctSet * 280;
    // dot for the outer (target) ring should follow arcEndSet
    var dotRad    = (arcEndSet - 90) * Math.PI / 180;
    var dotX      = (110 + 88 * Math.cos(dotRad)).toFixed(1);
    var dotY      = (110 + 88 * Math.sin(dotRad)).toFixed(1);

    // Format temperature strings: one decimal when sourced from a sensor
    var curTempStr = (roomCfg.temp_entity && this._hass.states && this._hass.states[roomCfg.temp_entity]) ? curTemp.toFixed(1) : Math.round(curTemp);
    var setTempStr = (setTemp % 1 !== 0) ? setTemp.toFixed(1) : setTemp;
    var now     = new Date();
    var timeStr = now.toLocaleTimeString('vi-VN', {hour:'2-digit', minute:'2-digit'});
    var dateStr = now.toLocaleDateString('vi-VN', {weekday:'long', day:'2-digit', month:'2-digit'});

    var arcTrack = this._arc(110,110,88,-140,140);
    // inner arc = actual temperature (smaller radius), outer arc = target/set temperature
    var arcFillInner = pctActual > 0.02 ? this._arc(110,110,72,-140,arcEndAct) : '';
    var arcFillOuter = pctSet    > 0.02 ? this._arc(110,110,88,-140,arcEndSet) : '';

    var arcFillSvg = '';
    var activeColor = isOn ? mode.color : (MODE_CFG.off && MODE_CFG.off.color ? MODE_CFG.off.color : '#7e8594');
    var activeGlow  = isOn ? 'url(#arcGlow)' : '';
    if (pctActual > 0.02) {
      arcFillSvg += '<path d="' + arcFillAct + '" fill="none" stroke="' + activeColor + '" stroke-width="12" stroke-linecap="round"' + (activeGlow ? ' filter="' + activeGlow + '"' : '') + ' opacity="' + (isOn ? 0.95 : 0.22) + '"/>';
    }
    if (pctSet > 0.02) {
      // outer arc = target temp
      arcFillSvg += '<path d="' + arcFillOuter + '" fill="none" stroke="' + activeColor + '" stroke-width="8" stroke-linecap="round" opacity="0.95"/>';
    }
    if (pctActual > 0.02) {
      // inner arc = actual temp (thicker)
      arcFillSvg += '<path d="' + arcFillInner + '" fill="none" stroke="' + activeColor + '" stroke-width="12" stroke-linecap="round"' + (activeGlow ? ' filter="' + activeGlow + '"' : '') + ' opacity="' + (isOn ? 0.95 : 0.22) + '"/>';
    }
    // Draw two dots: inner hollow dot for actual temp, outer filled dot for target temp
    var dotInnerSvg = '';
    if (pctActual > 0.02) {
      var dotRadInner = (arcEndAct - 90) * Math.PI / 180;
      var dotInnerX = (110 + 72 * Math.cos(dotRadInner)).toFixed(1);
      var dotInnerY = (110 + 72 * Math.sin(dotRadInner)).toFixed(1);
      dotInnerSvg = '<circle cx="' + dotInnerX + '" cy="' + dotInnerY + '" r="6" fill="none" stroke="white" stroke-width="2" opacity="0.95"/>';
    }
    var dotOuterSvg = '';
    if (pctSet > 0.02) {
      dotOuterSvg = '<circle cx="' + dotX + '" cy="' + dotY + '" r="8" fill="' + activeColor + '"' + (isOn ? ' filter="url(#dotGlow)"' : '') + '/>'
                  + '<circle cx="' + dotX + '" cy="' + dotY + '" r="4" fill="white" opacity="0.9"/>';
    }

    // Tick marks
    var ticks = '';
    for (var k = 0; k < 17; k++) {
      var tDeg = -140 + k * 280 / 16;
      var tRad = (tDeg - 90) * Math.PI / 180;
      var tx1 = (110 + 79 * Math.cos(tRad)).toFixed(1), ty1 = (110 + 79 * Math.sin(tRad)).toFixed(1);
      var tx2 = (110 + 85 * Math.cos(tRad)).toFixed(1), ty2 = (110 + 85 * Math.sin(tRad)).toFixed(1);
      ticks += '<line x1="' + tx1 + '" y1="' + ty1 + '" x2="' + tx2 + '" y2="' + ty2 + '" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" stroke-linecap="round"/>';
    }

    // Fan bar chart
    var barHeights = [7,10,13,16,19,22,26,30];
    var fillCount  = [0, 2, 4, 8][fi] || 0;
    var fanBarHtml = '';
    for (var i = 0; i < 8; i++) {
      var barOn = i < fillCount;
      fanBarHtml += '<span class="fbar' + (barOn ? ' fbar-on' : '') + '" style="height:' + barHeights[i] + 'px"></span>';
    }

    // Fan icon SVG – cánh béo to, viền sáng, animation khi auto
    var fanIconSvg = (function(fi) {
      var color = 'var(--accent)';
      var glow  = 'var(--glow)';
      var dim = 42; // to hơn hẳn
      var cx = 21, cy = 21;
      // Cánh béo: dùng cubic bezier tạo hình giống cánh quạt thật
      function fatBlade(angleDeg) {
        var a  = (angleDeg - 90) * Math.PI / 180;
        var aL = (angleDeg - 90 - 38) * Math.PI / 180; // cạnh trái cánh
        var aR = (angleDeg - 90 + 22) * Math.PI / 180; // cạnh phải cánh
        var len = 14.5; // chiều dài cánh
        var baseW = 5;  // bán rộng gốc cánh
        // Điểm đầu cánh (2 góc trái/phải tại gốc)
        var bLx = cx + baseW * Math.cos(aL), bLy = cy + baseW * Math.sin(aL);
        var bRx = cx + baseW * Math.cos(aR), bRy = cy + baseW * Math.sin(aR);
        // Đỉnh cánh
        var tipX = cx + len * Math.cos(a), tipY = cy + len * Math.sin(a);
        // Control points để tạo đường cong béo
        var c1x = cx + len*0.45 * Math.cos(aL) + len*0.3 * Math.cos(a);
        var c1y = cy + len*0.45 * Math.sin(aL) + len*0.3 * Math.sin(a);
        var c2x = tipX + 3 * Math.cos(aR), c2y = tipY + 3 * Math.sin(aR);
        var c3x = cx + len*0.45 * Math.cos(aR) + len*0.2 * Math.cos(a);
        var c3y = cy + len*0.45 * Math.sin(aR) + len*0.2 * Math.sin(a);
        return 'M ' + bLx.toFixed(2) + ' ' + bLy.toFixed(2)
          + ' C ' + c1x.toFixed(2) + ' ' + c1y.toFixed(2) + ' ' + c2x.toFixed(2) + ' ' + c2y.toFixed(2) + ' ' + tipX.toFixed(2) + ' ' + tipY.toFixed(2)
          + ' C ' + c2x.toFixed(2) + ' ' + c2y.toFixed(2) + ' ' + c3x.toFixed(2) + ' ' + c3y.toFixed(2) + ' ' + bRx.toFixed(2) + ' ' + bRy.toFixed(2)
          + ' Z';
      }
      var bladeCount = [4, 3, 4, 5][fi];
      var blades = '';
      for (var b = 0; b < bladeCount; b++) {
        var ang = b * (360 / bladeCount);
        // Fill béo + stroke viền sáng
        blades += '<path d="' + fatBlade(ang) + '" fill="' + color + '" fill-opacity="0.82"'
          + ' stroke="rgba(255,255,255,0.55)" stroke-width="0.8" stroke-linejoin="round"/>';
      }
      var animStyle = fi === 0 ? 'style="transform-origin:21px 21px;animation:fanSpin 1.4s linear infinite"' : '';
      return '<svg width="' + dim + '" height="' + dim + '" viewBox="0 0 42 42" ' + animStyle + '>'
        + '<defs><filter id="fanGlow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>'
        + '<g filter="url(#fanGlow)">'
        + blades
        + '</g>'
        + '<circle cx="21" cy="21" r="4.5" fill="' + color + '" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>'
        + '<circle cx="21" cy="21" r="2" fill="rgba(220,240,255,0.85)"/>'
        + '</svg>';
    })(fi);
    var swingActive = swingMode !== 'off';
    var sColor = swingActive ? 'var(--accent)' : 'rgba(255,255,255,0.3)';
    var sOp    = swingActive ? '1' : '0.5';
    var swingSvg = '<svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<path d="M2 8 Q10 4 18 8 Q26 12 34 8" stroke="' + sColor + '" stroke-width="2" stroke-linecap="round" fill="none" opacity="' + sOp + '"/>'
      + '<path d="M2 15 Q10 11 18 15 Q26 19 34 15" stroke="' + sColor + '" stroke-width="2" stroke-linecap="round" fill="none" opacity="' + (swingActive?'0.7':'0.35') + '"/>'
      + '<path d="M2 22 Q10 18 18 22 Q26 26 34 22" stroke="' + sColor + '" stroke-width="2" stroke-linecap="round" fill="none" opacity="' + (swingActive?'0.45':'0.2') + '"/>'
      + '</svg>';

    var swingBtn = '<button class="swing-btn" id="btn-swing">'
      + swingSvg
      + '<span class="swing-lbl">' + swingLabels[si] + '</span>'
      + '</button>';

    // Room tabs
    var roomTabs = '';
    for (var j = 0; j < ROOMS.length; j++) {
      var rId = ROOMS[j].id;
      var entCfg = (this._config.entities && this._config.entities[j]) || {};
      var climateId = entCfg.entity_id || rId;
      var climateState = this._s(climateId);
      var hasClimate = !!(entCfg.entity_id && this._hass && this._hass.states && this._hass.states[entCfg.entity_id]);
      var hasTempSensor = !!(entCfg.temp_entity && this._hass && this._hass.states && this._hass.states[entCfg.temp_entity]);

      var ron = false;
      if (hasClimate) ron = climateState !== 'off' && climateState !== 'unknown' && climateState !== 'unavailable';
      else if (hasTempSensor) {
        var sst = this._hass.states[entCfg.temp_entity].state;
        ron = sst !== 'unknown' && sst !== 'unavailable' && sst !== null && sst !== '';
      }

      var rTemp = 0;
      if (hasTempSensor) rTemp = parseFloat(this._hass.states[entCfg.temp_entity].state || 0);
      else rTemp = parseFloat(this._a(climateId, 'current_temperature') || 0);
      var rTempStr = '--';
      if (hasTempSensor) {
        rTempStr = rTemp > 0 ? (Math.round(rTemp * 10) / 10).toFixed(1) + '°' : '--';
      } else {
        rTempStr = rTemp > 0 ? Math.round(rTemp) + '°' : '--';
      }
      var isActive = j === this._activeIdx;
      var tabClass = 'room-tab'
        + (isActive && ron  ? ' room-tab--active room-tab--on'  : '')
        + (isActive && !ron ? ' room-tab--active room-tab--off' : '')
        + (!isActive && ron ? ' room-tab--running' : '');
      var rIconStr = (entCfg.icon && entCfg.icon !== '') ? entCfg.icon : ROOMS[j].icon || '';
      var rIconHtml = rIconStr && rIconStr.indexOf('mdi:') === 0 ? ('<ha-icon icon="' + rIconStr + '"></ha-icon>') : (rIconStr || '');
      roomTabs += '<button class="' + tabClass + '" data-room="' + j + '">'
        + '<span class="room-tab-ico">' + rIconHtml + '</span>'
        + '<span class="room-tab-info">'
        + '  <span class="room-tab-name">' + ROOMS[j].label + '</span>'
        + (showRoomTemp ? ('  <span class="room-tab-temp">' + rTempStr + '</span>') : '')
        + '</span>'
        + '<span class="room-status-badge ' + (ron ? 'rsb-on' : 'rsb-off') + '">' + (showRoomTemp ? (hasTempSensor ? rTempStr : (ron ? 'ON' : 'OFF')) : (ron ? 'ON' : 'OFF')) + '</span>'
        + '</button>';
    }

    // Mode buttons
    var modeKeys = ['cool','heat','dry','fan_only'];
    var modeBtns = '';
    for (var m = 0; m < modeKeys.length; m++) {
      var mk = modeKeys[m];
      if (featureModes[mk] === false) continue;
      var mc = Object.assign({}, MODE_CFG[mk], { lbl: tr.modes[mk] || MODE_CFG[mk].lbl });
      var act = hvac === mk;
      var st  = act ? ('--bc:' + mc.color + ';--bg:' + mc.glow + ';') : '';
      modeBtns += '<button class="mode-btn' + (act ? ' mode-btn--active' : '') + '" data-hvac="' + mk + '" style="' + st + '">'
        + '<span class="mode-icon">' + ((icons['mode_' + mk] || mc.icon) ? ('<ha-icon icon="' + (icons['mode_' + mk] || mc.icon) + '"></ha-icon>') : '') + '</span>'
        + '<span class="mode-lbl">' + mc.lbl + '</span>'
        + '</button>';
    }

    var comfortTxt = (hvac === 'cool' || hvac === 'heat') ? tr.comfortTemp(curTemp) : (tr.comfort[hvac] || '');
    var curModeIcon = icons['mode_' + hvac] || mode.icon || '';
    var modeChip = isOn ? ('<span class="ac-mode-chip">' + (curModeIcon ? ('<ha-icon icon="' + curModeIcon + '"></ha-icon> ') : '') + mode.lbl + '</span>') : '';

    var pwClass = isOn ? 'pw-on' : 'pw-off';
    var entityState = this._hass && this._hass.states && this._hass.states[room.id] ? this._hass.states[room.id].state : 'unknown';
    var wifiOk = entityState !== 'unknown' && entityState !== 'unavailable';
    var wifiColor = wifiOk ? '#34d399' : 'rgba(255,255,255,0.4)';
    var wifiGlow  = wifiOk ? 'drop-shadow(0 0 4px #34d399)' : 'none';
    var pwSub   = isOn ? tr.statusOn : tr.statusOff;

    // Đọc giá trị cảm biến từ config
    var cfg = this._config || {};
    var pm25Val = cfg.pm25_entity && this._hass && this._hass.states[cfg.pm25_entity]
      ? parseFloat(this._hass.states[cfg.pm25_entity].state) || '--'
      : '--';
    // Average temperature sensor (header)
    var avgTempVal = cfg.avg_temp_entity && this._hass && this._hass.states[cfg.avg_temp_entity]
      ? Math.round(parseFloat(this._hass.states[cfg.avg_temp_entity].state)) + '°'
      : '--°';
    // Outdoor / displayed temp: prefer per-room temp sensor (already in curTemp), fall back to curTemp
    var outdoorTempVal = '--°';
    if (cfg.outdoor_temp_entity && this._hass && this._hass.states[cfg.outdoor_temp_entity]) {
      var ot = parseFloat(this._hass.states[cfg.outdoor_temp_entity].state || 0);
      outdoorTempVal = ot > 0 ? (Math.round(ot * 10) / 10).toFixed(1) + '°' : '--°';
    } else if (roomCfg.temp_entity && this._hass && this._hass.states[roomCfg.temp_entity]) {
      outdoorTempVal = curTemp > 0 ? (Math.round(curTemp * 10) / 10).toFixed(1) + '°' : '--°';
    } else {
      outdoorTempVal = curTemp > 0 ? Math.round(curTemp) + '°' : '--°';
    }
    // Humidity: prefer per-room humidity sensor, else room attributes
    var humidityVal = '--%';
    if (roomCfg.humidity_entity && this._hass && this._hass.states[roomCfg.humidity_entity]) {
      var hv = parseFloat(this._hass.states[roomCfg.humidity_entity].state || 0);
      humidityVal = hv > 0 ? (Math.round(hv * 10) / 10).toFixed(1) + '%' : '--%';
    } else {
      var roomHumidity = parseFloat(this._a(room.id, 'current_humidity') || this._a(room.id, 'humidity') || 0);
      humidityVal = roomHumidity > 0 ? Math.round(roomHumidity) + '%' : '--%';
    }
    // Power: prefer per-room power sensor, else global
    var powerVal = '--';
    if (roomCfg.power_entity && this._hass && this._hass.states[roomCfg.power_entity]) {
      powerVal = parseFloat(this._hass.states[roomCfg.power_entity].state).toFixed(1) + ' kW';
    } else if (cfg.power_entity && this._hass && this._hass.states[cfg.power_entity]) {
      powerVal = parseFloat(this._hass.states[cfg.power_entity].state).toFixed(1) + ' kW';
    }

    // build header pieces
    var hdrBrand = '<div class="hdr">'
      + '  <div class="hdr-brand">'
      + '    <div class="hdr-ico">' + (headerIcon ? ('<ha-icon icon="' + headerIcon + '"></ha-icon>') : (mode.icon || '')) + '</div>'
      + '    <div><div class="hdr-title">' + tr.cardTitle + '</div><div class="hdr-sub">' + tr.cardSub + '</div></div>'
      + '  </div>'
      + '  <div class="hdr-icons">'
      + '    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="' + wifiColor + '" stroke-width="1.8" style="filter:' + wifiGlow + ';transition:all 0.4s"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg>'
      + '    <button id="btn-gear" style="background:none;border:none;padding:0;cursor:pointer;display:flex;align-items:center;line-height:0">'
      + '      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>'
      + '    </button>'
      + '  </div>'
      + '</div>';

    var greetPart = '';
    if (showWelcome) {
      greetPart = '<div class="greet-row">'
        + '  <div>'
        + '    <div class="greet-sub">' + tr.greet() + '</div>'
        + '    <div class="greet-name">' + (cfg.owner_name || 'Smart Home') + '</div>'
        + (showAvg ? ('    <div style="font-size:12px;color:rgba(255,255,255,0.75);margin-top:4px">Avg: ' + avgTempVal + '</div>') : '')
        + '  </div>'
        + (showEco ? ('  <button id="btn-eco" class="eco-badge ' + (ecoOn ? 'eco-on' : 'eco-off') + '">' + (ecoIcon ? ('<ha-icon icon="' + ecoIcon + '"></ha-icon> ') : '') + (ecoOn ? 'ECO ON' : 'ECO') + '</button>') : '')
        + '</div>';
    } else {
      if (showAvg) {
        greetPart = '<div class="greet-row"><div><div style="font-size:12px;color:rgba(255,255,255,0.75);margin-top:4px">Avg: ' + avgTempVal + '</div></div></div>';
      } else {
        greetPart = '<div style="height:0.5px"></div>';
      }
    }

    // ── Không có <link>/<style> ở đây – đã inject ở connectedCallback
    var html = '<div class="card" style="--accent:' + mode.color + ';--glow:' + mode.glow + ';background:' + bgGrad + '">'
+ '<div class="left">'

 + hdrBrand
 + greetPart

+ '<div class="dial-wrap">'
+ '<svg width="220" height="220" viewBox="0 0 220 220" style="overflow:visible">'
+ '<defs>'
+ '<filter id="arcGlow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'
+ '<filter id="dotGlow" x="-150%" y="-150%" width="400%" height="400%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'
+ '<linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">'
+ '<stop offset="0%" stop-color="#3b9eff"/><stop offset="50%" stop-color="#a78bfa"/><stop offset="100%" stop-color="#f59e0b"/>'
+ '</linearGradient>'
+ '<radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">'
+ '<stop offset="0%" stop-color="' + mode.color + '" stop-opacity="0.25"/>'
+ '<stop offset="100%" stop-color="' + mode.color + '" stop-opacity="0"/>'
+ '</radialGradient>'
+ '</defs>'
+ '<circle cx="110" cy="110" r="72" fill="rgba(180,220,255,0.25)" stroke="rgba(255,255,255,0.05)" stroke-width="1.5"/>'
+ '<circle cx="110" cy="110" r="68" fill="url(#innerGlow)"/>'
+ '<path d="' + arcTrack + '" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="12" stroke-linecap="round"/>'
+ ticks
+ arcFillSvg
+ dotInnerSvg
+ dotOuterSvg
+ '</svg>'
+ '<div class="dial-center">'
+ '  <div class="dial-lbl">' + tr.tempLabel + '</div>'
+ '  <div class="dial-temp">' + curTempStr + '<span class="dial-deg">&#176;</span></div>'
+ '  <div class="dial-feel">' + comfortTxt + '</div>'
+ '</div>'
+ '</div>'

+ '<div class="temp-ctrl">'
+ '  <button class="temp-btn" id="btn-temp-down">&#8722;</button>'
+ '  <span class="temp-set">' + setTempStr + '&#176;C</span>'
+ '  <button class="temp-btn" id="btn-temp-up">+</button>'
+ '</div>'

 + '<div class="mode-grid">' + modeBtns + '</div>'

 + (showAirflow ? ('<div class="fan-swing-row">'
 + '  <div class="fan-card">'
 + '    <div class="fc-head"><span class="fc-label">' + tr.fanLabel + '</span><span class="fc-val">' + fanLabels[fi] + '</span></div>'
 + '    <button class="fan-tap" id="btn-fan-cycle">'
 + '      <span class="fan-ico">' + fanIconSvg + '</span>'
 + '      <div class="fan-bars">' + fanBarHtml + '</div>'
 + '    </button>'
 + '  </div>'
 + '  <div class="swing-card">'
 + '    <div class="fc-head"><span class="fc-label">' + tr.swingLabel + '</span></div>'
 + '    ' + swingBtn
 + '  </div>'
 + '</div>') : '')

 + '<div class="chips">'
 + (showEco ? ('  <button id="btn-eco-chip" class="chip ' + (ecoOn ? 'chip--g' : '') + '">' + (ecoIcon ? ('<ha-icon icon="' + ecoIcon + '"></ha-icon> ') : '') + 'Eco</button>') : '')
 + (showFav ? ('  <button class="chip chip--a">' + (favIcon ? ('<ha-icon icon="' + favIcon + '"></ha-icon> ') : '') + 'Fav</button>') : '')
 + (showClean ? ('  <button class="chip chip--b">' + (cleanIcon ? ('<ha-icon icon="' + cleanIcon + '"></ha-icon> ') : '') + 'Clean</button>') : '')
 + '</div>'

 + '<div class="bottom-row">'
 + '<button class="power-row" id="btn-power">'
+ '  <div class="pw-btn ' + pwClass + '">' + (powerIcon ? ('<ha-icon icon="' + powerIcon + '"></ha-icon>') : '') + '</div>'
+ '  <div style="flex:1;min-width:0">'
+ '    <div class="pw-sub pw-sub--big">' + pwSub + '</div>'
+ '  </div>'
+ '  <span class="pw-arrow">&#8250;</span>'
+ '</button>'
+ '<button class="timer-btn' + (this._timers[this._activeIdx] ? ' timer-btn--active' : '') + '" id="btn-timer">'
+ '  <span class="timer-ico">' + (timerIcon ? ('<ha-icon icon="' + timerIcon + '"></ha-icon>') : '') + '</span>'
+ '  <span class="timer-lbl">' + tr.timerBtn + '</span>'
+ '  <span class="timer-cd" id="timer-cd">' + (this._timers[this._activeIdx] ? this._fmtRemain(this._activeIdx) : '') + '</span>'
+ '</button>'
+ '</div>'

+ '</div>'  // end .left

+ '<div class="right">'

+ '<div class="room-image">'
+ '  <img id="room-photo" class="room-img-el" src="' + ROOM_IMAGES[this._activeIdx] + '" alt="room">'
+ '  <div class="ac-overlay">'
+ '    <span class="ac-led ' + (isOn ? 'led-on' : 'led-off') + '"></span>'
+ '    <span class="ac-overlay-txt">' + (isOn ? tr.overlayOn : tr.overlayOff) + '</span>'
+ modeChip
+ '  </div>'
+ '  <div class="img-temp-badge">' + curTempStr + '<span>&#176;C</span></div>'
+ '  <div class="img-room-name">' + room.label + '</div>'
+ '</div>'

+ '<div class="status-block">'
+ '  <div class="status-header">'
+ '    <div>'
+ '      <div class="st-title">' + tr.statusLabel + '</div>'
+ '      <div class="' + (isOn ? 'st-on' : 'st-off') + '">' + (isOn ? tr.statusOn : tr.statusOff) + '</div>'
+ '      <div class="st-sub">' + (isOn ? tr.statusOn : tr.statusOff) + '</div>'
+ '    </div>'
+ '    ' + (showPm25 ? ('<div class="pm-ring"><div class="pm-val">' + pm25Val + '</div><div class="pm-unit">' + tr.dustLabel + '</div></div>') : '')
+ '  </div>'
+ '  <div class="metrics">'
+ '    ' + (showMetricTemp ? ('<div class="met"><span class="met-ico">' + (metricTempIcon ? ('<ha-icon icon="' + metricTempIcon + '"></ha-icon>') : '') + '</span><span class="met-val" id="met-outdoor-temp">' + outdoorTempVal + '</span></div>') : '')
+ '    ' + (showMetricHumidity ? ('<div class="met"><span class="met-ico">' + (metricHumidityIcon ? ('<ha-icon icon="' + metricHumidityIcon + '"></ha-icon>') : '') + '</span><span class="met-val" id="met-humidity">' + humidityVal + '</span></div>') : '')
+ '    ' + (showMetricPower ? ('<div class="met"><span class="met-ico">' + (metricPowerIcon ? ('<ha-icon icon="' + metricPowerIcon + '"></ha-icon>') : '') + '</span><span class="met-val" id="met-power">' + powerVal + '</span></div>') : '')
+ '  </div>'
+ '</div>'

+ '<div class="room-tabs"><div class="rt-header">' + tr.selectRoom + '</div><div class="room-tabs-inner' + (ROOMS.length >= 5 ? ' scrollable' : '') + '">' + roomTabs + '</div></div>'

 + '<button class="all-off-btn" id="btn-all-off">'
 + '  <div class="all-off-ico">' + (allOffIcon ? ('<ha-icon icon="' + allOffIcon + '"></ha-icon>') : '') + '</div>'
+ '  <div class="all-off-info">'
+ '    <div class="all-off-title">' + tr.allOff + '</div>'
+ '    <div class="all-off-sub">' + tr.allOffSub + '</div>'
+ '  </div>'
+ '  <div class="all-off-arr">&#8250;</div>'
+ '</button>'

+ '</div>'  // end .right
+ '</div>'; // end .card

    // ── FIX: Chỉ cập nhật phần nội dung, không đụng vào <style> và <link> đã inject
    var container = this.shadowRoot.getElementById('ac-card-root');
    if (!container) {
      container = document.createElement('div');
      container.id = 'ac-card-root';
      this.shadowRoot.appendChild(container);
    }
    container.innerHTML = html;

    this._initialized = true;
    this._bind();
    this._startClock();
  }

  _bind() {
    var self = this;
    var r = this.shadowRoot;

    function onTap(el, fn) {
      if (!el) return;
      var tapped = false;
      el.addEventListener('touchstart', function(e) {
        e.preventDefault();
        e.stopPropagation();
        tapped = true;
        fn(e);
      }, { passive: false });
      el.addEventListener('click', function(e) {
        e.stopPropagation();
        if (tapped) { tapped = false; return; }
        fn(e);
      });
    }

    function onTapAll(els, fn) {
      els.forEach(function(b) { onTap(b, function(e) { fn(b, e); }); });
    }

    onTap(r.getElementById('btn-temp-up'), function() {
      var id = ROOMS[self._activeIdx].id;
      if (!id || (id.split && id.split('.')[0] !== 'climate')) return; // ignore for sensor room entities
      self._call('climate','set_temperature',{entity_id:id, temperature: parseFloat(self._a(id,'temperature')||24)+1});
    });

    onTap(r.getElementById('btn-temp-down'), function() {
      var id = ROOMS[self._activeIdx].id;
      if (!id || (id.split && id.split('.')[0] !== 'climate')) return;
      self._call('climate','set_temperature',{entity_id:id, temperature: Math.max(16, parseFloat(self._a(id,'temperature')||24)-1)});
    });

    onTapAll(r.querySelectorAll('[data-hvac]'), function(b) {
      var id = ROOMS[self._activeIdx].id;
      if (!id || (id.split && id.split('.')[0] !== 'climate')) return;
      self._call('climate','set_hvac_mode',{entity_id:id, hvac_mode:b.dataset.hvac});
    });

    onTapAll(r.querySelectorAll('[data-fan]'), function(b) {
      var id = ROOMS[self._activeIdx].id;
      if (!id || (id.split && id.split('.')[0] !== 'climate')) return;
      self._call('climate','set_fan_mode',{entity_id:id, fan_mode:b.dataset.fan});
    });

    onTap(r.getElementById('btn-power'), function() {
      var id = ROOMS[self._activeIdx].id;
      if (!id || (id.split && id.split('.')[0] !== 'climate')) return;
      self._call('climate','set_hvac_mode',{entity_id:id, hvac_mode: self._s(id)!=='off'?'off':'cool'});
    });

    onTap(r.getElementById('btn-gear'), function() {
      var entityId = ROOMS[self._activeIdx].id;
      self.dispatchEvent(new CustomEvent('hass-more-info', {
        bubbles: true, composed: true,
        detail: { entityId: entityId }
      }));
    });

    var ecoFn = function() {
      var id = ROOMS[self._activeIdx].id;
      if (!id || (id.split && id.split('.')[0] !== 'climate')) return;
      self._call('climate','set_preset_mode',{entity_id:id, preset_mode: self._a(id,'preset_mode')==='eco'?'none':'eco'});
    };
    onTap(r.getElementById('btn-eco'), ecoFn);
    onTap(r.getElementById('btn-eco-chip'), ecoFn);

    onTap(r.getElementById('btn-fan-cycle'), function() {
      var id = ROOMS[self._activeIdx].id;
      if (!id || (id.split && id.split('.')[0] !== 'climate')) return;
      var cur = self._a(id,'fan_mode') || 'auto';
      var idx = FAN_LEVELS.indexOf(cur);
      var next = FAN_LEVELS[(idx + 1) % FAN_LEVELS.length];
      self._call('climate','set_fan_mode',{entity_id:id, fan_mode:next});
    });

    onTap(r.getElementById('btn-swing'), function() {
      var id = ROOMS[self._activeIdx].id;
      if (!id || (id.split && id.split('.')[0] !== 'climate')) return;
      var cur = self._a(id,'swing_mode') || 'off';
      var idx = SWING_LEVELS.indexOf(cur);
      var next = SWING_LEVELS[(idx + 1) % SWING_LEVELS.length];
      self._call('climate','set_swing_mode',{entity_id:id, swing_mode:next});
    });

    onTap(r.getElementById('btn-all-off'), function() {
      var sr2 = self.shadowRoot;
      var allOffBtn = r.getElementById('btn-all-off');
      var oldP = sr2.getElementById('confirm-popup-el');
      if (oldP) { oldP.remove(); return; }
      var cpop = document.createElement('div');
      cpop.id = 'confirm-popup-el';
      cpop.className = 'confirm-popup';
      var rect2 = allOffBtn.getBoundingClientRect();
      cpop.style.bottom = (window.innerHeight - rect2.top + 10) + 'px';
      cpop.style.right  = (window.innerWidth  - rect2.right + 12) + 'px';
      var trPop = AC_TRANSLATIONS[(self._config && self._config.language) || 'vi'] || AC_TRANSLATIONS.vi;
      cpop.innerHTML =
        '<div class="cp-title">' + (trPop.confirmOff || 'Confirm') + '</div>'
      + '<div style="margin-top:8px;font-size:12px;color:rgba(255,255,255,0.9)">' + (typeof trPop.confirmSub === 'function' ? trPop.confirmSub(ROOMS.length) : '') + '</div>'
      + '<div style="display:flex;gap:8px;margin-top:12px">'
      +   '<button id="cp-cancel-btn" class="tp-cancel">' + (trPop.cancel || 'Cancel') + '</button>'
      +   '<button class="cp-ok" id="cp-ok-btn">' + (trPop.doOff || 'Turn off') + '</button>'
      + '</div>';
      sr2.appendChild(cpop);
      cpop.querySelector('#cp-cancel-btn').onclick = function(ev) { ev.stopPropagation(); cpop.remove(); };
      cpop.querySelector('#cp-ok-btn').onclick = function(ev) {
        ev.stopPropagation();
        ROOMS.forEach(function(room) {
          var did = room.id;
          if (did && did.split && did.split('.')[0] === 'climate') {
            self._call('climate','set_hvac_mode',{entity_id:did, hvac_mode:'off'});
          }
        });
        cpop.remove();
      };
      self._confirmJustOpened = true;
      setTimeout(function() { self._confirmJustOpened = false; }, 80);
      function outsideConfirm(ev) {
        if (self._confirmJustOpened) return;
        var path = ev.composedPath ? ev.composedPath() : [];
        if (path.indexOf(cpop) === -1 && path.indexOf(allOffBtn) === -1) {
          cpop.remove();
          document.removeEventListener('click',    outsideConfirm, true);
          document.removeEventListener('touchend', outsideConfirm, true);
        }
      }
      document.addEventListener('click',    outsideConfirm, true);
      document.addEventListener('touchend', outsideConfirm, true);
    });

    onTapAll(r.querySelectorAll('[data-room]'), function(b) {
      var newIdx = parseInt(b.dataset.room);
      if (newIdx === self._activeIdx) return;
      var img = r.getElementById('room-photo');
      if (img) {
        img.classList.add('fade-out');
        setTimeout(function() { self._activeIdx = newIdx; self._renderFull(); }, 300);
      } else {
        self._activeIdx = newIdx; self._renderFull();
      }
    });

    this._bindTimer();
  }

  // ── FIX: Clock chỉ tạo 1 interval, không bao giờ chạy lại nếu đang chạy rồi
  _startClock() {
    var self = this;
    if (this._clockInt) return; // đã có rồi → không tạo thêm
    this._clockInt = setInterval(function() {
      var el = self.shadowRoot && self.shadowRoot.getElementById('clock-display');
      if (el) el.textContent = new Date().toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'});
    }, 30000);
  }

  // ── Timer per-room ────────────────────────────────────────────────────────
  _fmtRemain(roomIdx) {
    var t = this._timers[roomIdx];
    if (!t || !t.end) return '';
    var rem = t.end - Date.now();
    if (rem <= 0) return '';
    var m = Math.ceil(rem / 60000);
    var h = Math.floor(m / 60); m = m % 60;
    return h > 0 ? h + 'h' + (m ? m + 'm' : '') : m + 'm';
  }

  _timerSave() {
    try {
      var snap = {};
      var now = Date.now();
      Object.keys(this._timers).forEach(function(idx) {
        var t = this._timers[idx];
        if (t && t.end && t.end > now) {
          snap[idx] = { end: t.end, mode: t.mode, hrs: t.hrs };
        }
      }.bind(this));
      if (Object.keys(snap).length > 0) {
        localStorage.setItem('ac_timer_state_v2', JSON.stringify(snap));
      } else {
        localStorage.removeItem('ac_timer_state_v2');
      }
    } catch(e) {}
  }

  _startTick(roomIdx) {
    var self = this;
    var t = self._timers[roomIdx];
    if (!t) return;
    if (t.int) clearInterval(t.int);
    self._timerSave();
    t.int = setInterval(function() {
      var tr2 = self._timers[roomIdx];
      if (!tr2) { return; }
      var rem = tr2.end - Date.now();
      // Chỉ cập nhật UI nếu đang xem đúng phòng này
      if (self._activeIdx === parseInt(roomIdx)) {
        var el = self.shadowRoot && self.shadowRoot.getElementById('timer-cd');
        var btn2 = self.shadowRoot && self.shadowRoot.getElementById('btn-timer');
        if (rem <= 0) {
          clearInterval(tr2.int); tr2.int = null;
          delete self._timers[roomIdx];
          self._timerSave();
          if (el)   el.textContent = '';
          if (btn2) btn2.classList.remove('timer-btn--active');
          // Thực hiện bật/tắt đúng phòng
          var id = ROOMS[roomIdx].id;
          self._call('climate', 'set_hvac_mode', { entity_id: id, hvac_mode: tr2.mode === 'on' ? 'cool' : 'off' });
        } else {
          if (el) el.textContent = self._fmtRemain(roomIdx);
        }
      } else {
        // Phòng đang chạy timer nhưng không được xem → chỉ xử lý hết giờ
        if (rem <= 0) {
          clearInterval(tr2.int); tr2.int = null;
          delete self._timers[roomIdx];
          self._timerSave();
          var id2 = ROOMS[roomIdx].id;
          self._call('climate', 'set_hvac_mode', { entity_id: id2, hvac_mode: tr2.mode === 'on' ? 'cool' : 'off' });
        }
      }
    }, 10000);
  }

  _bindTimer() {
    var self  = this;
    var sr    = this.shadowRoot;
    var btn   = sr.getElementById('btn-timer');
    var roomIdx = this._activeIdx; // ghi nhớ phòng tại thời điểm bind
    var tr = AC_TRANSLATIONS[(this._config && this._config.language) || 'vi'] || AC_TRANSLATIONS.vi;
    if (!btn) return;

    var HOURS     = [0.5, 1, 1.5, 2, 3, 4, 6, 8];
    var HOUR_LBLS = [(tr && tr.halfHourLabel) ? tr.halfHourLabel : '30m','1h','1.5h','2h','3h','4h','6h','8h'];

    function closePopup() {
      var p = sr.getElementById('timer-popup-el');
      if (p) p.remove();
      if (self._outsideHandler) {
        document.removeEventListener('click',    self._outsideHandler, true);
        document.removeEventListener('touchend', self._outsideHandler, true);
        self._outsideHandler = null;
      }
    }

    function openPopup() {
      closePopup();
      var cur        = self._timers[roomIdx] || {};
      var chosenH    = cur.hrs || null;
      var chosenMode = cur.mode || 'off';
      var customMin  = '';  // phút tùy chỉnh

      var pop = document.createElement('div');
      pop.id = 'timer-popup-el';
      pop.className = 'timer-popup';

      var rect = btn.getBoundingClientRect();
      pop.style.bottom = (window.innerHeight - rect.top + 8) + 'px';
      pop.style.right  = (window.innerWidth  - rect.right)  + 'px';

      function renderPop() {
        var hasTimer = !!(self._timers[roomIdx] && self._timers[roomIdx].end);
        pop.innerHTML =
          '<div class="tp-title">' + tr.timerBtn + '</div>'
        + '<div class="tp-tabs">'
        +   '<button class="tp-tab ' + (chosenMode==='off'?'tp-tab-off-sel':'') + '" id="tp-off">' + tr.statusOff + '</button>'
        +   '<button class="tp-tab ' + (chosenMode==='on'?'tp-tab-on-sel':'')   + '" id="tp-on">' + tr.statusOn + '</button>'
        + '</div>'
        + '<div class="tp-hours">'
        + HOURS.map(function(h, i) {
            var sel = chosenH === h ? (chosenMode==='off'?' tp-h-off':' tp-h-on') : '';
            return '<button class="tp-h' + sel + '" data-h="' + h + '">' + HOUR_LBLS[i] + '</button>';
          }).join('')
        + '</div>'
        // Dòng nhập số phút tùy chỉnh
        + '<div style="display:flex;align-items:center;gap:6px;margin-bottom:10px">'
        +   '<input id="tp-custom-min" type="number" min="1" max="999" placeholder="' + ((tr && tr.customMinPlaceholder) ? tr.customMinPlaceholder : 'Enter minutes...') + '" value="' + customMin + '"'
        +     ' style="flex:1;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.18);border-radius:8px;'
        +     'padding:6px 8px;font-size:11px;font-family:Sora,sans-serif;color:#fff;outline:none;width:0">'
        +   '<span style="font-size:9px;color:rgba(255,255,255,0.45);white-space:nowrap">' + ((tr && tr.minAbbr) ? tr.minAbbr : 'm') + '</span>'
        + '</div>'
        + '<div class="tp-acts">'
        +   '<button class="tp-cancel" id="tp-cancel">' + tr.cancel + '</button>'
        +   (hasTimer ? '<button class="tp-del" id="tp-del">' + (tr.cancel || 'Delete') + '</button>' : '')
        +   '<button class="tp-ok ' + (chosenMode==='on'?'tp-ok-on':'tp-ok-off') + '" id="tp-ok">OK</button>'
        + '</div>';

        // Bind tabs
        var tabOff = pop.querySelector('#tp-off');
        var tabOn  = pop.querySelector('#tp-on');
        function setMode(m) { chosenMode = m; renderPop(); }
        if (tabOff) tabOff.onclick = function(e){ e.stopPropagation(); setMode('off'); };
        if (tabOn)  tabOn.onclick  = function(e){ e.stopPropagation(); setMode('on');  };

        // Bind preset giờ
        pop.querySelectorAll('.tp-h').forEach(function(b) {
          b.onclick = function(e) {
            e.stopPropagation();
            chosenH   = parseFloat(b.dataset.h);
            customMin = '';
            renderPop();
          };
        });

        // Bind custom input – giữ value khi re-render
        var custEl = pop.querySelector('#tp-custom-min');
        if (custEl) {
          custEl.addEventListener('input', function() {
            customMin = custEl.value;
            chosenH   = null; // bỏ chọn preset
          });
          custEl.addEventListener('click', function(e) { e.stopPropagation(); });
          custEl.addEventListener('touchstart', function(e) { e.stopPropagation(); }, { passive: true });
        }

        // Huỷ
        var cancelBtn = pop.querySelector('#tp-cancel');
        if (cancelBtn) cancelBtn.onclick = function(e){ e.stopPropagation(); closePopup(); };

        // Xoá hẹn
        var delBtn = pop.querySelector('#tp-del');
        if (delBtn) delBtn.onclick = function(e) {
          e.stopPropagation();
          var t = self._timers[roomIdx];
          if (t && t.int) clearInterval(t.int);
          delete self._timers[roomIdx];
          self._timerSave();
          var cd = sr.getElementById('timer-cd');
          if (cd) cd.textContent = '';
          btn.classList.remove('timer-btn--active');
          closePopup();
        };

        // Xác nhận
        var okBtn = pop.querySelector('#tp-ok');
        if (okBtn) okBtn.onclick = function(e) {
          e.stopPropagation();
          // Ưu tiên custom minutes nếu có
          var custInput = pop.querySelector('#tp-custom-min');
          var mins = custInput && custInput.value ? parseFloat(custInput.value) : 0;
          var finalHrs = mins > 0 ? (mins / 60) : chosenH;
          if (!finalHrs || finalHrs <= 0) { closePopup(); return; }

          // Huỷ timer cũ của phòng này (nếu có)
          var old = self._timers[roomIdx];
          if (old && old.int) clearInterval(old.int);

          self._timers[roomIdx] = { end: Date.now() + finalHrs * 3600000, mode: chosenMode, hrs: finalHrs, int: null };
          btn.classList.add('timer-btn--active');
          var cd = sr.getElementById('timer-cd');
          if (cd) cd.textContent = self._fmtRemain(roomIdx);
          self._startTick(roomIdx);
          closePopup();
        };
      }

      renderPop();
      sr.appendChild(pop);

      self._popupJustOpened = true;
      setTimeout(function() { self._popupJustOpened = false; }, 80);

      function outside(e) {
        if (self._popupJustOpened) return;
        var path = e.composedPath ? e.composedPath() : [];
        if (path.indexOf(pop) === -1 && path.indexOf(btn) === -1) closePopup();
      }
      document.addEventListener('click',    outside, true);
      document.addEventListener('touchend', outside, true);
      self._outsideHandler = outside;
    }

    btn.addEventListener('click', function(e) {
      e.stopPropagation(); e.preventDefault();
      if (!sr.getElementById('timer-popup-el')) openPopup();
    });
    btn.addEventListener('touchend', function(e) {
      e.preventDefault(); e.stopPropagation();
      if (!sr.getElementById('timer-popup-el')) openPopup();
    }, { passive: false });
  }

  disconnectedCallback() {
    if (this._clockInt) { clearInterval(this._clockInt); this._clockInt = null; }
    // Dừng tất cả interval của các phòng
    var self = this;
    Object.keys(this._timers).forEach(function(idx) {
      var t = self._timers[idx];
      if (t && t.int) { clearInterval(t.int); t.int = null; }
    });
  }
}

// ═══════════════════════════════════════════════════════════════
//  VISUAL EDITOR  –  Gate-card style, đa ngôn ngữ, ha-entity-picker
// ═══════════════════════════════════════════════════════════════
class MultiAcCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = { ...AC_DEFAULT_CONFIG };
    this._hass   = null;
    this._open   = { lang: true, roomcount: true, rooms: true, sensors: true, features: true, icons: false, colors: false, bg: true };
    this._picker = null;
  }

  setConfig(c) {
    this._config = { ...AC_DEFAULT_CONFIG, ...c };
    this._render();
  }

  set hass(h) {
    this._hass = h;
    this._syncPickers();
  }

  get t() { return AC_TRANSLATIONS[this._config.language || 'vi'] || AC_TRANSLATIONS.vi; }

  _fire() {
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: this._config }, bubbles: true, composed: true,
    }));
  }

  // ── Inject hass vào mọi ha-entity-picker ───────────────────────────────────
  _syncPickers() {
    if (!this._hass || !this.shadowRoot) return;
    const apply = () => {
      this.shadowRoot.querySelectorAll('ha-entity-picker').forEach(p => {
        p.hass = this._hass;
        // decide domain default based on picker role
        let domain = p.dataset.domain;
        if (!domain) {
          if (p.dataset.room) domain = 'climate';
          else if (p.dataset.roomTemp || p.dataset.roomTemp === '') domain = 'sensor';
          else if (p.dataset.roomHum || p.dataset.roomHum === '') domain = 'sensor';
          else if (p.dataset.roomPower || p.dataset.roomPower === '') domain = 'sensor';
          else domain = 'sensor';
        }
        if (domain) p.includeDomains = [domain];

        // restore saved values for global pickers (data-key)
        const key = p.dataset.key;
        if (key) {
          const saved = this._config[key] || '';
          if (saved && p.value !== saved) { p.value = saved; p.setAttribute('value', saved); }
          return;
        }

        // per-room pickers
        const idx = p.dataset.room !== undefined ? parseInt(p.dataset.room) : (p.dataset.roomTemp !== undefined ? parseInt(p.dataset.roomTemp) : (p.dataset.roomHum !== undefined ? parseInt(p.dataset.roomHum) : (p.dataset.roomPower !== undefined ? parseInt(p.dataset.roomPower) : -1)));
        if (idx >= 0) {
          const ents = this._config.entities || [];
          const ent = ents[idx] || {};
          const saved = p.dataset.room ? (ent.entity_id || '') : (p.dataset.roomTemp ? (ent.temp_entity || '') : (p.dataset.roomHum ? (ent.humidity_entity || '') : (p.dataset.roomPower ? (ent.power_entity || '') : '')));
          if (saved && p.value !== saved) { p.value = saved; p.setAttribute('value', saved); }
        }
      });
    };
    apply();
    requestAnimationFrame(() => requestAnimationFrame(apply));
  }

  // ── Toggle accordion mà không full re-render (giữ picker state) ────────────
  _toggleSection(id) {
    this._open[id] = !this._open[id];
    const body  = this.shadowRoot.getElementById('body-' + id);
    const arrow = this.shadowRoot.getElementById('arrow-' + id);
    if (body) {
      body.style.display = this._open[id] ? 'block' : 'none';
      if (arrow) arrow.textContent = this._open[id] ? '▾' : '▸';
      if (this._open[id]) this._syncPickers();
    }
  }

  // ── Color picker row (y hệt gate-card) ──────────────────────────────────────
  _colorRow(key, label) {
    const value  = this._config[key] || '#ffffff';
    const isOpen = this._picker === key;
    const swatches = ['#00ffcc','#00ff96','#ff5252','#00dcff','#ffd740','#ff8a65',
                      '#ffffff','#aaaaaa','#ffaa00','#22cc77','#2288ee','#ee4444'];
    return `
<div class="ci">
  <div class="ci-hdr" data-cp="${key}">
    <div class="ci-swatch" style="background:${value};"></div>
    <span class="ci-label">${label}</span>
    <code class="ci-code">${value}</code>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="ci-chv">
      <path d="${isOpen?'M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z':'M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'}"/>
    </svg>
  </div>
  ${isOpen ? `
  <div class="ci-body">
    <input type="color" data-cp-native="${key}" value="${value}" class="ci-native"/>
    <div class="ci-hex-wrap">
      <span class="ci-hash">#</span>
      <input type="text" data-cp-hex="${key}" value="${value.replace('#','')}" maxlength="6" placeholder="rrggbb" class="ci-hex-inp"/>
    </div>
    <div class="ci-swatches">
      ${swatches.map(c=>`<div data-cp-dot="${key}" data-color="${c}" class="ci-dot"
        style="background:${c};outline:${value===c?'2px solid var(--primary-color)':'2px solid transparent'};"></div>`).join('')}
    </div>
  </div>` : ''}
</div>`;
  }

  // ── Entity field dùng ha-entity-picker native ─────────────────────────────
  _entityField(key, label, domain) {
    return `
<div class="row">
  <label>${label}</label>
  <ha-entity-picker data-key="${key}" data-domain="${domain}" allow-custom-entity></ha-entity-picker>
</div>`;
  }

  _render() {
    const cfg  = this._config;
    const t    = this.t;
    const icons = cfg.icons || {};
    const bgP  = cfg.background_preset || 'default';
    const lang = cfg.language || 'vi';
    const roomCount = Math.max(1, Math.min(8, parseInt(cfg.room_count) || 4));
    const entities = (cfg.entities || []).slice();
    while (entities.length < roomCount) entities.push({});

    // ── Room rows (dynamic by room_count) ──────────────────────────────────
    let roomRows = '';
    for (let i = 0; i < roomCount; i++) {
      const ent   = entities[i] || {};
      const defLbl = (t.rooms && t.rooms[i]) || ('Room ' + (i+1));
      const defIco = (t.roomIcons && t.roomIcons[i]) || '';
      roomRows += `
<div class="ac-row">
  <div class="ac-row-title">${t.edRooms} ${i+1} – ${defLbl}</div>
  <div class="row">
    <label>${t.edAcEntity}</label>
    <ha-entity-picker data-room="${i}" data-domain="climate" allow-custom-entity></ha-entity-picker>
  </div>
  <div class="row">
    <label>Temperature sensor</label>
    <ha-entity-picker data-room-temp="${i}" data-domain="sensor" allow-custom-entity></ha-entity-picker>
  </div>
  <div class="row">
    <label>Humidity sensor</label>
    <ha-entity-picker data-room-hum="${i}" data-domain="sensor" allow-custom-entity></ha-entity-picker>
  </div>
  <div class="row">
    <label>Power sensor</label>
    <ha-entity-picker data-room-power="${i}" data-domain="sensor" allow-custom-entity></ha-entity-picker>
  </div>
  <div class="row">
    <label>${t.edAcName}</label>
    <input class="txt-inp" type="text" id="inp-room-label-${i}" placeholder="${defLbl}" value="${ent.label||''}"/>
  </div>
  <div class="row">
    <label>${t.edAcIcon}</label>
    <div style="display:flex;align-items:center;gap:8px;">
      <input class="txt-inp" type="text" id="inp-room-icon-${i}" placeholder="${defIco}" value="${ent.icon||''}"/>
      <span id="preview-room-icon-${i}" style="min-width:28px;text-align:center;color:var(--secondary-text-color);"></span>
    </div>
  </div>
</div>`;
    }

    this.shadowRoot.innerHTML = `
<style>
  :host { display:block; font-family:var(--primary-font-family,'Roboto',sans-serif); }
  .editor { background:var(--card-background-color,#fff); color:var(--primary-text-color); }
  .credit { display:flex;align-items:center;gap:8px;padding:12px 16px 8px;font-size:12px;
            color:var(--primary-color);font-weight:500;border-bottom:1px solid var(--divider-color); }
  /* accordion */
  .acc-wrap { border-bottom:1px solid var(--divider-color); }
  .acc-head { display:flex;align-items:center;gap:10px;padding:14px 16px;cursor:pointer;
              user-select:none;font-size:14px;font-weight:500;color:var(--primary-text-color);
              background:var(--secondary-background-color); }
  .acc-head:hover { filter:brightness(.96); }
  .acc-head ha-icon { color:var(--secondary-text-color);--mdi-icon-size:18px; }
  .acc-arrow { margin-left:auto;font-size:14px;color:var(--secondary-text-color); }
  .acc-body { padding:12px 14px;border-top:1px solid var(--divider-color);
              background:var(--card-background-color,#fff); }
  /* fields */
  .row { display:flex;flex-direction:column;margin-bottom:12px; }
  .row:last-child { margin-bottom:0; }
  .row label { font-size:12px;color:var(--secondary-text-color);margin-bottom:4px;font-weight:600; }
  ha-entity-picker { display:block;width:100%; }
  /* language */
  .lang-grid { display:flex;flex-wrap:wrap;gap:6px; }
  .lang-btn { display:flex;align-items:center;gap:5px;padding:7px 10px;border-radius:8px;
              border:1.5px solid var(--divider-color);background:var(--secondary-background-color);
              cursor:pointer;font-size:12px;color:var(--primary-text-color);transition:all .2s; }
  .lang-btn.on { border-color:var(--primary-color);background:rgba(3,169,244,.12);
                 color:var(--primary-color);font-weight:700; }
  /* AC room rows */
  .ac-row { background:var(--secondary-background-color);border:1px solid var(--divider-color);
            border-radius:10px;padding:12px;margin-bottom:10px;display:flex;flex-direction:column;gap:8px; }
  .ac-row:last-child { margin-bottom:0; }
  .ac-row-title { font-size:12px;font-weight:700;color:var(--primary-color);margin-bottom:2px; }
  /* text inputs */
  .txt-inp { background:var(--input-fill-color,rgba(0,0,0,.04));border:1px solid var(--divider-color);
             border-radius:8px;padding:8px 12px;font-size:13px;color:var(--primary-text-color);
             width:100%;box-sizing:border-box; }
  .txt-inp:focus { outline:none;border-color:var(--primary-color); }
  /* bg presets */
  .bg-grid { display:grid;grid-template-columns:repeat(5,1fr);gap:5px;margin-bottom:10px; }
  .bgs { border-radius:7px;height:40px;cursor:pointer;border:2px solid transparent;
         display:flex;align-items:flex-end;padding:3px 5px;font-size:9px;font-family:monospace;
         color:rgba(255,255,255,.85);text-shadow:0 1px 3px rgba(0,0,0,.9);transition:border-color .15s;
         white-space:nowrap;overflow:hidden; }
  .bgs.on { border-color:var(--primary-color); }
  /* color picker */
  .ci { border:1px solid var(--divider-color);border-radius:8px;overflow:hidden;margin-bottom:8px; }
  .ci:last-child { margin-bottom:0; }
  .ci-hdr { display:flex;align-items:center;gap:10px;padding:10px 12px;cursor:pointer;
            background:var(--card-background-color,#fff); }
  .ci-swatch { width:24px;height:24px;border-radius:4px;border:1px solid rgba(0,0,0,.1);flex-shrink:0; }
  .ci-label { font-size:13px;flex:1;color:var(--primary-text-color); }
  .ci-code { font-size:11px;color:var(--secondary-text-color);font-family:monospace;
             background:var(--secondary-background-color);padding:2px 6px;border-radius:3px; }
  .ci-chv { color:var(--secondary-text-color);flex-shrink:0; }
  .ci-body { padding:12px 14px;background:var(--secondary-background-color);
             border-top:1px solid var(--divider-color);display:flex;flex-direction:column;gap:10px; }
  .ci-native { width:100%;height:44px;border:1px solid var(--divider-color);border-radius:6px;
               cursor:pointer;padding:2px;background:transparent; }
  .ci-hex-wrap { display:flex;align-items:center;gap:6px;border:1px solid var(--divider-color);
                 border-radius:4px;padding:6px 10px;background:var(--card-background-color,#fff); }
  .ci-hash { color:var(--secondary-text-color);font-size:12px;font-family:monospace; }
  .ci-hex-inp { border:none;outline:none;width:100%;font-size:14px;
                color:var(--primary-text-color);font-family:monospace;background:transparent; }
  .ci-swatches { display:flex;gap:6px;flex-wrap:wrap; }
  .ci-dot { width:24px;height:24px;border-radius:50%;cursor:pointer;
            transition:transform .1s;outline-offset:2px; }
  .ci-dot:hover { transform:scale(1.15); }
</style>
<div class="editor">
  <div class="credit"><strong>Multi Air Conditioner Card</strong>
      <span style="color:var(--secondary-text-color);font-weight:400;">v1.1 Designed by @doanlong1412 from Vietnam</span>
    </div>

  <!-- 0. Owner name -->
  <div class="row" style="margin-bottom:4px;">
    <label style="font-size:12px;font-weight:600;color:var(--secondary-text-color);letter-spacing:.3px;">${t.edOwnerName}</label>
    <input id="inp-owner-name" type="text" placeholder="Smart Home"
      value="${this._config.owner_name || ''}"
      style="width:100%;margin-top:6px;padding:8px 10px;border-radius:8px;
        border:1px solid var(--divider-color);background:var(--card-background-color,#fff);
        color:var(--primary-text-color);font-size:14px;font-family:inherit;box-sizing:border-box;outline:none;">
  </div>
  <div class="row" style="margin-bottom:8px;">
    <label>Average temperature sensor</label>
    <ha-entity-picker data-key="avg_temp_entity" data-domain="sensor" allow-custom-entity></ha-entity-picker>
  </div>

  <!-- 1. Language -->
  <div class="acc-wrap">
    <div class="acc-head" id="head-lang">
      <ha-icon icon="mdi:translate"></ha-icon> ${t.edLang}
      <span class="acc-arrow" id="arrow-lang">${this._open.lang?'▾':'▸'}</span>
    </div>
    <div class="acc-body" id="body-lang" style="display:${this._open.lang?'block':'none'}">
      <div class="lang-grid">
        ${Object.entries(AC_TRANSLATIONS).map(([code,tr])=>`
          <div class="lang-btn ${lang===code?'on':''}" data-lang="${code}">
            <img src="https://flagcdn.com/20x15/${tr.flag}.png" width="20" height="15" alt="${tr.lang}" style="border-radius:2px;flex-shrink:0;display:block;">
            ${tr.lang}
          </div>`).join('')}
      </div>
    </div>
  </div>

  <!-- 3.5 Features -->
  <div class="acc-wrap">
    <div class="acc-head" id="head-features">
      <ha-icon icon="mdi:star-circle"></ha-icon> Features
      <span class="acc-arrow" id="arrow-features">${this._open.features?'▾':'▸'}</span>
    </div>
    <div class="acc-body" id="body-features" style="display:${this._open.features?'block':'none'}">
      <div class="row">
        <label>Show average temperature (header)</label>
        <input type="checkbox" id="feat-show-avg" ${ (this._config.features && this._config.features.show_avg_temp !== false) ? 'checked' : '' } />
      </div>
      <div class="row">
        <label>Show welcome message</label>
        <input type="checkbox" id="feat-show-welcome" ${ (this._config.features && this._config.features.show_welcome !== false) ? 'checked' : '' } />
      </div>
      <div class="row">
        <label>Show Eco button</label>
        <input type="checkbox" id="feat-show-eco" ${ (this._config.features && this._config.features.show_eco !== false) ? 'checked' : '' } />
      </div>
      <div class="row">
        <label>Show air flow (fan & swing)</label>
        <input type="checkbox" id="feat-show-airflow" ${ (this._config.features && this._config.features.show_airflow !== false) ? 'checked' : '' } />
      </div>
      <div class="row">
        <label>Show Fav button</label>
        <input type="checkbox" id="feat-show-fav" ${ (this._config.features && this._config.features.show_fav !== false) ? 'checked' : '' } />
      </div>
      <div class="row">
        <label>Show Clean button</label>
        <input type="checkbox" id="feat-show-clean" ${ (this._config.features && this._config.features.show_clean !== false) ? 'checked' : '' } />
      </div>

      <div style="margin-top:6px;font-weight:700;color:var(--secondary-text-color);">Room selector</div>
      <div class="row">
        <label>Show fine dust (PM2.5)</label>
        <input type="checkbox" id="feat-show-pm25" ${ (this._config.features && this._config.features.show_pm25 !== false) ? 'checked' : '' } />
      </div>
      <div class="row">
        <label>Show room temperature (in tabs)</label>
        <input type="checkbox" id="feat-show-room-temp" ${ (this._config.features && this._config.features.show_room_temp !== false) ? 'checked' : '' } />
      </div>
      <div style="margin-top:6px;font-weight:700;color:var(--secondary-text-color);">Metrics</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px;">
        <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="feat-mode-cool" ${ (this._config.features && this._config.features.modes && this._config.features.modes.cool !== false) ? 'checked' : '' } /> Cool</label>
        <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="feat-mode-heat" ${ (this._config.features && this._config.features.modes && this._config.features.modes.heat !== false) ? 'checked' : '' } /> Heat</label>
        <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="feat-mode-dry" ${ (this._config.features && this._config.features.modes && this._config.features.modes.dry !== false) ? 'checked' : '' } /> Dry</label>
        <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="feat-mode-fan_only" ${ (this._config.features && this._config.features.modes && this._config.features.modes.fan_only !== false) ? 'checked' : '' } /> Fan</label>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px;">
        <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="feat-mode-temp" disabled /> Temp (N/A)</label>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px;">
        <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="feat-show-metric-temp" ${ (this._config.features && this._config.features.show_metrics_temp !== false) ? 'checked' : '' } /> Outdoor temp</label>
        <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="feat-show-metric-humidity" ${ (this._config.features && this._config.features.show_metrics_humidity !== false) ? 'checked' : '' } /> Humidity</label>
        <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="feat-show-metric-power" ${ (this._config.features && this._config.features.show_metrics_power !== false) ? 'checked' : '' } /> Power</label>
      </div>
    </div>
  </div>

    <!-- 3. Icons -->
    <div class="acc-wrap">
      <div class="acc-head" id="head-icons">
        <ha-icon icon="mdi:vector-square"></ha-icon> Icons
        <span class="acc-arrow" id="arrow-icons">${this._open.icons?'▾':'▸'}</span>
      </div>
      <div class="acc-body" id="body-icons" style="display:${this._open.icons?'block':'none'}">
        <div class="row">
          <label>Eco icon</label>
          <div style="display:flex;align-items:center;gap:8px;">
            <input class="txt-inp" type="text" id="inp-icon-eco" placeholder="mdi:leaf" value="${icons.eco||''}"/>
            <span id="preview-icon-eco" style="min-width:28px;text-align:center;color:var(--secondary-text-color);"></span>
          </div>
        </div>
        <div class="row">
          <label>Fav icon</label>
          <div style="display:flex;align-items:center;gap:8px;">
            <input class="txt-inp" type="text" id="inp-icon-fav" placeholder="mdi:heart" value="${icons.fav||''}"/>
            <span id="preview-icon-fav" style="min-width:28px;text-align:center;color:var(--secondary-text-color);"></span>
          </div>
        </div>
        <div class="row">
          <label>Clean icon</label>
          <div style="display:flex;align-items:center;gap:8px;">
            <input class="txt-inp" type="text" id="inp-icon-clean" placeholder="mdi:broom" value="${icons.clean||''}"/>
            <span id="preview-icon-clean" style="min-width:28px;text-align:center;color:var(--secondary-text-color);"></span>
          </div>
        </div>
        <div class="row">
          <label>Power icon</label>
          <div style="display:flex;align-items:center;gap:8px;">
            <input class="txt-inp" type="text" id="inp-icon-power" placeholder="mdi:power" value="${icons.power||''}"/>
            <span id="preview-icon-power" style="min-width:28px;text-align:center;color:var(--secondary-text-color);"></span>
          </div>
        </div>
        <div class="row">
          <label>Timer icon</label>
          <div style="display:flex;align-items:center;gap:8px;">
            <input class="txt-inp" type="text" id="inp-icon-timer" placeholder="mdi:timer" value="${icons.timer||''}"/>
            <span id="preview-icon-timer" style="min-width:28px;text-align:center;color:var(--secondary-text-color);"></span>
          </div>
        </div>
        <div class="row">
          <label>All-off icon</label>
          <div style="display:flex;align-items:center;gap:8px;">
            <input class="txt-inp" type="text" id="inp-icon-alloff" placeholder="mdi:power-off" value="${icons.all_off||''}"/>
            <span id="preview-icon-alloff" style="min-width:28px;text-align:center;color:var(--secondary-text-color);"></span>
          </div>
        </div>
        <div style="margin-top:8px;font-weight:700;color:var(--secondary-text-color);">Header & Mode icons</div>
        <div class="row">
          <label>Header icon</label>
          <div style="display:flex;align-items:center;gap:8px;">
            <input class="txt-inp" type="text" id="inp-icon-header" placeholder="mdi:home" value="${icons.header||''}"/>
            <span id="preview-icon-header" style="min-width:28px;text-align:center;color:var(--secondary-text-color);"></span>
          </div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px;">
          <div style="flex:1;min-width:160px;">
            <label style="font-size:12px;color:var(--secondary-text-color);margin-bottom:4px;display:block">Cool mode icon</label>
            <div style="display:flex;align-items:center;gap:8px;"><input class="txt-inp" type="text" id="inp-icon-mode-cool" placeholder="mdi:snowflake" value="${icons.mode_cool||''}"/><span id="preview-icon-mode-cool" style="min-width:28px;text-align:center;color:var(--secondary-text-color);"></span></div>
          </div>
          <div style="flex:1;min-width:160px;">
            <label style="font-size:12px;color:var(--secondary-text-color);margin-bottom:4px;display:block">Heat mode icon</label>
            <div style="display:flex;align-items:center;gap:8px;"><input class="txt-inp" type="text" id="inp-icon-mode-heat" placeholder="mdi:fire" value="${icons.mode_heat||''}"/><span id="preview-icon-mode-heat" style="min-width:28px;text-align:center;color:var(--secondary-text-color);"></span></div>
          </div>
          <div style="flex:1;min-width:160px;">
            <label style="font-size:12px;color:var(--secondary-text-color);margin-bottom:4px;display:block">Dry mode icon</label>
            <div style="display:flex;align-items:center;gap:8px;"><input class="txt-inp" type="text" id="inp-icon-mode-dry" placeholder="mdi:water-off" value="${icons.mode_dry||''}"/><span id="preview-icon-mode-dry" style="min-width:28px;text-align:center;color:var(--secondary-text-color);"></span></div>
          </div>
          <div style="flex:1;min-width:160px;">
            <label style="font-size:12px;color:var(--secondary-text-color);margin-bottom:4px;display:block">Auto/Fan mode icon</label>
            <div style="display:flex;align-items:center;gap:8px;"><input class="txt-inp" type="text" id="inp-icon-mode-fan_only" placeholder="mdi:autorenew" value="${icons.mode_fan_only||''}"/><span id="preview-icon-mode-fan_only" style="min-width:28px;text-align:center;color:var(--secondary-text-color);"></span></div>
          </div>
        </div>
        <div style="margin-top:6px;font-weight:700;color:var(--secondary-text-color);">Metrics icons</div>
        <div class="row">
          <label>Temperature metric icon</label>
          <div style="display:flex;align-items:center;gap:8px;">
            <input class="txt-inp" type="text" id="inp-icon-metric-temp" placeholder="mdi:thermometer" value="${icons.metric_temp||''}"/>
            <span id="preview-icon-metric-temp" style="min-width:28px;text-align:center;color:var(--secondary-text-color);"></span>
          </div>
        </div>
        <div class="row">
          <label>Humidity metric icon</label>
          <div style="display:flex;align-items:center;gap:8px;">
            <input class="txt-inp" type="text" id="inp-icon-metric-humidity" placeholder="mdi:water-percent" value="${icons.metric_humidity||''}"/>
            <span id="preview-icon-metric-humidity" style="min-width:28px;text-align:center;color:var(--secondary-text-color);"></span>
          </div>
        </div>
        <div class="row">
          <label>Power metric icon</label>
          <div style="display:flex;align-items:center;gap:8px;">
            <input class="txt-inp" type="text" id="inp-icon-metric-power" placeholder="mdi:flash" value="${icons.metric_power||''}"/>
            <span id="preview-icon-metric-power" style="min-width:28px;text-align:center;color:var(--secondary-text-color);"></span>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Số phòng -->
  <div class="acc-wrap">
    <div class="acc-head" id="head-roomcount">
      <ha-icon icon="mdi:home-group"></ha-icon> ${t.edRoomsHeader(roomCount)}
      <span class="acc-arrow" id="arrow-roomcount">${this._open.roomcount?'▾':'▸'}</span>
    </div>
    <div class="acc-body" id="body-roomcount" style="display:${this._open.roomcount?'block':'none'}">
      <div class="row">
        <label style="margin-bottom:8px;">${t.edRoomCountLabel(roomCount)}</label>
        <div style="display:flex;align-items:center;gap:12px;">
          <input type="range" id="inp-room-count" min="1" max="8" step="1" value="${roomCount}"
            style="flex:1;height:4px;cursor:pointer;accent-color:var(--primary-color);">
          <span id="room-count-display" style="min-width:24px;font-weight:700;font-size:16px;color:var(--primary-color);">${roomCount}</span>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--secondary-text-color);margin-top:4px;">
          <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 3. Rooms -->
  <div class="acc-wrap">
    <div class="acc-head" id="head-rooms">
      <ha-icon icon="mdi:air-conditioner"></ha-icon> ${t.edRoomsHeader(roomCount)}
      <span class="acc-arrow" id="arrow-rooms">${this._open.rooms?'▾':'▸'}</span>
    </div>
    <div class="acc-body" id="body-rooms" style="display:${this._open.rooms?'block':'none'}">
      ${roomRows}
    </div>
  </div>

  <!-- 3. Sensors -->
  <div class="acc-wrap">
    <div class="acc-head" id="head-sensors">
      <ha-icon icon="mdi:broadcast"></ha-icon> ${t.edSensors}
      <span class="acc-arrow" id="arrow-sensors">${this._open.sensors?'▾':'▸'}</span>
    </div>
    <div class="acc-body" id="body-sensors" style="display:${this._open.sensors?'block':'none'}">
      ${this._entityField('pm25_entity',           t.edPm25,        'sensor')}
      ${this._entityField('outdoor_temp_entity',   t.edOutdoorTemp, 'sensor')}
      ${this._entityField('humidity_entity',       t.edHumidity,    'sensor')}
      ${this._entityField('power_entity',          t.edPower,       'sensor')}
    </div>
  </div>

  <!-- 4. Background -->
  <div class="acc-wrap">
    <div class="acc-head" id="head-bg">
      <ha-icon icon="mdi:palette"></ha-icon> ${t.edBg}
      <span class="acc-arrow" id="arrow-bg">${this._open.bg?'▾':'▸'}</span>
    </div>
    <div class="acc-body" id="body-bg" style="display:${this._open.bg?'block':'none'}">
      <div style="font-size:11px;font-weight:700;color:var(--secondary-text-color);margin-bottom:8px;letter-spacing:.4px;">${t.bgPresets}</div>
      <div class="bg-grid">
        ${AC_BG_PRESETS.map(p => {
          const c1 = p.c1||'#888', c2 = p.c2||'#444';
          const isC = p.id === 'custom';
          return `<div class="bgs ${bgP===p.id?'on':''}" data-bg="${p.id}"
            style="${isC?'background:linear-gradient(135deg,#e0e0e0,#bdbdbd);color:#555;text-shadow:none;':'background:linear-gradient(135deg,'+c1+'bb 0%,'+c2+'44 100%);'}">${p.label}</div>`;
        }).join('')}
      </div>
      ${bgP === 'custom' ? `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        ${this._colorRow('bg_color1', t.color1)}
        ${this._colorRow('bg_color2', t.color2)}
      </div>` : ''}
    </div>
  </div>
</div>`;

    this._bindEvents();
    this._syncPickers();
  }

  _bindEvents() {
    const sr = this.shadowRoot;

    // accordion
    ['lang','roomcount','rooms','sensors','features','icons','bg'].forEach(id => {
      const hdr = sr.getElementById('head-' + id);
      if (hdr) hdr.addEventListener('click', () => this._toggleSection(id));
    });

    // language buttons
    sr.querySelectorAll('[data-lang]').forEach(btn =>
      btn.addEventListener('click', () => {
        this._config = { ...this._config, language: btn.dataset.lang };
        this._fire();
        this._render();
      }));

    // bg preset tiles
    sr.querySelectorAll('[data-bg]').forEach(tile =>
      tile.addEventListener('click', () => {
        this._config = { ...this._config, background_preset: tile.dataset.bg };
        this._fire();
        this._render();
      }));

    // color picker header toggle
    sr.querySelectorAll('[data-cp]').forEach(hdr =>
      hdr.addEventListener('click', () => {
        const k = hdr.dataset.cp;
        this._picker = this._picker === k ? null : k;
        this._render();
      }));

    // native color input
    sr.querySelectorAll('[data-cp-native]').forEach(inp => {
      inp.addEventListener('input', () => {
        const ci   = inp.closest('.ci');
        const sw   = ci?.querySelector('.ci-swatch');
        const code = ci?.querySelector('.ci-code');
        const hex  = sr.querySelector(`[data-cp-hex="${inp.dataset.cpNative}"]`);
        if (sw)   sw.style.background = inp.value;
        if (code) code.textContent    = inp.value;
        if (hex)  hex.value           = inp.value.replace('#','');
        this._config[inp.dataset.cpNative] = inp.value;
        this._fire();
      });
      inp.addEventListener('change', () => {
        this._config[inp.dataset.cpNative] = inp.value;
        this._fire();
        this._render();
      });
    });

    // hex text input
    sr.querySelectorAll('[data-cp-hex]').forEach(inp =>
      inp.addEventListener('change', () => {
        const val = '#' + inp.value.replace('#','');
        if (/^#[0-9a-fA-F]{6}$/.test(val)) {
          this._config[inp.dataset.cpHex] = val;
          this._fire();
          this._render();
        }
      }));

    // swatch dot
    sr.querySelectorAll('[data-cp-dot]').forEach(dot =>
      dot.addEventListener('click', () => {
        this._config[dot.dataset.cpDot] = dot.dataset.color;
        this._fire();
        this._render();
      }));

    // room count slider
    const rcSlider = sr.getElementById('inp-room-count');
    const rcDisplay = sr.getElementById('room-count-display');
    if (rcSlider) {
      rcSlider.addEventListener('input', () => {
        const val = parseInt(rcSlider.value);
        if (rcDisplay) rcDisplay.textContent = val;
        // update accordion header live
        const hdrRoomcount = sr.getElementById('head-roomcount');
        const hdrRooms = sr.getElementById('head-rooms');
        const t2 = this.t;
        if (hdrRoomcount) {
          const arr = sr.getElementById('arrow-roomcount');
          hdrRoomcount.innerHTML = `<ha-icon icon="mdi:home-group"></ha-icon> ${t2.edRoomsHeader(val)}<span class="acc-arrow" id="arrow-roomcount">${arr ? arr.textContent : '▸'}</span>`;
        }
        if (hdrRooms) {
          const arr2 = sr.getElementById('arrow-rooms');
          hdrRooms.innerHTML = `<ha-icon icon="mdi:air-conditioner"></ha-icon> ${t2.edRoomsHeader(val)}<span class="acc-arrow" id="arrow-rooms">${arr2 ? arr2.textContent : '▸'}</span>`;
        }
      });
      rcSlider.addEventListener('change', () => {
        const val = parseInt(rcSlider.value);
        this._config = { ...this._config, room_count: val };
        this._fire();
        this._render();
      });
    }

    // wireTextInput — update state mỗi keystroke, chỉ fire khi blur/Enter (tránh mất focus)
    const wireTextInput = (el, updater) => {
      if (!el) return;
      el.addEventListener('input',  () => updater(el.value));
      el.addEventListener('change', () => { updater(el.value); this._fire(); });
      el.addEventListener('blur',   () => { updater(el.value); this._fire(); });
      el.addEventListener('keydown', e => { if (e.key === 'Enter') el.blur(); });
    };

    // Owner name input
    wireTextInput(sr.getElementById('inp-owner-name'), val => {
      this._config = { ...this._config, owner_name: val };
    });

    // Room label + icon inputs
    const roomCountBind = Math.max(1, Math.min(8, parseInt(this._config.room_count) || 4));
    for (let i = 0; i < roomCountBind; i++) {
      const lblEl  = sr.getElementById('inp-room-label-' + i);
      const iconEl = sr.getElementById('inp-room-icon-'  + i);
      const iconPrev = sr.getElementById('preview-room-icon-' + i);
      wireTextInput(lblEl, val => {
        const ents = (this._config.entities || []).slice();
        while (ents.length <= i) ents.push({});
        ents[i] = { ...ents[i], label: val };
        this._config = { ...this._config, entities: ents };
      });
      if (iconPrev && iconEl) {
        const v0 = iconEl.value || '';
        iconPrev.innerHTML = v0 ? `<ha-icon icon="${v0}"></ha-icon>` : '';
      }
      wireTextInput(iconEl, val => {
        if (iconPrev) iconPrev.innerHTML = val ? `<ha-icon icon="${val}"></ha-icon>` : '';
        const ents = (this._config.entities || []).slice();
        while (ents.length <= i) ents.push({});
        ents[i] = { ...ents[i], icon: val };
        this._config = { ...this._config, entities: ents };
      });
    }

    // ha-entity-picker: room entities (climate)
    sr.querySelectorAll('ha-entity-picker[data-room]').forEach(picker =>
      picker.addEventListener('value-changed', e => {
        const idx  = parseInt(picker.dataset.room);
        const val  = e.detail.value;
        const ents = (this._config.entities || []).slice();
        while (ents.length <= idx) ents.push({});
        if (val) ents[idx] = { ...ents[idx], entity_id: val };
        else if (ents[idx]) delete ents[idx].entity_id;
        this._config = { ...this._config, entities: ents };
        this._fire();
      }));

    // per-room temp/humidity/power pickers
    sr.querySelectorAll('ha-entity-picker[data-room-temp]').forEach(picker =>
      picker.addEventListener('value-changed', e => {
        const idx = parseInt(picker.dataset.roomTemp);
        const val = e.detail.value;
        const ents = (this._config.entities || []).slice();
        while (ents.length <= idx) ents.push({});
        if (val) ents[idx] = { ...ents[idx], temp_entity: val };
        else if (ents[idx]) delete ents[idx].temp_entity;
        this._config = { ...this._config, entities: ents };
        this._fire();
      }));

    sr.querySelectorAll('ha-entity-picker[data-room-hum]').forEach(picker =>
      picker.addEventListener('value-changed', e => {
        const idx = parseInt(picker.dataset.roomHum);
        const val = e.detail.value;
        const ents = (this._config.entities || []).slice();
        while (ents.length <= idx) ents.push({});
        if (val) ents[idx] = { ...ents[idx], humidity_entity: val };
        else if (ents[idx]) delete ents[idx].humidity_entity;
        this._config = { ...this._config, entities: ents };
        this._fire();
      }));

    sr.querySelectorAll('ha-entity-picker[data-room-power]').forEach(picker =>
      picker.addEventListener('value-changed', e => {
        const idx = parseInt(picker.dataset.roomPower);
        const val = e.detail.value;
        const ents = (this._config.entities || []).slice();
        while (ents.length <= idx) ents.push({});
        if (val) ents[idx] = { ...ents[idx], power_entity: val };
        else if (ents[idx]) delete ents[idx].power_entity;
        this._config = { ...this._config, entities: ents };
        this._fire();
      }));

    // ha-entity-picker: sensor entities
    sr.querySelectorAll('ha-entity-picker[data-key]').forEach(picker =>
      picker.addEventListener('value-changed', e => {
        const k = picker.dataset.key;
        const v = e.detail.value;
        const c = { ...this._config };
        if (v) c[k] = v; else delete c[k];
        this._config = c;
        this._fire();
      }));

    // Features toggles
    const setFeature = (key, val) => {
      const f = Object.assign({}, this._config.features || {});
      f[key] = val;
      this._config = { ...this._config, features: f };
      this._fire();
      this._render();
    };
    const elAvg = sr.getElementById('feat-show-avg');
    if (elAvg) elAvg.addEventListener('change', () => setFeature('show_avg_temp', elAvg.checked));
    const elWelcome = sr.getElementById('feat-show-welcome');
    if (elWelcome) elWelcome.addEventListener('change', () => setFeature('show_welcome', elWelcome.checked));
    const elEco = sr.getElementById('feat-show-eco');
    if (elEco) elEco.addEventListener('change', () => setFeature('show_eco', elEco.checked));
    const elAir = sr.getElementById('feat-show-airflow');
    if (elAir) elAir.addEventListener('change', () => setFeature('show_airflow', elAir.checked));
    const elFav = sr.getElementById('feat-show-fav');
    if (elFav) elFav.addEventListener('change', () => setFeature('show_fav', elFav.checked));
    const elClean = sr.getElementById('feat-show-clean');
    if (elClean) elClean.addEventListener('change', () => setFeature('show_clean', elClean.checked));
    const elPm = sr.getElementById('feat-show-pm25');
    if (elPm) elPm.addEventListener('change', () => setFeature('show_pm25', elPm.checked));
    const elRoomTemp = sr.getElementById('feat-show-room-temp');
    if (elRoomTemp) elRoomTemp.addEventListener('change', () => setFeature('show_room_temp', elRoomTemp.checked));
    const elMTemp = sr.getElementById('feat-show-metric-temp');
    if (elMTemp) elMTemp.addEventListener('change', () => setFeature('show_metrics_temp', elMTemp.checked));
    const elMHum = sr.getElementById('feat-show-metric-humidity');
    if (elMHum) elMHum.addEventListener('change', () => setFeature('show_metrics_humidity', elMHum.checked));
    const elMPow = sr.getElementById('feat-show-metric-power');
    if (elMPow) elMPow.addEventListener('change', () => setFeature('show_metrics_power', elMPow.checked));
    // Icons inputs
    const iconMapping = [
      ['eco','inp-icon-eco'],['fav','inp-icon-fav'],['clean','inp-icon-clean'],['power','inp-icon-power'],['timer','inp-icon-timer'],['all_off','inp-icon-alloff'],
      ['header','inp-icon-header'],['mode_cool','inp-icon-mode-cool'],['mode_heat','inp-icon-mode-heat'],['mode_dry','inp-icon-mode-dry'],['mode_fan_only','inp-icon-mode-fan_only'],
      ['metric_temp','inp-icon-metric-temp'],['metric_humidity','inp-icon-metric-humidity'],['metric_power','inp-icon-metric-power']
    ];
    iconMapping.forEach(([key,id]) => {
      const el = sr.getElementById(id);
      const previewId = id.replace('inp-','preview-');
      const prev = sr.getElementById(previewId);
      if (!el) return;
      // initialize preview
      if (prev) {
        const v = el.value || '';
        prev.innerHTML = v ? `<ha-icon icon="${v}"></ha-icon>` : '';
      }
      wireTextInput(el, val => {
        if (prev) prev.innerHTML = val ? `<ha-icon icon="${val}"></ha-icon>` : '';
        const icons = Object.assign({}, this._config.icons || {});
        if (val) icons[key] = val; else delete icons[key];
        this._config = { ...this._config, icons };
      });
    });
    // modes
    const modeIds = ['cool','heat','dry','fan_only'];
    modeIds.forEach(m => {
      const eid = sr.getElementById('feat-mode-' + m);
      if (!eid) return;
      eid.addEventListener('change', () => {
        const f = Object.assign({}, this._config.features || {});
        f.modes = Object.assign({}, f.modes || {});
        f.modes[m] = eid.checked;
        this._config = { ...this._config, features: f };
        this._fire();
        this._render();
      });
    });
  }
}

customElements.define('multi-air-conditioner-card-editor', MultiAcCardEditor);

customElements.define('multi-air-conditioner-card', AcControllerCardV2);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'multi-air-conditioner-card',
  name: 'Multi Air Conditioner Card',
  description: 'Multi-room air conditioner card with live sensor data, full editor and 10-language support. By @doanlong1412',
  preview: true,
});
