var WeeklyStats = React.createClass({
    getInitialState(){
            return(
                {child_activity: this.props.child_activity}
            )
    },
    renderArrayOfIcons(){
        var UI_array = [];
        var i = 0;

        for(i; i < 7 ; i++){
            UI_array.push(
                    <WeeklyStatsIcon active = {i < this.state.child_activity.multiplier-1}>
                        <SVG_activity svg = {this.state.child_activity.svg}/>
                    </WeeklyStatsIcon>
            )
        }
        return (
                <div className="child_activity_achievement_icons"
                key="'aaa">
                    {UI_array}
                </div>
        )
    },
    render(){
        // console.log('this.props weekly stats');
        // console.log(this.props);
        // console.log('this.state weekly stats');
        // console.log(this.state);
        return(this.renderArrayOfIcons())
    },
    componentWillReceiveProps(nextProps){
        // console.log('this.state weekly stats');
        // console.log(this.state);
        // console.log('nextProps');
        // console.log(nextProps);
            this.setState({child_activity: nextProps.child_activity})
    }

});