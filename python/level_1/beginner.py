from phone import Phone
from item import Item
from keyboard import Keyboard
              
item1 = Item("MyItem",766,6)
item1.name = "OtherItem"
item1.apply_increment(0.2)
print(item1.name)

print(item1.price)
print(item1.send_email())

item3 = Keyboard("newkeyboard",1000,3)
item3.apply_discount()
print(item1.price)



