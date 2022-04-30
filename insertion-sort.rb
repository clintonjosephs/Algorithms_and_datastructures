#### Output
# In this challenge print the array every time an element is 
# “inserted” into the array in (what is currently) its correct 
# place (even if it doesn't move). 
# Begin printing from the second element and on.

def sort_itself(array)
    # write your code here
    i = 1;
    while i < array.length
        j = i;
        while j > 0
            if array[j] < array[j - 1]
              value = array[j]
              array[j] = array[j - 1]
              array[j - 1] = value
            else
              break
            end
            j -= 1;
        end
        i += 1;
        puts array.join(' ')
    end
  end
  
  sort_itself([1, 4, 3, 6, 9, 2])
  # => 1 4 3 6 9 2
  #    1 3 4 6 9 2
  #    1 3 4 6 9 2
  #    1 3 4 6 9 2
  #    1 2 3 4 6 9
  