class CreateSpecials < ActiveRecord::Migration[5.1]
  def change
    create_table :specials do |t|
      t.string :ad_title, :null => false
      t.string :ad_text, :null => false

      t.timestamps
    end
  end
end
