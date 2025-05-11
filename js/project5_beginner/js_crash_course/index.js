var arr = new Array(10,20,30,40,50,60)

/* 
    Sorting and Searching.
*/

var arr2 = new Array(7,2,8,1,3,4);
var i,j,temp;

document.write("<br/> Before sort...<br/>")
document.write(arr2);

/*
    Sorting
*/

for (i=0;i<arr2.length;i++){
    for(j=0;j<arr2.length-1;j++){
        if(arr2[j] > arr2[j+1]){
            temp = arr2[j];
            arr2[j] = arr2[j+1]
            arr2[j + 1] = temp;
        }
    }
}

document.write("<br/> <br/> After...<br/>")
document.write(arr2)


/*
    School Grades
*/
var m1 = parseInt(prompt("Enter Mark 1","Enter"))
var m2 = parseInt(prompt("Enter Mark 2","Enter"))
var m3 = parseInt(prompt("Enter Mark 3","Enter"))

var total = m1+m2+m3

var  percent= total*100/150
alert(percent)

if(percent > 80){
    alert("Grade A")
}
else if (percent >=60){
    alert("Grade B")
}

else if (percent >=40){
    alert("Grade C")
}
else{
    alert("Grade D")
}