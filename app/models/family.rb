class Family < ApplicationRecord

  before_create { self.email = email.downcase }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :email,
            :presence => true,
            :length => {:maximum => 100},
            :format => {:with => VALID_EMAIL_REGEX},
            :uniqueness => {:case_sensitive => false},
            :confirmation => true

  validates :name,  :presence => true,
            :length => {:within => 3..50}

  validates :password, :presence => true,
            :length => {:within => 6..50},
            :confirmation => true

  has_secure_password

  has_many :children
  has_many :activities
  has_many :rewards


end
