import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import NavBarItem from '../components/NavBar/NavBarItem/NavBarItem';

 function AppLayout() {
    return (
            <div className="App">
              <NavBar>
                <NavBarItem title="Home" to="/" />
                <NavBarItem title="About" to="/About"/>
                <NavBarItem title="Fishes" to="/Fishes"/>
              </NavBar>
        <Outlet />
              {/* <FishWrapper fishes={fishes}></FishWrapper> */}
            </div>
          );
    }

    export default AppLayout;