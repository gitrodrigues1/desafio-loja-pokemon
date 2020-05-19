import React from 'react'
import './card.styles.css'
import ButtonCustom from '../button-custom/button-custom.component'

const Card = ({name, id, price}) => (
  <div className="card">  
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt=""/>
    <p>{name}</p>
    <p className='card-price'>{`R$ ${price}`}</p>
    <ButtonCustom name='Adicionar à Mochila'/>
  </div>
)
export default Card