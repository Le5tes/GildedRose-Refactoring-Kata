#include <string>
#include <vector>

using namespace std;

class Item
{
public:
    string name;
    int sellIn;
    int quality;
    Item(string name, int sellIn, int quality) : name(name), sellIn(sellIn), quality(quality) 
    {}
};

class StoreItem
{
public:
	Item item;
	StoreItem(Item item) : item(item)
	{}

	string name(){
		return item.name;
	}

	int quality(){
		return item.quality;
	}

	int sellIn(){
		return item.sellIn;
	}

};

class GildedRose
{
public:
    vector<Item> & items;
    GildedRose(vector<Item> & items);
    
    void updateQuality();
};
