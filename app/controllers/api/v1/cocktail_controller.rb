require 'pp'
module Api
  module V1
    class CocktailController < ApplicationController
      def popular
        resp = CocktailDb.new("cocktails", {})
        @cocktails = resp.popular

        render json: @cocktails
      end
    end
  end
end
