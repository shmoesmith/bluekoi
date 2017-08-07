class Special < ApplicationRecord
  validates :title, :text, presence: true
end
