import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styles/CarInfo.css';
import Loader from '../Components/Loader';

const PageCarPart = (props) => {
    const [carParts, setcarParts] = useState(null);
    const carParts_id = props.match.params.carParts_id;

    useEffect(() => {

        const apiUrl = `http://localhost:8080/api/carparts/${carParts_id}`;
    
        axios.get(apiUrl)
          .then((response) => {
            setcarParts(response.data);
          })
          .catch((error) => {
            console.error('Błąd podczas pobierania szczegółowych danych o samochodzie:', error);
          });
      }, [carParts_id]);
    
      if (!carParts) {
        return (
          <>
          <Navbar />
          <Loader />
          <Footer />
          </>
        )
      }
    
      return(
        <>
        <Navbar />
        <div className='container_page_car'>
            <div className='page_car_info'>
                <div className='car_info'>
                    <div className='car_header'>
                        <h1>{carParts.carParts_title}</h1>
                        <img src={carParts.carParts_photo} alt='Zdjęcie ogłoszenia' />
                    </div>

                    <h2>Szczegóły</h2>
                    <div className='car_parameters'>
                        <div className='car_parameters_column'>
                            <span>Kategoria: {carParts.carParts_name}</span>
                            <span>Stan: {carParts.carParts_state}</span>
                        </div>
                        <div className='car_parameters_column'>
                            <span>Producent: {carParts.carParts_manufacturer}</span>
                            <span>Numer referyncyjny producenta: {carParts.carParts_manufacturer_reference_number}</span>
                        </div>
                    </div>

                    <h2>Opis</h2>
                    <div className='car_description'>
                        <span>{carParts.carParts_description}</span>
                    </div>

                    <h2>Kontakt</h2>
                    <div className='car_contact'>
                        <span>Imię i nazwisko: {carParts.carParts_name_user}</span>
                        <span>Miasto: {carParts.carParts_town}</span>
                        <span>Telefon: {carParts.carParts_phone}</span>
                    </div>

                    <div className='car_price'>
                        <span>Cena: {carParts.carParts_price} PLN</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
      )
}

export default PageCarPart;