var prent = document.querySelector('.prnt');
var abset = document.querySelector('.absnt');

var data = 0;
function psinc(x){
    data = data + 1;
    document.getElementById("counterps").innerHTML = data;
    x.disabled = true;
    
}

var data2 = 0;
function asinc(y){
    data2 = data2 + 1;
    document.getElementById("counteras").innerHTML = data2;
    y.disabled = true;
    prent.disabled = true;
}
//Mk@802127




function logout(){
    lout = confirm("Do you want to Logout");
    if(lout == true){
        window.Close();
    }
    else{
        alert("ok then !");
    }
}

function popup(){
    document.querySelector('.overlay').classList.add('showOVERLAY');
    document.querySelector('.popup').classList.add('showmain');
}
function closepopup(){
    document.querySelector('.overlay').classList.remove('showOVERLAY');
    document.querySelector('.popup').classList.remove('showmain');
}
const totalcount =  
    document.querySelector('#tscount').children.length;

    
document.getElementById('ts').innerHTML = totalcount;
console.log(totalcount);

//add div by clicking.





function addEntry() {
    // Get the values from input fields
    const name = document.getElementById('studname').value;
    const rollNumber = document.getElementById('studroll').value;

    // Validate input
    if (!name || !rollNumber) {
        alert('Please enter both name and roll number.');
        return;
    }

    // Create a new entry div
    const entryDiv = document.createElement('div');
    entryDiv.className = 'data1';
    entryDiv.innerHTML = `<h4><strong>${name}</strong> </h4>
                          <p><strong>${rollNumber}</strong> </p>
                          <p><strong>C.S.E.</strong> </p>

                          <section>
                          <button class="prnt" onclick="psinc(this)">P</button>
                          <button class="absnt" onclick="asinc(this)">A</button>
                          </section>
                          `;

                          document.getElementById('ts').innerHTML = totalcount + 1;
    // Append the new entry to the result container
    document.getElementById('tscount').appendChild(entryDiv);
    
    
    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('rollNumber').value = '';
    
    document.querySelector('.overlay').classList.remove('showOVERLAY');
    document.querySelector('.popup').classList.remove('showmain');
}