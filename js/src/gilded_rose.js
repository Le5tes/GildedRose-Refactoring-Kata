class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items.map(function(item){return new StoreItem(item) });
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

  updateQuality(){
    if (this._isNotSulphuras()){
      this.sellIn --
      switch (this.name) {
          case 'Aged Brie':
            this.agedBrieUpdate()
            break;

          case 'Backstage passes to a TAFKAL80ETC concert': 
            this.backstagePassUpdate()
            break;

          default:
            
            this.regularItemUpdate()
            }
            
        };

    }

  agedBrieUpdate () {
    this._increaseQuality()
  }

  backstagePassUpdate () {
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

  regularItemUpdate() {
    this._decreaseQuality();
    if (this.sellIn < 0) {
      this._decreaseQuality();
    }
  }
  

  _isNotSulphuras() {
    return this.name != 'Sulfuras, Hand of Ragnaros'
  }

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





