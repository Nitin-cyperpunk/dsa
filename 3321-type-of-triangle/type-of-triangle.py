class Solution:
    def triangleType(self, num: List[int]) -> str:
        if(num[0]+num[1]<=num[2] or num[0]+num[2]<=num[1] or num[2]+num[1]<=num[0]):
             return "none"
        if(num[0]==num[1]==num[2]):
             return "equilateral"
        if(num[0]==num[1] or num[0]==num[2] or num[1]==num[2]):
             return "isosceles"
        return "scalene"