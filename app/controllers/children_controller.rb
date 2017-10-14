class ChildrenController < ProtectedAreaController
  def index
  end

  def show
    child = Child.find(params[:id])
    rewards = child.child_rewards
    activities = child.child_activities
    @data = {
        :child=> child,
        :child_rewards => rewards,
        :child_activities => activities,
        :parent_view => session[:parent_view]
    }
  end

  def create
    family = Family.find(session[:family_id])
    @child = Child.new(child_params)

    if family.children << @child
      params[:activities].each do |id|
        activity = Activity.find(id)
        child_activity = ChildActivity.new(
            :child => @child,
            :name => activity.name,
            :multiplier => 1,
            :multiplicand => 5,
            :svg => activity.svg
        )
        @child.child_activities << child_activity
      end
    end
    render json: @child
  end

  def new
    @activities = Activity.all
  end

  def edit
    
  end
  def update
    child = Child.find(params[:id])
    child.update(:no_points => params[:no_points])

    render json: child
  end

  def delete
  end

  private

  def child_params
    params.permit(:name, :pin, :no_points, :svg)
  end
end
