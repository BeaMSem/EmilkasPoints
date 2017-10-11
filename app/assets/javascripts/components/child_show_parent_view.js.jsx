var ChildShowParentView = React.createClass({

    getInitialState(){
        return({
            points_array: [5,10,20,50],
            no_points: this.props.no_points,
        });
    },
    renderSingleExtraPoints(points, index){
        return(
            <ChildExtraPoints
                points          = {points}
                key             = {index}
                updatePoints    = {this.props.updatePoints}
            />
        )
    },
    renderExtraPoints(){
        return(
            <div className="add_extra_points">
                {this.state.points_array.map(this.renderSingleExtraPoints)}
            </div>
        )

    },
    renderParentView(){
        return(
            <div className="app_component">
                <div className="single_child_component">
                    {this.renderExtraPoints()}

                    <div className="child_profile">
                        <div>Earned Points</div>
                        <div>Collected rewards</div>
                        <div>Settings</div>
                    </div>

                </div>
            </div>
        )
    },

    render(){
        // console.log('this.state');
        // console.log(this.state);
        // console.log('this.props');
        // console.log(this.props);
        return(
            <div>
                {this.renderParentView()}
            </div>

        )
    }

});