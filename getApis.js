function getCustomers() {

    $.ajax({
        type: 'GET',
        url: "http://127.0.0.1:8000/api/chat/getCustomers/",
        headers: {
            'Content-Type': 'application/json',
            Authorization: "token " + "ae18cafe54ab8cbd23dbffbcdb354fe8acdd4aba9b6697b99b8400cf1bc56acd"
        },

        success: function (response) {
            //console.log(response.rooms);
            var len = response.rooms.length;
            $("#person_list").empty();

            for (let i = 0; i < len; i++) {

                temp = "<li>"
                temp += "<a href='#' class='messaging__person'  onclick=' getMsgs(" + response.rooms[i]['id'] + ")'> ";
                temp += "<figure class='messaging__image-item' data-background-image:url('http://127.0.0.1:8000" + response.rooms[i]['user']['profile_picture'] + ")></figure>";
                temp += "<figure class='content'>";
                temp += "<h5 id="+response.rooms[i]['id']+" >" + response.rooms[i]['user']['first_name'] + " " + response.rooms[i]['user']['last_name'] + "<h5>";
                temp += "</figure></a>";
                temp += " <input type='hidden' class=" + response.rooms[i]['id'] + " value=" + response.rooms[i]['name'] + ">";
                temp += " <input type='hidden' class=" + response.rooms[i]['id'] + " value=" + response.rooms[i]['user'] + ">";

                temp += "</li>";
                $("#person_list").append(temp);

            }
            // var temp="</form>"
            // $("#display").append(temp);
        },
        error: function (response) {

            alert('An error occured')
        }
    })
    


}
function getProviders() {

    $.ajax({
        type: 'GET',
        url: "http://127.0.0.1:8000/api/chat/getProviders/",
        headers: {
            'Content-Type': 'application/json',
            Authorization: "token " + "ae18cafe54ab8cbd23dbffbcdb354fe8acdd4aba9b6697b99b8400cf1bc56acd"
        },

        success: function (response) {
            //console.log(response.rooms);
            var len = response.rooms.length;
            $("#person_list").empty();

            for (let i = 0; i < len; i++) {

                temp = "<li>"
                temp += "<a href='#' class='messaging__person'  onclick=' getMsgs(" + response.rooms[i]['id'] + ")'> ";
                temp += "<figure class='messaging__image-item' data-background-image:url('http://127.0.0.1:8000" + response.rooms[i]['user']['profile_picture'] + ")></figure>";
                temp += "<figure class='content'>";
                temp += "<h5 id="+response.rooms[i]['id']+" >" + response.rooms[i]['user']['first_name'] + " " + response.rooms[i]['user']['last_name'] + "<h5>";
                temp += "</figure></a>";
                temp += " <input type='hidden' class=" + response.rooms[i]['id'] + " value=" + response.rooms[i]['name'] + ">";
                temp += " <input type='hidden' class=" + response.rooms[i]['id'] + " value=" + response.rooms[i]['user'] + ">";

                temp += "</li>";
                $("#person_list").append(temp);

            }
        },
        error: function (response) {

            alert('An error occured')
        }
    })


}

document.getElementById('getCustomers').onclick = getCustomers;
document.getElementById('getProviders').onclick = getProviders;