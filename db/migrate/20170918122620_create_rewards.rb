class CreateRewards < ActiveRecord::Migration[5.0]
  def change
    create_table :rewards do |t|
      t.integer :family_id
      t.integer :price
      t.string :name
      t.timestamps
    end
  end
end
