function append(value) {
      document.getElementById("result").value += value;
    }

    function calculate() {
      try {
        document.getElementById("result").value =
          eval(document.getElementById("result").value);
      } catch {
        document.getElementById("result").value = "Error";
      }
    }

    function clearResult() {
      document.getElementById("result").value = "";
       }

    //  ENTER key support
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        calculate();
      } else if (event.key === "Backspace") {
        let res = document.getElementById("result");
        res.value = res.value.slice(0, -1);
          }
    });
    document.addEventListener("keydown", function (event) {
  const key = event.key;
  const result = document.getElementById("result");

  // Numbers
  if (!isNaN(key)) {
    append(key);
  }

  // Operators
  else if (["+", "-", "*", "/", "%", "."].includes(key)) {
    append(key);
  }

  // Enter = Calculate
  else if (key === "Enter") {
    calculate();
  }

  // Backspace = delete last character
  else if (key === "Backspace") {
    result.value = result.value.slice(0, -1);
  }

  // Delete = clear all
  else if (key === "Delete") {
    clearResult();
  }
});

  
