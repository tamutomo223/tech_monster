class AddColumnCurrentMonsterIdToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users,:current_monster_id,:string
  end
end
