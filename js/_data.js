// _data.js — LPC Hub Shared Data Layer
// All state lives in localStorage under _KEY.
// Every page loads this file. Any write is immediately visible on next page load.
// Reset demo: AppData.reset()

const _KEY = 'lpc_hub_v1';

const SEED = {
  products: [
    { id:'P001', name:'Old Fashion Apple 10"',       cat:'pies', njQty:45,  nycQty:4,  target_nj:80,  target_nyc:8,  cost:14.50 },
    { id:'P002', name:'Old Fashion Apple 5"',        cat:'pies', njQty:88,  nycQty:8,  target_nj:100, target_nyc:10, cost:8.00  },
    { id:'P003', name:'Sour Cream Apple Walnut 10"', cat:'pies', njQty:112, nycQty:6,  target_nj:100, target_nyc:10, cost:14.50 },
    { id:'P004', name:'Sour Cream Apple Walnut 5"',  cat:'pies', njQty:94,  nycQty:9,  target_nj:100, target_nyc:10, cost:8.00  },
    { id:'P005', name:'Key Lime 10"',                cat:'pies', njQty:23,  nycQty:2,  target_nj:60,  target_nyc:8,  cost:12.00 },
    { id:'P006', name:'Pecan 10"',                   cat:'pies', njQty:31,  nycQty:3,  target_nj:60,  target_nyc:8,  cost:16.00 },
    { id:'P007', name:'Three Berry 10"',             cat:'pies', njQty:67,  nycQty:5,  target_nj:80,  target_nyc:8,  cost:13.00 },
    { id:'P008', name:'Coffee Cake',                 cat:'pies', njQty:15,  nycQty:1,  target_nj:40,  target_nyc:5,  cost:10.00 },
    { id:'P009', name:'Cheesecake Small',            cat:'pies', njQty:3,   nycQty:0,  target_nj:20,  target_nyc:4,  cost:11.00 },
    { id:'P010', name:'Chicken Pot Pie 5"',          cat:'pies', njQty:210, nycQty:12, target_nj:200, target_nyc:15, cost:8.50  },
    { id:'P011', name:'Pear Apple Crumb 10"',        cat:'pies', njQty:52,  nycQty:3,  target_nj:60,  target_nyc:6,  cost:13.50 },
    { id:'P012', name:'Bread Pudding',               cat:'pies', njQty:38,  nycQty:2,  target_nj:40,  target_nyc:5,  cost:11.00 },
  ],
  orders: [
    { id:'WS-0184', customer:"Zabar's Market",     type:'wholesale', fulfill_date:'2026-04-02', status:'pending',   items:[{pid:'P001',name:'Old Fashion Apple 10"',qty:12,price:14.50},{pid:'P003',name:'Sour Cream Apple Walnut 10"',qty:10,price:14.50},{pid:'P006',name:'Pecan 10"',qty:8,price:16.00}], notes:'',                created_at:'2026-03-28T10:00:00Z' },
    { id:'WS-0183', customer:"Murray's Cheese",    type:'wholesale', fulfill_date:'2026-03-29', status:'fulfilled', items:[{pid:'P005',name:'Key Lime 10"',qty:10,price:12.00},{pid:'P007',name:'Three Berry 10"',qty:8,price:13.00},{pid:'P009',name:'Cheesecake Small',qty:6,price:11.00}], notes:'',   created_at:'2026-03-26T09:00:00Z' },
    { id:'CT-0041', customer:'Brooklyn Fare',       type:'catering',  fulfill_date:'2026-04-05', status:'confirmed', items:[{pid:'P010',name:'Chicken Pot Pie 5"',qty:12,price:8.50},{pid:'P001',name:'Old Fashion Apple 10"',qty:8,price:14.50}], notes:'Dietary note: 2 vegan',            created_at:'2026-03-29T14:00:00Z' },
    { id:'WS-0182', customer:'Whole Foods Tribeca', type:'wholesale', fulfill_date:'2026-03-28', status:'fulfilled', items:[{pid:'P003',name:'Sour Cream Apple Walnut 10"',qty:15,price:14.50},{pid:'P006',name:'Pecan 10"',qty:12,price:16.00},{pid:'P007',name:'Three Berry 10"',qty:12,price:13.00}], notes:'', created_at:'2026-03-25T08:00:00Z' },
    { id:'WS-0181', customer:"Eli's Manhattan",     type:'wholesale', fulfill_date:'2026-04-01', status:'pending',   items:[{pid:'P001',name:'Old Fashion Apple 10"',qty:10,price:14.50},{pid:'P008',name:'Coffee Cake',qty:8,price:10.00},{pid:'P012',name:'Bread Pudding',qty:10,price:11.00}], notes:'', created_at:'2026-03-29T11:00:00Z' },
    { id:'CU-0022', customer:'Johnson Wedding',     type:'custom',    fulfill_date:'2026-04-12', status:'confirmed', items:[{pid:'P006',name:'Pecan 10"',qty:4,price:20.00}], notes:'Monogram decoration on each pie',                                                                                created_at:'2026-03-27T15:00:00Z' },
  ],
  batches: [
    { id:'BATCH-001', product_id:'P003', product_name:'Sour Cream Apple Walnut 10"', expected_qty:120, actual_qty:120, logged_by:'Nicholas', confirmed_by:'Raul', status:'confirmed', note:'',                logged_at:'2026-03-30T08:14:00Z', confirmed_at:'2026-03-30T08:20:00Z' },
    { id:'BATCH-002', product_id:'P005', product_name:'Key Lime 10"',                expected_qty:80,  actual_qty:75,  logged_by:'Nicholas', confirmed_by:'Raul', status:'confirmed', note:'5 broken, aside', logged_at:'2026-03-30T08:14:00Z', confirmed_at:'2026-03-30T08:22:00Z' },
    { id:'BATCH-003', product_id:'P001', product_name:'Old Fashion Apple 10"',       expected_qty:80,  actual_qty:null, logged_by:'Nicholas', confirmed_by:null,  status:'pending',   note:'',                logged_at:'2026-03-30T09:47:00Z', confirmed_at:null },
  ],
  pullLists: [
    { id:'PL-20260330', date:'2026-03-31', status:'pending', items:[
      {product_id:'P001', name:'Old Fashion Apple 10"',       njQty:45,  nycQty:4,  qty:8},
      {product_id:'P003', name:'Sour Cream Apple Walnut 10"', njQty:112, nycQty:6,  qty:6},
      {product_id:'P005', name:'Key Lime 10"',                njQty:23,  nycQty:2,  qty:10},
      {product_id:'P006', name:'Pecan 10"',                   njQty:31,  nycQty:3,  qty:7},
      {product_id:'P007', name:'Three Berry 10"',             njQty:67,  nycQty:5,  qty:5},
      {product_id:'P010', name:'Chicken Pot Pie 5"',          njQty:210, nycQty:12, qty:10},
      {product_id:'P011', name:'Pear Apple Crumb 10"',        njQty:52,  nycQty:3,  qty:5},
      {product_id:'P012', name:'Bread Pudding',               njQty:38,  nycQty:2,  qty:7},
    ]}
  ],
  shipments: [
    { id:'GB-20260330-0041', type:'goldbelly',  customer:'Sarah M.',    address:'Austin, TX',  items:[{product_id:'P001',name:'Old Fashion Apple 10"',qty:2},{product_id:'P006',name:'Pecan 10"',qty:1}], ship_date:'2026-03-30', status:'pending', created_at:'2026-03-29T20:00:00Z', shipped_at:null },
    { id:'GB-20260330-0040', type:'goldbelly',  customer:'David R.',    address:'Chicago, IL', items:[{product_id:'P003',name:'Sour Cream Apple Walnut 10"',qty:2}],                                       ship_date:'2026-03-30', status:'pending', created_at:'2026-03-29T18:00:00Z', shipped_at:null },
    { id:'GB-20260330-0039', type:'goldbelly',  customer:'Jennifer K.', address:'Seattle, WA', items:[{product_id:'P005',name:'Key Lime 10"',qty:1},{product_id:'P007',name:'Three Berry 10"',qty:1}],   ship_date:'2026-03-30', status:'pending', created_at:'2026-03-29T16:00:00Z', shipped_at:null },
    { id:'GB-20260329-0038', type:'goldbelly',  customer:'Michael T.',  address:'Denver, CO',  items:[{product_id:'P009',name:'Cheesecake Small',qty:2}],                                                  ship_date:'2026-03-29', status:'shipped', created_at:'2026-03-28T20:00:00Z', shipped_at:'2026-03-29T08:30:00Z' },
    { id:'WS-0183-SHIP',    type:'wholesale',  customer:"Murray's Cheese", address:'NYC',      items:[{product_id:'P005',name:'Key Lime 10"',qty:10},{product_id:'P007',name:'Three Berry 10"',qty:8}], ship_date:'2026-03-29', status:'shipped', created_at:'2026-03-29T07:00:00Z', shipped_at:'2026-03-29T10:00:00Z' },
  ],
  ledger: [
    { id:'L-001', product_id:'P003', product_name:'Sour Cream Apple Walnut 10"', delta:+120, location:'nj', reason:'Production intake', ref:'BATCH-001', ts:'2026-03-30T08:20:00Z' },
    { id:'L-002', product_id:'P005', product_name:'Key Lime 10"',                delta:+75,  location:'nj', reason:'Production intake', ref:'BATCH-002', ts:'2026-03-30T08:22:00Z' },
    { id:'L-003', product_id:'P009', product_name:'Cheesecake Small',            delta:-2,   location:'nj', reason:'Goldbelly shipment', ref:'GB-20260329-0038', ts:'2026-03-29T08:30:00Z' },
    { id:'L-004', product_id:'P003', product_name:'Sour Cream Apple Walnut 10"', delta:-15,  location:'nj', reason:'Wholesale fulfilled', ref:'WS-0182', ts:'2026-03-28T14:00:00Z' },
    { id:'L-005', product_id:'P006', product_name:'Pecan 10"',                   delta:-12,  location:'nj', reason:'Wholesale fulfilled', ref:'WS-0182', ts:'2026-03-28T14:00:00Z' },
    { id:'L-006', product_id:'P007', product_name:'Three Berry 10"',             delta:-12,  location:'nj', reason:'Wholesale fulfilled', ref:'WS-0182', ts:'2026-03-28T14:00:00Z' },
  ]
};

// ─── Init ────────────────────────────────────────────────────────────────────
function _load() { return JSON.parse(localStorage.getItem(_KEY) || 'null'); }
function _save(d) { localStorage.setItem(_KEY, JSON.stringify(d)); }
if (!_load()) { _save(SEED); }

// ─── Helpers ─────────────────────────────────────────────────────────────────
function _uid(prefix) { return prefix + '-' + Date.now() + Math.floor(Math.random()*1000); }
function _ts() { return new Date().toISOString(); }
function _ledger(d, productId, productName, delta, location, reason, ref) {
  d.ledger.unshift({ id:_uid('L'), product_id:productId, product_name:productName, delta, location, reason, ref, ts:_ts() });
}

// ─── Public API ──────────────────────────────────────────────────────────────
const AppData = {

  reset() { _save(SEED); location.reload(); },

  // ── Products ──
  getProducts()       { return _load().products; },
  getProduct(id)      { return _load().products.find(p => p.id === id); },
  adjustStock(productId, njDelta, nycDelta, reason, ref) {
    const d = _load();
    const p = d.products.find(x => x.id === productId);
    if (!p) return;
    if (njDelta)  { p.njQty  = Math.max(0, p.njQty  + njDelta);  _ledger(d, productId, p.name, njDelta,  'nj',  reason, ref); }
    if (nycDelta) { p.nycQty = Math.max(0, p.nycQty + nycDelta); _ledger(d, productId, p.name, nycDelta, 'nyc', reason, ref); }
    _save(d);
  },
  getStockAlerts()    {
    return _load().products.filter(p => {
      const pct = p.njQty / p.target_nj;
      return pct < 0.5;
    }).map(p => ({
      ...p,
      level: p.njQty / p.target_nj < 0.2 ? 'critical' : 'low'
    }));
  },
  getFreezerValue()   {
    const d = _load();
    return d.products.reduce((sum, p) => sum + (p.njQty + p.nycQty) * p.cost, 0);
  },
  getLedger(productId) {
    const d = _load();
    return productId ? d.ledger.filter(l => l.product_id === productId) : d.ledger;
  },

  // ── Orders ──
  getOrders()         { return _load().orders; },
  getOrder(id)        { return _load().orders.find(o => o.id === id); },
  addOrder(order)     {
    const d = _load();
    const nums = d.orders.filter(o => o.type === order.type).length;
    const prefix = order.type === 'wholesale' ? 'WS' : order.type === 'catering' ? 'CT' : 'CU';
    order.id = prefix + '-' + String(200 + nums).padStart(4,'0');
    order.created_at = _ts();
    order.status = 'pending';
    d.orders.unshift(order);
    _save(d);
    return order;
  },
  fulfillOrder(id)    {
    const d = _load();
    const o = d.orders.find(x => x.id === id);
    if (!o) return;
    o.status = 'fulfilled';
    // Deduct stock for each line item
    o.items.forEach(item => {
      const p = d.products.find(x => x.id === item.pid);
      if (p) {
        p.njQty = Math.max(0, p.njQty - item.qty);
        _ledger(d, item.pid, item.name, -item.qty, 'nj', 'Wholesale fulfilled', id);
      }
    });
    _save(d);
  },
  getPendingCount()   { return _load().orders.filter(o => o.status === 'pending').length; },

  // ── Production Batches ──
  getBatches()        { return _load().batches; },
  addBatch(batch)     {
    const d = _load();
    batch.id = _uid('BATCH');
    batch.logged_at = _ts();
    batch.status = 'pending';
    batch.confirmed_by = null;
    batch.confirmed_at = null;
    batch.actual_qty = null;
    d.batches.unshift(batch);
    _save(d);
    return batch;
  },
  confirmBatch(id, actualQty, note) {
    const d = _load();
    const b = d.batches.find(x => x.id === id);
    if (!b) return;
    b.actual_qty = actualQty;
    b.note = note || '';
    b.status = 'confirmed';
    b.confirmed_by = 'Raul';
    b.confirmed_at = _ts();
    const p = d.products.find(x => x.id === b.product_id);
    if (p) {
      p.njQty += actualQty;
      _ledger(d, b.product_id, b.product_name, actualQty, 'nj', 'Production intake', id);
    }
    _save(d);
  },
  getPendingBatchCount() { return _load().batches.filter(b => b.status === 'pending').length; },

  // ── Pull Lists ──
  getPullLists()      { return _load().pullLists; },
  completePullList(id) {
    const d = _load();
    const pl = d.pullLists.find(x => x.id === id);
    if (!pl) return;
    pl.status = 'completed';
    pl.completed_at = _ts();
    pl.items.forEach(item => {
      const p = d.products.find(x => x.id === item.product_id);
      if (p) {
        p.njQty  = Math.max(0, p.njQty  - item.qty);
        p.nycQty = p.nycQty + item.qty;
        _ledger(d, item.product_id, item.name, -item.qty, 'nj',  'Pull list NJ→NYC', id);
        _ledger(d, item.product_id, item.name, +item.qty, 'nyc', 'Pull list NJ→NYC', id);
      }
    });
    _save(d);
  },
  getPendingPullCount() { return _load().pullLists.filter(p => p.status === 'pending').length; },

  // ── Shipments ──
  getShipments()      { return _load().shipments; },
  addShipment(ship)   {
    const d = _load();
    const n = d.shipments.filter(s => s.type === 'goldbelly').length;
    const today = new Date().toISOString().slice(0,10).replace(/-/g,'');
    ship.id = 'GB-' + today + '-' + String(n + 42).padStart(4,'0');
    ship.created_at = _ts();
    ship.status = 'pending';
    ship.shipped_at = null;
    d.shipments.unshift(ship);
    _save(d);
    return ship;
  },
  markShipped(id)     {
    const d = _load();
    const s = d.shipments.find(x => x.id === id);
    if (!s) return;
    s.status = 'shipped';
    s.shipped_at = _ts();
    s.items.forEach(item => {
      const p = d.products.find(x => x.id === item.product_id);
      if (p) {
        p.njQty = Math.max(0, p.njQty - item.qty);
        _ledger(d, item.product_id, item.name, -item.qty, 'nj',
          s.type === 'goldbelly' ? 'Goldbelly shipment' : 'Wholesale fulfilled', id);
      }
    });
    _save(d);
  },
  getPendingShipCount() { return _load().shipments.filter(s => s.status === 'pending').length; },
};

window.AppData = AppData;

// ─── Shared UI helpers ────────────────────────────────────────────────────────
function showToast(msg, color) {
  let t = document.getElementById('_toast');
  if (!t) {
    t = document.createElement('div');
    t.id = '_toast';
    t.style.cssText = 'display:none;position:fixed;top:74px;left:50%;transform:translateX(-50%);color:white;padding:12px 24px;border-radius:99px;font-size:14px;font-weight:700;box-shadow:0 4px 16px rgba(0,0,0,0.2);z-index:9999;white-space:nowrap;pointer-events:none;';
    document.body.appendChild(t);
  }
  t.style.background = color || '#2E7D32';
  t.textContent = msg;
  t.style.display = 'block';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.style.display = 'none', 2200);
}

function fmtDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', {month:'short', day:'numeric'});
}

function fmtTime(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit'});
}

function fmtMoney(n) {
  return '$' + n.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
}

function stockStatus(njQty, target) {
  const pct = njQty / target;
  if (pct < 0.2) return 'critical';
  if (pct < 0.5) return 'low';
  return 'ok';
}
