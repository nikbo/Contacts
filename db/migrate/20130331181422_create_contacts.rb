class CreateContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :model_id, :integer
      t.integer :model_id


  end
end