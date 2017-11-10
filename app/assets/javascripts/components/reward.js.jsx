var Reward = React.createClass({

    render(){
        return(
            <div className="reward">
                <div className="title">{this.props.reward.name}</div>
                <div className="price">- {this.props.reward.price} points</div>
            </div>
        )
    },
});
