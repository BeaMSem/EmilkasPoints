var ChildShow = React.createClass({

    getInitialState(){
        return({
            child : this.props.data.child,
            child_activities: this.props.data.child_activities,
            child_rewards: this.props.data.child_rewards,
            rewards_view: false
        })
    },
    toggleRewardsView(){
        this.setState({rewards_view:!this.state.rewards_view})
    },

    updateChildActivitiesState(child_activity){
        var array = this.state.child_activities;
        var index = array.findIndex(function(element){
            return element.id === child_activity.id
        });
        array[index] = child_activity;
        this.setState({
            child_activities: array
        })
    },
    updatePoints(points){
        // console.log('CHILD SHOW update points');
        // console.log('no_points');
        // console.log(this.props.child.no_points);

        var updated_no_points = this.state.child.no_points + points;
        console.log(updated_no_points);

        $.ajax({
            url: '/children/'+ this.state.child.id,
            method: 'PUT',
            dataType:'JSON',
            data: {no_points: updated_no_points},
            context: this,

            success: function(child){
                // console.log('Updated points - Child');
                // console.log(child);
                this.setState({
                    child: child
                });
                // console.log('Update points');
                // console.log(this.state);
            }
        })
    },






    renderChildHeader(){
        return(
            <ChildHeader
                child = {this.state.child}
            />
        )
    },
    renderChildActivities(){
        return(
            <ChildrenShowActivities
                child_activities = {this.state.child_activities}
                updatePoints = {this.updatePoints}
                updateChildActivitiesState = {this.updateChildActivitiesState}
            />
        )
    },
    renderChildRewards(){
        return(
            <ChildShowRewards
                child_rewards = {this.state.child_rewards}
                child = {this.state.child}
                updatePoints = {this.updatePoints}
            />
        )
    },
    renderChildAchievements(){
        return(
            this.state.child_activities.map(function(activity){
                return(
                    <WeeklyStats
                        key={activity.id}
                        child_activity = {activity}
                    />
                )
            })
        )
    },
    renderChildShow(){
        return(
            <div>
                {this.renderChildHeader()}
                <button onClick={this.toggleRewardsView}>{this.state.rewards_view ? '< activities' : 'rewards >'}</button>
                {this.state.rewards_view ? this.renderChildRewards() : this.renderChildActivities()}
                {this.renderChildAchievements()}
            </div>

        )
    },
    render() {
        console.log('CHILD SHOW');
        console.log('this.props');
        console.log(this.props);
        console.log('this.state');
        console.log(this.state);
        return (
            <div>{this.renderChildShow()}</div>
        )
    }


});