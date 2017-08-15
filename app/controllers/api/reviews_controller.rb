class ReviewsController < ApplicationController

  before_action :set_review, only: [:show, :update, :destroy]

  def index
    # todo: sort it by creation date
    render json: Review.all
  end

  def user_show_all
    #todo: sort it by creation date
    render json: current_user.reviews
  end


  def create
    review = Review.create(review_params)
      if review.save
        render json: review
      else
        render json: { errors: review.errors.full_messages.join(',') }, status: 442
      end
  end

  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: { errors: @review.errors.full_messages.join(',') }, status: 442
    end
  end

  def destroy
    @review.destroy
  end

private

  def review_params
    params.require(:review).permit(:name, :comment, :stars)
  end

  def set_review
    @review = Review.find(parms[:id])
  end
  
end
