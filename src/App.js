import React, { Component } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';
import Footer from './components/Footer/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
        <AboutPage />
        <ProjectsPage />
        <CertificationsPage />
        <Footer />
      </div>
    );
  }
}

export default App;
