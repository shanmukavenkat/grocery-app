// కిరాణా & పూజా సామాగ్రి డేటాబేస్ (Telugu Grocery, Produce & Hindu Pooja Catalog)
// Built with real NRIOL images & verified sacred Hindu pooja items. Zero emojis.

const GROCERY_CATEGORIES = [
  { id: 'all', name: 'అన్నీ', nameEn: 'All Items', icon: 'fa-layer-group', color: 'bg-emerald-600' },
  { id: 'groceries', name: 'కిరాణా సరుకులు', nameEn: 'Groceries & Dals', icon: 'fa-wheat-awn', color: 'bg-amber-600' },
  { id: 'vegetables', name: 'కూరగాయలు & ఆకులు', nameEn: 'Vegetables & Greens', icon: 'fa-carrot', color: 'bg-green-600' },
  { id: 'fruits', name: 'తాజా పండ్లు', nameEn: 'Fresh Fruits', icon: 'fa-apple-whole', color: 'bg-rose-600' },
  { id: 'pooja', name: 'పూజా సామాగ్రి', nameEn: 'Hindu Pooja Items', icon: 'fa-om', color: 'bg-orange-600' }
];

// Everyday Telugu Quantity Options with clear naming and standard equivalents
const STANDARD_QUANTITIES = [
  { id: 'pavu_kg', label: 'పావు కిలో', sub: '250 గ్రాములు', defaultUnit: 'పావు కిలో' },
  { id: 'ara_kg', label: 'అర కిలో', sub: '500 గ్రాములు', defaultUnit: 'అర కిలో' },
  { id: 'muppavu_kg', label: 'ముప్పావు కిలో', sub: '750 గ్రాములు', defaultUnit: 'ముప్పావు కిలో' },
  { id: '1_kg', label: '1 కిలో', sub: '1000 గ్రాములు', defaultUnit: '1 కిలో' },
  { id: '2_kg', label: '2 కిలోలు', sub: '2000 గ్రాములు', defaultUnit: '2 కిలోలు' },
  { id: '5_kg', label: '5 కిలోలు', sub: '5 KG', defaultUnit: '5 కిలోలు' },
  { id: '10_kg', label: '10 కిలోలు', sub: '10 KG', defaultUnit: '10 కిలోలు' },
  { id: '25_kg_basta', label: '25 కిలోల బస్తా', sub: '1 బ్యాగ్', defaultUnit: '25 కిలోల బస్తా' },
  { id: '50_gm', label: '50 గ్రాములు', sub: '50 gm', defaultUnit: '50 గ్రాములు' },
  { id: '100_gm', label: '100 గ్రాములు', sub: '100 gm', defaultUnit: '100 గ్రాములు' },
  { id: '200_gm', label: '200 గ్రాములు', sub: '200 gm', defaultUnit: '200 గ్రాములు' },
  { id: 'ara_liter', label: 'అర లీటరు', sub: '500 మి.లీ', defaultUnit: 'అర లీటరు' },
  { id: '1_liter', label: '1 లీటరు', sub: '1000 మి.లీ', defaultUnit: '1 లీటరు' },
  { id: '2_liter', label: '2 లీటర్లు', sub: '2 Liters', defaultUnit: '2 లీటర్లు' },
  { id: '5_liter', label: '5 లీటర్ల డబ్బా', sub: '5 Liters Can', defaultUnit: '5 లీటర్ల డబ్బా' },
  { id: '1_pkt', label: '1 ప్యాకెట్', sub: '1 Packet', defaultUnit: '1 ప్యాకెట్' },
  { id: '2_pkt', label: '2 ప్యాకెట్లు', sub: '2 Packets', defaultUnit: '2 ప్యాకెట్లు' },
  { id: '1_katta', label: '1 కట్ట', sub: '1 Bunch', defaultUnit: '1 కట్ట' },
  { id: '2_katta', label: '2 కట్టలు', sub: '2 Bunches', defaultUnit: '2 కట్టలు' },
  { id: '1_kaya', label: '1 కాయ', sub: '1 Piece', defaultUnit: '1 కాయ' },
  { id: '2_kayalu', label: '2 కాయలు', sub: '2 Pieces', defaultUnit: '2 కాయలు' },
  { id: '1_dozen', label: '1 డజను', sub: '12 నంబర్లు', defaultUnit: '1 డజను' },
  { id: 'ara_dozen', label: 'అర డజను', sub: '6 నంబర్లు', defaultUnit: 'అర డజను' },
  { id: '1_jatha', label: '1 జత', sub: '2 Pieces (Pair)', defaultUnit: '1 జత' },
  { id: '1_dabba', label: '1 డబ్బా / బాక్స్', sub: '1 Box', defaultUnit: '1 డబ్బా' },
  { id: '1_bottle', label: '1 బాటిల్', sub: '1 Bottle', defaultUnit: '1 బాటిల్' }
];

const TELUGU_UNITS = [
  'కిలోలు',
  'గ్రాములు',
  'లీటర్లు',
  'మిల్లీ లీటర్లు',
  'ప్యాకెట్లు',
  'కట్టలు',
  'కాయలు',
  'డజన్లు',
  'జతలు',
  'డబ్బాలు',
  'బాటిళ్ళు',
  'బస్తాలు',
  'నంబర్లు'
];

const GROCERY_ITEMS = [
  {
    "id": "nr_sona_rice_1",
    "nameTe": "సోనా మసూరి బియ్యం (పాత బియ్యం)",
    "nameEn": "Sona Masoori Rice (Aged Rice)",
    "translit": "sona masoori biyyam biyam rice sona masuri raw rice steam rice white rice rice bag",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/raw.jpg",
    "price": 1450,
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
    "id": "nr_putnala_1",
    "nameTe": "పుట్నాల పప్పు (వేయించిన శనగ పప్పు)",
    "nameEn": "Roasted Gram Dal (Putnala Pappu)",
    "translit": "putnala pappu putnalapappu putnalu roasted chana dal senaga pappu roasted bengal gram vepudu senagapappu",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "https://www.nriol.com/images/bengal-gram.jpg",
    "price": 38,
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
    "id": "nr_1",
    "nameTe": "శనగ పప్పు",
    "nameEn": "Bengal Gram",
    "translit": "senaga pappu bengal gram శనగ పప్పు putnala putnalapappu roasted chana dal",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "https://www.nriol.com/images/bengal-gram.jpg",
    "price": 60,
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
    "id": "nr_2",
    "nameTe": "పెసర పప్పు",
    "nameEn": "Green Gram",
    "translit": "pesara pappu green gram పెసర పప్పు pesarapappu moong dal",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "https://www.nriol.com/images/green-gram.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_3",
    "nameTe": "కంది పప్పు",
    "nameEn": "Red Gram",
    "translit": "kandhi pappu red gram కంది పప్పు kandi kandipappu toor dal tuvar",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "https://www.nriol.com/images/red-gram.jpg",
    "price": 60,
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
    "id": "nr_4",
    "nameTe": "మినపప్పు",
    "nameEn": "Black Gram",
    "translit": "minappappu black gram మినపప్పు minapa pappu minapappu urad dal uddipappu",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "https://www.nriol.com/images/black-gram.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_5",
    "nameTe": "గసగసాలు",
    "nameEn": "Poppy seeds",
    "translit": "gasalu gasagasaalu poppy seeds గసగసాలు",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "https://www.nriol.com/images/poppy.jpg",
    "price": 50,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_6",
    "nameTe": "ధనియాలు",
    "nameEn": "Coriander seeds",
    "translit": "dhaniyalu coriander seeds ధనియాలు",
    "mainCategory": "vegetables",
    "category": "greens",
    "imageUrl": "https://www.nriol.com/images/cor.jpg",
    "price": 15,
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
    "id": "nr_7",
    "nameTe": "ఆవాలు",
    "nameEn": "Mustard seeds",
    "translit": "avalu mustard seeds ఆవాలు",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "https://www.nriol.com/images/mustard.jpg",
    "price": 50,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_8",
    "nameTe": "జీలకర్ర",
    "nameEn": "Cumin seeds",
    "translit": "jeelakarra cumin seeds జీలకర్ర",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "https://www.nriol.com/images/cumin.jpg",
    "price": 50,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_9",
    "nameTe": "మినప పప్పు",
    "nameEn": "Urad dal",
    "translit": "uddipappu urad dal మినప పప్పు minapa pappu minapappu",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "https://www.nriol.com/images/urad.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_10",
    "nameTe": "పల్లీలు",
    "nameEn": "Ground Nuts",
    "translit": "pallilu ground nuts పల్లీలు",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "https://www.nriol.com/images/nuts.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_11",
    "nameTe": "పసుపు",
    "nameEn": "Turmeric",
    "translit": "pasupu turmeric పసుపు",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "https://www.nriol.com/images/turmeric-seed.jpg",
    "price": 50,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "nr_12",
    "nameTe": "వాము",
    "nameEn": "Ajowan",
    "translit": "vamu ajowan వాము",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/ajowan.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_13",
    "nameTe": "మెంతులు",
    "nameEn": "Fenugreek Seeds",
    "translit": "menthulu fenugreek seeds మెంతులు",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "https://www.nriol.com/images/fenugreek.jpg",
    "price": 50,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_14",
    "nameTe": "సగ్గుబియ్యం",
    "nameEn": "Sago",
    "translit": "saggubiyyam sago సగ్గుబియ్యం",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/sago.jpg",
    "price": 1450,
    "defaultQty": "25 కిలోల బస్తా",
    "commonQtys": [
      "25 కిలోల బస్తా",
      "10 కిలోలు",
      "5 కిలోలు",
      "1 కిలో"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_15",
    "nameTe": "అటుకులు",
    "nameEn": "Flattend Rice or Rice Flakes",
    "translit": "atukulu flattend rice or flakes అటుకులు",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/flattend.jpg",
    "price": 1450,
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
    "id": "nr_16",
    "nameTe": "ఉలవలు",
    "nameEn": "Horse Gram",
    "translit": "ulavalu horse gram ఉలవలు",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "https://www.nriol.com/images/horsegram.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_17",
    "nameTe": "జొన్నలు",
    "nameEn": "Millet",
    "translit": "jonnalu millet జొన్నలు",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/millet.jpg",
    "price": 65,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_18",
    "nameTe": "మొక్కజొన్న",
    "nameEn": "Maize",
    "translit": "mokka jonna maize మొక్కజొన్న",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/maize.jpg",
    "price": 65,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_19",
    "nameTe": "ఉప్పు",
    "nameEn": "Salt",
    "translit": "uppu salt ఉప్పు",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "https://www.nriol.com/images/salt.jpg",
    "price": 50,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "nr_20",
    "nameTe": "సజ్జలు",
    "nameEn": "Pearl Millet",
    "translit": "sazzalu pearl millet సజ్జలు",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/pearl-millet.jpg",
    "price": 65,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_21",
    "nameTe": "అలసందలు",
    "nameEn": "Black Eyed Beans",
    "translit": "alasandhalu black eyed beans అలసందలు",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/black-eyedbeans.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_22",
    "nameTe": "రాగులు",
    "nameEn": "Finger Millet",
    "translit": "ragulu finger millet రాగులు",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/finger-millet.jpg",
    "price": 65,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_23",
    "nameTe": "చిక్కడు గింజుల",
    "nameEn": "Kidney beans",
    "translit": "cikkadu ginjulu kidney beans చిక్కడు గింజుల",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/kidney-beans.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_24",
    "nameTe": "శనగపిండి",
    "nameEn": "Gram Flour",
    "translit": "senaga pindi gram flour శనగపిండి",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/gram-flour.jpg",
    "price": 65,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_25",
    "nameTe": "మొక్కజొన్న పిండి",
    "nameEn": "Corn Flour",
    "translit": "mokka jonna pindi corn flour మొక్కజొన్న పిండి",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/corn-flour.jpg",
    "price": 65,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_26",
    "nameTe": "గోధుమ పిండి",
    "nameEn": "Wheat Flour",
    "translit": "godhuma pindi wheat flour గోధుమ పిండి",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/wheat-flour.jpg",
    "price": 65,
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
    "id": "nr_27",
    "nameTe": "బియ్యం పిండి",
    "nameEn": "Rice Flour",
    "translit": "biyappindi rice flour బియ్యం పిండి",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/rice-flour.jpg",
    "price": 1450,
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
    "id": "nr_28",
    "nameTe": "రాగి పిండి",
    "nameEn": "Finger Millet flour",
    "translit": "ragi pindi finger millet flour రాగి పిండి",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/millet-flour.jpg",
    "price": 65,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_29",
    "nameTe": "జొన్నలు పిండి",
    "nameEn": "Jowar Flour",
    "translit": "jonna pindi jowar flour జొన్నలు పిండి",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/jowar-flour.jpg",
    "price": 65,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_30",
    "nameTe": "కొబ్బరి పిండి",
    "nameEn": "Coconut Flour",
    "translit": "kobbari pindi coconut flour కొబ్బరి పిండి kaya kobbarikaya tenkaya nariyal",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/coconut-flour.jpg",
    "price": 65,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_31",
    "nameTe": "సజ్జ పిండి",
    "nameEn": "Pearl Millet Flour",
    "translit": "sajja pindi pearl millet flour సజ్జ పిండి",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/pearl-millet-flour.jpg",
    "price": 65,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_32",
    "nameTe": "వంగ",
    "nameEn": "Brinjal",
    "translit": "vankaya brinjal వంగ eggplant baingan",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/brin.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_33",
    "nameTe": "బీరకాయ",
    "nameEn": "Ridge Gourd",
    "translit": "beerakaya ridge gourd బీరకాయ",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/ridge.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_34",
    "nameTe": "పొట్లకాయ",
    "nameEn": "Snake Gourd",
    "translit": "potlakaya snake gourd పొట్లకాయ",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/snake.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_35",
    "nameTe": "బెంగుళూరు మిరపకాయ",
    "nameEn": "Capsicum",
    "translit": "bengulooru mirapakaya capsicum బెంగుళూరు మిరపకాయ",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/capsicum.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_36",
    "nameTe": "క్యాబేజీ",
    "nameEn": "Cabbage",
    "translit": "cabbage క్యాబేజీ",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/cabbage.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_37",
    "nameTe": "గోబీ పుష్పం / కాలీఫ్లవర్",
    "nameEn": "Cauliflower",
    "translit": "gobi puvvu cauliflower గోబీ పుష్పం కాలీఫ్లవర్",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/cauli.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_38",
    "nameTe": "క్యారెట్",
    "nameEn": "Carrot",
    "translit": "carrot క్యారెట్",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/carrot.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_39",
    "nameTe": "బటానీలు",
    "nameEn": "Green Peas",
    "translit": "bataneelu green peas బటానీలు",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/peas.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_40",
    "nameTe": "నిమ్మకాయ",
    "nameEn": "Lemon",
    "translit": "nimma pandu lemon నిమ్మకాయ",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/lemon.jpg",
    "price": 20,
    "defaultQty": "4 కాయలు",
    "commonQtys": [
      "4 కాయలు",
      "10 కాయలు",
      "1 డజను"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_41",
    "nameTe": "ఉల్లిపాయ",
    "nameEn": "Onion",
    "translit": "ullipayalu yerra gaddalu onion ఉల్లిపాయ ullipaya pyaz vengayam",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/onion.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "నిత్యావసరం",
    "inStock": true
  },
  {
    "id": "nr_42",
    "nameTe": "వెల్లుల్లి",
    "nameEn": "Garlic",
    "translit": "velluli payulu tellapaayalu garlic వెల్లుల్లి",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/garlic.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_43",
    "nameTe": "బంగాళాదుంప",
    "nameEn": "Potato",
    "translit": "alu gadda bangalu dumpa potato బంగాళాదుంప bangala aloo batata",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/potato.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "నిత్యావసరం",
    "inStock": true
  },
  {
    "id": "nr_44",
    "nameTe": "టమోటా",
    "nameEn": "Tomato",
    "translit": "tamota tomato టమోటా tamato tamatar",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/tomato.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "నిత్యావసరం",
    "inStock": true
  },
  {
    "id": "nr_45",
    "nameTe": "బీన్స్",
    "nameEn": "Beans",
    "translit": "beans బీన్స్",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/beans.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_46",
    "nameTe": "దోసకాయ",
    "nameEn": "Cucumber",
    "translit": "dosakaya cucumber దోసకాయ",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/cucumber.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_47",
    "nameTe": "ములక్కాడ",
    "nameEn": "Drum Stick",
    "translit": "mulakkada drum stick ములక్కాడ",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/drum.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_48",
    "nameTe": "బెండ కాయ",
    "nameEn": "Ladies Finger",
    "translit": "bendakaye ladies finger బెండ కాయ bendakaya okra bhindi",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/lady.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_49",
    "nameTe": "ముల్లంగి",
    "nameEn": "Radish",
    "translit": "mullangi radish ముల్లంగి",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/raddish.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_50",
    "nameTe": "పచ్చిమిర్చి",
    "nameEn": "Green Chilli",
    "translit": "pachhimirapakai green chilli పచ్చిమిర్చి",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/green.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_51",
    "nameTe": "కాకరకాయ",
    "nameEn": "Bitter Gourd",
    "translit": "kakarakaya bitter gourd కాకరకాయ",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/bitter.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_52",
    "nameTe": "మిరపకాయ",
    "nameEn": "Red Chilli",
    "translit": "yendu mirapa kaaya red chilli మిరపకాయ",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/chilli.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_53",
    "nameTe": "పుట్టగొడుగుల",
    "nameEn": "Mushroom",
    "translit": "puttagodugulu mushroom పుట్టగొడుగుల",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/mushroom.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_54",
    "nameTe": "బీన్స్",
    "nameEn": "Broad beans",
    "translit": "chikkudu kaya broad beans బీన్స్",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/broadbeans.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_55",
    "nameTe": "బీట్రూట్",
    "nameEn": "Beetroot",
    "translit": "beetroot బీట్రూట్",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/beetroot.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_56",
    "nameTe": "చిలగడదుంప",
    "nameEn": "Sweet Potato",
    "translit": "chilagada dumpa kandagadda sweet potato చిలగడదుంప alu gadda bangala aloo batata",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/sweetpotato.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "నిత్యావసరం",
    "inStock": true
  },
  {
    "id": "nr_57",
    "nameTe": "దొండకాయ",
    "nameEn": "Tindoora",
    "translit": "dondakaya tindoora దొండకాయ",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/tindoora.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_58",
    "nameTe": "బూడిద గుమ్మడి కాయ",
    "nameEn": "Ash Gourd",
    "translit": "budidha gummadi kaya ash gourd బూడిద గుమ్మడి కాయ",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/ash.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_59",
    "nameTe": "సొరకాయ",
    "nameEn": "Bottle Gourd",
    "translit": "anabakaya bottle gourd సొరకాయ",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/bottle.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_60",
    "nameTe": "గుమ్మడికాయ",
    "nameEn": "Pumpkin",
    "translit": "gummadikaya pumpkin గుమ్మడికాయ",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/pumpkin.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_61",
    "nameTe": "ఆనపకాయ",
    "nameEn": "Field Beans",
    "translit": "anapakaya field beans ఆనపకాయ",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/fireld.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_62",
    "nameTe": "అనాస పండు",
    "nameEn": "Pineapple",
    "translit": "anasa pandu pineapple అనాస పండు",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/pineapple.jpg",
    "price": 80,
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
    "id": "nr_63",
    "nameTe": "దానిమ్మ పండు",
    "nameEn": "Pomegranate",
    "translit": "dhanimma pandu pomegranate దానిమ్మ పండు",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/pomo.jpg",
    "price": 120,
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
    "id": "nr_64",
    "nameTe": "అరట పండుి",
    "nameEn": "Banana",
    "translit": "arati pandu banana అరట పండుి aratipandlu kela",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/banana.jpg",
    "price": 60,
    "defaultQty": "1 డజను",
    "commonQtys": [
      "1 డజను",
      "అర డజను",
      "2 డజన్లు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "nr_65",
    "nameTe": "అరటికాయ",
    "nameEn": "Banana-raw",
    "translit": "aratikaya banana raw అరటికాయ arati pandu aratipandlu kela",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/b-raw.jpg",
    "price": 60,
    "defaultQty": "1 డజను",
    "commonQtys": [
      "1 డజను",
      "అర డజను",
      "2 డజన్లు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా పండ్లు",
    "inStock": true
  },
  {
    "id": "nr_66",
    "nameTe": "మామిడి",
    "nameEn": "Mango",
    "translit": "mamidi mango మామిడి",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/mango.jpg",
    "price": 120,
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
    "id": "nr_67",
    "nameTe": "ద్రాక్ష",
    "nameEn": "Grapes",
    "translit": "draksha grapes ద్రాక్ష",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/grapes.jpg",
    "price": 120,
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
    "id": "nr_68",
    "nameTe": "పనస పండు",
    "nameEn": "Jackfruit",
    "translit": "panasa pandu jackfruit పనస పండు",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/jack.jpg",
    "price": 80,
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
    "id": "nr_69",
    "nameTe": "జామ",
    "nameEn": "Guava",
    "translit": "jama pandu guava జామ",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/guava.jpg",
    "price": 120,
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
    "id": "nr_70",
    "nameTe": "పుచ్చకాయ",
    "nameEn": "Water Melon",
    "translit": "puccakaya water melon పుచ్చకాయ",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/water-melon.jpg",
    "price": 120,
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
    "id": "nr_71",
    "nameTe": "దోసకాయ",
    "nameEn": "Musk Melon",
    "translit": "dosakaya musk melon దోసకాయ",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/musk.jpg",
    "price": 120,
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
    "id": "nr_72",
    "nameTe": "ఆపిల్ పండు",
    "nameEn": "Apple",
    "translit": "apil pandu apple ఆపిల్ పండు",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/apple.jpg",
    "price": 120,
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
    "id": "nr_73",
    "nameTe": "సపోటా",
    "nameEn": "Chickoo",
    "translit": "sapota chickoo సపోటా",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/chickoo.jpg",
    "price": 120,
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
    "id": "nr_74",
    "nameTe": "సీతాఫలం",
    "nameEn": "Custard apple",
    "translit": "sita phalamu custard apple సీతాఫలం",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/custadr.jpg",
    "price": 120,
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
    "id": "nr_75",
    "nameTe": "ఖర్జూరం",
    "nameEn": "Dates",
    "translit": "kharjuram dates ఖర్జూరం",
    "mainCategory": "groceries",
    "category": "dryfruits",
    "imageUrl": "https://www.nriol.com/images/dates.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "నాణ్యమైనది",
    "inStock": true
  },
  {
    "id": "nr_76",
    "nameTe": "అత్తి",
    "nameEn": "Fig",
    "translit": "atti fig అత్తి",
    "mainCategory": "groceries",
    "category": "dryfruits",
    "imageUrl": "https://www.nriol.com/images/fig.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "నాణ్యమైనది",
    "inStock": true
  },
  {
    "id": "nr_77",
    "nameTe": "నారింజ",
    "nameEn": "Orange",
    "translit": "narinja orange నారింజ",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/orange.jpg",
    "price": 120,
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
    "id": "nr_78",
    "nameTe": "బొప్పాయి",
    "nameEn": "Papaya",
    "translit": "boppaya paringa pandu papaya బొప్పాయి",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/papaya.jpg",
    "price": 80,
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
    "id": "nr_79",
    "nameTe": "గూస్ బెర్రీ",
    "nameEn": "Goose Berry",
    "translit": "usirikaaya goose berry గూస్ బెర్రీ",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/goose.jpg",
    "price": 120,
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
    "id": "nr_80",
    "nameTe": "కొబ్బరి",
    "nameEn": "Coconut",
    "translit": "kobbari kaaya coconut కొబ్బరి kaya kobbarikaya tenkaya nariyal",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/coconut.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_81",
    "nameTe": "మామిడి",
    "nameEn": "Raw Mango",
    "translit": "maamidi kaaya raw mango మామిడి",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/rawmango.jpg",
    "price": 120,
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
    "id": "nr_82",
    "nameTe": "మొక్క జొన్న",
    "nameEn": "Corn",
    "translit": "mokkajonna corn మొక్క జొన్న",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/corn.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_83",
    "nameTe": "చెర్రీ పండు",
    "nameEn": "Cherries",
    "translit": "cherry pandu cherries చెర్రీ పండు",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/cherry.jpg",
    "price": 120,
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
    "id": "nr_84",
    "nameTe": "రేగు",
    "nameEn": "Plum",
    "translit": "regu plum రేగు",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/plum.jpg",
    "price": 120,
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
    "id": "nr_85",
    "nameTe": "నల్ల కిష్మిష్",
    "nameEn": "Black Current",
    "translit": "nalla kishmish black current నల్ల కిష్మిష్",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/blackcurrant.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_86",
    "nameTe": "సీమ పనస",
    "nameEn": "Bread Fruit",
    "translit": "seema panasa bread fruit సీమ పనస",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/breadfruit.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_87",
    "nameTe": "జీడి పప్పు",
    "nameEn": "Cashewnut",
    "translit": "jeedi mamidi cashewnut జీడి పప్పు",
    "mainCategory": "groceries",
    "category": "dryfruits",
    "imageUrl": "https://www.nriol.com/images/cashewnut.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_88",
    "nameTe": "లీచీ పండు",
    "nameEn": "Litchi",
    "translit": "litchi pandu లీచీ పండు",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/litchi.jpg",
    "price": 120,
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
    "id": "nr_89",
    "nameTe": "తాటి",
    "nameEn": "Palmyrah",
    "translit": "thati palmyrah తాటి",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/palmyrah.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_90",
    "nameTe": "పీచ్ పండు",
    "nameEn": "Peach",
    "translit": "peach pandu పీచ్ పండు",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/peach.jpg",
    "price": 120,
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
    "id": "nr_91",
    "nameTe": "రాస్ బెర్రీస్",
    "nameEn": "Rasberries",
    "translit": "rasberries రాస్ బెర్రీస్",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/rasberries.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_92",
    "nameTe": "స్ట్రాబెర్రీ",
    "nameEn": "Straw Berry",
    "translit": "straw berry స్ట్రాబెర్రీ",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/strawberry.jpg",
    "price": 120,
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
    "id": "nr_93",
    "nameTe": "ఖర్జూర పండు",
    "nameEn": "Wild Date fruit",
    "translit": "karjoora pandu wild date fruit ఖర్జూర పండు",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/wilddate.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_94",
    "nameTe": "నేరేడు",
    "nameEn": "Black plum",
    "translit": "neredu black plum నేరేడు",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/black-plum.jpg",
    "price": 120,
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
    "id": "nr_95",
    "nameTe": "అల్ల నేరేడు",
    "nameEn": "Black Berry",
    "translit": "alla neredu black berry అల్ల నేరేడు",
    "mainCategory": "fruits",
    "category": "fruits",
    "imageUrl": "https://www.nriol.com/images/blue-berry.jpg",
    "price": 120,
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
    "id": "nr_96",
    "nameTe": "సొంపు",
    "nameEn": "Aniseed",
    "translit": "sopu aniseed సొంపు",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "https://www.nriol.com/images/aniseed.jpg",
    "price": 50,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_97",
    "nameTe": "ఇంగువ",
    "nameEn": "Asafoetida",
    "translit": "inguva asafoetida ఇంగువ",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "https://www.nriol.com/images/hing.jpg",
    "price": 50,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_98",
    "nameTe": "బిర్యాని ఆకు",
    "nameEn": "Bay Leaf",
    "translit": "masala aku biryani aaku bay leaf బిర్యాని ఆకు",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "https://www.nriol.com/images/bay.jpg",
    "price": 50,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_99",
    "nameTe": "మిరియాలు",
    "nameEn": "Black Pepper",
    "translit": "miriyalu black pepper మిరియాలు",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "https://www.nriol.com/images/pepper.jpg",
    "price": 50,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_100",
    "nameTe": "ఏలకుల",
    "nameEn": "Cardamom",
    "translit": "elakulu cardamom ఏలకుల",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "https://www.nriol.com/images/carda.jpg",
    "price": 50,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_101",
    "nameTe": "దాల్చిన",
    "nameEn": "Cinnamon",
    "translit": "dalchina chekka or dalchini cinnamon దాల్చిన",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "https://www.nriol.com/images/cinnmon.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_102",
    "nameTe": "లవంగాలు",
    "nameEn": "Cloves",
    "translit": "lavangam cloves లవంగాలు",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "https://www.nriol.com/images/cloves.jpg",
    "price": 50,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_103",
    "nameTe": "కుంకుమ పుష్పం",
    "nameEn": "Saffron",
    "translit": "kumkum puvvu saffron కుంకుమ పుష్పం",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/saffron.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_104",
    "nameTe": "సోపు",
    "nameEn": "Fennel",
    "translit": "peddajeelakarra or sopu fennel సోపు",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/sopapu.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_105",
    "nameTe": "అల్లం",
    "nameEn": "Ginger",
    "translit": "allam ginger అల్లం",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "https://www.nriol.com/images/ginger.jpg",
    "price": 50,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_106",
    "nameTe": "ఎండు మిరపకాయలు",
    "nameEn": "Red Chillies",
    "translit": "yendu mirapakayalu red chillies ఎండు మిరపకాయలు",
    "mainCategory": "vegetables",
    "category": "vegetables",
    "imageUrl": "https://www.nriol.com/images/red.jpg",
    "price": 40,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "2 కిలోలు",
      "250 గ్రాములు"
    ],
    "tagType": "fresh",
    "tagLabelTelugu": "తాజా కూరగాయ",
    "inStock": true
  },
  {
    "id": "nr_107",
    "nameTe": "చింతపండు",
    "nameEn": "Tamarind",
    "translit": "chintha pandu tamarind చింతపండు",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "https://www.nriol.com/images/tama.jpg",
    "price": 50,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "nr_108",
    "nameTe": "పసుపు పొడి",
    "nameEn": "Turmeric powder",
    "translit": "pasupu turmeric powder పసుపు పొడి",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "https://www.nriol.com/images/turmeric-seed.jpg",
    "price": 50,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "ముఖ్యమైనది",
    "inStock": true
  },
  {
    "id": "nr_109",
    "nameTe": "జీడిపప్పు",
    "nameEn": "Cashewnuts",
    "translit": "jeedi pappu cashewnuts జీడిపప్పు",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "https://www.nriol.com/images/cashew.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_110",
    "nameTe": "ఎండుద్రాక్ష",
    "nameEn": "Raisins",
    "translit": "yendu dhraksha raisins ఎండుద్రాక్ష",
    "mainCategory": "groceries",
    "category": "dryfruits",
    "imageUrl": "https://www.nriol.com/images/raisina.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_111",
    "nameTe": "బాదం",
    "nameEn": "Almond",
    "translit": "badham almond బాదం",
    "mainCategory": "groceries",
    "category": "dryfruits",
    "imageUrl": "https://www.nriol.com/images/almond.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_112",
    "nameTe": "సీమ బాదం",
    "nameEn": "Apricot",
    "translit": "seema badham apricot సీమ బాదం",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/apricot.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_113",
    "nameTe": "వక్కలు",
    "nameEn": "Beetal Nut",
    "translit": "vakkalu beetal nut వక్కలు",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/beetel.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_114",
    "nameTe": "కొబ్బరి",
    "nameEn": "Dessicated Coconut",
    "translit": "kobbari dessicated coconut కొబ్బరి kaya kobbarikaya tenkaya nariyal",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/coconut.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_115",
    "nameTe": "ఖర్జూరం",
    "nameEn": "Dried Dates",
    "translit": "kharjooram dried dates ఖర్జూరం",
    "mainCategory": "groceries",
    "category": "dryfruits",
    "imageUrl": "https://www.nriol.com/images/dates.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "నాణ్యమైనది",
    "inStock": true
  },
  {
    "id": "nr_116",
    "nameTe": "అతి పళ్ళూ",
    "nameEn": "Dried Fig",
    "translit": "athi pallu dried fig అతి పళ్ళూ",
    "mainCategory": "groceries",
    "category": "dryfruits",
    "imageUrl": "https://www.nriol.com/images/fig.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": "essential",
    "tagLabelTelugu": "నాణ్యమైనది",
    "inStock": true
  },
  {
    "id": "nr_117",
    "nameTe": "అక్రోటుకాయ",
    "nameEn": "Walnut",
    "translit": "aakrot walnut అక్రోటుకాయ",
    "mainCategory": "groceries",
    "category": "dryfruits",
    "imageUrl": "https://www.nriol.com/images/walnut.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_118",
    "nameTe": "పిస్తా",
    "nameEn": "Pistachio",
    "translit": "pista pistachio పిస్తా",
    "mainCategory": "groceries",
    "category": "dryfruits",
    "imageUrl": "https://www.nriol.com/images/pista.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_119",
    "nameTe": "గసగసాల",
    "nameEn": "Poppy Seed",
    "translit": "gasagasaalu poppy seed గసగసాల",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/poppy.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_120",
    "nameTe": "శనగ",
    "nameEn": "Peanut",
    "translit": "pallilu peanut శనగ",
    "mainCategory": "groceries",
    "category": "dals",
    "imageUrl": "https://www.nriol.com/images/peanut.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_121",
    "nameTe": "అవిసె గింజలు",
    "nameEn": "Flax seeds",
    "translit": "avise ginjalu flax seeds అవిసె గింజలు",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "https://www.nriol.com/images/flax-seeds.jpg",
    "price": 50,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_122",
    "nameTe": "నువ్వు గింజలు",
    "nameEn": "Sesame seeds",
    "translit": "nuvvu ginjalu sesame seeds నువ్వు గింజలు",
    "mainCategory": "groceries",
    "category": "spices",
    "imageUrl": "https://www.nriol.com/images/sesame-seeds.jpg",
    "price": 50,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_123",
    "nameTe": "మెంతి కూర",
    "nameEn": "Fenu greek leaves",
    "translit": "menthi kura fenu greek leaves మెంతి కూర",
    "mainCategory": "vegetables",
    "category": "greens",
    "imageUrl": "https://www.nriol.com/images/fenu-greek.jpg",
    "price": 15,
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
    "id": "nr_124",
    "nameTe": "కరివేపాకు",
    "nameEn": "Curry leaves",
    "translit": "karivepaku curry leaves కరివేపాకు",
    "mainCategory": "vegetables",
    "category": "greens",
    "imageUrl": "https://www.nriol.com/images/curry.jpg",
    "price": 15,
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
    "id": "nr_125",
    "nameTe": "కొత్తిమీర",
    "nameEn": "Coriander",
    "translit": "kottimira coriander కొత్తిమీర",
    "mainCategory": "vegetables",
    "category": "greens",
    "imageUrl": "https://www.nriol.com/images/coriander.jpg",
    "price": 15,
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
    "id": "nr_126",
    "nameTe": "పాలకూర",
    "nameEn": "Spinach",
    "translit": "palakura spinach పాలకూర",
    "mainCategory": "vegetables",
    "category": "greens",
    "imageUrl": "https://www.nriol.com/images/spinach.jpg",
    "price": 15,
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
    "id": "nr_127",
    "nameTe": "గోంగూరా",
    "nameEn": "Roselle",
    "translit": "gongura roselle గోంగూరా",
    "mainCategory": "vegetables",
    "category": "greens",
    "imageUrl": "https://www.nriol.com/images/roselle.jpg",
    "price": 15,
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
    "id": "nr_128",
    "nameTe": "పుదీనా ఆకులు",
    "nameEn": "Mint leaves",
    "translit": "pudina akulu mint leaves పుదీనా ఆకులు",
    "mainCategory": "vegetables",
    "category": "greens",
    "imageUrl": "https://www.nriol.com/images/mint.jpg",
    "price": 15,
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
    "id": "nr_129",
    "nameTe": "బచాలి కురా",
    "nameEn": "Collard leaves",
    "translit": "bacali kura collard leaves బచాలి కురా",
    "mainCategory": "vegetables",
    "category": "greens",
    "imageUrl": "https://www.nriol.com/images/collard-leaves.jpg",
    "price": 15,
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
    "id": "nr_130",
    "nameTe": "తోటకూర",
    "nameEn": "Amaranth Leaves",
    "translit": "totakura amaranth leaves తోటకూర",
    "mainCategory": "vegetables",
    "category": "greens",
    "imageUrl": "https://www.nriol.com/images/amaranth-leaves.jpg",
    "price": 15,
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
    "id": "nr_131",
    "nameTe": "కోడి గుడ్డు",
    "nameEn": "Egg",
    "translit": "kodi guddu egg కోడి గుడ్డు",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/egg.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_138",
    "nameTe": "పెరుగు",
    "nameEn": "Yogurt",
    "translit": "perugu yogurt పెరుగు",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/yogrut.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_139",
    "nameTe": "బియ్యము",
    "nameEn": "Rice (Raw)",
    "translit": "biyyamu rice raw బియ్యము",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/raw.jpg",
    "price": 1450,
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
    "id": "nr_140",
    "nameTe": "ఉప్పుడు బియ్యము",
    "nameEn": "Rice (Boiled)",
    "translit": "uppu u biyyamu rice boiled ఉప్పుడు బియ్యము",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/rice.jpg",
    "price": 1450,
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
    "id": "nr_141",
    "nameTe": "బొంబాయి రవ్వ",
    "nameEn": "Semolina",
    "translit": "bombai rawa semolina బొంబాయి రవ్వ",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/semo.jpg",
    "price": 65,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_142",
    "nameTe": "సేమియా",
    "nameEn": "Vermicelli",
    "translit": "semia vermicelli సేమియా",
    "mainCategory": "groceries",
    "category": "grains",
    "imageUrl": "https://www.nriol.com/images/verm.jpg",
    "price": 65,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "2 కిలోలు",
      "500 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_143",
    "nameTe": "బెల్లము",
    "nameEn": "Jaggery",
    "translit": "bellamu jaggery బెల్లము",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/jaggery.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_144",
    "nameTe": "తేనె",
    "nameEn": "Honey",
    "translit": "tene honey తేనె",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/honey.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "nr_145",
    "nameTe": "కొబ్బరి కాయ",
    "nameEn": "Coconut",
    "translit": "kobbari kaya coconut కొబ్బరి కాయ kobbarikaya tenkaya nariyal",
    "mainCategory": "groceries",
    "category": "essentials",
    "imageUrl": "https://www.nriol.com/images/coconut.jpg",
    "price": 60,
    "defaultQty": "1 కిలో",
    "commonQtys": [
      "1 కిలో",
      "500 గ్రాములు",
      "250 గ్రాములు"
    ],
    "tagType": null,
    "tagLabelTelugu": null,
    "inStock": true
  },
  {
    "id": "pooja_1",
    "nameTe": "అగరబత్తీలు (సుగంధ ధూపం)",
    "nameEn": "Incense Sticks (Agarbatti)",
    "translit": "agarbatti agarbattilu agarbathi agarbathulu oodubathulu udubathulu dhoop sticks fragrance sticks champa rose agarbatti pooja agarbatti",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&auto=format&fit=crop&q=80",
    "price": 40,
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
    "translit": "karpooram karpuram camphor harathi karpooram karpura billalu harathi deepam white camphor pooja camphor",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&auto=format&fit=crop&q=80",
    "price": 50,
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
    "translit": "pasupu pooja pasupu turmeric powder haldi sacred pasupu mangala dravyam turmeric",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "https://www.nriol.com/images/turmeric-seed.jpg",
    "price": 30,
    "defaultQty": "100 గ్రాములు",
    "commonQtys": [
      "100 గ్రాములు",
      "250 గ్రాములు",
      "50 గ్రాములు",
      "500 గ్రాములు"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "పవిత్ర ద్రవ్యం",
    "inStock": true
  },
  {
    "id": "pooja_4",
    "nameTe": "సిందూరం / ఎర్ర కుంకుమ",
    "nameEn": "Divine Kumkum (Vermilion)",
    "translit": "kumkuma kumkum sindhooram sindhuram erra kumkum divine kumkum pooja kumkuma sindoor",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=500&auto=format&fit=crop&q=80",
    "price": 30,
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
    "nameEn": "Sacred Pooja Coconut",
    "translit": "kobbari kaya kobbarikaya tenkaya tenkay coconut pooja coconut nariyal kudaka peelu",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "https://www.nriol.com/images/coconut.jpg",
    "price": 35,
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
    "nameEn": "Cotton Wicks for Deepam",
    "translit": "patti vattulu vattulu deepam vattulu cotton wicks phool batti deeparadhana vattulu long wicks diya batti",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=500&auto=format&fit=crop&q=80",
    "price": 25,
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
    "imageUrl": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=80",
    "price": 110,
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
    "imageUrl": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=500&auto=format&fit=crop&q=80",
    "price": 60,
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
    "imageUrl": "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=500&auto=format&fit=crop&q=80",
    "price": 45,
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
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=80",
    "price": 20,
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
    "nameTe": "పూజా వక్కలు (పోక వక్కలు)",
    "nameEn": "Betel Nuts (Vakkalu / Supari)",
    "translit": "vakkalu poka vakkalu supari betel nut pooja vakkalu tamboolam vakkalu areca nut",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "https://www.nriol.com/images/beetel.jpg",
    "price": 40,
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
    "nameTe": "మట్టి ప్రమిదలు (దీపాలు)",
    "nameEn": "Clay Diyas (Matti Pramadalu)",
    "translit": "matti pramidalu matti deepalu clay diyas deepalu diwali diyas deepam pramidalu clay lamps",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "https://images.unsplash.com/photo-1574870111867-089730e5a72b?w=500&auto=format&fit=crop&q=80",
    "price": 30,
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
    "imageUrl": "https://images.unsplash.com/photo-1533616688419-b7a585564566?w=500&auto=format&fit=crop&q=80",
    "price": 50,
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
    "nameTe": "రక్షా సూత్రం / పవిత్ర కంకణం",
    "nameEn": "Sacred Protection Thread (Kankanam)",
    "translit": "kankanam raksha sutram pooja thread mauli kalawa red yellow thread pavitra daram",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&auto=format&fit=crop&q=80",
    "price": 15,
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
    "nameTe": "ఆవు నెయ్యి (పూజా దీపారాధనకు)",
    "nameEn": "Pure Cow Ghee for Deepam",
    "translit": "avu neyyi cow ghee pooja ghee deeparadhana neyyi akhanda deepam ghee pure desi ghee",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=500&auto=format&fit=crop&q=80",
    "price": 160,
    "defaultQty": "250 గ్రాములు",
    "commonQtys": [
      "250 గ్రాములు",
      "500 గ్రాములు",
      "1 కిలో"
    ],
    "tagType": "pooja",
    "tagLabelTelugu": "పవిత్ర నేయి",
    "inStock": true
  },
  {
    "id": "pooja_16",
    "nameTe": "అక్షింతలు (పూజా పవిత్ర బియ్యం)",
    "nameEn": "Sacred Akshintalu (Pooja Rice)",
    "translit": "akshintalu akshatalu pooja biyyam pasupu biyyam sacred rice blessed rice",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=80",
    "price": 20,
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
    "id": "pooja_17",
    "nameTe": "యజ్ఞోపవీతం (పవిత్ర జంధ్యం)",
    "nameEn": "Sacred Jandhyam (Yajnopavita)",
    "translit": "jandhyam yagnopaveetham sacred thread pooja thread brahmin thread",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=500&auto=format&fit=crop&q=80",
    "price": 25,
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
    "id": "pooja_18",
    "nameTe": "కలశం రాగి / ఇత్తడి చెంబు",
    "nameEn": "Pooja Kalasham Pot (Vessel)",
    "translit": "kalasham chembu pooja kalash brass chembu copper pot pooja patra",
    "mainCategory": "pooja",
    "category": "pooja",
    "imageUrl": "https://images.unsplash.com/photo-1610730581079-ff3715e29786?w=500&auto=format&fit=crop&q=80",
    "price": 180,
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
