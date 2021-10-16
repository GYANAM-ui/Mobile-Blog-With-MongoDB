currentLocation = window.location;

function copy() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    // alert("Copied! your profile: " + copyText.value);
    document.getElementById("msg").style.display = "block";
}

const messages = ['The hard days are what make you stronger.', "If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles.", 'In a gentle way, you can shake the world.', 'Do not be pushed around by the fears in your mind. Be led by the dreams in your heart.'];
const randomIndex = Math.round(Math.random() * messages.length);
document.getElementById("your-elements-id").innerHTML = messages[randomIndex];