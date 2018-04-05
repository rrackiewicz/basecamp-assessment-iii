import React from 'react';

class GemsPanel extends React.Component {

  //would like to rebuild this with gem sub-components to reduce boilerplate
  render() {  
    return (
      <div className="gemsWrapper">
        <div className="gems rounded">
          <div className="gcell center"><img src={require(`../images/red-gem.png`)} alt=""/> <span className="badge gemBadge badge-secondary">{this.props.gems['red']}</span></div>
          <div className="gcell center"><img src={require(`../images/blue-gem.png`)} alt=""/> <span className="badge gemBadge badge-secondary">{this.props.gems['blue']}</span></div>
          <div className="gcell center"><img src={require(`../images/green-gem.png`)} alt=""/> <span className="badge gemBadge badge-secondary">{this.props.gems['green']}</span></div>
          <div className="gcell center"><img src={require(`../images/purple-gem.png`)} alt=""/> <span className="badge gemBadge badge-secondary">{this.props.gems['purple']}</span></div>
          <div className="gcell center"><img src={require(`../images/black-gem.png`)} alt=""/> <span className="badge gemBadge badge-secondary">{this.props.gems['black']}</span></div>
        </div>

       {this.props.context === 'player' ? (
        <div className="gemsButtons rounded">  
          <div className="gcell center">
           {/* Need to figure out how to use the classnames package to append to class names and cut down on all this boiler plate */}
            {!this.props.gems['red'] ? 
                <a className="btn btn-outline-primary btn-sm disabled" role="button" >Use</a>
              :
                <a className="btn btn-outline-primary btn-sm" href="#" role="button">Use</a>
              }
          </div>
          <div className="gcell center">
            {!this.props.gems['blue'] ? 
                <a className="btn btn-outline-primary btn-sm disabled" role="button">Use</a>  
              : 
                <a className="btn btn-outline-primary btn-sm" href="#" role="button">Use</a>
            }
          </div>
          <div className="gcell center">
            {!this.props.gems['green'] ? 
                <a className="btn btn-outline-primary btn-sm disabled" role="button">Use</a>
              :
                <a className="btn btn-outline-primary btn-sm" href="#" role="button">Use</a>
            }
          </div>
          <div className="gcell center">
            {!this.props.gems['purple'] ? 
              <a className="btn btn-outline-primary btn-sm disabled" role="button">Use</a>
              :
                <a className="btn btn-outline-primary btn-sm" href="#" role="button">Use</a>
            }
          </div>
          <div className="gcell center">
            {!this.props.gems['black'] ? 
              <a className="btn btn-outline-primary btn-sm disabled" role="button">Use</a>
              :
                <a className="btn btn-outline-primary btn-sm" href="#" role="button">Use</a>
            }
          </div>
        </div>
        ) : null }
      </div>
    )
  }
}

export default GemsPanel;