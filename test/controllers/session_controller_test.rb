require 'test_helper'

class SessionControllerTest < ActionDispatch::IntegrationTest
  test "should get setParentView" do
    get session_setParentView_url
    assert_response :success
  end

end
