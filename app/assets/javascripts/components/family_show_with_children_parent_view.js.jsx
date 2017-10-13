var FamilyShowWithChildrenParentView = React.createClass({

    getInitialState(){
        return({
            children:this.props.children,
        })
    },
    updatePoints(no_points){
        console.log('CHILD SHOW update points');
        console.log('no_points');
        console.log(no_points);

        var updated_no_points = this.state.no_points + no_points;

        $.ajax({
            url: '/children/'+ this.props.data.child.id,
            method: 'PUT',
            dataType:'JSON',
            data: {no_points: updated_no_points},
            context: this,

            success: function(child){
                console.log('update points');
                console.log(child);
                this.setState({
                    no_points: child.no_points
                })
            }
        })
    },
    render(){
        console.log('FamilyShowWithChildrenView');
        console.log('this.props');
        console.log(this.props);
        console.log('this.state');
        console.log(this.state);
        return(
         <div>hhh
         </div>
        )

    }

});