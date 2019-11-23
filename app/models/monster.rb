class Monster < ApplicationRecord
  has_many :monster_users
  has_many :users, through: :monster_users
  
end
