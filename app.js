var form=document.getElementById('addform');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

//form submit event

form.addEventListener('submit' , addItem);

//delete event

itemList.addEventListener('click' , removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

//add item

 function addItem(e){
     e.preventDefault();


 //get  input  value

  var  newitem=document.getElementById('item').value;

  // create neww li element 
   var li = document.createElement('li');


   //add class
    
    li.className='list-group-item';
    console.log(li);

    //add text node input  value
     
     li.appendChild(document.createTextNode(newitem));

     // create del button element

     var deleteBtn= document.createElement('button');

     //add classesto del button

     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

     //append text node

     deleteBtn.appendChild(document.createTextNode('X'));

     //append button to li 

     li.appendChild(deleteBtn);
     
     //appned li to list 
     itemList.appendChild(li);


 }

 function removeItem(e){
 if(e.target.classList.contains('delete'))
 {
    if(confirm(' are you sure!')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
 }
 }

 //filter Items
 function filterItems(e){
    //convert text  to lowerCase
    var text= e.target.value.toLowerCase();
    
    //get lis
     var Items =itemList.getElementsByTagName('li');
     
     //convert to  an array

      Array.from(Items).forEach(function(item){

        var itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display ='block';

        }
        else{
            item.style.display='none';
        }
      });
    }