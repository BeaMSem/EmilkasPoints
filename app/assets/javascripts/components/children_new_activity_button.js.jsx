var ChildrenNewActivityButton = React.createClass({

    getInitialState(){
        return({
            selected:false,
            activity: this.props.activity
        })
    },
    handleOnClick(){
        this.state.selected
            ? this.props.removeActivity(this.props.activity)
            : this.props.handleOnClickAddActivities(this.props.activity);
        this.setState({selected: !this.state.selected});
    },
    renderSelectedFalse(){
        return(
            <div
                className="single_activity"
                onClick={this.handleOnClick}
            >
                    <div className="svg_activity">
                        {this.props.children}
                    </div>
                    <div className="activity_name">
                        {this.props.activity.name}
                    </div>
            </div>
        )
    },
    renderSelectedTrue(){
        return(
            <div
                className="single_activity selected"
                onClick={this.handleOnClick}
            >
                <div className="svg_activity">
                    {this.props.children}
                </div>
                <div className="activity_name">
                    {this.props.activity.name}
                </div>
            </div>
        )
    },
    render(){

        return(
           this.state.selected ? this.renderSelectedTrue() :this.renderSelectedFalse()
        )
    }


});