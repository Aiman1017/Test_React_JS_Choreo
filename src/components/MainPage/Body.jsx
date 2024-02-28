
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from '../../pages/ErrorPage'
import Home from '../../pages/HomePage'
import SignIn from '../../pages/SignInPage'
import GettingStarted from '../../pages/GetStarted'
import APICatalogue from '../../pages/APICatalog'
import Guides from '../../pages/Guides'
import Announcements from '../../pages/Announcements'
import APICertification from '../../pages/APICertification'
import Support from '../../pages/Support'
import Locations from '../../pages/Locations'

export default function Body() {
    return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={ <Home/>} />
              <Route path='/SignIn' element = {<SignIn/>} />
              <Route path='/Getting-Started' element={<GettingStarted/>}/>
              <Route path='/API-Catalog' element={<APICatalogue/>} />
              <Route path='/Guides' element={<Guides/>} />
              <Route path='/Announcments' element={<Announcements/>} />
              <Route path='/API-Certification' element={<APICertification/>} />
              <Route path='/Support' element={<Support/>} />
              <Route path='/Locations' element={<Locations/>} />
              <Route path="*" element={ <ErrorPage/>}/>
            </Routes>
          </BrowserRouter>
        </>
      )
}