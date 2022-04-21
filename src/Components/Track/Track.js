import React from 'react';
import './Track.css';

class Track extends React.Component {

    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

// milli to minute changer
MinutesSeconds = (ms) => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

    //this modifies app.state.playlistTracks
    addTrack(e) {
        this.props.onAdd(this.props.track);
    }

    removeTrack(e) {
        this.props.onRemove(this.props.track);
    }

    renderAction() {
        return this.props.isRemoval ? <button onClick={this.removeTrack} className={"Track-action"}>-</button> : <button onClick={this.addTrack} className={"Track-action"}>+</button>;
    }

    render() {
        return (
            <div className="Track">
                <div className="Image-track"><img src={this.props.track.image} alt="title" /></div>
                <div className="Track-name">
                <h3>{this.props.track.name}</h3>
                </div>
                <div className="Track-information">
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                    <p>{this.MinutesSeconds(this.props.track.duration)}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}

export default Track;