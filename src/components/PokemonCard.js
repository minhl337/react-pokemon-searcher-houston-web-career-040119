import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isFront:true

    }
  }

  handleClick=()=>{
    this.setState({
      isFront:!this.state.isFront
    })
  }


  render() {
    let front;
    let back;
    let hp;
    if(this.props.mon.sprites){
      front=this.props.mon.sprites.front
  
    }else{
      front=this.props.mon.frontUrl
    }

    if(this.props.mon.sprites){
      back=this.props.mon.sprites.back
    }else{
      back=this.props.mon.backUrl
    }

    if(this.props.mon.stats){
      hp=this.props.mon.stats[5].value
    }else{
      hp=this.props.mon.hp
    }
    return (
        

      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            {this.state.isFront ?
            <img alt="oh no!" src={front}/>
            :
            <img alt="oh no!" src={back}/>
           }

            
          </div>
          <div className="content">
            <div className="header">{this.props.mon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
