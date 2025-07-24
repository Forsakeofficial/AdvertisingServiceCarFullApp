import React, { Component } from 'react';
import '../Styles/NewAnnouncement.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

class PageEditCarPassenger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userToken: localStorage.getItem('accessToken') || '',
      carPassenger_vin: '',
      carPassenger_mileage: '',
      carPassenger_vehicle_registration: '',
      carPassenger_data_first_vehicle_registration: '',
      carPassenger_mark: '',
      carPassenger_model: '',
      carPassenger_year: '',
      carPassenger_fuel: '',
      carPassenger_power: '',
      carPassenger_engine: '',
      carPassenger_doors: '',
      carPassenger_gearbox: '',
      carPassenger_car_drive: '',
      carPassenger_emission: '',
      carPassenger_state: '',
      carPassenger_car_body: '',
      carPassenger_int_place: '',
      carPassenger_color: '',
      carPassenger_type_color: '',
      carPassenger_photo: '',
      carPassenger_title: '',
      carPassenger_description: '',
      carPassenger_price: '',
      carPassenger_name_car: '',
      carPassenger_town: '',
      carPassenger_phone: '',
      notification_car: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.handlePatch();
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  componentDidMount() {
    const { carPassenger_id } = this.props.match.params;

    fetch(`http://localhost:8080/api/carpassenger/${carPassenger_id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.state.userToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          ...data,
        });
      })
      .catch((error) => {
        console.error('Błąd pobierania danych ogłoszenia', error);
      });
  }

  handlePatch = () => {
    const { carPassenger_id } = this.props.match.params;
    const { userToken, ...data } = this.state;


    fetch(`http://localhost:8080/api/carpassenger/edytowanie/${carPassenger_id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        if (response.success) {
          console.log('Successfully updated:', response);
          this.setState({ notification_car: 'Ogłoszenie zostało dodane' });

          setTimeout(() => {
            this.setState({ notification_car: null });
          }, 6000);
        } else {
          console.error('Error updating data:', response.error);
        }
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
  }
  render(){
    return (
      <>
      <Navbar />
      <div className='announcement_car_and_parts'>
      <form onSubmit={this.handleSubmit}>
      <h1 className='announcement_edit'>Edycja ogłoszeń</h1>
  <h1>Dane pojazdu</h1>

  <h2>Informacje podstawowe</h2>
  <div className='announcement_car_and_parts_column'>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>VIN</label>
        <input
          type='text'
          name='carPassenger_vin'
          placeholder='np. WBSBL93401JR11369'
          required
          value={this.state.carPassenger_vin}
          onChange={this.handleInputChange}
        />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Przebieg</label>
        <input
          type='number'
          name='carPassenger_mileage'
          placeholder='np. 125 000 km'
          required
          value={this.state.carPassenger_mileage}
          onChange={this.handleInputChange}
        />
      </div>
    </div>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Numer rejestracyjny pojazdu</label>
        <input
          type='text'
          name='carPassenger_vehicle_registration'
          placeholder='np. ERA 75TM'
          required
          value={this.state.carPassenger_vehicle_registration}
          onChange={this.handleInputChange}
        />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Data pierwszej rejestracji</label>
        <input
          type='text'
          name='carPassenger_data_first_vehicle_registration'
          placeholder='np. 01-01-2000'
          required
          value={this.state.carPassenger_data_first_vehicle_registration}
          onChange={this.handleInputChange}
        />
      </div>
    </div>
  </div>

  <h2>Dane techniczne</h2>
  <div className='announcement_car_and_parts_column'>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Marka</label>
        <input
          type='text'
          name='carPassenger_mark'
          placeholder='np. Volkswagen'
          required
          value={this.state.carPassenger_mark}
          onChange={this.handleInputChange}
        />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Model</label>
        <input
          type='text'
          name='carPassenger_model'
          placeholder='np. Golf'
          required
          value={this.state.carPassenger_model}
          onChange={this.handleInputChange}
        />
      </div>
    </div>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Rok produkcji</label>
        <input
          type='number'
          name='carPassenger_year'
          placeholder='np. 2020'
          required
          value={this.state.carPassenger_year}
          onChange={this.handleInputChange}
        />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Rodzaj paliwa</label>
        <input
          type='text'
          name='carPassenger_fuel'
          placeholder='np. Benzyna'
          required
          value={this.state.carPassenger_fuel}
          onChange={this.handleInputChange}
        />
      </div>
    </div>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Moc</label>
        <input
          type='number'
          name='carPassenger_power'
          placeholder='np. 100 KM'
          required
          value={this.state.carPassenger_power}
          onChange={this.handleInputChange}
        />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Pojemność skokowa</label>
        <input
          type='number'
          name='carPassenger_engine'
          placeholder='np. 999 cm3'
          required
          value={this.state.carPassenger_engine}
          onChange={this.handleInputChange}
        />
      </div>
    </div>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Liczba drzwi</label>
        <input
          type='number'
          name='carPassenger_doors'
          placeholder='np. 5'
          required
          value={this.state.carPassenger_doors}
          onChange={this.handleInputChange}
        />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Skrzynia biegów</label>
        <input
          type='text'
          name='carPassenger_gearbox'
          placeholder='np. Automatyczna'
          required
          value={this.state.carPassenger_gearbox}
          onChange={this.handleInputChange}
        />
      </div>
    </div>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Napęd</label>
        <input
          type='text'
          name='carPassenger_car_drive'
          placeholder='np. 4x4'
          required
          value={this.state.carPassenger_car_drive}
          onChange={this.handleInputChange}
        />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Emisja CO2</label>
        <input
          type='text'
          name='carPassenger_emission'
          placeholder='np. 120 g/km'
          required
          value={this.state.carPassenger_emission}
          onChange={this.handleInputChange}
        />
      </div>
    </div>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Stan samochodu</label>
        <input
          type='text'
          name='carPassenger_state'
          placeholder='np. Używany'
          required
          value={this.state.carPassenger_state}
          onChange={this.handleInputChange}
        />
      </div>
    </div>
  </div>

  <h2>Typ nadwozia</h2>
  <div className='announcement_car_and_parts_column'>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Typ nadwozia</label>
        <input
          type='text'
          name='carPassenger_car_body'
          placeholder='np. Hatchback'
          required
          value={this.state.carPassenger_car_body}
          onChange={this.handleInputChange}
        />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Liczba miejsc</label>
        <input
          type='number'
          name='carPassenger_int_place'
          placeholder='np. 7'
          required
          value={this.state.carPassenger_int_place}
          onChange={this.handleInputChange}
        />
      </div>
    </div>

    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Kolor</label>
        <input
          type='text'
          name='carPassenger_color'
          placeholder='np. Czarny'
          required
          value={this.state.carPassenger_color}
          onChange={this.handleInputChange}
        />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Rodzaj koloru</label>
        <input
          type='text'
          name='carPassenger_type_color'
          placeholder='np. Perłowy'
          required
          value={this.state.carPassenger_type_color}
          onChange={this.handleInputChange}
        />
      </div>
    </div>
  </div>

  <h2>Zdjęcia</h2>
  <div className='announcement_car_and_parts_title'>
    <div className='announcement_car_and_parts_input'>
      <label>Wstaw zdjęcie</label>
      <input
        type='text'
        name='carPassenger_photo'
        placeholder='Link do zdjęcia'
        required
        value={this.state.carPassenger_photo}
        onChange={this.handleInputChange}
      />
    </div>
  </div>

  <h2>Opis pojazdu</h2>
  <div className='announcement_car_and_parts_title'>
    <div className='announcement_car_and_parts_input'>
      <label>Tytuł ogłoszenia</label>
      <input
        type='text'
        name='carPassenger_title'
        placeholder='np. VW GOLF 2018 rok'
        required
        value={this.state.carPassenger_title}
        onChange={this.handleInputChange}
      />
    </div>
  </div>

  <div className='announcement_car_and_parts_row'>
    <div className='announcement_car_and_parts_input'>
      <label>Opis pojazdu</label>
      <textarea
        name='carPassenger_description'
        required
        value={this.state.carPassenger_description}
        onChange={this.handleInputChange}
      />
    </div>
  </div>

  <h2>Cena</h2>
  <div className='announcement_car_and_parts_column'>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Cena</label>
        <input
          type='text'
          name='carPassenger_price'
          placeholder='np. 83 520 PLN'
          required
          value={this.state.carPassenger_price}
          onChange={this.handleInputChange}
        />
      </div>
    </div>
  </div>

  <h2>Dane sprzedającego</h2>
  <div className='announcement_car_and_parts_column'>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Twoje imię i nazwisko</label>
        <input
          type='text'
          name='carPassenger_name_car'
          placeholder=''
          required
          value={this.state.carPassenger_name_car}
          onChange={this.handleInputChange}
        />
      </div>

      <div className='announcement_car_and_parts_input'>
        <label>Wpisz miasto</label>
        <input
          type='text'
          name='carPassenger_town'
          placeholder='np. Warszawa'
          required
          value={this.state.carPassenger_town}
          onChange={this.handleInputChange}
        />
      </div>
    </div>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Numer telefonu</label>
        <input
          type='number'
          name='carPassenger_phone'
          placeholder='Numer telefonu'
          required
          value={this.state.carPassenger_phone}
          onChange={this.handleInputChange}
        />
      </div>
    </div>
  </div>
  <input type='submit' value='Edytuj ogłoszenie'/>
</form>
      </div>
      {this.state.notification_car && (
          <div className='success-notification'>{this.state.notification_car}</div>
        )}
        <Footer />
      </>
    )
  }
}

export default PageEditCarPassenger;