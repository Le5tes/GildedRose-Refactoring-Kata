describe("Gilded Rose", function() {

  describe("regular items", function(){
    beforeEach(function(){
  	  const gildedRose = new Shop([ new Item("foo", 10, 10), new Item("bar", 0, 10), new Item("baz", 10, 0) ]);
  	  items = gildedRose.updateQuality();
    })
 
    it("should keep the name", function() {      
      expect(items[0].name).toEqual("foo");
    });

    it("should degrade by one when they are still in date",function(){
  	  expect(items[0].quality).toEqual(9);
    });

    it("should reduce the sellIn value by one", function(){
      expect(items[0].sellIn).toEqual(9);
    });

    it("should degrade by 2 once the sellIn value is 0",  function(){
      expect(items[1].quality).toEqual(8);
    });

    it("should not degrade below 0", function(){
      expect(items[2].quality).not.toEqual(-1);
    });
  });

  describe("Aged Brie", function(){
  	beforeEach(function(){
  	  const gildedRose = new Shop([ new Item("Aged Brie", 10, 10), new Item("Aged Brie", 10, 50)]);
  	  items = gildedRose.updateQuality();
    });

  	it("should increase in quality", function(){
  	  expect(items[0].quality).toEqual(11);
  	});

  	it("should never increase in quality above 50", function(){
  	  expect(items[1].quality).not.toEqual(51);
  	});
  });

  describe("Sulfuras",function(){
  	beforeEach(function(){
  	  const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
  	  items = gildedRose.updateQuality();
    });

    it("should never change in quality", function(){
      expect(items[0].quality).toEqual(80);
    });

    it("should not change it's sellIn", function(){
      expect(items[0].sellIn).toEqual(0);
    });
  });
  

});
