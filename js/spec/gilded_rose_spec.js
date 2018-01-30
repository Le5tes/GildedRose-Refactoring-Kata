describe("Gilded Rose", function() {

  describe("regular items", function(){
    beforeEach(function(){
  	  const gildedRose = new Shop([ new Item("foo", 10, 10) ]);
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
  });
  

});
