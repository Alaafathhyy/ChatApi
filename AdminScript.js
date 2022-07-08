let roomID;
let pass_data2;
function getMsgs(id) {

    //console.log(id);

    let elements = document.getElementsByClassName(id);

    let name = elements[0].value;
    let user = elements[1].value;
    roomID = id;
    let pass_data = { 'roomID': id, 'name': name, 'user': user };
    pass_data2=pass_data;
    let usrname = document.getElementById(id).innerHTML;
    document.getElementById('cur_user').innerHTML = usrname;
    sendReq(pass_data);
}
function sendReq(pass_data) {
    // $(document).on('submit', '#post-form', function (e) {
    // e.preventDefault();

    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/api/chat/adminchat/',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "token " + "ae18cafe54ab8cbd23dbffbcdb354fe8acdd4aba9b6697b99b8400cf1bc56acd"
        },

        data: JSON.stringify(pass_data),
        success: function (response) {
            var len = response.messages.length;

            $("#display").empty();


            for (let i = 0; i < len; i++) {
                var user = response.messages[i]['isUser'];
                var temp;
                if (user)
                    temp = "<div class='messaging__main-chat__bubble'>";
                else
                    temp = "<div class='messaging__main-chat__bubble user'>"

                temp += "<p>" + response.messages[i]['value'] + "</p><br></div>";
                $("#display").append(temp);
            }

            // e.preventDefault();

        },
        error: function (data) {
            alert('error ')
        }

    });
};


$(document).on('submit', '#post-message', function (e) {
    var pass_data = { "value": $('#message').val(), "room": roomID };
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/api/chat/adminSendView/',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "token " + "ae18cafe54ab8cbd23dbffbcdb354fe8acdd4aba9b6697b99b8400cf1bc56acd"
        },

        data: JSON.stringify(pass_data),

        success: function (data) {
            // alert(data)
           // e.preventDefault();
            sendReq(pass_data2)
           // getMsgs(roomID);


        },
        error: function (data) {
            alert('error')
        }
    });
    document.getElementById('message').value = ''
});

