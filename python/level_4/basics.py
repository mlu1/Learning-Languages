#study classes
class MyComplexNumber:
    #Constructor methods
    def __init__(self,real=0,imag=0):
        print("This is a class")
        self.real_part = real
        self.imag_part = imag
        
    def displayComplex(self):
        print("{0}+{1}j".format(self.real_part,self.imag_part))
        
cmp1 = MyComplexNumber(40,50)
cmp1.displayComplex()
cmp2 = MyComplexNumber(60,70)
cmp2.new_attribute=80
print(cmp2.real_part,cmp2.imag_part,cmp2.new_attribute)


##Python Arrays
arr = [10,20,30,40,50]
print(arr[0])

brands = ["Coke","Apple","Google","Microsoft","Toyota"]
num_brands = len(brands)
print(num_brands)
brands.append("blue")
print(brands)