class MapsController < ApplicationController
  def index
    @current_user_monster = Monster.find(current_user.current_monster_id)
  end

  def redirect
    @monster = Monster.find(1)
    @user = User.find(1)
    redirect_to root_path
  end  
end
