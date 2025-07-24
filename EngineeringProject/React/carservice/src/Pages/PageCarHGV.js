import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styles/CarInfo.css';
import Loader from '../Components/Loader';

const PageCarHGV = (props) => {
  const [carHGV, setcarHGV] = useState(null);
  const carHGV_id = props.match.params.carHGV_id; 

  useEffect(() => {

    const apiUrl = `http://localhost:8080/api/carhgv/${carHGV_id}`;

    axios.get(apiUrl)
      .then((response) => {
        setcarHGV(response.data);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania szczegółowych danych o samochodzie:', error);
      });
  }, [carHGV_id]);

  if (!carHGV) {
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
          <h1>{carHGV.carHGV_title}</h1>
          <img src={carHGV.carHGV_photo} alt='Zdjęcie ogłoszenia' />
        </div>

        <h2>Szczegóły</h2>
        <div className='car_parameters'>
          <div className='car_parameters_column'>
            <span>Marka pojazdu: {carHGV.carHGV_mark}</span>
            <span>Model pojazdu: {carHGV.carHGV_model}</span>
            <span>Stan: {carHGV.carHGV_state}</span>
            <span>VIN: {carHGV.carHGV_vin}</span>
            <span>Przebieg: {carHGV.carHGV_mileage} km</span>
            <span>Rejestracja pojazdu: {carHGV.carHGV_vehicle_registration}</span>
            <span>Data pierwszej rejestracji: {carHGV.carHGV_data_first_vehicle_registration}</span>
            <span>Rok produkcji: {carHGV.carHGV_year}</span>
            <span>Rodzaj paliwa: {carHGV.carHGV_fuel}</span>
            <span>Moc: {carHGV.carHGV_power} KM</span>
          </div>
          <div className='car_parameters_column'>
            <span>Pojemność skokowa: {carHGV.carHGV_engine} cm3</span>
            <span>Skrzynia biegów: {carHGV.carHGV_gearbox}</span>
            <span>Emisja spalin: {carHGV.carHGV_emission} g/km</span>
            <span>Typ nadwozia: {carHGV.carHGV_car_body}</span>
            <span>Liczba miejsc: {carHGV.carHGV_int_place}</span>
            <span>Kolor: {carHGV.carHGV_color}</span>
            <span>Rodzaj koloru: {carHGV.carHGV_type_color}</span>
            <span>Pojemność(objętość): {carHGV.carHGV_cargo_capacity}</span>
            <span>Dopuszczalna masa całkowita: {carHGV.carHGV_cargo_weight}</span>
            <span>Dopuszczalna ładowność: {carHGV.carHGV_cargo_load}</span>
          </div>
        </div>

        <h2>Opis</h2>
        <div className='car_description'>
          <span>{carHGV.carHGV_description}</span>
        </div>

        <h2>Kontakt</h2>
        <div className='car_contact'>
          <span>Imię i nazwisko: {carHGV.carHGV_name_car}</span>
          <span>Miasto: {carHGV.carHGV_town}</span>
          <span>Telefon: {carHGV.carHGV_phone}</span>
        </div>

        <div className='car_price'>
          <span>Cena: {carHGV.carHGV_price} PLN</span>
        </div>
      </div>
    </div>
  </div>
  <Footer />
  </>

)}

export default PageCarHGV;

