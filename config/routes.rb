Bolaodaconfe::Application.routes.draw do

  resources :users
  resources :results
  resources :statistics_results
  resources :matches
  resources :match_progress
  
  resource :confirmation, :only => [:show] 
  resource :user_sessions, :only => [:create, :new, :destroy]
  
  namespace :admin do
    resources :users
  end
  
  root :to => 'user_sessions#new'
end
