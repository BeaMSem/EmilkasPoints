var FamilyShowWithChildrenView = React.createClass({

    getInitialState(){
        return({
            children:this.props.children,
            parent_view: false,
            points: [5,10,20,50]
        })
    },

    parentViewFalse(){
        return(
            <div>
                <div>
                    <input
                        type="button"
                        value="parent"
                        onClick={this.onClickSessionSetStateParentView}
                    /></div>
                <div>
                    {
                        this.props.children.map(function(child, index){

                            return (
                                <div key = {index}>
                                    <a href={"../children/"+ child.id}>{child.name}</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    },
    renderExtraPoints(){
        return(
            <div className="add_extra_points">
                {this.state.points.map(this.renderSingleExtraPoints)}
            </div>
        )

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
    renderChildParentView(child, index){
        return (
            <div key = {index}>
                <div>{child.name}</div>
                <div>{this.renderExtraPoints()}</div>
                <div className="child_profile">
                    <div>Earned Points</div>
                    <div>Collected rewards</div>
                    <div>Settings</div>
                </div>
            </div>
        )
    },
    parentViewTrue(){
        return(
            <div>
                <div>
                    {
                        this.props.children.map(this.renderChildParentView)
                    }
                </div>
            </div>)
    },
    render(){
        console.log('FamilyShowWithChildrenView');
        console.log('this.props');
        console.log(this.props);
        console.log('this.state');
        console.log(this.state);
        return(
         this.state.parent_view ? this.parentViewTrue() : this.parentViewFalse()
        )

    }

});