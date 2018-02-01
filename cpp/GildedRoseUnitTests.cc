#include <gtest/gtest.h>

#include "GildedRose.h"


TEST(GildedRoseTest, Name) {
    vector<Item> items;
    items.push_back(Item("Foo", 0, 0));
    GildedRose app(items);
    app.updateQuality();
    EXPECT_EQ("Foo", app.items[0].name);
}

TEST(GildedRoseTest, SellInReduces) {
    vector<Item> items;
    items.push_back(Item("Foo", 5, 5));
    GildedRose app(items);
    app.updateQuality();
    EXPECT_EQ(4, app.items[0].sellIn);
}

TEST(GildedRoseTest, Degrades) {
    vector<Item> items;
    items.push_back(Item("Foo", 5, 5));
    GildedRose app(items);
    app.updateQuality();
    EXPECT_EQ(4, app.items[0].quality);
}

TEST(GildedRoseTest, DegradesDoubleOnceSellInZero) {
    vector<Item> items;
    items.push_back(Item("Foo", 0, 5));
    GildedRose app(items);
    app.updateQuality();
    EXPECT_EQ(3, app.items[0].quality);
}

TEST(GildedRoseTest, DoesntDegradeBelowZero) {
    vector<Item> items;
    items.push_back(Item("Foo", 0, 0));
    GildedRose app(items);
    app.updateQuality();
    EXPECT_EQ(0, app.items[0].quality);
}

TEST(GildedRoseTest, SulfurasNeverChanges) {
    vector<Item> items;
    items.push_back(Item("Sulfuras, Hand of Ragnaros", 5, 5));
    GildedRose app(items);
    app.updateQuality();
    EXPECT_EQ(5, app.items[0].quality);
    EXPECT_EQ(5, app.items[0].sellIn);
}

TEST(GildedRoseTest, AgedBrieGetsMoreValuable) {
    vector<Item> items;
    items.push_back(Item("Aged Brie", 5, 5));
    GildedRose app(items);
    app.updateQuality();
    EXPECT_EQ(6, app.items[0].quality);
}

TEST(GildedRoseTest, NeverMoreThanFifty) {
    vector<Item> items;
    items.push_back(Item("Aged Brie", 5, 50));
    items.push_back(Item("Backstage passes to a TAFKAL80ETC concert", 5, 50));
    GildedRose app(items);
    app.updateQuality();
    EXPECT_EQ(50, app.items[0].quality);
    EXPECT_EQ(50, app.items[1].quality);
}

TEST(GildedRoseTest, BackstagePasses) {
    vector<Item> items;
    items.push_back(Item("Backstage passes to a TAFKAL80ETC concert", 15, 5));
    items.push_back(Item("Backstage passes to a TAFKAL80ETC concert", 10, 5));
    items.push_back(Item("Backstage passes to a TAFKAL80ETC concert", 5, 5));
    items.push_back(Item("Backstage passes to a TAFKAL80ETC concert", 0, 5));
    GildedRose app(items);
    app.updateQuality();
    EXPECT_EQ(6, app.items[0].quality);
    EXPECT_EQ(7, app.items[1].quality);
    EXPECT_EQ(8, app.items[2].quality);
    EXPECT_EQ(0, app.items[3].quality);
}

TEST(StoreItemTest, Name) {
    StoreItem myItem(Item("Foo",5,5));
    EXPECT_EQ("Foo", myItem.name());
}

TEST(StoreItemTest, Quality) {
    StoreItem myItem(Item("Foo",5,5));
    EXPECT_EQ(5, myItem.quality());
}

TEST(StoreItemTest,SellIn) {
    StoreItem myItem(Item("Foo",5,5));
    EXPECT_EQ(5, myItem.sellIn());
}

void example()
{
    vector<Item> items;
    items.push_back(Item("+5 Dexterity Vest", 10, 20));
    items.push_back(Item("Aged Brie", 2, 0));
    items.push_back(Item("Elixir of the Mongoose", 5, 7));
    items.push_back(Item("Sulfuras, Hand of Ragnaros", 0, 80));
    items.push_back(Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
    items.push_back(Item("Conjured Mana Cake", 3, 6));
    GildedRose app(items);
    app.updateQuality();
}
