// ------------------------------
// 1. CURRIED VALIDATION RULES
// ------------------------------

const required =
  (msg = 'This field is required') =>
  (value) =>
    value.trim().length ? null : msg;

const minLength =
  (min, msg = `Minimum length is ${min}`) =>
  (value) =>
    value.length >= min ? null : msg;

const maxLength =
  (max, msg = `Maximum length is ${max}`) =>
  (value) =>
    value.length <= max ? null : msg;

const isEmail =
  (msg = 'Invalid email format') =>
  (value) =>
    /\S+@\S+\.\S+/.test(value) ? null : msg;

// -----------------------------------------------------
// 2. FIELD VALIDATOR (3-level curried function)
//    validate(field)(rules)(values)
// -----------------------------------------------------

const validate = (field) => (rules) => (values) => {
  for (let rule of rules) {
    const error = rule(values[field]);
    if (error) return { [field]: error };
  }
  return null;
};

// -----------------------------------------------------
// 3. FORM VALIDATION SCHEMA (Declarative)
// -----------------------------------------------------

const schema = [
  validate('name')([required('Name is required'), minLength(3)]),

  validate('email')([required(), isEmail()]),

  validate('password')([required(), minLength(6), maxLength(20)]),
];

// -----------------------------------------------------
// 4. VALIDATE ENTIRE FORM
// -----------------------------------------------------

const validateForm = (schema, values) => {
  const errors = {};

  for (let validator of schema) {
    const result = validator(values);
    if (result) Object.assign(errors, result);
  }

  return errors;
};

// -----------------------------------------------------
// 5. HANDLE FORM SUBMISSION
// -----------------------------------------------------

function handleSubmit() {
  const values = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  };

  const errors = validateForm(schema, values);

  // Clear old messages
  document.getElementById('nameError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('passwordError').innerText = '';
  document.getElementById('successMessage').innerText = '';

  // Reset error classes
  document.getElementById('name').classList.remove('error');
  document.getElementById('email').classList.remove('error');
  document.getElementById('password').classList.remove('error');

  // Show new errors
  Object.keys(errors).forEach((field) => {
    document.getElementById(field).classList.add('error');
    document.getElementById(field + 'Error').innerText = errors[field];
  });

  // If no errors → success
  if (Object.keys(errors).length === 0) {
    document.getElementById('successMessage').innerText =
      'Form submitted successfully!';
  }
}
