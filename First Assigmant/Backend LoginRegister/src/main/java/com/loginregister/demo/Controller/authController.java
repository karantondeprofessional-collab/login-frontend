package com.loginregister.demo.Controller;


import com.loginregister.demo.entity.User;
import com.loginregister.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class authController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        userRepository.save(user);
        return "User Registered Successfully";
    }


    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User u = userRepository.findByEmailAndPassword(
                user.getEmail(),
                user.getPassword()
        );

        if (u != null) {
            return "Login Successful";
        } else {
            return "Invalid Email or Password";
        }
    }
}

