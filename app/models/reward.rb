class Reward < ApplicationRecord
  belongs_to :family, optional: true
  has_many :child_reward_pairs
end
