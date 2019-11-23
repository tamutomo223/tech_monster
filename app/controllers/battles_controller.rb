class BattlesController < ApplicationController
  def show
    @enemy = Monster.find(1)
    @my_monster = Monster.find(current_user.current_monster_id)
  end

  def attack
    @enemy = Monster.find(1)
  end
end
