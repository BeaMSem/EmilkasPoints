require 'test_helper'

class ChildRewardsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get child_rewards_index_url
    assert_response :success
  end

  test "should get show" do
    get child_rewards_show_url
    assert_response :success
  end

  test "should get new" do
    get child_rewards_new_url
    assert_response :success
  end

  test "should get create" do
    get child_rewards_create_url
    assert_response :success
  end

  test "should get update" do
    get child_rewards_update_url
    assert_response :success
  end

  test "should get delete" do
    get child_rewards_delete_url
    assert_response :success
  end

end
