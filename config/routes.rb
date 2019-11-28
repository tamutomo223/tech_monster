Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "maps#top"
  get "maps/index", to: "maps#index",as: "index"

  resources :battles, only: [:show]
  get '/attack', to: 'battles#attack', as: 'attack'

  resources :monsters, only: [:index,:show]
  get "/get", to: "monsters#get"
  patch "/get/:id", to: "monsters#getUpdateBattle", as: 'getupbattle'
  patch "/get/:id/in", to: "monsters#getUpdateIn", as: 'getupin'
  patch "/update/:id", to: "monsters#update"
  get "/redirect", to: "maps#redirect"
end

