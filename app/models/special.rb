class Special < ApplicationRecord
  validates :ad_title, :ad_text, presence: true
end
