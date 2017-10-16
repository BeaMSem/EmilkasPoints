var ChildShowRewards = React.createClass({

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
    renderSingleReward(reward){
        return(
            <SingleReward
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
        console.log('ChildShowRewards- this.props');
        console.log(this.props);
        console.log('ChildShowRewards- this.state');
        console.log(this.state);

        return(<div>
            {this.renderRewards()}
        </div>)
    },


});
{/*<%= react_component 'ChildShowRewards',         %>*/}