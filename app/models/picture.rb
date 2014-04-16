class Picture < ActiveRecord::Base
  has_attached_file :image, 
  									:styles => { :medium => "300x300>", :thumb => "100x100>", :large => "600>" }, 
  									:storage => :s3,
									  :s3_credentials => "#{RAILS.root}/config/s3.yml",
									  :path => ":attachment/:id/:style.:extension",
									  :bucket => "andrewhouse"

  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
  validates :username, presence: true
  validates :description, presence: true
end
