var FamilyShow = React.createClass({

    getInitialState(){
        return({
            parent_view: false
        })
    },
    onClickSessionParentView(){
        $.ajax({
                url:'/parent_view',
                method:'post',
                context:this,
                success: function(data){
                    console.log(data);
                    this.setState({
                        parent_view: !this.state.parent_view
                    })
                }
        });
    },
    onClickSessionChildView(id){
        console.log('id');
        console.log(id);

        $.ajax({
            url:'../child_view',
            method:'post',
            context:this,
            success: function(data){
                console.log(data);
                window.location.href = '../children/'+id
            }
        });
    },
    renderButton(child, index){
        return(
            <input
                type="button"
                key = {index}
                value ={child.name}
                onClick={this.onClickSessionChildView.bind(this, child.id)}
            />
        )
    },
    renderParentViewFalse(){
        return(
            <div>
                <div>
                    <input
                        type    ="button"
                        value   ="parent"
                        onClick ={this.onClickSessionParentView}
                    />
                </div>
                <div>
                    {this.props.children.map(this.renderButton)}
                </div>

            </div>

        )
    },
    renderParentViewTrue(){
        return(
            <div>
                {this.props.children.map(
                    function(child, index){
                        return(
                            <a
                                href={"../children/"+child.id}
                                key={index}
                            >
                                <ChildHeader
                                    child = {child}
                                    parent_view = {true}
                                />
                            </a>

                        )}
                )}
                add child
            </div>

        )
    },
    render(){
        console.log('FamilyShow');
        console.log(this.props);
        console.log(this.state);
        return(
            this.state.parent_view
                ? this.renderParentViewTrue()
                : this.renderParentViewFalse()
        )

    }

});    // renderSingleChildBox(child, index){
//     return(
//         <a key = {index} href={"../children/"+ child.id}>
//             <div
//
//             >
//                 <div>
//                     <SVG_avatar
//                         svg = {child.svg}
//                     />
//                 </div>
//                 <div>{child.name} has got {child.no_points} points</div>
//             </div>
//         </a>
//     )
// },
// renderChildrenBox(){
//     return(
//         this.props.children.map(this.renderSingleChildBox)
//     )
// },
// renderViewNoChildren(){
//     return(
//         <div className="family_view">
//             <div className="family_view_welcome">
//                 <div className="text">
//                     Hello Parent, welcome to App Name
//                 </div>
//                 <div className="text">
//                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque deleniti eaque iusto laudantium quibusdam sequi tenetur. Assumenda beatae dicta dolores doloribus eligendi error minima molestiae possimus, rerum unde voluptate.
//                 </div>
//
//             </div>
//             <div className="family_view_add_child_button">
//                 <a href="/children/new"> add new child </a>
//             </div>
//         </div>
//     )
// },
// renderViewWithChildren(){
//     return(
//         <div className="family_view">
//             <div className="family_view_welcome">
//                 {this.renderChildrenBox()}
//             </div>
//             <div className="family_view_add_child_button">
//                 <a href="../children/new"> add new child </a>
//             </div>
//         </div>
//     )
// },
// renderParentView(){
//     return(
//         <div>
//             <div>who are you</div>
//
//         </div>
//     )
// },
// renderChildrenView(){
//     return(
//         <div>
//             {this.props.children.length === 6 ? this.renderViewNoChildren() : this.renderViewWithChildren() }
//         </div>
//     )
// },