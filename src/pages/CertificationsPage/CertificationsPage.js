import React, { Component } from 'react'
import './styles.css';
import Banner from '../../components/Banner/Banner';
import Skills from '../../components/Skills';

import certifications from './certifications';

export default class CertificationsPage extends Component {
  render() {
    return (
      <div id="certificationsPage">
        <Banner banner="Certifications" />
        <div >
          <Skills content={certifications} />
        </div>
      </div>
    )
  }
}
