
const OPTIONS = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '0d59c9c05dmshc2338cb401088fap16ff8bjsn57c12cd13e01',
        'x-rapidapi-host': 'ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com'
    }
};

const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com/backend/ipinfo/?ip=${ip}`, OPTIONS)
        .then(res => res.json())
        .catch(err => console.log(err))
}



const $form = document.querySelector('#form')
const $input = document.querySelector('#input')
const $submit = document.querySelector('#submit')
const $results = document.querySelector('#results')

$form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const { value } = $input
    if (!value) return

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')
    $submit.setAttribute('aria-busy','stop')

    const ipInfo = await fetchIpInfo(value)

    if (ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disable')
    $submit.removeAttribute('arial- busy')
})