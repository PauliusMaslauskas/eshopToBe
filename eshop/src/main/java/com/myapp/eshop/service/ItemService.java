package com.myapp.eshop.service;

import com.myapp.eshop.entity.Item;
import java.util.List;

public interface ItemService {
   public Item createItem(Item item);

   public List<Item> getAllItems();

   public Item findItemById(int id);
}
