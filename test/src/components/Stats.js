import React from 'react';

class Stats extends React.Component {

 /*  manageContext = () => {
    switch (this.props.context) {
      case 'header':
        //return some html;
      break;
      case 'base':
        //return some html;
      break;
      case 'weapon':
        //return some html;
      break;
      case 'buff':
        //return some html;
      break;
      case 'debuff':
       //return some html;
      break;
    }
  } */

  render() {  
    return (
      <div>
        {this.props.context === 'header' 
          ?
          <div className="stats">
            <div className="stcell center"><span className="red"></span> BASE ATT</div>
            <div className="stcell center"><span className="blue"></span> BASE DEF</div>
            <div className="stcell center"><span className="green"></span> BASE LUCK</div>
            <div className="stcell center"><span className="purple"></span> BASE INIT</div>
          </div>
          : null
        }
        {this.props.context === 'base' 
          ?
          <div className="stats base">
            <div className="stcell center"><span className="badge statBadge badge-secondary">{this.props.stats.attack}</span></div> 
            <div className="stcell center"><span className="badge statBadge badge-secondary">{this.props.stats.defense}</span></div>
            <div className="stcell center"><span className="badge statBadge badge-secondary">{this.props.stats.luck}</span></div>
            <div className="stcell center"><span className="badge statBadge badge-secondary">{this.props.stats.init}</span></div>
          </div>
          : null
        }

        {/* Stub for additional contexts weapons/armor/buffs/debuffs */}
      </div>
    )
  }
}

export default Stats;