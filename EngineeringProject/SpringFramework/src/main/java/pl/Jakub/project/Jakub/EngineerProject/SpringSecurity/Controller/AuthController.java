package pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.Controller;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.Service.AuthService;
import pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.dto.JWTAuthResponse;
import pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.dto.LoginDto;
import pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.dto.RegisterDto;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private AuthService authService;

    // Build Register REST API
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto){
        String response = authService.register(registerDto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // Build Login REST API
    @PostMapping("/login")
    public ResponseEntity<JWTAuthResponse> login(@RequestBody LoginDto loginDto){
        String token = authService.login(loginDto);

        JWTAuthResponse jwtAuthResponse = new JWTAuthResponse();
        jwtAuthResponse.setAccessToken(token);

        return new ResponseEntity<>(jwtAuthResponse, HttpStatus.OK);
    }

}