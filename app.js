// కిరాణా చిట్టా (Kirana Chitta) - Telugu Groceries & PDF Generator App
// Logic & State Management

(function () {
  'use strict';

  // --- APPLICATION STATE ---
  const STATE = {
    cart: [],
    currentCategory: 'all',
    searchQuery: '',
    customerDetails: {
      name: 'శ్రీనివాస్ గారు',
      phone: '9876543210',
      address: 'గాంధీ నగర్, విజయవాడ',
      date: new Date().toISOString().split('T')[0],
      shopName: 'శ్రీ లక్ష్మీ గణపతి కిరాణా & జనరల్ స్టోర్స్',
      shopPhone: '9440123456',
      shopPlace: 'మెయిన్ రోడ్డు, విజయవాడ'
    },
    orderCounter: 1001,
    pendingItemForModal: null,
    customItems: []
  };

  // --- LOCAL STORAGE KEYS ---
  const STORAGE_KEYS = {
    CART: 'telugu_grocery_cart_v1',
    CUSTOMER: 'telugu_grocery_customer_v1',
    CUSTOM_ITEMS: 'telugu_grocery_custom_items_v1',
    ORDER_NUM: 'telugu_grocery_order_num_v1'
  };

  // --- DOM ELEMENTS ---
  const DOM = {
    // Navigation & Buttons
    btnOpenCustomItem: document.getElementById('btn-open-custom-item'),
    btnOpenDetails: document.getElementById('btn-open-details'),
    btnToggleCartMobile: document.getElementById('btn-toggle-cart-mobile'),
    mobileCartBadge: document.getElementById('mobile-cart-badge'),
    
    // Search & Categories
    searchInput: document.getElementById('search-input'),
    btnClearSearch: document.getElementById('btn-clear-search'),
    categoryPillsContainer: document.getElementById('category-pills-container'),
    filteredItemsCount: document.getElementById('filtered-items-count'),
    groceryGrid: document.getElementById('grocery-grid'),
    noResultsState: document.getElementById('no-results-state'),
    btnAddSearchedItem: document.getElementById('btn-add-searched-item'),
    btnQuickCustomAdd: document.getElementById('btn-quick-custom-add'),

    // Cart / Chitta Sidebar
    cartSidebar: document.getElementById('cart-sidebar'),
    cartItemsList: document.getElementById('cart-items-list'),
    emptyCartState: document.getElementById('empty-cart-state'),
    cartFooter: document.getElementById('cart-footer'),
    cartItemCounter: document.getElementById('cart-item-counter'),
    summaryCustomerName: document.getElementById('summary-customer-name'),
    btnEditDetailsQuick: document.getElementById('btn-edit-details-quick'),
    btnClearCart: document.getElementById('btn-clear-cart'),
    btnSampleOrder: document.getElementById('btn-sample-order'),

    // Cart Actions
    btnGeneratePdf: document.getElementById('btn-generate-pdf'),
    btnPrintOrder: document.getElementById('btn-print-order'),
    btnWhatsappShare: document.getElementById('btn-whatsapp-share'),
    btnPreviewPdf: document.getElementById('btn-preview-pdf'),
    btnCopyList: document.getElementById('btn-copy-list'),

    // Modal: Quantity Customizer
    modalQuantity: document.getElementById('modal-quantity'),
    modalItemTitle: document.getElementById('modal-item-title'),
    modalItemSubtitle: document.getElementById('modal-item-subtitle'),
    modalItemIcon: document.getElementById('modal-item-icon'),
    modalQuickQuantities: document.getElementById('modal-quick-quantities'),
    modalCustomQtyVal: document.getElementById('modal-custom-qty-val'),
    modalCustomQtyUnit: document.getElementById('modal-custom-qty-unit'),
    modalItemNote: document.getElementById('modal-item-note'),
    modalItemPrice: document.getElementById('modal-item-price'),
    btnCloseQtyModal: document.getElementById('btn-close-qty-modal'),
    btnCancelQtyModal: document.getElementById('btn-cancel-qty-modal'),
    btnConfirmAddItem: document.getElementById('btn-confirm-add-item'),

    // Modal: Custom Item Creator
    modalCustomItem: document.getElementById('modal-custom-item'),
    formCustomItem: document.getElementById('form-custom-item'),
    customItemNameTe: document.getElementById('custom-item-name-te'),
    customItemNameEn: document.getElementById('custom-item-name-en'),
    customItemQtyVal: document.getElementById('custom-item-qty-val'),
    customItemQtyUnit: document.getElementById('custom-item-qty-unit'),
    customItemCategory: document.getElementById('custom-item-category'),
    customItemNote: document.getElementById('custom-item-note'),
    btnCloseCustomItemModal: document.getElementById('btn-close-custom-item-modal'),
    btnCancelCustomItem: document.getElementById('btn-cancel-custom-item'),

    // Modal: Customer & Shop Details
    modalDetails: document.getElementById('modal-details'),
    inputCustomerName: document.getElementById('input-customer-name'),
    inputCustomerPhone: document.getElementById('input-customer-phone'),
    inputCustomerAddress: document.getElementById('input-customer-address'),
    inputOrderDate: document.getElementById('input-order-date'),
    inputShopName: document.getElementById('input-shop-name'),
    inputShopPhone: document.getElementById('input-shop-phone'),
    inputShopPlace: document.getElementById('input-shop-place'),
    btnCloseDetailsModal: document.getElementById('btn-close-details-modal'),
    btnSaveDetails: document.getElementById('btn-save-details'),

    // Modal: PDF Preview
    modalPdfPreview: document.getElementById('modal-pdf-preview'),
    btnClosePreviewModal: document.getElementById('btn-close-preview-modal'),
    btnDownloadFromPreview: document.getElementById('btn-download-from-preview'),
    btnPrintFromPreview: document.getElementById('btn-print-from-preview'),

    // PDF Printable Template Elements
    printableArea: document.getElementById('printable-area'),
    pdfViewShopName: document.getElementById('pdf-view-shop-name'),
    pdfViewShopContact: document.getElementById('pdf-view-shop-contact'),
    pdfViewCustomerName: document.getElementById('pdf-view-customer-name'),
    pdfViewCustomerPhone: document.getElementById('pdf-view-customer-phone'),
    pdfViewCustomerAddress: document.getElementById('pdf-view-customer-address'),
    pdfViewOrderId: document.getElementById('pdf-view-order-id'),
    pdfViewDate: document.getElementById('pdf-view-date'),
    pdfViewTotalCount: document.getElementById('pdf-view-total-count'),
    pdfViewBottomCount: document.getElementById('pdf-view-bottom-count'),
    pdfViewItemsTbody: document.getElementById('pdf-view-items-tbody'),

    // Toast
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toast-message'),
    toastIcon: document.getElementById('toast-icon')
  };

  // --- INITIALIZATION ---
  function init() {
    loadSavedState();
    renderCategories();
    populateSelectUnits();
    renderGroceryGrid();
    renderCart();
    setupEventListeners();
  }

  // Load state from localStorage
  function loadSavedState() {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
      if (savedCart) STATE.cart = JSON.parse(savedCart);

      const savedCust = localStorage.getItem(STORAGE_KEYS.CUSTOMER);
      if (savedCust) STATE.customerDetails = Object.assign(STATE.customerDetails, JSON.parse(savedCust));

      const savedCustomItems = localStorage.getItem(STORAGE_KEYS.CUSTOM_ITEMS);
      if (savedCustomItems) STATE.customItems = JSON.parse(savedCustomItems);

      const savedOrderNum = localStorage.getItem(STORAGE_KEYS.ORDER_NUM);
      if (savedOrderNum) STATE.orderCounter = parseInt(savedOrderNum, 10);
      else STATE.orderCounter = Math.floor(1000 + Math.random() * 9000);

      // Populate details inputs
      DOM.inputCustomerName.value = STATE.customerDetails.name || '';
      DOM.inputCustomerPhone.value = STATE.customerDetails.phone || '';
      DOM.inputCustomerAddress.value = STATE.customerDetails.address || '';
      DOM.inputOrderDate.value = STATE.customerDetails.date || new Date().toISOString().split('T')[0];
      DOM.inputShopName.value = STATE.customerDetails.shopName || 'శ్రీ లక్ష్మీ గణపతి కిరాణా & జనరల్ స్టోర్స్';
      DOM.inputShopPhone.value = STATE.customerDetails.shopPhone || '';
      DOM.inputShopPlace.value = STATE.customerDetails.shopPlace || '';

      updateCustomerSummaryBadge();
    } catch (err) {
      console.warn('Could not load localStorage state:', err);
    }
  }

  function saveCartState() {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(STATE.cart));
      localStorage.setItem(STORAGE_KEYS.CUSTOMER, JSON.stringify(STATE.customerDetails));
      localStorage.setItem(STORAGE_KEYS.ORDER_NUM, STATE.orderCounter.toString());
      if (STATE.customItems.length) {
        localStorage.setItem(STORAGE_KEYS.CUSTOM_ITEMS, JSON.stringify(STATE.customItems));
      }
    } catch (e) {
      console.warn('Storage save failed:', e);
    }
  }

  // --- RENDER CATEGORY PILLS ---
  function renderCategories() {
    DOM.categoryPillsContainer.innerHTML = '';
    
    GROCERY_CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `cat-pill shrink-0 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold border transition flex items-center gap-1.5 ${
        STATE.currentCategory === cat.id 
          ? 'active bg-emerald-700 text-white border-emerald-700 shadow-sm' 
          : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50'
      }`;
      btn.dataset.category = cat.id;

      // Calculate count in this category
      const count = getItemsCountForCategory(cat.id);
      
      btn.innerHTML = `
        <i class="fa-solid ${cat.icon} text-xs opacity-80"></i>
        <span>${cat.name}</span>
        <span class="text-[10px] px-1.5 py-0.2 rounded-full ${STATE.currentCategory === cat.id ? 'bg-emerald-800 text-white' : 'bg-slate-100 text-slate-600'}">${count}</span>
      `;

      btn.addEventListener('click', () => {
        STATE.currentCategory = cat.id;
        renderCategories();
        renderGroceryGrid();
      });

      DOM.categoryPillsContainer.appendChild(btn);
    });
  }

  function getItemsCountForCategory(catId) {
    const all = [...GROCERY_ITEMS, ...STATE.customItems];
    if (catId === 'all') return all.length;
    return all.filter(item => item.category === catId).length;
  }

  // --- POPULATE TELUGU UNITS IN SELECTS ---
  function populateSelectUnits() {
    const optionsHtml = TELUGU_UNITS.map(unit => `<option value="${unit}">${unit}</option>`).join('');
    DOM.modalCustomQtyUnit.innerHTML = optionsHtml;
    DOM.customItemQtyUnit.innerHTML = optionsHtml;
  }

  // --- RENDER GROCERY GRID ---
  function renderGroceryGrid() {
    const allItems = [...GROCERY_ITEMS, ...STATE.customItems];
    const query = STATE.searchQuery.toLowerCase().trim();

    // Filter items
    const filtered = allItems.filter(item => {
      // Category match
      const catMatch = (STATE.currentCategory === 'all') || (item.category === STATE.currentCategory);
      if (!catMatch) return false;

      // Query match
      if (!query) return true;
      const teMatch = item.nameTe.toLowerCase().includes(query);
      const enMatch = item.nameEn && item.nameEn.toLowerCase().includes(query);
      const trMatch = item.translit && item.translit.toLowerCase().includes(query);
      return teMatch || enMatch || trMatch;
    });

    DOM.filteredItemsCount.textContent = filtered.length;
    DOM.groceryGrid.innerHTML = '';

    if (filtered.length === 0) {
      DOM.noResultsState.classList.remove('hidden');
    } else {
      DOM.noResultsState.classList.add('hidden');
      filtered.forEach(item => {
        DOM.groceryGrid.appendChild(createGroceryCard(item));
      });
    }
  }

  // Create individual Grocery Card element
  function createGroceryCard(item) {
    const card = document.createElement('div');
    card.className = 'grocery-card bg-white rounded-xl p-3.5 border border-slate-200 shadow-sm flex flex-col justify-between';

    // Find if already in cart
    const cartEntry = STATE.cart.find(c => c.nameTe === item.nameTe);
    const inCart = !!cartEntry;

    // Quick Quantities buttons to show
    const quickQtys = item.commonQtys && item.commonQtys.length > 0 
      ? item.commonQtys.slice(0, 3) 
      : ['1 కిలో', 'అర కిలో', 'పావు కిలో'];

    card.innerHTML = `
      <div>
        <!-- Top row: Icon, Category & Badge -->
        <div class="flex items-start justify-between gap-2 mb-1.5">
          <div class="flex items-center gap-2">
            <span class="text-2xl">${item.icon || '🛍️'}</span>
            <div>
              <h3 class="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                ${item.nameTe}
              </h3>
              <p class="text-[11px] text-slate-500 font-sans">
                ${item.nameEn || ''}
              </p>
            </div>
          </div>
          ${item.badge ? `
            <span class="text-[10px] bg-emerald-50 text-emerald-800 font-semibold px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
              ${item.badge}
            </span>
          ` : ''}
        </div>

        <!-- In-Cart indicator if present -->
        ${inCart ? `
          <div class="mb-2 bg-amber-50 border border-amber-200 text-amber-900 text-xs px-2 py-1 rounded-md flex items-center justify-between">
            <span class="font-semibold flex items-center gap-1">
              <i class="fa-solid fa-check text-emerald-600"></i> చిట్టాలో ఉంది:
            </span>
            <span class="font-bold text-emerald-800">${cartEntry.qty}</span>
          </div>
        ` : ''}

        <!-- Quick 1-Click Telugu Quantity Pills -->
        <div class="mt-2 mb-3">
          <p class="text-[10px] text-slate-400 font-bold mb-1 uppercase tracking-wider">త్వరిత పరిమాణం:</p>
          <div class="flex flex-wrap gap-1.5">
            ${quickQtys.map(qty => `
              <button 
                type="button"
                data-qty="${qty}" 
                class="btn-quick-qty text-xs bg-slate-50 hover:bg-emerald-600 hover:text-white text-slate-700 border border-slate-200 px-2 py-1 rounded-lg transition font-medium"
              >
                ${qty}
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="pt-2 border-t border-slate-100 flex items-center gap-2">
        <button 
          type="button" 
          class="btn-custom-qty text-xs text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 font-semibold px-2.5 py-1.5 rounded-lg border border-emerald-200 transition flex items-center gap-1"
          title="వేరే పరిమాణం లేదా సూచనలు ఇవ్వండి"
        >
          <i class="fa-solid fa-sliders text-[11px]"></i>
          <span>పరిమాణం మార్చు</span>
        </button>

        <button 
          type="button" 
          class="btn-add-default flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs py-1.5 px-3 rounded-lg shadow-sm transition flex items-center justify-center gap-1"
        >
          <i class="fa-solid fa-plus text-[10px]"></i>
          <span>${item.defaultQty || '1 కిలో'} చేర్చు</span>
        </button>
      </div>
    `;

    // Event listeners for quick quantity buttons
    card.querySelectorAll('.btn-quick-qty').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedQty = btn.dataset.qty;
        addItemToCart(item, selectedQty);
      });
    });

    // Event listener for default add
    card.querySelector('.btn-add-default').addEventListener('click', (e) => {
      e.stopPropagation();
      addItemToCart(item, item.defaultQty || '1 కిలో');
    });

    // Event listener for custom quantity modal
    card.querySelector('.btn-custom-qty').addEventListener('click', (e) => {
      e.stopPropagation();
      openQuantityModal(item);
    });

    return card;
  }

  // --- QUANTITY MODAL HANDLING ---
  function openQuantityModal(item) {
    STATE.pendingItemForModal = item;

    DOM.modalItemTitle.textContent = item.nameTe;
    DOM.modalItemSubtitle.textContent = item.nameEn ? `${item.nameEn} - కావలసిన తెలుగు పరిమాణం ఎంచుకోండి` : 'కావలసిన తెలుగు పరిమాణం ఎంచుకోండి';
    DOM.modalItemIcon.textContent = item.icon || '🛍️';
    DOM.modalCustomQtyVal.value = '';
    DOM.modalItemNote.value = '';
    DOM.modalItemPrice.value = '';

    // If item already in cart, prefill
    const existing = STATE.cart.find(c => c.nameTe === item.nameTe);
    if (existing) {
      DOM.modalItemNote.value = existing.note || '';
      if (existing.price) DOM.modalItemPrice.value = existing.price;
    }

    // Populate standard quantity buttons
    DOM.modalQuickQuantities.innerHTML = '';
    STANDARD_QUANTITIES.forEach(sq => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'text-left p-2 rounded-xl border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50 transition group flex flex-col justify-center';
      btn.innerHTML = `
        <span class="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-emerald-800">${sq.label}</span>
        <span class="text-[10px] text-slate-400 group-hover:text-emerald-600">${sq.sub}</span>
      `;
      btn.addEventListener('click', () => {
        // highlight button or set into input
        DOM.modalCustomQtyVal.value = sq.label;
        highlightSelectedQtyButton(btn);
      });
      DOM.modalQuickQuantities.appendChild(btn);
    });

    DOM.modalQuantity.classList.remove('hidden');
  }

  function highlightSelectedQtyButton(selectedBtn) {
    DOM.modalQuickQuantities.querySelectorAll('button').forEach(b => {
      b.classList.remove('bg-emerald-100', 'border-emerald-600', 'ring-2', 'ring-emerald-500');
    });
    selectedBtn.classList.add('bg-emerald-100', 'border-emerald-600', 'ring-2', 'ring-emerald-500');
  }

  function closeQuantityModal() {
    DOM.modalQuantity.classList.add('hidden');
    STATE.pendingItemForModal = null;
  }

  function confirmAddFromModal() {
    if (!STATE.pendingItemForModal) return;

    let chosenQty = DOM.modalCustomQtyVal.value.trim();
    if (!chosenQty) {
      // Default to item's default or 1 కిలో
      chosenQty = STATE.pendingItemForModal.defaultQty || '1 కిలో';
    } else {
      // If user typed a number without unit, append the selected unit
      const unit = DOM.modalCustomQtyUnit.value;
      if (!isNaN(chosenQty) && !chosenQty.includes(unit)) {
        chosenQty = `${chosenQty} ${unit}`;
      }
    }

    const note = DOM.modalItemNote.value.trim();
    const price = DOM.modalItemPrice.value ? parseFloat(DOM.modalItemPrice.value) : null;

    addItemToCart(STATE.pendingItemForModal, chosenQty, note, price);
    closeQuantityModal();
  }

  // --- CART OPERATIONS ---
  function addItemToCart(item, qty, note = '', price = null) {
    const existingIndex = STATE.cart.findIndex(c => c.nameTe === item.nameTe);

    if (existingIndex > -1) {
      // Update existing item's quantity & note
      STATE.cart[existingIndex].qty = qty;
      if (note) STATE.cart[existingIndex].note = note;
      if (price !== null) STATE.cart[existingIndex].price = price;
      showToast(`'${item.nameTe}' పరిమాణం '${qty}' గా మార్చబడింది!`, 'fa-circle-check');
    } else {
      // Add new item
      STATE.cart.push({
        id: item.id || `custom_${Date.now()}`,
        nameTe: item.nameTe,
        nameEn: item.nameEn || '',
        icon: item.icon || '🛍️',
        qty: qty,
        note: note,
        price: price,
        category: item.category || 'essentials'
      });
      showToast(`'${item.nameTe} (${qty})' చిట్టాలో చేర్చబడింది!`, 'fa-cart-arrow-down');
    }

    saveCartState();
    renderCart();
    renderGroceryGrid(); // Update in-cart badges
  }

  function removeItemFromCart(index) {
    const removed = STATE.cart[index];
    STATE.cart.splice(index, 1);
    saveCartState();
    renderCart();
    renderGroceryGrid();
    if (removed) {
      showToast(`'${removed.nameTe}' తొలగించబడింది.`, 'fa-trash-can');
    }
  }

  function updateCartItemQty(index, newQty) {
    if (STATE.cart[index]) {
      STATE.cart[index].qty = newQty;
      saveCartState();
      renderCart();
      renderGroceryGrid();
      showToast(`పరిమాణం మార్చబడింది: ${newQty}`, 'fa-pen');
    }
  }

  function updateCartItemNote(index, newNote) {
    if (STATE.cart[index]) {
      STATE.cart[index].note = newNote;
      saveCartState();
    }
  }

  function clearCart() {
    if (STATE.cart.length === 0) return;
    if (confirm('మీ ప్రస్తుత చిట్టాలోని అన్ని సరుకులను తొలగించాలా?')) {
      STATE.cart = [];
      saveCartState();
      renderCart();
      renderGroceryGrid();
      showToast('చిట్టా ఖాళీ చేయబడింది.', 'fa-trash');
    }
  }

  // --- RENDER CART IN SIDEBAR ---
  function renderCart() {
    const count = STATE.cart.length;
    DOM.cartItemCounter.textContent = `${count} సరుకులు`;
    DOM.mobileCartBadge.textContent = count;

    if (count === 0) {
      DOM.emptyCartState.classList.remove('hidden');
      DOM.cartItemsList.classList.add('hidden');
      DOM.cartFooter.classList.add('opacity-50', 'pointer-events-none');
    } else {
      DOM.emptyCartState.classList.add('hidden');
      DOM.cartItemsList.classList.remove('hidden');
      DOM.cartFooter.classList.remove('opacity-50', 'pointer-events-none');

      DOM.cartItemsList.innerHTML = '';
      STATE.cart.forEach((item, index) => {
        const itemRow = document.createElement('div');
        itemRow.className = 'py-2 px-1 flex items-start justify-between gap-2 group';

        itemRow.innerHTML = `
          <div class="flex items-start gap-2 flex-1 min-w-0">
            <span class="text-xs font-bold text-slate-400 mt-0.5">${index + 1}.</span>
            <div class="flex-1 min-w-0">
              <div class="flex items-baseline justify-between gap-1">
                <h4 class="font-bold text-slate-800 text-xs sm:text-sm truncate">
                  ${item.nameTe}
                </h4>
              </div>
              
              <!-- Telugu Quantity with quick dropdown/badge -->
              <div class="flex items-center gap-2 mt-1">
                <span class="bg-emerald-100 text-emerald-900 font-bold text-xs px-2 py-0.5 rounded-md border border-emerald-300">
                  ${item.qty}
                </span>

                <!-- Quick Change Quantity select -->
                <select class="cart-qty-select text-[11px] bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 text-slate-700 hover:border-emerald-400">
                  <option value="${item.qty}" selected>ఇదే ఉంచండి</option>
                  <option value="పావు కిలో">పావు కిలో (250g)</option>
                  <option value="అర కిలో">అర కిలో (500g)</option>
                  <option value="ముప్పావు కిలో">ముప్పావు కిలో (750g)</option>
                  <option value="1 కిలో">1 కిలో</option>
                  <option value="2 కిలోలు">2 కిలోలు</option>
                  <option value="5 కిలోలు">5 కిలోలు</option>
                  <option value="10 కిలోలు">10 కిలోలు</option>
                  <option value="25 కిలోల బస్తా">25 కిలోల బస్తా</option>
                  <option value="50 గ్రాములు">50 గ్రాములు</option>
                  <option value="100 గ్రాములు">100 గ్రాములు</option>
                  <option value="అర లీటరు">అర లీటరు</option>
                  <option value="1 లీటరు">1 లీటరు</option>
                  <option value="1 ప్యాకెట్">1 ప్యాకెట్</option>
                  <option value="2 ప్యాకెట్లు">2 ప్యాకెట్లు</option>
                  <option value="1 కట్ట">1 కట్ట</option>
                  <option value="1 డజను">1 డజను</option>
                </select>
              </div>

              <!-- Note if present or input -->
              ${item.note ? `
                <p class="text-[11px] text-amber-800 bg-amber-50 rounded px-1.5 py-0.5 mt-1 border border-amber-200">
                  <i class="fa-solid fa-note-sticky text-[10px]"></i> ${item.note}
                </p>
              ` : ''}
            </div>
          </div>

          <!-- Delete item button -->
          <button 
            type="button" 
            class="btn-delete-cart-item text-slate-400 hover:text-red-600 p-1 rounded hover:bg-red-50 transition shrink-0" 
            title="తొలగించండి"
          >
            <i class="fa-solid fa-trash-can text-xs"></i>
          </button>
        `;

        // Event listener for quantity change select
        itemRow.querySelector('.cart-qty-select').addEventListener('change', (e) => {
          if (e.target.value !== item.qty) {
            updateCartItemQty(index, e.target.value);
          }
        });

        // Event listener for delete
        itemRow.querySelector('.btn-delete-cart-item').addEventListener('click', () => {
          removeItemFromCart(index);
        });

        DOM.cartItemsList.appendChild(itemRow);
      });
    }
  }

  // --- SAMPLE TELUGU GROCERY ORDER LOADER ---
  function loadSampleOrder() {
    STATE.cart = [
      { id: 'g_1', nameTe: 'సోనా మసూరి బియ్యం', nameEn: 'Sona Masoori Rice', icon: '🌾', qty: '25 కిలోల బస్తా', note: 'పాత బియ్యం కావాలి', category: 'grains' },
      { id: 'd_1', nameTe: 'కందిపప్పు', nameEn: 'Toor Dal', icon: '🥘', qty: '1 కిలో', note: 'మొదటి రకం', category: 'dals' },
      { id: 'd_2', nameTe: 'మినప్పప్పు (గుళ్ళు)', nameEn: 'Urad Dal', icon: '⚪', qty: '1 కిలో', note: '', category: 'dals' },
      { id: 'o_1', nameTe: 'వేరుశనగ నూనె (పల్లీ నూనె)', nameEn: 'Groundnut Oil', icon: '🛢️', qty: '1 లీటరు', note: '', category: 'oils' },
      { id: 'o_4', nameTe: 'స్వచ్ఛమైన ఆవు నెయ్యి', nameEn: 'Cow Ghee', icon: '🧈', qty: 'అర లీటరు', note: '', category: 'oils' },
      { id: 's_1', nameTe: 'ఆవాలు', nameEn: 'Mustard Seeds', icon: '⚫', qty: '100 గ్రాములు', note: '', category: 'spices' },
      { id: 's_2', nameTe: 'జీలకర్ర', nameEn: 'Cumin Seeds', icon: '🟤', qty: '100 గ్రాములు', note: '', category: 'spices' },
      { id: 's_4', nameTe: 'పసుపు పొడి', nameEn: 'Turmeric Powder', icon: '🟡', qty: '100 గ్రాములు', note: '', category: 'spices' },
      { id: 's_5', nameTe: 'కారం పొడి (ఘాటైన దేశీ కారం)', nameEn: 'Red Chilli Powder', icon: '🌶️', qty: 'అర కిలో', note: '', category: 'spices' },
      { id: 'e_1', nameTe: 'పాత చింతపండు (నల్లటిది / ఎర్రటిది)', nameEn: 'Tamarind', icon: '🟤', qty: '1 కిలో', note: 'ఈనెలు లేనిది', category: 'essentials' },
      { id: 'e_2', nameTe: 'బెల్లం (అచ్చులు / పొడి)', nameEn: 'Jaggery', icon: '🟤', qty: '1 కిలో', note: '', category: 'essentials' },
      { id: 'e_5', nameTe: 'సన్న ఉప్పు (టాటా ఉప్పు / అయోడైజ్డ్)', nameEn: 'Table Salt', icon: '🧂', qty: '1 ప్యాకెట్', note: '', category: 'essentials' },
      { id: 'v_1', nameTe: 'ఉల్లిపాయలు', nameEn: 'Onions', icon: '🧅', qty: '2 కిలోలు', note: '', category: 'vegetables' },
      { id: 'v_7', nameTe: 'కొత్తిమీర', nameEn: 'Coriander Leaves', icon: '🌿', qty: '2 కట్టలు', note: 'తాజా ఆకులు', category: 'vegetables' }
    ];

    saveCartState();
    renderCart();
    renderGroceryGrid();
    showToast('నమూనా సరుకుల జాబితా చేర్చబడింది!', 'fa-bolt');
  }

  // --- CUSTOM ITEM MODAL & FORM ---
  function openCustomItemModal() {
    DOM.customItemNameTe.value = '';
    DOM.customItemNameEn.value = '';
    DOM.customItemQtyVal.value = '1';
    DOM.customItemQtyUnit.value = 'కిలోలు';
    DOM.customItemNote.value = '';
    DOM.modalCustomItem.classList.remove('hidden');
    DOM.customItemNameTe.focus();
  }

  function closeCustomItemModal() {
    DOM.modalCustomItem.classList.add('hidden');
  }

  function handleCustomItemSubmit(e) {
    e.preventDefault();
    const nameTe = DOM.customItemNameTe.value.trim();
    if (!nameTe) {
      alert('దయచేసి సరుకు పేరును నమోదు చేయండి');
      return;
    }

    const nameEn = DOM.customItemNameEn.value.trim();
    const qtyVal = DOM.customItemQtyVal.value.trim();
    const qtyUnit = DOM.customItemQtyUnit.value;
    const category = DOM.customItemCategory.value;
    const note = DOM.customItemNote.value.trim();

    const fullQty = `${qtyVal} ${qtyUnit}`;

    const newItem = {
      id: `custom_${Date.now()}`,
      nameTe: nameTe,
      nameEn: nameEn,
      translit: `${nameTe} ${nameEn}`,
      category: category,
      defaultQty: fullQty,
      commonQtys: [fullQty, '1 కిలో', 'అర కిలో'],
      icon: '✨',
      badge: 'కస్టమ్ సరుకు'
    };

    // Save into customItems array
    STATE.customItems.push(newItem);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_ITEMS, JSON.stringify(STATE.customItems));

    // Add directly to cart
    addItemToCart(newItem, fullQty, note);

    closeCustomItemModal();
    renderCategories();
    renderGroceryGrid();
  }

  // --- CUSTOMER & SHOP DETAILS MODAL ---
  function openDetailsModal() {
    DOM.inputCustomerName.value = STATE.customerDetails.name;
    DOM.inputCustomerPhone.value = STATE.customerDetails.phone;
    DOM.inputCustomerAddress.value = STATE.customerDetails.address;
    DOM.inputOrderDate.value = STATE.customerDetails.date;
    DOM.inputShopName.value = STATE.customerDetails.shopName;
    DOM.inputShopPhone.value = STATE.customerDetails.shopPhone;
    DOM.inputShopPlace.value = STATE.customerDetails.shopPlace;

    DOM.modalDetails.classList.remove('hidden');
  }

  function closeDetailsModal() {
    DOM.modalDetails.classList.add('hidden');
  }

  function saveDetails() {
    STATE.customerDetails.name = DOM.inputCustomerName.value.trim() || 'శ్రీనివాస్ గారు';
    STATE.customerDetails.phone = DOM.inputCustomerPhone.value.trim();
    STATE.customerDetails.address = DOM.inputCustomerAddress.value.trim();
    STATE.customerDetails.date = DOM.inputOrderDate.value || new Date().toISOString().split('T')[0];
    STATE.customerDetails.shopName = DOM.inputShopName.value.trim() || 'శ్రీ లక్ష్మీ గణపతి కిరాణా & జనరల్ స్టోర్స్';
    STATE.customerDetails.shopPhone = DOM.inputShopPhone.value.trim();
    STATE.customerDetails.shopPlace = DOM.inputShopPlace.value.trim();

    saveCartState();
    updateCustomerSummaryBadge();
    closeDetailsModal();
    showToast('వివరాలు భద్రపరచబడ్డాయి!', 'fa-user-check');
  }

  function updateCustomerSummaryBadge() {
    DOM.summaryCustomerName.textContent = STATE.customerDetails.name || 'కస్టమర్ పేరు ఇవ్వండి';
  }

  // --- PREPARE PRINTABLE CHITTA DOM ---
  function populatePrintableChittaDOM() {
    const cust = STATE.customerDetails;
    
    // Header
    DOM.pdfViewShopName.textContent = cust.shopName || 'శ్రీ లక్ష్మీ గణపతి కిరాణా & జనరల్ స్టోర్స్';
    let contactLine = 'అన్ని రకాల తాజా కిరాణా సరుకులు, పప్పులు, నూనెలు మరియు నిత్యావసర వస్తువులు లభించును';
    if (cust.shopPhone || cust.shopPlace) {
      contactLine = `${cust.shopPlace ? cust.shopPlace + ' | ' : ''}ఫోన్: ${cust.shopPhone || '-'}`;
    }
    DOM.pdfViewShopContact.textContent = contactLine;

    // Customer Meta
    DOM.pdfViewCustomerName.textContent = cust.name || 'శ్రీనివాస్ గారు';
    DOM.pdfViewCustomerPhone.textContent = cust.phone || '-';
    DOM.pdfViewCustomerAddress.textContent = cust.address || '-';
    DOM.pdfViewOrderId.textContent = `KC-${STATE.orderCounter}`;

    // Format Date to DD-MM-YYYY
    const d = new Date(cust.date || new Date());
    const formattedDate = `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
    DOM.pdfViewDate.textContent = formattedDate;

    // Items table rows
    DOM.pdfViewItemsTbody.innerHTML = '';
    STATE.cart.forEach((item, index) => {
      const tr = document.createElement('tr');
      tr.className = 'border-b border-slate-200';
      tr.innerHTML = `
        <td class="py-2 px-3 text-center font-bold text-slate-500">${index + 1}</td>
        <td class="py-2 px-3 font-bold text-slate-900">
          ${item.nameTe}
          ${item.nameEn ? `<span class="text-[11px] text-slate-500 font-normal block font-sans">${item.nameEn}</span>` : ''}
        </td>
        <td class="py-2 px-3 text-center font-bold text-emerald-800 bg-emerald-50/50">
          ${item.qty}
        </td>
        <td class="py-2 px-3 text-slate-600 text-xs italic">
          ${item.note ? item.note : '-'}
        </td>
        <td class="py-2 px-3 text-center">
          <span class="inline-block w-4 h-4 border border-slate-400 rounded-sm"></span>
        </td>
      `;
      DOM.pdfViewItemsTbody.appendChild(tr);
    });

    const totalCount = STATE.cart.length;
    DOM.pdfViewTotalCount.textContent = `${totalCount} సరుకులు`;
    DOM.pdfViewBottomCount.textContent = `${totalCount}`;
  }

  // --- LIVE PDF PREVIEW MODAL ---
  function openPdfPreview() {
    if (STATE.cart.length === 0) {
      alert('దయచేసి ముందుగా కొన్ని సరుకులను చిట్టాలో చేర్చండి!');
      return;
    }
    populatePrintableChittaDOM();
    DOM.modalPdfPreview.classList.remove('hidden');
  }

  function closePdfPreview() {
    DOM.modalPdfPreview.classList.add('hidden');
  }

  // --- CORE FEATURE: GENERATE & DOWNLOAD TELUGU PDF ---
  function generateAndDownloadPdf() {
    if (STATE.cart.length === 0) {
      alert('దయచేసి ముందుగా కొన్ని సరుకులను చిట్టాలో చేర్చండి!');
      return;
    }

    populatePrintableChittaDOM();

    showToast('తెలుగు PDF తయారవుతోంది... దయచేసి వేచి ఉండండి', 'fa-gear fa-spin');

    const element = DOM.printableArea;
    const custName = (STATE.customerDetails.name || 'ఆర్డర్').replace(/[^a-zA-Z0-9\u0C00-\u0C7F_-]/g, '_');
    const dateStr = new Date().toISOString().split('T')[0];
    const filename = `కిరాణా_చిట్టా_${custName}_${dateStr}.pdf`;

    const opt = {
      margin: [10, 10, 10, 10], // top, left, bottom, right in mm
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        logging: false,
        scrollY: 0
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      }
    };

    // Trigger html2pdf
    if (window.html2pdf) {
      window.html2pdf().set(opt).from(element).save().then(() => {
        showToast('PDF విజయవంతంగా డౌన్‌లోడ్ చేయబడింది!', 'fa-circle-check');
        triggerConfetti();
        // Increment order counter for next order
        STATE.orderCounter += 1;
        saveCartState();
      }).catch(err => {
        console.error('PDF generation error:', err);
        showToast('PDF తయారీలో సమస్య ఎదురైంది. దయచేసి ప్రింట్ ఆప్షన్ వాడండి.', 'fa-triangle-exclamation');
      });
    } else {
      // Fallback: browser print dialog
      window.print();
    }
  }

  // --- NATIVE PRINT ---
  function printOrder() {
    if (STATE.cart.length === 0) {
      alert('దయచేసి ముందుగా కొన్ని సరుకులను చిట్టాలో చేర్చండి!');
      return;
    }
    populatePrintableChittaDOM();
    window.print();
  }

  // --- WHATSAPP SHARE ---
  function shareOnWhatsapp() {
    if (STATE.cart.length === 0) {
      alert('దయచేసి ముందుగా కొన్ని సరుకులను చిట్టాలో చేర్చండి!');
      return;
    }

    const cust = STATE.customerDetails;
    let message = `🛒 *కిరాణా సరుకుల చిట్టా* 🛒\n`;
    message += `🏪 *${cust.shopName}*\n`;
    message += `--------------------------------\n`;
    message += `👤 *కస్టమర్:* ${cust.name || 'శ్రీనివాస్ గారు'}\n`;
    if (cust.phone) message += `📞 *ఫోన్:* ${cust.phone}\n`;
    if (cust.address) message += `📍 *గ్రామం/ఊరు:* ${cust.address}\n`;
    message += `📅 *తేదీ:* ${cust.date || new Date().toISOString().split('T')[0]}\n`;
    message += `--------------------------------\n`;
    message += `📋 *కావలసిన సరుకుల జాబితా:*\n`;

    STATE.cart.forEach((item, idx) => {
      message += `${idx + 1}. *${item.nameTe}* - ${item.qty}`;
      if (item.note) message += ` _(${item.note})_`;
      message += `\n`;
    });

    message += `--------------------------------\n`;
    message += `📦 *మొత్తం సరుకులు:* ${STATE.cart.length}\n`;
    message += `🙏 *ధన్యవాదాలు!*`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  }

  // --- COPY TEXT TO CLIPBOARD ---
  function copyListText() {
    if (STATE.cart.length === 0) {
      alert('దయచేసి ముందుగా కొన్ని సరుకులను చిట్టాలో చేర్చండి!');
      return;
    }

    const cust = STATE.customerDetails;
    let text = `కిరాణా సరుకుల చిట్టా (${cust.shopName})\n`;
    text += `కస్టమర్ పేరు: ${cust.name || 'శ్రీనివాస్ గారు'} | తేదీ: ${cust.date}\n\n`;
    STATE.cart.forEach((item, idx) => {
      text += `${idx + 1}. ${item.nameTe} - ${item.qty}${item.note ? ` (${item.note})` : ''}\n`;
    });
    text += `\nమొత్తం సరుకులు: ${STATE.cart.length}`;

    navigator.clipboard.writeText(text).then(() => {
      showToast('చిట్టా టెక్స్ట్ క్లిప్‌బోర్డ్‌కి కాపీ చేయబడింది!', 'fa-copy');
    }).catch(() => {
      showToast('కాపీ చేయడంలో విఫలమైంది.', 'fa-triangle-exclamation');
    });
  }

  // --- CONFETTI ANIMATION ---
  function triggerConfetti() {
    if (window.confetti) {
      window.confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  }

  // --- TOAST NOTIFICATION ---
  let toastTimer = null;
  function showToast(message, iconClass = 'fa-circle-check') {
    if (!DOM.toast) return;

    DOM.toastMessage.textContent = message;
    DOM.toastIcon.className = `fa-solid ${iconClass} text-emerald-400`;

    DOM.toast.classList.remove('translate-y-20', 'opacity-0');
    DOM.toast.classList.add('translate-y-0', 'opacity-100');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      DOM.toast.classList.remove('translate-y-0', 'opacity-100');
      DOM.toast.classList.add('translate-y-20', 'opacity-0');
    }, 2800);
  }

  // --- EVENT LISTENERS SETUP ---
  function setupEventListeners() {
    // Search input
    DOM.searchInput.addEventListener('input', (e) => {
      STATE.searchQuery = e.target.value;
      if (STATE.searchQuery) {
        DOM.btnClearSearch.classList.remove('hidden');
      } else {
        DOM.btnClearSearch.classList.add('hidden');
      }
      renderGroceryGrid();
    });

    DOM.btnClearSearch.addEventListener('click', () => {
      DOM.searchInput.value = '';
      STATE.searchQuery = '';
      DOM.btnClearSearch.classList.add('hidden');
      renderGroceryGrid();
    });

    // Custom Item Modal
    DOM.btnOpenCustomItem.addEventListener('click', openCustomItemModal);
    DOM.btnQuickCustomAdd.addEventListener('click', openCustomItemModal);
    DOM.btnAddSearchedItem.addEventListener('click', () => {
      openCustomItemModal();
      DOM.customItemNameTe.value = STATE.searchQuery;
    });
    DOM.btnCloseCustomItemModal.addEventListener('click', closeCustomItemModal);
    DOM.btnCancelCustomItem.addEventListener('click', closeCustomItemModal);
    DOM.formCustomItem.addEventListener('submit', handleCustomItemSubmit);

    // Quantity Modal
    DOM.btnCloseQtyModal.addEventListener('click', closeQuantityModal);
    DOM.btnCancelQtyModal.addEventListener('click', closeQuantityModal);
    DOM.btnConfirmAddItem.addEventListener('click', confirmAddFromModal);

    // Customer & Shop Details Modal
    DOM.btnOpenDetails.addEventListener('click', openDetailsModal);
    DOM.btnEditDetailsQuick.addEventListener('click', openDetailsModal);
    DOM.btnCloseDetailsModal.addEventListener('click', closeDetailsModal);
    DOM.btnSaveDetails.addEventListener('click', saveDetails);

    // Cart Operations
    DOM.btnClearCart.addEventListener('click', clearCart);
    DOM.btnSampleOrder.addEventListener('click', loadSampleOrder);

    // PDF, Print, Share Actions
    DOM.btnGeneratePdf.addEventListener('click', generateAndDownloadPdf);
    DOM.btnPrintOrder.addEventListener('click', printOrder);
    DOM.btnWhatsappShare.addEventListener('click', shareOnWhatsapp);
    DOM.btnPreviewPdf.addEventListener('click', openPdfPreview);
    DOM.btnCopyList.addEventListener('click', copyListText);

    // Preview Modal Actions
    DOM.btnClosePreviewModal.addEventListener('click', closePdfPreview);
    DOM.btnDownloadFromPreview.addEventListener('click', () => {
      closePdfPreview();
      generateAndDownloadPdf();
    });
    DOM.btnPrintFromPreview.addEventListener('click', () => {
      closePdfPreview();
      printOrder();
    });

    // Mobile Cart Drawer Toggle
    DOM.btnToggleCartMobile.addEventListener('click', () => {
      DOM.cartSidebar.scrollIntoView({ behavior: 'smooth' });
    });

    // Close modals on clicking backdrop
    [DOM.modalQuantity, DOM.modalCustomItem, DOM.modalDetails, DOM.modalPdfPreview].forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('hidden');
        }
      });
    });

    // Keyboard ESC to close modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        DOM.modalQuantity.classList.add('hidden');
        DOM.modalCustomItem.classList.add('hidden');
        DOM.modalDetails.classList.add('hidden');
        DOM.modalPdfPreview.classList.add('hidden');
      }
    });
  }

  // Run init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
