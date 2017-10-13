var FamilyShow = React.createClass({

    getInitialState(){
        return({})
    },

    // setStateParentView(){
    //     this.setState({
    //         parent_view: false
    //     })
    // },
    // onClickSessionParentView(){
    //     $.ajax({
    //             url:'/parent_view',
    //             method:'post',
    //             context:this,
    //             success: function(data){
    //                 console.log(data);
    //                 this.setState({
    //                     parent_view: true
    //                 })
    //             }
    //     });
    // },
    // onClickSessionChildView(id){
    //     console.log('id');
    //     console.log(id);
    //
    //     $.ajax({
    //         url:'../child_view',
    //         method:'post',
    //         context:this,
    //         success: function(data){
    //             console.log(data);
    //             window.location.href = '../children/'+id
    //         }
    //     });
    // },
    // renderButton(child, index){
    //     return(
    //         <input
    //             type="button"
    //             key = {index}
    //             value ={child.name}
    //             onClick={this.onClickSessionChildView.bind(this, child.id)}
    //         />
    //     )
    // },
    // renderNoChildren(){
    //     return(
    //         <div>
    //             <div>welcome</div>
    //             <div><a href="../children/new">add child</a></div>
    //         </div>
    //     )
    // },
    // renderWithChildren(){
    //     return(
    //         <div>
    //             <div>
    //                 <input
    //                     type    ="button"
    //                     value   ="parent"
    //                     onClick ={this.onClickSessionParentView}
    //                 />
    //             </div>
    //             <div>
    //                 {this.props.children.map(this.renderButton)}
    //             </div>
    //
    //         </div>
    //
    //     )
    // },
    // renderParentViewFalse(){
    //     return(
    //         this.props.children.length === 0
    //         ? this.renderNoChildren()
    //             :this.renderWithChildren()
    //     )
    // },
    // renderParentViewTrue(){
    //     return(
    //         <div>
    //             {this.props.children.map(
    //                 function(child, index){
    //                     return(
    //                         <div key={index}>
    //                             <div>
    //                                     <ChildHeader
    //                                         child = {child}
    //                                         parent_view = {true}
    //                                     />
    //                                     and extra points component
    //                             </div>
    //                         </div>
    //
    //
    //                     )}
    //             )}
    //             <div onClick ={this.onClickSessionParentView}>
    //                 <a href="../children/new">add child</a>
    //             </div>
    //             <div>
    //                 <input type="button" value="back" onClick={this.setStateParentView}/>
    //             </div>
    //         </div>
    //
    //     )
    // },
    renderFamilyShow(){
        return(
            <div className="family_show">
                {this.props.children.length
                    ?   <FamilyShowWithChildrenView
                            children = {this.props.children}
                            activities = {this.props.activities}
                            updatePoints = {this.updatePoints}
                        />
                    :   <FamilyShowNoChildrenView
                            children = {this.props.children}
                            activities = {this.props.activities}
                            updatePoints = {this.updatePoints}
                        />
                }
            </div>)
    },
    render(){
        console.log('FamilyShow');
        console.log('this.props');
        console.log(this.props);
        console.log('this.state');
        console.log(this.state);
        return( this.renderFamilyShow() )
    }

});