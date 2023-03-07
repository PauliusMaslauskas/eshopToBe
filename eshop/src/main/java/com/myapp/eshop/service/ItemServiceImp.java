package com.myapp.eshop.service;

import com.myapp.eshop.entity.Item;
import com.myapp.eshop.exeption.ItemNotFoundException;
import com.myapp.eshop.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemServiceImp implements ItemService {

    @Autowired
    private final ItemRepository itemRepository;

    public ItemServiceImp(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @Override
    public Item createItem(Item item){
        return itemRepository.save(item);
    }


    @Override
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public void deleteById(int id) {
        itemRepository.deleteById(id);
    }

    public Item findItemById(int id) {
        return itemRepository
                .findById(id)
                .orElseThrow(ItemNotFoundException::new);
    }
}
