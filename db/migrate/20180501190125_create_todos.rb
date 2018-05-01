class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.string :title, allow_nil: true 
      t.string :body, allow_nil: true 
      t.boolean :done

      t.timestamps
    end
  end
end
