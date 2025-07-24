package pl.Jakub.project.Jakub.EngineerProject.CarTruck;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import pl.Jakub.project.Jakub.EngineerProject.CarHGV.CarHGV;

import java.util.ArrayList;
import java.util.List;

@Repository
public class CarTruckRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<CarTruck> searchCarsTruck(String carBody_CarTruck, String mark_CarTruck, String model_CarTruck, String gearbox_CarTruck,  Integer minEngine_CarTruck, Integer maxEngine_CarTruck, Integer minPower_CarTruck, Integer maxPower_CarTruck, String fuel_CarTruck, String state_CarTruck, Integer minPrice_CarTruck, Integer maxPrice_CarTruck, Integer minYear_CarTruck, Integer maxYear_CarTruck, Integer minMileage_CarTruck, Integer maxMileage_CarTruck, String minCargoCapacity_CarTruck, String maxCargoCapacity_CarTruck, String minCargoWeight_CarTruck, String maxCargoWeight_CarTruck, String minCargoLoad_CarTruck, String maxCargoLoad_CarTruck){
        StringBuilder queryBuilder = new StringBuilder("SELECT * FROM carTruck WHERE 1=1");
        List<Object> params = new ArrayList<>();

        if (carBody_CarTruck != null) {
            queryBuilder.append(" AND carTruck_car_body = ?");
            params.add(carBody_CarTruck);
        }

        if (mark_CarTruck != null) {
            queryBuilder.append(" AND carTruck_mark = ?");
            params.add(mark_CarTruck);
        }

        if (model_CarTruck != null) {
            queryBuilder.append(" AND carTruck_model = ?");
            params.add(model_CarTruck);
        }

        if (gearbox_CarTruck != null) {
            queryBuilder.append(" AND carTruck_gearbox = ?");
            params.add(gearbox_CarTruck);
        }

        if (minEngine_CarTruck != null) {
            queryBuilder.append(" AND carTruck_engine >= ?");
            params.add(minEngine_CarTruck);
        }

        if (maxEngine_CarTruck != null) {
            queryBuilder.append(" AND carTruck_engine <= ?");
            params.add(maxEngine_CarTruck);
        }

        if (minPower_CarTruck != null) {
            queryBuilder.append(" AND carTruck_power >= ?");
            params.add(minPower_CarTruck);
        }

        if (maxPower_CarTruck != null) {
            queryBuilder.append(" AND carTruck_power <= ?");
            params.add(maxPower_CarTruck);
        }

        if (fuel_CarTruck != null) {
            queryBuilder.append(" AND carTruck_fuel = ?");
            params.add(fuel_CarTruck);
        }

        if (state_CarTruck != null) {
            queryBuilder.append(" AND carTruck_state = ?");
            params.add(state_CarTruck);
        }

        if (minPrice_CarTruck != null) {
            queryBuilder.append(" AND carTruck_price >= ?");
            params.add(minPrice_CarTruck);
        }

        if (maxPrice_CarTruck != null) {
            queryBuilder.append(" AND carTruck_price <= ?");
            params.add(maxPrice_CarTruck);
        }

        if (minYear_CarTruck != null) {
            queryBuilder.append(" AND carTruck_year >= ?");
            params.add(minYear_CarTruck);
        }

        if (maxYear_CarTruck != null) {
            queryBuilder.append(" AND carTruck_year <= ?");
            params.add(maxYear_CarTruck);
        }

        if (minMileage_CarTruck != null) {
            queryBuilder.append(" AND carTruck_mileage >= ?");
            params.add(minMileage_CarTruck);
        }

        if (maxMileage_CarTruck != null) {
            queryBuilder.append(" AND carTruck_mileage <= ?");
            params.add(maxMileage_CarTruck);
        }

        if (minCargoCapacity_CarTruck != null) {
            queryBuilder.append(" AND carTruck_cargo_capacity >= ?");
            params.add(minCargoCapacity_CarTruck);
        }

        if (maxCargoCapacity_CarTruck != null) {
            queryBuilder.append(" AND carTruck_cargo_capacity <= ?");
            params.add(maxCargoCapacity_CarTruck);
        }

        if (minCargoWeight_CarTruck != null) {
            queryBuilder.append(" AND carTruck_cargo_weight >= ?");
            params.add(minCargoWeight_CarTruck);
        }

        if (maxCargoWeight_CarTruck != null) {
            queryBuilder.append(" AND carTruck_cargo_weight <= ?");
            params.add(maxCargoWeight_CarTruck);
        }

        if (minCargoLoad_CarTruck != null) {
            queryBuilder.append(" AND carTruck_cargo_load >= ?");
            params.add(minCargoLoad_CarTruck);
        }

        if (maxCargoLoad_CarTruck != null) {
            queryBuilder.append(" AND carTruck_cargo_load <= ?");
            params.add(maxCargoLoad_CarTruck);
        }

        return jdbcTemplate.query(queryBuilder.toString(), params.toArray(), BeanPropertyRowMapper.newInstance(CarTruck.class));
    }

    public List<CarTruck> getAll() {
        return jdbcTemplate.query("SELECT carTruck_id, carTruck_mark, carTruck_model, carTruck_state, carTruck_vin, carTruck_mileage, carTruck_vehicle_registration, carTruck_data_first_vehicle_registration, carTruck_year, carTruck_fuel, carTruck_power, carTruck_engine, carTruck_gearbox, carTruck_emission, carTruck_car_body, carTruck_int_place, carTruck_color, carTruck_type_color, carTruck_cargo_capacity, carTruck_cargo_weight, carTruck_cargo_load, carTruck_photo, carTruck_title, carTruck_description, carTruck_price, carTruck_name_car, carTruck_town, carTruck_phone FROM carTruck",
                BeanPropertyRowMapper.newInstance(CarTruck.class));
    }

    public CarTruck getById(int id) {
        return jdbcTemplate.queryForObject("SELECT carTruck_id, carTruck_mark, carTruck_model, carTruck_state, carTruck_vin, carTruck_mileage, carTruck_vehicle_registration, carTruck_data_first_vehicle_registration, carTruck_year, carTruck_fuel, carTruck_power, carTruck_engine, carTruck_gearbox, carTruck_emission, carTruck_car_body, carTruck_int_place, carTruck_color, carTruck_type_color, carTruck_cargo_capacity, carTruck_cargo_weight, carTruck_cargo_load, carTruck_photo, carTruck_title, carTruck_description, carTruck_price, carTruck_name_car, carTruck_town, carTruck_phone FROM carTruck WHERE " +
                "carTruck_id = ?", BeanPropertyRowMapper.newInstance(CarTruck.class), id);
    }

    // W CarTruckRepository.java
    public int save(CarTruck carTruck) {
        String sql = "INSERT INTO carTruck (user_id, carTruck_id, carTruck_mark, carTruck_model, carTruck_state, carTruck_vin, carTruck_mileage, carTruck_vehicle_registration, carTruck_data_first_vehicle_registration, carTruck_year, carTruck_fuel, carTruck_power, carTruck_engine, carTruck_gearbox, carTruck_emission, carTruck_car_body, carTruck_int_place, carTruck_color, carTruck_type_color, carTruck_cargo_capacity, carTruck_cargo_weight, carTruck_cargo_load, carTruck_photo, carTruck_title, carTruck_description, carTruck_price, carTruck_name_car, carTruck_town, carTruck_phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        return jdbcTemplate.update(sql,
                carTruck.getUser_id(), carTruck.getCarTruck_id(), carTruck.getCarTruck_mark(), carTruck.getCarTruck_model(), carTruck.getCarTruck_state(), carTruck.getCarTruck_vin(), carTruck.getCarTruck_mileage(), carTruck.getCarTruck_vehicle_registration(), carTruck.getCarTruck_data_first_vehicle_registration(), carTruck.getCarTruck_year(), carTruck.getCarTruck_fuel(), carTruck.getCarTruck_power(), carTruck.getCarTruck_engine(), carTruck.getCarTruck_gearbox(), carTruck.getCarTruck_emission(), carTruck.getCarTruck_car_body(), carTruck.getCarTruck_int_place(), carTruck.getCarTruck_color(), carTruck.getCarTruck_type_color(), carTruck.getCarTruck_cargo_capacity(), carTruck.getCarTruck_cargo_weight(), carTruck.getCarTruck_cargo_load(), carTruck.getCarTruck_photo(), carTruck.getCarTruck_title(), carTruck.getCarTruck_description(), carTruck.getCarTruck_price(), carTruck.getCarTruck_name_car(), carTruck.getCarTruck_town(), carTruck.getCarTruck_phone());
    }

    public List<CarTruck> getAdsByUser(String userId) {
        return jdbcTemplate.query("SELECT * FROM carTruck WHERE user_id = ?",
                BeanPropertyRowMapper.newInstance(CarTruck.class), userId);
    }

    public int getUserIdByUsername(String username) {
        String sql = "SELECT user_id FROM users WHERE username = ?";
        return jdbcTemplate.queryForObject(sql, Integer.class, username);
    }

    public int update(CarTruck carTruck) {
        return jdbcTemplate.update("UPDATE carTruck SET carTruck_mark=?, carTruck_model=?, carTruck_state=?, carTruck_vin=?, carTruck_mileage=?, carTruck_vehicle_registration=?, carTruck_data_first_vehicle_registration=?, carTruck_year=?, carTruck_fuel=?, carTruck_power=?, carTruck_engine=?, carTruck_gearbox=?, carTruck_emission=?, carTruck_car_body=?, carTruck_int_place=?, carTruck_color=?, carTruck_type_color=?, carTruck_cargo_capacity=?, carTruck_cargo_weight=?, carTruck_cargo_load=?, carTruck_photo=?, carTruck_title=?, carTruck_description=?, carTruck_price=?, carTruck_name_car=?, carTruck_town=?, carTruck_phone=? WHERE carTruck_id=?",
                carTruck.getCarTruck_id(), carTruck.getCarTruck_mark(), carTruck.getCarTruck_model(), carTruck.getCarTruck_state(), carTruck.getCarTruck_vin(), carTruck.getCarTruck_mileage(), carTruck.getCarTruck_vehicle_registration(), carTruck.getCarTruck_data_first_vehicle_registration(), carTruck.getCarTruck_year(), carTruck.getCarTruck_fuel(), carTruck.getCarTruck_power(), carTruck.getCarTruck_engine(), carTruck.getCarTruck_gearbox(), carTruck.getCarTruck_emission(), carTruck.getCarTruck_car_body(), carTruck.getCarTruck_int_place(), carTruck.getCarTruck_color(), carTruck.getCarTruck_type_color(), carTruck.getCarTruck_cargo_capacity(), carTruck.getCarTruck_cargo_weight(), carTruck.getCarTruck_cargo_load(), carTruck.getCarTruck_photo(), carTruck.getCarTruck_title(), carTruck.getCarTruck_description(), carTruck.getCarTruck_price(), carTruck.getCarTruck_name_car(), carTruck.getCarTruck_town(), carTruck.getCarTruck_phone());
    }


    public int delete(int id) {
        return jdbcTemplate.update("DELETE FROM carTruck WHERE carTruck_id=?", id);
    }
}
