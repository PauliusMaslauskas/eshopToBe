package com.myapp.eshop.service;

import com.myapp.eshop.entity.Item;
import com.myapp.eshop.entity.User;
import java.util.List;

public interface UserService {

    public User createUser(User user);

    public List<User> getAllUsers();

    public User findUserById(int id);
}
