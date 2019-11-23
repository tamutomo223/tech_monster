class MonstersController < ApplicationController
  def index
    @user = User.find(current_user.id)
    @monsters = @user.monsters
  end

  def get
    @enemy = Monster.find(1)
  end

  def show
    @monster = Monster.find(params[:id])
  end
  
  def update
    @user = User.find(current_user.id)
    @user.update(current_monster_id: params[:id])
    redirect_to root_path
  end
end
