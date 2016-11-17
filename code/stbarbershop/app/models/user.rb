class User < ApplicationRecord
    rolify
    # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable and :omniauthable
    devise :database_authenticatable, :registerable,
           :recoverable, :rememberable, :trackable, :validatable

    validates :name, presence: true, uniqueness: true
    validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, presence: true, uniqueness: true
    validates :password, confirmation: true
    before_save :set_role


    def set_role
        if self == User.first   #TODO: fix this method
            add_role :admin
        else
            add_role :user
        end
    end
end
