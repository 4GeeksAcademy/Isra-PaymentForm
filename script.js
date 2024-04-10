function send() {
    let miForm = document.getElementById("form1");
    let data = new FormData(miForm);
    for (var pair of data.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  }
  