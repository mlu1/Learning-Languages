import csv
class Item:
    pay_rate = 0.8
    all = []
    def __init__(self,name:str,price:float,quantity=0):
        assert price >= 0 ,f"{price} is not greater than zero!"
        assert quantity >= 1 ,f"{quantity} is not greater than zero!"
        self.name = name
        self.price = price
        self.quantity = quantity
        Item.all.append(self)
        
    def calculate_total_price(self):
        return self.price * self.quantity
        
    def apply_discount(self):
        self.price = self.price * Item.pay_rate
     
    @classmethod
    def instantiate_from_csv(cls):
        with open('items.csv','r') as f:
            reader = csv.DictReader(f)
            items = list(reader)
        
        for item in items:
            Item(
                name = item.get('name'),
                price = float(item.get('price')),
                quantity = int(item.get('quantity')),
                )
    
    @staticmethod
    def is_integer(num):
        if isinstance(num,float):
            return num.is_integer()
        elif isinstance(num,int):
            return True
        else:
            return False
           
    def __repr__(self):
        return f"{self.__class__.__name__}('{self.name}',{self.price},{self.quantity})"


class Phone(Item):
     def __init__(self,name:str,price:float,quantity=0,broken_phones=0):
        super().__init__(
            name,price,quantity
        )  
        assert broken_phones >= 1 ,f" Broken Phones{broken_phones} is not greater than zero!"   
        self.broken_phones = broken_phones
              
phone1 = Phone("jvc",500,5,1)
print(Item.all)
print(Phone.all)