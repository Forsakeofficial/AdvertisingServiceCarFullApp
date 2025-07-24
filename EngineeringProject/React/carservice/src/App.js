import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Contact from './Pages/Contact';
import LoginAndRegister from './Pages/LoginAndRegister';
import Account from './Pages/Account';
import NewAnnouncement from './Pages/NewAnnouncement';
import PageCarPasssenger from './Pages/PageCarPasssenger';
import PageCarTruck from './Pages/PageCarTruck';
import PageCarHGV from './Pages/PageCarHGV';
import PageCarPart from './Pages/PageCarPart';
import PageEditCarPassenger from './Pages/PageEditCarPassenger';
import PageEditCarHGV from './Pages/PageEditCarHGV';
import PageEditCarTruck from './Pages/PageEditCarTruck';
import PageEditCarParts from './Pages/PageEditCarParts';



import { isUserLoggedIn } from './Components/Auth'; // Importuj funkcję do sprawdzania uwierzytelnienia

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = isUserLoggedIn(); // Sprawdź, czy użytkownik jest zalogowany
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/Logowanie" />
      }
    />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Kontakt" component={Contact} />
        <Route exact path="/Logowanie" component={LoginAndRegister} />
        <Route
          exact
          path="/OgloszeniaSamochodowe/:carPassenger_id"
          component={PageCarPasssenger}
        />
        <Route
          exact
          path="/OgloszeniaDostawcze/:carTruck_id"
          component={PageCarTruck}
        />
        <Route
          exact
          path="/OgloszeniaCiezarowe/:carHGV_id"
          component={PageCarHGV}
        />
        <Route
          exact
          path="/OgloszeniaCzesci/:carParts_id"
          component={PageCarPart}
        />

        <Route
          exact
          path="/OgloszeniaCiezarowe/Edytowanie/:carHGV_id"
          component={PageEditCarHGV}
        />

        <Route
          exact
          path="/OgloszeniaSamochodowe/Edytowanie/:carPassenger_id"
          component={PageEditCarPassenger}
        />

        <Route
          exact
          path="/OgloszeniaCzesci/Edytowanie/:carParts_id"
          component={PageEditCarParts}
        />

        
        <Route
          exact
          path="/OgloszeniaDostawcze/Edytowanie/:carTruck_id"
          component={PageEditCarTruck}
        />
        
        

        {/* Wykorzystaj PrivateRoute dla stron wymagających zalogowania */}
        <PrivateRoute exact path="/Konto" component={Account} />
        <PrivateRoute exact path="/DodajOgloszenie" component={NewAnnouncement} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
