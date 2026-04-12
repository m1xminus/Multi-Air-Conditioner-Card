/**
 * Multi Air Andrade Card
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
    confirmOff: 'Tắt tất cả?', confirmSub: function(n) { return 'Sẽ tắt ' + n + ' điều hòa cùng lúc'; },
    cancel: 'Hủy', doOff: 'Tắt hết',
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
    avgLabel: 'Nhiệt Độ Trung Bình',
    bgLabel: 'Màu nền gradient', bgPresets: 'Preset', bgOpacity: 'Độ trong suốt nền',
    colorLabel: 'Màu sắc', accentColor: 'Màu nhấn (accent)', textColor: 'Màu chữ',
    color1: 'Màu 1 (trên trái)', color2: 'Màu 2 (dưới phải)',
    edLang: 'Ngôn ngữ',
    edEntities: 'Thực thể (Entity)',
    edOwnerName: 'Tên hiển thị ()',
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
    confirmOff: 'Desligar tudo?', confirmSub: function(n) { return 'Irá desligar ' + n + ' aparelhos de AC de uma só vez'; },
    cancel: 'Cancelar', doOff: 'Desligar tudo',
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
    avgLabel: 'Temperatura Média',
    bgLabel: 'Fundo em gradiente', bgPresets: 'Predefinição', bgOpacity: 'Transparência do fundo',
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
    confirmOff: 'Turn all off?', confirmSub: function(n) { return 'Will turn off ' + n + ' AC units at once'; },
    cancel: 'Cancel', doOff: 'Turn all off',
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
    avgLabel: 'Average Temperature',
    bgLabel: 'Gradient background', bgPresets: 'Preset', bgOpacity: 'Background transparency',
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
    confirmOff: 'Alle ausschalten?', confirmSub: function(n) { return n + ' Klimaanlagen gleichzeitig ausschalten'; },
    cancel: 'Abbrechen', doOff: 'Alle aus',
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
    avgLabel: 'Durchschnittstemperatur',
    bgLabel: 'Verlaufshintergrund', bgPresets: 'Voreinstellung', bgOpacity: 'Hintergrund-Transparenz',
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
    confirmOff: 'Tout éteindre?', confirmSub: function(n) { return 'Éteindra ' + n + ' climatiseurs à la fois'; },
    cancel: 'Annuler', doOff: 'Tout éteindre',
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
    avgLabel: 'Température Moyenne',
    bgLabel: 'Dégradé de fond', bgPresets: 'Préréglage', bgOpacity: 'Transparence du fond',
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
    confirmOff: 'Alles uitschakelen?', confirmSub: function(n) { return n + ' airconditioners tegelijk uitschakelen'; },
    cancel: 'Annuleren', doOff: 'Alles uit',
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
    avgLabel: 'Gemiddelde Temperatuur',
    bgLabel: 'Verloopachtergrond', bgPresets: 'Voorinstelling', bgOpacity: 'Achtergrond transparantie',
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
    confirmOff: 'Wyłączyć wszystkie?', confirmSub: function(n) { return 'Wyłączy ' + n + ' klimatyzatorów naraz'; },
    cancel: 'Anuluj', doOff: 'Wyłącz wszystkie',
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
    avgLabel: 'Średnia Temperatura',
    bgLabel: 'Tło gradientowe', bgPresets: 'Ustawienie wstępne', bgOpacity: 'Przezroczystość tła',
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
    confirmOff: 'Stäng av alla?', confirmSub: function(n) { return 'Stänger av ' + n + ' AC-enheter'; },
    cancel: 'Avbryt', doOff: 'Stäng av alla',
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
    avgLabel: 'Medeltemperatur',
    bgLabel: 'Gradientbakgrund', bgPresets: 'Förinställning', bgOpacity: 'Bakgrundstransparens',
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
    confirmOff: 'Mindet kikapcsolni?', confirmSub: function(n) { return n + ' légkondicionálót kapcsol ki egyszerre'; },
    cancel: 'Mégse', doOff: 'Mindet ki',
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
    avgLabel: 'Átlaghőmérséklet',
    bgLabel: 'Gradiens háttér', bgPresets: 'Előbeállítás', bgOpacity: 'Háttér átlátszóság',
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
    confirmOff: 'Vše vypnout?', confirmSub: function(n) { return 'Vypne ' + n + ' klimatizací najednou'; },
    cancel: 'Zrušit', doOff: 'Vše vypnout',
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
    avgLabel: 'Průměrná Teplota',
    bgLabel: 'Přechodové pozadí', bgPresets: 'Předvolba', bgOpacity: 'Průhlednost pozadí',
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
    confirmOff: 'Spegnere tutto?', confirmSub: function(n) { return 'Spegnerà ' + n + ' condizionatori contemporaneamente'; },
    cancel: 'Annulla', doOff: 'Spegni tutti',
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
    avgLabel: 'Temperatura Media',
    bgLabel: 'Sfondo sfumato', bgPresets: 'Preimpostazione', bgOpacity: 'Trasparenza sfondo',
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

function acPresetGradient(preset, c1, c2, opacity) {
  const p = AC_BG_PRESETS.find(x => x.id === preset) || AC_BG_PRESETS[0];
     const gc1 = (preset === 'custom' ? c1 : p.c1) || '#001e2b';
     const gc2 = (preset === 'custom' ? c2 : p.c2) || '#12c6f3';
  var op = typeof opacity === 'number' ? Math.round(Math.min(100, Math.max(0, opacity))) : 75;
  var a1 = Math.round(op * 2.55).toString(16).padStart(2, '0');
  var a2 = Math.round(op * 0.65 * 2.55).toString(16).padStart(2, '0');
  return 'linear-gradient(135deg, ' + gc1 + a1 + ' 0%, ' + gc2 + a2 + ' 100%)';
}

const AC_DEFAULT_CONFIG = {
  language: 'vi',
  background_preset: 'default',
  bg_color1: '#001e2b',
  bg_color2: '#12c6f3',
  bg_opacity: 75,
    accent_color: '#00ffcc',
  text_color: '#ffffff',
  room_count: 4,
  features: {
    show_avg_temp: true,
    show_welcome: true,
    show_eco: true,
    modes: { cool: true, heat: true, dry: true, fan_only: true },
    show_airflow: true,
    show_airflow_btn: true,
    show_fav: true,
    show_clean: true,
    show_pm25: true,
    show_room_temp: true,
    show_metrics_temp: true,
    show_metrics_humidity: true,
    show_metrics_power: true,
    show_modes_text: true,
    show_modes_icon: true,
    show_power_text: true,
    show_power_icon: true,
    show_timer_text: true,
    show_timer_icon: true,
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
  header_button: {
    show: false,
    icon: 'mdi:cog',
    tap_action: { action: 'default' },
    hold_action: { action: 'none' },
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
:host{display:block;font-family:'Sora',sans-serif;contain:layout style;will-change:contents}
#ac-card-root{contain:content;position:relative}
.card{background:linear-gradient(135deg,rgba(180,220,255,0.22) 0%,rgba(120,200,220,0.18) 50%,rgba(100,180,210,0.22) 100%);
  backdrop-filter:blur(28px) saturate(1.6);-webkit-backdrop-filter:blur(28px) saturate(1.6);
  border-radius:28px;overflow:hidden;display:flex;min-height:520px;min-width:0;
  box-shadow:0 0 0 1px rgba(255,255,255,0.28),0 40px 120px rgba(0,0,0,0.35),inset 0 1px 0 rgba(255,255,255,0.45)}
.left{flex:1.2;background:linear-gradient(160deg,rgba(200,235,255,0.18) 0%,rgba(140,210,230,0.12) 100%);
  display:flex;flex-direction:column;padding:16px 16px 14px;gap:8px;
  position:relative;border-right:1px solid rgba(255,255,255,0.2);overflow:hidden}
.left::before{content:"";position:absolute;top:-120px;left:-70px;width:380px;height:380px;
  background:radial-gradient(circle,var(--glow) 0%,transparent 65%);pointer-events:none;opacity:0.25}
.hdr{display:flex;align-items:center;justify-content:space-between;gap:8px}
.hdr-brand{display:flex;align-items:center;gap:10px;min-width:0;overflow:hidden}
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
.dial-power-btn{position:absolute;bottom:45px;left:50%;transform:translateX(-50%);width:40px;height:40px;border-radius:50%;border:none;background:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:22px;transition:all 0.35s;z-index:5;padding:0;pointer-events:auto}
.dial-pwon{background:linear-gradient(135deg,var(--bc),color-mix(in srgb,var(--bc) 70%,rgba(0,15,40,0.4)));box-shadow:0 0 26px var(--glow,var(--bg)),0 0 50px color-mix(in srgb,var(--bg) 30%,transparent);animation:pwP 2.5s ease-in-out infinite}
.dial-pwoff{background:none;opacity:0.5;box-shadow:none;color:rgba(255,255,255,0.6)}
.dial-lbl{font-size:9px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.55);font-weight:500}
.dial-temp{font-family:'Orbitron',sans-serif;font-size:48px;font-weight:800;color:#ffffff;line-height:1;
  text-shadow:0 0 26px var(--glow),0 0 50px var(--glow)}
.dial-deg{font-size:24px;font-weight:400;vertical-align:super;line-height:0}
.dial-feel{display:none}
.temp-ctrl{display:flex;align-items:center;justify-content:center}
.temp-btn{width:36px;height:36px;border-radius:50%;background:rgba(0,20,50,0.25);
  border:1px solid rgba(255,255,255,0.25);color:rgba(255,255,255,0.9);font-size:18px;
  display:flex;align-items:center;justify-content:center;cursor:pointer;outline:none;transition:all 0.15s;font-family:'Sora',sans-serif}
.temp-btn:hover{background:rgba(0,30,70,0.4);border-color:var(--accent);color:var(--accent);box-shadow:0 0 18px var(--glow)}
.temp-btn:active{transform:scale(0.88)}
.temp-set{min-width:100px;text-align:center;font-family:'Orbitron',sans-serif;font-size:12px;font-weight:600;color:rgba(255,255,255,0.85)}
.mode-grid{display:flex;gap:8px;width:100%;max-width:calc(100vw - 40px);margin:8px auto 6px;justify-content:center;flex-wrap:nowrap}
.mode-grid--4col .mode-btn{flex:0 1 calc(25% - 6px)}
.mode-btn{flex:0 1 calc(25% - 6px);background:rgba(0,20,50,0.3);border:1px solid rgba(255,255,255,0.25);border-radius:13px;
  padding:8px 3px 6px;display:flex;flex-direction:column;align-items:center;gap:4px;
  cursor:pointer;outline:none;color:rgba(255,255,255,0.75);font-size:8px;font-weight:600;
  font-family:'Sora',sans-serif;transition:all 0.2s;min-width:0}
.mode-btn:hover{background:rgba(0,30,70,0.45);border-color:rgba(255,255,255,0.5);transform:translateY(-1px)}
.mode-btn:active{transform:scale(0.94)}
.mode-btn--active{background:linear-gradient(160deg,color-mix(in srgb,var(--bc,var(--accent)) 55%,rgba(0,15,40,0.5)),color-mix(in srgb,var(--bc,var(--accent)) 35%,rgba(0,15,40,0.4)));
  border-color:color-mix(in srgb,var(--bc,var(--accent)) 80%,transparent);color:#ffffff;
  box-shadow:0 0 24px var(--bg,var(--glow)),inset 0 1px 0 rgba(255,255,255,0.25)}
.mode-icon{font-size:18px;line-height:1}
.mode-lbl{font-size:8px}
.power-card{background:rgba(0,20,50,0.28);border:1px solid rgba(255,255,255,0.22);border-radius:14px;padding:9px 12px;display:flex;flex-direction:column;gap:6px}
.fan-swing-row{display:flex;gap:8px;width:100%;max-width:calc(100vw - 40px);margin:8px auto 6px;justify-content:center;flex-wrap:nowrap}
.fan-card,.swing-card{background:rgba(0,20,50,0.28);border:1px solid rgba(255,255,255,0.22);
  border-radius:14px;padding:9px 12px;display:flex;flex-direction:row;align-items:center;gap:8px;flex:1;min-width:0;cursor:pointer;-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none;transition:background 0.15s}
.fan-card:active,.swing-card:active{background:rgba(0,20,50,0.5)}
.fc-head{display:flex;align-items:center;justify-content:flex-start;gap:6px;pointer-events:none}
.fc-label{font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.55);font-weight:700}
.fc-val{font-size:10px;color:rgba(255,255,255,0.95);font-weight:700}
.fan-bars{margin:0;display:flex;align-items:flex-end;gap:2px;height:clamp(16px,2.5vw,32px);flex-shrink:1;overflow:hidden;pointer-events:none}
.fan-card .fan-tap{width:auto;padding:0;margin-left:auto;flex:1 1 auto;display:flex;align-items:center;justify-content:flex-end;gap:4px;background:none;border:none;cursor:pointer;outline:none;min-width:0;overflow:hidden;pointer-events:none}
.fbar{width:6px;min-width:3px;border-radius:3px 3px 2px 2px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.18);transition:all 0.3s;flex-shrink:1}
.fbar.fbar-on{background:var(--accent);border-color:rgba(255,255,255,0.55);box-shadow:0 0 8px var(--glow),0 0 3px rgba(255,255,255,0.3),inset 0 1px 0 rgba(255,255,255,0.35)}
.fbar.fbar-auto{animation:barFade 1.2s ease-in-out infinite}
@keyframes barFade{0%,100%{opacity:0.4;box-shadow:0 0 2px var(--glow)}50%{opacity:1;box-shadow:0 0 8px var(--glow),0 0 3px rgba(255,255,255,0.3),inset 0 1px 0 rgba(255,255,255,0.35)}}
.swing-btn{display:flex;flex-direction:row;align-items:center;gap:4px;background:none;border:none;cursor:pointer;outline:none;padding:0;margin-left:auto;flex:none}
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
.power-row--icon{width:48px;padding:6px;justify-content:center}
.confirm-popup{position:absolute;z-index:9999;top:50%;left:50%;transform:translate(-50%,-50%);
  background:rgba(6,10,24,0.98);backdrop-filter:blur(28px) saturate(1.8);-webkit-backdrop-filter:blur(28px) saturate(1.8);
  border:1px solid rgba(255,80,80,0.35);border-radius:20px;padding:18px 16px 14px;width:220px;max-width:85%;
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
.right{flex:1;background:linear-gradient(160deg,rgba(160,220,240,0.10) 0%,rgba(100,180,210,0.08) 100%);display:flex;flex-direction:column;position:relative;overflow-x:hidden;overflow-y:auto;min-height:0;min-width:0;padding:0 8px;max-width:100%}
.room-image{flex:0 0 150px;position:relative;overflow:hidden}
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
  box-shadow:0 8px 32px rgba(0,0,0,0.35),inset 0 1px 0 rgba(255,255,255,0.12);
  max-width:calc(100% - 16px);flex-wrap:wrap;justify-content:center}
.ac-led{width:7px;height:7px;border-radius:50%;flex-shrink:0}
.led-on{background:#34d399;box-shadow:0 0 10px #34d399,0 0 20px rgba(52,211,153,0.5);animation:blink 2.5s infinite}
.led-off{background:#4b5563}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0.35}}
.ac-overlay-txt{font-size:9.5px;font-weight:700;color:rgba(255,255,255,0.85);letter-spacing:1.5px}
.ac-overlay-timer{font-size:9.5px;font-weight:700;color:#ff9800;letter-spacing:1.5px}
.ac-mode-chip{background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:var(--accent);
  font-size:8.5px;font-weight:600;padding:2px 9px;border-radius:10px}
.img-temp-badge{position:absolute;bottom:18px;left:14px;z-index:3;
  font-family:'Orbitron',sans-serif;font-size:22px;font-weight:800;
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
  margin-top:-2px;box-sizing:border-box;min-width:0;overflow:hidden}
.status-header{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;flex-wrap:wrap;min-width:0}
.st-title{font-size:8.5px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.55);font-weight:600}
.st-on{font-size:clamp(11px,4vw,13px);font-weight:700;color:#34d399;margin-top:2px;word-wrap:break-word;overflow-wrap:break-word}
.st-off{font-size:clamp(11px,4vw,13px);font-weight:700;color:rgba(255,255,255,0.45);margin-top:2px;word-wrap:break-word;overflow-wrap:break-word}
.st-sub{display:none}
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

.all-off-btn{margin:0;background:rgba(255,60,60,0.06);border:1px solid rgba(255,80,80,0.18);
  border-radius:13px;padding:9px 10px;display:flex;flex-direction:column;align-items:center;gap:6px;justify-content:center;
  cursor:pointer;outline:none;width:100%;text-align:center;transition:all 0.2s;font-family:'Sora',sans-serif;min-height:72px;box-sizing:border-box;min-width:0;overflow:hidden}
.all-off-btn:hover{background:rgba(255,60,60,0.12);border-color:rgba(255,80,80,0.35)}
.all-off-btn:active{transform:scale(0.97)}
.right-top-section{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:10px 2px 0;flex-shrink:1;align-items:stretch;width:100%;box-sizing:border-box;min-width:0}
.all-off-ico{width:32px;height:32px;border-radius:50%;background:rgba(255,60,60,0.15);border:1px solid rgba(255,80,80,0.3);
  display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;
  box-shadow:0 0 14px rgba(255,60,60,0.2)}
.all-off-info{flex:none;text-align:center;width:100%}
.all-off-title{font-size:11px;font-weight:600;color:rgba(255,150,150,0.85)}
.all-off-sub{font-size:8.5px;color:rgba(255,255,255,0.5);margin-top:1px}
.all-off-arr{display:none;color:rgba(255,100,100,0.35);font-size:18px}
.bottom-row{display:flex;gap:8px;width:220px;margin:0 auto;justify-content:space-between}
.power-row{display:flex;align-items:center;gap:8px;background:rgba(0,20,50,0.3);
  border:1px solid rgba(255,255,255,0.25);border-radius:18px;padding:10px 10px;
  cursor:pointer;outline:none;text-align:left;transition:all 0.2s;font-family:'Sora',sans-serif;flex:none;width:140px;min-width:0}
.power-row:hover{background:rgba(0,30,70,0.45)}
.power-row:active{transform:scale(0.98)}
.timer-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;
  background:rgba(0,20,50,0.3);border:1px solid rgba(255,255,255,0.22);border-radius:13px;
  padding:9px 12px;cursor:pointer;outline:none;font-family:'Sora',sans-serif;
  transition:all 0.2s;width:100%;touch-action:manipulation;-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none;box-sizing:border-box;min-width:0;overflow:hidden}
.timer-btn:hover{background:rgba(0,30,70,0.45);border-color:rgba(251,191,36,0.45)}
.timer-btn--active{border-color:rgba(251,191,36,0.75)!important;background:rgba(251,191,36,0.12)!important;box-shadow:0 0 14px rgba(251,191,36,0.2)}
.timer-ico{font-size:18px;line-height:1;pointer-events:none}
.timer-lbl{font-size:7px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);text-transform:uppercase;pointer-events:none}
.timer-cd{font-family:'Orbitron',sans-serif;font-size:10px;font-weight:600;color:rgba(251,191,36,0.9);line-height:1;min-height:13px;pointer-events:none}
.timer-btn--icon{width:calc(100% - 24px);padding:9px 12px}
.timer-popup{position:absolute;z-index:9999;top:50%;left:50%;transform:translate(-50%,-50%);
  background:rgba(6,10,24,0.98);backdrop-filter:blur(28px) saturate(1.8);-webkit-backdrop-filter:blur(28px) saturate(1.8);
  border:1px solid rgba(255,255,255,0.18);border-radius:20px;padding:15px 13px 13px;width:218px;max-width:85%;
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
.room-tabs{padding:0 10px 6px;display:flex;flex-direction:column;gap:4px;flex-shrink:1;min-width:0}
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
.room-tab-timer{font-family:'Orbitron',sans-serif;font-size:10px;font-weight:600;color:#ff9800;flex-shrink:0;align-self:center;margin-left:auto}
.room-tab-temp{font-family:'Orbitron',sans-serif;font-size:11px;font-weight:600;color:rgba(255,255,255,0.5)}
.room-status-badge{font-family:'Orbitron',sans-serif;font-size:12px;font-weight:700;flex-shrink:0;align-self:center;margin-left:auto;letter-spacing:0.5px}
.rsb-on{color:#34d399;text-shadow:0 0 8px rgba(52,211,153,0.5)}
.rsb-off{color:rgba(255,255,255,0.35)}
@media(max-width:480px){
  .room-tab{flex-wrap:wrap}
  .room-tab-timer{width:auto;order:2;margin-left:0;font-size:9px}
  .room-status-badge{order:3}
}
`;

class AcControllerCardV2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._activeIdx   = 0;
    this._hass        = null;
    this._clockInt    = null;
    this._initialized = false;
    this._renderRAF   = null;
    this._lastStateHash = null;  // Cache for detecting real state changes (performance optimization)
    // timers: map roomIdx → { end, mode, hrs, int }
    this._timers           = {};
    this._outsideHandler   = null;
    this._confirmJustOpened = false;
    this._popupJustOpened  = false;
    // Restore timers from localStorage after page reload
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

  // ── FIX: So sánh state trước khi render + debounce for Bubble Card compat ──
  set hass(h) {
    this._hass = h;

    // Try to sync timers from HA entity (cross-device sync)
    if (this._config && this._config.timer_state_entity) {
      this._syncTimersFromHA(h);
    }

    // First load → must render
    if (!this._initialized) {
      this._renderFull();
      return;
    }

    // Optimized: Use string hash for state comparison (faster than individual checks)
    var id = ROOMS[this._activeIdx].id;
    var stateHash = (this._stateOf(h, id) || '')
      + '|' + (this._attrOf(h, id, 'temperature') || '')
      + '|' + (this._attrOf(h, id, 'current_temperature') || '')
      + '|' + (this._attrOf(h, id, 'fan_mode') || '')
      + '|' + (this._attrOf(h, id, 'swing_mode') || '')
      + '|' + (this._attrOf(h, id, 'preset_mode') || '');

    // Add room tab states for badge updates
    for (var i = 0; i < ROOMS.length; i++) {
      stateHash += '|' + (this._stateOf(h, ROOMS[i].id) || '');
    }

    if (stateHash === this._lastStateHash) return;  // No actual change detected
    this._lastStateHash = stateHash;

    // Debounce: batch rapid updates into single frame
    if (this._renderRAF) cancelAnimationFrame(this._renderRAF);
    var self = this;
    this._renderRAF = requestAnimationFrame(function() {
      self._renderRAF = null;
      self._renderFull();
    });
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

  // ── Cross-device timer sync: Load timer state from HA entity ──
  _syncTimersFromHA(hassObj) {
    if (!hassObj || !this._config || !this._config.timer_state_entity) return;
    try {
      var entityState = hassObj.states[this._config.timer_state_entity];
      if (!entityState) return;
      var timerJson = entityState.state;
      if (!timerJson || timerJson === 'unknown' || timerJson === 'unavailable') return;
      // Parse JSON from input_text helper
      var haTimers = JSON.parse(timerJson);
      if (!haTimers || typeof haTimers !== 'object') return;
      var now = Date.now();
      // Update timers from HA, but preserve local modifications if more recent
      Object.keys(haTimers).forEach(function(idx) {
        var haTimer = haTimers[idx];
        if (haTimer && haTimer.end && haTimer.end > now) {
          var localTimer = this._timers[idx];
          // Use HA version if no local timer, or if HA version is newer
          if (!localTimer || haTimer.end !== localTimer.end) {
            this._timers[idx] = {
              end: haTimer.end,
              mode: haTimer.mode || 'off',
              hrs: haTimer.hrs || null,
              int: null
            };
            // Resume tick if not running
            if (!localTimer || !localTimer.int) {
              this._startTick(idx);
            }
          }
        }
      }.bind(this));
    } catch(e) {}
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
    var bgGrad = acPresetGradient(cfg.background_preset, cfg.bg_color1, cfg.bg_color2, cfg.bg_opacity);
    var accent = cfg.accent_color || '#00ffcc';
    var txtClr = cfg.text_color   || '#ffffff';
    // Features config (early so room-tabs can use them)
    var features = cfg.features || {};
    var icons = cfg.icons || {};
    var showAvg    = features.show_avg_temp !== false;
    var showWelcome= features.show_welcome !== false;
    var showEco    = features.show_eco !== false;
    var showAirflow= features.show_airflow !== false;
    var showAirflowBtn = features.show_airflow_btn !== false;
    var showFav    = features.show_fav !== false;
    var showClean  = features.show_clean !== false;
    var showPm25   = features.show_pm25 !== false;
    var showRoomTemp = features.show_room_temp !== false;
    var showMetricTemp = features.show_metrics_temp !== false;
    var showMetricHumidity = features.show_metrics_humidity !== false;
    var showMetricPower = features.show_metrics_power !== false;
    var showModesText = features.show_modes_text !== false;
    var showModesIcon = features.show_modes_icon !== false;
    var showPowerText = features.show_power_text !== false;
    var showPowerIcon = features.show_power_icon !== false;
    var showTimerText = features.show_timer_text !== false;
    var showTimerIcon = features.show_timer_icon !== false;
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
    var dotRad    = (arcEndAct - 90) * Math.PI / 180;
    var dotX      = (110 + 88 * Math.cos(dotRad)).toFixed(1);
    var dotY      = (110 + 88 * Math.sin(dotRad)).toFixed(1);

    // Format temperature strings: one decimal when sourced from a sensor
    var curTempStr = (roomCfg.temp_entity && this._hass.states && this._hass.states[roomCfg.temp_entity]) ? curTemp.toFixed(1) : Math.round(curTemp);
    var setTempStr = (setTemp % 1 !== 0) ? setTemp.toFixed(1) : setTemp;
    var now     = new Date();
    var timeStr = now.toLocaleTimeString('vi-VN', {hour:'2-digit', minute:'2-digit'});
    var dateStr = now.toLocaleDateString('vi-VN', {weekday:'long', day:'2-digit', month:'2-digit'});

    var arcTrack = this._arc(110,110,88,-140,140);
    var arcFillAct = pctActual > 0.02 ? this._arc(110,110,88,-140,arcEndAct) : '';
    var arcFillSet = pctSet    > 0.02 ? this._arc(110,110,72,-140,arcEndSet) : '';

    var arcFillSvg = '';
    var activeColor = isOn ? mode.color : (MODE_CFG.off && MODE_CFG.off.color ? MODE_CFG.off.color : '#7e8594');
    var activeGlow  = isOn ? 'url(#arcGlow)' : '';
    if (pctActual > 0.02) {
      arcFillSvg += '<path d="' + arcFillAct + '" fill="none" stroke="' + activeColor + '" stroke-width="12" stroke-linecap="round"' + (activeGlow ? ' filter="' + activeGlow + '"' : '') + ' opacity="' + (isOn ? 0.95 : 0.22) + '"/>';
    }
    if (pctSet > 0.02) {
      // inner arc uses round linecap so its end appears as the target dot
      arcFillSvg += '<path d="' + arcFillSet + '" fill="none" stroke="' + activeColor + '" stroke-width="8" stroke-linecap="round" opacity="0.9"/>';
    }
    var dotSvg = '';
    if (pctActual > 0.02) {
      dotSvg = '<circle cx="' + dotX + '" cy="' + dotY + '" r="8" fill="' + activeColor + '"' + (isOn ? ' filter="url(#dotGlow)"' : '') + '/>'
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
      var autoClass = fi === 0 ? ' fbar-auto' : '';
      fanBarHtml += '<span class="fbar' + (barOn ? ' fbar-on' : '') + autoClass + '" style="height:' + barHeights[i] + 'px"></span>';
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

      // Only parse room temperature if it will actually be displayed
      var rTempStr = '--';
      if (showRoomTemp) {
        var rTemp = 0;
        if (hasTempSensor) rTemp = parseFloat(this._hass.states[entCfg.temp_entity].state || 0);
        else rTemp = parseFloat(this._a(climateId, 'current_temperature') || 0);
        if (hasTempSensor) {
          rTempStr = rTemp > 0 ? (Math.round(rTemp * 10) / 10).toFixed(1) + '°' : '--';
        } else {
          rTempStr = rTemp > 0 ? Math.round(rTemp) + '°' : '--';
        }
      }
      
      var isActive = j === this._activeIdx;
      // Get per-room HVAC mode for border color
      var roomHvac = hasClimate ? this._s(climateId) : 'off';
      var roomMode = MODE_CFG[roomHvac] || MODE_CFG.off;
      var roomBorderColor = (ron && roomMode) ? roomMode.color : '';
      var tabClass = 'room-tab'
        + (isActive && ron  ? ' room-tab--active room-tab--on'  : '')
        + (isActive && !ron ? ' room-tab--active room-tab--off' : '')
        + (!isActive && ron ? ' room-tab--running' : '');
      var tabStyle = ron && roomBorderColor ? 'style="--accent:' + roomBorderColor + ';--glow:' + roomMode.glow + '"' : '';
      var rIconStr = (entCfg.icon && entCfg.icon !== '') ? entCfg.icon : ROOMS[j].icon || '';
      var rIconHtml = rIconStr && rIconStr.indexOf('mdi:') === 0 ? ('<ha-icon icon="' + rIconStr + '"></ha-icon>') : (rIconStr || '');
      roomTabs += '<button class="' + tabClass + '" data-room="' + j + '" ' + tabStyle + '>'
        + '<span class="room-tab-ico">' + rIconHtml + '</span>'
        + '<span class="room-tab-info">'
        + '  <span class="room-tab-name">' + ROOMS[j].label + '</span>'
        + '</span>'
        + (this._timers[j] ? ('  <span class="room-tab-timer">' + this._fmtRemain(j) + '</span>') : '')
        + '<span class="room-status-badge ' + (ron ? 'rsb-on' : 'rsb-off') + '">' + (showRoomTemp ? (hasTempSensor ? rTempStr : (ron ? 'ON' : 'OFF')) : (ron ? 'ON' : 'OFF')) + '</span>'
        + '</button>';
    }

    // Mode buttons
    var modeKeys = ['cool','heat','dry','fan_only'];
    var modeBtns = '';
    var modeCount = 0;
    for (var m = 0; m < modeKeys.length; m++) {
      var mk = modeKeys[m];
      if (featureModes[mk] === false) continue;
      modeCount++;
      var mc = Object.assign({}, MODE_CFG[mk], { lbl: tr.modes[mk] || MODE_CFG[mk].lbl });
      var act = hvac === mk;
      var st  = act ? ('--bc:' + mc.color + ';--bg:' + mc.glow + ';') : '';
      modeBtns += '<button class="mode-btn' + (act ? ' mode-btn--active' : '') + '" data-hvac="' + mk + '" style="' + st + '">'
        + (showModesIcon ? ('<span class="mode-icon">' + ((icons['mode_' + mk] || mc.icon) ? ('<ha-icon icon="' + (icons['mode_' + mk] || mc.icon) + '"></ha-icon>') : '') + '</span>') : '')
        + (showModesText ? ('<span class="mode-lbl">' + mc.lbl + '</span>') : '')
        + '</button>';
    }
    var modeGridClass = 'mode-grid mode-grid--4col';

    var comfortTxt = (hvac === 'cool' || hvac === 'heat') ? tr.comfortTemp(curTemp) : (tr.comfort[hvac] || '');
    var curModeIcon = icons['mode_' + hvac] || mode.icon || '';
    var modeChip = isOn ? ('<span class="ac-mode-chip">' + (curModeIcon ? ('<ha-icon icon="' + curModeIcon + '"></ha-icon> ') : '') + mode.lbl + '</span>') : '';

    var pwClass = isOn ? 'pw-on' : 'pw-off';
    var entityState = this._hass && this._hass.states && this._hass.states[room.id] ? this._hass.states[room.id].state : 'unknown';
    var wifiOk = entityState !== 'unknown' && entityState !== 'unavailable';
    var wifiColor = wifiOk ? '#34d399' : 'rgba(255,255,255,0.4)';
    var wifiGlow  = wifiOk ? 'drop-shadow(0 0 4px #34d399)' : 'none';
    var pwSub   = isOn ? tr.statusOn : tr.statusOff;

    // build compact/expanded power and timer buttons
    var powerHtml = '';
    if (showPowerText) {
      powerHtml = '<button class="power-row" id="btn-power">'
        + (showPowerIcon ? ('<div class="pw-btn ' + pwClass + '">' + (powerIcon ? ('<ha-icon icon="' + powerIcon + '"></ha-icon>') : '') + '</div>') : ('<div class="pw-btn ' + pwClass + '"></div>'))
        + '<div style="flex:1;min-width:0">'
        + '<div class="pw-sub pw-sub--big">' + pwSub + '</div>'
        + '</div>'
        + '<span class="pw-arrow">&#8250;</span>'
        + '</button>';
    } else {
      powerHtml = '<button class="power-row power-row--icon" id="btn-power">'
        + (showPowerIcon ? ('<div class="pw-btn ' + pwClass + '">' + (powerIcon ? ('<ha-icon icon="' + powerIcon + '"></ha-icon>') : '') + '</div>') : ('<div class="pw-btn ' + pwClass + '"></div>'))
        + '</button>';
    }
    var timerHtml = '<button class="timer-btn' + (this._timers[this._activeIdx] ? ' timer-btn--active' : '') + (showTimerText ? '' : ' timer-btn--icon') + '" id="btn-timer">'
      + (showTimerIcon ? ('<span class="timer-ico">' + (timerIcon ? ('<ha-icon icon="' + timerIcon + '"></ha-icon>') : '') + '</span>') : '')
      + (showTimerText ? ('<span class="timer-lbl">' + tr.timerBtn + '</span>') : '')
      + (this._timers[this._activeIdx] ? ('<span class="timer-cd" id="timer-cd">' + this._fmtRemain(this._activeIdx) + '</span>') : '')
      + '</button>';

    // Optimized: Only load sensor data if the feature is actually enabled
    var cfg = this._config || {};
    
    // PM2.5 data - only load if showPm25 is enabled
    var pm25Val = '--';
    if (showPm25 && cfg.pm25_entity && this._hass && this._hass.states[cfg.pm25_entity]) {
      pm25Val = parseFloat(this._hass.states[cfg.pm25_entity].state) || '--';
    }
    
    // Average temperature sensor (header) - only load if showAvg is enabled
    var avgTempVal = '--°';
    if (showAvg && cfg.avg_temp_entity && this._hass && this._hass.states[cfg.avg_temp_entity]) {
      var avgTempRaw = parseFloat(this._hass.states[cfg.avg_temp_entity].state);
      avgTempVal = !isNaN(avgTempRaw) ? (Math.round(avgTempRaw * 10) / 10).toFixed(1) + '°' : '--°';
    }
    
    // Outdoor temperature metric - only load if showMetricTemp is enabled
    var outdoorTempVal = '--°';
    if (showMetricTemp) {
      if (cfg.outdoor_temp_entity && this._hass && this._hass.states[cfg.outdoor_temp_entity]) {
        var ot = parseFloat(this._hass.states[cfg.outdoor_temp_entity].state || 0);
        outdoorTempVal = ot > 0 ? (Math.round(ot * 10) / 10).toFixed(1) + '°' : '--°';
      } else if (roomCfg.temp_entity && this._hass && this._hass.states[roomCfg.temp_entity]) {
        outdoorTempVal = curTemp > 0 ? (Math.round(curTemp * 10) / 10).toFixed(1) + '°' : '--°';
      } else {
        outdoorTempVal = curTemp > 0 ? Math.round(curTemp) + '°' : '--°';
      }
    }
    
    // Humidity metric - only load if showMetricHumidity is enabled
    var humidityVal = '--%';
    if (showMetricHumidity) {
      if (roomCfg.humidity_entity && this._hass && this._hass.states[roomCfg.humidity_entity]) {
        var hv = parseFloat(this._hass.states[roomCfg.humidity_entity].state || 0);
        humidityVal = hv > 0 ? (Math.round(hv * 10) / 10).toFixed(1) + '%' : '--%';
      } else {
        var roomHumidity = parseFloat(this._a(room.id, 'current_humidity') || this._a(room.id, 'humidity') || 0);
        humidityVal = roomHumidity > 0 ? Math.round(roomHumidity) + '%' : '--%';
      }
    }
    
    // Power metric - only load if showMetricPower is enabled
    var powerVal = '--';
    if (showMetricPower) {
      if (roomCfg.power_entity && this._hass && this._hass.states[roomCfg.power_entity]) {
        powerVal = parseFloat(this._hass.states[roomCfg.power_entity].state).toFixed(1) + ' kW';
      } else if (cfg.power_entity && this._hass && this._hass.states[cfg.power_entity]) {
        powerVal = parseFloat(this._hass.states[cfg.power_entity].state).toFixed(1) + ' kW';
      }
    }

    // build header pieces
    var hdrBtnCfg = Object.assign({ show: false, icon: 'mdi:cog', tap_action: { action: 'default' }, hold_action: { action: 'none' } }, cfg.header_button || {});
    var hdrBtnHtml = '';
    if (hdrBtnCfg.show) {
      hdrBtnHtml = '<button id="hdr-action-btn" style="background:none;border:none;cursor:pointer;padding:6px;color:inherit;opacity:0.8;display:flex;align-items:center;flex-shrink:0;-webkit-tap-highlight-color:transparent" title="Header button"><ha-icon icon="' + (hdrBtnCfg.icon || 'mdi:cog') + '"></ha-icon></button>';
    }
    var hdrBrand = '<div class="hdr">'
      + '  <div class="hdr-brand">'
      + '    <div class="hdr-ico">' + (headerIcon ? ('<ha-icon icon="' + headerIcon + '"></ha-icon>') : (mode.icon || '')) + '</div>'
      + '    <div><div class="hdr-title">' + tr.cardTitle + '</div></div>'
      + '  </div>'
      + hdrBtnHtml
      + '</div>';

    var greetPart = '';
    if (showWelcome) {
      greetPart = '<div class="greet-row">'
        + '  <div>'
        + '    <div class="greet-sub">' + tr.greet() + '</div>'
        + '    <div class="greet-name">' + (cfg.owner_name || '') + '</div>'
        + (showAvg ? ('    <div style="font-size:12px;color:rgba(255,255,255,0.75);margin-top:4px"><strong>' + tr.avgLabel + ' - ' + avgTempVal + '</strong></div>') : '')
        + '  </div>'
        + (showEco ? ('  <button id="btn-eco" class="eco-badge ' + (ecoOn ? 'eco-on' : 'eco-off') + '">' + (ecoIcon ? ('<ha-icon icon="' + ecoIcon + '"></ha-icon> ') : '') + (ecoOn ? 'ECO ON' : 'ECO') + '</button>') : '')
        + '</div>';
    } else {
      if (showAvg) {
        greetPart = '<div class="greet-row"><div><div style="font-size:12px;color:rgba(255,255,255,0.75);margin-top:4px"><strong>' + tr.avgLabel + ' - ' + avgTempVal + '</strong></div></div></div>';
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
+ dotSvg
+ '</svg>'
+ '<button id="btn-dial-power" class="dial-power-btn ' + (isOn ? 'dial-pwon' : 'dial-pwoff') + '" style="' + (isOn ? '--bc:' + mode.color + ';--bg:' + mode.glow + ';' : '') + '" title="' + tr.tapOff + '">' + (powerIcon ? ('<ha-icon icon="' + powerIcon + '"></ha-icon>') : '⏻') + '</button>'
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

 + '<div class="mode-grid mode-grid--4col">' + modeBtns + '</div>'

 + ((showAirflow || showAirflowBtn) ? ('<div class="fan-swing-row">'
 + (showAirflow ? ('<div class="fan-card" id="fan-card-tap">'
 + '    <div class="fc-head"><span class="fc-label">' + tr.fanLabel + '</span><span class="fc-val">' + fanLabels[fi] + '</span></div>'
 + '    <button class="fan-tap" id="btn-fan-cycle">'
 + '      <div class="fan-bars">' + fanBarHtml + '</div>'
 + '    </button>'
 + '  </div>') : '')
 + (showAirflowBtn ? ('<div class="swing-card">'
 + '    <div class="fc-head"><span class="fc-label">' + tr.swingLabel + '</span></div>'
 + '    ' + swingBtn
 + '  </div>') : (!showAirflow ? ('<div class="power-card">' + powerHtml + '</div>') : ''))
 + '</div>') : '')

 + '<div class="chips">'
 + (showEco ? ('  <button id="btn-eco-chip" class="chip ' + (ecoOn ? 'chip--g' : '') + '">' + (ecoIcon ? ('<ha-icon icon="' + ecoIcon + '"></ha-icon> ') : '') + 'Eco</button>') : '')
 + (showFav ? ('  <button class="chip chip--a">' + (favIcon ? ('<ha-icon icon="' + favIcon + '"></ha-icon> ') : '') + 'Fav</button>') : '')
 + (showClean ? ('  <button class="chip chip--b">' + (cleanIcon ? ('<ha-icon icon="' + cleanIcon + '"></ha-icon> ') : '') + 'Clean</button>') : '')
 + '</div>'

+ '</div>'  // end .left

+ '<div class="right">'

+ '<div class="room-image">'
+ '  <img id="room-photo" class="room-img-el" src="' + (roomCfg.image_url || ROOM_IMAGES[this._activeIdx]) + '" alt="room">'
+ '  <div class="ac-overlay">'
+ '    <span class="ac-led ' + (isOn ? 'led-on' : 'led-off') + '"></span>'
+ (this._timers[this._activeIdx] 
    ? '    <span class="ac-overlay-timer">Timer ' + (this._timers[this._activeIdx].mode === 'on' ? 'ON' : 'OFF') + ' in ' + this._fmtRemainHHMM(this._activeIdx) + '</span>'
    : '    <span class="ac-overlay-txt">' + (isOn ? tr.overlayOn : tr.overlayOff) + '</span>')
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

+ '<div class="right-top-section">'
+ '<button class="all-off-btn" id="btn-all-off">'
+ '  <div class="all-off-ico">' + (allOffIcon ? ('<ha-icon icon="' + allOffIcon + '"></ha-icon>') : '') + '</div>'
+ '  <div class="all-off-info">'
+ '    <div class="all-off-title">' + tr.allOff + '</div>'
+ '  </div>'
+ '  <div class="all-off-arr">&#8250;</div>'
+ '</button>'

+ timerHtml

+ '</div>'

+ '<div class="room-tabs"><div class="rt-header">' + tr.selectRoom + '</div><div class="room-tabs-inner' + (ROOMS.length >= 5 ? ' scrollable' : '') + '">' + roomTabs + '</div></div>'

+ '</div>'  // end .right
+ '</div>'; // end .card

    // ── FIX: Atomic DOM swap – prevents blink in Bubble Card popups
    var container = this.shadowRoot.getElementById('ac-card-root');
    if (!container) {
      container = document.createElement('div');
      container.id = 'ac-card-root';
      this.shadowRoot.appendChild(container);
    }
    var fresh = document.createElement('div');
    fresh.id = 'ac-card-root';
    fresh.innerHTML = html;
    container.parentNode.replaceChild(fresh, container);

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

    // ── Header button action handler ─────────────────────────────────────────
    var _execAction = function(actionCfg) {
      if (!actionCfg || !actionCfg.action || actionCfg.action === 'none') return;
      var act = actionCfg.action;
      if (act === 'default' || act === 'toggle') {
        var id = ROOMS[self._activeIdx].id;
        if (id && id.split && id.split('.')[0] === 'climate') {
          self._call('climate','set_hvac_mode',{entity_id:id, hvac_mode: self._s(id)!=='off'?'off':'cool'});
        }
      } else if (act === 'more-info') {
        var moreId = ROOMS[self._activeIdx].id;
        if (moreId) {
          var evt = new CustomEvent('hass-more-info', { composed: true, bubbles: true, detail: { entityId: moreId } });
          self.dispatchEvent(evt);
        }
      } else if (act === 'navigate') {
        if (actionCfg.navigation_path) {
          var navPath = actionCfg.navigation_path;
          var hashIdx = navPath.indexOf('#');
          if (hashIdx !== -1) {
            var basePath = navPath.substring(0, hashIdx);
            var hash = navPath.substring(hashIdx);
            if (basePath && window.location.pathname !== basePath) {
              window.history.pushState(null, '', basePath);
              window.dispatchEvent(new CustomEvent('location-changed'));
            }
            window.history.pushState(null, '', window.location.pathname + hash);
            window.dispatchEvent(new PopStateEvent('popstate'));
            window.dispatchEvent(new HashChangeEvent('hashchange'));
          } else {
            window.history.pushState(null, '', navPath);
            window.dispatchEvent(new CustomEvent('location-changed'));
          }
        }
      } else if (act === 'url') {
        if (actionCfg.url_path) window.open(actionCfg.url_path, '_blank');
      } else if (act === 'perform-action') {
        if (actionCfg.perform_action) {
          var parts = actionCfg.perform_action.split('.');
          if (parts.length === 2) {
            var svcData = {};
            if (actionCfg.target && actionCfg.target.entity_id) svcData.entity_id = actionCfg.target.entity_id;
            self._call(parts[0], parts[1], svcData);
          }
        }
      } else if (act === 'assist') {
        var assistEvt = new CustomEvent('show-dialog', { composed: true, bubbles: true, detail: { dialogTag: 'ha-voice-command-dialog', dialogImport: null, dialogParams: {} } });
        self.dispatchEvent(assistEvt);
      }
    };

    var hdrActionBtn = r.getElementById('hdr-action-btn');
    if (hdrActionBtn) {
      var hbCfg = (self._config && self._config.header_button) || {};
      onTap(hdrActionBtn, function() { _execAction(hbCfg.tap_action); });
      var holdTimer = null;
      hdrActionBtn.addEventListener('touchstart', function(e) {
        holdTimer = setTimeout(function() { holdTimer = null; _execAction(hbCfg.hold_action); }, 500);
      }, { passive: true });
      hdrActionBtn.addEventListener('touchend', function() { if (holdTimer) clearTimeout(holdTimer); });
      hdrActionBtn.addEventListener('touchcancel', function() { if (holdTimer) clearTimeout(holdTimer); });
      hdrActionBtn.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        _execAction(hbCfg.hold_action);
      });
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

    onTap(r.getElementById('btn-dial-power'), function() {
      var id = ROOMS[self._activeIdx].id;
      if (!id || (id.split && id.split('.')[0] !== 'climate')) return;
      self._call('climate','set_hvac_mode',{entity_id:id, hvac_mode: self._s(id)!=='off'?'off':'cool'});
    });

    var ecoFn = function() {
      var id = ROOMS[self._activeIdx].id;
      if (!id || (id.split && id.split('.')[0] !== 'climate')) return;
      self._call('climate','set_preset_mode',{entity_id:id, preset_mode: self._a(id,'preset_mode')==='eco'?'none':'eco'});
    };
    onTap(r.getElementById('btn-eco'), ecoFn);
    onTap(r.getElementById('btn-eco-chip'), ecoFn);

    onTap(r.getElementById('fan-card-tap'), function() {
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
      var cardRoot = sr2.getElementById('ac-card-root');
      var cpop = document.createElement('div');
      cpop.id = 'confirm-popup-el';
      cpop.className = 'confirm-popup';
      var trPop = AC_TRANSLATIONS[(self._config && self._config.language) || 'vi'] || AC_TRANSLATIONS.vi;
      cpop.innerHTML =
        '<div class="cp-title">' + (trPop.confirmOff || 'Confirm') + '</div>'
      + '<div style="margin-top:8px;font-size:12px;color:rgba(255,255,255,0.9)">' + (typeof trPop.confirmSub === 'function' ? trPop.confirmSub(ROOMS.length) : '') + '</div>'
      + '<div style="display:flex;gap:8px;margin-top:12px">'
      +   '<button id="cp-cancel-btn" class="tp-cancel">' + (trPop.cancel || 'Cancel') + '</button>'
      +   '<button class="cp-ok" id="cp-ok-btn">' + (trPop.doOff || 'Turn off') + '</button>'
      + '</div>';
      cardRoot.appendChild(cpop);
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
    if (this._clockInt) return;
    var lastMinute = -1;
    this._clockInt = setInterval(function() {
      var now = new Date();
      var mins = now.getHours() * 60 + now.getMinutes();
      // Only update DOM when minute actually changed (not every 30s)
      if (mins !== lastMinute) {
        lastMinute = mins;
        var el = self.shadowRoot && self.shadowRoot.getElementById('clock-display');
        if (el) el.textContent = now.toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'});
      }
    }, 30000);
  }

  // ── Timer per-room ────────────────────────────────────────────────────────
  _fmtRemain(roomIdx) {
    var t = this._timers[roomIdx];
    if (!t || !t.end) return '';
    var rem = t.end - Date.now();
    if (rem <= 0) return '';
    
    // Show seconds if below 1 minute
    if (rem < 60000) {
      var s = Math.ceil(rem / 1000);
      return s + 's';
    }
    
    var m = Math.ceil(rem / 60000);
    var h = Math.floor(m / 60); m = m % 60;
    return h > 0 ? h + 'h' + (m ? m + 'm' : '') : m + 'm';
  }

  _fmtRemainHHMM(roomIdx) {
    var t = this._timers[roomIdx];
    if (!t || !t.end) return '';
    var rem = t.end - Date.now();
    if (rem <= 0) return '';
    // Show seconds below 1 minute
    if (rem < 60000) {
      var s = Math.ceil(rem / 1000);
      var sStr = s < 10 ? '0' + s : '' + s;
      return '00:00:' + sStr;
    }
    var totalSec = Math.ceil(rem / 1000);
    var h = Math.floor(totalSec / 3600);
    var m = Math.floor((totalSec % 3600) / 60);
    var s = totalSec % 60;
    var hStr = h < 10 ? '0' + h : '' + h;
    var mStr = m < 10 ? '0' + m : '' + m;
    var sStr = s < 10 ? '0' + s : '' + s;
    return hStr + ':' + mStr + ':' + sStr;
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
      // Also sync to HA entity if configured
      if (this._hass && this._config && this._config.timer_state_entity) {
        this._updateTimerEntity(snap);
      }
    } catch(e) {}
  }

  // ── Update timer state in HA entity for cross-device sync ──
  _updateTimerEntity(timers) {
    if (!this._hass || !this._config || !this._config.timer_state_entity) return;
    try {
      // Update input_text helper with timer JSON
      var timerJson = JSON.stringify(timers);
      this._hass.callService('input_text', 'set_value', {
        entity_id: this._config.timer_state_entity,
        value: timerJson
      });
    } catch(e) {
      // Silently fail if service unavailable
    }
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
      if (rem <= 0) {
        // Timer finished → execute action and cleanup
        clearInterval(tr2.int); tr2.int = null;
        delete self._timers[roomIdx];
        self._timerSave();
        var sr = self.shadowRoot;
        if (sr) {
          var el = sr.getElementById('timer-cd');
          var btn2 = sr.getElementById('btn-timer');
          if (el)   el.textContent = '';
          if (btn2) btn2.classList.remove('timer-btn--active');
          // Clear room tab timer display
          var roomBtn = sr.querySelector('[data-room="' + roomIdx + '"]');
          if (roomBtn) {
            var tabTimer = roomBtn.querySelector('.room-tab-timer');
            if (tabTimer) tabTimer.remove();
          }
          // Clear overlay timer if viewing this room
          if (self._activeIdx === parseInt(roomIdx)) {
            var overlayTimer = sr.querySelector('.ac-overlay-timer');
            if (overlayTimer) {
              var overlay = overlayTimer.parentElement;
              overlayTimer.remove();
              // Add status text back
              if (overlay && !overlay.querySelector('.ac-overlay-txt')) {
                var overlayTxt = document.createElement('span');
                overlayTxt.className = 'ac-overlay-txt';
                overlayTxt.textContent = 'OFF';
                overlay.insertBefore(overlayTxt, overlay.querySelector('.ac-mode-chip'));
              }
            }
          }
        }
        var id = ROOMS[roomIdx].id;
        self._call('climate', 'set_hvac_mode', { entity_id: id, hvac_mode: tr2.mode === 'off' ? 'off' : 'cool' });
      } else {
        // Update timer displays every tick
        var sr = self.shadowRoot;
        if (!sr) return;
        var displayed = self._fmtRemain(roomIdx);
        var displayedHHMM = self._fmtRemainHHMM(roomIdx);

        // Always update overlay timer if viewing this room (uses HHMM format)
        if (self._activeIdx === parseInt(roomIdx)) {
          var el = sr.getElementById('timer-cd');
          if (el) el.textContent = displayed;
          var overlayTimer = sr.querySelector('.ac-overlay-timer');
          if (overlayTimer) {
            overlayTimer.textContent = 'Timer ' + (tr2.mode === 'on' ? 'ON' : 'OFF') + ' in ' + displayedHHMM;
          }
        }

        // Update room tab timer (uses short format)
        var roomBtn = sr.querySelector('[data-room="' + roomIdx + '"]');
        if (roomBtn) {
          var tabTimer = roomBtn.querySelector('.room-tab-timer');
          if (tabTimer) {
            tabTimer.textContent = displayed;
          } else {
            // Create timer span before the status badge
            var timerSpan = document.createElement('span');
            timerSpan.className = 'room-tab-timer';
            timerSpan.textContent = displayed;
            var badge = roomBtn.querySelector('.room-status-badge');
            if (badge) roomBtn.insertBefore(timerSpan, badge);
            else roomBtn.appendChild(timerSpan);
          }
        }
      }
    }, 1000);  // Update every 1 second for smooth countdown
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
      var cardRoot2 = sr.getElementById('ac-card-root');
      cardRoot2.appendChild(pop);

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
    // Stop clock interval
    if (this._clockInt) {
      clearInterval(this._clockInt);
      this._clockInt = null;
    }
    // Stop all timer intervals
    var self = this;
    Object.keys(this._timers).forEach(function(idx) {
      var t = self._timers[idx];
      if (t && t.int) {
        clearInterval(t.int);
        t.int = null;
      }
    });
    // Clean up outside event handlers
    if (this._outsideHandler) {
      document.removeEventListener('click', this._outsideHandler, true);
      document.removeEventListener('touchend', this._outsideHandler, true);
      this._outsideHandler = null;
    }
    // Cancel pending render frames
    if (this._renderRAF) {
      cancelAnimationFrame(this._renderRAF);
      this._renderRAF = null;
    }
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
    this._open   = { lang: false, ac: false, features: false, sensors: false, visual: false };
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
    const hdrBtnCfg = Object.assign({ show: false, icon: 'mdi:cog', tap_action: { action: 'default' }, hold_action: { action: 'none' } }, cfg.header_button || {});
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
  <div class="row">
    <label>Cover photo URL</label>
    <input class="txt-inp" type="text" id="inp-room-image-${i}" placeholder="https://..." value="${ent.image_url||''}"/>
    <span style="font-size:10px;color:var(--secondary-text-color);margin-top:3px;">Leave empty to use default image</span>
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
  <!-- 0. Owner name -->
  <div class="row" style="margin-bottom:12px;border-bottom:1px solid var(--divider-color);padding-bottom:8px;">
    <label style="font-size:12px;font-weight:600;color:var(--secondary-text-color);letter-spacing:.3px;">${t.edOwnerName}</label>
    <input id="inp-owner-name" type="text" placeholder="Smart Home"
      value="${this._config.owner_name || ''}"
      style="width:100%;margin-top:6px;padding:8px 10px;border-radius:8px;
        border:1px solid var(--divider-color);background:var(--card-background-color,#fff);
        color:var(--primary-text-color);font-size:14px;font-family:inherit;box-sizing:border-box;outline:none;">
  </div>

  <div style="display:flex;flex-direction:column;gap:8px;">
    <!-- CHIP: Language -->
    <div style="border:1px solid var(--divider-color);border-radius:12px;overflow:hidden;background:var(--secondary-background-color);">
      <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;cursor:pointer;font-weight:600;font-size:14px;" id="chip-lang">
        <ha-icon icon="mdi:translate" style="--mdi-icon-size:20px;color:var(--primary-color);"></ha-icon>
        <span>Language</span>
        <div style="margin-left:auto;font-size:16px;color:var(--secondary-text-color);transition:transform .2s;" id="arrow-lang">▼</div>
      </div>
      <div style="padding:14px 16px;border-top:1px solid var(--divider-color);background:var(--card-background-color,#fff);display:none;" id="body-lang">
        <div class="lang-grid">
          ${Object.entries(AC_TRANSLATIONS).map(([code,tr])=>`
            <div class="lang-btn ${lang===code?'on':''}" data-lang="${code}">
              <img src="https://flagcdn.com/20x15/${tr.flag}.png" width="20" height="15" alt="${tr.lang}" style="border-radius:2px;flex-shrink:0;display:block;">
              ${tr.lang}
            </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- CHIP: AC Config (Room Count + Rooms) -->
    <div style="border:1px solid var(--divider-color);border-radius:12px;overflow:hidden;background:var(--secondary-background-color);">
      <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;cursor:pointer;font-weight:600;font-size:14px;" id="chip-ac">
        <ha-icon icon="mdi:thermostat" style="--mdi-icon-size:20px;color:var(--primary-color);"></ha-icon>
        <span>AC Config</span>
        <div style="margin-left:auto;font-size:16px;color:var(--secondary-text-color);transition:transform .2s;" id="arrow-ac">▼</div>
      </div>
      <div style="padding:14px 16px;border-top:1px solid var(--divider-color);background:var(--card-background-color,#fff);display:none;" id="body-ac">
        <div class="row" style="margin-bottom:16px;">
          <label style="font-size:12px;color:var(--secondary-text-color);margin-bottom:6px;font-weight:600;">Number of Rooms</label>
          <input type="range" id="room-count-slider" min="1" max="8" value="${roomCount}" style="width:100%;accent-color:var(--primary-color,#03a9f4);cursor:pointer;margin-bottom:8px;">
          <span style="font-size:12px;color:var(--secondary-text-color);text-align:center;" id="room-count-display">${roomCount} Room${roomCount!==1?'s':''}</span>
        </div>
        ${roomRows}
      </div>
    </div>

    <!-- CHIP: Features -->
    <div style="border:1px solid var(--divider-color);border-radius:12px;overflow:hidden;background:var(--secondary-background-color);">
      <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;cursor:pointer;font-weight:600;font-size:14px;" id="chip-features">
        <ha-icon icon="mdi:star-circle" style="--mdi-icon-size:20px;color:var(--primary-color);"></ha-icon>
        <span>Features</span>
        <div style="margin-left:auto;font-size:16px;color:var(--secondary-text-color);transition:transform .2s;" id="arrow-features">▼</div>
      </div>
      <div style="padding:14px 16px;border-top:1px solid var(--divider-color);background:var(--card-background-color,#fff);display:none;" id="body-features">
        <div style="font-weight:700;color:var(--primary-color);margin-bottom:10px;font-size:13px;">Main Features</div>
        <div class="row">
          <label style="display:flex;align-items:center;gap:8px;margin-bottom:0;"><input type="checkbox" id="feat-show-welcome" ${ (this._config.features && this._config.features.show_welcome !== false) ? 'checked' : '' } /> Show welcome message</label>
        </div>
        <div class="row">
          <label style="display:flex;align-items:center;gap:8px;margin-bottom:0;"><input type="checkbox" id="feat-show-avg" ${ (this._config.features && this._config.features.show_avg_temp !== false) ? 'checked' : '' } /> Show average temperature</label>
        </div>
        <div class="row">
          <label style="display:flex;align-items:center;gap:8px;margin-bottom:0;"><input type="checkbox" id="feat-show-eco" ${ (this._config.features && this._config.features.show_eco !== false) ? 'checked' : '' } /> Show Eco button</label>
        </div>
        <div class="row">
          <label style="display:flex;align-items:center;gap:8px;margin-bottom:0;"><input type="checkbox" id="feat-show-airflow" ${ (this._config.features && this._config.features.show_airflow !== false) ? 'checked' : '' } /> Show air flow</label>
        </div>
        <div class="row" style="margin-bottom:12px;">
          <label style="display:flex;align-items:center;gap:8px;margin-bottom:0;"><input type="checkbox" id="feat-show-airflow-btn" ${ (this._config.features && this._config.features.show_airflow_btn !== false) ? 'checked' : '' } /> Show airflow direction</label>
        </div>
        
        <div style="font-weight:700;color:var(--primary-color);margin-bottom:10px;font-size:13px;border-top:1px solid var(--divider-color);padding-top:10px;">Room Selector</div>
        <div class="row">
          <label style="display:flex;align-items:center;gap:8px;margin-bottom:0;"><input type="checkbox" id="feat-show-pm25" ${ (this._config.features && this._config.features.show_pm25 !== false) ? 'checked' : '' } /> Show fine dust (PM2.5)</label>
        </div>
        <div class="row" style="margin-bottom:12px;">
          <label style="display:flex;align-items:center;gap:8px;margin-bottom:0;"><input type="checkbox" id="feat-show-room-temp" ${ (this._config.features && this._config.features.show_room_temp !== false) ? 'checked' : '' } /> Show room temperature</label>
        </div>

        <div style="font-weight:700;color:var(--primary-color);margin-bottom:10px;font-size:13px;border-top:1px solid var(--divider-color);padding-top:10px;">Modes</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
          <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="feat-mode-cool" ${ (this._config.features && this._config.features.modes && this._config.features.modes.cool !== false) ? 'checked' : '' } /> Cool</label>
          <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="feat-mode-heat" ${ (this._config.features && this._config.features.modes && this._config.features.modes.heat !== false) ? 'checked' : '' } /> Heat</label>
          <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="feat-mode-dry" ${ (this._config.features && this._config.features.modes && this._config.features.modes.dry !== false) ? 'checked' : '' } /> Dry</label>
          <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="feat-mode-fan_only" ${ (this._config.features && this._config.features.modes && this._config.features.modes.fan_only !== false) ? 'checked' : '' } /> Fan</label>
        </div>

        <div style="font-weight:700;color:var(--primary-color);margin-bottom:10px;font-size:13px;border-top:1px solid var(--divider-color);padding-top:10px;">Metrics</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
          <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="feat-show-modes-text" ${ (this._config.features && this._config.features.show_modes_text !== false) ? 'checked' : '' } /> Show modes text</label>
          <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="feat-show-modes-icon" ${ (this._config.features && this._config.features.show_modes_icon !== false) ? 'checked' : '' } /> Show modes icons</label>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
          <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="feat-show-metric-temp" ${ (this._config.features && this._config.features.show_metrics_temp !== false) ? 'checked' : '' } /> Outdoor temp</label>
          <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="feat-show-metric-humidity" ${ (this._config.features && this._config.features.show_metrics_humidity !== false) ? 'checked' : '' } /> Humidity</label>
          <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="feat-show-metric-power" ${ (this._config.features && this._config.features.show_metrics_power !== false) ? 'checked' : '' } /> Power</label>
        </div>
        <div class="row">
          <label style="display:flex;align-items:center;gap:8px;margin-bottom:0;"><input type="checkbox" id="feat-show-power-text" ${ (this._config.features && this._config.features.show_power_text !== false) ? 'checked' : '' } /> Show power text</label>
        </div>
        <div class="row">
          <label style="display:flex;align-items:center;gap:8px;margin-bottom:0;"><input type="checkbox" id="feat-show-timer-text" ${ (this._config.features && this._config.features.show_timer_text !== false) ? 'checked' : '' } /> Show timer text</label>
        </div>
      </div>
    </div>

    <!-- CHIP: Sensors -->
    <div style="border:1px solid var(--divider-color);border-radius:12px;overflow:hidden;background:var(--secondary-background-color);">
      <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;cursor:pointer;font-weight:600;font-size:14px;" id="chip-sensors">
        <ha-icon icon="mdi:broadcast" style="--mdi-icon-size:20px;color:var(--primary-color);"></ha-icon>
        <span>Sensors</span>
        <div style="margin-left:auto;font-size:16px;color:var(--secondary-text-color);transition:transform .2s;" id="arrow-sensors">▼</div>
      </div>
      <div style="padding:14px 16px;border-top:1px solid var(--divider-color);background:var(--card-background-color,#fff);display:none;" id="body-sensors">
        <div class="row">
          <label>Average temperature sensor</label>
          <ha-entity-picker data-key="avg_temp_entity" data-domain="sensor" allow-custom-entity></ha-entity-picker>
        </div>
        <div class="row">
          <label>Fine dust (PM2.5)</label>
          <ha-entity-picker data-key="pm25_entity" data-domain="sensor" allow-custom-entity></ha-entity-picker>
        </div>
        <div class="row">
          <label>Outdoor temperature</label>
          <ha-entity-picker data-key="outdoor_temp_entity" data-domain="sensor" allow-custom-entity></ha-entity-picker>
        </div>
        <div class="row">
          <label>Humidity</label>
          <ha-entity-picker data-key="humidity_entity" data-domain="sensor" allow-custom-entity></ha-entity-picker>
        </div>
        <div class="row">
          <label>Power consumption</label>
          <ha-entity-picker data-key="power_entity" data-domain="sensor" allow-custom-entity></ha-entity-picker>
        </div>
        <div class="row">
          <label>Timer State Helper (input_text)</label>
          <ha-entity-picker data-key="timer_state_entity" data-domain="input_text" allow-custom-entity></ha-entity-picker>
          <span style="font-size:10px;color:var(--secondary-text-color);margin-top:4px;display:block;">Use input_text helper for cross-device timer sync</span>
        </div>
      </div>
    </div>

    <!-- CHIP: Visual Settings -->
    <div style="border:1px solid var(--divider-color);border-radius:12px;overflow:hidden;background:var(--secondary-background-color);">
      <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;cursor:pointer;font-weight:600;font-size:14px;" id="chip-visual">
        <ha-icon icon="mdi:palette" style="--mdi-icon-size:20px;color:var(--primary-color);"></ha-icon>
        <span>Visual Settings</span>
        <div style="margin-left:auto;font-size:16px;color:var(--secondary-text-color);transition:transform .2s;" id="arrow-visual">▼</div>
      </div>
      <div style="padding:14px 16px;border-top:1px solid var(--divider-color);background:var(--card-background-color,#fff);display:none;" id="body-visual">
        <div style="font-size:11px;font-weight:700;color:var(--secondary-text-color);margin-bottom:8px;letter-spacing:.4px;">${t.bgPresets}</div>
        <div class="bg-grid">
          ${(()=>{const _op=typeof cfg.bg_opacity==='number'?Math.round(Math.min(100,Math.max(0,cfg.bg_opacity))):75;const _a1=Math.round(_op*2.55).toString(16).padStart(2,'0');const _a2=Math.round(_op*0.65*2.55).toString(16).padStart(2,'0');return AC_BG_PRESETS.map(p=>{const c1=p.c1||'#888',c2=p.c2||'#444';const isC=p.id==='custom';return`<div class="bgs ${bgP===p.id?'on':''}" data-bg="${p.id}" style="${isC?'background:linear-gradient(135deg,#e0e0e0,#bdbdbd);color:#555;text-shadow:none;':'background:linear-gradient(135deg,'+c1+_a1+' 0%,'+c2+_a2+' 100%);'}">${p.label}</div>`;}).join('')})()}
        </div>
        ${bgP === 'custom' ? `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
          ${this._colorRow('bg_color1', t.color1)}
          ${this._colorRow('bg_color2', t.color2)}
        </div>` : ''}
        <div style="margin-top:12px;">
          <div style="font-size:11px;font-weight:700;color:var(--secondary-text-color);margin-bottom:6px;letter-spacing:.4px;">${t.bgOpacity}: ${typeof cfg.bg_opacity === 'number' ? cfg.bg_opacity : 75}%</div>
          <input type="range" id="bg-opacity-slider" min="0" max="100" value="${typeof cfg.bg_opacity === 'number' ? cfg.bg_opacity : 75}" style="width:100%;accent-color:var(--primary-color,#03a9f4);cursor:pointer;">
        </div>
      </div>
    </div>
  </div>
</div>`;

    this._bindEvents();
    this._syncPickers();
  }

  _bindEvents() {
    const sr = this.shadowRoot;

    // Chip toggles
    ['lang','ac','features','sensors','visual'].forEach(id => {
      const hdr = sr.getElementById('chip-' + id);
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

    // bg opacity slider
    const opSlider = sr.getElementById('bg-opacity-slider');
    if (opSlider) {
      opSlider.addEventListener('input', () => {
        this._config = { ...this._config, bg_opacity: parseInt(opSlider.value, 10) };
        this._fire();
      });
      opSlider.addEventListener('change', () => {
        this._render();
      });
    }

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
      const imageEl = sr.getElementById('inp-room-image-' + i);
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
      wireTextInput(imageEl, val => {
        const ents = (this._config.entities || []).slice();
        while (ents.length <= i) ents.push({});
        if (val) ents[i] = { ...ents[i], image_url: val };
        else if (ents[i]) delete ents[i].image_url;
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
    const elAirBtn = sr.getElementById('feat-show-airflow-btn');
    if (elAirBtn) elAirBtn.addEventListener('change', () => setFeature('show_airflow_btn', elAirBtn.checked));
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
    const elModesText = sr.getElementById('feat-show-modes-text');
    if (elModesText) elModesText.addEventListener('change', () => setFeature('show_modes_text', elModesText.checked));
    const elModesIcon = sr.getElementById('feat-show-modes-icon');
    if (elModesIcon) elModesIcon.addEventListener('change', () => setFeature('show_modes_icon', elModesIcon.checked));
    const elPowerText = sr.getElementById('feat-show-power-text');
    if (elPowerText) elPowerText.addEventListener('change', () => setFeature('show_power_text', elPowerText.checked));
    const elPowerIcon = sr.getElementById('feat-show-power-icon');
    if (elPowerIcon) elPowerIcon.addEventListener('change', () => setFeature('show_power_icon', elPowerIcon.checked));
    const elTimerText = sr.getElementById('feat-show-timer-text');
    if (elTimerText) elTimerText.addEventListener('change', () => setFeature('show_timer_text', elTimerText.checked));
    const elTimerIcon = sr.getElementById('feat-show-timer-icon');
    if (elTimerIcon) elTimerIcon.addEventListener('change', () => setFeature('show_timer_icon', elTimerIcon.checked));

    // Header button wiring
    const setHdrBtn = (key, val) => {
      const hb = Object.assign({}, this._config.header_button || {});
      hb[key] = val;
      this._config = { ...this._config, header_button: hb };
    };
    const setHdrBtnAction = (which, key, val) => {
      const hb = Object.assign({}, this._config.header_button || {});
      hb[which] = Object.assign({}, hb[which] || {});
      hb[which][key] = val;
      this._config = { ...this._config, header_button: hb };
    };
    const elHdrShow = sr.getElementById('hdr-btn-show');
    if (elHdrShow) elHdrShow.addEventListener('change', () => { setHdrBtn('show', elHdrShow.checked); this._fire(); });
    const elHdrIcon = sr.getElementById('hdr-btn-icon');
    if (elHdrIcon) {
      const prevIcon = sr.getElementById('preview-hdr-btn-icon');
      if (prevIcon) prevIcon.innerHTML = elHdrIcon.value ? '<ha-icon icon="' + elHdrIcon.value + '"></ha-icon>' : '';
      wireTextInput(elHdrIcon, val => {
        setHdrBtn('icon', val);
        if (prevIcon) prevIcon.innerHTML = val ? '<ha-icon icon="' + val + '"></ha-icon>' : '';
      });
    }
    const showHdrActionExtra = (prefix, action) => {
      const extra = sr.getElementById(prefix + '-extra');
      const navRow = sr.getElementById(prefix + '-nav-row');
      const urlRow = sr.getElementById(prefix + '-url-row');
      const svcRow = sr.getElementById(prefix + '-svc-row');
      if (extra) extra.style.display = (action === 'navigate' || action === 'url' || action === 'perform-action') ? 'block' : 'none';
      if (navRow) navRow.style.display = action === 'navigate' ? 'flex' : 'none';
      if (urlRow) urlRow.style.display = action === 'url' ? 'flex' : 'none';
      if (svcRow) svcRow.style.display = action === 'perform-action' ? 'block' : 'none';
    };
    const elTapAction = sr.getElementById('hdr-btn-tap-action');
    if (elTapAction) elTapAction.addEventListener('change', () => {
      setHdrBtnAction('tap_action', 'action', elTapAction.value);
      this._fire();
      showHdrActionExtra('hdr-btn-tap', elTapAction.value);
    });
    const elHoldAction = sr.getElementById('hdr-btn-hold-action');
    if (elHoldAction) elHoldAction.addEventListener('change', () => {
      setHdrBtnAction('hold_action', 'action', elHoldAction.value);
      this._fire();
      showHdrActionExtra('hdr-btn-hold', elHoldAction.value);
    });
    ['tap', 'hold'].forEach(which => {
      const navEl = sr.getElementById('hdr-btn-' + which + '-nav');
      if (navEl) wireTextInput(navEl, val => setHdrBtnAction(which + '_action', 'navigation_path', val));
      const urlEl = sr.getElementById('hdr-btn-' + which + '-url');
      if (urlEl) wireTextInput(urlEl, val => setHdrBtnAction(which + '_action', 'url_path', val));
      const svcEl = sr.getElementById('hdr-btn-' + which + '-svc');
      if (svcEl) wireTextInput(svcEl, val => setHdrBtnAction(which + '_action', 'perform_action', val));
      const tgtEl = sr.getElementById('hdr-btn-' + which + '-svc-target');
      if (tgtEl) wireTextInput(tgtEl, val => setHdrBtnAction(which + '_action', 'target', { entity_id: val }));
    });

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
