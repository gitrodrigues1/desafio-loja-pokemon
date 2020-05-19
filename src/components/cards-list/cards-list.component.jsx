import React from 'react'
import './cards-list.styles.css'
import Card from '../card/card.component'

class CardsList extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemon : []

    }
  }

    componentDidMount() {
      fetch('https://pokeapi.co/api/v2/type/17')
      .then(response => response.json())
      .then(({pokemon}) => (this.setState({pokemon : pokemon})))
    }

    render() {
      console.log(this.state.pokemon)
      return(
        <div className="cards-list">
          {this.state.pokemon.map(poke =>
            <Card 
              name={poke.pokemon.name}
              url={poke.pokemon.url}
              id={poke.pokemon.url.slice(34,37)}
              price={poke.pokemon.url.slice(34,37)}
            />
          )}
        </div>
      )
    }
  }
  export default CardsList