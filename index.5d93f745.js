!function(){var e="live_7W9qR1S1NEbORygBn1mx1mH1oce6c0s9E5IsuO3hszsB8xwaLqQO2IpjD7PskyDa";function t(t){var n="https://api.thecatapi.com/v1/images/search?breed_ids=".concat(t);return fetch(n,{headers:{"x-api-key":e}}).then((function(e){if(!e.ok)throw new Error("Failed to fetch cat");return e.json()})).then((function(e){return e})).catch((function(e){throw new Error(e.message)}))}var n=document.querySelector(".breed-select"),o=document.querySelector(".loader"),r=document.querySelector(".error"),c=document.querySelector(".cat-info");function a(){o.style.display="block"}function i(){o.style.display="none"}function d(e){r.textContent=e,r.style.display="block",r.style.color="red",n.style.display="none"}function s(){r.style.display="none"}n.addEventListener("change",(function(e){var n=e.target.value;s(),c.style.display="none",a(),t(n).then((function(e){i(),function(e){var t=document.createElement("img");t.src=e[0].url;var n=document.createElement("h2");n.textContent=e[0].breeds[0].name;var o=document.createElement("p");o.textContent=e[0].breeds[0].description;var r=document.createElement("p");r.textContent=e[0].breeds[0].temperament,c.innerHTML="",c.appendChild(t),c.appendChild(n),c.appendChild(o),c.appendChild(r),c.style.display="block"}(e)})).catch((function(e){i(),d("Oops! Something went wrong! Try reloading the page!")}))})),a(),s(),fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":e}}).then((function(e){if(!e.ok)throw new Error("Failed to fetch breeds");return e.json()})).then((function(e){return e})).catch((function(e){throw new Error(e.message)})).then((function(e){i(),function(e){e.forEach((function(e){var t=document.createElement("option");t.value=e.id,t.textContent=e.name,n.appendChild(t)}))}(e)})).catch((function(e){i(),d("Oops! Something went wrong! Try reloading the page!")}))}();
//# sourceMappingURL=index.5d93f745.js.map
