class Activity < ApplicationRecord
  belongs_to :family, optional: true
  has_many :child_activity_pairs
end
