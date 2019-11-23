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
end
