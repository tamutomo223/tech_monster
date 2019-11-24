class MonstersController < ApplicationController
  def index
    @user = User.find(current_user.id)
    @monsters = @user.monsters
  end


  def get
    @enemy = Monster.order("RAND()").first
  end

  def show
    @monster = Monster.find(params[:id])
  end
  
  def update
    @user = User.find(current_user.id)
    @user.update(current_monster_id: params[:id])
    redirect_to root_path
  end

  def get
    @enemy = Monster.where( 'id >= ?', rand(Monster.first.id..Monster.last.id) ).first
  end

  def getUpdate
    @user = User.find(current_user.id)
    @enemy = Monster.find(params[:id])
    @user.update(current_monster_id: @enemy.id)
    redirect_to root_path
  end
end
