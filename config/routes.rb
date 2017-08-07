Rails.application.routes.draw do

  namespace :api do
    get 'specials/index'
  end

  namespace :api do
    get 'specials/show'
  end

  namespace :api do
    get 'specials/create'
  end

  namespace :api do
    get 'specials/update'
  end

  namespace :api do
    get 'specials/destroy'
  end

  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    # GET /api/reviews - goes to index
    resources :reviews

    # GET /api/user_reviews - goes to user_show_all
    get 'user_reviews', to: 'reviews#user_show_all', as: 'current_user_reviews'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
