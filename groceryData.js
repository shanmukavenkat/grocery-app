// కిరాణా సరుకుల డేటాబేస్ (Comprehensive Telugu Grocery Catalog)
// Categories: ధాన్యాలు & పిండ్లు, పప్పు దినుసులు, నూనెలు & నెయ్యి, పోపు సామాన్లు, నిత్యావసరాలు, డ్రై ఫ్రూట్స్, కూరగాయలు, పూజా & క్లీనింగ్

const GROCERY_CATEGORIES = [
  { id: 'all', name: 'అన్ని సరుకులు', nameEn: 'All Items', icon: 'fa-basket-shopping', color: 'bg-emerald-600' },
  { id: 'grains', name: 'ధాన్యాలు & పిండ్లు', nameEn: 'Grains & Flours', icon: 'fa-wheat-awn', color: 'bg-amber-600' },
  { id: 'dals', name: 'పప్పు దినుసులు', nameEn: 'Pulses & Dals', icon: 'fa-bowl-rice', color: 'bg-orange-600' },
  { id: 'oils', name: 'నూనెలు & నెయ్యి', nameEn: 'Oils & Ghee', icon: 'fa-bottle-droplet', color: 'bg-yellow-600' },
  { id: 'spices', name: 'పోపు సామాన్లు', nameEn: 'Spices & Tadka', icon: 'fa-pepper-hot', color: 'bg-red-600' },
  { id: 'essentials', name: 'ఇతర కిరాణా', nameEn: 'Kitchen Essentials', icon: 'fa-jar', color: 'bg-teal-600' },
  { id: 'dryfruits', name: 'డ్రై ఫ్రూట్స్ & గింజలు', nameEn: 'Dry Fruits & Nuts', icon: 'fa-seedling', color: 'bg-lime-700' },
  { id: 'vegetables', name: 'కూరగాయలు & ఆకులు', nameEn: 'Fresh Produce', icon: 'fa-carrot', color: 'bg-green-600' },
  { id: 'pooja_clean', name: 'పూజా & శుభ్రత', nameEn: 'Pooja & Cleaning', icon: 'fa-soap', color: 'bg-indigo-600' }
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
  { id: '1_dozen', label: '1 డజను', sub: '12 నంబర్లు', defaultUnit: '1 డజను' },
  { id: 'ara_dozen', label: 'అర డజను', sub: '6 నంబర్లు', defaultUnit: 'అర డజను' },
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
  'డజన్లు',
  'డబ్బాలు',
  'బాటిళ్ళు',
  'బస్తాలు',
  'ముక్కలు / నంబర్లు'
];

const GROCERY_ITEMS = [
  // 1. ధాన్యాలు & పిండ్లు (Grains & Flours)
  {
    id: 'g_1',
    nameTe: 'సోనా మసూరి బియ్యం',
    nameEn: 'Sona Masoori Rice',
    translit: 'sona masoori biyyam biyam rice sona masuri vadlu tandulam raw rice steam rice white rice sona biyyam masoori biyyam rice bag',
    category: 'grains',
    defaultQty: '25 కిలోల బస్తా',
    commonQtys: ['25 కిలోల బస్తా', '10 కిలోలు', '5 కిలోలు', '1 కిలో'],
    icon: '🌾',
    badge: 'ముఖ్యమైనది'
  },
  {
    id: 'g_2',
    nameTe: 'బాస్మతి బియ్యం',
    nameEn: 'Basmati Rice',
    translit: 'basmati rice biyyam basmathi biyam biryani rice long grain basmati rice daawat india gate',
    category: 'grains',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', '5 కిలోలు', '2 కిలోలు', 'అర కిలో'],
    icon: '🍚'
  },
  {
    id: 'g_3',
    nameTe: 'బ్రౌన్ రైస్ (ముడి బియ్యం)',
    nameEn: 'Brown Rice',
    translit: 'brown rice mudi biyyam pottu biyyam red rice hand pounded rice brown biyyam diet rice',
    category: 'grains',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', '5 కిలోలు', '2 కిలోలు'],
    icon: '🌾'
  },
  {
    id: 'g_4',
    nameTe: 'గోధుమ పిండి (ఆటా)',
    nameEn: 'Wheat Flour / Atta',
    translit: 'godhuma pindi godhuma pindi aata atta wheat flour aashirvaad pindi chapati pindi chapathi pindi godumalu gehu ka atta',
    category: 'grains',
    defaultQty: '5 కిలోలు',
    commonQtys: ['5 కిలోలు', '10 కిలోలు', '1 కిలో', '2 కిలోలు'],
    icon: '🌾',
    badge: 'రోజూ వాడేది'
  },
  {
    id: 'g_5',
    nameTe: 'శనగపిండి (బేసన్)',
    nameEn: 'Besan / Gram Flour',
    translit: 'senaga pindi senagapindi shanaga pindi chanaga pindi besan gram flour kadalai maavu bajji pindi chana flour',
    category: 'grains',
    defaultQty: 'అర కిలో',
    commonQtys: ['అర కిలో', '1 కిలో', 'పావు కిలో'],
    icon: '🥣'
  },
  {
    id: 'g_6',
    nameTe: 'వరి పిండి (బియ్యపు పిండి)',
    nameEn: 'Rice Flour',
    translit: 'vari pindi biyyapu pindi biyyam pindi rice flour arisi maavu murukku pindi chitti pindi',
    category: 'grains',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', 'అర కిలో', '2 కిలోలు'],
    icon: '🥣'
  },
  {
    id: 'g_7',
    nameTe: 'మైదా పిండి',
    nameEn: 'Maida Flour',
    translit: 'maida pindi maida flour refined flour all purpose flour parotta maida bakery maida',
    category: 'grains',
    defaultQty: 'అర కిలో',
    commonQtys: ['అర కిలో', '1 కిలో', 'పావు కిలో'],
    icon: '🥣'
  },
  {
    id: 'g_8',
    nameTe: 'బొంబాయి రవ్వ (ఉప్మా రవ్వ)',
    nameEn: 'Bombay Rava / Upma Rava',
    translit: 'bombay rava bombai rava upma rava upmarava sooji suji rawa kesari rava white rava ravva',
    category: 'grains',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', 'అర కిలో', 'పావు కిలో'],
    icon: '🌾'
  },
  {
    id: 'g_9',
    nameTe: 'ఇడ్లీ రవ్వ',
    nameEn: 'Idli Rava',
    translit: 'idli rava idly rava idlirava rice rava idly biyyam rava ravva idli ravva',
    category: 'grains',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', '2 కిలోలు', 'అర కిలో'],
    icon: '🌾'
  },
  {
    id: 'g_10',
    nameTe: 'గోధుమ రవ్వ (ఎర్ర రవ్వ / సంపా రవ్వ)',
    nameEn: 'Wheat Rava / Daliya',
    translit: 'godhuma rava godhumalaraava daliya broken wheat samba rava erra rava bansi rava godhuma ravva',
    category: 'grains',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', 'అర కిలో'],
    icon: '🌾'
  },
  {
    id: 'g_11',
    nameTe: 'జొన్న పిండి',
    nameEn: 'Jowar Flour',
    translit: 'jonna pindi jowar flour jola pindi sorghum flour jonna rotte pindi jowar atta',
    category: 'grains',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', '2 కిలోలు', '5 కిలోలు'],
    icon: '🌾'
  },
  {
    id: 'g_12',
    nameTe: 'రాగి పిండి',
    nameEn: 'Ragi / Finger Millet Flour',
    translit: 'ragi pindi ragi flour finger millet flour finger millet ragi sangati pindi ragi java pindi nachni atta',
    category: 'grains',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', '2 కిలోలు', 'అర కిలో'],
    icon: '🌾'
  },
  {
    id: 'g_13',
    nameTe: 'అటుకులు (లావు / సన్న)',
    nameEn: 'Poha / Flattened Rice',
    translit: 'atukulu atukulu poha aval avalakki beaten rice flattened rice chivda mota poha patla poha atukula',
    category: 'grains',
    defaultQty: 'అర కిలో',
    commonQtys: ['అర కిలో', '1 కిలో', 'పావు కిలో'],
    icon: '🥣'
  },
  {
    id: 'g_14',
    nameTe: 'సగ్గుబియ్యం (సాబుదానా)',
    nameEn: 'Sabudana / Sago',
    translit: 'saggubiyyam saggu biyyam sabudana sago tapioca pearls javvarisi payasam biyyam sabhudhana',
    category: 'grains',
    defaultQty: 'అర కిలో',
    commonQtys: ['అర కిలో', 'పావు కిలో', '1 కిలో'],
    icon: '⚪'
  },
  {
    id: 'g_15',
    nameTe: 'సేమియా (వర్మిసెల్లి)',
    nameEn: 'Semiya / Vermicelli',
    translit: 'semiya semiya vermicelli sevvai seviyan sevai bambina semiya vermicili payasam semiya',
    category: 'grains',
    defaultQty: '2 ప్యాకెట్లు',
    commonQtys: ['1 ప్యాకెట్', '2 ప్యాకెట్లు', 'అర కిలో'],
    icon: '🍜'
  },
  {
    id: 'g_16',
    nameTe: 'మొక్కజొన్న పిండి (కార్న్ ఫ్లోర్)',
    nameEn: 'Corn Flour',
    translit: 'mokkajonna pindi mokka jonna pindi corn flour corn starch makki ka atta cornflour corn flour',
    category: 'grains',
    defaultQty: '1 ప్యాకెట్',
    commonQtys: ['1 ప్యాకెట్', 'పావు కిలో', 'అర కిలో'],
    icon: '🌽'
  },

  // 2. పప్పు దినుసులు (Pulses & Dals)
  {
    id: 'd_1',
    nameTe: 'కందిపప్పు',
    nameEn: 'Toor Dal / Arhar Dal',
    translit: 'kandi pappu kandipappu toor dal toordal tuvar dal arhar dal pigeon pea kandi pappulu sambar dal dhal kandipappu kandi toor',
    category: 'dals',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', '2 కిలోలు', '5 కిలోలు', 'అర కిలో'],
    icon: '🥘',
    badge: 'ముఖ్యమైనది'
  },
  {
    id: 'd_2',
    nameTe: 'మినప్పప్పు (గుళ్ళు)',
    nameEn: 'Urad Dal Whole White',
    translit: 'minapa pappu minappappu urad dal whole white uddi pappu minumu minimulu uraddal dosa pappu idli pappu white urad gota minapa gundlu',
    category: 'dals',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', '2 కిలోలు', 'అర కిలో'],
    icon: '⚪',
    badge: 'ముఖ్యమైనది'
  },
  {
    id: 'd_3',
    nameTe: 'మినప్పప్పు (పొట్టు పప్పు)',
    nameEn: 'Urad Dal Split with Husk',
    translit: 'pottu minappappu pottu minapa pappu split urad chilka urad dal vadalu pappu garela pappu',
    category: 'dals',
    defaultQty: 'అర కిలో',
    commonQtys: ['అర కిలో', '1 కిలో'],
    icon: '🔘'
  },
  {
    id: 'd_4',
    nameTe: 'శనగపప్పు (పచ్చి శనగపప్పు)',
    nameEn: 'Chana Dal / Bengal Gram',
    translit: 'senaga pappu senagapappu shanaga pappu chanaga pappu chana dal bengal gram kadalai paruppu senagalu dhal chana chana dhal',
    category: 'dals',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', 'అర కిలో', 'పావు కిలో'],
    icon: '🟡'
  },
  {
    id: 'd_5',
    nameTe: 'పెసరపప్పు',
    nameEn: 'Moong Dal (Yellow)',
    translit: 'pesara pappu pesarapappu moong dal yellow moong yellow dal pasi paruppu moong dhal pesaralu split moong dal',
    category: 'dals',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', 'అర కిలో', 'పావు కిలో'],
    icon: '🟡'
  },
  {
    id: 'd_6',
    nameTe: 'పచ్చ పెసలు (ఆకుపచ్చ పెసలు)',
    nameEn: 'Whole Green Gram / Moong',
    translit: 'pesalu green gram whole moong sabut moong paccha pesalu pachha pesalu green moong pesarlu',
    category: 'dals',
    defaultQty: 'అర కిలో',
    commonQtys: ['అర కిలో', '1 కిలో'],
    icon: '🟢'
  },
  {
    id: 'd_7',
    nameTe: 'ఎర్ర కందిపప్పు (మసూర్ దాల్)',
    nameEn: 'Masoor Dal (Red Lentil)',
    translit: 'erra kandipappu masoor dal red lentil masoor dhal pink dal erra pappu masur dal',
    category: 'dals',
    defaultQty: 'అర కిలో',
    commonQtys: ['అర కిలో', '1 కిలో', 'పావు కిలో'],
    icon: '🟠'
  },
  {
    id: 'd_8',
    nameTe: 'పుట్నాల పప్పు (వేయించిన శనగపప్పు)',
    nameEn: 'Roasted Gram / Putnala Pappu',
    translit: 'putnala pappu putnalapappu putnalu putnala papu veyinchina senagapappu roasted gram fried gram dalia dalia pappu phutana porikadalai chutney pappu chat pappu pappulu popu pappu putnaala pappu bhuna chana pottu kadalai',
    category: 'dals',
    defaultQty: 'పావు కిలో',
    commonQtys: ['పావు కిలో', 'అర కిలో', '1 కిలో'],
    icon: '🥣'
  },
  {
    id: 'd_9',
    nameTe: 'పల్లీలు / వేరుశనగ గుళ్ళు',
    nameEn: 'Peanuts / Groundnuts',
    translit: 'palleelu palilu palli verusanaga gullu verusenaga verusenagagullu peanuts groundnuts moongphali ground nuts sengalu kaddalekai verusanaga',
    category: 'dals',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', 'అర కిలో', '2 కిలోలు'],
    icon: '🥜',
    badge: 'రోజూ వాడేది'
  },
  {
    id: 'd_10',
    nameTe: 'కాబూలీ శనగలు (తెల్ల శనగలు)',
    nameEn: 'Kabuli Chana / White Chickpeas',
    translit: 'kabuli chana tella senagalu thella senagalu white chickpeas chole channa kaboolee senagalu chhole chana',
    category: 'dals',
    defaultQty: 'అర కిలో',
    commonQtys: ['అర కిలో', '1 కిలో', 'పావు కిలో'],
    icon: '⚪'
  },
  {
    id: 'd_11',
    nameTe: 'నల్ల శనగలు (దేశవాళీ శనగలు)',
    nameEn: 'Black Chickpeas / Kala Chana',
    translit: 'nalla senagalu kala chana black chickpeas desi chana nalla chanaga guggillu brown chickpeas',
    category: 'dals',
    defaultQty: 'అర కిలో',
    commonQtys: ['అర కిలో', '1 కిలో'],
    icon: '🟤'
  },
  {
    id: 'd_12',
    nameTe: 'రాజ్మా (ఎర్ర చిక్కుడు గింజలు)',
    nameEn: 'Rajma / Kidney Beans',
    translit: 'rajma red kidney beans rajma beans chikudu ginjalu red chitra rajma kashmiri rajma',
    category: 'dals',
    defaultQty: 'అర కిలో',
    commonQtys: ['అర కిలో', '1 కిలో'],
    icon: '🫘'
  },
  {
    id: 'd_13',
    nameTe: 'ఎండు బఠానీలు (తెల్ల/ఆకుపచ్చ)',
    nameEn: 'Dry Peas / Batani',
    translit: 'bataneelu batani dry peas white batani green peas vatana safed vatana matra paccha batani',
    category: 'dals',
    defaultQty: 'పావు కిలో',
    commonQtys: ['పావు కిలో', 'అర కిలో'],
    icon: '🟢'
  },
  {
    id: 'd_14',
    nameTe: 'అలసందలు / బొబ్బర్లు',
    nameEn: 'Cowpeas / Lobia / Bobbarlu',
    translit: 'alasandalu bobbarlu cowpeas lobia black eyed peas chawli karamani alasanda gullu',
    category: 'dals',
    defaultQty: 'అర కిలో',
    commonQtys: ['అర కిలో', '1 కిలో'],
    icon: '🫘'
  },
  {
    id: 'd_15',
    nameTe: 'ఉలవలు',
    nameEn: 'Horse Gram / Ulavalu',
    translit: 'ulavalu horse gram kollu hurali kulthi ulava charu ulavalucharru',
    category: 'dals',
    defaultQty: 'అర కిలో',
    commonQtys: ['అర కిలో', '1 కిలో'],
    icon: '🟤'
  },

  // 3. నూనెలు & నెయ్యి (Cooking Oils & Ghee)
  {
    id: 'o_1',
    nameTe: 'వేరుశనగ నూనె (పల్లీ నూనె)',
    nameEn: 'Groundnut / Peanut Oil',
    translit: 'verusanaga noone verusenaga nune palli noone pallinoone groundnut oil peanut oil ground nut oil cooking oil sing tel peanut noone palli nune',
    category: 'oils',
    defaultQty: '1 లీటరు',
    commonQtys: ['1 లీటరు', '2 లీటర్లు', '5 లీటర్ల డబ్బా', 'అర లీటరు'],
    icon: '🛢️',
    badge: 'ముఖ్యమైనది'
  },
  {
    id: 'o_2',
    nameTe: 'సన్‌ఫ్లవర్ నూనె (పొద్దుతిరుగుడు నూనె)',
    nameEn: 'Sunflower Cooking Oil',
    translit: 'sunflower oil sunflower noone podduthirugudu noone fortune freedom gold drop refined sunflower oil sun flower surajmukhi tel',
    category: 'oils',
    defaultQty: '1 లీటరు',
    commonQtys: ['1 లీటరు', '5 లీటర్ల డబ్బా', '2 లీటర్లు'],
    icon: '🌻'
  },
  {
    id: 'o_3',
    nameTe: 'నువ్వుల నూనె (మంచి నూనె)',
    nameEn: 'Sesame / Gingelly Oil',
    translit: 'nuvvula noone nuvvula nune manchi noone sesame oil gingelly oil til oil nallennai gingelly gingelly noone til noone',
    category: 'oils',
    defaultQty: 'అర లీటరు',
    commonQtys: ['అర లీటరు', '1 లీటరు', '200 గ్రాములు'],
    icon: '🛢️'
  },
  {
    id: 'o_4',
    nameTe: 'స్వచ్ఛమైన ఆవు నెయ్యి',
    nameEn: 'Pure Cow Ghee',
    translit: 'aavu neyyi avu neyi cow ghee pure cow ghee desi ghee thupamu clarified butter grb neyyi heritage ghee amul ghee avu ney ghee',
    category: 'oils',
    defaultQty: 'అర లీటరు',
    commonQtys: ['అర లీటరు', '1 లీటరు', 'పావు కిలో', '1 కిలో'],
    icon: '🧈',
    badge: 'ప్రీమియం'
  },
  {
    id: 'o_5',
    nameTe: 'గేదె నెయ్యి',
    nameEn: 'Buffalo Ghee',
    translit: 'gede neyyi buffalo ghee buffalo butter buffalo neyi geede neyyi white ghee desi neyyi',
    category: 'oils',
    defaultQty: 'అర లీటరు',
    commonQtys: ['అర లీటరు', '1 లీటరు', 'పావు కిలో'],
    icon: '🧈'
  },
  {
    id: 'o_6',
    nameTe: 'కొబ్బరి నూనె (వంట & తల నూనె)',
    nameEn: 'Coconut Oil',
    translit: 'kobbari noone coconut oil nariyal tel thengai ennai parachute oil coconut cooking oil kobbari nune thengai ennai',
    category: 'oils',
    defaultQty: '1 బాటిల్',
    commonQtys: ['1 బాటిల్', 'అర లీటరు', '1 లీటరు'],
    icon: '🥥'
  },
  {
    id: 'o_7',
    nameTe: 'ఆవనూనె (ఆవాల నూనె)',
    nameEn: 'Mustard Oil',
    translit: 'aavanoone aavala noone mustard oil sarson ka tel kadugu ennai mustard sarson oil aavala nune',
    category: 'oils',
    defaultQty: 'అర లీటరు',
    commonQtys: ['అర లీటరు', '1 లీటరు'],
    icon: '🛢️'
  },
  {
    id: 'o_8',
    nameTe: 'దీపారాధన నూనె (పూజ నూనె)',
    nameEn: 'Deeparadhana Pooja Oil',
    translit: 'deeparadhana noone pooja oil lamp oil puja nune vilakku ennai panchadeepam oil deepam nune pooja nune',
    category: 'oils',
    defaultQty: '1 లీటరు',
    commonQtys: ['1 లీటరు', 'అర లీటరు', '2 లీటర్లు'],
    icon: '🪔'
  },

  // 4. పోపు సామాన్లు & సుగంధ ద్రవ్యాలు (Spices & Masalas)
  {
    id: 's_1',
    nameTe: 'ఆవాలు',
    nameEn: 'Mustard Seeds / Rai',
    translit: 'aavalu avalu mustard seeds rai sarson sasive kadugu popu aavalu rai seeds mustard',
    category: 'spices',
    defaultQty: '100 గ్రాములు',
    commonQtys: ['100 గ్రాములు', 'పావు కిలో', '50 గ్రాములు', 'అర కిలో'],
    icon: '⚫',
    badge: 'పోపు సామాను'
  },
  {
    id: 's_2',
    nameTe: 'జీలకర్ర',
    nameEn: 'Cumin Seeds / Jeera',
    translit: 'jeelakarra jilakarra jeera zeera jira cumin seeds jeerakam jeelakara jeelakarr jeera seeds zeera seeds',
    category: 'spices',
    defaultQty: '100 గ్రాములు',
    commonQtys: ['100 గ్రాములు', 'పావు కిలో', '50 గ్రాములు', 'అర కిలో'],
    icon: '🟤',
    badge: 'పోపు సామాను'
  },
  {
    id: 's_3',
    nameTe: 'మెంతులు',
    nameEn: 'Fenugreek Seeds / Methi',
    translit: 'menthulu mentulu methi fenugreek seeds vendhayam menthi seeds menti ginjalu',
    category: 'spices',
    defaultQty: '100 గ్రాములు',
    commonQtys: ['100 గ్రాములు', 'పావు కిలో', '50 గ్రాములు'],
    icon: '🟡',
    badge: 'పోపు సామాను'
  },
  {
    id: 's_4',
    nameTe: 'పసుపు పొడి',
    nameEn: 'Turmeric Powder / Haldi',
    translit: 'pasupu podi pasupu pasupupodi turmeric powder haldi manjal turmeric haldi powder pasupu kombulu',
    category: 'spices',
    defaultQty: '100 గ్రాములు',
    commonQtys: ['100 గ్రాములు', 'పావు కిలో', 'అర కిలో', '50 గ్రాములు'],
    icon: '🟡',
    badge: 'ముఖ్యమైనది'
  },
  {
    id: 's_5',
    nameTe: 'కారం పొడి (ఘాటైన దేశీ కారం)',
    nameEn: 'Red Chilli Powder',
    translit: 'kaaram podi karam podi mirchi podi red chilli powder lal mirch milagai thool guntur karam kaaram mirapa podi teja karam',
    category: 'spices',
    defaultQty: 'అర కిలో',
    commonQtys: ['అర కిలో', '1 కిలో', 'పావు కిలో', '100 గ్రాములు'],
    icon: '🌶️',
    badge: 'ముఖ్యమైనది'
  },
  {
    id: 's_6',
    nameTe: 'కాశ్మీరీ కారం (రంగు కోసం)',
    nameEn: 'Kashmiri Chilli Powder',
    translit: 'kashmiri kaaram kashmiri mirch kashmiri chilli degi mirch red color karam color chilli powder',
    category: 'spices',
    defaultQty: '100 గ్రాములు',
    commonQtys: ['100 గ్రాములు', 'పావు కిలో'],
    icon: '🌶️'
  },
  {
    id: 's_7',
    nameTe: 'ఎండు మిరపకాయలు (ఎండు మిర్చి)',
    nameEn: 'Dry Red Chillies',
    translit: 'endu mirapakayalu endu mirchi dry red chillies dry chillies sukhi lal mirch varamilagai empodu mirapa guntur mirchi',
    category: 'spices',
    defaultQty: 'పావు కిలో',
    commonQtys: ['పావు కిలో', 'అర కిలో', '100 గ్రాములు', '1 కిలో'],
    icon: '🌶️'
  },
  {
    id: 's_8',
    nameTe: 'ధనియాలు (ఆక్క ధనియాలు)',
    nameEn: 'Coriander Seeds',
    translit: 'dhaniyalu dhaniya coriander seeds sabut dhaniya kothamalli vidhai koriyandar dhaniya seeds',
    category: 'spices',
    defaultQty: 'పావు కిలో',
    commonQtys: ['పావు కిలో', 'అర కిలో', '100 గ్రాములు'],
    icon: '🟤'
  },
  {
    id: 's_9',
    nameTe: 'ధనియాల పొడి',
    nameEn: 'Coriander Powder / Dhaniya Powder',
    translit: 'dhaniyala podi coriander powder dhaniya powder kothamalli thool dhania powder',
    category: 'spices',
    defaultQty: 'పావు కిలో',
    commonQtys: ['పావు కిలో', '100 గ్రాములు', 'అర కిలో'],
    icon: '🧂'
  },
  {
    id: 's_10',
    nameTe: 'ఇంగువ (డబ్బా)',
    nameEn: 'Asafoetida / Hing',
    translit: 'inguva hing asafoetida lg hing perungayam kayam compond hing asafoetida powder hing box',
    category: 'spices',
    defaultQty: '1 డబ్బా',
    commonQtys: ['1 డబ్బా', '50 గ్రాములు', '100 గ్రాములు'],
    icon: '🫙',
    badge: 'పోపు సామాను'
  },
  {
    id: 's_11',
    nameTe: 'దాల్చిన చెక్క',
    nameEn: 'Cinnamon / Dalchina Chekka',
    translit: 'dalchina chekka dalchini cinnamon pattai taj chekka cinnamon stick dalchina patta chekka',
    category: 'spices',
    defaultQty: '50 గ్రాములు',
    commonQtys: ['50 గ్రాములు', '100 గ్రాములు'],
    icon: '🪵'
  },
  {
    id: 's_12',
    nameTe: 'లవంగాలు',
    nameEn: 'Cloves / Lavangalu',
    translit: 'lavangalu cloves laung lavangam grambu lavang laung seeds cloves pack',
    category: 'spices',
    defaultQty: '50 గ్రాములు',
    commonQtys: ['50 గ్రాములు', '100 గ్రాములు'],
    icon: '🌱'
  },
  {
    id: 's_13',
    nameTe: 'యాలకులు (ఏలకులు)',
    nameEn: 'Cardamom / Elaichi',
    translit: 'yalakulu elakulu cardamom elaichi yelakkai hari elaichi green cardamom elachi elakkai elakayalu elachi',
    category: 'spices',
    defaultQty: '50 గ్రాములు',
    commonQtys: ['50 గ్రాములు', '100 గ్రాములు', '25 గ్రాములు'],
    icon: '🟢'
  },
  {
    id: 's_14',
    nameTe: 'మిరియాలు (నల్ల మిరియాలు)',
    nameEn: 'Black Pepper / Miriyalu',
    translit: 'miriyalu nalla miriyalu black pepper kali mirch kurumulaku pepper corns miriyalu pepper powder',
    category: 'spices',
    defaultQty: '50 గ్రాములు',
    commonQtys: ['50 గ్రాములు', '100 గ్రాములు'],
    icon: '⚫'
  },
  {
    id: 's_15',
    nameTe: 'బిర్యానీ ఆకు (తేజ్‌పత్తా)',
    nameEn: 'Bay Leaf / Biryani Aaku',
    translit: 'biryani aaku bay leaf tej patta biryani leaves piriyanila masala aaku bay leaves bayleaf',
    category: 'spices',
    defaultQty: '50 గ్రాములు',
    commonQtys: ['50 గ్రాములు', '100 గ్రాములు', '1 ప్యాకెట్'],
    icon: '🍃'
  },
  {
    id: 's_16',
    nameTe: 'షాజీరా (సాజీరా)',
    nameEn: 'Shahi Jeera / Caraway Seeds',
    translit: 'shajeera sajeera shahi jeera caraway seeds black cumin shahjeera',
    category: 'spices',
    defaultQty: '50 గ్రాములు',
    commonQtys: ['50 గ్రాములు', '100 గ్రాములు'],
    icon: '🟤'
  },
  {
    id: 's_17',
    nameTe: 'సోంపు (పెద్ద జీలకర్ర)',
    nameEn: 'Fennel Seeds / Saunf',
    translit: 'sompu saunf fennel seeds perunjeerakam pedda jeelakarra badi saunf sompu ginjalu',
    category: 'spices',
    defaultQty: '100 గ్రాములు',
    commonQtys: ['100 గ్రాములు', '50 గ్రాములు', 'పావు కిలో'],
    icon: '🟢'
  },
  {
    id: 's_18',
    nameTe: 'వాము (ఓమ)',
    nameEn: 'Ajwain / Carom Seeds',
    translit: 'vaamu vaamu ajwain carom seeds omam ajwayan omamu vamu ginjalu',
    category: 'spices',
    defaultQty: '50 గ్రాములు',
    commonQtys: ['50 గ్రాములు', '100 గ్రాములు'],
    icon: '🟤'
  },
  {
    id: 's_19',
    nameTe: 'గసగసాలు',
    nameEn: 'Poppy Seeds / Khus Khus',
    translit: 'gasagasalu gasalu poppy seeds khus khus kasa kasa posto kasa kasa seeds',
    category: 'spices',
    defaultQty: '50 గ్రాములు',
    commonQtys: ['50 గ్రాములు', '100 గ్రాములు'],
    icon: '⚪'
  },
  {
    id: 's_20',
    nameTe: 'అనాస పువ్వు (స్టార్ యానిస్)',
    nameEn: 'Star Anise / Biryani Flower',
    translit: 'anaasa puvvu star anise biryani flower chakra phool thakkolam biryani phool star flower',
    category: 'spices',
    defaultQty: '50 గ్రాములు',
    commonQtys: ['50 గ్రాములు', '100 గ్రాములు'],
    icon: '⭐'
  },
  {
    id: 's_21',
    nameTe: 'గరం మసాలా పొడి',
    nameEn: 'Garam Masala Powder',
    translit: 'garam masala garam masala podi all spices garam powder everest garam masala garam masala',
    category: 'spices',
    defaultQty: '100 గ్రాములు',
    commonQtys: ['100 గ్రాములు', '50 గ్రాములు', '1 ప్యాకెట్'],
    icon: '🧂'
  },
  {
    id: 's_22',
    nameTe: 'సాంబార్ పొడి',
    nameEn: 'Sambar Powder',
    translit: 'sambar podi sambar powder mtr sambar aachi priya sambhar sambar masala',
    category: 'spices',
    defaultQty: '1 ప్యాకెట్',
    commonQtys: ['1 ప్యాకెట్', '100 గ్రాములు', '200 గ్రాములు'],
    icon: '🥘'
  },
  {
    id: 's_23',
    nameTe: 'రసం పొడి',
    nameEn: 'Rasam Powder',
    translit: 'rasam podi rasam powder rasam masala charu podi mtr rasam rasampodi',
    category: 'spices',
    defaultQty: '1 ప్యాకెట్',
    commonQtys: ['1 ప్యాకెట్', '100 గ్రాములు'],
    icon: '🥣'
  },
  {
    id: 's_24',
    nameTe: 'బిర్యానీ మసాలా పొడి',
    nameEn: 'Biryani Masala Powder',
    translit: 'biryani masala biriyani masala pulao masala briyani powder suhana biryani masala biryani podi',
    category: 'spices',
    defaultQty: '1 ప్యాకెట్',
    commonQtys: ['1 ప్యాకెట్', '2 ప్యాకెట్లు'],
    icon: '🍛'
  },

  // 5. ఇతర కిరాణా సరుకులు (Kitchen Essentials)
  {
    id: 'e_1',
    nameTe: 'పాత చింతపండు (నల్లటిది / ఎర్రటిది)',
    nameEn: 'Tamarind (Puli / Chintapandu)',
    translit: 'chintapandu chintha pandu tamarind puli imli hunase tamarind pulp kothimeera puli pata chintapandu erra chintapandu chinta pandu',
    category: 'essentials',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', 'అర కిలో', 'పావు కిలో', '2 కిలోలు'],
    icon: '🟤',
    badge: 'ముఖ్యమైనది'
  },
  {
    id: 'e_2',
    nameTe: 'బెల్లం (అచ్చులు / పొడి)',
    nameEn: 'Jaggery / Bellam',
    translit: 'bellam gur jaggery vellam bella bellam achulu organic jaggery bellam podi achu bellam',
    category: 'essentials',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', '2 కిలోలు', 'అర కిలో'],
    icon: '🟤',
    badge: 'ముఖ్యమైనది'
  },
  {
    id: 'e_3',
    nameTe: 'పంచదార / చెక్కెర',
    nameEn: 'Sugar / Chekkera',
    translit: 'panchadara panchadara chekkera chakkara sugar chini sakkarai seene white sugar sugar bag',
    category: 'essentials',
    defaultQty: '2 కిలోలు',
    commonQtys: ['2 కిలోలు', '1 కిలో', '5 కిలోలు', 'అర కిలో'],
    icon: '🍚',
    badge: 'ముఖ్యమైనది'
  },
  {
    id: 'e_4',
    nameTe: 'రాతి ఉప్పు (లావు ఉప్పు / గళ్ళుప్పు)',
    nameEn: 'Rock Salt / Crystal Salt',
    translit: 'rathi uppu raati uppu crystal salt lavu uppu kal uppu rock salt sea salt doddu uppu gulluppu rati uppu',
    category: 'essentials',
    defaultQty: '1 ప్యాకెట్',
    commonQtys: ['1 ప్యాకెట్', '1 కిలో', '2 ప్యాకెట్లు'],
    icon: '🧂'
  },
  {
    id: 'e_5',
    nameTe: 'సన్న ఉప్పు (టాటా ఉప్పు / అయోడైజ్డ్)',
    nameEn: 'Table Salt / Tata Salt',
    translit: 'sanna uppu table salt tata salt iodized salt fine salt namak kudu uppu cooking salt sanna uppu packet',
    category: 'essentials',
    defaultQty: '1 ప్యాకెట్',
    commonQtys: ['1 ప్యాకెట్', '1 కిలో', '2 ప్యాకెట్లు'],
    icon: '🧂',
    badge: 'ముఖ్యమైనది'
  },
  {
    id: 'e_6',
    nameTe: 'సైంధవ లవణం (పింక్ సాల్ట్)',
    nameEn: 'Pink Himalayan Salt / Saindhava Lavanam',
    translit: 'saindhava lavanam pink salt himalayan pink salt rock salt sendha namak saindhava namak',
    category: 'essentials',
    defaultQty: '1 ప్యాకెట్',
    commonQtys: ['1 ప్యాకెట్', 'అర కిలో'],
    icon: '🧂'
  },
  {
    id: 'e_7',
    nameTe: 'టీ పొడి (చక్ర గోల్డ్ / తాజ్ మహల్ / రెడ్ లేబుల్)',
    nameEn: 'Tea Powder',
    translit: 'tea podi chai patti red label taj mahal chakra gold tea powder wagh bakri tea leaves chaya podi tea powder',
    category: 'essentials',
    defaultQty: 'పావు కిలో',
    commonQtys: ['పావు కిలో', 'అర కిలో', '1 ప్యాకెట్', '500 గ్రాములు'],
    icon: '☕',
    badge: 'రోజూ వాడేది'
  },
  {
    id: 'e_8',
    nameTe: 'కాఫీ పొడి (బ్రూ / సన్‌రైజ్)',
    nameEn: 'Coffee Powder (Bru / Sunrise)',
    translit: 'coffee podi bru coffee sunrise coffee continental filter coffee nescafe kaapi coffee powder',
    category: 'essentials',
    defaultQty: '1 ప్యాకెట్',
    commonQtys: ['1 ప్యాకెట్', '100 గ్రాములు', '200 గ్రాములు', '1 డబ్బా'],
    icon: '☕'
  },
  {
    id: 'e_9',
    nameTe: 'కండచక్కెర (పటికబెల్లం)',
    nameEn: 'Rock Sugar / Mishri',
    translit: 'kandachekkera patikabellam mishri rock sugar kalkandu talmisri patika bellam',
    category: 'essentials',
    defaultQty: 'పావు కిలో',
    commonQtys: ['పావు కిలో', 'అర కిలో'],
    icon: '🍬'
  },
  {
    id: 'e_10',
    nameTe: 'వంట సోడా (బేకింగ్ సోడా)',
    nameEn: 'Baking Soda / Cooking Soda',
    translit: 'vanta soda baking soda cooking soda meetha soda sodium bi carbonate baking powder soda',
    category: 'essentials',
    defaultQty: '1 ప్యాకెట్',
    commonQtys: ['1 ప్యాకెట్', '50 గ్రాములు', '100 గ్రాములు'],
    icon: '⚪'
  },
  {
    id: 'e_11',
    nameTe: 'అప్పడాలు (ఉద్ది అప్పడాలు)',
    nameEn: 'Papad / Appadalu',
    translit: 'appadalu papad papadam lijjat papad urad papad appalam uddi appadalu fryums papad',
    category: 'essentials',
    defaultQty: '1 ప్యాకెట్',
    commonQtys: ['1 ప్యాకెట్', '2 ప్యాకెట్లు'],
    icon: '🍘'
  },
  {
    id: 'e_12',
    nameTe: 'బియ్యం వడియాలు / గుమ్మడి వడియాలు',
    nameEn: 'Vadiyalu / Fryums',
    translit: 'vadiyalu biyyam vadiyalu gummadi vadiyalu fryums sabudana vadiyalu papadum vadiyalu',
    category: 'essentials',
    defaultQty: '1 ప్యాకెట్',
    commonQtys: ['1 ప్యాకెట్', 'అర కిలో'],
    icon: '🍘'
  },
  {
    id: 'e_13',
    nameTe: 'వెనిగర్ (తెల్ల వెనిగర్)',
    nameEn: 'White Vinegar',
    translit: 'vinegar white vinegar sirka synthetic vinegar cooking vinegar',
    category: 'essentials',
    defaultQty: '1 బాటిల్',
    commonQtys: ['1 బాటిల్'],
    icon: '🍾'
  },
  {
    id: 'e_14',
    nameTe: 'టమోటో సాస్ / కెచప్',
    nameEn: 'Tomato Ketchup / Sauce',
    translit: 'tomato sauce ketchup kisan maggi tomato sauce tomato ketchup',
    category: 'essentials',
    defaultQty: '1 బాటిల్',
    commonQtys: ['1 బాటిల్', '1 ప్యాకెట్'],
    icon: '🍅'
  },
  {
    id: 'e_15',
    nameTe: 'నూడుల్స్ / మ్యాగీ',
    nameEn: 'Maggi / Instant Noodles',
    translit: 'noodles maggi yippee instant noodles maggie maggi packet',
    category: 'essentials',
    defaultQty: '1 ప్యాకెట్',
    commonQtys: ['1 ప్యాకెట్', '2 ప్యాకెట్లు', '4 ప్యాకెట్లు'],
    icon: '🍜'
  },

  // 6. డ్రై ఫ్రూట్స్ & గింజలు (Dry Fruits & Nuts)
  {
    id: 'df_1',
    nameTe: 'జీడిపప్పు (కాజు)',
    nameEn: 'Cashew Nuts / Kaju',
    translit: 'jeedi pappu jeedipappu kaju cashews cashew nuts mundiri godambi kaju pappu full kaju tukda kaju kaju',
    category: 'dryfruits',
    defaultQty: 'పావు కిలో',
    commonQtys: ['పావు కిలో', 'అర కిలో', '100 గ్రాములు', '1 కిలో'],
    icon: '🥜',
    badge: 'ప్రీమియం'
  },
  {
    id: 'df_2',
    nameTe: 'బాదం పప్పు',
    nameEn: 'Almonds / Badam',
    translit: 'badam pappu badampappu almonds badam almond badam nuts mamra badam californian almond',
    category: 'dryfruits',
    defaultQty: 'పావు కిలో',
    commonQtys: ['పావు కిలో', 'అర కిలో', '100 గ్రాములు', '1 కిలో'],
    icon: '🌰',
    badge: 'ప్రీమియం'
  },
  {
    id: 'df_3',
    nameTe: 'కిస్మిస్ (ఎండు ద్రాక్ష)',
    nameEn: 'Raisins / Kishmish',
    translit: 'kismis kishmish kishmis raisins endu draksha dry grapes dry fruits ularntha drakshai black kismis green kismis',
    category: 'dryfruits',
    defaultQty: '100 గ్రాములు',
    commonQtys: ['100 గ్రాములు', 'పావు కిలో', 'అర కిలో'],
    icon: '🍇'
  },
  {
    id: 'df_4',
    nameTe: 'పిస్తా పప్పు',
    nameEn: 'Pistachios / Pista',
    translit: 'pista pistachios pista nuts dry pista salted pista green pista',
    category: 'dryfruits',
    defaultQty: '100 గ్రాములు',
    commonQtys: ['100 గ్రాములు', 'పావు కిలో'],
    icon: '🥜'
  },
  {
    id: 'df_5',
    nameTe: 'అక్రూట్ (వాల్‌నట్స్)',
    nameEn: 'Walnuts / Akroot',
    translit: 'akroot walnuts akhrot dry walnuts walnut kernels',
    category: 'dryfruits',
    defaultQty: '100 గ్రాములు',
    commonQtys: ['100 గ్రాములు', 'పావు కిలో'],
    icon: '🌰'
  },
  {
    id: 'df_6',
    nameTe: 'ఎండు ఖర్జూరం (ఖర్జూర కాయలు)',
    nameEn: 'Dry Dates / Kharjoora',
    translit: 'endu kharjooram dry dates chuara endu kharjura dry dates khajoor dates',
    category: 'dryfruits',
    defaultQty: 'అర కిలో',
    commonQtys: ['అర కిలో', '1 కిలో', 'పావు కిలో'],
    icon: '🌴'
  },
  {
    id: 'df_7',
    nameTe: 'మెత్తటి ఖర్జూరం (లయన్ డేట్స్)',
    nameEn: 'Soft Dates (Lion Dates / Kimia)',
    translit: 'mettati kharjooram soft dates lion dates kimia wet dates khajoor dates box',
    category: 'dryfruits',
    defaultQty: '1 డబ్బా',
    commonQtys: ['1 డబ్బా', 'అర కిలో', '1 కిలో'],
    icon: '🌴'
  },
  {
    id: 'df_8',
    nameTe: 'తెల్ల నువ్వులు',
    nameEn: 'White Sesame Seeds',
    translit: 'tella nuvvulu white sesame seeds til safed til ellu sesame thella nuvvulu white til',
    category: 'dryfruits',
    defaultQty: '100 గ్రాములు',
    commonQtys: ['100 గ్రాములు', 'పావు కిలో', 'అర కిలో'],
    icon: '⚪'
  },
  {
    id: 'df_9',
    nameTe: 'నల్ల నువ్వులు',
    nameEn: 'Black Sesame Seeds',
    translit: 'nalla nuvvulu black sesame seeds kala til karuppu ellu black til nalla til',
    category: 'dryfruits',
    defaultQty: '100 గ్రాములు',
    commonQtys: ['100 గ్రాములు', 'పావు కిలో'],
    icon: '⚫'
  },
  {
    id: 'df_10',
    nameTe: 'పుచ్చకాయ గింజలు (మగజ్ గింజలు)',
    nameEn: 'Watermelon Seeds / Magaz',
    translit: 'pucchakaya ginjalu melon seeds magaz tarbooj seeds watermelon seeds pumpkin seeds',
    category: 'dryfruits',
    defaultQty: '100 గ్రాములు',
    commonQtys: ['100 గ్రాములు', 'పావు కిలో'],
    icon: '🍉'
  },

  // 7. కూరగాయలు & ఆకులు (Fresh Produce)
  {
    id: 'v_1',
    nameTe: 'ఉల్లిపాయలు',
    nameEn: 'Onions',
    translit: 'ullipayalu ullipaya ulli onion onions pyaz eerulli vengayam kanda erragaddalu erra gaddalu red onions small onions pyas',
    category: 'vegetables',
    defaultQty: '2 కిలోలు',
    commonQtys: ['1 కిలో', '2 కిలోలు', '5 కిలోలు'],
    icon: '🧅',
    badge: 'ముఖ్యమైనది'
  },
  {
    id: 'v_2',
    nameTe: 'బంగాళాదుంపలు (ఆలు)',
    nameEn: 'Potatoes / Bangaladumpalu',
    translit: 'bangaladumpalu aloo alu potato potatoes batata urulaikizhangu urula dumpalu aalu aalo bangala dumpa alugadda alu gadda',
    category: 'vegetables',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', '2 కిలోలు', 'అర కిలో'],
    icon: '🥔',
    badge: 'ముఖ్యమైనది'
  },
  {
    id: 'v_3',
    nameTe: 'టమోటాలు',
    nameEn: 'Tomatoes',
    translit: 'tomatolu tamata tomato tomatoes thakkali tomato pandlu country tomato naatu tomato',
    category: 'vegetables',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', '2 కిలోలు', 'అర కిలో'],
    icon: '🍅',
    badge: 'ముఖ్యమైనది'
  },
  {
    id: 'v_4',
    nameTe: 'పచ్చి మిరపకాయలు',
    nameEn: 'Green Chillies',
    translit: 'pachi mirapakayalu pachi mirchi green chillies mirchi hari mirch pachimirchi bajji mirchi mirchi',
    category: 'vegetables',
    defaultQty: 'పావు కిలో',
    commonQtys: ['పావు కిలో', '100 గ్రాములు', 'అర కిలో'],
    icon: '🌶️'
  },
  {
    id: 'v_5',
    nameTe: 'వెల్లుల్లి (చిన్న ఉల్లిపాయలు)',
    nameEn: 'Garlic',
    translit: 'vellulli garlic lahsun poondu small onions tellagaddalu thella gaddalu vellulli payalu garlic cloves lahsun',
    category: 'vegetables',
    defaultQty: 'పావు కిలో',
    commonQtys: ['పావు కిలో', 'అర కిలో', '100 గ్రాములు'],
    icon: '🧄',
    badge: 'ముఖ్యమైనది'
  },
  {
    id: 'v_6',
    nameTe: 'తాజా అల్లం',
    nameEn: 'Fresh Ginger',
    translit: 'allam adrak ginger injee fresh ginger allam paste adrak allam piece allam vellulli',
    category: 'vegetables',
    defaultQty: 'పావు కిలో',
    commonQtys: ['పావు కిలో', '100 గ్రాములు', 'అర కిలో'],
    icon: '🫚'
  },
  {
    id: 'v_6_b',
    nameTe: 'అల్లం వెల్లుల్లి పేస్ట్',
    nameEn: 'Ginger Garlic Paste',
    translit: 'allam vellulli paste allamvellulli ginger garlic paste gingergarlic allam vellulli allam velulli paste dabur ginger garlic paste',
    category: 'vegetables',
    defaultQty: '1 ప్యాకెట్ (100 gm)',
    commonQtys: ['1 ప్యాకెట్ (100 gm)', '1 డబ్బా (200 gm)', '1 బాటిల్'],
    icon: '🫙',
    badge: 'రోజూ వాడేది'
  },
  {
    id: 'v_7',
    nameTe: 'కొత్తిమీర',
    nameEn: 'Coriander Leaves',
    translit: 'kothimeera kotthimira kothimira coriander leaves cilantro hara dhaniya kothamalli kothimeera katta kotthimeera cilantro katta',
    category: 'vegetables',
    defaultQty: '2 కట్టలు',
    commonQtys: ['1 కట్ట', '2 కట్టలు', '3 కట్టలు'],
    icon: '🌿'
  },
  {
    id: 'v_8',
    nameTe: 'కరివేపాకు',
    nameEn: 'Curry Leaves',
    translit: 'karivepaku karvepaku curry leaves karibevu kadi patta kariveppila karivepaaku curry aaku karivepaku katta',
    category: 'vegetables',
    defaultQty: '1 కట్ట',
    commonQtys: ['1 కట్ట', '2 కట్టలు', '50 గ్రాములు'],
    icon: '🍃'
  },
  {
    id: 'v_9',
    nameTe: 'పుదీనా',
    nameEn: 'Mint Leaves / Pudina',
    translit: 'pudina pudheena mint pudina aaku pudina leaves pudina katta mint leaves',
    category: 'vegetables',
    defaultQty: '1 కట్ట',
    commonQtys: ['1 కట్ట', '2 కట్టలు'],
    icon: '🌿'
  },
  {
    id: 'v_10',
    nameTe: 'నిమ్మకాయలు',
    nameEn: 'Lemons',
    translit: 'nimmakayalu lemons lime nimbu elumichai lemon nimmakaya nimmakayalu',
    category: 'vegetables',
    defaultQty: '4 నంబర్లు',
    commonQtys: ['4 నంబర్లు', 'అర డజను', '1 డజను'],
    icon: '🍋'
  },
  {
    id: 'v_11',
    nameTe: 'కొబ్బరికాయ (తాజా కొబ్బరి)',
    nameEn: 'Whole Fresh Coconut',
    translit: 'kobbarikaya fresh coconut naariyal thengai coconut kobbari kaya pachi kobbari coconut',
    category: 'vegetables',
    defaultQty: '1 నంబర్',
    commonQtys: ['1 నంబర్', '2 నంబర్లు'],
    icon: '🥥'
  },

  // 8. పూజా & నిత్యావసరాలు (Pooja & Cleaning Supplies)
  {
    id: 'pc_1',
    nameTe: 'అగర్‌బత్తీలు (సుగంధ ధూప కడ్డీలు)',
    nameEn: 'Agarbatti / Incense Sticks',
    translit: 'agarbatti agarbathi agarbattilu incense sticks dhoop batti cycle brand moksh champa agarbatti pooja sticks',
    category: 'pooja_clean',
    defaultQty: '1 ప్యాకెట్',
    commonQtys: ['1 ప్యాకెట్', '2 ప్యాకెట్లు', '1 డబ్బా'],
    icon: '🪔'
  },
  {
    id: 'pc_2',
    nameTe: 'కర్పూరం బిళ్ళలు (హారతి కర్పూరం)',
    nameEn: 'Camphor Tablets / Karpooram',
    translit: 'karpooram karpuram camphor kapur harathi karpooram mangala harathi tablet camphor aarthi kapur',
    category: 'pooja_clean',
    defaultQty: '1 డబ్బా',
    commonQtys: ['1 డబ్బా', '1 ప్యాకెట్'],
    icon: '⚪'
  },
  {
    id: 'pc_3',
    nameTe: 'పచ్చ కర్పూరం',
    nameEn: 'Edible Green Camphor / Paccha Karpooram',
    translit: 'paccha karpooram paccha karpuram edible green camphor pacha kapoor prasad camphor edible camphor',
    category: 'pooja_clean',
    defaultQty: '1 డబ్బా',
    commonQtys: ['1 డబ్బా', '10 గ్రాములు'],
    icon: '🌿'
  },
  {
    id: 'pc_4',
    nameTe: 'పత్తి వత్తులు (పూజ ఒత్తులు)',
    nameEn: 'Cotton Wicks / Vatthulu',
    translit: 'patti vatthulu cotton wicks pooja wicks batti diya wicks phool batti deepam vatthulu pooja vathulu',
    category: 'pooja_clean',
    defaultQty: '1 ప్యాకెట్',
    commonQtys: ['1 ప్యాకెట్', '2 ప్యాకెట్లు'],
    icon: '🕯️'
  },
  {
    id: 'pc_5',
    nameTe: 'కుంకుమ & పసుపు (పూజ కోసం)',
    nameEn: 'Kumkum & Pooja Pasupu',
    translit: 'kumkuma pasupu kumkum haldi pooja kumkum sindoor raji kumkum haldi kumkum pooja pasupu',
    category: 'pooja_clean',
    defaultQty: '1 ప్యాకెట్',
    commonQtys: ['1 ప్యాకెట్', '2 ప్యాకెట్లు'],
    icon: '🔴'
  },
  {
    id: 'pc_6',
    nameTe: 'సాంబ్రాణి కడ్డీలు / కప్పులు',
    nameEn: 'Sambrani Cups / Dhoop',
    translit: 'sambrani sambrani dhoop cups dhoop sticks havan sambrani dhoopam sambrani cup dhoop cup',
    category: 'pooja_clean',
    defaultQty: '1 ప్యాకెట్',
    commonQtys: ['1 ప్యాకెట్', '1 డబ్బా'],
    icon: '🪔'
  },
  {
    id: 'pc_7',
    nameTe: 'అగ్గిపెట్టెలు (మ్యాచ్ బాక్స్)',
    nameEn: 'Matchboxes',
    translit: 'aggipettelu matchbox matches match box cheemata pette safety matches',
    category: 'pooja_clean',
    defaultQty: '1 బండిల్ (10 బాక్సులు)',
    commonQtys: ['1 బండిల్ (10 బాక్సులు)', '2 బండిల్స్'],
    icon: '🔥'
  },
  {
    id: 'pc_8',
    nameTe: 'డిటర్జెంట్ పౌడర్ (సర్ఫ్ ఎక్సెల్ / ఏరియల్)',
    nameEn: 'Washing Powder / Detergent',
    translit: 'detergent powder surf excel ariel rin tide surf battala powder washing powder washing detergent deterjent',
    category: 'pooja_clean',
    defaultQty: '1 కిలో',
    commonQtys: ['1 కిలో', '2 కిలోలు', '5 కిలోల బ్యాగ్', 'అర కిలో'],
    icon: '🧺'
  },
  {
    id: 'pc_9',
    nameTe: 'బట్టల సబ్బులు (రిన్ / వీల్)',
    nameEn: 'Laundry Soap Bars',
    translit: 'battala sabbulu laundry soap rin soap wheel bar 501 soap cloth washing soap battala sabbu',
    category: 'pooja_clean',
    defaultQty: '4 నంబర్లు',
    commonQtys: ['2 నంబర్లు', '4 నంబర్లు', '6 నంబర్లు'],
    icon: '🧼'
  },
  {
    id: 'pc_10',
    nameTe: 'డిష్‌వాష్ బార్ / లిక్విడ్ (విమ్)',
    nameEn: 'Vim Dishwash Bar / Liquid Gel',
    translit: 'dishwash vim bar vim liquid exol utensil soap patrala sabbu dish wash gel vim dishwash',
    category: 'pooja_clean',
    defaultQty: '1 బార్',
    commonQtys: ['1 బార్', '1 బాటిల్ (500 ml)', '2 బార్లు'],
    icon: '🍽️'
  },
  {
    id: 'pc_11',
    nameTe: 'స్నానపు సబ్బులు (సంతూర్ / డెట్టాల్ / మైసూర్ శాండల్)',
    nameEn: 'Bathing Soaps',
    translit: 'snanapu sabbulu soap soaps bath soap santoor dettol mysore sandal lux dove pears medimix cinthol bathing soap sabbu',
    category: 'pooja_clean',
    defaultQty: '3 నంబర్ల ప్యాక్',
    commonQtys: ['1 నంబర్', '3 నంబర్ల ప్యాక్', '5 నంబర్ల ప్యాక్'],
    icon: '🧼'
  },
  {
    id: 'pc_12',
    nameTe: 'టూత్‌పేస్ట్ (కోల్‌గేట్ / క్లోజప్ / డాబర్ రెడ్)',
    nameEn: 'Toothpaste',
    translit: 'toothpaste colgate closeup dabur red pepsodent sensodyne tooth paste tooth brush paste',
    category: 'pooja_clean',
    defaultQty: '1 ట్యూబ్ (150 gm)',
    commonQtys: ['1 ట్యూబ్ (150 gm)', '1 ట్యూబ్ (100 gm)', '2 ట్యూబ్‌లు'],
    icon: '🪥'
  },
  {
    id: 'pc_13',
    nameTe: 'షాంపూ (బాటిల్ / శాషేలు)',
    nameEn: 'Shampoo (Head & Shoulders / Clinic Plus / Meera)',
    translit: 'shampoo clinic plus meera dove vatika head and shoulders shampoo sachet shampoo bottle',
    category: 'pooja_clean',
    defaultQty: '1 బాటిల్',
    commonQtys: ['1 బాటిల్', '1 స్ట్రిప్ (శాషేలు)'],
    icon: '🧴'
  },
  {
    id: 'pc_14',
    nameTe: 'ఫ్లోర్ క్లీనర్ (లైజాల్ / ఫినాయిల్)',
    nameEn: 'Floor Cleaner / Lizol / Phenyl',
    translit: 'floor cleaner lizol phenyl domex surface cleaner floor wash disinfectant phenyl',
    category: 'pooja_clean',
    defaultQty: '1 లీటరు',
    commonQtys: ['1 లీటరు', '500 ml', '2 లీటర్లు'],
    icon: '🧹'
  },
  {
    id: 'pc_15',
    nameTe: 'టాయిలెట్ క్లీనర్ (హార్పిక్)',
    nameEn: 'Toilet Cleaner (Harpic)',
    translit: 'toilet cleaner harpic toilet wash sanifresh harpic bottle flush cleaner',
    category: 'pooja_clean',
    defaultQty: '1 బాటిల్ (500 ml)',
    commonQtys: ['1 బాటిల్ (500 ml)', '1 లీటరు'],
    icon: '🚽'
  }
];

// Universal Module / Browser compatibility
if (typeof window !== 'undefined') {
  window.GROCERY_CATEGORIES = GROCERY_CATEGORIES;
  window.STANDARD_QUANTITIES = STANDARD_QUANTITIES;
  window.TELUGU_UNITS = TELUGU_UNITS;
  window.GROCERY_ITEMS = GROCERY_ITEMS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    GROCERY_CATEGORIES,
    STANDARD_QUANTITIES,
    TELUGU_UNITS,
    GROCERY_ITEMS
  };
}

