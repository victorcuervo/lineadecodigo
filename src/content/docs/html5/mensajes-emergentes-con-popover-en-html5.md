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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2YR2COH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEh0zny4TCOzM2YgttR2Cs1fLkekspG6QSGYY9Ugb%2F7wAiAHdQV6U%2B74JHBeSzuf9UNeqwp%2B5zdInfqSR216QhBF1Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMC6%2FUYs36jxpnd9raKtwDkRtwwJpD6%2Bc7z4qhEJI1Qr3moUQADPSaTnUbqkEqRksOtohtpBcIlaoYQQL8Tscyk7t9PKgHyQ07BYtRnwkr0YCp5OflxT8R%2BgNT7unUVv8aij9T3W3dlpNNSdjstTl7lWtO9SLwQ%2FrRydSOYi1HYtqG%2FZ2QY3dRTpPt92MnbexmCsFLYKZtesfF9MbuxOn1c3yN7j6Z4RQa5dmEwtMXEahqqX65wrgygci8I8XKB8LUOmtmhjtuUc6zBU%2ByXKYYX8eDMu1VzFw8FKicrAROH4p3QJv9vtWFoIVe8tPGMS8lc8PuJ%2B7vX%2BvpW1J0KJWlvsii%2FqfipCmcMKKs4Ji2cbFa%2BgBpYIQDYfDuhHwXiKL7xGxammkoOx8S%2F1TtxYNo0ndq0XJ3WhIUbNx29VyhmhA98kkN2m%2FMDPjxlJBnFqDmWCpMFAy41yi5tm72kliLfmyzNZBL%2F7c2NosTsLVtF9d4WKF2OC%2B3l4nXCKRbBMuXaNlyBDXrm7PoanzBHlP5id3w0auRyMKTGUikLTTGuj%2FZwQ2CcN8KtPB13lpNg%2B%2BhCsXLEf48JK%2BElbiMVwT8JiS3vt526VESLeUL501y7TeRnVpgtFqhljaDPn8TPY9xLkwFBTrPMLpWYaowwObFyQY6pgFFLo4ONnLkBoQU2JUVHrGbDoun8cyHURfI9V7ZnNm4BvD8ypIa7sbP1elqVAhnCIvZESc3n0f6kwUAonUJ%2FgzxDt5pWUrvAma3F2oKi4BmEggZT239emEf7Zx0BUl8aK%2B7rZE1NO%2FRWIJW%2BnjOXr4p3H299X%2FaAmTz%2Be6ylYxjlmFldCfsqgYb6Tkb6KCjKSyYhoAUEe35gJsXACq0laD2E6CMtCzU&X-Amz-Signature=1bc0ad10978db84eb957e5336344cf12e24c6c73928dc95f22304f9e8ed94844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V32KCNVU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICWgVz8BwI1slmdCY5HniSlljU1PvN56Lp2I%2B4rVNTJQAiEAqHRmRaJ2zMR%2BMPSMTF%2FWIS4vcH6CLiGtWi7SY60X7N8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEDrg4pmFl6A94D0kircA5Q%2Fhv%2BNFKzNGBlaOh4kBY1D8yXmMuU6MPLZSL13qiwFnByZsvFHaCkfaG0LJm5eoQ9NaERpjpO3OC4Z3vHykn7JbLTXNoqe4%2FbfJNLnkwU8eo8sFXZGSeR4J%2FWoV1ABRbJY5WKm8d9oC051TWaiPtjyX5wnb9bsv7QKtZ9a7uwrS47ih2Z7OXmLy2Yo9yXDIodDCMkXOH%2FdZPrREBGair0Br2roqVnCPJOgxBn3G6DgJsLCOWMB7KY9ZCR8E0hgCLZaK67erc5QgsxATDsDEGoLylUwk1tBBR%2BITmK8sDVfOd791NyqQqO2FKLZGVRZPRI1TWNuTUpVTWj%2FQkVTskZ0b7bbLI8chhwlylxAMwrfk9k0%2BsoeRLjTaf8s6hPlqknRE7cVsEHobUEKsb5IUoc7Col1I8ABMan79r6NZ0vlOk%2BKJfQYlCOMqp%2BtRGPUrCIiQo4VHZZWM7wvroZsOI4e8vqeGZCdylVdD%2FvpoyrKyMcODMTaYJRKlOFNdHwoNhtdAtfdXZ794uiImG22j9mE%2BZ6hnMAMRzrbI3%2BYwg4aowIM9OxwjHbdLwlcz2dPpRVGJ8KCEJLvBi1moTN5n5zRSdnFYATOLDbTVuEbB39RwwBAAcGZNkitp16vMJLnxckGOqUBfSo7%2FFPzHUNFjea3wumrfagwYN0aOHN0pdAVXyMyF5%2BZ8BuTPzRhb9C2iV8EPwgtqAq45o8syvGADY5z%2BjG35Ytco6c3Par3oXBc5DKisSVIW%2F%2FgZFKbK74Z4lYyC4pvEykPi%2Bc1CpzQIurMOWzd88LIWkidzcwwfLiUp67ELcPVYr%2Bg7CtEnjFClF5HPf8Yqj2oBV1jH5hx3byg5T1NIPTlVVle&X-Amz-Signature=72cfd8fdf883b3d39ec6d397284558aee73cd397652182f783a2008a22b252ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

