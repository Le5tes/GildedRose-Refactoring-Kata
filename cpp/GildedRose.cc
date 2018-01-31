#include "GildedRose.h"

GildedRose::GildedRose(vector<Item> & items) : items(items)
{}
    
void GildedRose::updateQuality() 
{
    for (int i = 0; i < items.size(); i++)
    {
        if (items[i].name != "Sulfuras, Hand of Ragnaros")
            {   
            items[i].sellIn = items[i].sellIn - 1;
            if(items[i].name == "Aged Brie")
            {     
                if (items[i].quality < 50)
                {
                    items[i].quality = items[i].quality + 1;
                }
                break;
            }
            else if (items[i].name == "Backstage passes to a TAFKAL80ETC concert")
            {
                if (items[i].quality < 50)
                {   
                    if (items[i].sellIn <0 )
                    {
                        items[i].quality = 0;
                    }
                    else 
                    {
                        items[i].quality = items[i].quality + 1;
                        if (items[i].sellIn < 11)
                        {
                            if (items[i].quality < 50)
                            {
                                items[i].quality = items[i].quality + 1;
                            }
                        }

                        if (items[i].sellIn < 6)
                        {
                            if (items[i].quality < 50)
                            {
                                items[i].quality = items[i].quality + 1;
                            }
                        }
                    }
                }
            }
            else
            {
                if (items[i].quality > 0)
                {                 
                    items[i].quality = items[i].quality - 1;                   
                    if (items[i].sellIn < 0)
                    {
                        items[i].quality = items[i].quality - 1;
                    }
                }

            }

        }
    }
}
