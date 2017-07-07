5.times do
  user = User.create!(name: Faker::Internet.user_name, email: Faker::Internet.free_email, password: 'topsecret', password_confirmation: 'topsecret')
    2.times do
      review = user.reviews.create!( name: Faker::LordOfTheRings.character, comment: Faker::ChuckNorris.fact, stars: 5)
    end
end