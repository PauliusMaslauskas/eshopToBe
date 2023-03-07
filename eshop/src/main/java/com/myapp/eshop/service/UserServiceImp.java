package com.myapp.eshop.service;


import com.myapp.eshop.entity.User;
import com.myapp.eshop.exeption.UserNotFoundException;
import com.myapp.eshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImp implements UserService {

@Autowired
private final UserRepository userRepository;

    public UserServiceImp(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User findUserById(int id) {
        return userRepository
                .findById(id)
                .orElseThrow(UserNotFoundException::new);
    }
}
