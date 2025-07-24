package pl.Jakub.project.Jakub.EngineerProject.CarParts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import pl.Jakub.project.Jakub.EngineerProject.CarHGV.CarHGV;

import java.util.ArrayList;
import java.util.List;

@Repository
public class CarPartsRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<CarParts> searchCarParts(String name_CarParts, String manufacturer_CarParts, String manufacturer_reference_number_CarParts, String state_CarParts, Integer minPrice_CarParts, Integer maxPrice_CarParts){
        StringBuilder queryBuilder = new StringBuilder("SELECT * FROM carPart WHERE 1=1");
        List<Object> params = new ArrayList<>();

        if (name_CarParts != null) {
            queryBuilder.append(" AND carParts_name = ?");
            params.add(name_CarParts);
        }

        if (manufacturer_CarParts != null) {
            queryBuilder.append(" AND carParts_manufacturer = ?");
            params.add(manufacturer_CarParts);
        }

        if (manufacturer_reference_number_CarParts != null) {
            queryBuilder.append(" AND carParts_manufacturer_reference_number = ?");
            params.add(manufacturer_reference_number_CarParts);
        }

        if (state_CarParts != null) {
            queryBuilder.append(" AND carParts_state = ?");
            params.add(state_CarParts);
        }

        if (minPrice_CarParts != null) {
            queryBuilder.append(" AND carParts_price >= ?");
            params.add(minPrice_CarParts);
        }

        if (maxPrice_CarParts != null) {
            queryBuilder.append(" AND carParts_price <= ?");
            params.add(maxPrice_CarParts);
        }


        return jdbcTemplate.query(queryBuilder.toString(), params.toArray(), BeanPropertyRowMapper.newInstance(CarParts.class));
    }


    public List<CarParts> getAll() {
        return jdbcTemplate.query("SELECT carParts_id, carParts_name, carParts_state, carParts_manufacturer, carParts_manufacturer_reference_number, carParts_photo, carParts_title, carParts_description, carParts_price, carParts_name_user, carParts_town, carParts_phone FROM carPart",
                BeanPropertyRowMapper.newInstance(CarParts.class));
    }

    public CarParts getById(int id) {
        return jdbcTemplate.queryForObject("SELECT carParts_id, carParts_name, carParts_state, carParts_manufacturer, carParts_manufacturer_reference_number, carParts_photo, carParts_title, carParts_description, carParts_price, carParts_name_user, carParts_town, carParts_phone FROM carPart WHERE " +
                "carParts_id = ?", BeanPropertyRowMapper.newInstance(CarParts.class), id);
    }

    public int save(CarParts carParts) {
        String sql = "INSERT INTO carPart (user_id, carParts_id, carParts_name, carParts_state, carParts_manufacturer, carParts_manufacturer_reference_number, carParts_photo, carParts_title, carParts_description, carParts_price, carParts_name_user, carParts_town, carParts_phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        return jdbcTemplate.update(sql,
                carParts.getUser_id(), carParts.getCarParts_id(), carParts.getCarParts_name(), carParts.getCarParts_state(), carParts.getCarParts_manufacturer(), carParts.getCarParts_manufacturer_reference_number(), carParts.getCarParts_photo(), carParts.getCarParts_title(), carParts.getCarParts_description(), carParts.getCarParts_price(), carParts.getCarParts_name_user(), carParts.getCarParts_town(), carParts.getCarParts_phone());
    }

    public List<CarParts> getAdsByUser(String userId) {
        return jdbcTemplate.query("SELECT * FROM carPart WHERE user_id = ?",
                BeanPropertyRowMapper.newInstance(CarParts.class), userId);
    }

    public int getUserIdByUsername(String username) {
        String sql = "SELECT user_id FROM users WHERE username = ?";
        return jdbcTemplate.queryForObject(sql, Integer.class, username);
    }


    public int update(CarParts carPart) {
        return jdbcTemplate.update("UPDATE carPart SET carParts_name=?, carParts_state=?, carParts_manufacturer=?, carParts_manufacturer_reference_number=?, carParts_photo=?, carParts_title=?, carParts_description=?, carParts_price=?, carParts_name_user=?, carParts_town=?, carParts_phone=? WHERE carParts_id=?",
                carPart.getCarParts_name(), carPart.getCarParts_state(), carPart.getCarParts_manufacturer(), carPart.getCarParts_manufacturer_reference_number(), carPart.getCarParts_photo(), carPart.getCarParts_title(), carPart.getCarParts_description(), carPart.getCarParts_price(), carPart.getCarParts_name_user(), carPart.getCarParts_town(), carPart.getCarParts_phone(), carPart.getCarParts_id());
    }

    public int delete(int id) {
        return jdbcTemplate.update("DELETE FROM carPart WHERE carParts_id=?", id);
    }
}
