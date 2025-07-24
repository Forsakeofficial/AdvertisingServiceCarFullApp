import React, { Component } from 'react';
import '../Styles/NewAnnouncement.css';

class CarParts extends Component {
  state = {
    data: [],
    notification_car: null,
    isAuthenticated: localStorage.getItem('accessToken') !== null, 
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const carParts_name = form.elements.carParts_name.value;
    const carParts_state = form.elements.carParts_state.value;
    const carParts_manufacturer = form.elements.carParts_manufacturer.value;
    const carParts_manufacturer_reference_number = form.elements.carParts_manufacturer_reference_number.value;
    const carParts_photo = form.elements.carParts_photo.value;
    const carParts_title = form.elements.carParts_title.value;
    const carParts_description = form.elements.carParts_description.value;
    const carParts_price = form.elements.carParts_price.value;
    const carParts_name_user = form.elements.carParts_name_user.value;
    const carParts_town = form.elements.carParts_town.value;
    const carParts_phone = form.elements.carParts_phone.value;
  
    const newCar = {
      carParts_name,
      carParts_state,
      carParts_manufacturer,
      carParts_manufacturer_reference_number,
      carParts_photo, 
      carParts_title,
      carParts_description,
      carParts_price,
      carParts_name_user,
      carParts_town,
      carParts_phone: parseInt(carParts_phone),
    }

    fetch('http://localhost:8080/api/carparts/add', {
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
          <h1>Szczegóły części</h1>
          
          <h2>Informacje podstawowe</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Kategoria części</label>
                <input type='text' name='carParts_name' placeholder='np. Klocki hamulcowe' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Producent części</label>
                <input type='text' name='carParts_manufacturer' placeholder='np. ATE' required/>
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Numer referencyjny producenta</label>
                <input type='text' name='carParts_manufacturer_reference_number' placeholder='np. PL/PL5229419075/Q3' required/>
              </div>
            </div>
          </div>

          <h2>Dane techniczne</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Stan części</label>
                <input type='text' name='carParts_state' placeholder='np. Używany' required/>
              </div>
            </div>
          </div>

          <h2>Zdjęcia</h2>
          <div className='announcement_car_and_parts_title'>
            <div className='announcement_car_and_parts_input'>
              <label>Wstaw zdjęcie</label>
              <input type='text' name='carParts_photo' placeholder='Link do zdjęcia' required/>
            </div>
          </div>

          <h2>Opis części</h2>
          <div className='announcement_car_and_parts_title'>
            <div className='announcement_car_and_parts_input'>
              <label>Tytuł ogłoszenia</label>
              <input type='text' name='carParts_title' placeholder='np. Klocki hamulcowe' required/>
            </div>
          </div>

          <div className='announcement_car_and_parts_row'>
            <div className='announcement_car_and_parts_input'>
            <label>Opis</label>
            <textarea name='carParts_description' required/>
            </div>
          </div>

          <h2>Cena</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Cena</label>
                <input type='text' name='carParts_price' placeholder='np. 500 PLN' required/>
              </div>
            </div>
          </div>

          <h2>Dane sprzedającego</h2>
          <div className='announcement_car_and_parts_column'>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Twoje imię i nazwisko</label>
                <input type='text' name='carParts_name_user' placeholder='Imię i nazwisko' required/>
              </div>
              <div className='announcement_car_and_parts_input'>
                <label>Wpisz miasto</label>
                <input type='text' name='carParts_town' placeholder='np. Szczecin' required/>
              </div>
            </div>
            <div className='announcement_car_and_parts_row'>
              <div className='announcement_car_and_parts_input'>
                <label>Numer telefonu</label>
                <input type='text' name='carParts_phone' placeholder='Numer telefonu' required/>
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

export default CarParts
