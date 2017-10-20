Rails.application.routes.draw do



  get 'session/setParentView'

  root 'families#show'

  get   '/about',   :to => 'static_pages#about'
  get   '/contact', :to => 'static_pages#contact'
  # get   '/members', :to => 'members_area#confirm_logged_in'


  get     '/logout', :to => 'access#logout'
  get     '/login', :to => 'access#access_page'
  post    '/login', :to => 'access#attempt_login'

  post 'parent_view', :to =>'session#set_parent_view'
  post 'child_view', :to =>'session#set_child_view'


  resources :families
  resources :children
  resources :child_activities
  resources :child_rewards
  resources :rewards
  resources :activities


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
