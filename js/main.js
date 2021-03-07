$(document).readyfunction () {
    $ ('.submit').click{function (event) {
        event.preventDefault();
        console.log('Clicked Button')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')

        statusElm.empty()

        if (email.length > 5 && email.includes('0') && email.includes('.')){
            statusElm.append('<div>Email is valid</div>')
        } else {
            statusElm.append('<div>Email is not valid</div>')
        }
        if (subject.length > 2){
            statusElm.append('<div>Subject is valid</div>')
        } else {


            
            statusElm.append('<div>Subject is not valid</div>')
        }

        }
    }
}