name_array=[];

function submit()
{
    var n1=document.getElementById("name1").value;
    var n2=document.getElementById("name2").value;
    var n3=document.getElementById("name3").value;
    var n4=document.getElementById("name4").value;

    name_array.push(n1);
    name_array.push(n2);
    name_array.push(n3);
    name_array.push(n4);

    document.getElementById("display_name").innerHTML=name_array;
    document.getElementById("ButtonSubmit").style.display="none";
    document.getElementById("ButtonSort").style.display="inline-block";
    
}

function sort()
{
   name_array.sort();
   document.getElementById("display_name").innerHTML=name_array;
}