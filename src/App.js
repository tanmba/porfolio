import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/courier-prime'
import '@fontsource/taviraj'
import 'animate.css/animate.min.css'
import Home from './layout/Home/index'
import Resume from './layout/Resume'
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/stuff" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
