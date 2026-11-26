// కిరాణా & పూజా చిట్టా (Kirana & Pooja Chitta) - Telugu Groceries & 80mm Thermal Receipt Generator
// Production-Ready Script with Resilient Image Fallback, Gen-Z Tenglish Search & Zero Emojis Policy

(function () {
  'use strict';

  // --- SVG FALLBACK GENERATOR (Zero Emojis Policy) ---
  window.getCategoryFallbackSvg = function (category) {
    let bg = '#fffbeb', stroke = '#d97706', fill = '#f59e0b', path = '';
    const cat = (category || '').toLowerCase();

    if (cat.includes('pooja')) {
      bg = '#fff7ed';
      stroke = '#ea580c';
      fill = '#f97316';
      // Diya & Sacred Flame
      path = '<path d="M12 3c0 3.5-3 5-3 8 0 3.3 2.7 6 6 6s6-2.7 6-6c0-3-3-4.5-3-8z" fill="' + fill + '"/><path d="M4 17c0 4 3.6 6 8 6s8-2 8-6H4z" fill="' + stroke + '"/>';
    } else if (cat.includes('veg') || cat.includes('green')) {
      bg = '#f0fdf4';
      stroke = '#15803d';
      fill = '#16a34a';
      // Fresh Leaf / Produce
      path = '<path d="M12 3C8 3 4 7 4 12c0 6 7 9 8 9s8-3 8-9c0-5-4-9-8-9zm0 15c-3-2-6-5-6-8 0-3 2.5-5 6-5s6 2 6 5c0 3-3 6-6 8z" fill="' + fill + '"/>';
    } else if (cat.includes('fruit')) {
      bg = '#fff1f2';
      stroke = '#be123c';
      fill = '#f43f5e';
      // Fresh Orchard Fruit
      path = '<circle cx="12" cy="13" r="8" fill="' + fill + '"/><path d="M12 5c0-2.5 2-3 4-3" stroke="' + stroke + '" stroke-width="2" stroke-linecap="round"/>';
    } else if (cat.includes('oil')) {
      bg = '#fefce8';
      stroke = '#ca8a04';
      fill = '#eab308';
      // Oil Droplet
      path = '<path d="M12 3s-6 6.5-6 11a6 6 0 0 0 12 0c0-4.5-6-11-6-11z" fill="' + fill + '" stroke="' + stroke + '" stroke-width="1.5"/>';
    } else if (cat.includes('spice')) {
      bg = '#fef2f2';
      stroke = '#b91c1c';
      fill = '#dc2626';
      // Spice Bowl
      path = '<path d="M4 12h16a8 8 0 0 1-16 0z" fill="' + fill + '"/><path d="M12 4v5M8 6l4-2 4 2" stroke="' + stroke + '" stroke-width="1.8" stroke-linecap="round"/>';
    } else if (cat.includes('seed')) {
      bg = '#f7fee7';
      stroke = '#4d7c0f';
      fill = '#65a30d';
      // Seedling / Seeds
      path = '<path d="M12 20V10M12 10c0-4 4-6 7-6 0 4-3 6-7 6zM12 13c0-3.5-3.5-5.5-6.5-5.5 0 3.5 2.5 5.5 6.5 5.5z" stroke="' + stroke + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="' + fill + '"/>';
    } else if (cat.includes('dry_fruit') || cat.includes('dryfruit')) {
      bg = '#fef3c7';
      stroke = '#92400e';
      fill = '#d97706';
      // Nut / Dry Fruit
      path = '<ellipse cx="12" cy="13" rx="6" ry="8" fill="' + fill + '" stroke="' + stroke + '" stroke-width="1.6"/>';
    } else {
      // Groceries / Grains / Spices
      bg = '#fffbeb';
      stroke = '#b45309';
      fill = '#d97706';
      // Wheat / Grain Stalk
      path = '<path d="M12 2v20M8 6l4-2 4 2M7 11l5-2 5 2M8 16l4-2 4 2" stroke="' + stroke + '" stroke-width="2.2" stroke-linecap="round" fill="none"/>';
    }

    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 24 24" fill="none">' +
      '<rect width="24" height="24" fill="' + bg + '"/>' +
      '<g transform="translate(0, 0)">' + path + '</g>' +
      '</svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  };

  window.handleProductImageError = function (img, category) {
    if (!img) return;
    img.onerror = null;
    img.src = window.getCategoryFallbackSvg(category);
  };

  // --- APPLICATION STATE ---
  const STATE = {
    cart: [],
    currentCategory: 'all',
    searchQuery: '',
    searchHistory: [],
    customerDetails: {
      name: 'శ్రీనివాస్ గారు',
      phone: '9876543210',
      address: 'గాంధీ నగర్, విజయవాడ',
      date: new Date().toISOString().split('T')[0],
      shopName: 'శ్రీరామ కిరాణా & పూజా స్టోర్',
      shopPhone: '9440123456',
      shopPlace: 'మెయిన్ రోడ్డు, విజయవాడ'
    },
    orderCounter: 1042,
    pendingItemForModal: null,
    customItems: []
  };

  // --- STORAGE KEYS ---
  const STORAGE_KEYS = {
    CART: 'telugu_grocery_cart_v2',
    CUSTOMER: 'telugu_grocery_customer_v2',
    CUSTOM_ITEMS: 'telugu_grocery_custom_items_v2',
    ORDER_NUM: 'telugu_grocery_order_num_v2',
    SEARCH_HISTORY: 'telugu_grocery_search_history_v2'
  };

  // --- DOM CACHE ---
  const DOM = {
    // Top Nav
    btnOpenCustomItem: document.getElementById('btn-open-custom-item'),
    btnOpenDetails: document.getElementById('btn-open-details'),
    btnToggleCartMobile: document.getElementById('btn-toggle-cart-mobile'),
    mobileCartBadge: document.getElementById('mobile-cart-badge'),

    // Search & History
    searchInput: document.getElementById('search-input'),
    btnClearSearch: document.getElementById('btn-clear-search'),
    searchHistoryContainer: document.getElementById('search-history-container'),
    recentSearchesList: document.getElementById('recent-searches-list'),
    btnClearHistory: document.getElementById('btn-clear-history'),
    tenglishQuickChips: document.getElementById('tenglish-quick-chips'),

    // Category & Grid
    categoryPillsContainer: document.getElementById('category-pills-container'),
    filteredItemsCount: document.getElementById('filtered-items-count'),
    btnQuickCustomAdd: document.getElementById('btn-quick-custom-add'),
    groceryGrid: document.getElementById('grocery-grid'),
    noResultsState: document.getElementById('no-results-state'),
    btnAddSearchedItem: document.getElementById('btn-add-searched-item'),

    // Cart Sidebar
    cartSidebar: document.getElementById('cart-sidebar'),
    cartItemCounter: document.getElementById('cart-item-counter'),
    btnClearCart: document.getElementById('btn-clear-cart'),
    btnCloseMobileCart: document.getElementById('btn-close-mobile-cart'),
    summaryCustomerName: document.getElementById('summary-customer-name'),
    btnEditDetailsQuick: document.getElementById('btn-edit-details-quick'),
    cartItemsList: document.getElementById('cart-items-list'),
    emptyCartState: document.getElementById('empty-cart-state'),
    btnSampleOrder: document.getElementById('btn-sample-order'),
    cartFooter: document.getElementById('cart-footer'),
    cartSummaryCount: document.getElementById('cart-summary-count'),
    cartSummaryTotal: document.getElementById('cart-summary-total'),

    // Cart Main Buttons
    btnGeneratePdf: document.getElementById('btn-generate-pdf'),
    btnPrintOrder: document.getElementById('btn-print-order'),
    btnWhatsappShare: document.getElementById('btn-whatsapp-share'),
    btnPreviewPdf: document.getElementById('btn-preview-pdf'),
    btnCopyList: document.getElementById('btn-copy-list'),

    // Modal 1: Quantity
    modalQuantity: document.getElementById('modal-quantity'),
    modalItemIcon: document.getElementById('modal-item-icon'),
    modalItemTitle: document.getElementById('modal-item-title'),
    modalItemSubtitle: document.getElementById('modal-item-subtitle'),
    btnCloseQtyModal: document.getElementById('btn-close-qty-modal'),
    modalQuickQuantities: document.getElementById('modal-quick-quantities'),
    modalCustomQtyVal: document.getElementById('modal-custom-qty-val'),
    modalCustomQtyUnit: document.getElementById('modal-custom-qty-unit'),
    modalItemNote: document.getElementById('modal-item-note'),
    btnCancelQtyModal: document.getElementById('btn-cancel-qty-modal'),
    btnConfirmAddItem: document.getElementById('btn-confirm-add-item'),

    // Modal 2: Custom Item
    modalCustomItem: document.getElementById('modal-custom-item'),
    btnCloseCustomItemModal: document.getElementById('btn-close-custom-item-modal'),
    formCustomItem: document.getElementById('form-custom-item'),
    customItemNameTe: document.getElementById('custom-item-name-te'),
    customItemNameTenglish: document.getElementById('custom-item-name-tenglish'),
    customItemCategory: document.getElementById('custom-item-category'),
    customItemTagType: document.getElementById('custom-item-tag-type'),
    customItemQtyVal: document.getElementById('custom-item-qty-val'),
    customItemQtyUnit: document.getElementById('custom-item-qty-unit'),
    customItemFile: document.getElementById('custom-item-file'),
    customItemImageUrl: document.getElementById('custom-item-image-url'),
    customImagePreviewWrap: document.getElementById('custom-image-preview-wrap'),
    customImagePreview: document.getElementById('custom-image-preview'),
    btnCancelCustomItem: document.getElementById('btn-cancel-custom-item'),

    // Modal 3: Details
    modalDetails: document.getElementById('modal-details'),
    btnCloseDetailsModal: document.getElementById('btn-close-details-modal'),
    inputCustomerName: document.getElementById('input-customer-name'),
    inputCustomerPhone: document.getElementById('input-customer-phone'),
    inputOrderDate: document.getElementById('input-order-date'),
    inputCustomerAddress: document.getElementById('input-customer-address'),
    inputShopName: document.getElementById('input-shop-name'),
    inputShopPhone: document.getElementById('input-shop-phone'),
    inputShopPlace: document.getElementById('input-shop-place'),
    btnSaveDetails: document.getElementById('btn-save-details'),

    // Modal 4: Thermal Receipt Preview
    modalPdfPreview: document.getElementById('modal-pdf-preview'),
    btnDownloadFromPreview: document.getElementById('btn-download-from-preview'),
    btnPrintFromPreview: document.getElementById('btn-print-from-preview'),
    btnClosePreviewModal: document.getElementById('btn-close-preview-modal'),
    printableArea: document.getElementById('printable-area'),
    pdfViewShopName: document.getElementById('pdf-view-shop-name'),
    pdfViewShopContact: document.getElementById('pdf-view-shop-contact'),
    pdfViewOrderId: document.getElementById('pdf-view-order-id'),
    pdfViewDate: document.getElementById('pdf-view-date'),
    pdfViewCustomerName: document.getElementById('pdf-view-customer-name'),
    pdfViewCustomerPhone: document.getElementById('pdf-view-customer-phone'),
    pdfViewCustomerAddress: document.getElementById('pdf-view-customer-address'),
    receiptItemsContainer: document.getElementById('receipt-items-container'),
    pdfViewTotalCount: document.getElementById('pdf-view-total-count'),
    pdfViewTotalUnits: document.getElementById('pdf-view-total-units'),
    pdfViewBarcodeNum: document.getElementById('pdf-view-barcode-num'),

    // Mobile Floating Bar
    mobileFloatingCartBar: document.getElementById('mobile-floating-cart-bar'),
    floatingCartTrigger: document.getElementById('floating-cart-trigger'),
    floatingCartBadge: document.getElementById('floating-cart-badge'),
    floatingCartLabel: document.getElementById('floating-cart-label'),
    btnFloatingViewCart: document.getElementById('btn-floating-view-cart'),

    // Toast
    toast: document.getElementById('toast'),
    toastIcon: document.getElementById('toast-icon'),
    toastMessage: document.getElementById('toast-message')
  };

  // --- INITIALIZATION ---
  function init() {
    loadSavedState();
    populateSelectUnits();
    renderCategories();
    renderGroceryGrid();
    renderCart();
    renderSearchHistory();
    setupEventListeners();
  }

  // --- LOAD STATE FROM LOCALSTORAGE ---
  function loadSavedState() {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
      if (savedCart) STATE.cart = JSON.parse(savedCart);

      const savedCust = localStorage.getItem(STORAGE_KEYS.CUSTOMER);
      if (savedCust) STATE.customerDetails = { ...STATE.customerDetails, ...JSON.parse(savedCust) };

      const savedCustom = localStorage.getItem(STORAGE_KEYS.CUSTOM_ITEMS);
      if (savedCustom) STATE.customItems = JSON.parse(savedCustom);

      const savedOrderNum = localStorage.getItem(STORAGE_KEYS.ORDER_NUM);
      if (savedOrderNum) STATE.orderCounter = parseInt(savedOrderNum, 10) || 1042;

      const savedHistory = localStorage.getItem(STORAGE_KEYS.SEARCH_HISTORY);
      if (savedHistory) STATE.searchHistory = JSON.parse(savedHistory);

      // Populate input defaults
      if (DOM.inputCustomerName) DOM.inputCustomerName.value = STATE.customerDetails.name;
      if (DOM.inputCustomerPhone) DOM.inputCustomerPhone.value = STATE.customerDetails.phone;
      if (DOM.inputCustomerAddress) DOM.inputCustomerAddress.value = STATE.customerDetails.address;
      if (DOM.inputShopName) DOM.inputShopName.value = STATE.customerDetails.shopName;
      if (DOM.inputShopPhone) DOM.inputShopPhone.value = STATE.customerDetails.shopPhone;
      if (DOM.inputShopPlace) DOM.inputShopPlace.value = STATE.customerDetails.shopPlace;
      if (DOM.inputOrderDate) DOM.inputOrderDate.value = STATE.customerDetails.date;
      if (DOM.summaryCustomerName) DOM.summaryCustomerName.textContent = STATE.customerDetails.name;
    } catch (e) {
      console.warn('Could not read from localStorage:', e);
    }
  }

  function saveCartState() {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(STATE.cart));
      localStorage.setItem(STORAGE_KEYS.ORDER_NUM, STATE.orderCounter.toString());
    } catch (e) {
      console.warn('Could not save cart state:', e);
    }
  }

  // --- RENDER CATEGORY TABS (Zero emojis - clean fontawesome icons) ---
  function renderCategories() {
    if (!DOM.categoryPillsContainer) return;
    DOM.categoryPillsContainer.innerHTML = '';

    const categories = (typeof GROCERY_CATEGORIES !== 'undefined') ? GROCERY_CATEGORIES : [
      { id: 'all', name: 'అన్నీ', nameEn: 'All', icon: 'fa-layer-group', color: 'bg-emerald-600' },
      { id: 'groceries', name: 'కిరాణా & నవధాన్యాలు', nameEn: 'Groceries', icon: 'fa-wheat-awn', color: 'bg-amber-600' },
      { id: 'grains', name: 'ధాన్యాలు & పప్పులు', nameEn: 'Grains', icon: 'fa-bowl-rice', color: 'bg-yellow-700' },
      { id: 'millets', name: 'చిరుధాన్యాలు', nameEn: 'Millets', icon: 'fa-wheat-awn-circle-exclamation', color: 'bg-amber-700' },
      { id: 'spices', name: 'మసాలాలు', nameEn: 'Spices', icon: 'fa-mortar-pestle', color: 'bg-red-700' },
      { id: 'oils', name: 'వంట నూనెలు', nameEn: 'Oils', icon: 'fa-bottle-droplet', color: 'bg-yellow-600' },
      { id: 'kitchen_staples', name: 'వంటగది నిత్యావసరాలు', nameEn: 'Staples', icon: 'fa-jar', color: 'bg-stone-700' },
      { id: 'seeds', name: 'గింజలు & విత్తనాలు', nameEn: 'Seeds', icon: 'fa-seedling', color: 'bg-lime-700' },
      { id: 'dry_fruits', name: 'డ్రై ఫ్రూట్స్', nameEn: 'Dry Fruits', icon: 'fa-cookie-bite', color: 'bg-amber-800' },
      { id: 'vegetables', name: 'కూరగాయలు', nameEn: 'Vegetables', icon: 'fa-carrot', color: 'bg-green-600' },
      { id: 'leafy_greens', name: 'ఆకుకూరలు', nameEn: 'Leafy Vegetables', icon: 'fa-leaf', color: 'bg-emerald-600' },
      { id: 'fruits', name: 'తాజా పండ్లు', nameEn: 'Fruits', icon: 'fa-apple-whole', color: 'bg-rose-600' },
      { id: 'pooja', name: 'పూజా సామాగ్రి', nameEn: 'Pooja', icon: 'fa-om', color: 'bg-orange-600' },
      { id: 'pooja_flowers', name: 'పూజా పువ్వులు', nameEn: 'Pooja Flowers', icon: 'fa-spa', color: 'bg-pink-600' }
    ];

    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.type = 'button';
      const isActive = STATE.currentCategory === cat.id;

      btn.className = `category-pill shrink-0 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 border shadow-sm ${
        isActive
          ? 'bg-emerald-800 text-white border-emerald-900 shadow-md ring-2 ring-emerald-500/30'
          : 'bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border-slate-200'
      }`;

      btn.innerHTML = `<i class="fa-solid ${cat.icon} text-xs"></i> <span>${cat.name}</span>`;

      btn.addEventListener('click', () => {
        STATE.currentCategory = cat.id;
        renderCategories();
        renderGroceryGrid();
      });

      DOM.categoryPillsContainer.appendChild(btn);
    });
  }

  // --- POPULATE TELUGU UNITS IN SELECT DROPDOWNS ---
  function populateSelectUnits() {
    const units = (typeof TELUGU_UNITS !== 'undefined') ? TELUGU_UNITS : [
      'కిలోలు', 'గ్రాములు', 'లీటర్లు', 'మిల్లీ లీటర్లు', 'ప్యాకెట్లు', 'కట్టలు', 'కాయలు', 'డజన్లు', 'జతలు', 'డబ్బాలు', 'బాటిళ్ళు'
    ];

    const fillSelect = (selectElem) => {
      if (!selectElem) return;
      selectElem.innerHTML = '';
      units.forEach(u => {
        const opt = document.createElement('option');
        opt.value = u;
        opt.textContent = u;
        selectElem.appendChild(opt);
      });
    };

    fillSelect(DOM.modalCustomQtyUnit);
    fillSelect(DOM.customItemQtyUnit);
  }

  // --- GEN-Z TENGLISH NORMALIZATION & SEARCH MATCHING ---
  function normalizeTenglish(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .replace(/aa/g, 'a')
      .replace(/ee/g, 'i')
      .replace(/oo/g, 'u')
      .replace(/sh/g, 's')
      .replace(/th/g, 't')
      .replace(/dh/g, 'd')
      .replace(/bh/g, 'b')
      .replace(/ph/g, 'p')
      .replace(/kh/g, 'k')
      .replace(/gh/g, 'g')
      .replace(/[\-_/\,.]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function matchesSearch(item, query) {
    if (!query) return true;
    const cleanQ = query.trim().toLowerCase();
    const normQ = normalizeTenglish(cleanQ);

    const nameTe = (item.nameTe || '').toLowerCase();
    const nameEn = (item.nameEn || '').toLowerCase();
    const translit = (item.translit || '').toLowerCase();
    const normTranslit = normalizeTenglish(translit);

    // Exact or direct substring match
    if (nameTe.includes(cleanQ) || nameEn.includes(cleanQ) || translit.includes(cleanQ)) {
      return true;
    }

    // Normalized Tenglish fuzzy match
    if (normTranslit.includes(normQ)) {
      return true;
    }

    // Individual token matching (e.g. "putnala" + "pappu")
    const tokens = cleanQ.split(' ').filter(Boolean);
    if (tokens.length > 1) {
      const allMatch = tokens.every(tok => {
        const normTok = normalizeTenglish(tok);
        return nameTe.includes(tok) || nameEn.includes(tok) || translit.includes(tok) || normTranslit.includes(normTok);
      });
      if (allMatch) return true;
    }

    return false;
  }

  function getCatalogList() {
    const defaultCatalog = (typeof GROCERY_ITEMS !== 'undefined') ? GROCERY_ITEMS : [];
    return [...STATE.customItems, ...defaultCatalog];
  }

  function filterCatalog() {
    const all = getCatalogList();
    return all.filter(item => {
      // Category filter (supports extraCategories so items appear in all relevant lists without duplicates in 'all')
      if (STATE.currentCategory !== 'all') {
        const itemCat = (item.mainCategory || item.category || '').toLowerCase();
        const extraCats = Array.isArray(item.extraCategories) ? item.extraCategories.map(c => c.toLowerCase()) : [];
        const matchesCat = (target) => itemCat === target || extraCats.includes(target);

        if (STATE.currentCategory === 'groceries') {
          const grocGroup = ['groceries', 'grains', 'dals', 'spices', 'essentials', 'dryfruits', 'dry_fruits', 'oils', 'kitchen_staples', 'millets'];
          if (!grocGroup.includes(itemCat) && !extraCats.some(c => grocGroup.includes(c))) {
            return false;
          }
        } else if (STATE.currentCategory === 'dry_fruits') {
          if (!matchesCat('dry_fruits') && !matchesCat('dryfruits')) return false;
        } else if (STATE.currentCategory === 'grains') {
          if (!matchesCat('grains') && !matchesCat('dals')) return false;
        } else if (STATE.currentCategory === 'millets') {
          if (!matchesCat('millets')) return false;
        } else if (STATE.currentCategory === 'spices') {
          if (!matchesCat('spices')) return false;
        } else if (STATE.currentCategory === 'oils') {
          if (!matchesCat('oils')) return false;
        } else if (STATE.currentCategory === 'kitchen_staples') {
          if (!matchesCat('kitchen_staples') && !matchesCat('essentials')) return false;
        } else if (STATE.currentCategory === 'seeds') {
          if (!matchesCat('seeds') && !matchesCat('seed')) return false;
        } else if (STATE.currentCategory === 'vegetables') {
          if (!['vegetables', 'greens', 'leafy_greens'].includes(itemCat) && !extraCats.some(c => ['vegetables', 'greens', 'leafy_greens'].includes(c))) {
            return false;
          }
        } else if (STATE.currentCategory === 'leafy_greens') {
          if (!matchesCat('leafy_greens') && !matchesCat('greens')) return false;
        } else if (STATE.currentCategory === 'fruits') {
          if (!matchesCat('fruits')) return false;
        } else if (STATE.currentCategory === 'pooja') {
          if (!matchesCat('pooja') && !matchesCat('pooja_flowers')) return false;
        } else if (STATE.currentCategory === 'pooja_flowers') {
          if (!matchesCat('pooja_flowers') && !matchesCat('flowers')) return false;
        } else {
          if (!matchesCat(STATE.currentCategory)) return false;
        }
      }

      // Search filter
      if (STATE.searchQuery) {
        return matchesSearch(item, STATE.searchQuery);
      }

      return true;
    });
  }

  // --- SEARCH HISTORY MANAGEMENT ---
  function addToSearchHistory(q) {
    if (!q || q.trim().length < 2) return;
    const clean = q.trim();
    STATE.searchHistory = STATE.searchHistory.filter(item => item.toLowerCase() !== clean.toLowerCase());
    STATE.searchHistory.unshift(clean);
    if (STATE.searchHistory.length > 8) STATE.searchHistory.pop();
    try {
      localStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(STATE.searchHistory));
    } catch (e) {}
    renderSearchHistory();
  }

  function renderSearchHistory() {
    if (!DOM.searchHistoryContainer || !DOM.recentSearchesList) return;
    if (STATE.searchHistory.length === 0) {
      DOM.searchHistoryContainer.classList.add('hidden');
      return;
    }

    DOM.searchHistoryContainer.classList.remove('hidden');
    DOM.recentSearchesList.innerHTML = '';

    STATE.searchHistory.forEach(q => {
      const chip = document.createElement('span');
      chip.className = 'inline-flex items-center gap-1 bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-900 px-2 py-0.5 rounded-md text-[11px] font-medium cursor-pointer transition border border-slate-200';
      chip.innerHTML = `<span>${q}</span><i class="fa-solid fa-xmark text-[9px] text-slate-400 hover:text-red-500 ml-0.5 p-0.5"></i>`;

      // Click to search
      chip.querySelector('span').addEventListener('click', () => {
        if (DOM.searchInput) DOM.searchInput.value = q;
        executeSearch(q);
      });

      // Remove single
      chip.querySelector('.fa-xmark').addEventListener('click', (e) => {
        e.stopPropagation();
        STATE.searchHistory = STATE.searchHistory.filter(item => item !== q);
        try {
          localStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(STATE.searchHistory));
        } catch (err) {}
        renderSearchHistory();
      });

      DOM.recentSearchesList.appendChild(chip);
    });
  }

  function executeSearch(query) {
    STATE.searchQuery = query.trim();
    if (STATE.searchQuery) addToSearchHistory(STATE.searchQuery);
    if (DOM.btnClearSearch) {
      if (STATE.searchQuery) DOM.btnClearSearch.classList.remove('hidden');
      else DOM.btnClearSearch.classList.add('hidden');
    }
    renderGroceryGrid();
  }

  // --- RENDER GROCERY PRODUCT GRID (Strictly Zero Emojis) ---
  function renderGroceryGrid() {
    if (!DOM.groceryGrid) return;
    DOM.groceryGrid.innerHTML = '';

    const items = filterCatalog();
    if (DOM.filteredItemsCount) DOM.filteredItemsCount.textContent = items.length;

    if (items.length === 0) {
      DOM.groceryGrid.classList.add('hidden');
      if (DOM.noResultsState) DOM.noResultsState.classList.remove('hidden');
      return;
    }

    DOM.groceryGrid.classList.remove('hidden');
    if (DOM.noResultsState) DOM.noResultsState.classList.add('hidden');

    items.forEach(item => {
      const card = createProductCard(item);
      DOM.groceryGrid.appendChild(card);
    });
  }

  // --- CREATE PRODUCT CARD WITH RESILIENT REAL IMAGES & HOVER TOOLTIP ---
  function createProductCard(item) {
    const card = document.createElement('div');
    card.className = 'grocery-card bg-white rounded-2xl p-3 border border-slate-200 shadow-sm flex flex-col justify-between relative group hover:border-emerald-300 transition-all duration-200';

    // Find if already in cart
    const cartEntry = STATE.cart.find(c => c.nameTe === item.nameTe);
    const inCart = !!cartEntry;

    // Quick Quantities buttons
    const quickQtys = (item.commonQtys && item.commonQtys.length > 0)
      ? item.commonQtys.slice(0, 3)
      : ['1 కిలో', '500 గ్రాములు', '250 గ్రాములు'];

    // Transliteration snippet for Gen Z
    const translitPreview = (item.translit || '').split(' ').slice(0, 3).join(' ');

    // Category identifier
    const cat = item.mainCategory || item.category || 'groceries';

    // Priority Indicator Dot & Tooltip (Amber: Essential, Green: Fresh, Rose: Offer, Orange: Pooja)
    let priorityDotHtml = '';
    if (item.tagType && item.tagType !== 'none') {
      const dotType = item.tagType; // 'essential' | 'fresh' | 'offer' | 'pooja'
      const label = item.tagLabelTelugu || (
        dotType === 'essential' ? 'ముఖ్యమైనది (Essential)' :
        dotType === 'fresh' ? 'తాజా పంట (Fresh Farm)' :
        dotType === 'offer' ? 'ప్రత్యేక ఆఫర్ (Special Offer)' :
        'పూజా విశేషం (Sacred Pooja)'
      );
      priorityDotHtml = `
        <div class="priority-dot-wrap" tabindex="0" role="button" aria-label="${label}">
          <div class="priority-dot dot-${dotType}"></div>
          <div class="priority-tooltip">
            <span class="tooltip-indicator dot-${dotType}"></span>
            <span>${label}</span>
          </div>
        </div>
      `;
    }

    card.innerHTML = `
      <div>
        <!-- Real Product Image Container with Priority Dot OUTSIDE the image frame -->
        <div class="product-media-container relative mb-2.5">
          <div class="product-image-wrap">
            <img 
              src="${item.imageUrl || ''}" 
              alt="${item.nameTe}" 
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              onerror="window.handleProductImageError(this, '${cat}')"
            />
          </div>
          ${priorityDotHtml}
        </div>

        <!-- Product Name in Telugu Script & English Subtitle -->
        <div class="mb-2">
          <h3 class="font-bold text-slate-900 text-xs sm:text-sm leading-snug break-words">
            ${item.nameTe}
          </h3>
          <p class="text-[11px] text-slate-500 font-sans leading-tight truncate mt-0.5">
            ${item.nameEn || ''}
          </p>
          ${translitPreview ? `
            <p class="text-[10px] text-emerald-700 font-sans font-medium truncate mt-0.5">
              <span class="bg-emerald-50 text-emerald-800 px-1 py-0.2 rounded border border-emerald-200 text-[9px] font-bold">Gen Z:</span> ${translitPreview}
            </p>
          ` : ''}
        </div>

        <!-- In-Cart Indicator if item is selected -->
        ${inCart ? `
          <div class="mb-2 bg-amber-50 border border-amber-200 text-amber-900 text-[11px] px-2 py-1 rounded-lg flex items-center justify-between">
            <span class="font-semibold flex items-center gap-1">
              <i class="fa-solid fa-check text-emerald-600"></i> రసీదులో ఉంది:
            </span>
            <span class="font-bold text-emerald-800">${cartEntry.qty}</span>
          </div>
        ` : ''}
      </div>

      <!-- Quick Action Buttons: 1-Click Telugu Quantities & Custom -->
      <div class="pt-2 border-t border-slate-100 space-y-1.5">
        <div class="text-[10px] font-bold text-slate-400">పరిమాణం ఎంచుకోండి:</div>
        <div class="grid grid-cols-3 gap-1">
          ${quickQtys.map(q => `
            <button 
              type="button" 
              class="btn-quick-qty text-[11px] py-1 px-1 rounded-lg font-bold transition text-center truncate border ${
                inCart && cartEntry.qty === q
                  ? 'bg-emerald-700 text-white border-emerald-800 shadow-sm'
                  : 'bg-slate-50 hover:bg-emerald-100 text-slate-800 border-slate-200'
              }"
              data-qty="${q}"
            >
              ${q}
            </button>
          `).join('')}
        </div>

        <!-- Custom Quantity Modal Opener -->
        <button 
          type="button" 
          class="btn-open-qty-modal w-full py-1 text-[11px] font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50/80 hover:bg-emerald-100 rounded-lg transition border border-emerald-200 flex items-center justify-center gap-1"
        >
          <i class="fa-solid fa-sliders text-[10px]"></i>
          <span>మరిన్ని పరిమాణాలు...</span>
        </button>
      </div>
    `;

    // Quick quantity button clicks
    card.querySelectorAll('.btn-quick-qty').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedQty = btn.getAttribute('data-qty');
        addItemToCart(item, selectedQty);
        triggerConfetti();
        showToast(`${item.nameTe} (${selectedQty}) రసీదులో చేర్చబడింది!`);
      });
    });

    // Custom Quantity button click
    const btnCustom = card.querySelector('.btn-open-qty-modal');
    if (btnCustom) {
      btnCustom.addEventListener('click', (e) => {
        e.stopPropagation();
        openQuantityModal(item);
      });
    }

    return card;
  }

  // --- MASTER LIST OF AUTHENTIC TELUGU EVERYDAY QUANTITIES (MATCHING REFERENCE IMAGE) ---
  const TELUGU_STANDARD_QUANTITY_OPTIONS = [
    { primary: 'పావు కిలో', secondary: '250 గ్రాములు', value: 'పావు కిలో' },
    { primary: 'అర కిలో', secondary: '500 గ్రాములు', value: 'అర కిలో' },
    { primary: 'ముప్పావు కిలో', secondary: '750 గ్రాములు', value: 'ముప్పావు కిలో' },
    { primary: '1 కిలో', secondary: '1000 గ్రాములు', value: '1 కిలో' },
    { primary: '2 కిలోలు', secondary: '2000 గ్రాములు', value: '2 కిలోలు' },
    { primary: '5 కిలోలు', secondary: '5 KG', value: '5 కిలోలు' },
    { primary: '10 కిలోలు', secondary: '10 KG', value: '10 కిలోలు' },
    { primary: '25 కిలోల బస్తా', secondary: '1 బ్యాగ్', value: '25 కిలోల బస్తా' },
    { primary: '50 గ్రాములు', secondary: '50 gm', value: '50 గ్రాములు' },
    { primary: '100 గ్రాములు', secondary: '100 gm', value: '100 గ్రాములు' },
    { primary: '200 గ్రాములు', secondary: '200 gm', value: '200 గ్రాములు' },
    { primary: 'అర లీటరు', secondary: '500 మి.లీ', value: 'అర లీటరు' },
    { primary: '1 లీటరు', secondary: '1000 మి.లీ', value: '1 లీటరు' },
    { primary: '2 లీటర్లు', secondary: '2 Liters', value: '2 లీటర్లు' },
    { primary: '5 లీటర్ల డబ్బా', secondary: '5 Liters Can', value: '5 లీటర్ల డబ్బా' },
    { primary: '1 ప్యాకెట్', secondary: '1 Packet', value: '1 ప్యాకెట్' },
    { primary: '2 ప్యాకెట్లు', secondary: '2 Packets', value: '2 ప్యాకెట్లు' },
    { primary: '1 కట్ట', secondary: '1 Bunch', value: '1 కట్ట' },
    { primary: '2 కట్టలు', secondary: '2 Bunches', value: '2 కట్టలు' },
    { primary: '1 డజను', secondary: '12 నంబర్లు', value: '1 డజను' },
    { primary: 'అర డజను', secondary: '6 నంబర్లు', value: 'అర డజను' },
    { primary: '1 కాయ', secondary: '1 Piece', value: '1 కాయ' },
    { primary: '2 కాయలు', secondary: '2 Pieces', value: '2 కాయలు' },
    { primary: '1 జత', secondary: '2 Pieces (Pair)', value: '1 జత' },
    { primary: '1 పీస్', secondary: '1 Single Pc', value: '1 పీస్' }
  ];

  // --- QUANTITY MODAL LOGIC ---
  function openQuantityModal(item) {
    STATE.pendingItemForModal = item;
    if (!DOM.modalQuantity) return;

    if (DOM.modalItemTitle) DOM.modalItemTitle.textContent = item.nameTe;
    if (DOM.modalItemSubtitle) DOM.modalItemSubtitle.textContent = item.nameEn ? `${item.nameEn} - కావలసిన పరిమాణం` : 'కావలసిన పరిమాణాన్ని ఎంచుకోండి';
    if (DOM.modalItemNote) DOM.modalItemNote.value = '';

    const defaultSelection = item.defaultQty || (item.commonQtys && item.commonQtys[0]) || '1 కిలో';
    if (DOM.modalCustomQtyVal) DOM.modalCustomQtyVal.value = defaultSelection;

    // Populate the full 2-line authentic Telugu measurement grid (matching user's reference image)
    if (DOM.modalQuickQuantities) {
      DOM.modalQuickQuantities.innerHTML = '';

      TELUGU_STANDARD_QUANTITY_OPTIONS.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        const isSelected = (defaultSelection === opt.value || defaultSelection === opt.primary);
        btn.className = `qty-card-btn text-left p-2.5 sm:p-3 bg-white border rounded-xl sm:rounded-2xl transition-all duration-150 flex flex-col justify-center shadow-xs cursor-pointer focus:outline-none ${
          isSelected 
            ? 'border-emerald-600 bg-emerald-50/90 ring-2 ring-emerald-500' 
            : 'border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50'
        }`;
        
        btn.innerHTML = `
          <span class="font-bold text-slate-900 text-xs sm:text-sm leading-snug group-hover:text-emerald-800">${opt.primary}</span>
          <span class="text-[10px] sm:text-[11px] text-slate-400 font-sans mt-0.5 leading-tight">${opt.secondary}</span>
        `;

        btn.addEventListener('click', () => {
          DOM.modalQuickQuantities.querySelectorAll('.qty-card-btn').forEach(b => {
            b.classList.remove('border-emerald-600', 'bg-emerald-50/90', 'ring-2', 'ring-emerald-500');
            b.classList.add('border-slate-200', 'bg-white');
          });
          btn.classList.remove('border-slate-200', 'bg-white');
          btn.classList.add('border-emerald-600', 'bg-emerald-50/90', 'ring-2', 'ring-emerald-500');

          if (DOM.modalCustomQtyVal) {
            DOM.modalCustomQtyVal.value = opt.value;
          }
        });

        // Double click immediately confirms and adds to cart
        btn.addEventListener('dblclick', () => {
          const note = DOM.modalItemNote ? DOM.modalItemNote.value.trim() : '';
          addItemToCart(item, opt.value, note);
          closeQuantityModal();
          triggerConfetti();
          showToast(`${item.nameTe} (${opt.value}) రసీదులో చేర్చబడింది!`);
        });

        DOM.modalQuickQuantities.appendChild(btn);
      });
    }

    DOM.modalQuantity.classList.remove('hidden');
  }

  function closeQuantityModal() {
    if (DOM.modalQuantity) DOM.modalQuantity.classList.add('hidden');
    STATE.pendingItemForModal = null;
  }

  // --- CART MANAGEMENT ---
  function addItemToCart(item, qtyString, note) {
    const existingIndex = STATE.cart.findIndex(c => c.nameTe === item.nameTe);
        const cat = item.mainCategory || item.category || 'groceries';

    if (existingIndex > -1) {
      STATE.cart[existingIndex].qty = qtyString;
      if (note !== undefined) STATE.cart[existingIndex].note = note;
    } else {
      STATE.cart.push({
        id: item.id || `item_${Date.now()}`,
        nameTe: item.nameTe,
        nameEn: item.nameEn || '',
        category: cat,
        mainCategory: cat,
        qty: qtyString,
        note: note || '',
        imageUrl: item.imageUrl || '',
        tagType: item.tagType,
        tagLabelTelugu: item.tagLabelTelugu
      });
    }

    saveCartState();
    renderCart();
    renderGroceryGrid();
  }

  function removeItemFromCart(index) {
    STATE.cart.splice(index, 1);
    saveCartState();
    renderCart();
    renderGroceryGrid();
  }

  function clearCart() {
    if (STATE.cart.length === 0) return;
    if (confirm('మీ రసీదులోని సరుకులన్నింటినీ ఖాళీ చేయాలా?')) {
      STATE.cart = [];
      saveCartState();
      renderCart();
      renderGroceryGrid();
      showToast('సరుకుల రసీదు ఖాళీ చేయబడింది');
    }
  }

  
  // --- RENDER CART SIDEBAR ---
  function renderCart() {
    const count = STATE.cart.length;

    // Badges & Counters
    if (DOM.cartItemCounter) DOM.cartItemCounter.textContent = count;
    if (DOM.mobileCartBadge) DOM.mobileCartBadge.textContent = count;
    if (DOM.floatingCartBadge) DOM.floatingCartBadge.textContent = count;
    if (DOM.floatingCartLabel) DOM.floatingCartLabel.textContent = `${count} సరుకులు చేర్చబడ్డాయి`;

    
    if (DOM.cartSummaryCount) DOM.cartSummaryCount.textContent = `${count} రకాలు`;
        
    if (count === 0) {
      if (DOM.emptyCartState) DOM.emptyCartState.classList.remove('hidden');
      if (DOM.cartItemsList) DOM.cartItemsList.classList.add('hidden');
      if (DOM.cartFooter) DOM.cartFooter.classList.add('hidden');
      return;
    }

    if (DOM.emptyCartState) DOM.emptyCartState.classList.add('hidden');
    if (DOM.cartItemsList) DOM.cartItemsList.classList.remove('hidden');
    if (DOM.cartFooter) DOM.cartFooter.classList.remove('hidden');

    DOM.cartItemsList.innerHTML = '';

    STATE.cart.forEach((item, index) => {
      const row = document.createElement('div');
      row.className = 'py-2 flex items-start justify-between gap-2 text-xs';

      const isPooja = (item.category === 'pooja' || item.mainCategory === 'pooja');

      row.innerHTML = `
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-800 break-words">${item.nameTe}</span>
            ${isPooja ? '<span class="bg-orange-100 text-orange-800 text-[9px] font-bold px-1.5 py-0.2 rounded border border-orange-300">పూజా</span>' : ''}
          </div>
          <p class="text-[11px] text-emerald-800 font-bold mt-0.5">
            పరిమాణం: <span class="bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">${item.qty}</span>
          </p>
          ${item.note ? `<p class="text-[10px] text-amber-800 italic mt-0.5">సూచన: ${item.note}</p>` : ''}
        </div>
        <div class="flex items-center gap-2 shrink-0">
          
          <button type="button" class="btn-remove-item text-slate-400 hover:text-red-600 p-1 transition" title="తీసివేయి">
            <i class="fa-solid fa-trash-can text-xs"></i>
          </button>
        </div>
      `;

      row.querySelector('.btn-remove-item').addEventListener('click', () => {
        removeItemFromCart(index);
      });

      DOM.cartItemsList.appendChild(row);
    });
  }

  // --- POPULATE 80MM TICKET-STYLE THERMAL RECEIPT DOM ---
  function populatePrintableChittaDOM() {
    const cust = STATE.customerDetails;

    // Header
    if (DOM.pdfViewShopName) DOM.pdfViewShopName.textContent = cust.shopName || 'శ్రీరామ కిరాణా & పూజా స్టోర్';
    if (DOM.pdfViewShopContact) {
      DOM.pdfViewShopContact.textContent = `${cust.shopPlace ? cust.shopPlace + ' | ' : ''}ఫోన్: ${cust.shopPhone || '9440123456'}`;
    }

    // Ticket & Customer Meta
    if (DOM.pdfViewOrderId) DOM.pdfViewOrderId.textContent = `#KC-${STATE.orderCounter}`;
    if (DOM.pdfViewBarcodeNum) DOM.pdfViewBarcodeNum.textContent = `KC-${STATE.orderCounter}-TELUGU-STORE`;

    const now = new Date();
    const dateFormatted = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()}`;
    const timeFormatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (DOM.pdfViewDate) DOM.pdfViewDate.textContent = `${dateFormatted} | ${timeFormatted}`;

    if (DOM.pdfViewCustomerName) DOM.pdfViewCustomerName.textContent = cust.name || 'శ్రీనివాస్ గారు';
    if (DOM.pdfViewCustomerPhone) DOM.pdfViewCustomerPhone.textContent = cust.phone || '-';
    if (DOM.pdfViewCustomerAddress) DOM.pdfViewCustomerAddress.textContent = cust.address || '-';

    // Group items into distinct thermal receipt categories
    const groups = {
      groceries: { title: '*** [ కిరాణా సరుకులు & నవధాన్యాలు ] ***', items: [], isPooja: false },
      grains: { title: '*** [ ధాన్యాలు & పప్పు దినుసులు ] ***', items: [], isPooja: false },
      millets: { title: '*** [ సిరిధాన్యాలు (చిరుధాన్యాలు) ] ***', items: [], isPooja: false },
      seeds: { title: '*** [ గింజలు & విత్తనాలు ] ***', items: [], isPooja: false },
      dry_fruits: { title: '*** [ డ్రై ఫ్రూట్స్ ] ***', items: [], isPooja: false },
      spices: { title: '*** [ మసాలాలు & సుగంధ ద్రవ్యాలు ] ***', items: [], isPooja: false },
      oils: { title: '*** [ వంట నూనెలు ] ***', items: [], isPooja: false },
      kitchen_staples: { title: '*** [ వంటగది నిత్యావసరాలు ] ***', items: [], isPooja: false },
      vegetables: { title: '*** [ తాజా కూరగాయలు ] ***', items: [], isPooja: false },
      leafy_greens: { title: '*** [ తాజా ఆకుకూరలు ] ***', items: [], isPooja: false },
      fruits: { title: '*** [ తాజా పండ్లు ] ***', items: [], isPooja: false },
      pooja: { title: '*** [ పవిత్ర హిందూ పూజా సామాగ్రి ] ***', items: [], isPooja: true },
      pooja_flowers: { title: '*** [ పవిత్ర పూజా పువ్వులు ] ***', items: [], isPooja: true }
    };

    STATE.cart.forEach(item => {
      const cat = (item.mainCategory || item.category || 'groceries').toLowerCase();
      if (cat.includes('flower')) {
        groups.pooja_flowers.items.push(item);
      } else if (cat.includes('pooja')) {
        groups.pooja.items.push(item);
      } else if (cat.includes('millet')) {
        groups.millets.items.push(item);
      } else if (cat.includes('grain')) {
        groups.grains.items.push(item);
      } else if (cat.includes('seed')) {
        groups.seeds.items.push(item);
      } else if (cat.includes('dry')) {
        groups.dry_fruits.items.push(item);
      } else if (cat.includes('spice')) {
        groups.spices.items.push(item);
      } else if (cat.includes('oil')) {
        groups.oils.items.push(item);
      } else if (cat.includes('kitchen')) {
        groups.kitchen_staples.items.push(item);
      } else if (cat.includes('leafy') || cat.includes('green')) {
        groups.leafy_greens.items.push(item);
      } else if (cat.includes('veg')) {
        groups.vegetables.items.push(item);
      } else if (cat.includes('fruit')) {
        groups.fruits.items.push(item);
      } else {
        groups.groceries.items.push(item);
      }
    });

    if (!DOM.receiptItemsContainer) return;
    DOM.receiptItemsContainer.innerHTML = '';

    let globalIndex = 1;

    Object.keys(groups).forEach(key => {
      const grp = groups[key];
      if (grp.items.length === 0) return;

      // Section Header Banner
      const secHeader = document.createElement('div');
      secHeader.className = `receipt-section-header ${grp.isPooja ? 'receipt-section-pooja' : ''}`;
      secHeader.textContent = grp.title;
      DOM.receiptItemsContainer.appendChild(secHeader);

      // Section Item Rows
      grp.items.forEach(it => {
        const itemRow = document.createElement('div');
        itemRow.className = 'receipt-item-row';

        itemRow.innerHTML = `
          <div class="flex items-start gap-1.5 flex-1 min-w-0 pr-2">
            <span class="font-bold text-slate-500 w-4 shrink-0">${globalIndex++}.</span>
            <div class="min-w-0 flex-1">
              <span class="font-bold text-slate-900">${it.nameTe}</span>
              ${it.nameEn ? `<span class="text-[10px] text-slate-500 block leading-tight">(${it.nameEn})</span>` : ''}
              ${it.note ? `<span class="text-[10px] text-amber-800 block italic">>> సూచన: ${it.note}</span>` : ''}
            </div>
          </div>
          <div class="text-right shrink-0 flex items-center gap-2">
            <span class="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-[11px]">${it.qty}</span>
            <span class="inline-block w-4 h-4 border border-slate-400 rounded-sm text-center text-[10px] text-transparent select-none">✓</span>
          </div>
        `;

        DOM.receiptItemsContainer.appendChild(itemRow);
      });
    });

    // Totals
    if (DOM.pdfViewTotalCount) DOM.pdfViewTotalCount.textContent = `${STATE.cart.length} రకాలు`;
    if (DOM.pdfViewTotalUnits) DOM.pdfViewTotalUnits.textContent = `${STATE.cart.length} యూనిట్లు`;
  }

  // --- OPEN / CLOSE PDF PREVIEW MODAL ---
  function openPdfPreview() {
    if (STATE.cart.length === 0) {
      showToast('దయచేసి ముందుగా సరుకులను రసీదులో చేర్చండి!');
      return;
    }
    populatePrintableChittaDOM();
    if (DOM.modalPdfPreview) DOM.modalPdfPreview.classList.remove('hidden');
  }

  function closePdfPreview() {
    if (DOM.modalPdfPreview) DOM.modalPdfPreview.classList.add('hidden');
  }

  // --- GENERATE AND DOWNLOAD PDF (Seamless 80mm Continuous Ticket) ---
  async function generateAndDownloadPdf() {
    if (STATE.cart.length === 0) {
      showToast('రసీదులో సరుకులు లేవు!');
      return;
    }

    populatePrintableChittaDOM();
    const element = DOM.printableArea;
    if (!element) return;

    showToast('రసీదు PDF తయారవుతోంది...');

    // Wait for Telugu web font to be completely ready
    try {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
    } catch (e) {}

    const wasHidden = DOM.modalPdfPreview && DOM.modalPdfPreview.classList.contains('hidden');
    if (wasHidden && DOM.modalPdfPreview) {
      DOM.modalPdfPreview.classList.remove('hidden');
      DOM.modalPdfPreview.style.opacity = '0';
      DOM.modalPdfPreview.style.pointerEvents = 'none';
    }

    // Allow DOM to settle and calculate real height
    await new Promise(resolve => setTimeout(resolve, 150));

    const actualHeightPx = element.scrollHeight || element.offsetHeight || 600;
    const actualWidthPx = element.offsetWidth || 360;

    // Scale calculation:
    // Standard 80mm roll width with 2mm left/right margin = 76mm printable width
    const printableWidthMm = 76;
    const imgHeightMm = Math.ceil((actualHeightPx * printableWidthMm) / actualWidthPx);
    const topMarginMm = 4;
    const bottomMarginMm = 4;
    // Exactly size the single-page ticket height to prevent page cuts
    const totalPageHeightMm = Math.max(140, imgHeightMm + topMarginMm + bottomMarginMm + 6);

    const orderId = `KC-${STATE.orderCounter}`;

    const opt = {
      margin: [topMarginMm, 2, bottomMarginMm, 2],
      filename: `Kirana-Pooja-Ticket-${orderId}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2.5,
        useCORS: true,
        logging: false,
        letterRendering: false,
        allowTaint: true,
        backgroundColor: '#ffffff',
        scrollY: 0,
        scrollX: 0
      },
      pagebreak: {
        mode: ['avoid-all', 'css', 'legacy'],
        avoid: ['.receipt-item-row', '.receipt-section-header', '.thermal-totals-section', '.thermal-footer']
      },
      jsPDF: {
        unit: 'mm',
        format: [80, totalPageHeightMm],
        orientation: 'portrait'
      }
    };

    try {
      if (typeof html2pdf !== 'undefined') {
        await html2pdf().set(opt).from(element).save();
        showToast('రసీదు PDF డౌన్‌లోడ్ పూర్తయింది!');
        triggerConfetti();
        STATE.orderCounter++;
        saveCartState();
      } else {
        window.print();
      }
    } catch (err) {
      console.error('PDF generation error:', err);
      showToast('PDF తయారీలో లోపం ఏర్పడింది. దయచేసి ప్రింట్ చేయండి.');
    } finally {
      if (wasHidden && DOM.modalPdfPreview) {
        DOM.modalPdfPreview.classList.add('hidden');
        DOM.modalPdfPreview.style.opacity = '';
        DOM.modalPdfPreview.style.pointerEvents = '';
      }
    }
  }

  // --- NATIVE PRINT ---
  function printOrder() {
    if (STATE.cart.length === 0) {
      showToast('రసీదులో సరుకులు లేవు!');
      return;
    }
    populatePrintableChittaDOM();
    if (DOM.modalPdfPreview) DOM.modalPdfPreview.classList.remove('hidden');
    window.print();
  }

  // --- SHARE ON WHATSAPP ---
  function shareOnWhatsapp() {
    if (STATE.cart.length === 0) {
      showToast('సరుకుల రసీదు ఖాళీగా ఉంది!');
      return;
    }

    const cust = STATE.customerDetails;
    
    let text = `*|| ${cust.shopName || 'శ్రీ లక్ష్మి కిరాణా & పూజా స్టోర్'} ||*\n`;
    text += `*రసీదు టిక్కెట్ నం:* #KC-${STATE.orderCounter}\n`;
    text += `*తేదీ:* ${new Date().toLocaleDateString('te-IN')}\n`;
    text += `*గ్రాహకుడు:* ${cust.name}\n`;
    text += `*ఫోన్:* ${cust.phone}\n`;
    text += `--------------------------------\n`;
    text += `*సరుకుల జాబితా (ORDER ITEMS):*\n\n`;

    STATE.cart.forEach((it, i) => {
      text += `${i + 1}. *${it.nameTe}* - ${it.qty}`;
      if (it.note) text += ` _(సూచన: ${it.note})_`;
      text += `\n`;
    });

    text += `--------------------------------\n`;
    text += `*మొత్తం సరుకులు:* ${STATE.cart.length} రకాలు\n\n`;
    text += `_గమనిక: పూజా సామాగ్రిని ప్రత్యేక పవిత్ర సంచిలో ప్యాక్ చేయగలరు._\n`;
    text += `*ధన్యవాదములు!*`;

    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  }

  // --- COPY TICKET TEXT ---
  function copyListText() {
    if (STATE.cart.length === 0) {
      showToast('కాపీ చేయడానికి సరుకులు లేవు!');
      return;
    }

    const cust = STATE.customerDetails;
    let text = `|| ${cust.shopName} ||\nరసీదు నం: #KC-${STATE.orderCounter}\nకస్టమర్: ${cust.name}\n\n`;
    STATE.cart.forEach((it, i) => {
      text += `${i + 1}. ${it.nameTe} - ${it.qty}\n`;
    });

    navigator.clipboard.writeText(text).then(() => {
      showToast('రసీదు వివరాలు కాపీ అయ్యాయి!');
    }).catch(() => {
      showToast('కాపీ చేయడంలో లోపం!');
    });
  }

  // --- SAMPLE ORDER LOADER ---
  function loadSampleOrder() {
    const samples = [
      { nameTe: 'పుట్నాల పప్పు (వేయించిన శనగ పప్పు)', nameEn: 'Roasted Gram Dal', category: 'groceries', mainCategory: 'groceries', qty: '500 గ్రాములు' },
      { nameTe: 'సోనా మసూరి బియ్యం (పాత బియ్యం)', nameEn: 'Sona Masoori Rice', category: 'groceries', mainCategory: 'groceries', qty: '25 కిలోల బస్తా' },
      { nameTe: 'గోధుమలు', nameEn: 'Wheat (Godhumalu)', category: 'groceries', mainCategory: 'groceries', qty: '2 కిలోలు' },
      { nameTe: 'టమాటా / టమోటా', nameEn: 'Tomato', category: 'vegetables', mainCategory: 'vegetables', qty: '1 కిలో' },
      { nameTe: 'కొత్తిమీర (తాజా కట్ట)', nameEn: 'Fresh Coriander', category: 'vegetables', mainCategory: 'vegetables', qty: '2 కట్టలు' },
      { nameTe: 'అరటి పండు (చక్కెరకేళి / అమృతపాణి)', nameEn: 'Banana', category: 'fruits', mainCategory: 'fruits', qty: '1 డజను' },
      { nameTe: 'మామిడి పండు (బంగినపల్లి)', nameEn: 'Sweet Mango', category: 'fruits', mainCategory: 'fruits', qty: '1 కిలో' },
      { nameTe: 'అగరబత్తీలు (సుగంధ ధూపం)', nameEn: 'Incense Sticks', category: 'pooja', mainCategory: 'pooja', qty: '1 ప్యాకెట్' },
      { nameTe: 'హారతి కర్పూరం బిళ్లలు', nameEn: 'Camphor Tablets', category: 'pooja', mainCategory: 'pooja', qty: '1 ప్యాకెట్' },
      { nameTe: 'పూజా కొబ్బరికాయ (పీచుతో)', nameEn: 'Sacred Pooja Coconut', category: 'pooja', mainCategory: 'pooja', qty: '1 కాయ' }
    ];

    STATE.cart = [];
    samples.forEach(s => addItemToCart(s, s.qty));
    triggerConfetti();
    showToast('నమూనా సరుకులు రసీదులో చేర్చబడ్డాయి!');
  }

  // --- CUSTOM ITEM SUBMIT WITH IMAGE UPLOAD OR URL ---
  function handleCustomItemSubmit(e) {
    e.preventDefault();
    const nameTe = (DOM.customItemNameTe ? DOM.customItemNameTe.value : '').trim();
    const nameTeng = (DOM.customItemNameTenglish ? DOM.customItemNameTenglish.value : '').trim();
    const category = DOM.customItemCategory ? DOM.customItemCategory.value : 'groceries';
    const tagType = DOM.customItemTagType ? DOM.customItemTagType.value : 'none';
    const qtyVal = DOM.customItemQtyVal ? DOM.customItemQtyVal.value.trim() : '1';
    const qtyUnit = DOM.customItemQtyUnit ? DOM.customItemQtyUnit.value : 'కిలోలు';
    
    if (!nameTe || !nameTeng) {
      alert('దయచేసి తెలుగు పేరు మరియు టెంగ్లీష్ పేరు తప్పకుండా నమోదు చేయండి.');
      return;
    }

    const qtyString = `${qtyVal} ${qtyUnit}`;

    let tagLabelTelugu = null;
    if (tagType === 'essential') tagLabelTelugu = 'ముఖ్యమైనది (Essential)';
    else if (tagType === 'fresh') tagLabelTelugu = 'తాజా పంట (Fresh Farm)';
    else if (tagType === 'offer') tagLabelTelugu = 'ప్రత్యేక ఆఫర్ (Special Offer)';
    else if (tagType === 'pooja') tagLabelTelugu = 'పూజా విశేషం (Sacred Pooja)';

    // Get image preview if uploaded or pasted
    const imgUrl = (DOM.customItemImageUrl ? DOM.customItemImageUrl.value.trim() : '') ||
                   (DOM.customImagePreview ? DOM.customImagePreview.src : '') ||
                   window.getCategoryFallbackSvg(category);

    const newItem = {
      id: `custom_${Date.now()}`,
      nameTe: nameTe,
      nameEn: nameTeng,
      translit: `${nameTeng} ${nameTe}`,
      mainCategory: category,
      category: category,
      imageUrl: imgUrl,
      defaultQty: qtyString,
      commonQtys: [qtyString, '1 కిలో', '500 గ్రాములు'],
      tagType: (tagType !== 'none') ? tagType : null,
      tagLabelTelugu: tagLabelTelugu,
      inStock: true
    };

    STATE.customItems.unshift(newItem);
    try {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_ITEMS, JSON.stringify(STATE.customItems));
    } catch (err) {}

    // Add directly to cart
    addItemToCart(newItem, qtyString);

    if (DOM.modalCustomItem) DOM.modalCustomItem.classList.add('hidden');
    if (DOM.formCustomItem) DOM.formCustomItem.reset();
    if (DOM.customImagePreviewWrap) DOM.customImagePreviewWrap.classList.add('hidden');

    triggerConfetti();
    showToast(`${nameTe} విజయవంతంగా చేర్చబడింది!`);
  }

  // --- IMAGE UPLOAD HELPER WITH HTML5 CANVAS COMPRESSION ---
  function setupImageUploadHandler() {
    if (!DOM.customItemFile) return;

    DOM.customItemFile.addEventListener('change', function () {
      const file = this.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function (e) {
        const tempImg = new Image();
        tempImg.onload = function () {
          // Scale down to 300x225 thumbnail to keep localStorage fast
          const canvas = document.createElement('canvas');
          canvas.width = 300;
          canvas.height = 225;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(tempImg, 0, 0, 300, 225);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

          if (DOM.customImagePreview) DOM.customImagePreview.src = dataUrl;
          if (DOM.customImagePreviewWrap) DOM.customImagePreviewWrap.classList.remove('hidden');
        };
        tempImg.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });

    if (DOM.customItemImageUrl) {
      DOM.customItemImageUrl.addEventListener('input', function () {
        const val = this.value.trim();
        if (val) {
          if (DOM.customImagePreview) DOM.customImagePreview.src = val;
          if (DOM.customImagePreviewWrap) DOM.customImagePreviewWrap.classList.remove('hidden');
        }
      });
    }
  }

  // --- SAVE CUSTOMER & SHOP DETAILS ---
  function saveCustomerDetails() {
    STATE.customerDetails = {
      name: DOM.inputCustomerName ? DOM.inputCustomerName.value.trim() : 'శ్రీనివాస్ గారు',
      phone: DOM.inputCustomerPhone ? DOM.inputCustomerPhone.value.trim() : '',
      address: DOM.inputCustomerAddress ? DOM.inputCustomerAddress.value.trim() : '',
      date: DOM.inputOrderDate ? DOM.inputOrderDate.value : new Date().toISOString().split('T')[0],
      shopName: DOM.inputShopName ? DOM.inputShopName.value.trim() : 'శ్రీ లక్ష్మి కిరాణా & పూజా స్టోర్',
      shopPhone: DOM.inputShopPhone ? DOM.inputShopPhone.value.trim() : '',
      shopPlace: DOM.inputShopPlace ? DOM.inputShopPlace.value.trim() : ''
    };

    if (DOM.summaryCustomerName) DOM.summaryCustomerName.textContent = STATE.customerDetails.name;
    try {
      localStorage.setItem(STORAGE_KEYS.CUSTOMER, JSON.stringify(STATE.customerDetails));
    } catch (e) {}

    if (DOM.modalDetails) DOM.modalDetails.classList.add('hidden');
    showToast('వివరాలు భద్రపరచబడ్డాయి!');
  }

  // --- DELIGHTFUL CONFETTI CELEBRATION ---
  function triggerConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#0f766e', '#f59e0b', '#10b981', '#ea580c']
      });
    }
  }

  // --- TOAST HELPER ---
  let toastTimer = null;
  function showToast(msg) {
    if (!DOM.toast || !DOM.toastMessage) return;
    DOM.toastMessage.textContent = msg;
    DOM.toast.classList.remove('opacity-0', 'pointer-events-none');
    DOM.toast.classList.add('opacity-100');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      DOM.toast.classList.remove('opacity-100');
      DOM.toast.classList.add('opacity-0', 'pointer-events-none');
    }, 2800);
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // Search input
    if (DOM.searchInput) {
      DOM.searchInput.addEventListener('input', (e) => {
        executeSearch(e.target.value);
      });
    }

    if (DOM.btnClearSearch) {
      DOM.btnClearSearch.addEventListener('click', () => {
        if (DOM.searchInput) DOM.searchInput.value = '';
        executeSearch('');
      });
    }

    if (DOM.btnClearHistory) {
      DOM.btnClearHistory.addEventListener('click', () => {
        STATE.searchHistory = [];
        try {
          localStorage.removeItem(STORAGE_KEYS.SEARCH_HISTORY);
        } catch (e) {}
        renderSearchHistory();
      });
    }

    // Tenglish chips click
    if (DOM.tenglishQuickChips) {
      DOM.tenglishQuickChips.querySelectorAll('.tenglish-chip').forEach(btn => {
        btn.addEventListener('click', () => {
          const q = btn.getAttribute('data-query');
          if (DOM.searchInput) DOM.searchInput.value = q;
          executeSearch(q);
        });
      });
    }

    // Modals open / close
    if (DOM.btnOpenCustomItem) {
      DOM.btnOpenCustomItem.addEventListener('click', () => {
        if (DOM.modalCustomItem) DOM.modalCustomItem.classList.remove('hidden');
      });
    }

    if (DOM.btnQuickCustomAdd) {
      DOM.btnQuickCustomAdd.addEventListener('click', () => {
        if (DOM.modalCustomItem) DOM.modalCustomItem.classList.remove('hidden');
      });
    }

    if (DOM.btnAddSearchedItem) {
      DOM.btnAddSearchedItem.addEventListener('click', () => {
        if (DOM.modalCustomItem) {
          DOM.modalCustomItem.classList.remove('hidden');
          if (DOM.customItemNameTenglish && STATE.searchQuery) {
            DOM.customItemNameTenglish.value = STATE.searchQuery;
          }
        }
      });
    }

    if (DOM.btnCloseCustomItemModal) {
      DOM.btnCloseCustomItemModal.addEventListener('click', () => {
        if (DOM.modalCustomItem) DOM.modalCustomItem.classList.add('hidden');
      });
    }

    if (DOM.btnCancelCustomItem) {
      DOM.btnCancelCustomItem.addEventListener('click', () => {
        if (DOM.modalCustomItem) DOM.modalCustomItem.classList.add('hidden');
      });
    }

    if (DOM.formCustomItem) {
      DOM.formCustomItem.addEventListener('submit', handleCustomItemSubmit);
    }

    // Details Modal
    if (DOM.btnOpenDetails) {
      DOM.btnOpenDetails.addEventListener('click', () => {
        if (DOM.modalDetails) DOM.modalDetails.classList.remove('hidden');
      });
    }

    if (DOM.btnEditDetailsQuick) {
      DOM.btnEditDetailsQuick.addEventListener('click', () => {
        if (DOM.modalDetails) DOM.modalDetails.classList.remove('hidden');
      });
    }

    if (DOM.btnCloseDetailsModal) {
      DOM.btnCloseDetailsModal.addEventListener('click', () => {
        if (DOM.modalDetails) DOM.modalDetails.classList.add('hidden');
      });
    }

    if (DOM.btnSaveDetails) {
      DOM.btnSaveDetails.addEventListener('click', saveCustomerDetails);
    }

    // Quantity Modal
    if (DOM.btnCloseQtyModal) DOM.btnCloseQtyModal.addEventListener('click', closeQuantityModal);
    if (DOM.btnCancelQtyModal) DOM.btnCancelQtyModal.addEventListener('click', closeQuantityModal);

    if (DOM.btnConfirmAddItem) {
      DOM.btnConfirmAddItem.addEventListener('click', () => {
        if (!STATE.pendingItemForModal) return;
        const qtyVal = DOM.modalCustomQtyVal ? DOM.modalCustomQtyVal.value.trim() : '1 కిలో';
        const note = DOM.modalItemNote ? DOM.modalItemNote.value.trim() : '';
        addItemToCart(STATE.pendingItemForModal, qtyVal, note);
        closeQuantityModal();
        triggerConfetti();
        showToast('రసీదులో చేర్చబడింది!');
      });
    }

    // Mobile cart drawer
    if (DOM.btnToggleCartMobile) {
      DOM.btnToggleCartMobile.addEventListener('click', () => {
        if (DOM.cartSidebar) DOM.cartSidebar.classList.remove('hidden');
      });
    }

    if (DOM.btnCloseMobileCart) {
      DOM.btnCloseMobileCart.addEventListener('click', () => {
        if (DOM.cartSidebar) DOM.cartSidebar.classList.add('hidden');
      });
    }

    if (DOM.btnFloatingViewCart || DOM.floatingCartTrigger) {
      const openDrawer = () => {
        if (DOM.cartSidebar) DOM.cartSidebar.classList.remove('hidden');
      };
      if (DOM.btnFloatingViewCart) DOM.btnFloatingViewCart.addEventListener('click', openDrawer);
      if (DOM.floatingCartTrigger) DOM.floatingCartTrigger.addEventListener('click', openDrawer);
    }

    // Clear cart & sample order
    if (DOM.btnClearCart) DOM.btnClearCart.addEventListener('click', clearCart);
    if (DOM.btnSampleOrder) DOM.btnSampleOrder.addEventListener('click', loadSampleOrder);

    // PDF Preview & Actions
    if (DOM.btnPreviewPdf) DOM.btnPreviewPdf.addEventListener('click', openPdfPreview);
    if (DOM.btnGeneratePdf) DOM.btnGeneratePdf.addEventListener('click', generateAndDownloadPdf);
    if (DOM.btnPrintOrder) DOM.btnPrintOrder.addEventListener('click', printOrder);
    if (DOM.btnWhatsappShare) DOM.btnWhatsappShare.addEventListener('click', shareOnWhatsapp);
    if (DOM.btnCopyList) DOM.btnCopyList.addEventListener('click', copyListText);

    if (DOM.btnClosePreviewModal) DOM.btnClosePreviewModal.addEventListener('click', closePdfPreview);
    if (DOM.btnDownloadFromPreview) DOM.btnDownloadFromPreview.addEventListener('click', generateAndDownloadPdf);
    if (DOM.btnPrintFromPreview) DOM.btnPrintFromPreview.addEventListener('click', printOrder);

    // Setup image upload
    setupImageUploadHandler();

    // Priority Dot Tooltip toggle for touch screens & dismissing on outside click
    document.addEventListener('click', (e) => {
      const dotWrap = e.target.closest('.priority-dot-wrap');
      if (dotWrap) {
        const wasActive = dotWrap.classList.contains('active');
        document.querySelectorAll('.priority-dot-wrap.active').forEach(el => el.classList.remove('active'));
        if (!wasActive) dotWrap.classList.add('active');
      } else {
        document.querySelectorAll('.priority-dot-wrap.active').forEach(el => el.classList.remove('active'));
      }
    });
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
