class CreateSpecials < ActiveRecord::Migration[5.1]
  def change
    create_table :specials do |t|
      t.string :ad_title
      t.string :ad_text
      t.string :special_number

      t.timestamps
    end
  end
end
