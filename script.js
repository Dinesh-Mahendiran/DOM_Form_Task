// // Form

var First_Name_lab=document.createElement("label");
First_Name_lab.innerHTML="Enter your First_Name";
First_Name_lab.setAttribute("for","name");
First_Name_lab.setAttribute("class","name");

var First_Name_inp=document.createElement("input");
First_Name_inp.setAttribute("type","text");
First_Name_inp.setAttribute("id","name");

var First_Name_break_tag=document.createElement("br");

document.body.append(First_Name_lab,First_Name_break_tag,First_Name_inp);

// // Last_Name

var break_tag1=document.createElement("br");
document.body.append(break_tag1);


var Last_Name_lab=document.createElement("label");
Last_Name_lab.innerHTML="Enter your Last_Name";
Last_Name_lab.setAttribute("for","name");

var Last_Name_inp=document.createElement("input");
Last_Name_inp.setAttribute("type","name");
Last_Name_inp.setAttribute("id","Lastname");

var Last_Name_break_tag2=document.createElement("br");

document.body.append(Last_Name_lab,Last_Name_break_tag2,Last_Name_inp);

// // Address



var break_tag3=document.createElement("br");
document.body.append(break_tag3);

var address=document.createElement("label");
address.innerHTML="Address";
address.setAttribute("for","Address");

var add_inp=document.createElement("textarea");
add_inp.setAttribute("name","Address");
add_inp.setAttribute("rows","10");
add_inp.setAttribute("cols","30");
add_inp.setAttribute("id","address");

var break_tag4=document.createElement("br");
document.body.append(break_tag4);

document.body.append(address,break_tag4,add_inp);


// // pincode

var breaked_tag=document.createElement("br");
document.body.append(breaked_tag);

var pincode_label=document.createElement("label");
pincode_label.innerHTML="Pincode";
pincode_label.setAttribute("for","pincode");

var pincode_input=document.createElement("input");
pincode_input.setAttribute("type","pincode");
pincode_input.setAttribute("name","pincode");
pincode_input.setAttribute("id","pincode");

var pin_break_tag=document.createElement("br");
document.body.append(pin_break_tag);

document.body.append(pincode_label,pin_break_tag,pincode_input);


// // Gender

var break_gen_tag=document.createElement("br");
document.body.append(break_gen_tag);


var gender_label=document.createElement("label");
gender_label.innerHTML="Gender";
gender_label.setAttribute("for","gender");
document.body.append(gender_label);

var break_gen_tag1=document.createElement("br");
document.body.append(break_gen_tag1);



var select = document.createElement('select');
select.setAttribute("id","select");

var option = document.createElement('option');
option.innerHTML = 'select a gender';
select.appendChild(option);

document.body.append(select);


var male_option= document.createElement('option');
male_option.text = 'Male';
select.appendChild(male_option);

document.body.append(select);

var female_option = document.createElement('option');
female_option.text = 'Female';
select.appendChild(female_option);

// // choice of food

var breaked_tag=document.createElement("br");
document.body.append(breaked_tag);

var label=document.createElement("label");
label.innerHTML="Choice of food";
document.body.append(label);

var breaked_tag1=document.createElement("br");
document.body.append(breaked_tag1);


var choice_of_food=document.createElement('select');
choice_of_food.setAttribute("id","id_food")

var option1=document.createElement('option');
option1.innerHTML='select a food';
choice_of_food.append(option1);
document.body.append(choice_of_food);


var option2=document.createElement("option");
option2.innerHTML="Indian";
choice_of_food.append(option2);
document.body.append(choice_of_food);

var option3 = document.createElement("option");
option3.innerHTML="Chinese";
choice_of_food.append(option3);
document.body.append(choice_of_food);

var option4=document.createElement("option");
option4.innerHTML="Japanese";
choice_of_food.append(option4);
document.body.append(choice_of_food);

var option5=document.createElement("option");
option5.innerHTML="korian";
choice_of_food.append(option5);
document.body.append(choice_of_food);


var option6=document.createElement("option");
option6.innerHTML="Northern";
choice_of_food.append(option6);
document.body.append(choice_of_food);

// // State

var breaks_tag=document.createElement("br");
document.body.append(breaks_tag);

var label=document.createElement("label");
label.innerHTML="Select a state";
document.body.append(label);

var breaks_tag1=document.createElement("br");
document.body.append(breaks_tag1);

var state=document.createElement("select");
state.setAttribute("id","id_state")

var s1=document.createElement("option");
s1.innerHTML="select a state";
state.append(s1);
document.body.append(state);

var s2=document.createElement("option");
s2.innerHTML="Tamilnadu";
state.append(s2);
document.body.append(state);


var s3=document.createElement("option");
s3.innerHTML="Andhara";
state.append(s3);
document.body.append(state);


var s4=document.createElement("option");
s4.innerHTML="Karnataka";
state.append(s4);
document.body.append(state);

var s5=document.createElement("option");
s5.innerHTML="Gujarat";
state.append(s5);
document.body.append(state);


var s6=document.createElement("option");
s6.innerHTML="Maharastra";
state.append(s6);
document.body.append(state);

// // Counrty

var breaktag34=document.createElement("br");
document.body.append(breaktag34);


var label=document.createElement("label");
label.innerHTML="Country";
document.body.append(label);

var breaktag4=document.createElement("br");
document.body.append(breaktag4);

var sel_country=document.createElement("select");
sel_country.setAttribute("id","id_country");

var emp_country=document.createElement("option");
emp_country.innerHTML="select a country";
sel_country.append(emp_country);
document.body.append(sel_country);


var c1=document.createElement("option");
c1.innerHTML="India";
sel_country.append(c1);
document.body.append(sel_country);


var c2=document.createElement("option");
c2.innerHTML="Australia";
sel_country.append(c2);
document.body.append(sel_country);

var c3=document.createElement("option");
c3.innerHTML="South Africa";
sel_country.append(c3);
document.body.append(sel_country);

var c4=document.createElement("option");
c4.innerHTML="Bangaladesh";
sel_country.append(c4);
document.body.append(sel_country);

var c5=document.createElement("option");
c5.innerHTML="Srilanaka";
sel_country.append(c5);
document.body.append(sel_country);



// // Table

// {/* <table id="tables">
//     <tr>
//         <th>jqbdj</th>
//         <th>egfh</th>
//     </tr>
// </table> */}


var table=document.createElement("table");
table.setAttribute("id","tableid");


// // table row   

var table_row=document.createElement("tr");
table_row.setAttribute("id","tablerow");



// // table head

var th1=document.createElement("th");
th1.innerHTML="First_Name";
th1.setAttribute("id","FN_id");
table_row.append(th1);
document.body.append(table_row);

var th2=document.createElement("th");
th2.innerHTML="Last_Name";
th2.setAttribute("id","LN_id");
table_row.append(th2);
document.body.append(table_row);


var th3=document.createElement("th");
th3.innerHTML="Address";
th3.setAttribute("id","Address_id");
table_row.append(th3);
document.body.append(table_row);


var th4=document.createElement("th");
th4.innerHTML="pincode";
th4.setAttribute("id","pincode_id");
table_row.append(th4);
document.body.append(table_row);


var th5=document.createElement("th");
th5.innerHTML="Gender";
th5.setAttribute("id","Gender_id");
table_row.append(th5);
document.body.append(table_row);



var th6=document.createElement("th");
th6.innerHTML="Food";
th6.setAttribute("id","Food_id");
table_row.append(th6);
document.body.append(table_row);

var th7=document.createElement("th");
th7.innerHTML="State";
th7.setAttribute("id","state_id");
table_row.append(th7);
document.body.append(table_row);

var th8=document.createElement("th");
th8.innerHTML="Country";
th8.setAttribute("id","country_id");
table_row.append(th8);
document.body.append(table_row);

table.append(table_row);
document.body.append(table);


// {/* <input type="button" onclick="myFunction()" value="Submit "> */}

var label_submit=document.createElement("input");
label_submit.setAttribute("type","button");
label_submit.setAttribute("onclick","myfunction()");
label_submit.setAttribute("value","On Submit");
document.body.append(label_submit);

// // function

function myfunction()
{
    var table_id=document.getElementById("tableid");
    var row=table_id.insertRow(1);
    var First_Name=row.insertCell(0);
    var Last_Name=row.insertCell(1);
    var Address=row.insertCell(2);
    var Pincode=row.insertCell(3);
    var Gender=row.insertCell(4);
    var food=row.insertCell(5);
    var state=row.insertCell(6);
    var Country=row.insertCell(7);
    First_Name.innerHTML=document.getElementById("name").value;
    Last_Name.innerHTML=document.getElementById("Lastname").value;
    Address.innerHTML=document.getElementById("address").value;
    Pincode.innerHTML=document.getElementById("pincode").value;
    Gender.innerHTML=document.getElementById("select").value;
    food.innerHTML=document.getElementById("id_food").value;
    state.innerHTML=document.getElementById("id_state").value;
    Country.innerHTML=document.getElementById("id_country").value;
    
    resetcol();

}

function resetcol()
{
    document.getElementById("name").value="";
    document.getElementById("Lastname").value="";
    document.getElementById("address").value="";
    document.getElementById("pincode").value="";
    document.getElementById("select").value="";
    document.getElementById("id_food").value="";
    document.getElementById("id_state").value="";
    document.getElementById("id_country").value="";
}










