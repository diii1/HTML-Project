const btn = document.getElementById('submit');
btn.addEventListener('click', function(){
    Swal.fire({
        icon: 'success',
        title: 'Success Send Message',
        text: 'Message Sent to Alterra',
    })
});