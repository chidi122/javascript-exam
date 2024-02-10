const tasks = [
  { name: "Mondays",
   description: "I Prefer Driving Benz",
    priority: 5 },
  { name: "Weekends", 
  description: "I spend alot of Time With family", 
  priority: 4},
  
  { name: "Saturday", 
  description: "Play FootBall", 
  priority: 3 },
  { name: "Sundays", 
  description: "Drive Bike With My Son", 
  priority: 7 },
  { name: "Gym", 
  description: "Only when I Have Time", 
  priority: 2},
  { name: "Coding", 
  description: "Everyday At Code Factory", 
  priority: 0},
  { name: "Sunday", 
  description: "Just With Family", 
  priority: 6},
  { name: "Alarm",
  description: "Wake Up For Work", 
  priority: 10 },
  
  
  
];


     // Function to create a task card
     function createTaskCard(task) {
      const card = document.createElement("div");
      card.classList.add("card", "mb-3");
      card.style.width = "18rem";
      card.innerHTML = `
          <img src="benz.jpg" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${task.name}</h5>
              <p class="card-text">${task.description}</p>
              <p class="badge bg-${getPriorityColorClass(task.priority)}">${task.priority}</p>
              <button class="btn btn-primary" onclick="increasePriority(${tasks.indexOf(task)})">Priority</button>
          </div>
      `;
      return card;
  }
  // Function to render tasks
  function renderTasks() {
      const taskContainer = document.getElementById("duty");
      taskContainer.innerHTML = "";
      tasks.forEach(task => {
          const taskCard = createTaskCard(task);
          taskContainer.appendChild(taskCard);
      });
  }
  // Function to get Bootstrap color class based on priority
  function getPriorityColorClass(priority) {
      if (priority <= 1) {
          return "success";
      } else if (priority <= 3) {
          return "warning";
      } else {
          return "danger";
      }
  }
  // Function to increase priority
  function increasePriority(index) {
      if (tasks[index].priority < 5) {
          tasks[index].priority++;
      }
      renderTasks();
  }
  // Function to sort tasks by priority
  function sortTasks() {
      tasks.sort((a, b) => a.priority - b.priority);
      renderTasks();
  }
  // Initial rendering
  renderTasks();