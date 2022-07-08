
$(document).ready(function(){

    setInterval(function(){
        
        $.ajax({
        type: 'GET',
        url : "http://127.0.0.1:8000/api/chat/",
        headers: {
            'Content-Type': 'application/json',
            Authorization: "token " +"68705df101e6fd0554d79e60ccd58bcd65c389f609b1222fcc1f39d8d28168d8"
        },
        
        success: function(response){         
            var len=response.messages.length
            $("#display").empty();
            
            for (let i=0;i<len;i++)
            {
                var user=response.messages[i]['isUser'];
                var temp;
                if(!user)
                    temp="<div class='messaging__main-chat__bubble'>";
                else 
                    temp="<div class='messaging__main-chat__bubble user'>"    

                temp+="<p>"+response.messages[i]['value']+"</p><br></div>";
                $("#display").append(temp);
            }
        },
        error: function(response){
       
            alert('An error occured')
 }
    });
},1000);
})

    

    $(document).on('submit','#post-form',function(e){
        var pass_data = {"value":$('#message').val()};
        e.preventDefault();
        console.log(pass_data);
        $.ajax({
          type:'POST',
          url:'http://127.0.0.1:8000/api/chat/',
          headers: {
            'Content-Type': 'application/json',
            Authorization: "token " +"68705df101e6fd0554d79e60ccd58bcd65c389f609b1222fcc1f39d8d28168d8"
        },
      
         data:JSON.stringify(pass_data),
        
          success: function(data){
            
          },
          error: function(data){
            alert('error')
          }
        });
        document.getElementById('message').value = "";
      });

