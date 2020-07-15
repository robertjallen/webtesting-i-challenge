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

  // test success
  test('sucess', () => {
    item = {
      name: 'name',
      durability: 5,
      enhancement: 3,
    };
  
    item2 = {
      name: 'twenty',
      durability: 2,
      enhancement: 20,
    };
    const enhancedItem = enhancer.succeed(item);
    const enhancedItem2 = enhancer.succeed(item2);
  
    expect(enhancedItem.enhancement).toBe(4);
    expect(enhancedItem2.enhancement).toBe(20);
  });


})