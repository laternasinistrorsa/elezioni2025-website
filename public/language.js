const getLanguage = () => {
  //get the language from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get("lang");
  if (lang) {
    return lang;
  } else if (localStorage.getItem("lang")) {
    //get the language from local storage
    return localStorage.getItem("lang");
  } else {
    //get the language from the browser
    const lang = navigator.language || navigator.userLanguage;
    if (lang) {
      return lang.split("-")[0];
    }
  }
  return "it";
};

const setLanguage = (lang) => {
  //set the language in local storage
  localStorage.setItem("lang", lang);
  //set the language in the URL
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set("lang", lang);
  window.history.replaceState(
    {},
    "",
    `${window.location.pathname}?${urlParams}`
  );
};

const fetchLanguage = async (lang) => {
  //fetch the language file
  const baseUrl = window.location.origin;
  let path = window.location.pathname;
  if (path.endsWith("/")) {
    path = path.slice(0, -1);
  }
  const fetchUrl = `${baseUrl}${path}/languages/${lang}.json`;
  const response = await fetch(fetchUrl);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error("Error fetching language file:", response.statusText);
    return null;
  }
};

const setLanguageText = async () => {
  //get the language from the URL
  const lang = getLanguage();
  //fetch the language file
  const data = await fetchLanguage(lang);
  if (data) {
    //set the text of the elements with the class "lang" to the corresponding text in the language file
    const elements = document.querySelectorAll(".translate");
    elements.forEach((element) => {
      const key = element.getAttribute("key");
      //set the text of the element to the corresponding text in the language file

      if (data[key]) {
        element.innerHTML = data[key];
      }
    });
  }
};

const languageButtons = document.querySelectorAll(".language-btn");

//on page load, set the language text
window.addEventListener("load", async () => {
    console.log("Page loaded");
  //get the language from the URL
  const lang = getLanguage();
  //set the language text
  await setLanguageText();
  //set the active class to the button
  const activeLang = getLanguage();
  languageButtons.forEach((button) => {
    //set the active class to the button if it is the current language
    const activeLang = getLanguage();
  
    if (button.getAttribute("lang") === activeLang) {
      button.classList.add("active");
    }
    button.addEventListener("click", async (e) => {
      //set active class to the clicked button and remove it from the others
      languageButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      //get the language from the button
      const lang = e.target.getAttribute("lang");
      const activeLang = getLanguage();
      if (activeLang !== lang) {
        //set the language in local storage
        setLanguage(lang);
        //fetch the language file
        await setLanguageText();
      }
    });
  });
});
