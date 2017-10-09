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



5.times do |i|
  family = Family.create(
      :name => "Family #{i}",
                :email => "email#{i}@test.com",
                :password => "kukuryku123"
  )

  3.times do |k|

    child = Child.new(:name => "Emilka",
                      :no_points => 210,
                      :svg => 'SVG_avatar_0003'
    )
    family.children << child

    Activity.all.each_with_index do |activity, index|
      family.activities << activity

          child_activity = ChildActivity.new(
              :child => child,
              :name => activity.name,
              :multiplier => 1,
              :multiplicand => 5,
              :svg => activity.svg
          )
          child.child_activities << child_activity

    end
    3.times do |l|
      reward = Reward.new(
          :name => "child #{k} reward #{l}",
          :price => (l+2)*15
      )
      family.rewards << reward
      child_reward = ChildReward.new(
                                       :child => child,
                                       :name => reward.name,
                                       :price => reward.price
      )
      child.child_rewards << child_reward
    end
  end
end

