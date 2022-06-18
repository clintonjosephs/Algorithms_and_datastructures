# You live in the city of Cartesia where all roads are laid out in a perfect grid. 
# You arrived ten minutes too early to an appointment, so you decided to take the 
# opportunity to go for a short walk. The city provides its citizens with a 
# Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter 
# strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
# You always walk only a single block for each letter (direction) and you know it 
# takes you one minute to traverse one city block, so create a function that will return true 
# if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, 
# of course, return you to your starting point. Return false otherwise.

def is_valid_walk(walk)
    #your code here
    ns = 0
    ew = 0
    if walk.length == 10
      walk.each do |d|
          case d
            when 'n'
               ns+=1
            when 's'
               ns-=1
            when 'e'
               ew+=1
            when 'w'
               ew-=1
          end
      end
    else
      return false
    end
    return ns == 0 && ew == 0
  end


# - array of one letter strings - directions to walk ['n','e','w','s']
# - you will always walk a single block for each letter -  traverse the array in linear
# - for each direction, you would be walking in a city block and it takes exactlyone minute
# - the key is to understand what the directions really mean and focus on that
# - when you are walking north, you go back by walking south and vice verse
# - when you are walking east, you go back by walking west and vice verse