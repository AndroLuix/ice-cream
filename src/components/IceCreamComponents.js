import React, { useState } from 'react'
import { data } from '../data'
import Menu from './Menu';

const IceCreamComponents = () => {


  return (

    <div className="App">
      <section className=' section-center'>
        <h3>Nice Cream</h3>
        <Menu />
      </section>

      <section className='section-center'>
        <button className="btn">
          Add Your IceCream
        </button>
      </section>

    </div>
  )
}

export default IceCreamComponents