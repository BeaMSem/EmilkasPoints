var SingleReward = React.createClass({

    // {    this.state.open ? 'true' : 'false'  }
    // {    this.setState({  })}
    // function(){console.log('function - '); console.log(); console.log(); return(<div>function</div>)},
    // console.log();
    // console.log();
    // this.props.xxxxxx
    // this.state.xxxxxx

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
        var amount = (this.state.no_points - this.props.reward.price) * (-1);
        return 'still missing ' + amount + ' points'
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
            <div onClick={this.state.available ? this.handleOnClick : false}>
                {this.props.reward.name}
                {this.state.available ? this.renderRewardPrice() : this.renderMissingPoints()}
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