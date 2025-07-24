package pl.Jakub.project.Jakub.EngineerProject.CarTruck;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import pl.Jakub.project.Jakub.EngineerProject.CarHGV.CarHGV;
import pl.Jakub.project.Jakub.EngineerProject.CarPassenger.Car;

import java.util.List;

@RestController
@RequestMapping("/api/cartruck")
@CrossOrigin
public class CarTruckController {

    @Autowired
    CarTruckRepository carTruckRepository;

    @GetMapping("/search")
    public List<CarTruck> searchCarsTruck(
            @RequestParam(name = "carBody_CarTruck", required = false) String carBody_CarTruck,
            @RequestParam(name = "mark_CarTruck", required = false) String mark_CarTruck,
            @RequestParam(name = "model_CarTruck", required = false) String model_CarTruck,
            @RequestParam(name = "gearbox_CarTruck", required = false) String gearbox_CarTruck,
            @RequestParam(name = "minEngine_CarTruck", required = false) Integer minEngine_CarTruck,
            @RequestParam(name = "maxEngine_CarTruck", required = false) Integer maxEngine_CarTruck,
            @RequestParam(name = "minPower_CarTruck", required = false) Integer minPower_CarTruck,
            @RequestParam(name = "maxPower_CarTruck", required = false) Integer maxPower_CarTruck,
            @RequestParam(name = "fuel_CarTruck", required = false) String fuel_CarTruck,
            @RequestParam(name = "state_CarTruck", required = false) String state_CarTruck,
            @RequestParam(name = "minPrice_CarTruck", required = false) Integer minPrice_CarTruck,
            @RequestParam(name = "maxPrice_CarTruck", required = false) Integer maxPrice_CarTruck,
            @RequestParam(name = "minYear_CarTruck", required = false) Integer minYear_CarTruck,
            @RequestParam(name = "maxYear_CarTruck", required = false) Integer maxYear_CarTruck,
            @RequestParam(name = "minMileage_CarTruck", required = false) Integer minMileage_CarTruck,
            @RequestParam(name = "maxMileage_CarTruck", required = false) Integer maxMileage_CarTruck,
            @RequestParam(name = "minCargoCapacity_CarTruck", required = false) String minCargoCapacity_CarTruck,
            @RequestParam(name = "maxCargoCapacity_CarTruck", required = false) String maxCargoCapacity_CarTruck,
            @RequestParam(name = "minCargoWeight_CarTruck", required = false) String minCargoWeight_CarTruck,
            @RequestParam(name = "maxCargoWeight_CarTruck", required = false) String maxCargoWeight_CarTruck,
            @RequestParam(name = "minCargoLoad_CarTruck", required = false) String minCargoLoad_CarTruck,
            @RequestParam(name = "maxCargoLoad_CarTruck", required = false) String maxCargoLoad_CarTruck){
        return carTruckRepository.searchCarsTruck(carBody_CarTruck, mark_CarTruck, model_CarTruck, gearbox_CarTruck, minEngine_CarTruck,  maxEngine_CarTruck, minPower_CarTruck, maxPower_CarTruck, fuel_CarTruck, state_CarTruck, minPrice_CarTruck, maxPrice_CarTruck, minYear_CarTruck, maxYear_CarTruck, minMileage_CarTruck, maxMileage_CarTruck, minCargoCapacity_CarTruck, maxCargoCapacity_CarTruck, minCargoWeight_CarTruck, maxCargoWeight_CarTruck, minCargoLoad_CarTruck, maxCargoLoad_CarTruck);
    }

    @GetMapping("")
    public List<CarTruck> getAll() {
        return carTruckRepository.getAll();
    }

    @GetMapping("/{id}")
    public CarTruck getById(@PathVariable("id") int id) {
        return carTruckRepository.getById(id);
    }

    @PostMapping("/add")
    public int add(@RequestBody CarTruck carTruck, @AuthenticationPrincipal UserDetails userDetails) {
        // Pobierz nazwę użytkownika z zalogowanego użytkownika
        String username = userDetails.getUsername();

        // Pobierz ID użytkownika na podstawie nazwy użytkownika
        int user_id = carTruckRepository.getUserIdByUsername(username);

        // Przypisz ID użytkownika do ogłoszenia
        carTruck.setUser_id(String.valueOf(user_id));

        // Zapisz ogłoszenie w repozytorium
        return carTruckRepository.save(carTruck);
    }

    @GetMapping("/ogloszenia/{userId}")
    public List<CarTruck> getAdsByUser(@PathVariable("userId") String userId) {
        return carTruckRepository.getAdsByUser(userId);
    }

    @PatchMapping("/edytowanie/{id}")
    public int partiallyUpdate(@PathVariable("id") int id, @RequestBody CarTruck updatedCar) {
        CarTruck carTruck = carTruckRepository.getById(id);

        if (carTruck != null) {
            carTruck.setCarTruck_mark(updatedCar.getCarTruck_mark());
            carTruck.setCarTruck_model(updatedCar.getCarTruck_model());
            carTruck.setCarTruck_state(updatedCar.getCarTruck_state());
            carTruck.setCarTruck_vin(updatedCar.getCarTruck_vin());
            carTruck.setCarTruck_mileage(updatedCar.getCarTruck_mileage());
            carTruck.setCarTruck_vehicle_registration(updatedCar.getCarTruck_vehicle_registration());
            carTruck.setCarTruck_data_first_vehicle_registration(updatedCar.getCarTruck_data_first_vehicle_registration());
            carTruck.setCarTruck_year(updatedCar.getCarTruck_year());
            carTruck.setCarTruck_fuel(updatedCar.getCarTruck_fuel());
            carTruck.setCarTruck_power(updatedCar.getCarTruck_power());
            carTruck.setCarTruck_engine(updatedCar.getCarTruck_engine());
            carTruck.setCarTruck_gearbox(updatedCar.getCarTruck_gearbox());
            carTruck.setCarTruck_emission(updatedCar.getCarTruck_emission());
            carTruck.setCarTruck_car_body(updatedCar.getCarTruck_car_body());
            carTruck.setCarTruck_int_place(updatedCar.getCarTruck_int_place());
            carTruck.setCarTruck_color(updatedCar.getCarTruck_color());
            carTruck.setCarTruck_type_color(updatedCar.getCarTruck_type_color());
            carTruck.setCarTruck_cargo_capacity(updatedCar.getCarTruck_cargo_capacity());
            carTruck.setCarTruck_cargo_weight(updatedCar.getCarTruck_cargo_weight());
            carTruck.setCarTruck_cargo_load(updatedCar.getCarTruck_cargo_load());
            carTruck.setCarTruck_photo(updatedCar.getCarTruck_photo());
            carTruck.setCarTruck_title(updatedCar.getCarTruck_title());
            carTruck.setCarTruck_description(updatedCar.getCarTruck_description());
            carTruck.setCarTruck_price(updatedCar.getCarTruck_price());
            carTruck.setCarTruck_name_car(updatedCar.getCarTruck_name_car());
            carTruck.setCarTruck_town(updatedCar.getCarTruck_town());
            carTruck.setCarTruck_phone(updatedCar.getCarTruck_phone());

            carTruckRepository.update(carTruck);

            return 1;
        } else {
            return -1;
        }
    }

    @DeleteMapping("/{id}")
    public int delete(@PathVariable("id") int id) {
        return carTruckRepository.delete(id);
    }
}
