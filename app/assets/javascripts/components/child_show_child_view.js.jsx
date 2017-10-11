var ChildShowChildView = React.createClass({

    getInitialState(){
        return({
            child_activities: this.props.child_activities,
        });
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
    // renderBuyRewards(){
    //     return(
    //         <div className="buy_rewards">
    //                 <a href="#">Buy rewards ></a>
    //         </div>
    //     )
    // },
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
    // renderParentView(){
    //     return(
    //         <div className="app_component">
    //             <div className="single_child_component">
    //                 <div className="single_child_sub_component">{
    //                     <ChildHeader
    //                         child = {this.state.child}
    //                         no_points = {this.state.no_points}
    //                         parent_view = {this.state.parent_view}
    //                     />
    //                 }</div>
    //                 <div className="add_extra_points">
    //                     <div>add extra points</div>
    //                     <div onClick={this.updatePoints}>5</div>
    //                     <div onClick={this.updatePoints}>10</div>
    //                     <div onClick={this.updatePoints}>20</div>
    //                     <div onClick={this.updatePoints}>50</div>
    //                 </div>
    //                 <div className="child_profile">
    //                     <div>Earned Points</div>
    //                     <div>Collected rewards</div>
    //                     <div>Settings</div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // },

    render(){
        // console.log('this.state');
        // console.log(this.state);
        // console.log('this.props');
        // console.log(this.props);
        return(
            <div className="app_component">
                <div className="single_child_component">
                    {/*<div className="single_child_sub_component">{this.renderBuyRewards()}</div>*/}
                    <div className="single_child_sub_component">{this.renderDailyActivities()}</div>
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