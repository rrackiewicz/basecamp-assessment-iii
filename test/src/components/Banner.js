import React from 'react';

class Banner extends React.Component {

  render() {  
    return (
      <div className="wrapper">
        <div className="jumbotron">
          <div className = "sign float-left">
            <h1 className="display-5">Monster Arena Legends</h1>
            {/* Let's have each word appear in turn using SetTimeout */}
            <p className="lead">Ready. Set. Die.</p>
            {/* Let's have this toggle into quit button */}
            {this.props.isNewGame ? <a onClick={this.props.beginGame} className="btn btn-success btn-lg" href="#" role="button">Begin</a> : null}
          </div>
          {!this.props.isNewGame ? (
          <div className="level float-right rounded">
            <h1>Level {this.props.level}</h1>
          </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default Banner;