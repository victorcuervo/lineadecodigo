---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
slug: /html5/mensajes-emergentes-con-popover-en-html5/
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UW7HKXL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3yDOhEHydOFMSp8q964gGua58PENpk1lG4rA%2F5Zp34AiEAzfJyEn1XXopEYN8o8CV3GKfXTZzZlw%2F8nzd8le8HxMgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDxAQQ2U3%2B3Chck0JyrcAxjnhGZgrWw1fXtqIbpf9lnKJwuVpjQSHe2jIun78Z3m%2F9iAzn%2B5nmsrqNwlth%2BnhmP7WcPfsNqLMq5eGb4jExEvSsk2BiYvbOzJQxJdOL6oz%2FJgcaISTZBaJPiO9yPHMDe4p0cqQODV2MObx7qwLy6kAxnuf2zUROvb2ZI9d9MAMiOrv4093E5fMwFt0nDu1R1mz9vCBykvhJk2zOuoXmuMgWtlDESpNUsxa42Iuzk%2FGdl9ciSf7hNP%2FY05qQQ1yhfRTFP1IQ1RY0lJS7Jz0t%2BGX7fJtj54u3s2rLmW7hBti6Gxupbx72ScMzfxkF%2FSzI0NumLuUVO2zC1gKJpR5AFikyqvBy6mB6Yj9ThSfgNYrKGAdRvxN5qJtlJ%2BOE4ZloZLc1nx3m1TliNweRcOTVpsKB6XK9M8zU%2BeNZm2fsSGsaroy%2BapG51tirR0XxheN6n9ff4QpA9HU5IbAb9nt%2FbQwKyFuCHsNEx8bRPz%2Fwh10tBEYfGDf6ulUtp4vW0rHk7lnj2SKrOxwFM0dK4Scv5CaLGN%2Flp1zvzBv%2F%2BAGSi%2FE9xPmhH9of4RIuMjtONqtsdWGhMUmptVDHLa%2Br%2BI4apGJWo2n6KM9yX4wRM2blOg%2FhomHREEk3ZSjsLqMIqbzckGOqUBYFMvEhxOrcbOGfp9Twct6zlh1pa08xWihI1gzFwTJimMCoP70YGorsZR7QolrimtAsAdQlGzIAShPMXK8cmsWDXeMaB1YE%2B9YjynGTtjPsEkWiPm8uKN%2FjlDdO%2FDfpJoevEWBzXRFWesh8SYXbU7KOcVI3jyTV4RcR2wG7OjgVZ7sILWI1Mt5D95bVa%2Fowb79hIL0bUG%2FSQwffMFyfl5zdAQLmK7&X-Amz-Signature=707f0e93ec41cee8136d60a837e46f9d45a36e48b9eb9d37e3027739bdc4d6b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZL447BD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdVRcEOXHuHEdRTnruOU0UnWNTwuGuBjRNo6kHgV%2BNxwIgQ%2FgIwOY4dAflydljDP6HZCzH5uHGWFu1kE7mqU1rSXoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDEmReN0%2FjnBtHZmoeSrcA2qu2vP0IjcZuZTKw%2BdpNTowxlRxzntk5FNdmwwaYdYcRizONwrU2Q6I9CuBvH1FI0xJPiEVQYGsB7C3pJwbkhiWUUK67rN%2BmjTFqsobM6XKCx%2B%2FtAJevDHGJEioKrJMasusJlRERD21woTE%2BguQ4v8hz%2F0H08P%2FIYDzWRU7zhsGFipOdVseErodGLylkLjKPGnnB%2BIeKqBxMAAZIamkCf9MSpnQrMcHvYAdal2lxlhTVgkF7n9XdieotRHcRXORWqghxKWwDr1N5%2FFL%2BbQVggGtSXXk%2B%2FHPT8Y4s3hykwDaSNSzqPJWvh9JRjF6PuIIJzs2KuYVNh75DA66yoVywiUAaDFrUGa5ls2aw2SciC9CChmLEACG5P3e9hppkzmlSy%2B32JW6vrR8go6B%2BroXQhaZOeWaOYC3jUa%2FTRpL6DtscyotuBRc4uDnM%2B3e5tqlOo6b2vPF8TC8mPyD%2FCsHQxe61rYQc%2FknP7Wys3MjtbVbyHaXIJg5r9SW1qVHHO9Qivi7uqS1wlTgavifHKP9Gj2leu744TPiEs%2BSP6yUb0O3enZXuQvGIQuqtIVPENhApDCjmc1ORQIEkLMwVVi1enirSri5m6a4zdlhEmIscCQ2LKSaVzHfnFRxZGWIMLHuzMkGOqUBoDy9AR5yg0lRU%2B%2B1UjKtYZNjM8PsUTkVD2HsHJypNyEp9pZSeWYCsu72Zu%2F4OWGvOzv8r6eBaOPkVoG%2BZaBf9HXyEcgm%2FytaMMVIYF6oENNL5YggsmUxnM8qszmkimwyVXZnOkKpI%2BWChBdJWTSU2rfRH0iNLlfR5byMJhPUhPirCyHbo%2Fqss5rEb439OB10n%2BEeEO%2FTEog5LXbg9ZKH9YFhj51m&X-Amz-Signature=a730301b2857389ae3e6085421a9881f8d4bb7faeb4dfa27ee95b927ba2709eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

