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
                    <WeeklyStatsIcon key = {i} active = {i < this.state.child_activity.multiplier-1}>
                        <SVG_activity  svg = {this.state.child_activity.svg}/>
                    </WeeklyStatsIcon>
            )
        }
        return (
                <div className="child_activity_achievement_icons">
                    {UI_array}
                </div>
        )
    },
    render(){
        return(this.renderArrayOfIcons())
    },
    componentWillReceiveProps(nextProps){
            this.setState({child_activity: nextProps.child_activity})
    }

});