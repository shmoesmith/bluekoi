Rails.application.routes.draw do
  get 'reviews/index'

  get 'reviews/show'

  get 'reviews/update'

  get 'reviews/destroy'

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
