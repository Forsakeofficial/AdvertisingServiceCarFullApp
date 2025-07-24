import React, { useState } from 'react';
import '../Styles/ContainerCar.css';
import { Link } from "react-router-dom";
import { FaCarAlt, FaGasPump, FaCalendarAlt, FaSuperpowers, FaTachometerAlt, FaSlidersH, FaCog, FaTruck, FaTruckMoving } from 'react-icons/fa';

const ContainerCar = () => {
    const [activeContainer, setActiveSection] = useState('car_passenger_panel');
    const [searchResults, setSearchResults] = useState([]);
    const [SearchStart, setSearchStart] = useState(false);
  
  
    const car_passenger_API = 'http://localhost:8080/api/carpassenger/search';
    const car_truck_API = 'http://localhost:8080/api/cartruck/search';
    const car_HGV_API = 'http://localhost:8080/api/carhgv/search';
    const car_parts_API = 'http://localhost:8080/api/carparts/search';
  
  
    const handleSectionChange = (section) => {
        setActiveSection(section);
        setSearchResults([]); 
        setSearchStart(false); 
    };
  
    const handleSearchSubmit = async (event) => {
        event.preventDefault();
      
        setSearchStart(true);
      
        const formData = new FormData(event.target);
      
        const queryParams = new URLSearchParams();
        formData.forEach((value, key) => {
          if (value) {
            queryParams.append(key, value);
          }
        });
      
        let apiUrl = car_passenger_API;
        if (activeContainer === 'car_truck_panel') {
          apiUrl = car_truck_API;
        } else if (activeContainer === 'car_hgv_panel') {
          apiUrl = car_HGV_API;
        }
          else if (activeContainer === 'car_parts_panel') {
            apiUrl= car_parts_API;
        }
      
        const url = `${apiUrl}?${queryParams.toString()}`;
      
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            setSearchResults(data);
          } else {
            console.error('Błąd:', response.statusText);
          }
        } catch (error) {
          console.error('Błąd:', error);
        }
      };
      

  return (
    <>
    <div className='container_search_car' id='main'>
        <h2>Wyszukaj samochód lub część samochodową</h2>
        <div className='container_car_and_parts'>

            <div className='panel_cars_and_parts'>
                <div className={`car_passenger_panel ${activeContainer === 'car_passenger_panel' ? 'active' : ''}`} onClick={() => handleSectionChange('car_passenger_panel')}>
                    <p><FaCarAlt /> Samochody osobowe</p>
                </div>
                <div className={`car_truck_panel ${activeContainer === 'car_truck_panel' ? 'active' : ''}`} onClick={() => handleSectionChange('car_truck_panel')}>
                    <p><FaTruck /> Samochody dostawcze</p>
                </div>
                <div className={`car_hgv_panel ${activeContainer === 'car_hgv_panel' ? 'active' : ''}`} onClick={() => handleSectionChange('car_hgv_panel')}>
                    <p><FaTruckMoving /> Samochody ciężarowe</p>
                </div>
                <div className={`car_parts_panel ${activeContainer === 'car_parts_panel' ? 'active' : ''}`} onClick={() => handleSectionChange('car_parts_panel')}>
                    <p><FaCog /> Części samochodowe</p>
                </div>
            </div>

            <div className='car_panel_info'>
                {activeContainer === 'car_passenger_panel' && (
                    <>
                    <h2>Czego szukasz?</h2>

                    <form onSubmit={handleSearchSubmit}>
                        <div className='car_row'>
                            <div className='car_group'>
                                <label>Marka pojazdu</label>
                                <input type='text' name='mark_CarPassenger' placeholder='np. Volkswagen'/>
                            </div>

                            <div className='car_group'>
                                <label>Model pojazdu</label>
                                <input type='text' name='model_CarPassenger' placeholder='np. Golf'/>
                            </div>

                            <div className='car_group'>
                                <label>Typ nadwozia</label>
                                <input type='text' name='carBody_CarPassenger' placeholder='np. Hatchback'/>
                            </div>

                            <div className='car_group'>
                                <label>Cena</label>
                                <div className='car_input_group'>
                                <input type='text' name='minPrice_CarPassenger' placeholder='od'/>
                                <input type='text' name='maxPrice_CarPassenger' placeholder='do'/>
                                </div>
                            </div>
                        </div>

                        <div className='car_row'>
                            <div className='car_group'>
                                <label>Rok produkcji</label>
                                <div className='car_input_group'>
                                <input type='number' name='minYear_CarPassenger' placeholder='od'/>
                                <input type='number' name='maxYear_CarPassenger' placeholder='do'/>
                                </div>
                            </div>

                            <div className='car_group'>
                                <label>Rodzaj paliwa</label>
                                <input type='text' name='fuel_CarPassenger' placeholder='np. Benzyna'/>
                            </div>

                            <div className='car_group'>
                                <label>Przebieg</label>
                                <div className='car_input_group'>
                                    <input type='number' name='minMileage_CarPassenger' placeholder='od'/>
                                    <input type='number' name='maxMileage_CarPassenger' placeholder='do'/>
                                </div>
                            </div>
                            <div className='car_group'>
                                <label>Stan pojazdu</label>
                                <input type='text' name='state_CarPassenger' placeholder='np. Używany'/>
                            </div>
                        </div>

                        <div className='car_row'>
                            <div className='car_group'>
                                <label>Skrzynia biegów</label>
                                <input type='text' name='gearbox_CarPassenger' placeholder='np. Automatyczna'/>
                            </div>

                            <div className='car_group'>
                                <label>Pojemność skokowa</label>
                                <div className='car_input_group'>
                                    <input type='number' name='minEngine_CarPassenger' placeholder='od'/>
                                    <input type='number' name='maxEngine_CarPassenger' placeholder='do'/>
                                </div>
                            </div>

                            <div className='car_group'>
                                <label>Moc</label>
                                <div className='car_input_group'>
                                    <input type='number' name='minPower_CarPassenger' placeholder='od'/>
                                    <input type='number' name='maxPower_CarPassenger' placeholder='do'/>
                                </div>
                            </div>
                            <div className='car_group'>
                                <label></label>
                                <div className='car_input_group'>

                                </div>
                            </div>
                        </div>
                        <div className='car_form_search'>
                            <input type='submit' value='Wyszukaj' />            
                        </div>
                    </form>
                    {SearchStart && (
    <div className='search_results'>
    <h1>Wyszukane samochody osobowe: {searchResults.length}</h1>
      <div className='search_announcement_cars'>

        {searchResults.map((car, id) => (
          
          <div className='car_product' key={id}>
            <Link to={`/OgloszeniaSamochodowe/${car.carPassenger_id}`} target="_blank">
              <div className='car_product_img'>
                <img src={car.carPassenger_photo} alt='Zdjęcie samochodu' />
              </div>
              <div className='car_product_name'>
                <h3>{car.carPassenger_mark}</h3>
                <h3>{car.carPassenger_model}</h3>
                <span><FaCarAlt style={{ paddingTop: 3 + 'px' }} />Typ nadwozia: {car.carPassenger_car_body}</span>
                <span><FaCalendarAlt style={{ paddingTop: 3 + 'px' }} />Rok produkcji: {car.carPassenger_year}</span>
                <span><FaGasPump style={{ paddingTop: 3 + 'px' }} />Paliwo: {car.carPassenger_fuel}</span>
                <span><FaSuperpowers style={{ paddingTop: 3 + 'px' }} />Przebieg: {car.carPassenger_mileage} km</span>
                <span><FaCarAlt style={{ paddingTop: 3 + 'px' }} />Stan: {car.carPassenger_state}</span>
                <span><FaSlidersH style={{ paddingTop: 3 + 'px' }} />Skrzynia biegów: {car.carPassenger_gearbox}</span>
                <span><FaTachometerAlt style={{ paddingTop: 3 + 'px' }} />Pojemność skokowa: {car.carPassenger_engine} cm3</span>
                <span><FaTachometerAlt style={{ paddingTop: 3 + 'px' }} />Moc: {car.carPassenger_power} KM</span>
                <div className='car_product_price'>
                  <h3>{car.carPassenger_price} PLN</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}

      </div>
    </div>
    )}
                    </>
                )}

                {activeContainer === 'car_truck_panel' && (
                    <>
                    <h2>Czego szukasz?</h2>

                    <form onSubmit={handleSearchSubmit}>
                        <div className='car_row'>
                            <div className='car_group'>
                                <label>Marka pojazdu</label>
                                <input type='text' name='mark_CarTruck' placeholder='np. Fiat'/>
                            </div>

                            <div className='car_group'>
                                <label>Model pojazdu</label>
                                <input type='text' name='model_CarTruck' placeholder='np. Ducato'/>
                            </div>

                            <div className='car_group'>
                                <label>Typ nadwozia</label>
                                <input type='text' name='carBody_CarTruck' placeholder='np. Kontener'/>
                            </div>

                            <div className='car_group'>
                                <label>Cena</label>
                                <div className='car_input_group'>
                                <input type='text' name='minPrice_CarTruck' placeholder='od'/>
                                <input type='text' name='maxPrice_CarTruck' placeholder='do'/>
                                </div>
                            </div>
                        </div>

                        <div className='car_row'>
                            <div className='car_group'>
                                <label>Rok produkcji</label>
                                <div className='car_input_group'>
                                <input type='number' name='minYear_CarTruck' placeholder='od'/>
                                <input type='number' name='maxYear_CarTruck' placeholder='do'/>
                                </div>
                            </div>

                            <div className='car_group'>
                                <label>Rodzaj paliwa</label>
                                <input type='text' name='fuel_CarTruck' placeholder='np. Benzyna'/>
                            </div>

                            <div className='car_group'>
                                <label>Przebieg</label>
                                <div className='car_input_group'>
                                    <input type='number' name='minMileage_CarTruck' placeholder='od'/>
                                    <input type='number' name='maxMileage_CarTruck' placeholder='do'/>
                                </div>
                            </div>
                            <div className='car_group'>
                                <label>Stan pojazdu</label>
                                <input type='text' name='state_CarTruck' placeholder='np. Używany'/>
                            </div>
                        </div>

                        <div className='car_row'>
                            <div className='car_group'>
                                <label>Skrzynia biegów</label>
                                <input type='text' name='gearbox_CarTruck' placeholder='np. Automatyczna'/>
                            </div>

                            <div className='car_group'>
                                <label>Pojemność skokowa</label>
                                <div className='car_input_group'>
                                    <input type='number' name='minEngine_CarTruck' placeholder='od'/>
                                    <input type='number' name='maxEngine_CarTruck' placeholder='do'/>
                                </div>
                            </div>

                            <div className='car_group'>
                                <label>Moc</label>
                                <div className='car_input_group'>
                                    <input type='number' name='minPower_CarTruck' placeholder='od'/>
                                    <input type='number' name='maxPower_CarTruck' placeholder='do'/>
                                </div>
                            </div>
                            <div className='car_group'>
                                <label>Pojemność (objetość)</label>
                                <div className='car_input_group'>
                                    <input type='text' name='minCargoCapacity_CarTruck' placeholder='od'/>
                                    <input type='text' name='maxCargoCapacity_CarTruck' placeholder='do'/>
                                </div>
                            </div>
                        </div>
                        <div className='car_row'>
                        <div className='car_group'>
                                <label>Dopuszczalna masa całkowita</label>
                                <div className='car_input_group'>
                                    <input type='text' name='minCargoWeight_CarTruck' placeholder='od'/>
                                    <input type='text' name='maxCargoWeight_CarTruck' placeholder='do'/>
                                </div>
                            </div>

                            <div className='car_group'>
                                <label>Dopuszczalna ładowność</label>
                                <div className='car_input_group'>
                                    <input type='text' name='minCargoLoad_CarTruck' placeholder='od'/>
                                    <input type='text' name='maxCargoLoad_CarTruck' placeholder='do'/>
                                </div>
                            </div>

                            <div className='car_group'>
                                <label></label>
                                <div className='car_input_group'>
                                </div>
                            </div>
                            <div className='car_group'>
                                <label></label>
                                <div className='car_input_group'>
                                </div>
                            </div>
                        </div>
                        <div className='car_form_search'>
                            <input type='submit' value='Wyszukaj' />            
                        </div>
                    </form>
                    {SearchStart && (
    <div className='search_results'>
    <h1>Wyszukane samochody dostawcze: {searchResults.length}</h1>
      <div className='search_announcement_cars'>

        {searchResults.map((car, id) => (
          
          <div className='car_product' key={id}>
            <Link to={`/OgloszeniaDostawcze/${car.carTruck_id}`} target="_blank">
              <div className='car_product_img'>
                <img src={car.carTruck_photo} alt='Zdjęcie samochodu' />
              </div>
              <div className='car_product_name'>
                <h3>{car.carTruck_mark}</h3>
                <h3>{car.carTruck_model}</h3>
                <span><FaTruck style={{ paddingTop: 3 + 'px' }} />Typ nadwozia: {car.carTruck_car_body}</span>
                <span><FaCalendarAlt style={{ paddingTop: 3 + 'px' }} />Rok produkcji: {car.carTruck_year}</span>
                <span><FaGasPump style={{ paddingTop: 3 + 'px' }} />Paliwo: {car.carTruck_fuel}</span>
                <span><FaSuperpowers style={{ paddingTop: 3 + 'px' }} />Przebieg: {car.carTruck_mileage} km</span>
                <span><FaTruck style={{ paddingTop: 3 + 'px' }} />Stan: {car.carTruck_state}</span>
                <span><FaSlidersH style={{ paddingTop: 3 + 'px' }} />Skrzynia biegów: {car.carTruck_gearbox}</span>
                <span><FaTachometerAlt style={{ paddingTop: 3 + 'px' }} />Pojemność skokowa: {car.carTruck_engine} cm3</span>
                <span><FaTachometerAlt style={{ paddingTop: 3 + 'px' }} />Moc: {car.carTruck_power} KM</span>
                <span><FaTruck style={{paddingTop: 3 + 'px'}}/>Pojemność (objetość): {car.carTruck_cargo_capacity} m3</span>
                <span><FaTruck style={{paddingTop: 3 + 'px'}}/>Dopuszczalna masa całkowita: {car.carTruck_cargo_weight} kg</span>
                <span><FaTruck style={{paddingTop: 3 + 'px'}}/>Dopuszczalna ładowność: {car.carTruck_cargo_load} kg</span>
                <div className='car_product_price'>
                  <h3>{car.carTruck_price} PLN</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}

      </div>
    </div>
    )}
                    </>
                )}

{activeContainer === 'car_hgv_panel' && (
                    <>
                    <h2>Czego szukasz?</h2>

                    <form onSubmit={handleSearchSubmit}>
                        <div className='car_row'>
                            <div className='car_group'>
                                <label>Marka pojazdu</label>
                                <input type='text' name='mark_CarHGV' placeholder='np. Volvo'/>
                            </div>

                            <div className='car_group'>
                                <label>Model pojazdu</label>
                                <input type='text' name='model_CarHGV' placeholder='np. FH500 XL'/>
                            </div>

                            <div className='car_group'>
                                <label>Typ nadwozia</label>
                                <input type='text' name='carBody_CarHGV' placeholder='np. Ciągnik siodłowy'/>
                            </div>

                            <div className='car_group'>
                                <label>Cena</label>
                                <div className='car_input_group'>
                                <input type='text' name='minPrice_CarHGV' placeholder='od'/>
                                <input type='text' name='maxPrice_CarHGV' placeholder='do'/>
                                </div>
                            </div>
                        </div>

                        <div className='car_row'>
                            <div className='car_group'>
                                <label>Rok produkcji</label>
                                <div className='car_input_group'>
                                <input type='number' name='minYear_CarHGV' placeholder='od'/>
                                <input type='number' name='maxYear_CarHGV' placeholder='do'/>
                                </div>
                            </div>

                            <div className='car_group'>
                                <label>Rodzaj paliwa</label>
                                <input type='text' name='fuel_CarHGV' placeholder='np. Benzyna'/>
                            </div>

                            <div className='car_group'>
                                <label>Przebieg</label>
                                <div className='car_input_group'>
                                    <input type='number' name='minMileage_CarHGV' placeholder='od'/>
                                    <input type='number' name='maxMileage_CarHGV' placeholder='do'/>
                                </div>
                            </div>
                            <div className='car_group'>
                                <label>Stan pojazdu</label>
                                <input type='text' name='state_CarHGV' placeholder='np. Używany'/>
                            </div>
                        </div>

                        <div className='car_row'>
                            <div className='car_group'>
                                <label>Skrzynia biegów</label>
                                <input type='text' name='gearbox_CarHGV' placeholder='np. Automatyczna'/>
                            </div>

                            <div className='car_group'>
                                <label>Pojemność skokowa</label>
                                <div className='car_input_group'>
                                    <input type='number' name='minEngine_CarHGV' placeholder='od'/>
                                    <input type='number' name='maxEngine_CarHGV' placeholder='do'/>
                                </div>
                            </div>

                            <div className='car_group'>
                                <label>Moc</label>
                                <div className='car_input_group'>
                                    <input type='number' name='minPower_CarHGV' placeholder='od'/>
                                    <input type='number' name='maxPower_CarHGV' placeholder='do'/>
                                </div>
                            </div>
                            <div className='car_group'>
                                <label>Dopuszczalna masa całkowita</label>
                                <div className='car_input_group'>
                                    <input type='text' name='minCargoWeight_CarHGV' placeholder='od'/>
                                    <input type='text' name='maxCargoWeight_CarHGV' placeholder='do'/>
                                </div>
                            </div>
                        </div>
                        <div className='car_row'>
                        <div className='car_group'>
                                <label>Dopuszczalna ładowność</label>
                                <div className='car_input_group'>
                                    <input type='text' name='minCargoLoad_CarHGV' placeholder='od'/>
                                    <input type='text' name='maxCargoLoad_CarHGV' placeholder='do'/>
                                </div>
                            </div>

                            <div className='car_group'>
                                <label></label>
                                <div className='car_input_group'>
                                </div>
                            </div>

                            <div className='car_group'>
                                <label></label>
                                <div className='car_input_group'>
                                </div>
                            </div>
                            <div className='car_group'>
                                <label></label>
                                <div className='car_input_group'>
                                </div>
                            </div>
                        </div>
                        <div className='car_form_search'>
                            <input type='submit' value='Wyszukaj' />            
                        </div>
                    </form>
                    {SearchStart && (
    <div className='search_results'>
    <h1>Wyszukane samochody ciężarowe: {searchResults.length}</h1>
      <div className='search_announcement_cars'>

        {searchResults.map((car, id) => (
          
          <div className='car_product' key={id}>
            <Link to={`/OgloszeniaCiezarowe/${car.carHGV_id}`} target="_blank">
              <div className='car_product_img'>
                <img src={car.carHGV_photo} alt='Zdjęcie samochodu' />
              </div>
              <div className='car_product_name'>
                <h3>{car.carHGV_mark}</h3>
                <h3>{car.carHGV_model}</h3>
                <span><FaTruck style={{ paddingTop: 3 + 'px' }} />Typ nadwozia: {car.carHGV_car_body}</span>
                <span><FaCalendarAlt style={{ paddingTop: 3 + 'px' }} />Rok produkcji: {car.carHGV_year}</span>
                <span><FaGasPump style={{ paddingTop: 3 + 'px' }} />Paliwo: {car.carHGV_fuel}</span>
                <span><FaSuperpowers style={{ paddingTop: 3 + 'px' }} />Przebieg: {car.carHGV_mileage} km</span>
                <span><FaTruck style={{ paddingTop: 3 + 'px' }} />Stan: {car.carHGV_state}</span>
                <span><FaSlidersH style={{ paddingTop: 3 + 'px' }} />Skrzynia biegów: {car.carHGV_gearbox}</span>
                <span><FaTachometerAlt style={{ paddingTop: 3 + 'px' }} />Pojemność skokowa: {car.carHGV_engine} cm3</span>
                <span><FaTachometerAlt style={{ paddingTop: 3 + 'px' }} />Moc: {car.carHGV_power} KM</span>
                <span><FaTruck style={{paddingTop: 3 + 'px'}}/>Dopuszczalna masa całkowita: {car.carHGV_cargo_weight} kg</span>
                <span><FaTruck style={{paddingTop: 3 + 'px'}}/>Dopuszczalna ładowność: {car.carHGV_cargo_load} kg</span>
                <div className='car_product_price'>
                  <h3>{car.carHGV_price} PLN</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}

      </div>
    </div>
    )}
                    </>
                )}

{activeContainer === 'car_parts_panel' && (
                    <>
                    <h2>Czego szukasz?</h2>

                    <form onSubmit={handleSearchSubmit}>
                        <div className='car_row'>
                            <div className='car_group'>
                                <label>Kategoria części</label>
                                <input type='text' name='name_CarParts' placeholder='np. Klocki hamulcowe'/>
                            </div>

                            <div className='car_group'>
                                <label>Producent części</label>
                                <input type='text' name='manufacturer_CarParts' placeholder='np. ATE'/>
                            </div>

                            <div className='car_group'>
                                <label>Numer referencyjny</label>
                                <input type='text' name='manufacturer_reference_number_CarParts' placeholder='np. PL/PL5229419075/Q3'/>
                            </div>

                            <div className='car_group'>
                                <label>Stan części</label>
                                <input type='text' name='state_CarParts' placeholder='np. Używany'/>
                            </div>
                        </div>

                        <div className='car_row'>
                            <div className='car_group'>
                                <label>Cena</label>
                                <div className='car_input_group'>
                                <input type='text' name='minPrice_CarParts' placeholder='od'/>
                                <input type='text' name='maxPrice_CarParts' placeholder='do'/>
                                </div>
                            </div>

                            <div className='car_group'>
                            </div>

                            <div className='car_group'>
                                <div className='car_input_group'>
                                </div>
                            </div>
                            <div className='car_group'>
                            </div>
                        </div>

                        <div className='car_form_search'>
                            <input type='submit' value='Wyszukaj' />            
                        </div>
                    </form>
                    {SearchStart && (
    <div className='search_results'>
    <h1>Wyszukane części: {searchResults.length}</h1>
      <div className='search_announcement_cars'>

        {searchResults.map((car, id) => (
          
          <div className='car_product' key={id}>
            <Link to={`/OgloszeniaCzesci/${car.carParts_id}`} target="_blank">
              <div className='car_product_img'>
                <img src={car.carParts_photo} alt='Zdjęcie części' />
              </div>
              <div className='car_product_name'>
                <h3>{car.carParts_title}</h3>
                <span><FaCog style={{paddingTop: 3 + 'px'}}/> Kategoria: {car.carParts_name}</span>
                <span><FaCog style={{paddingTop: 3 + 'px'}}/>Producent: {car.carParts_manufacturer}</span>
                <span><FaCog style={{paddingTop: 3 + 'px'}}/>Numer referencyjny: {car.carParts_manufacturer_reference_number}</span>
                <span><FaCog style={{paddingTop: 3 + 'px'}}/>Stan: {car.carParts_state}</span>
                <div className='car_product_price'>
                  <h3>{car.carParts_price} PLN</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}

      </div>
    </div>
    )}
                    </>
                )}


            </div>
        </div>
    </div>
    </>
  );
};

export default ContainerCar;
