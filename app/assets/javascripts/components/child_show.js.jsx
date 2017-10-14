var ChildShow = React.createClass({

    getInitialState(){
        return({
            no_points:this.props.data.child.no_points,
            child_activities: this.props.data.child_activities,
            child_rewards: this.props.data.child_rewards,
            parent_view: this.props.data.parent_view
        })
    },
    // updatePoints(no_points){
    //     console.log('CHILD SHOW update points');
    //     console.log('no_points');
    //     console.log(no_points);
    //
    //     var updated_no_points = this.state.no_points + no_points;
    //
    //     $.ajax({
    //         url: '/children/'+ this.props.data.child.id,
    //         method: 'PUT',
    //         dataType:'JSON',
    //         data: {no_points: updated_no_points},
    //         context: this,
    //
    //         success: function(child){
    //             console.log('update points');
    //             console.log(child);
    //             this.setState({
    //                 no_points: child.no_points
    //             })
    //         }
    //     })
    // },
    // updateChildActivitiesState(child_activity){
    //     var array = this.state.child_activities;
    //     var index = array.findIndex(function(element){
    //         return element.id === child_activity.id
    //     });
    //     array[index] = child_activity;
    //     this.setState({
    //         child_activity: array
    //     })
    // },
    // renderChildHeader(){
    //     return(
    //         <ChildHeader
    //             child = {this.props.data.child}
    //             no_points = {this.state.no_points}
    //             parent_view = {this.state.parent_view}
    //         />
    //     )
    // },
    // renderChildShow(){
    //     return(
    //         <div>
    //             {this.state.parent_view ? this.renderChildShowParentView() : this.renderChildShowChildView()}
    //         </div>
    //
    //     )
    // },
    // renderChildShowChildView(){
    //     return(
    //         <ChildShowChildView
    //             no_points = {this.state.no_points}
    //             child_activities    = {this.state.child_activities}
    //             child_rewards    = {this.state.child_rewards}
    //             updatePoints        = {this.updatePoints}
    //             updateChildActivitiesState = {this.updateChildActivitiesState}
    //         />
    //     )
    // },
    // renderChildShowParentView(){
    //     return(
    //         <ChildShowParentView
    //             updatePoints        = {this.updatePoints}
    //             no_points = {this.state.no_points}
    //         />
    //     )
    // },
    render() {
        // console.log('CHILD SHOW');
        // console.log('this.props');
        // console.log(this.props);
        // console.log('this.state');
        // console.log(this.state);
        return (

        <div>
        child view
        </div>

        )
    }


});