class Solution:
    def singleNumber(self, nums):
        uniqueNumber = 0;
        for idx in nums:
            uniqueNumber ^= idx;
        return uniqueNumber;