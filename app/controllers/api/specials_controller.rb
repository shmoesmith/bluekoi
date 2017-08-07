class Api::SpecialsController < ApplicationController

  before_action :set_special only: [:show, :update, :destroy]

  def index
    render json: Special.all
  end

  def show
    render json: @special
  end

  def create
    special = Special.create(special_params)
      if special.save
        render json: special
      else
        render json: { errors: special.errors.full_messages.join(',') }, status: 442
      end
  end

  def update
    if @special.update(special_params)
      render json: @special
    else
      render json: { errors: @special.errors.full_messages.join(',') }, status: 442
    end
  end

  def destroy
    @special.destroy
  end

private

  def set_review
    @special = Special.find(params[:id])
  end

  def special_params
    params.require(:special).permit(:title, :text)
  end

end
