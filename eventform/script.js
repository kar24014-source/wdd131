const form = document.querySelector("#event-form");
const attendeeType = document.querySelector("#attendee-type");
const credentialField = document.querySelector("#credential-field");
const credentialLabel = document.querySelector("#credential-label");
const credential = document.querySelector("#credential");
const credentialHint = document.querySelector("#credential-hint");
const errors = document.querySelector("#errors");
const errorList = document.querySelector("#error-list");
const ticket = document.querySelector("#ticket");

function updateCredentialField() {
  const type = attendeeType.value;
  credentialField.hidden = !type;
  credential.disabled = !type;
  credential.required = Boolean(type);
  credential.value = "";
  credentialLabel.textContent = type === "student" ? "Student I#" : "Access Code";
  credentialHint.textContent = type === "student"
    ? "Enter your 9-digit student I number."
    : "Enter EVENT131 (case-sensitive).";
}

attendeeType.addEventListener("change", updateCredentialField);
updateCredentialField();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  errors.hidden = true;
  ticket.hidden = true;
  errorList.replaceChildren();

  const firstName = form.elements.firstName.value.trim();
  const lastName = form.elements.lastName.value.trim();
  const email = form.elements.email.value.trim();
  const date = form.elements.eventDate.value;
  const type = attendeeType.value;
  const code = credential.value;
  const problems = [];

  // Compare local calendar dates, rejecting today as well as past dates.
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const chosen = new Date(`${date}T00:00:00`);

  if (!firstName) problems.push("Enter your first name.");
  if (!lastName) problems.push("Enter your last name.");
  if (!email || !form.elements.email.validity.valid) {
    problems.push("Enter a valid email address.");
  }
  if (!date || !form.elements.eventDate.validity.valid || !(chosen > today)) {
    problems.push("Choose an event date later than today.");
  }
  if (type !== "student" && type !== "guest") {
    problems.push("Choose Student or Guest.");
  }
  if (type === "student" && !/^[0-9]{9}$/.test(code)) {
    problems.push("Student I# must contain exactly 9 digits.");
  }
  if (type === "guest" && code !== "EVENT131") {
    problems.push("Access Code must be EVENT131.");
  }

  if (problems.length > 0) {
    problems.forEach(function (message) {
      const item = document.createElement("li");
      item.textContent = message;
      errorList.append(item);
    });
    errors.hidden = false;
    return;
  }

  document.querySelector("#ticket-name").textContent = `${firstName} ${lastName}`;
  document.querySelector("#ticket-email").textContent = email;
  document.querySelector("#ticket-date").textContent = chosen.toLocaleDateString();
  document.querySelector("#ticket-type").textContent = type === "student" ? "Student" : "Guest";
  ticket.hidden = false;
  ticket.focus();
  form.reset();
  updateCredentialField();
});
