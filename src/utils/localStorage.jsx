
const employees = [
  {
    "id": 1,
    "password": "123",
    "email": "employee1@example.com",
    "firstName": "Arjun",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "fail": false,
        "title": "Task 1",
        "description": "Complete the onboarding training",
        "taskDate": "2024-11-20",
        "category": "Training"
      },
      {
        "taskNumber": 2,
        "active": false,
        "newTask": false,
        "completed": true,
        "fail": false,
        "title": "Task 2",
        "description": "Review quarterly financial report",
        "taskDate": "2024-11-19",
        "category": "Finance"
      },
      {
        "taskNumber": 3,
        "active": false,
        "newTask": false,
        "completed": false,
        "fail": true,
        "title": "Task 3",
        "description": "Fix the bug in the email system",
        "taskDate": "2024-11-21",
        "category": "Development"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "fail": 1
    }
  },
  {
    "id": 2,
    "password": "123",
    "email": "employee2@example.com",
    "firstName": "Priya",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "fail": false,
        "title": "Task 1",
        "description": "Conduct team meeting",
        "taskDate": "2024-11-22",
        "category": "Management"
      },
      {
        "taskNumber": 2,
        "active": true,
        "newTask": false,
        "completed": false,
        "fail": false,
        "title": "Task 2",
        "description": "Prepare the marketing strategy for Q1",
        "taskDate": "2024-11-23",
        "category": "Marketing"
      },
      {
        "taskNumber": 3,
        "active": false,
        "newTask": false,
        "completed": true,
        "fail": false,
        "title": "Task 3",
        "description": "Submit annual budget plan",
        "taskDate": "2024-11-15",
        "category": "Finance"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "fail": 0
    }
  },
  {
    "id": 3,
    "password": "123",
    "email": "employee3@example.com",
    "firstName": "Ravi",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "fail": false,
        "title": "Task 1",
        "description": "Redesign website homepage",
        "taskDate": "2024-11-18",
        "category": "Design"
      },
      {
        "taskNumber": 2,
        "active": false,
        "newTask": false,
        "completed": false,
        "fail": true,
        "title": "Task 2",
        "description": "Update mobile app with new features",
        "taskDate": "2024-11-25",
        "category": "Development"
      },
      {
        "taskNumber": 3,
        "active": true,
        "newTask": false,
        "completed": false,
        "fail": false,
        "title": "Task 3",
        "description": "Optimize database performance",
        "taskDate": "2024-11-30",
        "category": "Operations"
      },
      {
        "taskNumber": 4,
        "active": false,
        "newTask": false,
        "completed": true,
        "fail": false,
        "title": "Task 4",
        "description": "Create internal knowledge base",
        "taskDate": "2024-11-10",
        "category": "HR"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "fail": 1
    }
  },
  {
    "id": 4,
    "password": "123",
    "email": "employee4@example.com",
    "firstName": "Anjali",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "fail": false,
        "title": "Task 1",
        "description": "Conduct user research for new product",
        "taskDate": "2024-11-20",
        "category": "Research"
      },
      {
        "taskNumber": 2,
        "active": false,
        "newTask": false,
        "completed": true,
        "fail": false,
        "title": "Task 2",
        "description": "Prepare legal documents for new partnerships",
        "taskDate": "2024-11-14",
        "category": "Legal"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "fail": 0
    }
  },
  {
    "id": 5,
    "password": "123",
    "email": "employee5@example.com",
    "firstName": "Neha",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "fail": false,
        "title": "Task 1",
        "description": "Draft social media content plan",
        "taskDate": "2024-11-19",
        "category": "Marketing"
      },
      {
        "taskNumber": 2,
        "active": true,
        "newTask": false,
        "completed": false,
        "fail": false,
        "title": "Task 2",
        "description": "Build data visualization dashboard",
        "taskDate": "2024-11-22",
        "category": "IT"
      },
      {
        "taskNumber": 3,
        "active": false,
        "newTask": false,
        "completed": true,
        "fail": false,
        "title": "Task 3",
        "description": "Write press release for new product launch",
        "taskDate": "2024-11-13",
        "category": "PR"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "fail": 0
    }
  }
];

const admin = [{
  "id": 1,
  "password": "123",
  "email": "admin@example.com"
}];


export const setLocalStorage =  ()=>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))
  return{employees, admin}
}