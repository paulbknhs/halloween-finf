let hash = document.getElementById('input1').value + document.getElementById('input2').value + document.getElementById('input3').value + document.getElementById('input4').value
document.getElementById("submit").addEventListener('click', function(){
  fetch("hash.txt")
  .then((res) => res.text()).then((text) => {
    if (text === hash) {
      document.getElementById("heading").value = "Success!"
    }
  })

}
