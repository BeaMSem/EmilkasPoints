class Reward < ApplicationRecord
  belongs_to :family
  has_many :child_reward_pairs
end
