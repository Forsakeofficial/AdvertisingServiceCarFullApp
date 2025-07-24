package pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.Service.impl;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.CustomPackage.JWTTokenProvider;
import pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.Entity.Role;
import pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.Entity.RoleRepository;
import pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.Entity.User;
import pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.Entity.UserRepository;
import pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.Exception.APIException;
import pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.Service.AuthService;
import pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.dto.LoginDto;
import pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.dto.RegisterDto;

import java.util.HashSet;
import java.util.Set;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;
    private JWTTokenProvider jwtTokenProvider;


    @Override
    public String register(RegisterDto registerDto) {

        if(userRepository.existsByUsername(registerDto.getUsername())){
            throw new APIException(HttpStatus.BAD_REQUEST, "Użytkownik już istnieje");
        }

        if(userRepository.existsByEmail(registerDto.getEmail())){
            throw new APIException(HttpStatus.BAD_REQUEST, "Podan email jest już w użyciu");
        }

        User user = new User();
        user.setName(registerDto.getName());
        user.setUsername(registerDto.getUsername());
        user.setEmail(registerDto.getEmail());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName("ROLE_USER");
        roles.add(userRole);

        user.setRoles(roles);

        userRepository.save(user);

        return "Użytkownik zarejestrowany";
    }

    @Override
    public String login(LoginDto loginDto) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUsernameOrEmail(),
                loginDto.getPassword()
        ));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtTokenProvider.generateToken(authentication);

        return token;
    }

}
