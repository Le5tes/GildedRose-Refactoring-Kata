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
      'Backstage passes': BackstagePass,
      'Sulfuras': LegendaryItem
    }
    this.items = items.map(function(item){
      const itemName = Object.keys(itemTypeHash).find(function(key){
        return item.name.includes(key)
      })
      const itemType = itemTypeHash[itemName] || RegularItem
  
      return new itemType(item) 
    });
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
        this.items[i].updateQuality()
    }     
    return this.items;
  } 
 
}



class StoreItem {
  constructor(item) {
    this.name = item.name
    this.quality = item.quality
    this.sellIn = item.sellIn 
  }

  updateQuality(){} 

  
  _increaseQuality() {
    if (this.quality < 50) {
      this.quality ++
    }
  }

  _decreaseQuality() {
    if (this.quality > 0) {
      this.quality --
    }
  }
}

class RegularItem extends StoreItem{
  updateQuality(){
    this.sellIn --
    this._decreaseQuality();
    if (this.sellIn < 0) {
      this._decreaseQuality();
    } 
  }
}

class AgedBrie extends StoreItem{
  updateQuality(){
    this.sellIn --
    this._increaseQuality()
  }

}

class BackstagePass extends StoreItem{
  updateQuality(){ 
    this.sellIn --
    if (this.sellIn < 0) {
      this.quality = 0
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
  updateQuality(){}
}
  
  


