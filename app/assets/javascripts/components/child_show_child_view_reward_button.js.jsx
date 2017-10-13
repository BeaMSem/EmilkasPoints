var ChildRewardButton = React.createClass({
    getInitialState(){
        return({
            no_points: this.props.no_points,
            available: this.props.no_points >= this.props.reward.price
        })
    },
    renderRewardPrice(){
        return this.props.reward.price * (-1) + " points"
    },
    renderMissingAmountOfPoints(){
        var amount = (this.state.no_points - this.props.reward.price) * (-1);
        return 'still missing ' + amount + ' points'
    },
    handleOnClick(){
        this.props.updatePoints((this.props.reward.price)*(-1))
    },
    render(){
        // console.log('');
        // console.log('props');
        // console.log(this.props);
        // console.log('available');
        // console.log(this.props.no_points >= this.props.reward.price);
        return(
            <div
                className="child_single_reward"
                onClick={ this.state.available ? this.handleOnClick : null}
            >
                <div className="blocked_icon">x</div>
                <div className="content">
                    <div className="reward_name">
                        {this.props.reward.name}
                    </div>
                </div>
                <div className="content">
                    <div className="reward_price">
                        {this.state.available ? this.renderRewardPrice() : this.renderMissingAmountOfPoints() }
                    </div>
                </div>
            </div>
        )},
    componentWillReceiveProps(nextProps){
        console.log('nextProps');
        console.log(nextProps);
        this.setState({
            no_points: nextProps.no_points,
            available: nextProps.no_points >= nextProps.reward.price
        })
    }
});