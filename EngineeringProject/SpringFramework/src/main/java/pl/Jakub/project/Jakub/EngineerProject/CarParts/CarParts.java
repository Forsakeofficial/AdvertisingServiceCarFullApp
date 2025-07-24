package pl.Jakub.project.Jakub.EngineerProject.CarParts;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CarParts {
    private String carParts_id;
    private String carParts_name;
    private String carParts_state;
    private String carParts_manufacturer;
    private String carParts_manufacturer_reference_number;
    private String carParts_photo;
    private String carParts_title;
    private String carParts_description;
    private String carParts_price;
    private String carParts_name_user;
    private String carParts_town;
    private int carParts_phone;
    private String user_id;
}