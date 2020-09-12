Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope 'api' do
    scope '/v1' do
      get 'popular', to: "api/v1/cocktail#popular"
      get 'filter', to: "api/v1/cocktail#filter"
      get 'cocktail', to: "api/v1/cocktail#lookup"
      get 'search', to: "api/v1/cocktail#search"
      get 'ingredients', to: "api/v1/cocktail#list_ingredients"
    end

  end
end
