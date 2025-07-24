import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styles/CarInfo.css';
import Loader from '../Components/Loader'

const PageCarPassenger = (props) => {
    const [carPassenger, setcarPassenger] = useState(null);
    const carPassenger_id = props.match.params.carPassenger_id; 

    useEffect(() => {

        const apiUrl = `http://localhost:8080/api/carpassenger/${carPassenger_id}`;
    
        axios.get(apiUrl)
          .then((response) => {
            setcarPassenger(response.data);
          })
          .catch((error) => {
            console.error('Błąd podczas pobierania szczegółowych danych o samochodzie:', error);
          });
      }, [carPassenger_id]);
    
      if (!carPassenger) {
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
                        <h1>{carPassenger.carPassenger_title}</h1>
                        <img src={carPassenger.carPassenger_photo} alt='Zdjęcie ogłoszenia' />
                    </div>

                    <h2>Szczegóły</h2>
                    <div className='car_parameters'>
                        <div className='car_parameters_column'>
                            <span>Marka pojazdu: {carPassenger.carPassenger_mark}</span>
                            <span>Model pojazdu: {carPassenger.carPassenger_model}</span>
                            <span>Stan: {carPassenger.carPassenger_state}</span>
                            <span>VIN: {carPassenger.carPassenger_vin}</span>
                            <span>Przebieg: {carPassenger.carPassenger_mileage} km</span>
                            <span>Rejestracja pojazdu: {carPassenger.carPassenger_vehicle_registration}</span>
                            <span>Data pierwszej rejestracji: {carPassenger.carPassenger_data_first_vehicle_registration}</span>
                            <span>Rok produkcji: {carPassenger.carPassenger_year}</span>
                            <span>Rodzaj paliwa: {carPassenger.carPassenger_fuel}</span>
                            <span>Moc: {carPassenger.carPassenger_power} KM</span>
                        </div>
                        <div className='car_parameters_column'>
                            <span>Pojemność skokowa: {carPassenger.carPassenger_engine} cm3</span>
                            <span>Liczba drzwi: {carPassenger.carPassenger_doors}</span>
                            <span>Skrzynia biegów: {carPassenger.carPassenger_gearbox}</span>
                            <span>Napęd: {carPassenger.carPassenger_car_drive}</span>
                            <span>Emisja spalin: {carPassenger.carPassenger_emission} g/km</span>
                            <span>Typ nadwozia: {carPassenger.carPassenger_car_body}</span>
                            <span>Liczba miejsc: {carPassenger.carPassenger_int_place}</span>
                            <span>Kolor: {carPassenger.carPassenger_color}</span>
                            <span>Rodzaj koloru: {carPassenger.carPassenger_type_color}</span>
                        </div>
                    </div>

                    <h2>Opis</h2>
                    <div className='car_description'>
                        <span>{carPassenger.carPassenger_description}</span>
                    </div>

                    <h2>Kontakt</h2>
                    <div className='car_contact'>
                        <span>Imię i nazwisko: {carPassenger.carPassenger_name_car}</span>
                        <span>Miasto: {carPassenger.carPassenger_town}</span>
                        <span>Telefon: {carPassenger.carPassenger_phone}</span>
                    </div>

                    <div className='car_price'>
                        <span>Cena: {carPassenger.carPassenger_price} PLN</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
      )
}

export default PageCarPassenger;