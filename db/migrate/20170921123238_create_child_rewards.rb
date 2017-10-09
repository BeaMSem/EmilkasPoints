class CreateChildRewards < ActiveRecord::Migration[5.0]
  def change
    create_table :child_rewards do |t|
      t.string :name
      t.integer :child_id
      t.integer :price

      t.timestamps
    end
  end
end
