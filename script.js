/* document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    const messageContainer = document.getElementById('message-container');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            messageContainer.textContent = 'Ваше повідомлення відправлено!';
        } catch (error) {
            messageContainer.textContent = 'Під час відправки виникла помилка';
        }
    });
});
 */
/* 
const form = document.getElementById('myForm');
document.addEventListener('DOMContentLoaded', () => {
    const formData = JSON.parse(localStorage.getItem('formData'));
    if (formData) {
        document.getElementById('name').value = formData.name;
        document.getElementById('email').value = formData.email;
        document.getElementById('comments').value = formData.comments;
    }
})
form.addEventListener('input', (event) =>  {
let formData  = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    comments: document.getElementById('comments').value}
    localStorage.setItem('formData', JSON.stringify(formData));
}) */




/* document.addEventListener('DOMContentLoaded', function () {
    const resultDisplay = document.getElementById('result');
    let wins = 0; 
    let losses = 0;
    let draws = 0; 

    function updateDisplay() {
        resultDisplay.innerHTML = `Перемог: ${wins}, Поразок: ${losses}, Нічиїх: ${draws}`;
    }

    function play(userChoice) {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        updateDisplay();
    }
});
 */




/* let message = document.getElementById('message');
function messageStoppage (message) {
    setTimeout(() => message.textContent = '' ,3000);
    
}
messageStoppage(message);
 */



/* 
let block = document.querySelector('.block');
setTimeout( function () {
    block.style.background = 'black';
    block.style.width = 500 + 'px';
    block.style.height = 500 + 'px';
}, 3000); */



/* let seconds = 20;

let halfTime = seconds / 2;

let timerId = setTimeout(function() {

console.log("Time's up!");

}, halfTime * 1000);



let overallSeconds = 30;
let block = document.querySelector('.block');

let partTime = seconds / 3;

block.style.animation = '0s my-animation linear infinite';


let timerFunction = setTimeout(function() {

block.style.animation = '3s my-animation linear infinite';

}, partTime * 1000);
 */


/* new CountdownTimer()({
    selector: '#timer-1',
    targetDate: new Date('August 12, 2024'),
    currentTime: new Date('May 26, 2024')
});

let time = targetDate.getTime() - currentTime.getTime();
const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000); */




/* class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate;
        this.timerElement = document.querySelector(selector);
        this.daysSpan = this.timerElement.querySelector('[data-value="days"]');
        this.hoursSpan = this.timerElement.querySelector('[data-value="hours"]');
        this.minsSpan = this.timerElement.querySelector('[data-value="mins"]');
        this.secsSpan = this.timerElement.querySelector('[data-value="secs"]');

        this.start();
    }

    start() {
        this.updateTimer();
        this.intervalId = setInterval(() => this.updateTimer(), 1000);
    }

    updateTimer() {
        const currentTime = new Date();
        const time = this.targetDate - currentTime;

        if (time <= 0) {
            this.stopTimer();
            this.updateValues(0, 0, 0, 0);
            return;
        }

        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        this.updateValues(days, hours, mins, secs);
    }

    updateValues(days, hours, mins, secs) {
        this.daysSpan.textContent = String(days).padStart(2, '0');
        this.hoursSpan.textContent = String(hours).padStart(2, '0');
        this.minsSpan.textContent = String(mins).padStart(2, '0');
        this.secsSpan.textContent = String(secs).padStart(2, '0');
    }

    stopTimer() {
        clearInterval(this.intervalId);
    }
} */
/* 
const delay = ms => {
    
  };
  ​
  const logger = time => console.log(`Resolved after ${time}ms`);
  ​
  // Виклич функції для перевірки
  delay(2000).then(logger); // Resolved after 2000ms
  delay(1000).then(logger); // Resolved after 1000ms
  delay(1500).then(logger); // Resolved after 1500ms
   */

  let users = document.querySelector('.user-list')
  let buttonPr = document.querySelector('.prev-btn')
  let pages = document.querySelector('.page-numbers')
  let buttonNx = document.querySelector('.next-btn')

      let allUsers = [
          {name: "user1"},
          {name: "user2"},
          {name: "user3"},
          {name: "user4"},
          {name: "user5"},
          {name: "user6"},
          {name: "user7"},
          {name: "user8"},
          {name: "user9"},
          {name: "user10"},
          {name: "user11"},
          {name: "user12"},
          {name: "user13"},
          {name: "user14"},
          {name: "user15"}
      ]
  let numb = 5
  
      let checkUsers = function(){
          users.innerHTML = ""

      }

  class PaginServise {
      constructor(allUsers, numb){
          this.allUsers = allUsers
          this.numb = numb
          this.firsttpage = 1
      }

      paginationUsers(){
          let startIndex = (firsttpage - 1) * numb
          let endindex = startIndex + this.firsttpage
          return allUsers.slice(startIndex, endindex)
      }

      allPages(){
          return Math.ceil(this.allUsers.lenght / this.numb)
      }
  }

  function updatePaginationControls() { 
    pageNumbers.innerHTML = '';  
    const totalPages = paginationService.getTotalPages();  
    for (let i = 1; i <= totalPages; i++) {  
      const span = document.createElement('span');  
      span.textContent = i;  
      span.classList.add('page-number');  
      if (i === paginationService.currentPage) {  
        span.classList.add('active');  
      } 
      
      span.addEventListener('click', () => { 
        paginationService.goToPage(i);  
        renderUsers();  
      }); 
      pageNumbers.appendChild(span);
    } 
 
   
  }