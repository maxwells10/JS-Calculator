class AgeCalculator {
    constructor(date, month, year) {
      this.dateOfBirth = new Date(year, month - 1, date);
      this.currentDate = new Date();
      this.monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
  
    getAge() {
      let d1 = this.dateOfBirth.getDate();
      let m1 = this.dateOfBirth.getMonth() + 1;
      let y1 = this.dateOfBirth.getFullYear();
  
      let d2 = this.currentDate.getDate();
      let m2 = this.currentDate.getMonth() + 1;
      let y2 = this.currentDate.getFullYear();
  
      if (d1 > d2) {
        d2 += this.monthDays[m2 - 1];
        m2 -= 1;
      }
  
      if (m1 > m2) {
        m2 += 12;
        y2 -= 1;
      }
  
      let d = d2 - d1;
      let m = m2 - m1;
      let y = y2 - y1;
  
      document.getElementById("age").innerHTML =
        `Your Age is ${y} Years ${m} Months ${d} Days`;
    }
  }
  
  function calculateAge() {
    const date = document.getElementById("date").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
  
    const calculator = new AgeCalculator(date, month, year);
    calculator.getAge();
  }
  