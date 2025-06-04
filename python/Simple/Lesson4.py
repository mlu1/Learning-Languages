'''
if ,elif ,else
'''

print("chek eligebility for bank loan")
salary = int(input("How much is your salary"))

if(salary >1000):
    amount = 200
    print("You are eligible to get loan by paying",amount)
elif(salary==1000):
    amount = 500
    print("You are eligible for a loan of",amount)

else:
    print("You are not eligible")



