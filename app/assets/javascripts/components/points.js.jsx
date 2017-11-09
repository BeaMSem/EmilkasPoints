var Points = React.createClass({

    // {    this.state.open ? 'true' : 'false'  }
    // {    this.setState({  })}
    // function(){console.log('function - '); console.log(); console.log(); return(<div>function</div>)},
    // console.log();
    // console.log();
    // this.props.xxxxxx
    // this.state.xxxxxx

    getInitialState(){
        return({ null })
    },
    handleOnClick(){
        this.props.updatePoints(this.props.points)
    },
    render(){
        console.log('Points- this.props');
        console.log(this.props);
        console.log('Points- this.state');
        console.log(this.state);

        return(
            <div className="additional_points" onClick={this.handleOnClick}>
                <div className="top">
                    <div className="number">{this.props.points}</div>
                    <div className="points_text">points</div>
                </div>
                <div className="bottom"><div className="add">Add</div></div>
            </div>
        )
    },

});
{/*<%= react_component 'XXXXXXX',         %>*/}