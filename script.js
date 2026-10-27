
async function hash(string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(string);
  
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

document.getElementById('submit').addEventListener('click', function(){
  let value = document.getElementById('input1').value + document.getElementById('input2').value + document.getElementById('input3').value + document.getElementById('input4').value
  hash(value).then(hash => {
    console.log(hash)
  })
})
