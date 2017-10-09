class MembersController < ApplicationController
  def index
    @family = Family.find(session[:family_id])
    @children = @family.children

    # render json: {
    #     family: @family,
    #     children: @children,
    # }

  end
end
