import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state={
      allMons:[],
      pokemons:[],
      search:""
    }
  }

  componentWillMount(){
    fetch("http://localhost:3000/pokemon").then(res=>res.json())
    .then(data=>{
      this.setState({
        allMons:data,
        pokemons:data
      })
    })
  }

  filterMons=(e)=>{
    let search = e.toLowerCase()
    let newArr=this.state.pokemons.filter(x=>{
      x.name.includes(search)
    })
    debugger
    return newArr
  }

  newMon=(e)=>{
    console.log(e)
    this.setState({
      allMons:this.state.allMons.push(e)
    },()=>console.log(this.state.allMons))
  }

  setSearch=(arg,x)=>{
    let value = x.value
    this.setState({
      search:value.toLowerCase()
    })
    let newArr= this.state.allMons.filter(p =>
      p.name.includes(this.state.search)
    )
    if(newArr.length>0){
      this.setState({
        pokemons:newArr
      })
    }else{
      this.setState({
        pokemons:this.state.allMons
      })
    }

  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.setSearch, 500)} showNoResults={false} />
        <br />
        <PokemonForm newMon={this.newMon}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemons}/>
      </div>
    )
  }
}

export default PokemonPage
