class PokemonsController < ApplicationController
  def index
    
  end

  def get
    @enemy = Monster.find(1)
  end

end
