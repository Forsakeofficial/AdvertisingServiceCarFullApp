package pl.Jakub.project.Jakub.EngineerProject.CarPassenger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import pl.Jakub.project.Jakub.EngineerProject.CarHGV.CarHGV;
import pl.Jakub.project.Jakub.EngineerProject.CarTruck.CarTruck;

import java.util.List;

@RestController
@RequestMapping("/api/carpassenger")
@CrossOrigin
public class CarController {

    @Autowired
    CarRepository carRepository;

    @GetMapping("/search")
    public List<Car> searchCars(
            @RequestParam(name = "carBody_CarPassenger", required = false) String carBody_CarPassenger,
            @RequestParam(name = "mark_CarPassenger", required = false) String mark_CarPassenger,
            @RequestParam(name = "model_CarPassenger", required = false) String model_CarPassenger,
            @RequestParam(name = "gearbox_CarPassenger", required = false) String gearbox_CarPassenger,
            @RequestParam(name = "minEngine_CarPassenger", required = false) Integer minEngine_CarPassenger,
            @RequestParam(name = "maxEngine_CarPassenger", required = false) Integer maxEngine_CarPassenger,
            @RequestParam(name = "minPower_CarPassenger", required = false) Integer minPower_CarPassenger,
            @RequestParam(name = "maxPower_CarPassenger", required = false) Integer maxPower_CarPassenger,
            @RequestParam(name = "fuel_CarPassenger", required = false) String fuel_CarPassenger,
            @RequestParam(name = "state_CarPassenger", required = false) String state_CarPassenger,
            @RequestParam(name = "minPrice_CarPassenger", required = false) Integer minPrice_CarPassenger,
            @RequestParam(name = "maxPrice_CarPassenger", required = false) Integer maxPrice_CarPassenger,
            @RequestParam(name = "minYear_CarPassenger", required = false) Integer minYear_CarPassenger,
            @RequestParam(name = "maxYear_CarPassenger", required = false) Integer maxYear_CarPassenger,
            @RequestParam(name = "minMileage_CarPassenger", required = false) Integer minMileage_CarPassenger,
            @RequestParam(name = "maxMileage_CarPassenger", required = false) Integer maxMileage_CarPassenger) {

        return carRepository.searchCars(carBody_CarPassenger, mark_CarPassenger, model_CarPassenger, gearbox_CarPassenger, minEngine_CarPassenger,  maxEngine_CarPassenger, minPower_CarPassenger, maxPower_CarPassenger, fuel_CarPassenger, state_CarPassenger, minPrice_CarPassenger, maxPrice_CarPassenger, minYear_CarPassenger, maxYear_CarPassenger, minMileage_CarPassenger, maxMileage_CarPassenger);
    }

    @GetMapping("")
    public List<Car> getAll() {
        return carRepository.getAll();
    }

    @GetMapping("/{id}")
    public Car getById(@PathVariable("id") int id) {
        return carRepository.getById(id);
    }

    @PostMapping("/add")
    public int add(@RequestBody Car car, @AuthenticationPrincipal UserDetails userDetails) {
        // Pobierz nazwę użytkownika z zalogowanego użytkownika
        String username = userDetails.getUsername();

        // Pobierz ID użytkownika na podstawie nazwy użytkownika
        int user_id = carRepository.getUserIdByUsername(username);

        // Przypisz ID użytkownika do ogłoszenia
        car.setUser_id(String.valueOf(user_id));

        // Zapisz ogłoszenie w repozytorium
        return carRepository.save(car);
    }

    @GetMapping("/ogloszenia/{userId}")
    public List<Car> getAdsByUser(@PathVariable("userId") String userId) {
        return carRepository.getAdsByUser(userId);
    }

    @PatchMapping("/edytowanie/{id}")
    public int partiallyUpdate(@PathVariable("id") int id, @RequestBody Car updatedCar) {
        Car car = carRepository.getById(id);

        if (car != null) {
            car.setCarPassenger_mark(updatedCar.getCarPassenger_mark());
            car.setCarPassenger_model(updatedCar.getCarPassenger_model());
            car.setCarPassenger_state(updatedCar.getCarPassenger_state());
            car.setCarPassenger_vin(updatedCar.getCarPassenger_vin());
            car.setCarPassenger_mileage(updatedCar.getCarPassenger_mileage());
            car.setCarPassenger_vehicle_registration(updatedCar.getCarPassenger_vehicle_registration());
            car.setCarPassenger_data_first_vehicle_registration(updatedCar.getCarPassenger_data_first_vehicle_registration());
            car.setCarPassenger_year(updatedCar.getCarPassenger_year());
            car.setCarPassenger_fuel(updatedCar.getCarPassenger_fuel());
            car.setCarPassenger_power(updatedCar.getCarPassenger_power());
            car.setCarPassenger_engine(updatedCar.getCarPassenger_engine());
            car.setCarPassenger_doors(updatedCar.getCarPassenger_doors());
            car.setCarPassenger_gearbox(updatedCar.getCarPassenger_gearbox());
            car.setCarPassenger_car_drive(updatedCar.getCarPassenger_car_drive());
            car.setCarPassenger_emission(updatedCar.getCarPassenger_emission());
            car.setCarPassenger_car_body(updatedCar.getCarPassenger_car_body());
            car.setCarPassenger_int_place(updatedCar.getCarPassenger_int_place());
            car.setCarPassenger_color(updatedCar.getCarPassenger_color());
            car.setCarPassenger_type_color(updatedCar.getCarPassenger_type_color());
            car.setCarPassenger_photo(updatedCar.getCarPassenger_photo());
            car.setCarPassenger_title(updatedCar.getCarPassenger_title());
            car.setCarPassenger_description(updatedCar.getCarPassenger_description());
            car.setCarPassenger_price(updatedCar.getCarPassenger_price());
            car.setCarPassenger_name_car(updatedCar.getCarPassenger_name_car());
            car.setCarPassenger_town(updatedCar.getCarPassenger_town());
            car.setCarPassenger_phone(updatedCar.getCarPassenger_phone());

            carRepository.update(car);

            return 1;
        } else {
            return -1;
        }
    }

    @DeleteMapping("/{id}")
    public int delete(@PathVariable("id") int id) {
        return carRepository.delete(id);
    }
}