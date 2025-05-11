name = print(input("What is your name?"))
age  = print(input("How old are you?s"))
age = int(input("age"))

days=age*365
minutes = age *525948
seconds = age * 31556926

print("The man",name,"has been alive for",days,'days',minutes,'minutes',seconds,'seconds')
print("Thanks for using the age calc program")

###Strings####
lastName  = "mtande"
print(lastName)
##New lines###
f_name = "john"
full_name =(f_name.title()+" "+lastName.title())
print(full_name)

#str() built in function#

MyName = "Hello my name is Jeff and my age is"
age = 36
total = (MyName+" "+str(age))
print(total)