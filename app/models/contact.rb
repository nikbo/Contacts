# coding: utf-8
class Contact < ActiveRecord::Base
  attr_accessible :name, :email, :phone
  validates :name, :presence => {:message => "не может быть пустым"}
  validates :email, :presence => {:message => "не может быть пустым"},
            :format => { :with => /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i,
                         :message => "неправильный, пожалуйста, введите корректный email" }
  validates :phone,
  :presence => {:message => "не может быть пустым"},
  :numericality => { :only_integer => true,
  :message => "должен быть в формате +XXXXXXXXX"},
  :length => {
      :minimum => 13,
      :maximum => 13,
      :message => "должен состоять из 12 цифр"}
  belongs_to :model
  accepts_nested_attributes_for :model

end