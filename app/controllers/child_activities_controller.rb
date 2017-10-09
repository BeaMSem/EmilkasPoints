class ChildActivitiesController < ProtectedAreaController
  def update
    activity = ChildActivity.find(params[:id])
    activity.update(:multiplier => params[:multiplier], :active => params[:active])
    render json: activity
  end
end
