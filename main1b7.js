function baitoandem(){
    function factorial(n) {
        if (n === 0 || n === 1) {
          return 1;
        }
        return n * factorial(n - 1);
      }
    
      function numberOfWaysToArrangeMarbles() {
        const NumberMarbles = 12;
        const NumberChoose = 2;
    
        // số cách chọn 2 viên
        const numWays = (factorial(NumberMarbles) / factorial(NumberMarbles - NumberChoose))/2;
        return numWays;
    }
    
    console.log("số cách chọn 2 viên từ túi 12 viên bi: ", numberOfWaysToArrangeMarbles());
    let kq = document.getElementById("baitoandem")
    kq.innerHTML = "số cách chọn 2 viên từ túi 12 viên bi: " + numberOfWaysToArrangeMarbles()
    }