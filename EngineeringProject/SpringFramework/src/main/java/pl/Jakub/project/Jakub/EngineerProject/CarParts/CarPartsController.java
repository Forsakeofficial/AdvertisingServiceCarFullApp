package pl.Jakub.project.Jakub.EngineerProject.CarParts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import pl.Jakub.project.Jakub.EngineerProject.CarHGV.CarHGV;
import pl.Jakub.project.Jakub.EngineerProject.CarTruck.CarTruck;

import java.util.List;

@RestController
@RequestMapping("/api/carparts")
@CrossOrigin
public class CarPartsController {

    @Autowired
    CarPartsRepository carPartsRepository;

    @GetMapping("/search")
    public List<CarParts> searchCarParts(
            @RequestParam(name = "name_CarParts", required = false) String name_CarParts,
            @RequestParam(name = "manufacturer_CarParts", required = false) String manufacturer_CarParts,
            @RequestParam(name = "manufacturer_reference_number_CarParts", required = false) String manufacturer_reference_number_CarParts,
            @RequestParam(name = "state_CarParts", required = false) String state_CarParts,
            @RequestParam(name = "minPrice_CarParts", required = false) Integer minPrice_CarParts,
            @RequestParam(name = "maxPrice_CarParts", required = false) Integer maxPrice_CarParts){

        return carPartsRepository .searchCarParts(name_CarParts, manufacturer_CarParts, manufacturer_reference_number_CarParts, state_CarParts, minPrice_CarParts,  maxPrice_CarParts);
    }

    @GetMapping("")
    public List<CarParts> getAll() {
        return carPartsRepository.getAll();
    }

    @GetMapping("/{id}")
    public CarParts getById(@PathVariable("id") int id) {
        return carPartsRepository.getById(id);
    }

    @PostMapping("/add")
    public int add(@RequestBody CarParts carParts, @AuthenticationPrincipal UserDetails userDetails) {
        // Pobierz nazwę użytkownika z zalogowanego użytkownika
        String username = userDetails.getUsername();

        // Pobierz ID użytkownika na podstawie nazwy użytkownika
        int user_id = carPartsRepository.getUserIdByUsername(username);

        // Przypisz ID użytkownika do ogłoszenia
        carParts.setUser_id(String.valueOf(user_id));

        // Zapisz ogłoszenie w repozytorium
        return carPartsRepository.save(carParts);
    }

    @GetMapping("/ogloszenia/{userId}")
    public List<CarParts> getAdsByUser(@PathVariable("userId") String userId) {
        return carPartsRepository.getAdsByUser(userId);
    }

    @PatchMapping("/edytowanie/{id}")
    public int partiallyUpdate(@PathVariable("id") int id, @RequestBody CarParts updatedCar) {
        CarParts carParts = carPartsRepository.getById(id);

        if (carParts != null) {

            carParts.setCarParts_name(updatedCar.getCarParts_name());
            carParts.setCarParts_state(updatedCar.getCarParts_state());
            carParts.setCarParts_manufacturer(updatedCar.getCarParts_manufacturer());
            carParts.setCarParts_manufacturer_reference_number(updatedCar.getCarParts_manufacturer_reference_number());
            carParts.setCarParts_photo(updatedCar.getCarParts_photo());
            carParts.setCarParts_title(updatedCar.getCarParts_title());
            carParts.setCarParts_description(updatedCar.getCarParts_description());
            carParts.setCarParts_price(updatedCar.getCarParts_price());
            carParts.setCarParts_name_user(updatedCar.getCarParts_name_user());
            carParts.setCarParts_town(updatedCar.getCarParts_town());
            carParts.setCarParts_phone(updatedCar.getCarParts_phone());


            carPartsRepository.update(carParts);

            return 1;
        } else {
            return -1;
        }
    }

    @DeleteMapping("/{id}")
    public int delete(@PathVariable("id") int id) {
        return carPartsRepository.delete(id);
    }
}
