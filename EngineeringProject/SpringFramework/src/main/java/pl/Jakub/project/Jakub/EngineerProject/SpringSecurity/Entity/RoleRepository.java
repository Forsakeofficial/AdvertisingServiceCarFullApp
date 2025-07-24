package pl.Jakub.project.Jakub.EngineerProject.SpringSecurity.Entity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);
}