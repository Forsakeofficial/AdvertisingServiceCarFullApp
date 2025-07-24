import React, { Component } from 'react';
import '../Styles/NewAnnouncement.css';

class CarTruck extends Component {
  state = {
    data: [],
    notification_car: null,
    isAuthenticated: localStorage.getItem('accessToken') !== null, 
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const carTruck_mark = form.elements.carTruck_mark.value;
    const carTruck_model = form.elements.carTruck_model.value;
    const carTruck_state = form.elements.carTruck_state.value;
    const carTruck_vin = form.elements.carTruck_vin.value;
    const carTruck_mileage = form.elements.carTruck_mileage.value;
    const carTruck_vehicle_registration = form.elements.carTruck_vehicle_registration.value;
    const carTruck_data_first_vehicle_registration = form.elements.carTruck_data_first_vehicle_registration.value;
    const carTruck_year = form.elements.carTruck_year.value;
    const carTruck_fuel = form.elements.carTruck_fuel.value;
    const carTruck_power = form.elements.carTruck_power.value;
    const carTruck_engine = form.elements.carTruck_engine.value;
    const carTruck_gearbox = form.elements.carTruck_gearbox.value;
    const carTruck_emission = form.elements.carTruck_emission.value;
    const carTruck_car_body = form.elements.carTruck_car_body.value;
    const carTruck_int_place = form.elements.carTruck_int_place.value;
    const carTruck_color = form.elements.carTruck_color.value;
    const carTruck_type_color = form.elements.carTruck_type_color.value;
    const carTruck_cargo_capacity = form.elements.carTruck_cargo_capacity.value;
    const carTruck_cargo_weight = form.elements.carTruck_cargo_weight.value;
    const carTruck_cargo_load = form.elements.carTruck_cargo_load.value;
    const carTruck_photo = form.elements.carTruck_photo.value;
    const carTruck_title = form.elements.carTruck_title.value;
    const carTruck_description = form.elements.carTruck_description.value;
    const carTruck_price = form.elements.carTruck_price.value;
    const carTruck_name_car = form.elements.carTruck_name_car.value;
    const carTruck_town = form.elements.carTruck_town.value;
    const carTruck_phone = form.elements.carTruck_phone.value;

    const newCar = {
      carTruck_mark,
      carTruck_model,
      carTruck_state,
      carTruck_vin,
      carTruck_mileage: parseInt(carTruck_mileage),
      carTruck_vehicle_registration,
      carTruck_data_first_vehicle_registration,
      carTruck_year: parseInt(carTruck_year),
      carTruck_fuel,
      carTruck_power: parseInt(carTruck_power),
      carTruck_engine: parseInt(carTruck_engine),
      carTruck_gearbox,
      carTruck_emission,
      carTruck_car_body,
      carTruck_int_place: parseInt(carTruck_int_place),
      carTruck_color,
      carTruck_type_color,
      carTruck_cargo_capacity,
      carTruck_cargo_weight,
      carTruck_cargo_load,
      carTruck_photo,
      carTruck_title,
      carTruck_description,
      carTruck_price,
      carTruck_name_car,
      carTruck_town,
      carTruck_phone: parseInt(carTruck_phone),
    };

    fetch('http://localhost:8080/api/cartruck/add', {
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
                <input type='text' name='carTruck_vin' placeholder='np. WBSBL93401JR11369' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Przebieg</label>
                <input type='number' name='carTruck_mileage' placeholder='np. 125 000 km' required/>
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Numer rejestracyjny pojazdu</label>
                <input type='text' name='carTruck_vehicle_registration' placeholder='np. ERA 75TM' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Data pierwszej rejestracji</label>
                <input type='text' name='carTruck_data_first_vehicle_registration' placeholder='np. 01-01-2000' required/>
              </div>
            </div>
          </div>

          <h2>Dane techniczne</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Marka</label>
                <input type='text' name='carTruck_mark' placeholder='np. Volkswagen' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Model</label>
                <input type='text' name='carTruck_model' placeholder='np. Crafter' required/>
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Rok produkcji</label>
                <input type='number' name='carTruck_year' placeholder='np. 2000' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Rodzaj paliwa</label>
                <input type='text' name='carTruck_fuel' placeholder='np. Benzyna' required/>
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Moc</label>
                <input type='number' name='carTruck_power' placeholder='np. 100 KM' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Pojemność skokowa</label>
                <input type='number' name='carTruck_engine' placeholder='np. 999 cm3' required/>
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Skrzynia biegów</label>
                <input type='text' name='carTruck_gearbox' placeholder='np. Automatyczna' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Emisja CO2</label>
                <input type='text' name='carTruck_emission' placeholder='np. 120 g/km ' required/>
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Stan samochodu</label>
                <input type='text' name='carTruck_state' placeholder='np. Używany' required/>
              </div>
            </div>      
          </div>

          <h2>Nadwozie</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Typ nadwozia</label>
                <input type='text' name='carTruck_car_body' placeholder='np. VAN' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Liczba miejsc</label>
                <input type='number' name='carTruck_int_place' placeholder='np. 2' required/>
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Kolor</label>
                <input type='text' name='carTruck_color' placeholder='np. Czarny' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Rodzaj koloru</label>
                <input type='text' name='carTruck_type_color' placeholder='np. Perłowy' required/>
              </div>
            </div>
          </div>

          <h2>Cargo</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Pojemność (objetość)</label>
                <input type='text' name='carTruck_cargo_capacity' placeholder='np. 1199 m3' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Dopuszczalna masa całkowita</label>
                <input type='text' name='carTruck_cargo_weight' placeholder='np. 800 kg' required/>
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Dopuszczalna ładowność</label>
                <input type='text' name='carTruck_cargo_load' placeholder='np. 400 kg' required/>
              </div>
            </div>
          </div>

          <h2>Zdjęcia</h2>
          <div className='announcement_car_and_parts_title'>
            <div className='announcement_car_and_parts_input'>
              <label>Wstaw zdjęcie</label>
              <input className='test' type='text' name='carTruck_photo' placeholder='Link do zdjęcia' required/>
            </div>
          </div>

          <h2>Opis pojazdu</h2>
          <div className='announcement_car_and_parts_title'>
            <div className='announcement_car_and_parts_input'>
              <label>Tytuł ogłoszenia</label>
              <input className='test' type='text' name='carTruck_title' placeholder='np. VW Crafter 2018 rok' required/>
            </div>
          </div>
          <div className='announcement_car_and_parts_row'>
            <div className='announcement_car_and_parts_input'>
              <label>Opis pojazdu</label>
              <textarea name='carTruck_description' required/>
            </div>
          </div>

          <h2>Cena</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Cena</label>
                <input type='text' name='carTruck_price' placeholder='np. 83 520 PLN' required/>
              </div>
            </div>
          </div>

          <h2>Dane sprzedającego</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Twoje imię i nazwisko</label>
                <input type='text' name='carTruck_name_car' placeholder='' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Wpisz miasto</label>
                <input type='text' name='carTruck_town' placeholder='np. Warszawa' required/>
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Numer telefonu</label>
                <input type='number' name='carTruck_phone' placeholder='Numer telefonu' required/>
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

export default CarTruck;