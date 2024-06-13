// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="container-fluid flex-grow-1 d-flex">
            <div className="row flex-nowrap flex-grow-1 w-100">
              <div className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                <Sidebar />
              </div>
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <Routes>
                  <Route path="/" element={<EmployeeList />} />
                  <Route path="/employees" element={<EmployeeList />} />
                  <Route path="/add" element={<AddEmployee />} />
                  <Route path="/edit/:id" element={<EditEmployee />} />
                </Routes>
              </main>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
