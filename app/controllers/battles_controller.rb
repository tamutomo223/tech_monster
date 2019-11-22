class BattlesController < ApplicationController
  def show
    @enemy = Monster.find(2)
  end

  def attack
    @enemy = Monster.find(1)
  end
end
