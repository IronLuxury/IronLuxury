
setTimeout(()=> {
    const toasts = document.querySelectorAll('.toast')
    
    toasts.forEach(toast => {
        new bootstrap.Toast(toast).hide()
},4000)

})

