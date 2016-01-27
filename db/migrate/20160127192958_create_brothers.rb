class CreateBrothers < ActiveRecord::Migration
  def change
    create_table :brothers do |t|
      t.string  :first
      t.string  :last
      t.timestamps null: false
    end
  end
end
