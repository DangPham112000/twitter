import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import { useEffect, useReducer } from "react";
import AppReducer from "./reducers/AppReducer";
import AppContext from "./components/AppContext";
import axios from "axios";

function App() {
  const initialState = {user: null, posts: []};
  const [state, dispatch] = useReducer(AppReducer, initialState);
  
  useEffect(() => {
    async function getCurrentUser() {
      try {
        const token = localStorage.getItem('token');
        const option = {
          method: 'GET',
          url: '/api/v1/auth',
          headers: {
            authorization: 'Bearer ' + token,
          }
        }
        const response = await axios(option);
        const user = response.data.data.user;
        if (user) {
          dispatch({type: 'CURRENT_USER', payload: { userName: user.userName }})
        } else {
  
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCurrentUser();
  }, []);
  
  return (
    <Router>
      <AppContext.Provider value={{state, dispatch}}>
        <div className="container">
          <Header />
          <Routes>
            <Route path="login" element={ <Login /> } />
            <Route path="register" element={ <Register />} />
            <Route path="/" element={ <Main /> } />
            <Route path="*" element={ (<div>Page not found</div>) } />
          </Routes>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
