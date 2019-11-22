class Monster < ApplicationRecord
  has_many :user,through: :monster_users
end
