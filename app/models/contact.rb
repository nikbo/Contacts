class Contact < ActiveRecord::Base
  attr_accessible :name, :email, :phone
  validates :name, :presence => true
  validates :email, :presence => true
  validates :phone, :presence => true

end