import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

class PageEditCarHGV extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userToken: localStorage.getItem('accessToken') || '',
      carHGV_vin: '',
      carHGV_mileage: 0,
      carHGV_vehicle_registration: '',
      carHGV_data_first_vehicle_registration: '',
      carHGV_mark: '',
      carHGV_model: '',
      carHGV_year: 0,
      carHGV_fuel: '',
      carHGV_power: 0,
      carHGV_engine: 0,
      carHGV_gearbox: '',
      carHGV_emission: '',
      carHGV_state: '',
      carHGV_car_body: '',
      carHGV_int_place: 0,
      carHGV_color: '',
      carHGV_type_color: '',
      carHGV_cargo_weight: '',
      carHGV_cargo_load: '',
      carHGV_photo: '',
      carHGV_title: '',
      carHGV_description: '',
      carHGV_price: '',
      carHGV_name_car: '',
      carHGV_town: '',
      carHGV_phone: '',
    };
  }

  componentDidMount() {
    const { carHGV_id } = this.props.match.params;

    fetch(`http://localhost:8080/api/carhgv/${carHGV_id}`, {
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
    const { carHGV_id } = this.props.match.params;
    const { userToken, ...data } = this.state;
  
    fetch(`http://localhost:8080/api/carhgv/edytowanie/${carHGV_id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          console.log('Successfully updated:', response);
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


  render() {

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
                    name='carHGV_vin'
                    value={this.state.carHGV_vin}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className='announcement_car_and_parts_input'>
                  <label>Przebieg</label>
                  <input
                    type='number'
                    name='carHGV_mileage'
                    value={this.state.carHGV_mileage}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className='announcement_car_and_parts_row'>
                <div className='announcement_car_and_parts_input'>
                  <label>Numer rejestracyjny pojazdu</label>
                  <input
                    type='text'
                    name='carHGV_vehicle_registration'
                    value={this.state.carHGV_vehicle_registration}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className='announcement_car_and_parts_input'>
                  <label>Data pierwszej rejestracji</label>
                  <input
                    type='text'
                    name='carHGV_data_first_vehicle_registration'
                    value={this.state.carHGV_data_first_vehicle_registration}
                    onChange={this.handleInputChange}
                    required
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
                    name='carHGV_mark'
                    value={this.state.carHGV_mark}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className='announcement_car_and_parts_input'>
                  <label>Model</label>
                  <input
                    type='text'
                    name='carHGV_model'
                    value={this.state.carHGV_model}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className='announcement_car_and_parts_row'>
                <div className='announcement_car_and_parts_input'>
                  <label>Rok produkcji</label>
                  <input
                    type='number'
                    name='carHGV_year'
                    value={this.state.carHGV_year}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className='announcement_car_and_parts_input'>
                  <label>Rodzaj paliwa</label>
                  <input
                    type='text'
                    name='carHGV_fuel'
                    value={this.state.carHGV_fuel}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className='announcement_car_and_parts_row'>
                <div className='announcement_car_and_parts_input'>
                  <label>Moc</label>
                  <input
                    type='number'
                    name='carHGV_power'
                    value={this.state.carHGV_power}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className='announcement_car_and_parts_input'>
                  <label>Pojemność skokowa</label>
                  <input
                    type='number'
                    name='carHGV_engine'
                    value={this.state.carHGV_engine}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className='announcement_car_and_parts_row'>
                <div className='announcement_car_and_parts_input'>
                  <label>Skrzynia biegów</label>
                  <input
                    type='text'
                    name='carHGV_gearbox'
                    value={this.state.carHGV_gearbox}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className='announcement_car_and_parts_input'>
                  <label>Emisja CO2</label>
                  <input
                    type='text'
                    name='carHGV_emission'
                    value={this.state.carHGV_emission}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className='announcement_car_and_parts_row'>
                <div className='announcement_car_and_parts_input'>
                  <label>Stan samochodu</label>
                  <input
                    type='text'
                    name='carHGV_state'
                    value={this.state.carHGV_state}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <h2>Nadwozie</h2>
            <div className='announcement_car_and_parts_column'>
              <div className='announcement_car_and_parts_row'>
                <div className='announcement_car_and_parts_input'>
                  <label>Typ nadwozia</label>
                  <input
                    type='text'
                    name='carHGV_car_body'
                    value={this.state.carHGV_car_body}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className='announcement_car_and_parts_input'>
                  <label>Liczba miejsc</label>
                  <input
                    type='number'
                    name='carHGV_int_place'
                    value={this.state.carHGV_int_place}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className='announcement_car_and_parts_row'>
                <div className='announcement_car_and_parts_input'>
                  <label>Kolor</label>
                  <input
                    type='text'
                    name='carHGV_color'
                    value={this.state.carHGV_color}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className='announcement_car_and_parts_input'>
                  <label>Rodzaj koloru</label>
                  <input
                    type='text'
                    name='carHGV_type_color'
                    value={this.state.carHGV_type_color}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <h2>Cargo</h2>
            <div className='announcement_car_and_parts_column'>
              <div className='announcement_car_and_parts_row'>
                <div className='announcement_car_and_parts_input'>
                  <label>Dopuszczalna masa całkowita</label>
                  <input
                    type='text'
                    name='carHGV_cargo_weight'
                    value={this.state.carHGV_cargo_weight}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className='announcement_car_and_parts_input'>
                  <label>Dopuszczalna ładowność</label>
                  <input
                    type='text'
                    name='carHGV_cargo_load'
                    value={this.state.carHGV_cargo_load}
                    onChange={this.handleInputChange}
                    required
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
                  name='carHGV_photo'
                  value={this.state.carHGV_photo}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
            </div>

            <h2>Opis pojazdu</h2>
            <div className='announcement_car_and_parts_title'>
              <div className='announcement_car_and_parts_input'>
                <label>Tytuł ogłoszenia</label>
                <input
                  type='text'
                  name='carHGV_title'
                  value={this.state.carHGV_title}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Opis pojazdu</label>
                <textarea
                  name='carHGV_description'
                  value={this.state.carHGV_description}
                  onChange={this.handleInputChange}
                  required
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
                    name='carHGV_price'
                    value={this.state.carHGV_price}
                    onChange={this.handleInputChange}
                    required
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
                    name='carHGV_name_car'
                    value={this.state.carHGV_name_car}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className='announcement_car_and_parts_input'>
                  <label>Wpisz miasto</label>
                  <input
                    type='text'
                    name='carHGV_town'
                    value={this.state.carHGV_town}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className='announcement_car_and_parts_row'>
                <div className='announcement_car_and_parts_input'>
                  <label>Numer telefonu</label>
                  <input
                    type='number'
                    name='carHGV_phone'
                    value={this.state.carHGV_phone}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            <input type='submit' value='Edytuj ogłoszenie' />
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default PageEditCarHGV;