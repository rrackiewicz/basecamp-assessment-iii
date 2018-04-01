import React from 'react';

class Stats extends React.Component {

  render() {  
    return (
      <div className="wrapperBorder">
        <div className="stats">
          <div className="skcell center"><span className="red"></span> ATT PWR</div> 
          <div className="skcell center"><span className="blue"></span> DEF PWR</div>
          <div className="skcell center"><span className="green"></span> LUCK</div>
          <div className="skcell center"><span className="purple"></span> INITIATIVE</div> 
          <div className="skcell center"><span class="badge badge badge-secondary">{this.props.attack} [ {this.props.attack >= 0 ? '+' : null}{this.props.attackBonus} ]</span></div> 
          <div className="skcell center"><span class="badge badge badge-secondary">{this.props.defense} [ {this.props.defense >= 0 ? '+' : null}{this.props.defenseBonus} ]</span></div>
          <div className="skcell center"><span class="badge badge badge-secondary">{this.props.luck} [ {this.props.luck >= 0 ? '+' : null}{this.props.luckBonus} ]</span></div>
          <div className="skcell center"><span class="badge badge badge-secondary">{this.props.init} [ {this.props.init >= 0 ? '+' : null}{this.props.initBonus} ]</span></div>
        </div>
      </div>
    )
  }
}

export default Stats;