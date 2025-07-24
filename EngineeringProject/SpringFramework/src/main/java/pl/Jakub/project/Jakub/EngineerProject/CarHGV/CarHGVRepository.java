package pl.Jakub.project.Jakub.EngineerProject.CarHGV;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class CarHGVRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<CarHGV> searchCarsHGV(String carBody_CarHGV, String mark_CarHGV, String model_CarHGV, String gearbox_CarHGV,  Integer minEngine_CarHGV, Integer maxEngine_CarHGV, Integer minPower_CarHGV, Integer maxPower_CarHGV, String fuel_CarHGV, String state_CarHGV, Integer minPrice_CarHGV, Integer maxPrice_CarHGV, Integer minYear_CarHGV, Integer maxYear_CarHGV, Integer minMileage_CarHGV, Integer maxMileage_CarHGV, String minCargoWeight_CarHGV, String maxCargoWeight_CarHGV, String minCargoLoad_CarHGV, String maxCargoLoad_CarHGV){
        StringBuilder queryBuilder = new StringBuilder("SELECT * FROM carHGV WHERE 1=1");
        List<Object> params = new ArrayList<>();

        if (carBody_CarHGV != null) {
            queryBuilder.append(" AND carHGV_car_body = ?");
            params.add(carBody_CarHGV);
        }

        if (mark_CarHGV != null) {
            queryBuilder.append(" AND carHGV_mark = ?");
            params.add(mark_CarHGV);
        }

        if (model_CarHGV != null) {
            queryBuilder.append(" AND carHGV_model = ?");
            params.add(model_CarHGV);
        }

        if (gearbox_CarHGV != null) {
            queryBuilder.append(" AND carHGV_gearbox = ?");
            params.add(gearbox_CarHGV);
        }

        if (minEngine_CarHGV != null) {
            queryBuilder.append(" AND carHGV_engine >= ?");
            params.add(minEngine_CarHGV);
        }

        if (maxEngine_CarHGV != null) {
            queryBuilder.append(" AND carHGV_engine <= ?");
            params.add(maxEngine_CarHGV);
        }

        if (minPower_CarHGV != null) {
            queryBuilder.append(" AND carHGV_power >= ?");
            params.add(minPower_CarHGV);
        }

        if (maxPower_CarHGV != null) {
            queryBuilder.append(" AND carHGV_power <= ?");
            params.add(maxPower_CarHGV);
        }

        if (fuel_CarHGV != null) {
            queryBuilder.append(" AND carHGV_fuel = ?");
            params.add(fuel_CarHGV);
        }

        if (state_CarHGV != null) {
            queryBuilder.append(" AND carHGV_state = ?");
            params.add(state_CarHGV);
        }

        if (minPrice_CarHGV != null) {
            queryBuilder.append(" AND carHGV_price >= ?");
            params.add(minPrice_CarHGV);
        }

        if (maxPrice_CarHGV != null) {
            queryBuilder.append(" AND carHGV_price <= ?");
            params.add(maxPrice_CarHGV);
        }

        if (minYear_CarHGV != null) {
            queryBuilder.append(" AND carHGV_year >= ?");
            params.add(minYear_CarHGV);
        }

        if (maxYear_CarHGV != null) {
            queryBuilder.append(" AND carHGV_year <= ?");
            params.add(maxYear_CarHGV);
        }

        if (minMileage_CarHGV != null) {
            queryBuilder.append(" AND carHGV_mileage >= ?");
            params.add(minMileage_CarHGV);
        }

        if (maxMileage_CarHGV != null) {
            queryBuilder.append(" AND carHGV_mileage <= ?");
            params.add(maxMileage_CarHGV);
        }

        if (minCargoWeight_CarHGV != null) {
            queryBuilder.append(" AND carHGV_cargo_weight >= ?");
            params.add(minCargoWeight_CarHGV);
        }

        if (maxCargoWeight_CarHGV != null) {
            queryBuilder.append(" AND carHGV_cargo_weight <= ?");
            params.add(maxCargoWeight_CarHGV);
        }

        if (minCargoLoad_CarHGV != null) {
            queryBuilder.append(" AND carHGV_cargo_load >= ?");
            params.add(minCargoLoad_CarHGV);
        }

        if (maxCargoLoad_CarHGV != null) {
            queryBuilder.append(" AND carHGV_cargo_load <= ?");
            params.add(maxCargoLoad_CarHGV);
        }

        return jdbcTemplate.query(queryBuilder.toString(), params.toArray(), BeanPropertyRowMapper.newInstance(CarHGV.class));
    }

    public List<CarHGV> getAll() {
        return jdbcTemplate.query("SELECT carHGV_id, carHGV_mark, carHGV_model, carHGV_state, carHGV_vin, carHGV_mileage, carHGV_vehicle_registration, carHGV_data_first_vehicle_registration, carHGV_year, carHGV_fuel, carHGV_power, carHGV_engine, carHGV_gearbox, carHGV_emission, carHGV_car_body, carHGV_int_place, carHGV_color, carHGV_type_color, carHGV_cargo_weight, carHGV_cargo_load, carHGV_photo, carHGV_title, carHGV_description, carHGV_price, carHGV_name_car, carHGV_town, carHGV_phone FROM carHGV",
                BeanPropertyRowMapper.newInstance(CarHGV.class));
    }

    public CarHGV getById(int id) {
        return jdbcTemplate.queryForObject("SELECT carHGV_id, carHGV_mark, carHGV_model, carHGV_state, carHGV_vin, carHGV_mileage, carHGV_vehicle_registration, carHGV_data_first_vehicle_registration, carHGV_year, carHGV_fuel, carHGV_power, carHGV_engine, carHGV_gearbox, carHGV_emission, carHGV_car_body, carHGV_int_place, carHGV_color, carHGV_type_color, carHGV_cargo_weight, carHGV_cargo_load, carHGV_photo, carHGV_title, carHGV_description, carHGV_price, carHGV_name_car, carHGV_town, carHGV_phone FROM carHGV WHERE " +
                "carHGV_id = ?", BeanPropertyRowMapper.newInstance(CarHGV.class), id);
    }

    public int save(CarHGV carHGV) {
        String sql = "INSERT INTO carHGV (user_id, carHGV_id, carHGV_mark, carHGV_model, carHGV_state, carHGV_vin, carHGV_mileage, carHGV_vehicle_registration, carHGV_data_first_vehicle_registration, carHGV_year, carHGV_fuel, carHGV_power, carHGV_engine, carHGV_gearbox, carHGV_emission, carHGV_car_body, carHGV_int_place, carHGV_color, carHGV_type_color, carHGV_cargo_weight, carHGV_cargo_load, carHGV_photo, carHGV_title, carHGV_description, carHGV_price, carHGV_name_car, carHGV_town, carHGV_phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        return jdbcTemplate.update(sql,
                carHGV.getUser_id(), carHGV.getCarHGV_id(), carHGV.getCarHGV_mark(), carHGV.getCarHGV_model(), carHGV.getCarHGV_state(), carHGV.getCarHGV_vin(), carHGV.getCarHGV_mileage(), carHGV.getCarHGV_vehicle_registration(), carHGV.getCarHGV_data_first_vehicle_registration(), carHGV.getCarHGV_year(), carHGV.getCarHGV_fuel(), carHGV.getCarHGV_power(), carHGV.getCarHGV_engine(), carHGV.getCarHGV_gearbox(), carHGV.getCarHGV_emission(), carHGV.getCarHGV_car_body(), carHGV.getCarHGV_int_place(), carHGV.getCarHGV_color(), carHGV.getCarHGV_type_color(), carHGV.getCarHGV_cargo_weight(), carHGV.getCarHGV_cargo_load(), carHGV.getCarHGV_photo(), carHGV.getCarHGV_title(), carHGV.getCarHGV_description(), carHGV.getCarHGV_price(), carHGV.getCarHGV_name_car(), carHGV.getCarHGV_town(), carHGV.getCarHGV_phone());
    }

    public List<CarHGV> getAdsByUser(String userId) {
        return jdbcTemplate.query("SELECT * FROM carHGV WHERE user_id = ?",
                BeanPropertyRowMapper.newInstance(CarHGV.class), userId);
    }

    public int getUserIdByUsername(String username) {
        String sql = "SELECT user_id FROM users WHERE username = ?";
        return jdbcTemplate.queryForObject(sql, Integer.class, username);
    }


    public int update(CarHGV carHGV) {
        return jdbcTemplate.update("UPDATE carHGV SET carHGV_mark=?, carHGV_model=?, carHGV_state=?, carHGV_vin=?, carHGV_mileage=?, carHGV_vehicle_registration=?, carHGV_data_first_vehicle_registration=?, carHGV_year=?, carHGV_fuel=?, carHGV_power=?, carHGV_engine=?, carHGV_gearbox=?, carHGV_emission=?, carHGV_car_body=?, carHGV_int_place=?, carHGV_color=?, carHGV_type_color=?, carHGV_cargo_weight=?, carHGV_cargo_load=?, carHGV_photo=?, carHGV_title=?, carHGV_description=?, carHGV_price=?, carHGV_name_car=?, carHGV_town=?, carHGV_phone=? WHERE carHGV_id=?",
                carHGV.getCarHGV_id(), carHGV.getCarHGV_mark(), carHGV.getCarHGV_model(), carHGV.getCarHGV_state(), carHGV.getCarHGV_vin(), carHGV.getCarHGV_mileage(), carHGV.getCarHGV_vehicle_registration(), carHGV.getCarHGV_data_first_vehicle_registration(), carHGV.getCarHGV_year(), carHGV.getCarHGV_fuel(), carHGV.getCarHGV_power(), carHGV.getCarHGV_engine(), carHGV.getCarHGV_gearbox(), carHGV.getCarHGV_emission(), carHGV.getCarHGV_car_body(), carHGV.getCarHGV_int_place(), carHGV.getCarHGV_color(), carHGV.getCarHGV_type_color(), carHGV.getCarHGV_cargo_weight(), carHGV.getCarHGV_cargo_load(), carHGV.getCarHGV_photo(), carHGV.getCarHGV_title(), carHGV.getCarHGV_description(), carHGV.getCarHGV_price(), carHGV.getCarHGV_name_car(), carHGV.getCarHGV_town(), carHGV.getCarHGV_phone());
    }


    public int delete(int id) {
        return jdbcTemplate.update("DELETE FROM carHGV WHERE carHGV_id=?", id);
    }
}
