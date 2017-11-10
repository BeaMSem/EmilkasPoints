var ActivityButtonFormView = React.createClass({

    getInitialState(){
        return({
            selected:false,
            child_activity: this.props.child_activity
        })
    },
    handleOnClick(){
        this.state.selected
            ? this.props.removeActivity(this.props.child_activity)
            : this.props.handleOnClickAddActivities(this.props.child_activity);
        this.setState({selected: !this.state.selected});
    },
    renderSelectedFalse(){
        return(
            <div
                className="activity_button_form_view"
                onClick={this.handleOnClick}
            >
                {this.props.children}
            </div>
        )
    },
    renderSelectedTrue(){
        return(
            <div
                className="activity_button_form_view selected"
                onClick={this.handleOnClick}
            >
                {this.props.children}
            </div>
        )
    },
    render(){

        return(
            this.state.selected ? this.renderSelectedTrue() :this.renderSelectedFalse()
        )
    }

});
{/*<%= react_component 'XXXXXXX',         %>*/}