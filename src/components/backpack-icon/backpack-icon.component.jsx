import React from 'react'
import './backpack-icon.styles.css'
import {GiBackpack} from 'react-icons/gi'

const BackpackIcon = () => (
  <div className="backpack-icon">
    <GiBackpack className='gibackpack-icon'/>
    <span className='item-count'>0</span>
  </div>
)
export default BackpackIcon