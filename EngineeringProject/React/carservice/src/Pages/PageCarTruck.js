import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';
import '../Styles/CarInfo.css';

const PageCarTruck = (props) => {
  const [carTruck, setcarTruck] = useState(null);
  const carTruck_id = props.match.params.carTruck_id; 

  useEffect(() => {

    const apiUrl = `http://localhost:8080/api/cartruck/${carTruck_id}`;

    axios.get(apiUrl)
      .then((response) => {
        setcarTruck(response.data);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania szczegółowych danych o samochodzie:', error);
      });
  }, [carTruck_id]);

  if (!carTruck) {
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
          <h1>{carTruck.carTruck_title}</h1>
          <img src={carTruck.carTruck_photo} alt='Zdjęcie ogłoszenia' />
        </div>

        <h2>Szczegóły</h2>
        <div className='car_parameters'>
          <div className='car_parameters_column'>
            <span>Marka pojazdu: {carTruck.carTruck_mark}</span>
            <span>Model pojazdu: {carTruck.carTruck_model}</span>
            <span>Stan: {carTruck.carTruck_state}</span>
            <span>VIN: {carTruck.carTruck_vin}</span>
            <span>Przebieg: {carTruck.carTruck_mileage} km</span>
            <span>Rejestracja pojazdu: {carTruck.carTruck_vehicle_registration}</span>
            <span>Data pierwszej rejestracji: {carTruck.carTruck_data_first_vehicle_registration}</span>
            <span>Rok produkcji: {carTruck.carTruck_year}</span>
            <span>Rodzaj paliwa: {carTruck.carTruck_fuel}</span>
            <span>Moc: {carTruck.carTruck_power} KM</span>
          </div>
          <div className='car_parameters_column'>
            <span>Pojemność skokowa: {carTruck.carTruck_engine} cm3</span>
            <span>Skrzynia biegów: {carTruck.carTruck_gearbox}</span>
            <span>Emisja spalin: {carTruck.carTruck_emission} g/km</span>
            <span>Typ nadwozia: {carTruck.carTruck_car_body}</span>
            <span>Liczba miejsc: {carTruck.carTruck_int_place}</span>
            <span>Kolor: {carTruck.carTruck_color}</span>
            <span>Rodzaj koloru: {carTruck.carTruck_type_color}</span>
            <span>Pojemność(objętość): {carTruck.carTruck_cargo_capacity}</span>
            <span>Dopuszczalna masa całkowita: {carTruck.carTruck_cargo_weight}</span>
            <span>Dopuszczalna ładowność: {carTruck.carTruck_cargo_load}</span>
          </div>
        </div>

        <h2>Opis</h2>
        <div className='car_description'>
          <span>{carTruck.carTruck_description}</span>
        </div>

        <h2>Kontakt</h2>
        <div className='car_contact'>
          <span>Imię i nazwisko: {carTruck.carTruck_name_car}</span>
          <span>Miasto: {carTruck.carTruck_town}</span>
          <span>Telefon: {carTruck.carTruck_phone}</span>
        </div>

        <div className='car_price'>
          <span>Cena: {carTruck.carTruck_price} PLN</span>
        </div>
      </div>
    </div>
  </div>
  <Footer />
  </>

)}

export default PageCarTruck;

