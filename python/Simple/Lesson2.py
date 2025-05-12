animals = ["lion","tiger","dog","parrot"]
msg1 = "I love my "

'''
For Loop in Lists
'''
for animal in animals:
    print(msg1+animal)

fruits= ["Apple","Banana","Oranges","Peach"]

for i in range(0,len(fruits)):
    print(fruits[i])


Toyota =["Camera","Corola","Nissan"]
del Toyota[2]
del Toyota[0]
print(Toyota)

'''
sort and reverse methods
'''

RandomStuff = ["Book","Apple","Dog","Camel"]
RandomStuff.sort(reverse=True)
print(RandomStuff)

ListNums = [1,2,2,3,3,3,9,10,8]
print(sum(ListNums))

var = 10

if var == 10:
    print("v is 10")
else:
    print("v is not == 10")
    

greater =10
less =5

if greater >= less:
    print("yes")
else:
    print("no")