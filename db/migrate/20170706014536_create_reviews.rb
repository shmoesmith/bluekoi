class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :name, :null => false
      t.text :comment, :null => false
      t.integer :stars
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
