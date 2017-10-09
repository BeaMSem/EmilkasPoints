var FamilyShow = React.createClass({

    getInitialState(){
        return({
            parent_view: false
        })
    },
    renderSingleChildBox(child, index){
        return(
            <a key = {index} href={"../children/"+ child.id}>
                <div

                >
                    <div>
                        <SVG_avatar
                            svg = {child.svg}
                        />
                    </div>
                    <div>{child.name} has got {child.no_points} points</div>
                </div>
            </a>
        )
    },
    renderChildrenBox(){
        return(
            this.props.children.map(this.renderSingleChildBox)
        )
    },
    renderViewNoChildren(){
        return(
            <div className="family_view">
                <div className="family_view_welcome">
                    <div className="text">
                        Hello Parent, welcome to App Name
                    </div>
                    <div className="text">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque deleniti eaque iusto laudantium quibusdam sequi tenetur. Assumenda beatae dicta dolores doloribus eligendi error minima molestiae possimus, rerum unde voluptate.
                    </div>

                </div>
                <div className="family_view_add_child_button">
                    <a href="/children/new"> add new child </a>
                </div>
            </div>
        )
    },
    renderViewWithChildren(){
        return(
            <div className="family_view">
                <div className="family_view_welcome">
                    {this.renderChildrenBox()}
                </div>
                <div className="family_view_add_child_button">
                    <a href="../children/new"> add new child </a>
                </div>
            </div>
        )
    },
    renderParentView(){
        return(
            <div>
                {this.props.children.length === 0 ? this.renderViewNoChildren() : this.renderViewWithChildren() }
            </div>
        )
    },
    renderFamilyMembers(){
        return(
            <div>
                <div>who are you</div>

            </div>
        )
    },
    render(){
        console.log('FamilyShow');
        console.log(this.props);
        console.log(this.props.children.length);

        return(
            this.renderParentView()
        )

    }

});