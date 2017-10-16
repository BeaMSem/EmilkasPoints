var ChildShowActivities = React.createClass({

    // {    this.state.open ? 'true' : 'false'  }
    // {    this.setState({  })}
    // function(){console.log('function - '); console.log(); console.log(); return(<div>function</div>)},
    // console.log();
    // console.log();
    // this.props.xxxxxx
    // this.state.xxxxxx

    getInitialState(){
        return({
            null
        })
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