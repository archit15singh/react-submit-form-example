import { useState } from "react";
import "./App.css";

function App() {
  const initialFormData = {
    username: "",
    email: "",
    password: "",
    fullName: "",
    gender: "",
    subscribe: false,
    country: "",
    message: "",
    birthdate: ""
  }

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) =>  {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  const handleReset = () => setFormData(initialFormData)

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="fieldset__input">
        <legend className="fieldset__legend">Text Inputs</legend>
        <label className="input__label" htmlFor="username">
          Username:
        </label>
        <input
          className="input__field"
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={formData.username}
        />

        <label className="input__label" htmlFor="email">
          Email:
        </label>
        <input
          className="input__field"
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />

        <label className="input__label" htmlFor="password">
          Password:
        </label>
        <input
          className="input__field"
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />

        <label className="input__label" htmlFor="fullname">
          Full Name:
        </label>
        <input
          className="input__field"
          type="text"
          id="fullname"
          name="fullName"
          onChange={handleChange}
          value={formData.fullName}
        />
      </fieldset>

      <fieldset className="fieldset__input">
        <legend className="fieldset__legend">
          Radio Buttons and Checkboxes
        </legend>
        <label className="input__label" htmlFor="male">
          <input
            className="input__field"
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            id="male"
            checked={formData.gender === "male"}
          />
          Male
        </label>
        <label className="input__label" htmlFor="female">
          <input
            className="input__field"
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            id="female"
            checked={formData.gender === "female"}
          />
          Female
        </label>

        <label className="input__label">
          <input
            className="input__field"
            type="checkbox"
            name="subscribe"
            onChange={handleChange}
            checked={formData.subscribe}
          />
          Subscribe to newsletter
        </label>
      </fieldset>

      <fieldset className="fieldset__input">
        <legend className="fieldset__legend">Select and Textarea</legend>
        <label className="input__label" htmlFor="country">
          Country:
        </label>
        <select
          className="input__field"
          id="country"
          name="country"
          onChange={handleChange}
          value={formData.country}
        >
          <option value="-- Choose --"></option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">UK</option>
        </select>

        <label className="input__label" htmlFor="message">
          Message:
        </label>
        <textarea
          className="input__field"
          id="message"
          rows="4"
          cols="50"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </fieldset>

      <fieldset className="fieldset__input">
        <legend className="fieldset__legend">Date and File Input</legend>
        <label className="input__label" htmlFor="birthdate">
          Birthdate:
        </label>
        <input
          className="input__field"
          type="date"
          id="birthdate"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
        />

      </fieldset>

      <fieldset className="fieldset__buttons">
        <button className="submit__button" type="submit">
          Submit
        </button>
        <button className="submit__button" type="button" onClick={handleReset}>
          Reset
        </button>
      </fieldset>
    </form>
  );
}

export default App;
