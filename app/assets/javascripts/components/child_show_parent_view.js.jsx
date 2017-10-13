var ChildShowParentView = React.createClass({

    getInitialState(){
        return({
            points_array: [5,10,20,50],
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
    },


});