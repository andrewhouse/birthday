class AddUsernameToPictures < ActiveRecord::Migration
  def change
  	add_column :pictures, :username, :string
  end
end
