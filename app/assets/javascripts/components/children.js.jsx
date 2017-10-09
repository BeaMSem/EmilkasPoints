var Child = React.createClass({

    getInitialState(){
        return({
            no_points: this.props.data.child.no_points,
            child_activities: this.props.data.child_activities,
        });
    },
    updatePoints(no_points){
        var updated_no_points = this.state.no_points + no_points;
        $.ajax({
            url: '/children/'+ this.props.data.child.id,
            method: 'PUT',
            dataType:'JSON',
            data: {no_points:updated_no_points},
            context: this,
            success: function(child){
                this.setState({
                    no_points: child.no_points
                })
            }
        })
    },
    updateChildActivitiesState(child_activity){
        var array = this.state.child_activities;
        var index = array.findIndex(function(element){
            return element.id === child_activity.id
        });
        array[index] = child_activity;
        this.setState({
            child_activity: array
        })
    },
    renderChildGreeting(){
        return(
            <div className="child_greeting_container">
                <div className="child_greeting_container_left">
                    <div className="child_greeting_container_left_avatar">
                        <SVG_avatar
                            svg = {this.props.data.child.svg}
                        />
                    </div>
                </div>
                <div className="child_greeting_container_right">
                    <div className="child_greeting_container_right_title">Hello <span>{this.props.data.child.name}</span>, you've got</div>
                    <div className="child_greeting_container_right_points">{this.state.no_points} points!</div>
                </div>
            </div>
        )
    },
    renderBuyRewards(){
        return(
            <div className="buy_rewards">
                    <a href="#">Buy rewards ></a>
            </div>
        )
    },
    renderAchievementsTitle(){
        return(
            <div className="achievements_title">
                <div>This week</div>
                <div><a href="#">Edit</a></div>
            </div>
        )
    },
    renderSingleActivity(child_activity, index){
            return(
                <Activity
                    key = {index}
                    child_activity = {child_activity}
                    updatePoints = {this.updatePoints}
                    updateChildActivitiesState = {this.updateChildActivitiesState}
                />
            )

    },
    renderSingleWeeklyStat(activity, index){
        return(
                <WeeklyStats
                    key = {index}
                    child_activity = {activity}
                />
        )
    },
    renderDailyActivities(){
        return(
            <div className="child_activities_container">
                {this.state.child_activities.map(this.renderSingleActivity)}
            </div>
        )

    },
    renderWeeklyStats(){
        return(
            <div className="child_achievements">
                {this.state.child_activities.map(this.renderSingleWeeklyStat)}
            </div>
        )
    },
    render(){
        console.log('this.state');
        console.log(this.state);
        console.log('this.props');
        console.log(this.props);
        return(
            <div className="app_component">
                <div className="single_child_component">
                    <div className="single_child_sub_component">{this.renderChildGreeting()}</div>
                    <div className="single_child_sub_component">{this.renderBuyRewards()}</div>
                    <div className="single_child_sub_component">{this.renderDailyActivities()}</div>
                    <div className="single_child_sub_component">{this.renderAchievementsTitle()}</div>
                    <div className="single_child_sub_component">{this.renderWeeklyStats()}</div>
                </div>
            </div>
        )
    }

});