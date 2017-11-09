class CreateChildren < ActiveRecord::Migration[5.0]
  def change
    create_table :children do |t|
      t.string :name
      t.integer :family_id
      t.integer :no_points
      t.string :svg
      t.integer :pin

      t.timestamps
    end
  end
end
