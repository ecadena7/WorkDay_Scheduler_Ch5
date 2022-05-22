var saveBtn = document.getElementById('9','10','11','12','13','14','15','16','17',)
//↑ is the above string correct? or do i have to create a VAR for each ID?
//↑↑ also, am i choosing the correct lable for my VAR?

$(document).ready(function(){
    var today = moment().format('MMMM Do YY, H:mm:ss a')
    $("#currentDay")
})

saveBtn.addEventListener('click', function(event){
    event.preventDefault();
})

//am i going to set the attribute to each (textarea) to line up with the class?
//create a var that uses class types (past, present, future)