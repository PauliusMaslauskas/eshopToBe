package com.myapp.eshop.authentification;

import com.myapp.eshop.entity.User;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@AllArgsConstructor
@RequestMapping(path = "/api/register")
public class UserRegistrationController {

    private final AuthService authService;

    @GetMapping("/register")
    public Model getRegistrationForm(Model model) {
        return model.addAttribute("user", new User());
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> registerUser(@RequestBody RegisterRequest request){
        return  ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthResponse> authenticateUser(@RequestBody AuthRequest request){
        return  ResponseEntity.ok(authService.authenticate(request));

    }
}
