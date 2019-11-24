class BattlesController < ApplicationController
  def show
    @enemy = Monster.order("RAND()").first
    @my_monster = Monster.find(current_user.current_monster_id)
  end

  def attack
    @enemy = Monster.find(11)
  end
end
