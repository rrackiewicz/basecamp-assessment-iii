import React from 'react';

class Banner extends React.Component {

  render() {  
    return (
      <div className="wrapper">
      <div className = "jumbotron">
        <div className="titles float-left">
          <h1>Monster Arena Legends</h1>
          <p>Ready. Set. Die.</p>
          {this.props.isNewGame ? <button onClick={this.props.beginGame} className="btn btn-success btn-lg" >Begin</button> : null}
        </div>
        {!this.props.isNewGame ? (
          <div className="level float-right rounded">
            <h1 className="float-left">Level {this.props.level}</h1>
            <div className="round float-right rounded">
              <p className="float-left">Round: <span className="badge skillBadge badge-secondary">{this.props.round + ' / 3'}</span></p>
              <p className="float-left">Turn: <span className="badge skillBadge badge-secondary">{this.props.turn}</span></p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
    )
  }
}

export default Banner;