var ActivityButtonChildView = React.createClass({

    getInitialState(){
        return({
            multiplier: this.props.child_activity.multiplier,
            active: this.props.child_activity.active
        })
    },
    handleOnClickAddPoints(){
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

    renderActivityButton(){
        return(
            <div
                className="activity_button_child_view"
                onClick={this.state.active ? this.handleOnClickAddPoints : this.handleOnClickRemovePoints}
            >
                {this.props.children}
                <div className="bottom">
                    {
                        this.state.active
                        ?   <div className="points">
                                + {(this.state.multiplier)*(this.props.child_activity.multiplicand)} points
                            </div>
                        :   <div className="tick">
                                V
                            </div>
                    }
                </div>
            </div>
        )
    },
    render(){
        return(
            this.renderActivityButton()
        )
    }

});