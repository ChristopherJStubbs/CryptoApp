// From Libraries and React
import React, { Component } from 'react';
import './App.css';
// import styled from 'styled-components';

//From Context API
import AppProvider from './providers/AppProvider';

// From other Componenets
import Settings from './Settings';
import Content from './Shared/Content';
import AppLayout from './layout/AppLayout';
import Navbar from './layout/Navbar';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
        <AppLayout>
            <AppProvider>
                <Navbar />
                <hr/>
                <Content>
                    <Settings />
                    <Dashboard />
                </Content>
            </AppProvider>
        </AppLayout>
    );
  }
}

export default App;
