import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CarPassenger from '../Components/CarPassenger'; 
import CarTruck from '../Components/CarTruck';
import CarParts from '../Components/CarParts'
import CarHGV from '../Components/CarHGV';
import '../Styles/NewAnnouncement.css';

const NewAnnouncement = () => {
    const [selectedOption, setSelectedOption] = useState('Osobowe');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
}

const renderComponent = () => {
    if(selectedOption === 'Osobowe'){
        return <CarPassenger />;
    } else if(selectedOption === 'Dostawcze'){
        return <CarTruck />;
    } else if(selectedOption === 'Ciężarowe'){
        return <CarHGV />;
    } else if(selectedOption === 'Części'){
        return <CarParts />
    }
}

return(
    <>
    <Navbar />
    <div className='container_announcement'>
        <div className='announcement'>
            <h1>Stwórz ogłoszenie</h1>
            <select className='select_car_part' onChange={handleOptionChange} value={selectedOption}>
                <option>Osobowe</option>
                <option>Dostawcze</option>
                <option>Ciężarowe</option>
                <option>Części</option>
            </select>
            {renderComponent()}
        </div>
    </div>
    <Footer /> 
    </>
)}

export default NewAnnouncement;