package pl.Jakub.project.Jakub.EngineerProject.CarPassenger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import pl.Jakub.project.Jakub.EngineerProject.CarHGV.CarHGV;

import java.util.ArrayList;
import java.util.List;

@Repository
public class CarRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Car> searchCars(String carBody_CarPassenger, String mark_CarPassenger, String model_CarPassenger, String gearbox_CarPassenger,  Integer minEngine_CarPassenger, Integer maxEngine_CarPassenger, Integer minPower_CarPassenger, Integer maxPower_CarPassenger, String fuel_CarPassenger, String state_CarPassenger, Integer minPrice_CarPassenger, Integer maxPrice_CarPassenger, Integer minYear_CarPassenger, Integer maxYear_CarPassenger, Integer minMileage_CarPassenger, Integer maxMileage_CarPassenger){
        StringBuilder queryBuilder = new StringBuilder("SELECT * FROM carPassenger WHERE 1=1");
        List<Object> params = new ArrayList<>();

        if (carBody_CarPassenger != null) {
            queryBuilder.append(" AND carPassenger_car_body = ?");
            params.add(carBody_CarPassenger);
        }

        if (mark_CarPassenger != null) {
            queryBuilder.append(" AND carPassenger_mark = ?");
            params.add(mark_CarPassenger);
        }

        if (model_CarPassenger != null) {
            queryBuilder.append(" AND carPassenger_model = ?");
            params.add(model_CarPassenger);
        }

        if (gearbox_CarPassenger != null) {
            queryBuilder.append(" AND carPassenger_gearbox = ?");
            params.add(gearbox_CarPassenger);
        }

        if (minEngine_CarPassenger != null) {
            queryBuilder.append(" AND carPassenger_engine >= ?");
            params.add(minEngine_CarPassenger);
        }

        if (maxEngine_CarPassenger != null) {
            queryBuilder.append(" AND carPassenger_engine <= ?");
            params.add(maxEngine_CarPassenger);
        }

        if (minPower_CarPassenger != null) {
            queryBuilder.append(" AND carPassenger_power >= ?");
            params.add(minPower_CarPassenger);
        }

        if (maxPower_CarPassenger != null) {
            queryBuilder.append(" AND carPassenger_power <= ?");
            params.add(maxPower_CarPassenger);
        }

        if (fuel_CarPassenger != null) {
            queryBuilder.append(" AND carPassenger_fuel = ?");
            params.add(fuel_CarPassenger);
        }

        if (state_CarPassenger != null) {
            queryBuilder.append(" AND carPassenger_state = ?");
            params.add(state_CarPassenger);
        }

        if (minPrice_CarPassenger != null) {
            queryBuilder.append(" AND carPassenger_price >= ?");
            params.add(minPrice_CarPassenger);
        }

        if (maxPrice_CarPassenger != null) {
            queryBuilder.append(" AND carPassenger_price <= ?");
            params.add(maxPrice_CarPassenger);
        }

        if (minYear_CarPassenger != null) {
            queryBuilder.append(" AND carPassenger_year >= ?");
            params.add(minYear_CarPassenger);
        }

        if (maxYear_CarPassenger != null) {
            queryBuilder.append(" AND carPassenger_year <= ?");
            params.add(maxYear_CarPassenger);
        }

        if (minMileage_CarPassenger != null) {
            queryBuilder.append(" AND carPassenger_mileage >= ?");
            params.add(minMileage_CarPassenger);
        }

        if (maxMileage_CarPassenger != null) {
            queryBuilder.append(" AND carPassenger_mileage <= ?");
            params.add(maxMileage_CarPassenger);
        }

        return jdbcTemplate.query(queryBuilder.toString(), params.toArray(), BeanPropertyRowMapper.newInstance(Car.class));
    }

    public List<Car> getAll() {
        return jdbcTemplate.query("SELECT carPassenger_id, carPassenger_mark, carPassenger_model, carPassenger_state, carPassenger_vin, carPassenger_mileage, carPassenger_vehicle_registration, carPassenger_data_first_vehicle_registration, carPassenger_year, carPassenger_fuel, carPassenger_power, carPassenger_engine, carPassenger_doors, carPassenger_gearbox, carPassenger_car_drive, carPassenger_emission, carPassenger_car_body, carPassenger_int_place, carPassenger_color, carPassenger_type_color, carPassenger_photo, carPassenger_title, carPassenger_description, carPassenger_price, carPassenger_name_car, carPassenger_town, carPassenger_phone FROM carPassenger",
                BeanPropertyRowMapper.newInstance(Car.class));
    }

    public Car getById(int id) {
        return jdbcTemplate.queryForObject("SELECT carPassenger_id, carPassenger_mark, carPassenger_model, carPassenger_state, carPassenger_vin, carPassenger_mileage, carPassenger_vehicle_registration, carPassenger_data_first_vehicle_registration, carPassenger_year, carPassenger_fuel, carPassenger_power, carPassenger_engine, carPassenger_doors, carPassenger_gearbox, carPassenger_car_drive, carPassenger_emission, carPassenger_car_body, carPassenger_int_place, carPassenger_color, carPassenger_type_color, carPassenger_photo, carPassenger_title, carPassenger_description, carPassenger_price, carPassenger_name_car, carPassenger_town, carPassenger_phone FROM carPassenger WHERE " +
                "carPassenger_id = ?", BeanPropertyRowMapper.newInstance(Car.class), id);
    }

    public int save(Car carPassenger) {
        String sql = "INSERT INTO carPassenger (user_id, carPassenger_id, carPassenger_mark, carPassenger_model, carPassenger_state, carPassenger_vin, carPassenger_mileage, carPassenger_vehicle_registration, carPassenger_data_first_vehicle_registration, carPassenger_year, carPassenger_fuel, carPassenger_power, carPassenger_engine, carPassenger_doors, carPassenger_gearbox, carPassenger_car_drive, carPassenger_emission, carPassenger_car_body, carPassenger_int_place, carPassenger_color, carPassenger_type_color, carPassenger_photo, carPassenger_title, carPassenger_description, carPassenger_price, carPassenger_name_car, carPassenger_town, carPassenger_phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        return jdbcTemplate.update(sql,
                carPassenger.getUser_id(), carPassenger.getCarPassenger_id(), carPassenger.getCarPassenger_mark(), carPassenger.getCarPassenger_model(), carPassenger.getCarPassenger_state(), carPassenger.getCarPassenger_vin(), carPassenger.getCarPassenger_mileage(), carPassenger.getCarPassenger_vehicle_registration(), carPassenger.getCarPassenger_data_first_vehicle_registration(), carPassenger.getCarPassenger_year(), carPassenger.getCarPassenger_fuel(), carPassenger.getCarPassenger_power(), carPassenger.getCarPassenger_engine(), carPassenger.getCarPassenger_doors(), carPassenger.getCarPassenger_gearbox(), carPassenger.getCarPassenger_car_drive(), carPassenger.getCarPassenger_emission(), carPassenger.getCarPassenger_car_body(), carPassenger.getCarPassenger_int_place(), carPassenger.getCarPassenger_color(), carPassenger.getCarPassenger_type_color(), carPassenger.getCarPassenger_photo(), carPassenger.getCarPassenger_title(), carPassenger.getCarPassenger_description(), carPassenger.getCarPassenger_price(), carPassenger.getCarPassenger_name_car(), carPassenger.getCarPassenger_town(), carPassenger.getCarPassenger_phone());
    }

    public List<Car> getAdsByUser(String userId) {
        return jdbcTemplate.query("SELECT * FROM carPassenger WHERE user_id = ?",
                BeanPropertyRowMapper.newInstance(Car.class), userId);
    }

    public int getUserIdByUsername(String username) {
        String sql = "SELECT user_id FROM users WHERE username = ?";
        return jdbcTemplate.queryForObject(sql, Integer.class, username);
    }


    public int update(Car carPassenger) {
        return jdbcTemplate.update("UPDATE carPassenger SET carPassenger_mark=?, carPassenger_model=?, carPassenger_state=?, carPassenger_vin=?, carPassenger_mileage=?, carPassenger_vehicle_registration=?, carPassenger_data_first_vehicle_registration=?, carPassenger_year=?, carPassenger_fuel=?, carPassenger_power=?, carPassenger_engine=?, carPassenger_doors=?, carPassenger_gearbox=?, carPassenger_car_drive=?, carPassenger_emission=?, carPassenger_car_body=?, carPassenger_int_place=?, carPassenger_color=?, carPassenger_type_color=?, carPassenger_photo=?,carPassenger_title=?, carPassenger_description=?, carPassenger_price=?, carPassenger_name_car=?, carPassenger_town=?, carPassenger_phone=? WHERE carPassenger_id=?",
                carPassenger.getCarPassenger_mark(), carPassenger.getCarPassenger_model(), carPassenger.getCarPassenger_state(), carPassenger.getCarPassenger_vin(), carPassenger.getCarPassenger_mileage(), carPassenger.getCarPassenger_vehicle_registration(), carPassenger.getCarPassenger_data_first_vehicle_registration(), carPassenger.getCarPassenger_year(), carPassenger.getCarPassenger_fuel(), carPassenger.getCarPassenger_power(), carPassenger.getCarPassenger_engine(), carPassenger.getCarPassenger_doors(), carPassenger.getCarPassenger_gearbox(), carPassenger.getCarPassenger_car_drive(), carPassenger.getCarPassenger_emission(), carPassenger.getCarPassenger_car_body(), carPassenger.getCarPassenger_int_place(), carPassenger.getCarPassenger_color(), carPassenger.getCarPassenger_type_color(), carPassenger.getCarPassenger_photo(),carPassenger.getCarPassenger_title(), carPassenger.getCarPassenger_description(), carPassenger.getCarPassenger_price(), carPassenger.getCarPassenger_name_car(), carPassenger.getCarPassenger_town(), carPassenger.getCarPassenger_phone(), carPassenger.getCarPassenger_id());
    }

    public int delete(int id) {
        return jdbcTemplate.update("DELETE FROM carPassenger WHERE carPassenger_id=?", id);
    }
}