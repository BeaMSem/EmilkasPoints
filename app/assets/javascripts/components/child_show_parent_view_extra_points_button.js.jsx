var ChildExtraPoints = React.createClass({

    getInitialState(){
        return({
            points: this.props.points
        });
    },
    handleOnClick(){
        this.props.updatePoints(this.state.points)
    },
    render(){
        // console.log('this.state');
        // console.log(this.state);
        // console.log('this.props');
        // console.log(this.props);
        return(
            <div onClick={this.handleOnClick} className="extra_points_single_box">
                {this.state.points}
            </div>

        )
    }

});