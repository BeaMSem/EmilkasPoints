var SingleReward = React.createClass({

    getInitialState(){
        return({
            no_points: this.props.child.no_points,
            available: this.props.child.no_points >= this.props.reward.price
        })
    },
    renderRewardPrice(){
        return this.props.reward.price * (-1) + " points"
    },
    renderMissingPoints(){
        return 'still missing ' + ((this.state.no_points - this.props.reward.price) * (-1)) + ' points'
    },
    handleOnClick(){
        this.props.updatePoints((this.props.reward.price)*(-1))
    },
    render(){
        console.log('SingleReward- this.props');
        console.log(this.props);
        console.log('SingleReward- this.state');
        console.log(this.state);

        return(
            <div
                onClick={this.state.available ? this.handleOnClick : false}
                className="reward"
            >
                <div className="title">{this.props.reward.name}</div>
                <div className="price">{this.state.available ? this.renderRewardPrice() : this.renderMissingPoints()}</div>
            </div>
        )
    },
    componentWillReceiveProps(nextProps){
        console.log('nextProps');
        console.log(nextProps);
        this.setState({
            no_points: nextProps.child.no_points,
            available: nextProps.child.no_points >= nextProps.reward.price
        })
    }

});
{/*<%= react_component 'SingleReward',         %>*/}