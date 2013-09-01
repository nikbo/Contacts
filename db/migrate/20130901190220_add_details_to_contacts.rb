class AddDetailsToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :model_id, :integer
  end
end
