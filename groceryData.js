// కిరాణా, నవధాన్యాలు, కూరగాయలు, పండ్లు & పూజా సామాగ్రి డేటాబేస్
// High-resolution photos from Telugu Sampada vocabulary PDFs & Navadhanyalu chart.
// STRICT ZERO EMOJIS POLICY. 100% VEGETARIAN (NO EGGS).

const GROCERY_CATEGORIES = [
  {
    "id": "all",
    "name": "అన్నీ",
    "nameEn": "All Items",
    "icon": "fa-layer-group",
    "color": "bg-emerald-600"
  },
  {
    "id": "groceries",
    "name": "కిరాణా & నవధాన్యాలు",
    "nameEn": "Groceries & Grains",
    "icon": "fa-wheat-awn",
    "color": "bg-amber-600"
  },
  {
    "id": "seeds",
    "name": "గింజలు & విత్తనాలు",
    "nameEn": "Seeds",
    "icon": "fa-seedling",
    "color": "bg-lime-700"
  },
  {
    "id": "vegetables",
    "name": "కూరగాయలు & ఆకులు",
    "nameEn": "Vegetables & Greens",
    "icon": "fa-carrot",
    "color": "bg-green-600"
  },
  {
    "id": "fruits",
    "name": "తాజా పండ్లు",
    "nameEn": "Fresh Fruits",
    "icon": "fa-apple-whole",
    "color": "bg-rose-600"
  },
  {
    "id": "pooja",
    "name": "పూజా సామాగ్రి",
    "nameEn": "Hindu Pooja Items",
    "icon": "fa-om",
    "color": "bg-orange-600"
  }
];

const STANDARD_QUANTITIES = [
  {
    "id": "pavu_kg",
    "label": "పావు కిలో",
    "sub": "250 గ్రాములు",
    "defaultUnit": "పావు కిలో"
  },
  {
    "id": "ara_kg",
    "label": "అర కిలో",
    "sub": "500 గ్రాములు",
    "defaultUnit": "అర కిలో"
  },
  {
    "id": "muppavu_kg",
    "label": "ముప్పావు కిలో",
    "sub": "750 గ్రాములు",
    "defaultUnit": "ముప్పావు కిలో"
  },
  {
    "id": "1_kg",
    "label": "1 కిలో",
    "sub": "1000 గ్రాములు",
    "defaultUnit": "1 కిలో"
  },
  {
    "id": "2_kg",
    "label": "2 కిలోలు",
    "sub": "2000 గ్రాములు",
    "defaultUnit": "2 కిలోలు"
  },
  {
    "id": "5_kg",
    "label": "5 కిలోలు",
    "sub": "5 KG",
    "defaultUnit": "5 కిలోలు"
  },
  {
    "id": "10_kg",
    "label": "10 కిలోలు",
    "sub": "10 KG",
    "defaultUnit": "10 కిలోలు"
  },
  {
    "id": "25_kg_basta",
    "label": "25 కిలోల బస్తా",
    "sub": "1 బ్యాగ్",
    "defaultUnit": "25 కిలోల బస్తా"
  },
  {
    "id": "50_gm",
    "label": "50 గ్రాములు",
    "sub": "50 gm",
    "defaultUnit": "50 గ్రాములు"
  },
  {
    "id": "100_gm",
    "label": "100 గ్రాములు",
    "sub": "100 gm",
    "defaultUnit": "100 గ్రాములు"
  },
  {
    "id": "250_gm",
    "label": "250 గ్రాములు",
    "sub": "250 gm",
    "defaultUnit": "250 గ్రాములు"
  },
  {
    "id": "500_gm",
    "label": "500 గ్రాములు",
    "sub": "500 gm",
    "defaultUnit": "500 గ్రాములు"
  },
  {
    "id": "ara_liter",
    "label": "అర లీటరు",
    "sub": "500 మి.లీ",
    "defaultUnit": "అర లీటరు"
  },
  {
    "id": "1_liter",
    "label": "1 లీటరు",
    "sub": "1000 మి.లీ",
    "defaultUnit": "1 లీటరు"
  },
  {
    "id": "2_liter",
    "label": "2 లీటర్లు",
    "sub": "2 Liters",
    "defaultUnit": "2 లీటర్లు"
  },
  {
    "id": "5_liter",
    "label": "5 లీటర్ల డబ్బా",
    "sub": "5 Liters Can",
    "defaultUnit": "5 లీటర్ల డబ్బా"
  },
  {
    "id": "1_pkt",
    "label": "1 ప్యాకెట్",
    "sub": "1 Packet",
    "defaultUnit": "1 ప్యాకెట్"
  },
  {
    "id": "2_pkt",
    "label": "2 ప్యాకెట్లు",
    "sub": "2 Packets",
    "defaultUnit": "2 ప్యాకెట్లు"
  },
  {
    "id": "1_katta",
    "label": "1 కట్ట",
    "sub": "1 Bunch",
    "defaultUnit": "1 కట్ట"
  },
  {
    "id": "2_katta",
    "label": "2 కట్టలు",
    "sub": "2 Bunches",
    "defaultUnit": "2 కట్టలు"
  },
  {
    "id": "1_kaya",
    "label": "1 కాయ",
    "sub": "1 Piece",
    "defaultUnit": "1 కాయ"
  },
  {
    "id": "2_kayalu",
    "label": "2 కాయలు",
    "sub": "2 Pieces",
    "defaultUnit": "2 కాయలు"
  },
  {
    "id": "1_dozen",
    "label": "1 డజను",
    "sub": "12 నంబర్లు",
    "defaultUnit": "1 డజను"
  },
  {
    "id": "ara_dozen",
    "label": "అర డజను",
    "sub": "6 నంబర్లు",
    "defaultUnit": "అర డజను"
  },
  {
    "id": "1_jatha",
    "label": "1 జత",
    "sub": "2 Pieces (Pair)",
    "defaultUnit": "1 జత"
  }
];

const TELUGU_UNITS = [
  "కిలోలు",
  "గ్రాములు",
  "లీటర్లు",
  "మిల్లీ లీటర్లు",
  "ప్యాకెట్లు",
  "కట్టలు",
  "కాయలు",
  "డజన్లు",
  "జతలు",
  "డబ్బాలు",
  "బాటిళ్ళు",
  "బస్తాలు",
  "పీసులు"
];

const GROCERY_ITEMS = [
  {
    "id": "nava_1",
    "nameTe": "గోధుమలు",
    "nameEn": "Wheat (Godhumalu)",
    "translit": "godhumalu godhuma wheat whole wheat grains atta nava dhanyalu navadhanya",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "images/navadhanyalu/godhumalu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "5 కిలోలు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "నవధాన్యం",
    "inStock": true
  },
  {
    "id": "nava_2",
    "nameTe": "యవలు (బార్లీ)",
    "nameEn": "Barley (Yavalu)",
    "translit": "yavalu barley jav javalu yavalu nava dhanyalu navadhanya",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "images/navadhanyalu/yavalu.jpg",
    "defaultQty": "500 గ్రాములు",
    "commonQtys": [
      "500 గ్రాములు",
      "1 కిలో",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "నవధాన్యం",
    "inStock": true
  },
  {
    "id": "nava_3",
    "nameTe": "పెసలు (ఆకుపచ్చ పెసలు)",
    "nameEn": "Green Gram Whole (Pesalu)",
    "translit": "pesalu moong whole sabut moong green gram pesalu nava dhanyalu",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "images/navadhanyalu/pesalu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "నవధాన్యం",
    "inStock": true
  },
  {
    "id": "nava_4",
    "nameTe": "శనగలు (నల్ల శనగలు)",
    "nameEn": "Bengal Gram Whole (Kala Chana / Senagalu)",
    "translit": "senagalu sanagalu kala chana brown chana desi chana bengal gram whole nava dhanyalu",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "images/navadhanyalu/senagalu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "నవధాన్యం",
    "inStock": true
  },
  {
    "id": "nava_5",
    "nameTe": "కందులు (మొత్తం కందులు)",
    "nameEn": "Red Gram Whole (Kandulu / Whole Toor)",
    "translit": "kandulu toor whole arhar red gram kandulu nava dhanyalu",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "images/navadhanyalu/kandulu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "నవధాన్యం",
    "inStock": true
  },
  {
    "id": "nava_6",
    "nameTe": "అలసందలు (బొబ్బర్లు)",
    "nameEn": "Cowpeas / Black-Eyed Peas (Alasandalu)",
    "translit": "alasandalu bobbarlu lobiya cowpeas black eyed peas alasandalu nava dhanyalu",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "images/navadhanyalu/alasandalu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "నవధాన్యం",
    "inStock": true
  },
  {
    "id": "nava_7",
    "nameTe": "నువ్వులు (తెల్ల నువ్వులు)",
    "nameEn": "Sesame Seeds (Nuvvulu / Til)",
    "translit": "nuvvulu tella nuvvulu til sesame seeds gingelly nava dhanyalu pooja nuvvulu",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "images/navadhanyalu/nuvvulu.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "250 గ్రాములు",
      "500 గ్రాములు",
      "100 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "నవధాన్యం",
    "inStock": true
  },
  {
    "id": "nava_8",
    "nameTe": "మినుములు (పొట్టు మినుములు)",
    "nameEn": "Black Gram Whole (Minumulu / Sabut Urad)",
    "translit": "minumulu sabut urad black gram whole minumulu nava dhanyalu",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "images/navadhanyalu/minumulu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "నవధాన్యం",
    "inStock": true
  },
  {
    "id": "nava_9",
    "nameTe": "ఉలవలు (గుర్రపు పప్పు)",
    "nameEn": "Horse Gram (Ulavalu)",
    "translit": "ulavalu horse gram kulthi ulava charu ulavalu nava dhanyalu",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "images/navadhanyalu/ulavalu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "నవధాన్యం",
    "inStock": true
  },
  {
    "id": "groc_1",
    "nameTe": "పుట్నాల పప్పు (వేయించిన శనగ పప్పు)",
    "nameEn": "Roasted Gram Dal (Putnala Pappu)",
    "translit": "putnala pappu putnalapappu putnalu roasted chana dal senaga pappu roasted bengal gram vepudu senagapappu",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "images/navadhanyalu/putnala_pappu.jpg",
    "defaultQty": "500 గ్రాములు",
    "commonQtys": [
      "500 గ్రాములు",
      "1 కిలో",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_2",
    "nameTe": "సోనా మసూరి బియ్యం (పాత బియ్యం)",
    "nameEn": "Sona Masoori Rice (Aged Rice)",
    "translit": "sona masoori biyyam biyam rice sona masuri raw rice steam rice white rice rice bag basta",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "images/groceries/sona_masoori.jpg",
    "defaultQty": "25 కిలోల బస్తా",
    "commonQtys": [
      "25 కిలోల బస్తా",
      "10 కిలోలు",
      "5 కిలోలు",
      "1 కిలో"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_3",
    "nameTe": "బాస్మతి బియ్యం (ప్రీమియం లాంగ్ గ్రెయిన్)",
    "nameEn": "Basmati Rice (Biryani Rice)",
    "translit": "basmati rice biyyam biryani rice daawat india gate long grain basmathi",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "images/groceries/basmati_rice.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "5 కిలోలు",
      "2 కిలోలు"
    ],
    "tagType": "offer",
    "tagLabelTelugu": "ప్రత్యేక ఆఫర్",
    "inStock": true
  },
  {
    "id": "groc_4",
    "nameTe": "కంది పప్పు (ఫస్ట్ క్వాలిటీ)",
    "nameEn": "Toor Dal (Kandi Pappu)",
    "translit": "kandi pappu kandipappu toor dal tuvar dal arhar dal yellow dal",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "images/groceries/kandi_pappu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_5",
    "nameTe": "మినప పప్పు (గుళ్ళు)",
    "nameEn": "Urad Dal Gulla (Minapa Gulla)",
    "translit": "minapa pappu minapappu minapa gulla urad dal idli dal dosa pappu",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "images/groceries/minapa_pappu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_6",
    "nameTe": "పెసర పప్పు",
    "nameEn": "Moong Dal (Pesara Pappu)",
    "translit": "pesara pappu pesarapappu moong dal yellow moong dal pesarattu pappu",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "images/groceries/pesara_pappu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_7",
    "nameTe": "శనగ పప్పు (తాలింపు పప్పు)",
    "nameEn": "Chana Dal (Senaga Pappu)",
    "translit": "senaga pappu sanaga pappu chana dal bengal gram split dal",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "images/groceries/senaga_pappu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_8",
    "nameTe": "వేరుశెనగ గుళ్ళు / పల్లీలు",
    "nameEn": "Peanuts / Groundnuts (Pallilu)",
    "translit": "pallilu palli verusenaga gullu peanuts groundnuts moongphali",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "images/groceries/pallilu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_9",
    "nameTe": "గోధుమ పిండి (చక్కీ ఫ్రెష్ ఆటా)",
    "nameEn": "Chakki Fresh Wheat Flour (Atta)",
    "translit": "godhuma pindi atta chakki fresh aashirvaad wheat flour chapatipindi",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "images/groceries/godhuma_pindi.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "5 కిలోలు",
      "10 కిలోలు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_10",
    "nameTe": "శనగపిండి (బేసన్)",
    "nameEn": "Besan / Gram Flour",
    "translit": "senagapindi besan gram flour bajji pindi chana flour",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "images/groceries/senagapindi.jpg",
    "defaultQty": "500 గ్రాములు",
    "commonQtys": [
      "500 గ్రాములు",
      "1 కిలో",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_11",
    "nameTe": "బొంబాయి రవ్వ (ఉప్మా రవ్వ)",
    "nameEn": "Semolina / Upma Rava (Bombay Rava)",
    "translit": "bombai rawa bombay rava upma rava semolina sooji suji",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "images/groceries/bombay_rava.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_12",
    "nameTe": "అటుకులు (మధ్యస్థం)",
    "nameEn": "Poha / Beaten Rice (Atukulu)",
    "translit": "atukulu poha flattened rice beaten rice aval atukulu",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "images/groceries/atukulu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_13",
    "nameTe": "వేరుశెనగ నూనె (గానుగ నూనె)",
    "nameEn": "Groundnut Cooking Oil (Cold Pressed)",
    "translit": "verusenaga nune palli noone groundnut oil peanut oil ganuga nune cooking oil",
    "mainCategory": "groceries",
    "category": "oils",
    "imageUrl": "images/groceries/verusenaga_nune.jpg",
    "defaultQty": "1 లీటరు",
    "commonQtys": [
      "1 లీటరు",
      "2 లీటర్లు",
      "5 లీటర్ల డబ్బా"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_14",
    "nameTe": "స్వచ్ఛమైన ఆవు నెయ్యి",
    "nameEn": "Pure Cow Ghee (Aavu Neyyi)",
    "translit": "aavu neyyi cow ghee pure desi ghee neyyi ghee butter",
    "mainCategory": "groceries",
    "category": "oils",
    "imageUrl": "images/groceries/aavu_neyyi.jpg",
    "defaultQty": "500 గ్రాములు",
    "commonQtys": [
      "500 గ్రాములు",
      "1 కిలో",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_15",
    "nameTe": "జీలకర్ర",
    "nameEn": "Cumin Seeds (Jeelakarra)",
    "translit": "jeelakarra jeera cumin seeds zeera popu jeelakarra",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "images/groceries/jeelakarra.jpg",
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_16",
    "nameTe": "ఆవాలు",
    "nameEn": "Mustard Seeds (Avalu)",
    "translit": "avalu rai mustard seeds popu avalu sasive",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "images/groceries/avalu.jpg",
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_17",
    "nameTe": "చింతపండు (కొత్త చింతపండు)",
    "nameEn": "Tamarind (Chintapandu)",
    "translit": "chintapandu chintha pandu tamarind imli fresh tamarind",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "images/groceries/chintapandu.jpg",
    "defaultQty": "500 గ్రాములు",
    "commonQtys": [
      "500 గ్రాములు",
      "1 కిలో",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_18",
    "nameTe": "సేంద్రీయ అచ్చ బెల్లం",
    "nameEn": "Organic Jaggery (Bellam)",
    "translit": "bellam achu bellam jaggery gur organic bellam chakkera",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "images/groceries/bellam.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_19",
    "nameTe": "కల్లుప్పు / రాతి ఉప్పు",
    "nameEn": "Crystal Rock Salt (Kalluppu)",
    "translit": "kalluppu rathi uppu rock salt sea salt crystal salt uppu",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "images/groceries/kalluppu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "5 కిలోలు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "groc_20",
    "nameTe": "జీడిపప్పు (ప్రీమియం కాజూ)",
    "nameEn": "Cashew Nuts (Jeedi Pappu / Kaju)",
    "translit": "jeedi pappu jeedipappu kaju cashews kaju nuts whole cashews",
    "mainCategory": "groceries",
    "category": "dryfruits",
    "imageUrl": "images/groceries/jeedipappu.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "250 గ్రాములు",
      "500 గ్రాములు",
      "100 గ్రాములు",
      "1 కిలో"
    ],
    "tagType": "offer",
    "tagLabelTelugu": "ప్రత్యేక ఆఫర్",
    "inStock": true
  },
  {
    "id": "groc_21",
    "nameTe": "బాదం పప్పు (కాలిఫోర్నియా బాదం)",
    "nameEn": "Almonds (Badam)",
    "translit": "badam badampappu almonds california badam dry fruits",
    "mainCategory": "groceries",
    "category": "dryfruits",
    "imageUrl": "images/groceries/badam.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "250 గ్రాములు",
      "500 గ్రాములు",
      "100 గ్రాములు"
    ],
    "tagType": "offer",
    "tagLabelTelugu": "ప్రత్యేక ఆఫర్",
    "inStock": true
  },
  {
    "id": "seed_1",
    "nameTe": "చియా గింజలు",
    "nameEn": "Chia Seeds",
    "translit": "chia ginjalu chia seeds chiya ginjalu weight loss seeds",
    "mainCategory": "seeds",
    "category": "seeds",
    "imageUrl": "images/seeds/chia_seeds.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ఆరోగ్య విత్తనం",
    "inStock": true
  },
  {
    "id": "seed_2",
    "nameTe": "అవిసె గింజలు (అవిసెలు)",
    "nameEn": "Flax Seeds / Linseed",
    "translit": "avise ginjalu aviselu flax seeds flaxseeds linseed alsi seeds",
    "mainCategory": "seeds",
    "category": "seeds",
    "imageUrl": "images/seeds/flax_seeds.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ఆరోగ్య విత్తనం",
    "inStock": true
  },
  {
    "id": "seed_3",
    "nameTe": "సబ్జా గింజలు (సబ్జాలు)",
    "nameEn": "Sabja / Sweet Basil Seeds",
    "translit": "sabja ginjalu sabjalu sabja seeds sweet basil seeds tukmaria",
    "mainCategory": "seeds",
    "category": "seeds",
    "imageUrl": "images/seeds/sabja_seeds.jpg",
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "50 గ్రాములు",
      "100 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా సరుకు",
    "inStock": true
  },
  {
    "id": "seed_4",
    "nameTe": "గుమ్మడి గింజలు",
    "nameEn": "Pumpkin Seeds",
    "translit": "gummadi ginjalu pumpkin seeds pepitas gummadi vittanalu",
    "mainCategory": "seeds",
    "category": "seeds",
    "imageUrl": "images/seeds/pumpkin_seeds.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "seed_5",
    "nameTe": "పొద్దుతిరుగుడు గింజలు",
    "nameEn": "Sunflower Seeds",
    "translit": "poddutirugudu ginjalu poddu tirugudu sunflower seeds surajmukhi",
    "mainCategory": "seeds",
    "category": "seeds",
    "imageUrl": "images/seeds/sunflower_seeds.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "seed_6",
    "nameTe": "పుచ్చ గింజలు (పుచ్చకాయ గింజలు)",
    "nameEn": "Watermelon Seeds",
    "translit": "pucha ginjalu puchakaya ginjalu watermelon seeds magaj char magaz",
    "mainCategory": "seeds",
    "category": "seeds",
    "imageUrl": "images/seeds/watermelon_seeds.jpg",
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "50 గ్రాములు",
      "100 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "seed_7",
    "nameTe": "ఖర్బూజ గింజలు",
    "nameEn": "Muskmelon Seeds",
    "translit": "kharbuja ginjalu kharbooja ginjalu muskmelon seeds melon seeds",
    "mainCategory": "seeds",
    "category": "seeds",
    "imageUrl": "images/seeds/muskmelon_seeds.jpg",
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "50 గ్రాములు",
      "100 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "seed_8",
    "nameTe": "గసగసాలు",
    "nameEn": "Poppy Seeds (Khus Khus)",
    "translit": "gasagasalu gasagasa poppy seeds khus khus posto spice seeds",
    "mainCategory": "seeds",
    "category": "seeds",
    "imageUrl": "images/seeds/poppy_seeds.jpg",
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "50 గ్రాములు",
      "100 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "seed_9",
    "nameTe": "కలోంజి",
    "nameEn": "Nigella Seeds (Kalonji)",
    "translit": "kalonji nigella seeds black seeds onion seeds mangrail nalla jeelakarra",
    "mainCategory": "seeds",
    "category": "seeds",
    "imageUrl": "images/seeds/nigella_seeds.jpg",
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "50 గ్రాములు",
      "100 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "seed_10",
    "nameTe": "మఖానా (పూల్ మఖానా)",
    "nameEn": "Fox Nuts (Makhana)",
    "translit": "makhana phool makhana pool makhana fox nuts lotus seeds",
    "mainCategory": "seeds",
    "category": "seeds",
    "imageUrl": "images/seeds/makhana.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ఆరోగ్య విత్తనం",
    "inStock": true
  },
  {
    "id": "seed_11",
    "nameTe": "క్వినోవా",
    "nameEn": "Quinoa",
    "translit": "quinoa keenwa quinoa seeds protein grain diet seeds",
    "mainCategory": "seeds",
    "category": "seeds",
    "imageUrl": "images/seeds/quinoa.jpg",
    "defaultQty": "500 గ్రాములు",
    "commonQtys": [
      "250 గ్రాములు",
      "500 గ్రాములు",
      "1 కిలో"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "seed_12",
    "nameTe": "నల్ల నువ్వులు",
    "nameEn": "Black Sesame Seeds",
    "translit": "nalla nuvvulu black sesame seeds til black til pooja nuvvulu",
    "mainCategory": "seeds",
    "category": "seeds",
    "imageUrl": "images/seeds/black_sesame.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "పూజా & ఆరోగ్యం",
    "inStock": true
  },
  {
    "id": "seed_13",
    "nameTe": "పనస గింజలు (పనస పిక్కలు)",
    "nameEn": "Jackfruit Seeds",
    "translit": "panasa ginjalu panasa pikkalu jackfruit seeds",
    "mainCategory": "seeds",
    "category": "seeds",
    "imageUrl": "images/seeds/jackfruit_seeds.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "seed_14",
    "nameTe": "చింత గింజలు (చింతపిక్కలు)",
    "nameEn": "Tamarind Seeds",
    "translit": "chinta ginjalu chintha pikkalu chintapikkalu tamarind seeds",
    "mainCategory": "seeds",
    "category": "seeds",
    "imageUrl": "images/seeds/tamarind_seeds.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "seed_15",
    "nameTe": "రాజగిరా (తోటకూర గింజలు)",
    "nameEn": "Amaranth Grain (Rajgira)",
    "translit": "rajagira rajgira thotakura ginjalu amaranth grain ramdana",
    "mainCategory": "seeds",
    "category": "seeds",
    "imageUrl": "images/seeds/amaranth_grain.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "veg_1_tamata",
    "nameTe": "టమాటా / టమోటా",
    "nameEn": "Tomato",
    "translit": "tamata tamota tomato tamatar",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/tamata.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "veg_3_bendakaya",
    "nameTe": "బెండకాయ",
    "nameEn": "Okra / Ladies Finger",
    "translit": "bendakaya okra ladies finger bhindi",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/bendakaya.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_4_bangaladumpa",
    "nameTe": "బంగాళాదుంప / ఆలుగడ్డ",
    "nameEn": "Potato (Aloo)",
    "translit": "bangaladumpa aloo alu gadda potato urla gadda",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/bangaladumpa.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "veg_5_ullipaya",
    "nameTe": "ఉల్లిపాయ / ఎర్రగడ్డ",
    "nameEn": "Onion",
    "translit": "ullipaya ullipayalu erra gadda ulli gadda onion pyaz",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/ullipaya.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "5 కిలోలు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "veg_6_vellulli",
    "nameTe": "వెల్లుల్లి",
    "nameEn": "Garlic (Lahsun)",
    "translit": "vellulli tellapayalu garlic lahsun garlic pods",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/chart_vegetables/vellulli.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "250 గ్రాములు",
      "500 గ్రాములు",
      "100 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "veg_7_kyaret",
    "nameTe": "క్యారెట్",
    "nameEn": "Carrot",
    "translit": "kyaret carrot gajar fresh carrot",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/kyaret.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_8_kaliphlavar",
    "nameTe": "కాలీఫ్లవర్ / గోబీపువ్వు",
    "nameEn": "Cauliflower",
    "translit": "kaliphlavar gobi gobi puvvu cauliflower",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/kaliphlavar.jpg",
    "defaultQty": "1 కాయ / పువ్వు",
    "commonQtys": [
      "1 కాయ",
      "2 కాయలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_9_kyabeji",
    "nameTe": "క్యాబేజీ",
    "nameEn": "Cabbage",
    "translit": "kyabeji cabbage patta gobi",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/kyabeji.jpg",
    "defaultQty": "1 కాయ",
    "commonQtys": [
      "1 కాయ",
      "2 కాయలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_10_pachchimirapakaya",
    "nameTe": "పచ్చిమిర్చి / పచ్చి మిరపకాయ",
    "nameEn": "Green Chilli",
    "translit": "pachchimirchi pachchi mirapakaya green chilli mirchi hari mirch",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/pachchimirapakaya.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "250 గ్రాములు",
      "500 గ్రాములు",
      "100 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "veg_11_endumirchi",
    "nameTe": "ఎండుమిర్చి (గుంటూరు మిరప)",
    "nameEn": "Dry Red Chilli",
    "translit": "endumirchi yendu mirapakaya dry red chilli guntur mirchi",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/chart_vegetables/endumirchi.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "250 గ్రాములు",
      "500 గ్రాములు",
      "100 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "veg_12_allam",
    "nameTe": "అల్లం (తాజా అల్లం)",
    "nameEn": "Fresh Ginger",
    "translit": "allam ginger adrak fresh ginger",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/chart_vegetables/allam.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "250 గ్రాములు",
      "500 గ్రాములు",
      "100 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "veg_13_munagakaya",
    "nameTe": "మునగకాయ / మునక్కాయ",
    "nameEn": "Drumstick",
    "translit": "munagakaya munakkaya drumstick sahjan",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/munagakaya.jpg",
    "defaultQty": "4 కాయలు",
    "commonQtys": [
      "4 కాయలు",
      "10 కాయలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_14_gummadikaya",
    "nameTe": "గుమ్మడికాయ",
    "nameEn": "Pumpkin",
    "translit": "gummadikaya pumpkin kaddu red pumpkin",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/gummadikaya.jpg",
    "defaultQty": "1 కాయ",
    "commonQtys": [
      "1 కాయ",
      "అర కాయ"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_15_budida_gummadikaya",
    "nameTe": "బూడిద గుమ్మడికాయ",
    "nameEn": "Ash Gourd (Winter Melon)",
    "translit": "budida gummadikaya ash gourd winter melon petha",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/budida_gummadikaya.jpg",
    "defaultQty": "1 కాయ",
    "commonQtys": [
      "1 కాయ"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_16_birakaya",
    "nameTe": "బీరకాయ",
    "nameEn": "Ridge Gourd",
    "translit": "birakaya ridge gourd beerakaya turai",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/birakaya.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_17_sorakaya",
    "nameTe": "సొరకాయ / ఆనపకాయ",
    "nameEn": "Bottle Gourd",
    "translit": "sorakaya anapakaya bottle gourd lauki",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/sorakaya.jpg",
    "defaultQty": "1 కాయ",
    "commonQtys": [
      "1 కాయ",
      "2 కాయలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_18_potlakaya",
    "nameTe": "పొట్లకాయ",
    "nameEn": "Snake Gourd",
    "translit": "potlakaya snake gourd chichinda",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/potlakaya.jpg",
    "defaultQty": "1 కాయ",
    "commonQtys": [
      "1 కాయ",
      "2 కాయలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_19_kakarakaya",
    "nameTe": "కాకరకాయ",
    "nameEn": "Bitter Gourd",
    "translit": "kakarakaya bitter gourd karela",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/kakarakaya.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_20_dondakaya",
    "nameTe": "దొండకాయ",
    "nameEn": "Ivy Gourd (Tindora)",
    "translit": "dondakaya tindora ivy gourd kundru",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/dondakaya.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_21_dosakaya",
    "nameTe": "దోసకాయ / కీరా దోసకాయ",
    "nameEn": "Cucumber (Dosakaya)",
    "translit": "dosakaya keera dosakaya cucumber kheera",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/dosakaya.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_22_neti_birakaya",
    "nameTe": "నేతి బీరకాయ",
    "nameEn": "Sponge Gourd (Smooth Luffa)",
    "translit": "neti birakaya sponge gourd smooth luffa ghia tori",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/neti_birakaya.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_23_sima_vankaya",
    "nameTe": "సీమ వంకాయ / చౌ చౌ",
    "nameEn": "Chow Chow (Chayote)",
    "translit": "sima vankaya chow chow chou chou chayote",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/sima_vankaya.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_24_chikkudukaya",
    "nameTe": "చిక్కుడుకాయ",
    "nameEn": "Broad Beans / Flat Beans",
    "translit": "chikkudukaya flat beans broad beans sem fali",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/chikkudukaya.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_25_bins",
    "nameTe": "బీన్స్ / ఫ్రెంచ్ బీన్స్",
    "nameEn": "French Beans",
    "translit": "bins french beans green beans fali",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/bins.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_26_goruchikkudu",
    "nameTe": "గోరుచిక్కుడు",
    "nameEn": "Cluster Beans (Guar)",
    "translit": "goruchikkudu cluster beans guar gawar fali",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/goruchikkudu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_27_bathanilu",
    "nameTe": "పచ్చి బఠానీలు",
    "nameEn": "Green Peas",
    "translit": "bathanilu pachchi bathanilu green peas matar",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/bathanilu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_28_bobbara_kayalu",
    "nameTe": "బొబ్బర కాయలు / అలసంద కాయలు",
    "nameEn": "Yardlong Beans",
    "translit": "bobbara kayalu alasanda kayalu yardlong beans lobia fali",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/bobbara_kayalu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_29_bitrut",
    "nameTe": "బీట్‌రూట్",
    "nameEn": "Beetroot",
    "translit": "bitrut beetroot chukandar fresh beetroot",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/bitrut.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_30_mullangi",
    "nameTe": "ముల్లంగి (తెల్ల ముల్లంగి)",
    "nameEn": "Radish (Mooli)",
    "translit": "mullangi white radish mooli",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/mullangi.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_31_chilagadadumpa",
    "nameTe": "చిలగడదుంప / గెనుసుగడ్డ",
    "nameEn": "Sweet Potato",
    "translit": "chilagadadumpa sweet potato genusu gadda shakarkand",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/chilagadadumpa.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_32_chamadumpa",
    "nameTe": "చామదుంప / చామగడ్డ",
    "nameEn": "Colocasia (Taro Root / Arbi)",
    "translit": "chamadumpa colocasia taro root arbi chama gadda",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/chamadumpa.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_33_kanda",
    "nameTe": "కంద / కందగడ్డ",
    "nameEn": "Elephant Foot Yam (Suran)",
    "translit": "kanda kandagadda suran elephant foot yam",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/kanda.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_34_nulkol",
    "nameTe": "నూల్‌కోల్ / నలుగుమ",
    "nameEn": "Kohlrabi (Knol Khol / Noolkol)",
    "translit": "nulkol naluguma kohlrabi knol khol ganth gobi",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/nulkol.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_35_kyapsikam",
    "nameTe": "క్యాప్సికమ్ (బెంగళూరు మిరప)",
    "nameEn": "Capsicum (Bell Pepper)",
    "translit": "kyapsikam capsicum bell pepper shimla mirch",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/kyapsikam.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_36_aratikaya",
    "nameTe": "అరటికాయ (కూర అరటి)",
    "nameEn": "Raw Cooking Plantain",
    "translit": "aratikaya raw banana raw plantain kacha kela",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/aratikaya.jpg",
    "defaultQty": "4 కాయలు",
    "commonQtys": [
      "4 కాయలు",
      "10 కాయలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_37_mamidikaya",
    "nameTe": "పచ్చి మామిడికాయ",
    "nameEn": "Raw Green Mango",
    "translit": "mamidikaya raw mango kacha aam green mango",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/mamidikaya.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కాయలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_38_puttagodugu",
    "nameTe": "పుట్టగొడుగులు (మష్రూమ్)",
    "nameEn": "Fresh Button Mushrooms",
    "translit": "puttagodugu mushroom button mushroom mashroom",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/puttagodugu.jpg",
    "defaultQty": "1 ప్యాకెట్",
    "commonQtys": [
      "1 ప్యాకెట్",
      "2 ప్యాకెట్లు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_39_brokali",
    "nameTe": "బ్రోకలీ",
    "nameEn": "Fresh Green Broccoli",
    "translit": "brokali broccoli green broccoli hari gobi",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/vegetables/brokali.jpg",
    "defaultQty": "1 పువ్వు / పీస్",
    "commonQtys": [
      "1 పీస్",
      "2 పీసులు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "veg_40_kothimeera",
    "nameTe": "కొత్తిమీర (తాజా కట్ట)",
    "nameEn": "Fresh Coriander Leaves",
    "translit": "kothimeera kotthimeera dhaniya patta coriander leaves",
    "mainCategory": "vegetables",
    "category": "greens",
    "imageUrl": "images/chart_vegetables/kothimeera.jpg",
    "defaultQty": "1 కట్ట",
    "commonQtys": [
      "1 కట్ట",
      "2 కట్టలు",
      "3 కట్టలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా ఆకుకూర",
    "inStock": true
  },
  {
    "id": "veg_41_karivepaku",
    "nameTe": "కరివేపాకు (తాజా కట్ట)",
    "nameEn": "Fresh Curry Leaves",
    "translit": "karivepaku kadi patta curry leaves",
    "mainCategory": "vegetables",
    "category": "greens",
    "imageUrl": "images/chart_vegetables/karivepaku.jpg",
    "defaultQty": "1 కట్ట",
    "commonQtys": [
      "1 కట్ట",
      "2 కట్టలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా ఆకుకూర",
    "inStock": true
  },
  {
    "id": "veg_42_pudina",
    "nameTe": "పుదీనా (తాజా ఆకులు)",
    "nameEn": "Fresh Mint Leaves",
    "translit": "pudina mint leaves pudina aaku",
    "mainCategory": "vegetables",
    "category": "greens",
    "imageUrl": "images/chart_vegetables/pudina.jpg",
    "defaultQty": "1 కట్ట",
    "commonQtys": [
      "1 కట్ట",
      "2 కట్టలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా ఆకుకూర",
    "inStock": true
  },
  {
    "id": "veg_43_palakura",
    "nameTe": "పాలకూర (తాజా ఆకుకూర)",
    "nameEn": "Fresh Spinach (Palak)",
    "translit": "palakura spinach palak leafy greens",
    "mainCategory": "vegetables",
    "category": "greens",
    "imageUrl": "images/chart_vegetables/palakura.jpg",
    "defaultQty": "1 కట్ట",
    "commonQtys": [
      "1 కట్ట",
      "2 కట్టలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా ఆకుకూర",
    "inStock": true
  },
  {
    "id": "veg_44_gongura",
    "nameTe": "గోంగూర (ఆంధ్రా గోంగూర)",
    "nameEn": "Roselle Leaves (Gongura)",
    "translit": "gongura roselle andhra gongura pitwaa",
    "mainCategory": "vegetables",
    "category": "greens",
    "imageUrl": "images/chart_vegetables/gongura.jpg",
    "defaultQty": "1 కట్ట",
    "commonQtys": [
      "1 కట్ట",
      "2 కట్టలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా ఆకుకూర",
    "inStock": true
  },
  {
    "id": "veg_45_menthikura",
    "nameTe": "మెంతికూర",
    "nameEn": "Fenugreek Leaves (Methi)",
    "translit": "menthikura methi fenugreek leaves",
    "mainCategory": "vegetables",
    "category": "greens",
    "imageUrl": "images/chart_vegetables/menthikura.jpg",
    "defaultQty": "1 కట్ట",
    "commonQtys": [
      "1 కట్ట",
      "2 కట్టలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా ఆకుకూర",
    "inStock": true
  },
  {
    "id": "veg_46_thotakura",
    "nameTe": "తోటకూర",
    "nameEn": "Amaranth Leaves (Thotakura)",
    "translit": "thotakura amaranth chaulai leafy greens",
    "mainCategory": "vegetables",
    "category": "greens",
    "imageUrl": "images/chart_vegetables/thotakura.jpg",
    "defaultQty": "1 కట్ట",
    "commonQtys": [
      "1 కట్ట",
      "2 కట్టలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా ఆకుకూర",
    "inStock": true
  },
  {
    "id": "veg_47_mokkajonna",
    "nameTe": "మొక్కజొన్న (స్వీట్ కార్న్)",
    "nameEn": "Sweet Corn / Maize",
    "translit": "mokkajonna sweet corn bhutta maize",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "images/chart_vegetables/mokkajonna.jpg",
    "defaultQty": "2 కాయలు",
    "commonQtys": [
      "2 కాయలు",
      "4 కాయలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "fruit_1_mamidi_pandu",
    "nameTe": "మామిడి పండు (బంగినపల్లి)",
    "nameEn": "Sweet Mango (Banganapalli)",
    "translit": "mamidi pandu mango banganapalli aam sweet mango",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/mamidi_pandu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_2_arati_pandu",
    "nameTe": "అరటి పండు (చక్కెరకేళి / అమృతపాణి)",
    "nameEn": "Banana (Dozen)",
    "translit": "arati pandu aratipandlu banana kela amruthapani",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/arati_pandu.jpg",
    "defaultQty": "1 డజను",
    "commonQtys": [
      "1 డజను",
      "అర డజను",
      "2 డజన్లు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "fruit_3_apil",
    "nameTe": "ఆపిల్ (కాశ్మీర్ ఆపిల్)",
    "nameEn": "Apple (Red Apple)",
    "translit": "apil apple seb fresh apple kashmir apple",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/apil.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_4_draksha",
    "nameTe": "ద్రాక్ష (నల్ల & పచ్చ ద్రాక్ష)",
    "nameEn": "Fresh Grapes (Angoor)",
    "translit": "draksha angoor grapes black grapes green grapes",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/draksha.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_5_jama_pandu",
    "nameTe": "జామ పండు / జామకాయ",
    "nameEn": "Fresh Guava (Amrud)",
    "translit": "jama pandu jamakaya guava amrud",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/jama_pandu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_6_danimma",
    "nameTe": "దానిమ్మ (ఎర్ర గింజలు)",
    "nameEn": "Pomegranate (Anar)",
    "translit": "danimma anar pomegranate red seeds",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/danimma.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_7_kamala_pandu",
    "nameTe": "కమలా పండు / నారింజ",
    "nameEn": "Mandarin Orange (Santra)",
    "translit": "kamala pandu santra narinja orange mandarin",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/kamala_pandu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_8_battayi",
    "nameTe": "బత్తాయి / మోసంబి",
    "nameEn": "Sweet Lime (Mosambi)",
    "translit": "battayi mosambi sweet lime cheenikaya",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/battayi.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_9_boppayi",
    "nameTe": "బొప్పాయి / పరంగికాయ",
    "nameEn": "Fresh Papaya",
    "translit": "boppayi papaya papita parangikaya",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/boppayi.jpg",
    "defaultQty": "1 కాయ",
    "commonQtys": [
      "1 కాయ",
      "2 కాయలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_10_puchchakaya",
    "nameTe": "పుచ్చకాయ / తర్బూజ",
    "nameEn": "Watermelon (Tarbuj)",
    "translit": "puchchakaya tarbooja watermelon tarbuj",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/puchchakaya.jpg",
    "defaultQty": "1 కాయ",
    "commonQtys": [
      "1 కాయ",
      "2 కాయలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_11_panasa_pandu",
    "nameTe": "పనస పండు (తొనలు)",
    "nameEn": "Jackfruit",
    "translit": "panasa pandu jackfruit kathal panasa tonalu",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/panasa_pandu.jpg",
    "defaultQty": "500 గ్రాములు",
    "commonQtys": [
      "500 గ్రాములు",
      "1 కిలో"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_12_sitaphalam",
    "nameTe": "సీతాఫలం",
    "nameEn": "Custard Apple (Sitaphal)",
    "translit": "sitaphalam sitaphal custard apple sharifa",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/sitaphalam.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_13_sapota",
    "nameTe": "సపోటా / చిక్కూ",
    "nameEn": "Sapota / Chikoo",
    "translit": "sapota chikoo chiku sapota",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/sapota.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_14_neredu_pandu",
    "nameTe": "నేరేడు పండు (అల్ల నేరేడు)",
    "nameEn": "Black Jamun (Black Plum)",
    "translit": "neredu pandu jamun black plum alla neredu",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/neredu_pandu.jpg",
    "defaultQty": "500 గ్రాములు",
    "commonQtys": [
      "500 గ్రాములు",
      "1 కిలో"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_15_anasa_pandu",
    "nameTe": "అనాస పండు / పైనాపిల్",
    "nameEn": "Pineapple",
    "translit": "anasa pandu pineapple ananas",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/anasa_pandu.jpg",
    "defaultQty": "1 కాయ",
    "commonQtys": [
      "1 కాయ",
      "2 కాయలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_16_kharbuja",
    "nameTe": "ఖర్బూజ",
    "nameEn": "Muskmelon (Cantaloupe)",
    "translit": "kharbuja kharbhuja muskmelon cantaloupe",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/kharbuja.jpg",
    "defaultQty": "1 కాయ",
    "commonQtys": [
      "1 కాయ"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_17_kharjuram",
    "nameTe": "ఖర్జూరం (అరేబియన్ ఖర్జూరం)",
    "nameEn": "Dates (Kharjuram)",
    "translit": "kharjuram dates khajur dry fruit kharjuram",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/kharjuram.jpg",
    "defaultQty": "500 గ్రాములు",
    "commonQtys": [
      "500 గ్రాములు",
      "1 కిలో"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "fruit_18_nimmakaya",
    "nameTe": "నిమ్మకాయ (రసాల నిమ్మ)",
    "nameEn": "Juicy Lemon",
    "translit": "nimmakaya lemon nimbu fresh lemon",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/nimmakaya.jpg",
    "defaultQty": "4 కాయలు",
    "commonQtys": [
      "4 కాయలు",
      "10 కాయలు",
      "1 డజను"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "fruit_19_usirikaya",
    "nameTe": "ఉసిరికాయ (పెద్ద ఉసిరి)",
    "nameEn": "Indian Gooseberry (Amla)",
    "translit": "usirikaya amla gooseberry pedda usiri",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/usirikaya.jpg",
    "defaultQty": "500 గ్రాములు",
    "commonQtys": [
      "500 గ్రాములు",
      "1 కిలో"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_20_kobbarikaya",
    "nameTe": "కొబ్బరికాయ (తాజా కొబ్బరి)",
    "nameEn": "Fresh Coconut",
    "translit": "kobbarikaya coconut nariyal tenkaya kobbari kaya",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/kobbarikaya.jpg",
    "defaultQty": "1 కాయ",
    "commonQtys": [
      "1 కాయ",
      "2 కాయలు",
      "3 కాయలు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "fruit_21_tati_munjalu",
    "nameTe": "తాటి ముంజలు",
    "nameEn": "Ice Apple / Palmyra Fruit",
    "translit": "tati munjalu ice apple tadgola palmyra munjalu",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/tati_munjalu.jpg",
    "defaultQty": "1 డజను",
    "commonQtys": [
      "1 డజను",
      "అర డజను"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_22_regupandu",
    "nameTe": "రేగు పండు (గంగరేగు)",
    "nameEn": "Indian Jujube (Ber)",
    "translit": "regupandu ber jujube gangaregu",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/regupandu.jpg",
    "defaultQty": "500 గ్రాములు",
    "commonQtys": [
      "500 గ్రాములు",
      "1 కిలో"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_23_velagapandu",
    "nameTe": "వెలగపండు",
    "nameEn": "Wood Apple (Bael)",
    "translit": "velagapandu wood apple bael vinayaka chaviti",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/velagapandu.jpg",
    "defaultQty": "1 కాయ",
    "commonQtys": [
      "1 కాయ",
      "2 కాయలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_24_star_phrut",
    "nameTe": "స్టార్ ఫ్రూట్",
    "nameEn": "Star Fruit (Carambola)",
    "translit": "star phrut star fruit carambola kamrakh",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/star_phrut.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "250 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_25_anjira_pandu",
    "nameTe": "అంజీర పండు / అత్తిపండు",
    "nameEn": "Fresh Fig (Anjeer)",
    "translit": "anjira pandu anjeer fig fresh fig attipandu",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/anjira_pandu.jpg",
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "250 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": "offer",
    "tagLabelTelugu": "ప్రత్యేక ఆఫర్",
    "inStock": true
  },
  {
    "id": "fruit_26_lichi",
    "nameTe": "లీచీ పండు",
    "nameEn": "Fresh Litchi",
    "translit": "lichi litchi lychee fresh lichi",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/lichi.jpg",
    "defaultQty": "500 గ్రాములు",
    "commonQtys": [
      "500 గ్రాములు",
      "1 కిలో"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_27_straberri",
    "nameTe": "స్ట్రాబెర్రీ (ఫ్రెష్ బాక్స్)",
    "nameEn": "Fresh Strawberries",
    "translit": "straberri strawberry fresh strawberry box",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/straberri.jpg",
    "defaultQty": "1 బాక్స్",
    "commonQtys": [
      "1 బాక్స్",
      "2 బాక్సులు"
    ],
    "tagType": "offer",
    "tagLabelTelugu": "ప్రత్యేక ఆఫర్",
    "inStock": true
  },
  {
    "id": "fruit_28_beripandu",
    "nameTe": "బేరిపండు / పియర్",
    "nameEn": "Pear (Nashpati)",
    "translit": "beripandu pear nashpati pashpati",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/beripandu.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_29_kivi",
    "nameTe": "కివీ పండు",
    "nameEn": "Fresh Kiwi Fruit",
    "translit": "kivi kiwi kiwi fruit fresh kiwi",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/kivi.jpg",
    "defaultQty": "3 పీసులు",
    "commonQtys": [
      "3 పీసులు",
      "1 బాక్స్"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_30_dragan_phrut",
    "nameTe": "డ్రాగన్ ఫ్రూట్",
    "nameEn": "Dragon Fruit (Pitaya)",
    "translit": "dragan phrut dragon fruit pitaya pink fruit",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/dragan_phrut.jpg",
    "defaultQty": "1 కాయ",
    "commonQtys": [
      "1 కాయ",
      "2 కాయలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_31_avakado",
    "nameTe": "అవకాడో / వెన్న పండు",
    "nameEn": "Fresh Avocado (Butter Fruit)",
    "translit": "avakado avocado butter fruit venna pandu",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/avakado.jpg",
    "defaultQty": "1 కాయ",
    "commonQtys": [
      "1 కాయ",
      "2 కాయలు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_32_pamparapanasa",
    "nameTe": "పంపరపనస",
    "nameEn": "Pomelo (Grapefruit)",
    "translit": "pamparapanasa pomelo grapefruit chakotra",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/pamparapanasa.jpg",
    "defaultQty": "1 కాయ",
    "commonQtys": [
      "1 కాయ"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "fruit_33_ramaphalam",
    "nameTe": "రామాఫలం",
    "nameEn": "Bullock's Heart (Ramphal)",
    "translit": "ramaphalam ramphal bullocks heart",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "images/fruits/ramaphalam.jpg",
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "pooja_1",
    "nameTe": "అగరబత్తీలు (సుగంధ ధూపం)",
    "nameEn": "Incense Sticks (Agarbatti)",
    "translit": "agarbatti agarbattilu oodubathulu udubathulu dhoop sticks fragrance sticks pooja agarbatti",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "images/pooja/agarbattilu.jpg",
    "defaultQty": "1 ప్యాకెట్",
    "commonQtys": [
      "1 ప్యాకెట్",
      "2 ప్యాకెట్లు",
      "1 పెద్ద బాక్స్"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "పూజా విశేషం",
    "inStock": true
  },
  {
    "id": "pooja_2",
    "nameTe": "హారతి కర్పూరం బిళ్లలు",
    "nameEn": "Camphor Tablets (Karpooram)",
    "translit": "karpooram karpuram camphor harathi karpooram karpura billalu harathi deepam white camphor",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "images/pooja/karpooram.jpg",
    "defaultQty": "1 ప్యాకెట్",
    "commonQtys": [
      "1 ప్యాకెట్",
      "2 ప్యాకెట్లు",
      "1 డబ్బా"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "పూజా విశేషం",
    "inStock": true
  },
  {
    "id": "pooja_3",
    "nameTe": "పూజా పసుపు పొడి",
    "nameEn": "Sacred Pooja Turmeric",
    "translit": "pasupu pooja pasupu turmeric powder haldi mangala dravyam",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "images/pooja/pooja_pasupu.jpg",
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "పవిత్ర ద్రవ్యం",
    "inStock": true
  },
  {
    "id": "pooja_4",
    "nameTe": "సిందూరం / ఎర్ర కుంకుమ",
    "nameEn": "Divine Kumkum (Vermilion)",
    "translit": "kumkuma kumkum sindhooram sindhuram erra kumkum divine kumkum pooja kumkuma",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "images/pooja/kumkuma.jpg",
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "పవిత్ర ద్రవ్యం",
    "inStock": true
  },
  {
    "id": "pooja_5",
    "nameTe": "పూజా కొబ్బరికాయ (పీచుతో)",
    "nameEn": "Sacred Pooja Coconut (Tenkaya)",
    "translit": "kobbari kaya kobbarikaya tenkaya tenkay coconut pooja coconut nariyal kudaka peelu",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "images/pooja/pooja_kobbari.jpg",
    "defaultQty": "1 కాయ",
    "commonQtys": [
      "1 కాయ",
      "2 కాయలు",
      "3 కాయలు",
      "5 కాయలు"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "పూజా ఫలం",
    "inStock": true
  },
  {
    "id": "pooja_6",
    "nameTe": "పత్తి దీపం వత్తులు (పువ్వు వత్తులు)",
    "nameEn": "Cotton Wicks for Deepam (Patti Vattulu)",
    "translit": "patti vattulu vattulu deepam vattulu cotton wicks phool batti deeparadhana vattulu",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "images/pooja/patti_vattulu.jpg",
    "defaultQty": "1 ప్యాకెట్",
    "commonQtys": [
      "1 ప్యాకెట్",
      "2 ప్యాకెట్లు",
      "5 ప్యాకెట్లు"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "దీపారాధన",
    "inStock": true
  },
  {
    "id": "pooja_7",
    "nameTe": "దీపారాధన నూనె (నువ్వుల నూనె)",
    "nameEn": "Pooja Sesame Lamp Oil",
    "translit": "deeparadhana nune nuvvula nune pooja oil lamp oil sesame oil til oil deepam oil",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "images/pooja/deeparadhana_nune.jpg",
    "defaultQty": "500 మి.లీ.",
    "commonQtys": [
      "500 మి.లీ.",
      "1 లీటరు",
      "250 మి.లీ."
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "దీపారాధన",
    "inStock": true
  },
  {
    "id": "pooja_8",
    "nameTe": "సాంబ్రాణి ధూప్ కప్పులు",
    "nameEn": "Sambrani Dhoop Cups (Loban)",
    "translit": "sambrani sambrani dhoop dhoop cups loban guggilam dhoopam agarbatti dhoop",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "images/pooja/sambrani.jpg",
    "defaultQty": "1 ప్యాకెట్",
    "commonQtys": [
      "1 ప్యాకెట్",
      "2 ప్యాకెట్లు",
      "1 బాక్స్"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "సుగంధ ధూపం",
    "inStock": true
  },
  {
    "id": "pooja_9",
    "nameTe": "సుగంధ గంధం పొడి / బిళ్లలు",
    "nameEn": "Sandalwood Powder (Gandham)",
    "translit": "gandham gandham podi sandalwood powder chandan pooja chandan gandhapu billalu",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "images/pooja/gandham.jpg",
    "defaultQty": "50 గ్రాములు",
    "commonQtys": [
      "50 గ్రాములు",
      "100 గ్రాములు",
      "1 డబ్బా"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "సుగంధ ద్రవ్యం",
    "inStock": true
  },
  {
    "id": "pooja_10",
    "nameTe": "తాజా తమలపాకులు (పూజ తాంబూలం)",
    "nameEn": "Fresh Betel Leaves (Tamalapakulu)",
    "translit": "tamalapakulu tamalapaku betel leaves paan akulu tamboolam pooja leaves vettilai",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "images/pooja/tamalapakulu.jpg",
    "defaultQty": "1 కట్ట",
    "commonQtys": [
      "1 కట్ట",
      "2 కట్టలు",
      "10 ఆకులు",
      "25 ఆకులు"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "తాంబూలం",
    "inStock": true
  },
  {
    "id": "pooja_11",
    "nameTe": "పూజా పోక వక్కలు",
    "nameEn": "Betel Nuts (Vakkalu / Supari)",
    "translit": "vakkalu poka vakkalu supari betel nut pooja vakkalu tamboolam vakkalu areca nut",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "images/pooja/vakkalu.jpg",
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "తాంబూలం",
    "inStock": true
  },
  {
    "id": "pooja_12",
    "nameTe": "మట్టి ప్రమిదలు / దీపాలు",
    "nameEn": "Clay Diyas (Matti Pramadalu)",
    "translit": "matti pramidalu matti deepalu clay diyas deepalu diwali diyas deepam pramidalu clay lamps",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "images/pooja/matti_pramidalu.jpg",
    "defaultQty": "1 జత (2 నంబర్లు)",
    "commonQtys": [
      "1 జత",
      "5 జతలు",
      "1 డజను",
      "21 ప్రమిదలు"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "దీపారాధన",
    "inStock": true
  },
  {
    "id": "pooja_13",
    "nameTe": "బంతి & మల్లె పూల మాల",
    "nameEn": "Pooja Flower Garland (Poolu)",
    "translit": "poolu pooja poolu banti poolu malle poolu marigold garland flower garland gajra danda",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "images/pooja/poolu_mala.jpg",
    "defaultQty": "1 కట్ట / మాల",
    "commonQtys": [
      "1 కట్ట",
      "2 కట్టలు",
      "1 మాల",
      "1 మూర"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "పూజా పుష్పం",
    "inStock": true
  },
  {
    "id": "pooja_14",
    "nameTe": "పవిత్ర రక్షా సూత్రం / కంకణం",
    "nameEn": "Sacred Protection Thread (Kankanam)",
    "translit": "kankanam raksha sutram pooja thread mauli kalawa red yellow thread pavitra daram",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "images/pooja/kankanam.jpg",
    "defaultQty": "1 పీస్",
    "commonQtys": [
      "1 పీస్",
      "2 పీసులు",
      "5 పీసులు"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "రక్షా సూత్రం",
    "inStock": true
  },
  {
    "id": "pooja_15",
    "nameTe": "అక్షింతలు (పూజా పవిత్ర బియ్యం)",
    "nameEn": "Sacred Akshintalu (Pooja Rice)",
    "translit": "akshintalu akshatalu pooja biyyam pasupu biyyam sacred rice blessed rice",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "images/pooja/akshintalu.jpg",
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "ఆశీర్వాదం",
    "inStock": true
  },
  {
    "id": "pooja_16",
    "nameTe": "యజ్ఞోపవీతం (పవిత్ర జంధ్యం)",
    "nameEn": "Sacred Jandhyam (Yajnopavita)",
    "translit": "jandhyam yagnopaveetham sacred thread pooja thread brahmin thread",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "images/pooja/jandhyam.jpg",
    "defaultQty": "1 జత",
    "commonQtys": [
      "1 జత",
      "2 జతలు"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "పవిత్రం",
    "inStock": true
  },
  {
    "id": "pooja_17",
    "nameTe": "కలశం రాగి / ఇత్తడి చెంబు",
    "nameEn": "Pooja Kalasham Pot (Vessel)",
    "translit": "kalasham chembu pooja kalash brass chembu copper pot pooja patra",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "images/pooja/kalasham.jpg",
    "defaultQty": "1 పీస్",
    "commonQtys": [
      "1 పీస్"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "కలశ స్థాపన",
    "inStock": true
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    GROCERY_CATEGORIES,
    STANDARD_QUANTITIES,
    TELUGU_UNITS,
    GROCERY_ITEMS
  };
}
