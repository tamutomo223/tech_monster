Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "maps#index"
  resources :battles, only: [:show]

  get '/attack', to: 'battles#attack', as: 'attack'
  resources :pokemons, only: [:index]
  resources :users, only:[:new,:create]
  get "users/login", to: "users#login",as:"user_login"
end

