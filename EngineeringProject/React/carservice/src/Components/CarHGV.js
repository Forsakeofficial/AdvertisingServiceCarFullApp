import React, { Component } from 'react';
import '../Styles/NewAnnouncement.css';

class CarHGV extends Component {
  state = {
    data: [],
    notification_car: null,
    isAuthenticated: localStorage.getItem('accessToken') !== null, 
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const carHGV_mark = form.elements.carHGV_mark.value;
    const carHGV_model = form.elements.carHGV_model.value;
    const carHGV_state = form.elements.carHGV_state.value;
    const carHGV_vin = form.elements.carHGV_vin.value;
    const carHGV_mileage = form.elements.carHGV_mileage.value;
    const carHGV_vehicle_registration = form.elements.carHGV_vehicle_registration.value;
    const carHGV_data_first_vehicle_registration = form.elements.carHGV_data_first_vehicle_registration.value;
    const carHGV_year = form.elements.carHGV_year.value;
    const carHGV_fuel = form.elements.carHGV_fuel.value;
    const carHGV_power = form.elements.carHGV_power.value;
    const carHGV_engine = form.elements.carHGV_engine.value;
    const carHGV_gearbox = form.elements.carHGV_gearbox.value;
    const carHGV_emission = form.elements.carHGV_emission.value;
    const carHGV_car_body = form.elements.carHGV_car_body.value;
    const carHGV_int_place = form.elements.carHGV_int_place.value;
    const carHGV_color = form.elements.carHGV_color.value;
    const carHGV_type_color = form.elements.carHGV_type_color.value;
    const carHGV_cargo_weight = form.elements.carHGV_cargo_weight.value;
    const carHGV_cargo_load = form.elements.carHGV_cargo_load.value;
    const carHGV_photo = form.elements.carHGV_photo.value;
    const carHGV_title = form.elements.carHGV_title.value;
    const carHGV_description = form.elements.carHGV_description.value;
    const carHGV_price = form.elements.carHGV_price.value;
    const carHGV_name_car = form.elements.carHGV_name_car.value;
    const carHGV_town = form.elements.carHGV_town.value;
    const carHGV_phone = form.elements.carHGV_phone.value;

    const newCar = {
      carHGV_mark,
      carHGV_model,
      carHGV_state,
      carHGV_vin,
      carHGV_mileage: parseInt(carHGV_mileage),
      carHGV_vehicle_registration,
      carHGV_data_first_vehicle_registration,
      carHGV_year: parseInt(carHGV_year),
      carHGV_fuel,
      carHGV_power: parseInt(carHGV_power),
      carHGV_engine: parseInt(carHGV_engine),
      carHGV_gearbox,
      carHGV_emission,
      carHGV_car_body,
      carHGV_int_place: parseInt(carHGV_int_place),
      carHGV_color,
      carHGV_type_color,
      carHGV_cargo_weight,
      carHGV_cargo_load,
      carHGV_photo,
      carHGV_title,
      carHGV_description,
      carHGV_price,
      carHGV_name_car,
      carHGV_town,
      carHGV_phone: parseInt(carHGV_phone),
    }

    fetch('http://localhost:8080/api/carhgv/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // Dodaj token JWT do nagłówka
      },
      body: JSON.stringify(newCar),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Źle wprowadzone dane');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Odpowiedź serwera:', data);
        form.reset();
        this.setState({ notification_car: 'Ogłoszenie zostało dodane' });

        setTimeout(() => {
          this.setState({ notification_car: null });
        }, 6000);
      })
      .catch((error) => {
        alert(error);
      });
  };

  render(){
    return(
      <>
      <div className='announcement_car_and_parts'>
        <form onSubmit={this.handleSubmit}>
          <h1>Dane pojazdu</h1>

          <h2>Informacje podstawowe</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>VIN</label>
                <input type='text' name='carHGV_vin' placeholder='np. WBSBL93401JR11369' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Przebieg</label>
                <input type='number' name='carHGV_mileage' placeholder='np. 125 000 km' required/>
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Numer rejestracyjny pojazdu</label>
                <input type='text' name='carHGV_vehicle_registration' placeholder='np. ERA 75TM' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Data pierwszej rejestracji</label>
                <input type='text' name='carHGV_data_first_vehicle_registration' placeholder='np. 01-01-2000' required/>
              </div>
            </div>
          </div>

          <h2>Dane techniczne</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Marka</label>
                <input type='text' name='carHGV_mark' placeholder='np. Mercedes-Benz' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Model</label>
                <input type='text' name='carHGV_model' placeholder='np. Actros 1842' required/>
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Rok produkcji</label>
                <input type='number' name='carHGV_year' placeholder='np. 2023' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Rodzaj paliwa</label>
                <input type='text' name='carHGV_fuel' placeholder='np. Benzyna' required/>
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Moc</label>
                <input type='number' name='carHGV_power' placeholder='np. 420 KM' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Pojemność skokowa</label>
                <input type='number' name='carHGV_engine' placeholder='np. 11967 cm3' required/>
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Skrzynia biegów</label>
                <input type='text' name='carHGV_gearbox' placeholder='np. Automatyczna' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Emisja CO2</label>
                <input type='text' name='carHGV_emission' placeholder='np. 120 g/km ' required/>
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Stan samochodu</label>
                <input type='text' name='carHGV_state' placeholder='np. Używany' required/>
              </div>
            </div>      
          </div>

          <h2>Nadwozie</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Typ nadwozia</label>
                <input type='text' name='carHGV_car_body' placeholder='np. Ciągnik siodłowy' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Liczba miejsc</label>
                <input type='number' name='carHGV_int_place' placeholder='np. 2' required/>
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Kolor</label>
                <input type='text' name='carHGV_color' placeholder='np. Czarny' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Rodzaj koloru</label>
                <input type='text' name='carHGV_type_color' placeholder='np. Perłowy' required/>
              </div>
            </div>
          </div>

          <h2>Cargo</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Dopuszczalna masa całkowita</label>
                <input type='text' name='carHGV_cargo_weight' placeholder='np. 800 kg' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Dopuszczalna ładowność</label>
                <input type='text' name='carHGV_cargo_load' placeholder='np. 400 kg' required/>
              </div>
            </div>
          </div>

          <h2>Zdjęcia</h2>
          <div className='announcement_car_and_parts_title'>
            <div className='announcement_car_and_parts_input'>
              <label>Wstaw zdjęcie</label>
              <input className='test' type='text' name='carHGV_photo' placeholder='Link do zdjęcia' required/>
            </div>
          </div>

          <h2>Opis pojazdu</h2>
          <div className='announcement_car_and_parts_title'>
            <div className='announcement_car_and_parts_input'>
              <label>Tytuł ogłoszenia</label>
              <input className='test' type='text' name='carHGV_title' placeholder='np. Mercedes-Benz Actros 1842 Nowy' required/>
            </div>
          </div>
          <div className='announcement_car_and_parts_row'>
            <div className='announcement_car_and_parts_input'>
              <label>Opis pojazdu</label>
              <textarea name='carHGV_description' required/>
            </div>
          </div>

          <h2>Cena</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Cena</label>
                <input type='text' name='carHGV_price' placeholder='np. 183 520 PLN' required/>
              </div>
            </div>
          </div>

          <h2>Dane sprzedającego</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Twoje imię i nazwisko</label>
                <input type='text' name='carHGV_name_car' placeholder='' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Wpisz miasto</label>
                <input type='text' name='carHGV_town' placeholder='np. Warszawa' required/>
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Numer telefonu</label>
                <input type='number' name='carHGV_phone' placeholder='Numer telefonu' required/>
              </div>
            </div>
          </div>
          <input type='submit' value='Dodaj ogłoszenie' />
        </form>
      </div>
      {this.state.notification_car && (
          <div className='success-notification'>{this.state.notification_car}</div>
        )}
      </>
    )
  }
}

export default CarHGV;