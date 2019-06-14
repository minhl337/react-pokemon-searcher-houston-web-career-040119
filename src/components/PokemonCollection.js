import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  constructor(props){
    super(props)
  }


  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemons.map(mon=>{
          return <PokemonCard mon={mon}/>
        })}
      </Card.Group>
    )
  }
}

export default PokemonCollection
