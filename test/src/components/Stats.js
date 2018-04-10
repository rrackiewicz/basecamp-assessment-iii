import React from 'react';
import Field from './Field'

class Stats extends React.Component {
  render() {  
    return (
      <div>
        {this.props.context === 'header' 
          ?
          <div className="stats">
            <div className="stcell center">BASE ATT</div>
            <div className="stcell center">BASE DEF</div>
            <div className="stcell center">BASE LUCK</div>
            <div className="stcell center">BASE INIT</div>
          </div>
          : null
        }
        {this.props.context === 'base' 
          ?
          <div className="stats base">
            <div className="stcell center"><Field val1={this.props.stats.attack} stat="att" lrg/></div> 
            <div className="stcell center"><Field val1={this.props.stats.defense} stat="def" lrg/></div>
            <div className="stcell center"><Field val1={this.props.stats.luck} stat="luck" lrg/></div>
            <div className="stcell center"><Field val1={this.props.stats.init} stat="init" lrg/></div>
          </div>
          : null
        }

        {/* Stub for additional contexts weapons/armor/buffs/debuffs */}
      </div>
    )
  }
}

export default Stats;