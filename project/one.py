#cars = [ 'ford' ,'Dutch ','ferarri' , 'Bmw' ,'Ford','ferarri']

#cars.insert (2, 'kia')

#cars.insert(1 ,'sham')
#cars.append('peugeout')
#cars.insert(0 , 'audi')
#cars.remove('bmw')
#cars.pop()
#b_index = cars.index('bmw')
#count =cars.count('ford')
#print(count)
#cars.sort()
#print(cars)
#def salma (name ,pos , age ):
  #  print("Hello"+ name + ",you are :" +pos + ", your age is : " + str (age))

#salma("nazo" , "web designer" , "39")

#defsalma ():
 #   name = input( "your name:  ")
    #pos = input("your pos :  ")
   # age = input("your Age:  ")
   # print("Hello" + name + ",your are :  " + pos + " your age :" + age)



#salma()

#def cube(num) :
#    return num* num *num

#print(cube(5))
#is_man= False
#is_arab= True
#if is_man and is_arab:
 #   print(" you are an arab man")
#elif is_man and not (is_arab):
 #   print("you are a man but not arab")
#elif not (is_man) and (is_arab):
#    print("you are a woman")
#else:
    #print(" you are beter than arab")

#def max(num1 , num2 ,num3):
 #   if num1>=num2 and num1>=num3:
  #      return num1
   # elif num2>=num1 and num2>=num3:
    #    return num2
  #  else:
    #    return num3
#
#print(max(4,25,6))
#num1= float(input("enter the first number :"))
#op= input("enter the operation :")
#num2= float(input("enter the second number:"))
#if op =="+":
 #   print(num1+num2)
#elif op=="-":
#    print(num1-num2)
#elif op=="/":
  #  print(num1/num2)
#elif op=="*":

 #   print(num1*num2)
#else:
  #  print(" please enter valid operation"

#week={
    #"sat":"satuarday",
   # "sun":"sunday",
#}
#print(week["sat"])
#print(week.get("fri","please try later"))
#i=1
#while i<15:
   # print(i)
  #  i+=3
    #if i > 15:
     #   print("finito")

#for a in "Nizar":
 #   print(a)
  #     print(num)
#cars= ["honda", "kia" , "kia"]
#for num in range (len(cars)):
 #   print(cars[num])

#cars= ["honda", "kia" , "kia"]
#for num in range (len(cars)):
 #   print(num)

#cars= ["honda", "kia" , "kia"]
#for num in range (len(cars)):
 #  print(cars[num] , " is the best!")

#cars= ["honda", "kia" , "kia"]
#for num in range (len(cars)):
 #   if num==1:
 #     print(cars[num] , " is the best!")
#    else:
#        print(cars[num], " is good!")

#print(cars[num])

#password= "nazo"
#word=""
#count= 0
#limit= 3
#out=False
#while word != password and not (out):
  #  if count < limit:
   #     word = input("enter password :  " )
   #     count += 1
  #  else:
     #   out = Trueco
#if out :
 #   print("out of tryy")
#else:
 #   print("correct!")

#grid =  [
  #   [1,2,3],
   #  [4,5,6],
   #  [7,8,9],
   #  [0]
 #]
#print(grid[0][1])

#for row in grid:
  #  for col in row:
  #   print(col)

#file= open("nazar.txt","r")
#print(file.readable())
#print(file.read())
#print(file.readlines()[1])
#for people in file.readlines():
   # print(people)
#file= open("nazar.txt","a")
#file.write("\ndeko is taib")
#file=open("index.HTMl","w")
#file.write(<html><head><head><body><h1>nazo kerdanian</h1></body></html>)
#file.close()
#import main_file
#print(main_file.Damascus)
#print(main_file.city[2])


#name = "nazo"
#print("nazo \"keerdanian\"")
#print(name.islower())
#print(name.isupper())

cars = [ 'ford' ,'Dutch ','ferarri' , 'Bmw' ,'Ford','ferarri']

#cars.insert (2, 'kia')

#cars.insert(1 ,'sham')
#cars.append('peugeout')
#cars.insert(0 , 'audi')
#cars.remove('bmw')
#cars.pop()
#b_index = cars.index('bmw')
#count =cars.count('ford')
#print(count)
#cars.sort()
#print(cars)))
myList = []
swapped = True
num = int(input("How many elements do you want to sort: "))

for i in range(num):
    val = float(input("Enter a list element: "))
    myList.append(val)

while swapped:
    swapped = False
    for i in range(len(myList) - 1):
        if myList[i] > myList[i + 1]:
            swapped = True
            myList[i], myList[i + 1] = myList[i + 1], myList[i]

print("\nSorted:")
print(myList)


# [https://edube.org/learn/programming-essentials-in-python/module-completion-2]
#[https://docs.python.org/3/library/functions.html#all]
