class Item:
    pay_rate = 0.8
    def __init__(self,name:str,price:float,quantity=0):
        assert price >= 0 ,f"{price} is not greater than zero!"
        assert quantity >= 1 ,f"{quantity} is not greater than zero!"
        self.name = name
        self.price = price
        self.quantity = quantity
        
    def calculate_total_price(self):
        return self.price * self.quantity
        
    def apply_discount(self):
        self.price = self.price * Item.pay_rate

item1 = Item("Phone",100,1)
item1.apply_discount()
print(item1.price)



