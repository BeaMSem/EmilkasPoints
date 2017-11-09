class FamiliesController < ProtectedAreaController

  before_action :confirm_logged_in, :except => [:create]
  # before_action :is_admin, :except => [:create, :show, :update]

  def index
  end

  def show
    family = @family
    children = @family.children
    activities = Activity.all
    rewards = Reward.all

    @data = {
        :family=> family,
        :children => children,
        :activities => activities,
        :rewards => rewards,
        :parent_view => session[:parent_view]
    }
  end

  def create
      family = Family.new(family_params)
      if family.save
        session[:family_id] = family.id
        session[:parent_view] = true
        redirect_to(family_path(family.id))
      end
  end

  def update
  end

  def delete
  end

  private
  def family_params
    params.permit(:name, :email, :password, :pin)
  end
end
