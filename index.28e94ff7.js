function e(e){return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`,{headers:{"x-api-key":"live_7W9qR1S1NEbORygBn1mx1mH1oce6c0s9E5IsuO3hszsB8xwaLqQO2IpjD7PskyDa"}}).then((e=>{if(!e.ok)throw new Error("Failed to fetch cat");return e.json()})).then((e=>e)).catch((e=>{throw new Error(e.message)}))}const t=document.querySelector(".breed-select"),n=document.querySelector(".loader"),o=document.querySelector(".error"),c=document.querySelector(".cat-info");function r(){n.style.display="block"}function a(){n.style.display="none"}function s(e){o.textContent=e,o.style.display="block",o.style.color="red",t.style.display="none"}function d(){o.style.display="none"}t.addEventListener("change",(function(t){const n=t.target.value;d(),c.style.display="none",r(),e(n).then((e=>{a(),function(e){const t=document.createElement("img");t.src=e[0].url;const n=document.createElement("h2");n.textContent=e[0].breeds[0].name;const o=document.createElement("p");o.textContent=e[0].breeds[0].description;const r=document.createElement("p");r.textContent=e[0].breeds[0].temperament,c.innerHTML="",c.appendChild(t),c.appendChild(n),c.appendChild(o),c.appendChild(r),c.style.display="block"}(e)})).catch((e=>{a(),s("Oops! Something went wrong! Try reloading the page!")}))})),r(),d(),fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_7W9qR1S1NEbORygBn1mx1mH1oce6c0s9E5IsuO3hszsB8xwaLqQO2IpjD7PskyDa"}}).then((e=>{if(!e.ok)throw new Error("Failed to fetch breeds");return e.json()})).then((e=>e)).catch((e=>{throw new Error(e.message)})).then((e=>{a(),function(e){e.forEach((e=>{const n=document.createElement("option");n.value=e.id,n.textContent=e.name,t.appendChild(n)}))}(e)})).catch((e=>{a(),s("Oops! Something went wrong! Try reloading the page!")}));
//# sourceMappingURL=index.28e94ff7.js.map
