var ChildShowChildView = React.createClass({

    getInitialState(){
        return({
            child_activities: this.props.child_activities,
            child_rewards: this.props.child_rewards,
            activities_view: true
        });
    },
    toggleActivitiesView(){
        this.setState({
            activities_view: !this.state.activities_view
        })
    },
    renderSingleActivity(child_activity, index){
            return(
                <ChildActivityButton
                    key = {index}
                    child_activity = {child_activity}
                    updatePoints = {this.props.updatePoints}
                    updateChildActivitiesState = {this.props.updateChildActivitiesState}
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
    renderBuyRewards(){
        return(
            <div className="buy_rewards" >
                <input
                    type="button"
                       value={this.state.activities_view?'Buy Rewards':'Back to Activities'}
                    onClick={this.toggleActivitiesView}
                />
            </div>
        )
    },
    renderChildRewards(){
        return(
            this.state.child_rewards.map(this.renderSingleReward)
        )
    },
    renderSingleReward(reward, index){
        return(
            <ChildRewardButton
                reward = {reward}
                key = {index}
                no_points = {this.props.no_points}
                updatePoints = {this.props.updatePoints}
            />
        )
    },
    // renderAchievementsTitle(){
    //     return(
    //         <div className="achievements_title">
    //             <div>This week</div>
    //             <div><a href="#">Edit</a></div>
    //         </div>
    //     )
    // },
    // renderSingleWeeklyStat(activity, index){
    //     return(
    //             <WeeklyStats
    //                 key = {index}
    //                 child_activity = {activity}
    //             />
    //     )
    // },
    // renderWeeklyStats(){
    //     return(
    //         <div className="child_achievements">
    //             {this.state.child_activities.map(this.renderSingleWeeklyStat)}
    //         </div>
    //     )
    // },
    renderActivitiesRewardsViews(){
        return(
            this.state.activities_view ? this.renderDailyActivities() : this.renderChildRewards()
        )
    },
    render(){
        // console.log('this.state ChildShowChildView ');
        // console.log(this.state);
        // console.log('this.props');
        // console.log(this.props);
        return(
            <div className="app_component">
                <div className="single_child_component">
                    <div className="single_child_sub_component">{this.renderBuyRewards()}</div>
                    <div className="single_child_sub_component">{this.renderActivitiesRewardsViews()}</div>
                    {/*<div className="single_child_sub_component">{this.renderAchievementsTitle()}</div>*/}
                    {/*<div className="single_child_sub_component">{this.renderWeeklyStats()}</div>*/}
                </div>
            </div>
        )
    },
    // componentWillReceiveProps(nextProps){
    //     this.setState({
    //         child_activities: nextProps.child_activities,
    //     })
    // }

});