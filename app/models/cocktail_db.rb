class CocktailDb
    include HTTParty
    base_uri "https://www.thecocktaildb.com/api/json/v2/#{ENV["COCKTAILDB_API_KEY"]}"
    # https://www.thecocktaildb.com/api/json/v1/1/popular.php
    def initialize(params = {})
      # @options = options
      @options = { query: params }
    end
  
    def popular
      self.class.get("/popular.php", @options)
    end

    def filter
      pp @options
      self.class.get("/filter.php", @options)
    end
  
    # def users
    #   self.class.get("/2.2/users", @options)
    # end

  end