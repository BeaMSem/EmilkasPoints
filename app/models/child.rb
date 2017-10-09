class Child < ApplicationRecord
  belongs_to :family
  has_many :child_rewards
  has_many :child_activities
end
