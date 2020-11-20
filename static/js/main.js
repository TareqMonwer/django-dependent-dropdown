const divisionsDatabox = document.getElementById('division-databox');
const districtsDatabox = document.getElementById('district-databox');
const thanaDatabox = document.getElementById('thana-databox');
const divisionDropdown = document.getElementById('division');
const districtDropdown = document.getElementById('district');
// const thanaDropdown = document.getElementById('thana');
const districtDefaultText = document.getElementById('district-default-text');
const thanaDefaultText = document.getElementById('thana-default-text');

// Cities Dropdown activator
$('.ui.dropdown').dropdown({
    forceSelection: false,
});


// divisions (initial dropdown)
$.ajax({
    type: 'GET',
    url: '/divisions/',
    success: function(response) {
        // console.log(response.data);
        const divisionsData = response.data;
        divisionsData.forEach(division => {
            const option = document.createElement('div');
            option.textContent = division.name;
            option.setAttribute('class', 'item');
            option.setAttribute('data-value', division.name);
            divisionsDatabox.appendChild(option);
        })
    },
    error: function(err) {
        console.log(err);
    },
})

// Division on change event
divisionDropdown.addEventListener('change', ev => {
    // console.log(ev.target.value);
    const selectedDivision = ev.target.value;

    // Empty prev selected items, default item from the district dropdown
    districtsDatabox.innerHTML = '';
    districtDefaultText.textContent = 'Choose a district';
    districtDefaultText.classList.add('default');
    thanaDefaultText.textContent = 'Choose a thana';
    thanaDefaultText.classList.add('default');

    $.ajax({
        type: 'GET',
        url: `districts/${selectedDivision}/`,
        success: function(response) {
            // console.log(response.data);
            const districtsData = response.data;
            districtsData.forEach(district => {
                const option = document.createElement('div');
                option.textContent = district.name;
                option.setAttribute('class', 'item');
                option.setAttribute('data-value', district.name);
                districtsDatabox.appendChild(option);
            })
        },
        error: function(err) {
            console.log(err);
        }
    })
})

// District on change event
districtDropdown.addEventListener('change', ev => {
    // console.log(ev.target.value);

    const selectedDistrict = ev.target.value;

    thanaDatabox.textContent = '';
    thanaDefaultText.textContent = 'Choose a thana';
    thanaDefaultText.classList.add('default');

    $.ajax({
        type: 'GET',
        url: `thana/${selectedDistrict}/`,
        success: function(response) {
            // console.log(response.data);
            const thanaData = response.data;
            thanaData.forEach(thana => {
                const option = document.createElement('div');
                option.textContent = thana.name;
                option.setAttribute('class', 'item');
                option.setAttribute('data-value', thana.name);
                thanaDatabox.appendChild(option);
            })
        },
        error: function(err) {
            console.log(err);
        }
    })
})