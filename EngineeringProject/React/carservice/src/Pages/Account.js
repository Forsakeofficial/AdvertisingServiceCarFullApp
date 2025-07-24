import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styles/Account.css';
import { Link } from "react-router-dom";
import { FaUserAlt, FaEnvelope } from 'react-icons/fa';
import { logout } from '../Components/Auth';

class Account extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: null,
            userAnnouncements: {
                carHGV: [],
                carPassenger: [],
                carTruck: [],
                carParts: [],
            },
            userToken: localStorage.getItem('accessToken'),
            selectedAnnouncement: null,
        };
    }

    componentDidMount() {
        if (this.state.userToken) {
            this.fetchUserAnnouncements();
        }
    }

    fetchUserAnnouncements = async () => {
        try {
            const token = this.state.userToken;
            console.log(token)
            if (!token) {
                return;
            }

            const response = await fetch('http://localhost:8080/api/user/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                const userId = data.user_id;
                this.setState({ userData: data });

                // Fetch announcements for each type
                this.fetchAnnouncementsForType(userId, 'carHGV', token);
                this.fetchAnnouncementsForType(userId, 'carPassenger', token);
                this.fetchAnnouncementsForType(userId, 'carTruck', token);
                this.fetchAnnouncementsForType(userId, 'carParts', token);
            }
        } catch (error) {
            console.error('Błąd pobierania danych użytkownika', error);
        }
    }

    fetchAnnouncementsForType = async (userId, type, token) => {
        try {
            const endpoint = `http://localhost:8080/api/${type.toLowerCase()}/ogloszenia`;

            const response = await fetch(`${endpoint}/${userId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const announcements = await response.json();

                // Update the state with the fetched announcements
                this.setState(prevState => ({
                    userAnnouncements: {
                        ...prevState.userAnnouncements,
                        [type]: announcements,
                    }
                }));
            }
        } catch (error) {
            console.error(`Błąd pobierania ogłoszeń użytkownika (${type})`, error);
        }
    }

    handleLogout = () => {
        logout();
        window.location.href = '/Logowanie';
    }

    handleDelete = (type, announcementId) => {
        const { userToken } = this.state;

        if (!userToken || !announcementId) {
            return;
        }

        // Wybierz odpowiedni endpoint dla typu ogłoszenia
        let deleteEndpoint;
        switch (type) {
            case 'carHGV':
                deleteEndpoint = `http://localhost:8080/api/carhgv/${announcementId}`;
                break;
            case 'carPassenger':
                deleteEndpoint = `http://localhost:8080/api/carpassenger/${announcementId}`;
                break;
            case 'carTruck':
                deleteEndpoint = `http://localhost:8080/api/cartruck/${announcementId}`;
                break;
            case 'carParts':
                deleteEndpoint = `http://localhost:8080/api/carparts/${announcementId}`;
                break;
            default:
                // Obsługa innych typów ogłoszeń, jeśli to konieczne
                break;
        }

        fetch(deleteEndpoint, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${userToken}`,
            },
        })
            .then(response => {
                if (response.ok) {
                    // Usunięto ogłoszenie pomyślnie, możesz zaktualizować stan komponentu
                    this.fetchUserAnnouncements();
                } else {
                    console.error('Błąd usuwania ogłoszenia');
                }
            })
            .catch(error => {
                console.error('Błąd usuwania ogłoszenia', error);
            });
    };
    handleEdit = (type, id) => {
        let editRoute = '';
        switch (type) {
            case 'carHGV':
                editRoute = `/OgloszeniaCiezarowe/Edytowanie/${id}`;
                break;
            case 'carParts':
                editRoute = `/OgloszeniaCzesci/Edytowanie/${id}`;
                break;
            case 'carPassenger':
                editRoute = `/OgloszeniaSamochodowe/Edytowanie/${id}`;
                break;
            case 'carTruck':
                editRoute = `/OgloszeniaDostawcze/Edytowanie/${id}`;
                break;
            default:
                break;
        }
    
        if (editRoute) {
            // Otwórz nową kartę przeglądarki, przekierowując użytkownika do formularza edycji ogłoszenia.
            const editUrl = `${window.location.origin}${editRoute}`;
            window.open(editUrl, '_blank');
        }
    };
    
    
    
    
    renderAnnouncements(type) {
        const { userAnnouncements } = this.state;
        const announcements = userAnnouncements[type];
    
        return (
            <div className='account_announcement_cars'>
                {announcements.map((car, id) => (
                    <div className='account_car_product' key={id}>
                        <Link to={`/${type === 'carHGV' ? 'OgloszeniaCiezarowe' : (type === 'carPassenger' ? 'OgloszeniaSamochodowe' : (type === 'carTruck' ? 'OgloszeniaDostawcze' : 'OgloszeniaCzesci'))}/${type === 'carHGV' ? car.carHGV_id : (type === 'carPassenger' ? car.carPassenger_id : (type === 'carTruck' ? car.carTruck_id : car.carParts_id))}`} target="_blank">
                            <div className='account_car_img'>
                                <img src={type === 'carHGV' ? car.carHGV_photo : (type === 'carPassenger' ? car.carPassenger_photo : (type === 'carTruck' ? car.carTruck_photo : car.carParts_photo))} alt='Zdjęcie samochodu' />
                            </div>
                            <div className='account_car_name'>
                                <h2>{type === 'carHGV' ? car.carHGV_title : (type === 'carPassenger' ? car.carPassenger_title : (type === 'carTruck' ? car.carTruck_title : car.carParts_title))}</h2>
                            </div>
                            </Link>
                            <div className='account_car_buttons'>
                                {type === 'carHGV' && (
                                    <>
                                        <button onClick={() => this.handleDelete(type, car.carHGV_id)}>Usuń</button>
                                        <button onClick={() => this.handleEdit(type, car.carHGV_id)}>Edytuj</button>
                                    </>
                                )}
                                {type === 'carPassenger' && (
                                    <>
                                        <button onClick={() => this.handleDelete(type, car.carPassenger_id)}>Usuń</button>
                                        <button onClick={() => this.handleEdit(type, car.carPassenger_id)}>Edytuj</button>
                                    </>
                                )}
                                {type === 'carTruck' && (
                                    <>
                                        <button onClick={() => this.handleDelete(type, car.carTruck_id)}>Usuń</button>
                                        <button onClick={() => this.handleEdit(type, car.carTruck_id)}>Edytuj</button>
                                    </>
                                )}
                                {type === 'carParts' && (
                                    <>
                                        <button onClick={() => this.handleDelete(type, car.carParts_id)}>Usuń</button>
                                        <button onClick={() => this.handleEdit(type, car.carParts_id)}>Edytuj</button>
                                    </>
                                )}
                            </div>
                    </div>
                ))}
            </div>
        );
    }
    
    
    
    

    render() {
        const { userData } = this.state;

        return (
            <>
                <Navbar />
                <div className='container_account'>
                    <div className='account_login_panel'>
                        <h1>Witaj {userData ? userData.username : 'Jakub'} !</h1>
                        <input type='submit' value='Wyloguj się' onClick={this.handleLogout} />
                    </div>
                    <div className='account_data'>
                        <h1>Twoje dane</h1>
                        <h3><FaUserAlt style={{ paddingTop: 5 + 'px' }} /> Imię i nazwisko: {userData ? userData.name : ''}</h3>
                        <h3><FaEnvelope style={{ paddingTop: 5 + 'px' }} /> E-mail: {userData ? userData.email : ''}</h3>
                    </div>
                    <div className='account_announcement'>
                        <h1>Twoje ogłoszenia - Samochody ciężarowe</h1>
                        {this.renderAnnouncements('carHGV')}
                    </div>
                    <div className='account_announcement'>
                        <h1>Twoje ogłoszenia - Samochody osobowe</h1>
                        {this.renderAnnouncements('carPassenger')}
                    </div>
                    <div className='account_announcement'>
                        <h1>Twoje ogłoszenia - Samochody dostawcze</h1>
                        {this.renderAnnouncements('carTruck')}
                    </div>
                    <div className='account_announcement'>
                        <h1>Twoje ogłoszenia - Części samochodowe</h1>
                        {this.renderAnnouncements('carParts')}
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Account;
