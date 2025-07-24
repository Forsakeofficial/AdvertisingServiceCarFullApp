import React, { Component } from 'react';
import '../Styles/NewAnnouncement.css';

class CarPassenger extends Component {
  state = {
    data: [],
    notification_car: null,
    isAuthenticated: localStorage.getItem('accessToken') !== null, 
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;


    const carPassenger_mark = form.elements.carPassenger_mark.value;
    const carPassenger_model = form.elements.carPassenger_model.value;
    const carPassenger_state = form.elements.carPassenger_state.value;
    const carPassenger_vin = form.elements.carPassenger_vin.value;
    const carPassenger_mileage = form.elements.carPassenger_mileage.value;
    const carPassenger_vehicle_registration = form.elements.carPassenger_vehicle_registration.value;
    const carPassenger_data_first_vehicle_registration = form.elements.carPassenger_data_first_vehicle_registration.value;
    const carPassenger_year = form.elements.carPassenger_year.value;
    const carPassenger_fuel = form.elements.carPassenger_fuel.value;
    const carPassenger_power = form.elements.carPassenger_power.value;
    const carPassenger_engine = form.elements.carPassenger_engine.value;
    const carPassenger_doors = form.elements.carPassenger_doors.value;
    const carPassenger_gearbox = form.elements.carPassenger_gearbox.value;
    const carPassenger_car_drive = form.elements.carPassenger_car_drive.value;
    const carPassenger_emission = form.elements.carPassenger_emission.value;
    const carPassenger_car_body = form.elements.carPassenger_car_body.value;
    const carPassenger_int_place = form.elements.carPassenger_int_place.value;
    const carPassenger_color = form.elements.carPassenger_color.value;
    const carPassenger_type_color = form.elements.carPassenger_type_color.value;
    const carPassenger_photo = form.elements.carPassenger_photo.value;
    const carPassenger_title = form.elements.carPassenger_title.value;
    const carPassenger_description = form.elements.carPassenger_description.value;
    const carPassenger_price = form.elements.carPassenger_price.value;
    const carPassenger_name_car = form.elements.carPassenger_name_car.value;
    const carPassenger_town = form.elements.carPassenger_town.value;
    const carPassenger_phone = form.elements.carPassenger_phone.value;
  
    const newCar = {
      carPassenger_mark,
      carPassenger_model,
      carPassenger_state,
      carPassenger_vin,
      carPassenger_mileage: parseInt(carPassenger_mileage),
      carPassenger_vehicle_registration,
      carPassenger_data_first_vehicle_registration,
      carPassenger_year: parseInt(carPassenger_year),
      carPassenger_fuel,
      carPassenger_power: parseInt(carPassenger_power),
      carPassenger_engine: parseInt(carPassenger_engine),
      carPassenger_doors: parseInt(carPassenger_doors),
      carPassenger_gearbox,
      carPassenger_car_drive,
      carPassenger_emission,
      carPassenger_car_body,
      carPassenger_int_place: parseInt(carPassenger_int_place),
      carPassenger_color,
      carPassenger_type_color,
      carPassenger_photo,
      carPassenger_title,
      carPassenger_description,
      carPassenger_price,
      carPassenger_name_car,
      carPassenger_town,
      carPassenger_phone: parseInt(carPassenger_phone)
    };

    fetch('http://localhost:8080/api/carpassenger/add', {
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
    return (
      <>
      <div className='announcement_car_and_parts'>
        <form onSubmit={this.handleSubmit}>
          <h1>Dane pojazdu</h1>

          <h2>Informacje podstawowe</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>VIN</label>
                <input type='text' name='carPassenger_vin' placeholder='np. WBSBL93401JR11369' required />
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Przebieg</label>
                <input type='number' name='carPassenger_mileage' placeholder='np. 125 000 km' required />
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Numer rejestracyjny pojazdu</label>
                <input type='text' name='carPassenger_vehicle_registration' placeholder='np. ERA 75TM' required />
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Data pierwszej rejestracji</label>
                <input type='text' name='carPassenger_data_first_vehicle_registration' placeholder='np. 01-01-2000' required />
              </div>
            </div>
          </div>

          <h2>Dane techniczne</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Marka</label>
                <input type='text' name='carPassenger_mark' placeholder='np. Volkswagen' required />
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Model</label>
                <input type='text' name='carPassenger_model' placeholder='np. Golf' required />
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Rok produkcji</label>
                <input type='number' name='carPassenger_year' placeholder='np. 2020' required />
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Rodzaj paliwa</label>
                <input type='text' name='carPassenger_fuel' placeholder='np. Benzyna' required />
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Moc</label>
                <input type='number' name='carPassenger_power' placeholder='np. 100 KM' required />
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Pojemność skokowa</label>
                <input type='number' name='carPassenger_engine' placeholder='np. 999 cm3' required />
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Liczba drzwi</label>
                <input type='number' name='carPassenger_doors' placeholder='np. 5' required />
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Skrzynia biegów</label>
                <input type='text' name='carPassenger_gearbox' placeholder='np. Automatyczna' required />
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Napęd</label>
                <input type='text' name='carPassenger_car_drive' placeholder='np. 4x4' required />
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Emisja CO2</label>
                <input type='text' name='carPassenger_emission' placeholder='np. 120 g/km' required />
              </div>
            </div>            
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Stan samochodu</label>
                <input type='text' name='carPassenger_state' placeholder='np. Używany' required />
              </div>
            </div>
          </div>

          <h2>Typ nadwozia</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Typ nadwozia</label>
                <input type='text' name='carPassenger_car_body' placeholder='np. Hatchback' required /> 
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Liczba miejsc</label>
                <input type='number' name='carPassenger_int_place' placeholder='np. 7' required /> 
              </div>
            </div>

            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Kolor</label>
                <input type='text' name='carPassenger_color' placeholder='np. Czarny' required /> 
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Rodzaj koloru</label>
                <input type='text' name='carPassenger_type_color' placeholder='np. Perłowy' required /> 
              </div>
            </div>
          </div>

          <h2>Zdjęcia</h2>
          <div className='announcement_car_and_parts_title'>
            <div className='announcement_car_and_parts_input'>
              <label>Wstaw zdjęcie</label>
              <input type='text' name='carPassenger_photo' placeholder='Link do zdjęcia' required />
            </div>
          </div>

          <h2>Opis pojazdu</h2>
          <div className='announcement_car_and_parts_title'>
            <div className='announcement_car_and_parts_input'>
              <label>Tytuł ogłoszenia</label>
              <input type='text' name='carPassenger_title' placeholder='np. VW GOLF 2018 rok' required />
            </div>
          </div>

          <div className='announcement_car_and_parts_row'>
            <div className='announcement_car_and_parts_input'>
              <label>Opis pojazdu</label>
              <textarea name='carPassenger_description' required />
            </div>
          </div>

          <h2>Cena</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Cena</label>
                <input type='text' name='carPassenger_price' placeholder='np. 83 520 PLN' required />
              </div>
            </div>
          </div>

          <h2>Dane sprzedającego</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
              <label>Twoje imię i nazwisko</label>
              <input type='text' name='carPassenger_name_car' placeholder='' required />
              </div>

              <div className='announcement_car_and_parts_input'>
                <label>Wpisz miasto</label>
                <input type='text' name='carPassenger_town' placeholder='np. Warszawa' required />
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Numer telefonu</label>
                <input type='number' name='carPassenger_phone' placeholder='Numer telefonu' required />
              </div>
            </div>
          </div>
          <input type='submit' value='Dodaj ogłoszenie'/>
        </form>
      </div>
      {this.state.notification_car && (
          <div className='success-notification'>{this.state.notification_car}</div>
        )}
      </>
    )
  }
}

export default CarPassenger;