class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    const itemTypeHash = {
      'Aged Brie': AgedBrie,
      'Backstage passes to a TAFKAL80ETC concert': BackstagePass,
      'Sulfuras, Hand of Ragnaros': LegendaryItem,
      'Conjured Mana Cake': ConjuredItem
    };
    this.items = items.map(function(item){
      const itemType = itemTypeHash[item.name] || StoreItem;
      return new itemType(item); 
    });
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].updateQuality();
    }     
    return this.items;
  } 
 
}

class StoreItem {
  constructor(item) {
    this.name = item.name;
    this.quality = item.quality;
    this.sellIn = item.sellIn ;
  }

  updateQuality(){
    this.sellIn --
    this._decreaseQuality();
    if (this.sellIn < 0) {
      this._decreaseQuality();
    }
  } 
  
  _increaseQuality() {
    if (this.quality < 50) {
      this.quality ++;
    }
  }

  _decreaseQuality() {
    if (this.quality > 0) {
      this.quality --;
    }
  }
}

class AgedBrie extends StoreItem{
  updateQuality(){
    this.sellIn --;
    this._increaseQuality();
  }
}

class BackstagePass extends StoreItem{
  updateQuality(){ 
    this.sellIn --
    if (this.sellIn < 0) {
      this.quality = 0;
    } else {
      this._increaseQuality();
      if (this.sellIn < 11) {
        this._increaseQuality();
      };
      if (this.sellIn < 6) {
        this._increaseQuality();
      };
    }
  }
}

class LegendaryItem extends StoreItem{
  updateQuality(){};
}

class ConjuredItem extends StoreItem{
  updateQuality(){
    super.updateQuality();
    super.updateQuality();
  };
}
  
  


