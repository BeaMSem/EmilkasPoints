var RewardsForm = React.createClass({

    // {    this.state.open ? 'true' : 'false'  }
    // {    this.setState({  })}
    // function(){console.log('function - '); console.log(); console.log(); return(<div>function</div>)},
    // console.log();
    // console.log();
    // this.props.xxxxxx
    // this.state.xxxxxx

    getInitialState(){
        return({active: false})
    },
    toggleActive(){
        this.state.active
            ? this.props.removeReward(this.props.reward)
            : this.props.handleOnClickAddReward(this.props.reward);
        this.setState({active: !this.state.active});
    },
    renderActive(){
        return(
            <div
                className="active"
                onClick={this.toggleActive}
            >
                {this.props.reward.name}
                {this.props.reward.price}
            </div>
        )
    },
    renderNotActive(){
        return(
            <div
                onClick={this.toggleActive}
            >
                {this.props.reward.name}
                {this.props.reward.price}
            </div>
        )
    },
    render(){
        console.log('RewardsForm- this.props');
        console.log(this.props);
        console.log('RewardsForm- this.state');
        console.log(this.state);

        return(
            this.state.active ? this.renderActive() : this.renderNotActive()
        )
    },

});
{/*<%= react_component 'RewardsForm',         %>*/}