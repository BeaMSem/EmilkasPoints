class CreateChildActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :child_activities do |t|
      t.string  :name
      t.string  :svg
      t.integer :child_id
      t.integer :multiplier, :default => 1
      t.integer :multiplicand, :default => 5
      t.boolean :active, :default => true
      t.timestamps
    end
  end
end
