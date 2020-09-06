require 'pp'
module Api
  module V1
    class CocktailController < ApplicationController
      def popular
        resp = CocktailDb.new("cocktails", {})
        resp = resp.popular

        pp resp
      end
    end
  end
end
