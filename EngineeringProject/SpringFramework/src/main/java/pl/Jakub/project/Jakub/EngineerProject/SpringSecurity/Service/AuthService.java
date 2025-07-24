package pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.Service;

import pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.dto.LoginDto;
import pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);

    String login(LoginDto loginDto);
}