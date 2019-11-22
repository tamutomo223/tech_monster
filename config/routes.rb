Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "maps#index"

  resources :battles, only: [:show]
  get '/attack', to: 'battles#attack', as: 'attack'
  resources :monsters, only: [:index]
  get "/get",to:"monsters#get"

end

