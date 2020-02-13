/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */
global.shops = [];

/* 
 * TODO: delete this it's just a sample
 *
 */
function createShop() {
  return {
    name: "",
    employees: 0,
    currentlyOpen: false
  };
}

function getShops() {
  return global.shops;
}

function getShop(i) {
  return global.shops[i];
}

function addShop(newShop) {
  global.shops.push(newShop);
}

function updateShop(i, shop) {
  global.shops[i] = shop;
}

function deleteShop(i) {
  global.shops.splice(i, 1);
}

/* Step 1
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addShop,
  createShop,
  deleteShop,
  getShop,
  getShops,
  updateShop,
};
