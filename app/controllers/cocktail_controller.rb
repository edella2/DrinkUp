module API
  module V1
    class CocktailController < ApplicationController
      def popular
        resp = CocktailDB.popular
        p resp
      end
    end
  end
end
