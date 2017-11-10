var ChildrenNew = React.createClass({

    getInitialState(){
        return({
            name: '',
            avatar_svg:'',
            activities:[],
            rewards: []
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
                    activities: this.state.activities,
                    rewards: this.state.rewards
            },
            context:this,
            success:function(data){
             console.log(data);
                this.props.addToArray(data)
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

        console.log('XXXXX');
        console.log(activity);

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

    handleOnClickAddReward(reward){

        var rewards_ids = this.state.rewards;
        rewards_ids.push(reward.id);
        this.setState({
            rewards: rewards_ids
        })
    },
    removeReward(reward){

        var reward_ids = this.state.rewards;
        var reward_index = reward_ids.findIndex(
            function(array_item, index){
                return array_item === reward.id
            }
        );

        reward_ids.splice(reward_index,1);
        this.setState({
            rewards: reward_ids
        })
    },
    handleChange(e){
        var state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    },
    renderSingleActivity(child_activity,index){
        return(
            <ActivityButtonFormView
                key = {index}
                handleOnClickAddActivities = {this.handleOnClickAddActivities}
                removeActivity = {this.removeActivity}
                child_activity = {child_activity}
            >
                <ActivityButton
                    child_activity = {child_activity}

                />
            </ActivityButtonFormView>

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
                className="child_avatar_form_view"
                key = {index}
                onClick={this.handleOnClickSelectAvatar.bind(this,avatar)}
            >
                <ChildAvatar
                svg={avatar}
                />
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
    renderRewards(){
        return(
            <div>{this.props.rewards.map(this.renderSingleReward)}</div>
        )
    },
    renderSingleReward(reward, index){
            return(
                <RewardsForm
                    key = {reward.id}
                    reward = {reward}
                    handleOnClickAddReward = {this.handleOnClickAddReward}
                    removeReward={this.removeReward}
                />
            )
    },
    render(){
        console.log(this.props.activities);
        return(
            <div>
                <div className="children_new_navigation">
                  Add Child
                </div>
                <div className="the_form">
                    <form>
                        <div className="form_input_field">
                            <div className="input_field_label">
                                <label htmlFor="name">Child's Name:</label>
                            </div>
                            <div className="form_input_field_input">
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
                            <div className="input_field_label">
                                <label htmlFor="avatar">Child's Avatar:</label>
                            </div>
                            {this.renderAvatars()}
                        </div>
                        <div className="form_input_field">
                            <div className="input_field_label">
                                <label htmlFor="avatar">Child's Activities:</label>
                            </div>
                            {this.renderChildrenActivities()}
                        </div>
                        <div>
                            {this.renderRewards()}
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