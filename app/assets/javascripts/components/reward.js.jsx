var Reward = React.createClass({

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
        let amount = (this.state.no_points - this.props.reward.price) * (-1);
        return 'still missing ' + amount + ' points'
    },
    render(){
        return(
            <div className="reward">
                <div className="title">{this.props.reward.name}</div>
                <div className="price">{this.state.available ? this.renderRewardPrice() : this.renderMissingPoints()}</div>
            </div>
        )
    },
});
