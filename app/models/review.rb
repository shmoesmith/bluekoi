class Review < ApplicationRecord
  belongs_to :user
  validates :name, :comment, presence: true
end
