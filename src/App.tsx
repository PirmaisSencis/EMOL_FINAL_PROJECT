import { useState } from 'react'
import LayoutPage from './layoutPage'
import './App.css'
function App() {

  return (
    <>
    <LayoutPage title='Головна сторінка'>
      <h2>Це головна сторінка</h2>
      <a href="/register">Сторінка регістрації</a>
      <a href="/category">Сторінка категорій</a>
    </LayoutPage>
    </>
  )
}

export default App
