
def find_mistake (nums)
  sort_nums = nums.sort
  dup = nil 
  missing = nil 
  new_list = [];

  sort_nums.each_with_index do |num, index| 
   if (num == sort_nums[index+1]) 
      dup = sort_nums[index]
      # second_part = sort_nums.slice(index+1,nums.length)
      # new_list = sort_nums.slice(0,index).concat(second_part)
      new_list = sort_nums.slice(0,index).concat(sort_nums.slice(index+1, sort_nums.length))
   end 
     
  end 

  new_list.each_with_index do |num, index| 
   unless num == (index+1)
    missing = (index+1)
    break
   end 

  end 
  missing+ dup
end





puts(find_mistake([4,3,3,1])) # 5
puts(find_mistake([1,1,3,4])); # 3
puts(find_mistake([2,2]));  # 3 
puts(find_mistake([4,3,3,1])); # 5 
puts(find_mistake([6,3,2,4,3,1])); # 8 
puts(find_mistake([10,2,3,4,5,6,7,8,9,10])); # 11 