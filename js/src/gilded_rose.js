class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this._isNotSulphuras(i)){
        this.items[i].sellIn = this.items[i].sellIn - 1;

        switch (this.items[i].name) {
          case 'Aged Brie':
            this._increaseQuality(this.items[i])
            break;

          case 'Backstage passes to a TAFKAL80ETC concert': 
            if (this.items[i].sellIn < 0) {
              this.items[i].quality = 0
            } else {
              this._increaseQuality(this.items[i]);
              if (this.items[i].sellIn < 11) {
                this._increaseQuality(this.items[i]);};
              if (this.items[i].sellIn < 6) {
                this._increaseQuality(this.items[i]);};
            }
            break;

          default:
            
            this._decreaseQuality(this.items[i]);
            if (this.items[i].sellIn < 0) {
             this._decreaseQuality(this.items[i]);
            }
            
        };
      }
    }
      

    return this.items;
  }

  _isNotSulphuras(i) {
    return this.items[i].name != 'Sulfuras, Hand of Ragnaros'
  }

  _decreaseQuality(item) {
    if (item.quality > 0) {
      item.quality --
    }
  }

  _increaseQuality(item) {
    if (item.quality < 50) {
      item.quality ++
    }
  }
}
