async function hash(string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(string);
  
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

document.getElementById("submit").addEventListener('click', verify);

function verify() {
  let value = (
    document.getElementById('input1').value
    + document.getElementById('input2').value
    + document.getElementById('input3').value
    + document.getElementById('input4').value
  ).toUpperCase();
  
  hash(value.toString()).then(hash => {
    if (hash === '799ec119a7e7f7683af2785f4ebac560e6ea7359b3c272b73f4763214e080c91' ) {
      success();
    } else {
      // console.log("Wah wah, falsch! :(")
      // console.log(hash)
    }
  })
}

function success() {
  document.getElementById("heading").textContent = "Good job";
  document.getElementById("subheading").textContent = "You saved finf!";
}