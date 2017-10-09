namespace :activities do
  desc 'sets child_activities.active to true'
  task set_active: :environment  do
    ChildActivity.find_each do |activity|
      activity.update(:active => true)
    end
  end

  desc 'sets weekly_defaults - multiplier = 1'
  task  weekly_reset: :environment  do
    ChildActivity.find_each do |activity|
      activity.update(:multiplier => 1, :active => true)
    end
  end
end
