#Challenge 1
a =  true
b = false
puts a = b
puts a = !b

#Challenge 2
dora = nil
p dora
puts "#{dora} nil was here"
print dora
puts dora.class

#Challenge 3
d = 7
puts d
e = 8.5
puts e
d = e
puts d

#Challenge 4
christine = "Hi, I'm Christine"
likesTo = "long walks on the beach, kinda."
tims = christine
puts "#{tims} and I like #{likesTo}"
g = "2"
gToNumber = 2
puts g. + gToNumber.to_s

#Challenge 5
puts "Input an integer"
integer = gets.chomp.to_i
puts integer * 2

puts "What is your name"
name = gets.chomp
puts "What do you like to do"
likesToDo = gets.chomp
puts "#{name} likes to #{likesToDo}"