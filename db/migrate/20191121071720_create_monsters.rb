class CreateMonsters < ActiveRecord::Migration[5.2]
  def change
    create_table :monsters do |t|
      t.string :name, null: false, unique: true
      t.string :image
      t.integer :attack, null: false
      t.integer :hp, null: false
      t.timestamps
    end
  end
end