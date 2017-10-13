# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


activities = [
    {:name => 'playing scales', :svg => 'SVG0002' },
    {:name =>'greek wedding', :svg => 'SVG0002'},
    {:name =>'playing arpeggios', :svg => 'SVG0002'},
    {:name =>'reading', :svg => 'SVG0001'},
    {:name =>'spelling', :svg => 'SVG0001'},
    {:name =>'mathletics', :svg => 'SVG0003'},
    {:name =>'CGP books', :svg => 'SVG0001'},
    {:name =>'word power', :svg => 'SVG0001'},
]
activities.each_with_index do |activity_item, index|
  activity = Activity.create(
      :name => activity_item[:name],
      :svg => activity_item[:svg]
  )
end


rewards = [
    {:name => '£1', :price => 60},
    {:name => '£2', :price => 120},
    {:name => '£5', :price => 300},
    {:name => '£10', :price => 600},
    {:name => '15 minutes', :price => 15},
    {:name => '30 minutes', :price => 30},
    {:name => '45 minutes', :price => 45},
    {:name => '60 minutes', :price => 60},

]
rewards.each_with_index do |reward_item, index|
  reward = Reward.create(
      :name => reward_item[:name],
      :price => reward_item[:price]
  )
end

