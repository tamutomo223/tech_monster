class MapsController < ApplicationController

  def top

  end
    
  def index
    @current_user_monster = Monster.find_by(id:current_user.current_monster_id)
    if @current_user_monster == nil
      MonsterUser.create(user_id:current_user.id,monster_id:1)
      User.update(current_monster_id:1)
    end
    @current_user_monster = Monster.find_by(id:current_user.current_monster_id)
  end

  def redirect
    @monster = Monster.find(1)
    @user = User.find(1)
    redirect_to root_path
  end  
end
