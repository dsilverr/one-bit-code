const form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev){
    ev.preventDefault()
    
    const name  = document.querySelector('input[name="name"]').value 
    const address = document.querySelector('input[name="address"]').value
    const bread = document.querySelector('select[name="bread"]').value
    const meat = document.querySelector('input[name="meat"]').value
    const observations = document.querySelector('textarea[name="observations"]').value

    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){
        salad += ' - ' + item.value + '\n'
    })

    console.log({
        name,
        address,
        bread,
        meat,
        observations,
        salad
    })
})