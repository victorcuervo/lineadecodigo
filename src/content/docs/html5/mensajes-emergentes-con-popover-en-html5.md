---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
author: victor_cuervo
---

Los que hemos trabajado en el desarrollo web desde sus principios hemos vivido lo complejo que era gestionar una ventana emergente en una web. En este artículo vamos a ver lo sencillo que es crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) siguiendo un estándar.


### Un poco de historia de los mensajes emergentes


Y es que antes de que se estandarizase, y pudiésemos crear [código en HTML5](https://lineadecodigo.com/categoria/html5/) para poder crear mensajes emergentes, hemos pasado por muchas épocas y alternativas diferentes.


En primer lugar teníamos las **ventanas emergentes o pop-ups** que se abrían mediante JavaScript. Y se podían mandar mensajes mediante funciones como [`alert()`](https://www.w3api.com/DOM/Window/alert/) o [`prompt()`](https://www.w3api.com/DOM/Window/prompt/). Incluso se lanzaban ventanas emergente que se ponían en primer plano y que acababan bloqueando la ventana padre. Estas ventanas eran muy intrusivas, no cumplían ningún estándar de accesibilidad y acabaron siendo bloqueadas por los navegadores.


Después llegaron las librerías [JavaScript](https://www.manualweb.net/javascript/), como el caso de [desarrollos en jQuery](https://lineadecodigo.com/categoria/jquery/), que nos permitían crear ventanas modales, popovers o lightboxes de una forma más elegante, pero seguían siendo soluciones propietarias que no seguían ningún estándar.


Finalmente, con [HTML5](https://www.manualweb.net/html5/) se ha introducido el atributo [`popover`](https://w3api.com/HTML/popover/) que nos permite crear mensajes emergentes de una forma nativa y estandarizada. Esta nueva característica nos ofrece una solución integrada directamente en el [lenguaje HTML](https://lineadecodigo.com/categoria/html5/), sin necesidad de depender de librerías externas. Lo que nos facilita enormemente la creación de mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/).


Además ha introducido otros elementos en [HTML5](https://www.manualweb.net/html5/) como [`dialog`](https://w3api.com/HTML/dialog/) que también nos permiten crean ventanas emergentes de dialogo.


### Casos de uso del elemento popover en HTML5


Antes de crear mensajes emergentes con [`popover`](https://w3api.com/HTML/popover/) en [HTML5](https://www.manualweb.net/html5/) vamos a ver qué casos de usos tenemos para poder aplicar esta solución. Los casos de uso más comunes para utilizar el elemento [`popover`](https://w3api.com/HTML/popover/) en [HTML5](https://www.manualweb.net/html5/) son múltiples y variados, permitiendo mejorar significativamente la experiencia del usuario en diferentes situaciones de interacción con la página web.

- **Menús contextuales** - Ideales para mostrar opciones adicionales o acciones específicas relacionadas con un elemento de la página cuando el usuario interactúa con él. Estos menús pueden contener enlaces, botones o cualquier otro elemento interactivo que permita al usuario realizar acciones contextuales de manera eficiente y natural.
- **Ayuda contextual** - Perfectos para proporcionar información adicional o explicaciones detalladas sobre elementos específicos sin interrumpir el flujo principal de la página. Esta funcionalidad es especialmente útil para mostrar definiciones, consejos o instrucciones paso a paso que ayuden al usuario a comprender mejor el contenido o la funcionalidad de la página.
- **Formularios flotantes** - Útiles para presentar formularios secundarios o campos de entrada adicionales que no necesitan estar siempre visibles en la interfaz principal. Esta aproximación mejora significativamente la experiencia del usuario al mantener la interfaz limpia y ordenada, mostrando información adicional solo cuando es necesaria.
- **Paneles de configuración** - Excelentes para mostrar opciones de configuración o preferencias que el usuario puede ajustar sin necesidad de navegar a otra página. Estos paneles pueden incluir múltiples controles y opciones de personalización, permitiendo a los usuarios modificar sus preferencias de manera rápida y conveniente mientras mantienen el contexto de su actividad principal.

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLRJR3MC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFhQxN48gSyFYrUpColDPEuya%2BhfjT4zEFe%2FQuBM4gOdAiEAzw3JwOBMXaJsrSympZoYG4voHmB0Cav0LcRlyDQbp5Eq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMXYB%2FlUMMhM%2BvH%2FsSrcAxZHWq%2FEAZK8EYR5EtcQDiphRVEMz8%2BbzjTH%2B9Wj8fyyUdEum%2BaKPyeOI0Gq7XmOCYf29gh4Yx3dnScREwb3G29UwLfctW%2FJwRkvEwvsFpQ%2BZb0lps7I%2Bx97OqT3cLTv65Frqd8Dy2IeWeGT6C8n9KCSx07E5Nm9H%2BKd8zN%2BtjJ9Im0LiFI8cCqMMgaNUOXCSwqxudZQotsgXj9utXm3Muy8rUYOn3pKiIdTf0zSH4%2BsUdBxAYQOFXBODU9Ahz%2FCC849Fm%2FfYKVR2v%2BX4KdOmTAizZc2Uz7h3tj%2FXUMn3BgKaXRCRH3T37c9r56TvUdr3ycrBwC0263%2Fov5DMbnlGwyocjrW6h94OGXVPvGjjhxdtacXqZc4VOlkgGUcgTD6l5SMSoFqQG2WqgP5VdrC72hY5k3iqBrKqnRDoMpMtDh6PE839TsaIJ7973t8dnOY64wy%2Bk%2FZc5khbBe4vGHeyLNh2OYH0M92YnaPsUkDjIHfS1uQ6doAbCLA0oeyi95dDgo%2FodISKG2I6rLQ26lg7i1VTQFHJeCR6EcnYQNW4QgTejKPaI4nSuqHkr3XSgPZxqgiPKn4mGchYWgdYpp%2BQiUx9Ak7pt5eLWgX5suuO8KB9tJ%2FmtyyXE69syckMJWQxMkGOqUBgh%2FLwZ16epeLg6Kl%2BauViyJjSzroB%2Feiytc7BfaaQF%2BkQeSVKACRIrOnZk0kKkJQkK%2F5gOENhdd%2FWfmLqmGNw0iWxodQD8SlbE1rO2QKMTsN717UL2et6KYinVutV2WjO3Ws%2B0ygh9oWGlssCn2y%2FAlQ1bygKVQbv9WPcsDmRww91%2Bo2313bzlNy0ZjRLvHAwmEr0DUF3C0kZCdcs8yEmcS%2B67ud&X-Amz-Signature=9aba6ca61b9e3e5564128d71cd484b9d79639399e3f6a92cd2dfb25343fbdc5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Crear mensajes emergentes con popover en HTML5


Ahora ya nos vamos a poner a codificar para poder crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/). Para ello, en [HTML5](https://www.manualweb.net/html5/), aparece el atributo general [`popover`](https://w3api.com/HTML/popover/) que nos sirve para poder crear mensajes emergentes. El funcionamiento de los popover en [HTML5](https://www.manualweb.net/html5/) tienes dos partes: por un lado la forma en la que definimos el contenido del popover y por otro cómo asociamos a un elemento la capacidad de mostrar el popover.


Para poder definir cual es el elemento popover dentro de nuestra [página web en HTML5](https://lineadecodigo.com/categoria/html5/) lo que hacemos es asignarle el atributo global [`popover`](https://w3api.com/HTML/popover/):


```html
<elemento popover="auto|manual|hint" id="identificador"></elemento>
```


Es muy importante que este elemento que tiene el atributo [`popover`](https://w3api.com/HTML/popover/) también tenga informado el atributo [`id`](https://www.w3api.com/HTML/id/) dándole un identificador único en la página. Esto es debido a que el elemento que muestre el popover deberá de indicar el id del elemento que contiene el popover.


Así, podemos crear una capa mediante un elemento [`div`](https://www.w3api.com/HTML/div/) que nos permita el mostrar un contenido con una imagen de la siguiente forma:


```html
<div popover id="pop1">
  <h2>Este es un popover de HTML5</h2>
  <img src="imagen.png" alt="Imagen en Popover">
</div>
```


La siguiente parte para crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) será el asociar a un elemento la capacidad de mostrar el popover cuando se interactue con dicho elemento. Por lo cual tiene que ser un elemento de acción como puede ser un [`button`](https://www.w3api.com/HTML/button/) o un elemento [`input`](https://www.w3api.com/HTML/input/). O bien asociar un comportamiento de interacción a un elemento mediante algún tipo de evento como [`onclick`](https://www.w3api.com/HTML/onclick/), [`onmouseover`](https://www.w3api.com/HTML/onmouseover/),…


En el caso que tengamos un elemento de acción vamos a utilizar el atributo popovertarget. Mediante el atributo [`popovertarget`](https://www.w3api.com/HTML/button/popovertarget/) asociamos el [`id`](https://www.w3api.com/HTML/id/) que contiene el elemento [`popover`](https://w3api.com/HTML/popover/).


```html
<elemento popovertarget="idpopover"></elemento>
```


Por lo que en nuestro caso vamos a asignar a un elemento [`button`](https://www.w3api.com/HTML/button/) la capa que acabamos de crear:


```html
<button popovertarget="pop1">Haz click aquí</button>
```


Vemos que utilizamos el id `“pop1”` que es el id que le habíamos asignado a nuestro elemento [`popover`](https://w3api.com/HTML/popover/).


Otra forma de poder crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) sería mostrar el popover sería mediante [código en Javascript](https://lineadecodigo.com/categoria/javascript/). En este caso tendremos que asociar a un elemento un evento y en dicho evento mostrar el popover mediante el método [`.showPopover()`](https://w3api.com/HTMLDOM/HTMLElement/showPopover/) del elemento [`HTMLElement`](https://w3api.com/HTMLDOM/HTMLElement/).


```javascript
let boton2 = document.getElementById("boton2");
let pop1 = document.getElementById("pop1");

boton2.onclick = function () {            
    pop1.showPopover();
}
```


En ambos casos, al pulsar sobre el botón, se mostrará el popover a pantalla completa.


### Diferencia entre popover y dialog


Ahora que hemos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) mediante el atributo [`popover`](https://w3api.com/HTML/popover/) y que sabemos cómo [gestionar las ventanas emergentes mediante un elemento dialog](https://lineadecodigo.com/html5/mostrar-una-ventana-dialogo-en-html5/), vamos a ver sus diferencias y cuándo utilizar cada uno de ellos.


Las principales diferencias entre el atributo [`popover`](https://w3api.com/HTML/popover/) y el elemento [`dialog`](https://w3api.com/HTML/dialog/) radican en su propósito y comportamiento.


**¿Cuándo utilizar dialog?**


El elemento [`dialog`](https://w3api.com/HTML/dialog/) está diseñado específicamente para interacciones modales que requieren una respuesta explícita del usuario. Es ideal para situaciones donde necesitamos que el usuario tome una decisión importante o complete una acción crítica, como confirmaciones de acciones irreversibles, formularios de registro importantes o ventanas de configuración esenciales. El elemento [`dialog`](https://w3api.com/HTML/dialog/) bloquea intencionadamente la interacción con el resto de la página para asegurar que el usuario se centre en la tarea actual y proporcione la respuesta necesaria antes de continuar.


**¿Cuándo utilizar popover?**


El atributo [`popover`](https://w3api.com/HTML/popover/) está optimizado para presentar contenido informativo o contextual de manera más ligera y flexible. Es la opción perfecta cuando queremos mostrar información adicional, sugerencias, ayuda contextual o menús secundarios sin interrumpir significativamente la experiencia del usuario. A diferencia del [`dialog`](https://w3api.com/HTML/dialog/), el popover mantiene una interacción más natural y fluida con la página principal, permitiendo que el usuario pueda ignorarlo fácilmente si así lo desea y continuar con su actividad principal sin obstáculos. Esta característica lo hace especialmente útil para mejorar la experiencia del usuario sin crear interrupciones innecesarias en el flujo de trabajo.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVPMB4J3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDb8P41aLq%2F8z%2FmsHlgT1HXC5yGDlDxDTHF1WBIx8lmJAIhAI7aGma%2FHGZmBwMuzr%2BeJaODRmtzXltETJigeKIlXudhKv8DCD0QABoMNjM3NDIzMTgzODA1Igxo4ZFBcxucF9jYHZwq3AOQYPppxDN4F6gabjJSeDPq1i8mwdgq5As97Yc7LQIbElKurLdkZOltIhoGbnXrnhy4x6qksK9F%2FfVPw6EQU1hYQ53fMr9zgV8fE5As683xUt1Npa2ZICvtbkx7wKfH6IuO9dt4DK3PotZrXzNCXaiM%2Fu6l07iHjR19iuQdoRUjIkuu4s65ZrFTXspYFfz2ay2G5P2t%2BTCkxgYHFBh8P0iMUlAAgd03UZFHNJpfLzW1cgngPYdvkbPZIThwaMvkGO3wRrHYUyyMg4Jwth5Lg3idbajpSIMbMlGd3GugXpvICuxUsmT5xWh7%2FtTP9Y1PfkMvni5UKb0Ub3c6vJrSYc2G3797iPUXlrktrDATCYMrpfnkLb8Lji37JiERNNrhkgGor0x%2Fl6yqpw%2F%2BZX0pxvqVWDsCQNHFDQCIWIhPpv4j2dSwv73ljIx8T0Db9YfxVceYYI07zp5E4qE9xSYbLuMPs8H3d20CzbdXy%2B9xTO4YYgIeVHmvaF%2FKEMPsNQ4mPkQDxHbrQeqDQbnlWvL7qzqnVszQozPDNiLKCT1d%2Boeb%2FFaNMCCSKjnaM1fJfeWDaS5er0Uw%2Bx2MmtqxIJxFv%2FMX5EcDED8LM4t%2FQv149Y7ADnL7nFGKxkgboUds9zDbkMTJBjqkAVxSnzTdKelCFRiOvM4dgmt7Q4IKjNly%2BboHHDOoX2aZR7KItr9N3ZPWE8cEJy1%2BH2rzn%2FK%2FyrHp7VSs%2ByAjrM%2BAkXMcaz70T50MZsBPAAQ4ISdp0gI8ew%2BFkCDL6acfWmltqtCUg2k%2BFw%2F4RBAI5cHFY907iT%2BjnxhbxW7jrhITStNa1CTGfrX2%2Bjx406cuoo7pHvgJCje6OMq1PdTdM8mYRrEu&X-Amz-Signature=98175217ce49a306b259c690fba18b9b8ab3c289cabe761635c438a9d26aeefc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

