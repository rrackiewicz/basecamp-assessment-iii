import React from 'react';
import Health from './Health';
import StatsPanel from './StatsPanel';
import ImagePanel from './ImagePanel';

class Player extends React.Component {

  render() {  
    return (
      <div className="playerPanel rounded float-left">
        <div className="playerImage rounded">
          <img src={require(`../images/${this.props.sex}.png`)} alt=""/>
          <Health 
            health={this.props.health}
          />
        </div>
        <h2 className="display-6">{this.props.player}</h2>
        <div className="stats">
          <div className="cell"><div className="red"></div></div>
          <div className="cell right">Attack:</div>
          <div className="cell center">{this.props.attack}</div>
          <div className="cell right">Bonus:</div>
          <div className="cell center">{this.props.attackBonus}</div>
          <div className="cell right"><a class="btn btn-outline-primary btn-sm" href="#" role="button">Attack</a></div>
          
          <div className="cell"><div className="blue"></div></div>
          <div className="cell right">Defense:</div>
          <div className="cell center">{this.props.defense}</div>
          <div className="cell right">Bonus:</div>
          <div className="cell center">{this.props.defenseBonus}</div>
          <div className="cell right"><a class="btn btn-outline-primary btn-sm" href="#" role="button">Defend</a></div>
          <div className="cell"><div className="green"></div></div>
         
          <div className="cell right">Healing:</div>
          <div className="cell center">{this.props.healing}</div>
          <div className="cell right">Bonus:</div>
          <div className="cell center">{this.props.healingBonus}</div>
          <div className="cell right"><a class="btn btn-outline-primary btn-sm" href="#" role="button">Heal</a></div>
          <div className="cell"><div className="purple"></div></div>
         
          <div className="cell right">Luck:</div>
          <div className="cell center">{this.props.luck}</div>
          <div className="cell right">Bonus:</div>
          <div className="cell center">{this.props.luckBonus}</div>
          <div className="cell"></div>
        </div>

        <div className="gems rounded">
          <div className="gcell center"><img src={require(`../images/red-gem.png`)} alt=""/> <span class="badge badge-secondary">{this.props.gems['red']}</span></div>
          <div className="gcell center"><img src={require(`../images/blue-gem.png`)} alt=""/> <span class="badge badge-secondary">{this.props.gems['blue']}</span></div>
          <div className="gcell center"><img src={require(`../images/green-gem.png`)} alt=""/> <span class="badge badge-secondary">{this.props.gems['green']}</span></div>
          <div className="gcell center"><img src={require(`../images/purple-gem.png`)} alt=""/> <span class="badge badge-secondary">{this.props.gems['purple']}</span></div>
          <div className="gcell center"><a class="btn btn-outline-primary btn-sm" href="#" role="button">Use</a></div>
          <div className="gcell center"><a class="btn btn-outline-primary btn-sm" href="#" role="button">Use</a></div>
          <div className="gcell center"><a class="btn btn-outline-primary btn-sm" href="#" role="button">Use</a></div>
          <div className="gcell center"><a class="btn btn-outline-primary btn-sm" href="#" role="button">Use</a></div>
        </div>
      </div>
    )
  }
}

export default Player;