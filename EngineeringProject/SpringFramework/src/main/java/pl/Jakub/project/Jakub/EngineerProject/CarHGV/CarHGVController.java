package pl.Jakub.project.Jakub.EngineerProject.CarHGV;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import pl.Jakub.project.Jakub.EngineerProject.CarTruck.CarTruck;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/carhgv")
public class CarHGVController {

    @Autowired
    CarHGVRepository carHGVRepository;

    @GetMapping("/search")
    public List<CarHGV> searchCarsHGV(
            @RequestParam(name = "carBody_CarHGV", required = false) String carBody_CarHGV,
            @RequestParam(name = "mark_CarHGV", required = false) String mark_CarHGV,
            @RequestParam(name = "model_CarHGV", required = false) String model_CarHGV,
            @RequestParam(name = "gearbox_CarHGV", required = false) String gearbox_CarHGV,
            @RequestParam(name = "minEngine_CarHGV", required = false) Integer minEngine_CarHGV,
            @RequestParam(name = "maxEngine_CarHGV", required = false) Integer maxEngine_CarHGV,
            @RequestParam(name = "minPower_CarHGV", required = false) Integer minPower_CarHGV,
            @RequestParam(name = "maxPower_CarHGV", required = false) Integer maxPower_CarHGV,
            @RequestParam(name = "fuel_CarHGV", required = false) String fuel_CarHGV,
            @RequestParam(name = "state_CarHGV", required = false) String state_CarHGV,
            @RequestParam(name = "minPrice_CarHGV", required = false) Integer minPrice_CarHGV,
            @RequestParam(name = "maxPrice_CarHGV", required = false) Integer maxPrice_CarHGV,
            @RequestParam(name = "minYear_CarHGV", required = false) Integer minYear_CarHGV,
            @RequestParam(name = "maxYear_CarHGV", required = false) Integer maxYear_CarHGV,
            @RequestParam(name = "minMileage_CarHGV", required = false) Integer minMileage_CarHGV,
            @RequestParam(name = "maxMileage_CarHGV", required = false) Integer maxMileage_CarHGV,
            @RequestParam(name = "minCargoWeight_CarHGV", required = false) String minCargoWeight_CarHGV,
            @RequestParam(name = "maxCargoWeight_CarHGV", required = false) String maxCargoWeight_CarHGV,
            @RequestParam(name = "minCargoLoad_CarHGV", required = false) String minCargoLoad_CarHGV,
            @RequestParam(name = "maxCargoLoad_CarHGV", required = false) String maxCargoLoad_CarHGV){
        return carHGVRepository.searchCarsHGV(carBody_CarHGV, mark_CarHGV, model_CarHGV, gearbox_CarHGV, minEngine_CarHGV,  maxEngine_CarHGV, minPower_CarHGV, maxPower_CarHGV, fuel_CarHGV, state_CarHGV, minPrice_CarHGV, maxPrice_CarHGV, minYear_CarHGV, maxYear_CarHGV, minMileage_CarHGV, maxMileage_CarHGV, minCargoWeight_CarHGV, maxCargoWeight_CarHGV, minCargoLoad_CarHGV, maxCargoLoad_CarHGV);
    }

    @GetMapping("")
    public List<CarHGV> getAll() {
        return carHGVRepository.getAll();
    }

    @GetMapping("/{id}")
    public CarHGV getById(@PathVariable("id") int id) {
        return carHGVRepository.getById(id);
    }

    @PostMapping("/add")
    public int add(@RequestBody CarHGV carHGV, @AuthenticationPrincipal UserDetails userDetails) {
        // Pobierz nazwę użytkownika z zalogowanego użytkownika
        String username = userDetails.getUsername();

        // Pobierz ID użytkownika na podstawie nazwy użytkownika
        int user_id = carHGVRepository.getUserIdByUsername(username);

        // Przypisz ID użytkownika do ogłoszenia
        carHGV.setUser_id(String.valueOf(user_id));

        // Zapisz ogłoszenie w repozytorium
        return carHGVRepository.save(carHGV);
    }

    @GetMapping("/ogloszenia/{userId}")
    public List<CarHGV> getAdsByUser(@PathVariable("userId") String userId) {
        return carHGVRepository.getAdsByUser(userId);
    }

    @PatchMapping("/edytowanie/{id}")
    public int partiallyUpdate(@PathVariable("id") int id, @RequestBody CarHGV updatedCar) {
        CarHGV carHGV = carHGVRepository.getById(id);

        if (carHGV != null) {
            carHGV.setCarHGV_mark(updatedCar.getCarHGV_mark());
            carHGV.setCarHGV_model(updatedCar.getCarHGV_model());
            carHGV.setCarHGV_state(updatedCar.getCarHGV_state());
            carHGV.setCarHGV_vin(updatedCar.getCarHGV_vin());
            carHGV.setCarHGV_mileage(updatedCar.getCarHGV_mileage());
            carHGV.setCarHGV_vehicle_registration(updatedCar.getCarHGV_vehicle_registration());
            carHGV.setCarHGV_data_first_vehicle_registration(updatedCar.getCarHGV_data_first_vehicle_registration());
            carHGV.setCarHGV_year(updatedCar.getCarHGV_year());
            carHGV.setCarHGV_fuel(updatedCar.getCarHGV_fuel());
            carHGV.setCarHGV_power(updatedCar.getCarHGV_power());
            carHGV.setCarHGV_engine(updatedCar.getCarHGV_engine());
            carHGV.setCarHGV_gearbox(updatedCar.getCarHGV_gearbox());
            carHGV.setCarHGV_emission(updatedCar.getCarHGV_emission());
            carHGV.setCarHGV_car_body(updatedCar.getCarHGV_car_body());
            carHGV.setCarHGV_int_place(updatedCar.getCarHGV_int_place());
            carHGV.setCarHGV_color(updatedCar.getCarHGV_color());
            carHGV.setCarHGV_type_color(updatedCar.getCarHGV_type_color());
            carHGV.setCarHGV_cargo_weight(updatedCar.getCarHGV_cargo_weight());
            carHGV.setCarHGV_cargo_load(updatedCar.getCarHGV_cargo_load());
            carHGV.setCarHGV_photo(updatedCar.getCarHGV_photo());
            carHGV.setCarHGV_title(updatedCar.getCarHGV_title());
            carHGV.setCarHGV_description(updatedCar.getCarHGV_description());
            carHGV.setCarHGV_price(updatedCar.getCarHGV_price());
            carHGV.setCarHGV_name_car(updatedCar.getCarHGV_name_car());
            carHGV.setCarHGV_town(updatedCar.getCarHGV_town());
            carHGV.setCarHGV_phone(updatedCar.getCarHGV_phone());

            carHGVRepository.update(carHGV);

            return 1;
        } else {
            return -1;
        }
    }

    @DeleteMapping("/{id}")
    public int delete(@PathVariable("id") int id) {
        return carHGVRepository.delete(id);
    }
}
