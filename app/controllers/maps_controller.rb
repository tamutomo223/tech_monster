class MapsController < ApplicationController
  def index
    @current_user_monster = Monster.find(current_user.current_monster_id)
  end
end
