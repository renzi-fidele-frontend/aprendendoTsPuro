const form = document.getElementById("form") as HTMLFormElement;

interface IUserData {
   nome?: string;
   email?: string;
   cpf?: string;
}

interface Window {
   userData: IUserData | {};
}

window.userData = {};

form.addEventListener("keyup", (e) => {
   if (e.target instanceof HTMLInputElement) {
      window.userData = { [e.target?.id]: e.target.value };
      localStorage.setItem("userData", JSON.stringify(window.userData));
   }
});
