import DashboardView from './DashboardViewComponent';

const sampleQuestionSets = [
  {
    "id": "generalInfo",
    "label": "General Info",
    "questions": [
      {
        "id": "name",
        "label": "What is your name?",
        "type": "text",
        "placeholder": "John Doe"
      }, {
        "id": "email",
        "label": "What is your email?",
        "type": "text",
        "placeholder": "hello@hackthenorth.com"
      }, {
        "id": "shirtSize",
        "label": "What is your shirt size?",
        "type": "select",
        "options": [
          {
            "label": "Small",
            "value": "small"
          }, {
            "label": "Medium",
            "value": "medium"
          }, {
            "label": "Large",
            "value": "large"
          }
        ]
      }, {
        "id": "travellingFrom",
        "label": "Where are you travelling from?",
        "type": "text",
        "placeholder": "Montreal, Quebec"
      }, {
        "id": "needsReimbursement",
        "label": "Will you need a travel reimbursement?",
        "type": "select",
        "options": [
          {
            "label": "Yes",
            "value": "y"
          }, {
            "label": "No",
            "value": "n"
          }
        ]
      }, {
        "id": "goal",
        "label": "What is your goal to accomplish Hack the North?",
        "type": "longText",
        "placeholder": "Build something cool!"
      }
    ]
  }, {
    "id": "technicalSkills",
    "label": "Technical Skills",
    "questions": [
      {
        "id": "github",
        "label": "What is your github profile?",
        "type": "text",
        "placeholder": "https://github.com/"
      }, {
        "id": "interest",
        "label": "What is your main interest?",
        "type": "select",
        "options": [
          {
            "label": "Frontend",
            "value": "fe"
          }, {
            "label": "Backend",
            "value": "be"
          }, {
            "label": "Machine Learning",
            "value": "ml"
          }, {
            "label": "Product Design",
            "value": "pd"
          }
        ]
      }, {
        "id": "project",
        "label": "What is a cool project that you built? How did you build it? Why did you build it?",
        "type": "longText",
        "placeholder": "Uber for dogs"
      }
    ]
  }
]

export default DashboardView;
