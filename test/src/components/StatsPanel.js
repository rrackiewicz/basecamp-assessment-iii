import React from 'react';

class StatsPanel extends React.Component {

  render() {  
    return (
      <div className="stats">
        <div className="cell"><div className="red"></div></div>
        <div className="cell right">Attack:</div>
        <div className="cell center">{this.props.attack}</div>
        <div className="cell right">Bonus:</div>
        <div className="cell center">{this.props.attackBonus}</div>
        <div className="cell right">
        {(this.props.context === 'player')
          ?
            <a class="btn btn-outline-primary btn-sm" href="#" role="button">Attack</a>
          :
            null }
        </div>
        
        <div className="cell"><div className="blue"></div></div>
        <div className="cell right">Defense:</div>
        <div className="cell center">{this.props.defense}</div>
        <div className="cell right">Bonus:</div>
        <div className="cell center">{this.props.defenseBonus}</div>
        <div className="cell right">
        {(this.props.context === 'player')
          ?
            <a class="btn btn-outline-primary btn-sm" href="#" role="button">Defend</a>
          :
            null }
        </div>

        <div className="cell"><div className="green"></div></div>
        <div className="cell right">Healing:</div>
        <div className="cell center">{this.props.healing}</div>
        <div className="cell right">Bonus:</div>
        <div className="cell center">{this.props.healingBonus}</div>
        <div className="cell right">
        {(this.props.context === 'player')
          ?
            <a class="btn btn-outline-primary btn-sm" href="#" role="button">Heal</a>
          :
            null }
        </div>
        
        <div className="cell"><div className="purple"></div></div>
        <div className="cell right">Luck:</div>
        <div className="cell center">{this.props.luck}</div>
        <div className="cell right">Bonus:</div>
        <div className="cell center">{this.props.luckBonus}</div>
        <div className="cell"></div>
      </div>
    )
  }
}

export default StatsPanel;