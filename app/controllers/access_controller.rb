class AccessController < PublicAreaController


  def attempt_login
    if params[:email].present? && params[:password].present?
      found_family = Family.where(:email => params[:email]).first
      if found_family
        @authenticated_family = found_family.authenticate(params[:password])
      end
    end

      if @authenticated_family.present?
        session[:family_id] = @authenticated_family.id
        redirect_to(family_path(@authenticated_family.id))
      else
        redirect_to(contact_path)
        @msg =  'incorrect email/password combination'
      end
  end

  def logout
    session[:family_id] = nil
    @msg =  'you are now logged out'
    redirect_to(login_path)
  end
end
