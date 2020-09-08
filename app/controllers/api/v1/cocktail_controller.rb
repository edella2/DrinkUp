require 'pp'
module Api
  module V1
    class CocktailController < ApplicationController
      def popular
        resp = CocktailDb.new()
        @cocktails = resp.popular

        render json: @cocktails
      end

      def filter
        resp = CocktailDb.new(filter_params)
        @cocktails = resp.filter

        render json: @cocktails
      end

      def filter_params
        params.permit(:i, :a, :c, :g).to_h || {}
      end
    end
  end
end
