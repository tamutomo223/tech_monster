class AddColumnTypeToMonsters < ActiveRecord::Migration[5.2]
  def change
    add_column :monsters, :field,:string
  end

end
