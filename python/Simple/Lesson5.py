'''
zoo discounts
'''

price =200

times = int(input("How many times did you enter?"))

if(times ==3):
    price = 200-30
    print('Pay $ ',price)

elif (times ==4):
    price = 120-50
    print('Pay $ ',price)

elif (times ==5):
    price = 120-60
    print('Pay $ ',price)

elif (times >=6):
    price = 120-70
    print('Pay $ ',price)

else:
    print('Total price $',price,'No discount added')
