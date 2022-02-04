def nearest_power_of_two(n) 
   x = 0 
  while ((2 ** x) <= n) do 
    x = x + 1 
  end 
   2** (x-1); 
  
end 



# answer: 8, 2, 64 
puts( nearest_power_of_two(5))
puts ( nearest_power_of_two(10))
puts( nearest_power_of_two(2))
puts( nearest_power_of_two(100))