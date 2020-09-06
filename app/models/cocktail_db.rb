class CocktailDB
    include HTTParty
    base_uri "https://www.thecocktaildb.com/api/json/v2/#{ENV["COCKTAILDB_API_KEY"]}"
    # https://www.thecocktaildb.com/api/json/v1/1/popular.php
    def initialize(service, page)
      @options = { query: { site: service, page: page } }
    end
  
    def popular
      self.class.get("/popular.php", @options)
    end
  
    # def users
    #   self.class.get("/2.2/users", @options)
    # end
  end