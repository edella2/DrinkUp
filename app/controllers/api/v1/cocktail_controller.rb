require 'pp'
module Api
  module V1
    class CocktailController < ApplicationController
      def popular
        resp = CocktailDb.new()
        @cocktails = resp.popular

        render json: @cocktails
      end

      def lookup
        resp = CocktailDb.new({i: params[:id]})
        @cocktail = resp.lookup
        @cocktail = @cocktail["drinks"][0]
    
        # Format ingredient and measurement data from cocktailDB API
        format_cocktail
        
        render json: @cocktail
      end

      def filter
        resp = CocktailDb.new(filter_params)
        @cocktails = resp.filter

        render json: @cocktails
      end

      def search
        resp = CocktailDb.new(search_params)
        @cocktails = resp.search

        render json: @cocktails
      end

      private 

      def search_params
        params.permit(:s, :i).to_h || {}
      end

      def filter_params
        params.permit(:i, :a, :c, :g).to_h || {}
      end

      def format_cocktail
        @cocktail["ingredients"] = [@cocktail["strIngredient1"], @cocktail["strIngredient2"], @cocktail["strIngredient3"], @cocktail["strIngredient4"], @cocktail["strIngredient5"], @cocktail["strIngredient6"], @cocktail["strIngredient7"], @cocktail["strIngredient8"], @cocktail["strIngredient9"], @cocktail["strIngredient10"], @cocktail["strIngredient11"], @cocktail["strIngredient12"], @cocktail["strIngredient13"], @cocktail["strIngredient14"], @cocktail["strIngredient15"]]
        @cocktail["measures"] = [@cocktail["strMeasure1"], @cocktail["strMeasure2"], @cocktail["strMeasure3"], @cocktail["strMeasure4"], @cocktail["strMeasure5"], @cocktail["strMeasure6"], @cocktail["strMeasure7"], @cocktail["strMeasure8"], @cocktail["strMeasure9"], @cocktail["strMeasure10"], @cocktail["strMeasure11"], @cocktail["strMeasure12"], @cocktail["strMeasure13"], @cocktail["strMeasure14"], @cocktail["strMeasure15"]]

        @cocktail["ingredients"].compact!
        @cocktail["measures"].compact!
        @cocktail["measured_ingredients"] = []

        @cocktail["measures"].each_with_index { |val,index| @cocktail["measured_ingredients"] << val + @cocktail["ingredients"][index] }
      end

    end
  end
end
