package pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.Jakub.project.Jakub.EngineerProject.CarHGV.CarHGV;
import pl.Jakub.project.Jakub.EngineerProject.CarHGV.CarHGVRepository;
import pl.Jakub.project.Jakub.EngineerProject.CarParts.CarParts;
import pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.Entity.User;
import pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.Entity.UserRepository;


import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    private final UserRepository userRepository;
    private final CarHGVRepository carHGVRepository;
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserController(UserRepository userRepository, CarHGVRepository carHGVRepository, JdbcTemplate jdbcTemplate) {
        this.userRepository = userRepository;
        this.carHGVRepository = carHGVRepository;
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping("/profile")
    public User getUserProfile() {
        // Pobierz nazwę użytkownika z kontekstu uwierzytelnienia
        String username = SecurityContextHolder.getContext().getAuthentication().getName();

        // Pobierz użytkownika na podstawie nazwy użytkownika
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Użytkownik nie istnieje"));
    }

}
