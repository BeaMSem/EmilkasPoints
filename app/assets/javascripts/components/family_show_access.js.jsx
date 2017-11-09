var FamilyShowAccess = React.createClass({

    // {    this.state.open ? 'true' : 'false'  }
    // {    this.setState({  })}
    // function(){console.log('function - '); console.log(); console.log(); return(<div>function</div>)},
    // console.log();
    // console.log();
    // this.props.xxxxxx
    // this.state.xxxxxx


    onClickSessionSetStateParentView(){
        $.ajax({
            url:'/parent_view',
            method:'post',
            context:this,
            success: function(data){
                // console.log(data);
                this.props.setStateParentView();
            }
        });
    },
    render(){
        console.log('FamilyShowAccess- this.props');
        console.log(this.props);
        // console.log('FamilyShowAccess- this.state');
        // console.log(this.state);

        return(
            <div>
                <div>
                    <input
                        type="button"
                        value="parent"
                        onClick={this.onClickSessionSetStateParentView}
                    />
                </div>
                <div>
                    {
                        this.props.children.map(function(child){
                            return (
                                <a href={"/children/" + child.id} key={child.id}>
                                    <div key={child.id}>
                                        <SVG_avatar
                                            svg = {child.svg}
                                        />
                                    {child.name}
                                    </div>
                                </a>

                            )
                        })
                    }
                </div>
            </div>
        )
    },

});
{/*<%= react_component 'FamilyShowAccess',         %>*/}