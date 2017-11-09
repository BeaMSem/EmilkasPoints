var FamilyShow = React.createClass({

    getInitialState(){
        return({
            parent_view : this.props.data.parent_view
        })
    },
    setStateParentView(){
        this.setState({
            parent_view: true
        })
    },
    renderAppropriateView(){
        return(
                this.state.parent_view
                    ? <FamilyShowParentView
                        children = {this.props.data.children}
                        activities = {this.props.data.activities}
                        updatePoints = {this.updatePoints}
                        rewards = {this.props.data.rewards}
                    />
                    :<FamilyShowAccess
                        children = {this.props.data.children}
                        activities = {this.props.data.activities}
                        setStateParentView = {this.setStateParentView}
                    />
        )
    },
    renderFamilyShow(){
        return(
            <div className="family_show">
                {this.renderAppropriateView()}
            </div>)
    },
    render(){
        // console.log('FamilyShow');
        // console.log('this.props');
        // console.log(this.props);
        // console.log('this.state');
        // console.log(this.state);
        return( this.renderFamilyShow() )
    }
});
