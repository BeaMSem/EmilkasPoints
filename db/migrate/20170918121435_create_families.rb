class CreateFamilies < ActiveRecord::Migration[5.0]
  def change
    create_table :families do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :pin
      t.timestamps
    end
  end
end
