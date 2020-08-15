class Api::V1::PicsController < ApplicationController
  def index
    render json: { pics: "Here's pics from rails api" }
  end
end
