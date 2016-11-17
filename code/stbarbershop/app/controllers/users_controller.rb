class UsersController < ApplicationController
    before_action :set_user, except: [:new]

    def new
        @user = User.new
    end

    def index
    end

    def show
    end

    def destroy
        @user.destroy
        redirect_to root_path
    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :password)
    end

    def set_user
        @user = User.find(params[:id])
    end
end
