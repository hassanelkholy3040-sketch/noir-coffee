import { MENU_ITEMS, MENU_CATEGORIES } from './src/data/menuData.js';
import { LOCATION_DETAILS } from './src/data/locationData.js';
import { TESTIMONIALS } from './src/data/testimonialsData.js';

console.log('--- RUNNING NOIR COFFEE AUTOMATED TEST SUITE ---');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`✓ PASS: ${message}`);
  } else {
    console.error(`✗ FAIL: ${message}`);
    process.exitCode = 1;
  }
}

// 1. Menu Items Tests
assert(MENU_ITEMS.length >= 6, `Menu items count is ${MENU_ITEMS.length} (at least 6 required)`);

const requiredDrinks = [
  'Signature Espresso',
  'Velvet Cappuccino',
  'Vanilla Bean Latte',
  'Caramel Macchiato',
  '24-Hour Nitro Cold Brew',
  'NOIR Spanish Latte'
];

requiredDrinks.forEach(drink => {
  const found = MENU_ITEMS.some(item => item.name.toLowerCase().includes(drink.toLowerCase()) || drink.toLowerCase().includes(item.name.toLowerCase()));
  assert(found, `Required drink '${drink}' is present in menu data`);
});

// 2. Price and Attribute Integrity
MENU_ITEMS.forEach(item => {
  assert(typeof item.price === 'number' && item.price > 0, `Drink '${item.name}' has valid positive EGP price (${item.price} EGP)`);
  assert(item.description && item.description.length > 10, `Drink '${item.name}' has descriptive copy`);
  assert(item.image && item.image.startsWith('http'), `Drink '${item.name}' has high-res image URL`);
  assert(item.category === 'hot' || item.category === 'cold', `Drink '${item.name}' has valid category: ${item.category}`);
});

// 3. Category Filter Logic
const allCount = MENU_ITEMS.length;
const hotCount = MENU_ITEMS.filter(i => i.category === 'hot').length;
const coldCount = MENU_ITEMS.filter(i => i.category === 'cold').length;
const signatureCount = MENU_ITEMS.filter(i => i.subCategory === 'signature' || i.subCategory === 'specialty').length;

assert(hotCount >= 2, `Hot coffee category has ${hotCount} items`);
assert(coldCount >= 2, `Cold coffee category has ${coldCount} items`);
assert(signatureCount >= 3, `Signature creations category has ${signatureCount} items`);

// 4. Best Sellers
const bestSellers = MENU_ITEMS.filter(item => item.isBestSeller);
assert(bestSellers.length >= 3, `Best sellers count is ${bestSellers.length} (at least 3 required)`);

// 5. Shopping Cart Math Tests
let cart = [];
function addToCart(product, qty = 1) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) existing.quantity += qty;
  else cart.push({ ...product, quantity: qty });
}
function updateQty(id, delta) {
  cart = cart.map(i => i.id === id ? { ...i, quantity: i.quantity + delta } : i).filter(i => i.quantity > 0);
}
function calcTotals() {
  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const vat = Math.round(subtotal * 0.14);
  const total = subtotal + vat;
  return { subtotal, vat, total };
}

addToCart(MENU_ITEMS[0], 2); // 95 * 2 = 190
addToCart(MENU_ITEMS[1], 1); // 135 * 1 = 135
// subtotal = 325, vat = round(325 * 0.14) = 46, total = 371
let totals = calcTotals();
assert(totals.subtotal === 325, `Subtotal math is accurate: expected 325, got ${totals.subtotal}`);
assert(totals.vat === 46, `14% VAT math is accurate: expected 46, got ${totals.vat}`);
assert(totals.total === 371, `Total price math is accurate: expected 371, got ${totals.total}`);

updateQty(MENU_ITEMS[0].id, -1); // 1 espresso remaining
totals = calcTotals();
assert(totals.subtotal === 230, `Quantity decrease updates subtotal: expected 230, got ${totals.subtotal}`);

updateQty(MENU_ITEMS[0].id, -1); // 0 espresso -> removed
assert(cart.length === 1 && cart[0].id === MENU_ITEMS[1].id, `Decreasing to 0 removes line item`);

// 6. Location & Demo Content Integrity
assert(LOCATION_DETAILS.isDemoNotice.includes('Demo'), `Location clearly contains demo disclosure notice`);
assert(LOCATION_DETAILS.hours && LOCATION_DETAILS.hours.length >= 3, `Opening hours has complete schedule`);
assert(LOCATION_DETAILS.mapUrl && LOCATION_DETAILS.mapUrl.startsWith('https://maps.google.com'), `Google Maps directions link is configured`);

// 7. Testimonials Integrity
assert(TESTIMONIALS.length === 3, `3 customer testimonials are configured`);
TESTIMONIALS.forEach(t => {
  assert(t.rating === 5, `Testimonial by ${t.name} has 5 star rating`);
  assert(t.quote && t.quote.length > 20, `Testimonial quote is complete`);
});

// 8. Newsletter Email Validation Logic
const validateEmail = (input) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.trim());
assert(validateEmail('guest@domain.com') === true, `Valid email passes validation`);
assert(validateEmail('  coffee.lover@cairo.eg  ') === true, `Trimmed valid email passes validation`);
assert(validateEmail('') === false, `Empty email fails validation`);
assert(validateEmail('invalid-email') === false, `Invalid email fails validation`);
assert(validateEmail('no@domain') === false, `Incomplete email fails validation`);

console.log(`\n========================================`);
console.log(`TEST RESULTS: ${passedTests} / ${totalTests} tests passed successfully.`);
console.log(`========================================\n`);

