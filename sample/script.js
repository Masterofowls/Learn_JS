function changePage() {
    let tdata = document.querySelector('thead'); // Add quotes around selector
    tdata.innerHTML = 'New data'; // Fix capitalization: innerHTML (not innerHtml)
}

function changeData() {
    document.getElementById('display').textContent = 'Updated Data!';
}
changePage();
