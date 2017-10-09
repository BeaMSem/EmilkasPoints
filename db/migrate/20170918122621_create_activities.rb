class CreateActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :activities do |t|
      t.integer :family_id
      t.string :name
      t.string :svg
      t.timestamps
    end
  end
end
