import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

class PageEditCarParts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userToken: localStorage.getItem('accessToken') || '',
      carParts_name: '',
      carParts_manufacturer: '',
      carParts_manufacturer_reference_number: '',
      carParts_state: '',
      carParts_photo: '',
      carParts_title: '',
      carParts_description: '',
      carParts_price: '',
      carParts_name_user: '',
      carParts_town: '',
      carParts_phone: '',
      notification_car: null,
    };
  }

  componentDidMount() {
    const { carParts_id } = this.props.match.params;

    fetch(`http://localhost:8080/api/carparts/${carParts_id}`, {
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
    const { carParts_id } = this.props.match.params;
    const { userToken, carParts_name_user, ...data } = this.state;

    if (carParts_name_user !== localStorage.getItem('user_name')) {
      console.error('Brak uprawnień do edycji ogłoszenia');
      return;
    }

    fetch(`http://localhost:8080/api/carparts/edytowanie/${carParts_id}`, {
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
  render() {

    return (
      <>
        <Navbar />
        <div className='announcement_car_and_parts'>
        <form onSubmit={this.handleSubmit}>
  <h1 className='announcement_edit'>Edycja ogłoszeń</h1>
  <h1>Szczegóły części</h1>
  <h2>Informacje podstawowe</h2>
  <div className='announcement_car_and_parts_column'>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Kategoria części</label>
        <input type='text' name='carParts_name' placeholder='np. Klocki hamulcowe' required onChange={this.handleInputChange} value={this.state.carParts_name} />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Producent części</label>
        <input type='text' name='carParts_manufacturer' placeholder='np. ATE' required onChange={this.handleInputChange} value={this.state.carParts_manufacturer} />
      </div>
    </div>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Numer referencyjny producenta</label>
        <input type='text' name='carParts_manufacturer_reference_number' placeholder='np. PL/PL5229419075/Q3' required onChange={this.handleInputChange} value={this.state.carParts_manufacturer_reference_number} />
      </div>
    </div>
  </div>

  <h2>Dane techniczne</h2>
  <div className='announcement_car_and_parts_column'>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Stan części</label>
        <input type='text' name='carParts_state' placeholder='np. Używany' required onChange={this.handleInputChange} value={this.state.carParts_state} />
      </div>
    </div>
  </div>

  <h2>Zdjęcia</h2>
  <div className='announcement_car_and_parts_title'>
    <div className='announcement_car_and_parts_input'>
      <label>Wstaw zdjęcie</label>
      <input type='text' name='carParts_photo' placeholder='Link do zdjęcia' required onChange={this.handleInputChange} value={this.state.carParts_photo} />
    </div>
  </div>

  <h2>Opis części</h2>
  <div className='announcement_car_and_parts_title'>
    <div className='announcement_car_and_parts_input'>
      <label>Tytuł ogłoszenia</label>
      <input type='text' name='carParts_title' placeholder='np. Klocki hamulcowe' required onChange={this.handleInputChange} value={this.state.carParts_title} />
    </div>
  </div>

  <div className='announcement_car_and_parts_row'>
    <div className='announcement_car_and_parts_input'>
      <label>Opis</label>
      <textarea name='carParts_description' required onChange={this.handleInputChange} value={this.state.carParts_description} />
    </div>
  </div>

  <h2>Cena</h2>
  <div className='announcement_car_and_parts_column'>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Cena</label>
        <input type='text' name='carParts_price' placeholder='np. 500 PLN' required onChange={this.handleInputChange} value={this.state.carParts_price} />
      </div>
    </div>
  </div>

  <h2>Dane sprzedającego</h2>
  <div className='announcement_car_and_parts_column'>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Twoje imię i nazwisko</label>
        <input type='text' name='carParts_name_user' placeholder='Imię i nazwisko' required onChange={this.handleInputChange} value={this.state.carParts_name_user} />
      </div>
      <div className='announcement_car_and_parts_input'>
        <label>Wpisz miasto</label>
        <input type='text' name='carParts_town' placeholder='np. Szczecin' required onChange={this.handleInputChange} value={this.state.carParts_town} />
      </div>
    </div>
    <div className='announcement_car_and_parts_row'>
      <div className='announcement_car_and_parts_input'>
        <label>Numer telefonu</label>
        <input type='text' name='carParts_phone' placeholder='Numer telefonu' required onChange={this.handleInputChange} value={this.state.carParts_phone} />
      </div>
    </div>
  </div>
  <input type='submit' value='Edytuj ogłoszenie' />
</form>
        </div>
        {this.state.notification_car && (
          <div className='success-notification'>{this.state.notification_car}</div>
        )}
        <Footer />
      </>
    );
  }
}

export default PageEditCarParts;