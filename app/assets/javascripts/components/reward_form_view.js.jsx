var RewardFormView = React.createClass({

    // {    this.state.open ? 'true' : 'false'  }
    // {    this.setState({  })}
    // function(){console.log('function - '); console.log(); console.log(); return(<div>function</div>)},
    // console.log();
    // console.log();
    // this.props.xxxxxx
    // this.state.xxxxxx

    getInitialState(){
        return({ selected: false })
    },
    handleOnClickAddToArray(){
        this.props.handleOnClickAddReward(this.props.reward);
        this.setState({ selected: !this.state.selected })
    },
    handleOnClickRemoveFromArray(){
        this.props.removeReward(this.props.reward);
        this.setState({ selected: !this.state.selected })
    },
    renderRewardSelectedTrue(){
        return(
            <div className="reward_form_view selected" onClick={this.handleOnClickRemoveFromArray}
                 style={{backgroundColor: this.props.reward.background_color}}>
                <Reward reward = {this.props.reward} />
            </div>
        )
    },
    renderRewardSelectedFalse(){
        return(
            <div
                className="reward_form_view"
                style={{backgroundColor: this.props.reward.background_color}}
                onClick={this.handleOnClickAddToArray}
            >
                <Reward reward = {this.props.reward} />
            </div>
        )
    },
    render(){
        // console.log('RewardFormView - this.props');
        // console.log(this.props);
        // console.log('RewardFormView - this.state');
        // console.log(this.state);
        return( this.state.selected ? this.renderRewardSelectedTrue() : this.renderRewardSelectedFalse() )
    },
});
