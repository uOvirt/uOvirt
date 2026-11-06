// uOVirt contact form:
// checks the fields, then opens the user's email app with the message filled in.

const form = document.getElementById("contact-form");
const note = document.getElementById("form-note");
const TO = "contact@uovirt.ca";

function setError(input, message) {
  const field = input.closest(".field");
  field.classList.toggle("invalid", Boolean(message));
  field.querySelector(".error").textContent = message;
}

function validate() {
  const name = form.name;
  const email = form.email;
  const message = form.message;
  let ok = true;

  if (!name.value.trim()) {
    setError(name, "Please enter your name.");
    ok = false;
  } else setError(name, "");

  if (!email.value.trim()) {
    setError(email, "Please enter your email.");
    ok = false;
  } else if (!email.checkValidity()) {
    setError(email, "That email doesn't look right.");
    ok = false;
  } else setError(email, "");

  if (!message.value.trim()) {
    setError(message, "Please type your question.");
    ok = false;
  } else setError(message, "");

  return ok;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validate()) {
    form.querySelector(".invalid input, .invalid textarea").focus();
    return;
  }

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  const subject = `uOVirt question from ${name}`;
  const body = `${message}\n\n— ${name}\n${email}`;

  window.location.href =
    `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  note.textContent = "Your email app should open now. Just hit send!";
  note.classList.add("success");
});

// Clear an error as soon as the person starts fixing that field
form.querySelectorAll("input, textarea").forEach((input) => {
  input.addEventListener("input", () => setError(input, ""));
});
