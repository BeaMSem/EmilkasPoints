var ChildActivityButton = React.createClass({

    getInitialState(){
        return({
            multiplier: this.props.child_activity.multiplier,
            active: this.props.child_activity.active
        })
    },
    handleOnClick(){
        $.ajax({
            url: '/child_activities/'+this.props.child_activity.id,
            method: 'PUT',
            dataType: 'JSON',
            data: {multiplier: this.state.multiplier + 1, active: false},
            context: this,
            success: function(activity){
                console.log('ACTIVITY add');
                console.log(activity);
                this.props.updatePoints((this.state.multiplier)*(this.props.child_activity.multiplicand));
                this.props.updateChildActivitiesState(activity);
                this.setState({
                    multiplier : activity.multiplier,
                    active: activity.active
                });
            }
        });
    },
    handleOnClickRemovePoints(){
        $.ajax({
            url: '/child_activities/'+this.props.child_activity.id,
            method: 'PUT',
            dataType: 'JSON',
            data: {multiplier:this.state.multiplier - 1, active: true},
            context: this,
            success: function(activity){
                this.props.updatePoints((activity.multiplier)*(this.props.child_activity.multiplicand)*(-1));
                this.props.updateChildActivitiesState(activity);
                console.log('ACTIVITY remove');
                console.log(activity);
                this.setState({
                    multiplier : activity.multiplier,
                    active: activity.active
                });
            }
        });
    },
    renderChildSingleActivityTop(){
        return(
            <div className="child_single_activity_top">
                <div className="child_single_activity_top_svg">
                    <SVG_activity svg={this.props.child_activity.svg}/>
                </div>
                <div className="child_single_activity_top_title">
                    {this.props.child_activity.name}
                </div>
            </div>
        )
    },
    renderChildSingleActivityActive(){
        return(
            <div
                className   = "child_single_activity"
                onClick     = {this.handleOnClick}
            >
                <div className="child_single_activity_top">
                    {this.renderChildSingleActivityTop()}
                </div>
                <div className="child_single_activity_bottom">
                    <div className="child_single_activity_bottom_points">
                        + {(this.state.multiplier)*(this.props.child_activity.multiplicand)} points
                    </div>
                </div>
            </div>
        )
    },
    renderChildSingleActivityInactive(){
        return(
            <div
                className   = "child_single_activity"
                onClick     = {this.handleOnClickRemovePoints}
            >
                <div className="child_single_activity_top">
                    {this.renderChildSingleActivityTop()}
                </div>
                <div className="child_single_activity_bottom">
                    <div className="child_single_activity_bottom_tick">
                        well done
                    </div>
                </div>
            </div>
        )
    },
    render(){
        return(
            this.state.active
                ? this.renderChildSingleActivityActive()
                : this.renderChildSingleActivityInactive()
        )
    }

});