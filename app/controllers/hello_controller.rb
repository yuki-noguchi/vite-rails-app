class HelloController < ApplicationController
  def index
    @message = 'hello'
    @param = params[:query]
  end
end
