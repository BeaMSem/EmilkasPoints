class SessionController < ApplicationController

  def set_parent_view
    session[:parent_view] = true
    render json: {
        msg: 'set_parent_view true'
    }
  end
  def set_child_view
    session[:parent_view] = false
    render json: {
        msg: 'set_child_view true'
    }
  end

end
