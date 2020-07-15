const enhancer = require('./enhancer.js');
// test away!
describe("enhancer unit tests", () => {
  // repair durability
	test('repairs', () => {
    item = {
      name: 'Gary',
      durability: 19,
      points: 1500,
    };
    const repairedItem = enhancer.repair(item);
    expect(repairedItem.durability).toBe(100);
  });


})