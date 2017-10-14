var ChildShow = React.createClass({

    getInitialState(){
        return({
            child : this.props.data.child,
            child_activities: this.props.data.child_activities,
            child_rewards: this.props.data.child_rewards,
            parent_view: this.props.data.parent_view
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
            <ChildShowActivities
                child_activities = {this.state.child_activities}
                updatePoints = {this.updatePoints}
                updateChildActivitiesState = {this.updateChildActivitiesState}
            />
        )
    },
    renderChildAchievements(){
        return(
            <ChildShowAchievements/>
        )
    },
    renderChildShow(){
        return(
            <div>
                {this.renderChildHeader()}
                {this.renderChildActivities()}
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