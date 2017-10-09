var ChildrenNew = React.createClass({

    getInitialState(){
        return({
            name: '',
            avatar_svg:'',
            activities:[]
        })
    },
    getDefaultProps(){
        return({
            avatars:[
                'SVG_avatar_0001',
                'SVG_avatar_0002',
                'SVG_avatar_0003',
                'SVG_avatar_0004',
                'SVG_avatar_0005',
                'SVG_avatar_0006'
            ]
        })
    },
    handleSubmit(){
        console.log('SUBMIT CHILD');
        $.ajax({
            url: '../children',
            method:'post',
            dataType: 'JSON',
            data: {
                    name:this.state.name,
                    svg: this.state.avatar_svg,
                    activities: this.state.activities
            },
            context:this,
            success:function(data){
                console.log(data);
                window.location.replace("../families/"+data.family_id);
            }


        })
    },
    handleOnClickSelectAvatar(svg){
        console.log('select avatar');
        console.log(svg);
        this.setState({
            avatar_svg: svg
        })
    },
    handleOnClickAddActivities(activity){

        var activities_array_od_ids = this.state.activities;
        activities_array_od_ids.push(activity.id);
        this.setState({
            activities: activities_array_od_ids
        })
    },
    removeActivity(activity){

        var activities_array_od_ids = this.state.activities;
        var activity_index = activities_array_od_ids.findIndex(
            function(array_item, index){
                return array_item === activity.id
            }
        );

        activities_array_od_ids.splice(activity_index,1);
        this.setState({
            activities: activities_array_od_ids
        })
    },
    handleChange(e){
        var state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    },
    renderSingleActivity(activity,index){
        return(
            <ChildrenNewActivityButton
                activity = {activity}
                key = {index}
                handleOnClickAddActivities = {this.handleOnClickAddActivities}
                removeActivity = {this.removeActivity}
            >
                <SVG_activity
                    svg = {activity.svg}
                />
            </ChildrenNewActivityButton>


        )
    },
    renderChildrenActivities(){
        return(
            <div className="children_avatars">
                {this.props.activities.map(this.renderSingleActivity)}
            </div>
        )
    },
    renderSingleAvatar(avatar,index){
        return(
            <div
                className="single_avatar"
                key = {index}
                onClick={this.handleOnClickSelectAvatar.bind(this,avatar)}
            >
                    <div className="svg_avatar">
                        {
                            <SVG_avatar
                                svg = {avatar}
                                key = {index}
                            />
                        }
                    </div>
            </div>

        )
    },
    renderAvatars(){
        return(
            <div className="children_avatars">
                {this.props.avatars.map(this.renderSingleAvatar)}
            </div>
        )
    },
    render(){
        console.log(this.props.activities);
        return(
            <div>
                <div className="children_new_navigation">
                  Add Child
                </div>
                <div className="children_new_form">
                    <form>
                        <div className="form_input_field">
                            <div className="children_new_input_field_label">
                                <label htmlFor="name">Child's Name:</label>
                            </div>
                            <div className="children_new_input_field_input">
                                <input
                                    type="text"
                                    name="name"
                                    ref="name"
                                    value = {this.state.name}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form_input_field">
                            <div className="children_new_input_field_label">
                                <label htmlFor="avatar">Child's Avatar:</label>
                            </div>
                            {this.renderAvatars()}
                        </div>
                        <div className="form_input_field">
                            <div className="children_new_input_field_label">
                                <label htmlFor="avatar">Child's Activities:</label>
                            </div>
                            {this.renderChildrenActivities()}
                        </div>
                        <div className="access_button">
                            <input
                                type="button"
                                value="Add Child"
                                onClick={this.handleSubmit}
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }


});