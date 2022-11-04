// TO DO add form validation

class Prompt {
  constructor(text, type = "text") {
    this.prompt = document.createElement("div");
    this.prompt.classList.add("prompt");

    switch (type) {
      case "text":
        this.prompt.innerHTML = `
          <form action="javascript:void(0)">
            <label for="input">${text}</label>
            <input type="text" id="input" name="input">
            <input type="submit" value="✔️">
          </form>
        `;
        break;
      case "OK":
        this.prompt.innerHTML = `
            <form action="javascript:void(0)">
              <div>
                ${text}
              </div>
  
              <input type="submit" value="OK">
            </form>
          `;
        break;
      case "yes-no":
        this.prompt.innerHTML = `
          <form action="javascript:void(0)">
            <div>
            <div>
              ${text}
            </div>
              <input type="radio" id="yes" name="yes-no" value="yes">
              <label for="yes">Yes</label>

              <input type="radio" id="no" name="yes-no" value="no">
              <label for="adult">No</label>
            </div>

            <input type="submit" value="✔️">
          </form>
        `;
        break;
    }

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
