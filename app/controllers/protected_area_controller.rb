class ProtectedAreaController < ApplicationController

    before_action :confirm_logged_in
    before_action :get_authenticated_family

    private

    def confirm_logged_in
      unless session[:family_id]
        redirect_to('/login')
      end
    end

    def get_authenticated_family
      if session[:family_id].present?
        @family = Family.find(session[:family_id])
      else
        nil
      end
    end
end
