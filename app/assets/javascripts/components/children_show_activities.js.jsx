var ChildrenShowActivities = React.createClass({

    renderSingleActivity(child_activity, index){
        return(
            <ActivityButtonChildView
                key = {index}
                child_activity = {child_activity}
                updatePoints = {this.props.updatePoints}
                updateChildActivitiesState = {this.props.updateChildActivitiesState}
            >
                <ActivityButton
                    child_activity = {child_activity}
                />
            </ActivityButtonChildView>
        )
    },
    renderDailyActivities(){
        return(
            <div className="child_activities_container">
                {this.props.child_activities.map(this.renderSingleActivity)}
            </div>
        )

    },
    render(){
        console.log('ChildShowActivities- this.props');
        console.log(this.props);
        console.log('ChildShowActivities- this.state');
        console.log(this.state);

        return(<div>
            {this.renderDailyActivities()}
        </div>)
    },

});
{/*<%= react_component 'ChildShowActivities',         %>*/}