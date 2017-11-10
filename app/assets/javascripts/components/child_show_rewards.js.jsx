var ChildShowRewards = React.createClass({

    renderSingleReward(reward){
        return(
            <Reward
                key = {reward.id}
                reward = {reward}
                child = {this.props.child}
                updatePoints = {this.props.updatePoints}
            />
        )
    },
    renderRewards(){
        return(
            <div>
                {this.props.child_rewards.map(this.renderSingleReward)}
            </div>
        )
    },
    render(){
        // console.log('ChildShowRewards- this.props');
        // console.log(this.props);
        // console.log('ChildShowRewards- this.state');
        // console.log(this.state);

        return(<div>
            {this.renderRewards()}
        </div>)
    },


});
