import React from "react";
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems } from './actions/leads';



function App() {
  const [leads, setLeads] = React.useState([]);
  return (
    <>
    <div id="dashboard" className="App main_container">
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
    </>
  );
}

App.propTypes = {
  getLeads: PropTypes.func.isRequired,
  leads: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(mapStateToProps, { getItems })(App);