class CreateMonsterUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :monster_users do |t|
      t.references :monster, foreign_key: true
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
