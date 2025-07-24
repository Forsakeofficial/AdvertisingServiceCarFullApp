import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

class PageEditCarTruck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userToken: localStorage.getItem('accessToken') || '',
      carTruck_vin: '',
      carTruck_mileage: '',
      carTruck_vehicle_registration: '',
      carTruck_data_first_vehicle_registration: '',
      carTruck_mark: '',
      carTruck_model: '',
      carTruck_year: '',
      carTruck_fuel: '',
      carTruck_power: '',
      carTruck_engine: '',
      carTruck_gearbox: '',
      carTruck_emission: '',
      carTruck_state: '',
      carTruck_car_body: '',
      carTruck_int_place: '',
      carTruck_color: '',
      carTruck_type_color: '',
      carTruck_cargo_capacity: '',
      carTruck_cargo_weight: '',
      carTruck_cargo_load: '',
      carTruck_photo: '',
      carTruck_title: '',
      carTruck_description: '',
      carTruck_price: '',
      carTruck_name_car: '',
      carTruck_town: '',
      carTruck_phone: '',
      notification_car: null,
    };
  }

  componentDidMount() {
    const { carTruck_id } = this.props.match.params;

    fetch(`http://localhost:8080/api/cartruck/${carTruck_id}`, {
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

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handlePatch = () => {
    const { carTruck_id } = this.props.match.params;
    const { userToken, ...data } = this.state;


    fetch(`http://localhost:8080/api/cartruck/edytowanie/${carTruck_id}`, {
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.handlePatch();
  }

  render(){
    return(
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
        <input type='text' name='carTruck_vin' placeholder='np. WBSBL93401JR11369' required value={this.state.carTruck_vin} onChange={this.handleInputChange} />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Przebieg</label>
        <input type='number' name='carTruck_mileage' placeholder='np. 125 000 km' required value={this.state.carTruck_mileage} onChange={this.handleInputChange} />
      </div>
    </div>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Numer rejestracyjny pojazdu</label>
        <input type='text' name='carTruck_vehicle_registration' placeholder='np. ERA 75TM' required value={this.state.carTruck_vehicle_registration} onChange={this.handleInputChange} />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Data pierwszej rejestracji</label>
        <input type='text' name='carTruck_data_first_vehicle_registration' placeholder='np. 01-01-2000' required value={this.state.carTruck_data_first_vehicle_registration} onChange={this.handleInputChange} />
      </div>
    </div>
  </div>

  <h2>Dane techniczne</h2>
  <div className='announcement_car_and_parts_column'>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Marka</label>
        <input type='text' name='carTruck_mark' placeholder='np. Volkswagen' required value={this.state.carTruck_mark} onChange={this.handleInputChange} />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Model</label>
        <input type='text' name='carTruck_model' placeholder='np. Crafter' required value={this.state.carTruck_model} onChange={this.handleInputChange} />
      </div>
    </div>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Rok produkcji</label>
        <input type='number' name='carTruck_year' placeholder='np. 2000' required value={this.state.carTruck_year} onChange={this.handleInputChange} />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Rodzaj paliwa</label>
        <input type='text' name='carTruck_fuel' placeholder='np. Benzyna' required value={this.state.carTruck_fuel} onChange={this.handleInputChange} />
      </div>
    </div>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Moc</label>
        <input type='number' name='carTruck_power' placeholder='np. 100 KM' required value={this.state.carTruck_power} onChange={this.handleInputChange} />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Pojemność skokowa</label>
        <input type='number' name='carTruck_engine' placeholder='np. 999 cm3' required value={this.state.carTruck_engine} onChange={this.handleInputChange} />
      </div>
    </div>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Skrzynia biegów</label>
        <input type='text' name='carTruck_gearbox' placeholder='np. Automatyczna' required value={this.state.carTruck_gearbox} onChange={this.handleInputChange} />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Emisja CO2</label>
        <input type='text' name='carTruck_emission' placeholder='np. 120 g/km ' required value={this.state.carTruck_emission} onChange={this.handleInputChange} />
      </div>
    </div>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Stan samochodu</label>
        <input type='text' name='carTruck_state' placeholder='np. Używany' required value={this.state.carTruck_state} onChange={this.handleInputChange} />
      </div>
    </div>
  </div>

  <h2>Nadwozie</h2>
  <div className='announcement_car_and_parts_column'>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Typ nadwozia</label>
        <input type='text' name='carTruck_car_body' placeholder='np. VAN' required value={this.state.carTruck_car_body} onChange={this.handleInputChange} />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Liczba miejsc</label>
        <input type='number' name='carTruck_int_place' placeholder='np. 2' required value={this.state.carTruck_int_place} onChange={this.handleInputChange} />
      </div>
    </div>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Kolor</label>
        <input type='text' name='carTruck_color' placeholder='np. Czarny' required value={this.state.carTruck_color} onChange={this.handleInputChange} />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Rodzaj koloru</label>
        <input type='text' name='carTruck_type_color' placeholder='np. Perłowy' required value={this.state.carTruck_type_color} onChange={this.handleInputChange} />
      </div>
    </div>
  </div>

  <h2>Cargo</h2>
  <div className='announcement_car_and_parts_column'>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Pojemność (objetość)</label>
        <input type='text' name='carTruck_cargo_capacity' placeholder='np. 1199 m3' required value={this.state.carTruck_cargo_capacity} onChange={this.handleInputChange} />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Dopuszczalna masa całkowita</label>
        <input type='text' name='carTruck_cargo_weight' placeholder='np. 800 kg' required value={this.state.carTruck_cargo_weight} onChange={this.handleInputChange} />
      </div>
    </div>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Dopuszczalna ładowność</label>
        <input type='text' name='carTruck_cargo_load' placeholder='np. 400 kg' required value={this.state.carTruck_cargo_load} onChange={this.handleInputChange} />
      </div>
    </div>
  </div>

  <h2>Zdjęcia</h2>
  <div className='announcement_car_and_parts_title'>
    <div className='announcement_car_and_parts_input'>
      <label>Wstaw zdjęcie</label>
      <input className='test' type='text' name='carTruck_photo' placeholder='Link do zdjęcia' required value={this.state.carTruck_photo} onChange={this.handleInputChange} />
    </div>
  </div>

  <h2>Opis pojazdu</h2>
  <div className='announcement_car_and_parts_title'>
    <div className='announcement_car_and_parts_input'>
      <label>Tytuł ogłoszenia</label>
      <input className='test' type='text' name='carTruck_title' placeholder='np. VW Crafter 2018 rok' required value={this.state.carTruck_title} onChange={this.handleInputChange} />
    </div>
  </div>
  <div className='announcement_car_and_parts_row'>
    <div className='announcement_car_and_parts_input'>
      <label>Opis pojazdu</label>
      <textarea name='carTruck_description' required value={this.state.carTruck_description} onChange={this.handleInputChange} />
    </div>
  </div>

  <h2>Cena</h2>
  <div className='announcement_car_and_parts_column'>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Cena</label>
        <input type='text' name='carTruck_price' placeholder='np. 83 520 PLN' required value={this.state.carTruck_price} onChange={this.handleInputChange} />
      </div>
    </div>
  </div>

  <h2>Dane sprzedającego</h2>
  <div className='announcement_car_and_parts_column'>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Twoje imię i nazwisko</label>
        <input type='text' name='carTruck_name_car' placeholder='' required value={this.state.carTruck_name_car} onChange={this.handleInputChange} />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Wpisz miasto</label>
        <input type='text' name='carTruck_town' placeholder='np. Warszawa' required value={this.state.carTruck_town} onChange={this.handleInputChange} />
      </div>
    </div>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Numer telefonu</label>
        <input type='number' name='carTruck_phone' placeholder='Numer telefonu' required value={this.state.carTruck_phone} onChange={this.handleInputChange} />
      </div>
    </div>
  </div>
  <input type='submit' value='Dodaj ogłoszenie' />
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

export default PageEditCarTruck;