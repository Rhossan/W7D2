# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Todo.delete_all

todo1 = Todo.create(title: "hello", body: "sup sup", done: false);
todo1 = Todo.create(title: "bye", body: "morning", done: false);
todo1 = Todo.create(title: "leafy", body: "saucey", done: false);