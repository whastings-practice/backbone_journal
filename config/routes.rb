JournalApp::Application.routes.draw do
  resources :posts
  get "*", to:"photos#index"
  root to: 'posts#index'
end
