// TO DO add form validation

class Prompt {
  constructor(text) {
    this.prompt = document.createElement("div");
    this.prompt.classList.add("prompt");

    this.prompt.innerHTML = `
      <form action="javascript:void(0)">
        <label for="input">${text}</label>
        <input type="text" id="input" name="input">
        <input type="submit" value="✔️">
      </form>
    `;

    document.body.appendChild(this.prompt);
  }

  // Form submit resolves promise, so game start awaits form being submitted
  formSubmit() {
    let form = this.prompt.querySelector("form");
    return new Promise((resolve) => {
      form.onsubmit = () => {
        resolve(form.elements[0].value);
      };
    });
  }
}

export { Prompt };
