let inner = document.querySelector('.inner')
let open = document.querySelector('.inner2')

function mapOpen() {
    let option = document.querySelector('#detail option')
    if (option == null) {
        alert('상세지역을 선택하세요.')
    } else {
        open.style.zIndex = '9'
        open.style.opacity = '1'
        inner.style.display = 'none'
    }
}

function mapClose() {
    location.reload(true); //새로고침
    open.style.zIndex = '0'
    inner.style.display = 'flex'
}