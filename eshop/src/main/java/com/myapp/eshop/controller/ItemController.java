package com.myapp.eshop.controller;

import com.myapp.eshop.entity.Item;
import com.myapp.eshop.service.ItemServiceImp;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@AllArgsConstructor
@RequestMapping("/items")
@CrossOrigin(origins = "http://localhost:3000/")
public class ItemController {

    private final ItemServiceImp itemService;

    @PostMapping("/add")
    public Integer listItem(@RequestBody Item item){
        return itemService.createItem(item).getId();
    }

    @CrossOrigin
    @GetMapping("/getAll")
    public List<Item> getAllItems(){
       return itemService.getAllItems();
    }

    @PostMapping("/delete/{id}")
    public String deleteItem(@PathVariable("id") Integer id){
        itemService.deleteById(id);
        return "redirect:/items";
    }
}
