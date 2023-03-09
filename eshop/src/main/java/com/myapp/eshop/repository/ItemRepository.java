package com.myapp.eshop.repository;

import com.myapp.eshop.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin
public interface ItemRepository extends JpaRepository<Item, Integer> {
}
