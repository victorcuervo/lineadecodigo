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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MAQGQAV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrJwYzWgzdT4PDsHd7LnXWK27kd%2BfrkVfJV4YSBZPBDAiAE4pw7Sfu3Y71e4fN5V8KZqe09ZlUjaKgLrixyjJIkVyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMpVm%2BpjS9Tl5hnrRKKtwDSi2%2Bonwoe82h9laqd4ai1P6%2BwNl0BhIv9vW7Aih8Zsc82fajerEzr45pLMy0EFN%2FX%2BAykg%2FhKbB7WjE9XRuQgIzWUr%2F1CeNqcX9gYE0sEQUc5i2pMWXXPb%2B8TcJ6WkNwL002XeRnfnpMGAV7fyPZW6IBk%2BhvzKw5GDFhgHQkRrlaRz%2FU1CuQW%2BKTOPp9paskwgua%2BuaaGx%2BWH9tFpETeyLhVWJMpNeIh4IR8me8cMMvY7XOxRBRAPebGE70MHAtH9Ulve3Cmhw0BEQGxydry92%2FmUyAofBaoZ0ad0eIPHqXHH7guHXlsYkr9LXPzZCPYMKbiQHCdjkPHfv98PoO%2FJQj902oFb1wC7S5zsSbJBNi2TaSq48sxtogzypLqLbCt5MkIM%2FOQFNSwNonm0IQcvjMHtvhSzazr1fJat7ujaC62eKKYeikOxb5FVWQHdprcswpZrRfU7uFZCZJ3okI94Ygy0hyc5Q5HEm%2FIloMm3hWtSmvihflNUc%2F70tGEkfStvkNBlXLCAEsH6NlcmxGrha6sySPk4%2BAaXjEXR4OmuE21T7cEAFuRhNWt7YdAbeWcjtNzvdviOARd8A0uNQ3TmjTu9WT2BqOiE1Se5cEqu9nedcR4fubg4LgrQBowkcbNyQY6pgGwPoWi5N9%2Fcx0acgElBL1DW97dwp2p%2F8q2fZEj7UuHIYBUd%2FGREmY6qV8SD9Vv2HLy2sWaveumkiqEnyIk1ra%2Beb6%2BOw6a06bSYpOUAtp7ZekkMzuDGHsW64ena6EQwtv5YhKBowCnu2P%2BD2YE69CQaXaCDVFkCwgIdeTvDoPMOMIwJDwqOJcbPDKmqTDuHQnbWC6ovIu1C7LE3bKgP%2Bf3zV%2Fby7KX&X-Amz-Signature=be2e34b13669775bf9d18245d93f50bb6877e1e21c5b87cea5d1855e61848a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FXW4J7M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy8rK4aQlAHL8EWWjMrmBJPW5%2Fj%2BUNOnj7HoG6Z6b9fgIhAPEFqEp6PJzFchu%2B1Diw1Lm9eox5sY9fXfidh93XjTkOKv8DCGgQABoMNjM3NDIzMTgzODA1IgzUA4k%2F%2Bm6XXhbzaIMq3AOHwMxjGc%2FUED8fJ32%2BvhDnboqh0BhY8DdUNkhe%2B0o8yVa9Iuik7Rq9hxc4dwFOOmiC8tgHfXwB9GW5YjB%2Fw5q41fHvtefNcokzf4M2tIeD%2FUzQURLgDvMhWL8tPv%2BTU%2FAwchmNVpiJ5Nl5T8%2Fq%2Fj1WI%2Baji4qQ4tdLfdSkAaydvOVhU0E9QFqXfAh6CzhNYvPfuEErHZp9cfC%2Fb7FhDKzr0nrXMC2nmtLhVilw7eckNrazbMeywU%2FYz%2BZZpa1C6kiyEfocoKZaIMDdPh0%2BucsxWmBMix7ZLbw4W%2BcjplerCi2VZnSkrXCabrgqBxT3ZyBPMH3CEAoOzsXxPEHvvAkoaeWVfKmhM%2BAV3BYD6%2BgaVNaGkRd%2FmlWcktx6yncoD44hhNl9b%2FYXElUDneUMGBPTAj9ZQCqyucUvBnPmb2IdE36kjeW8g5Ycz6WzMEDaqU077URS7Ehe3I8AmKqfk4PxZ2WLsD5%2FOsdi0G7PcX2SgggCKLqOhcLrfSTY5WnyP%2B3rjGSXNYdJZKVEFf1MBEF5VACnKGwtBOt%2FA7TbHznwgN3JpyED6y7PFSmz81Vj%2BEUsANejlOKLWKIxfLc2BjeNDone5z50xzFajJhHuoHXulp7%2FI0v0J4hCZQgcTC8xs3JBjqkAUC5qcUPv0CqVClkCJAYN91iWxY95uh%2BVdnxIiE9jq%2B2sSgeO3cKFWTXyPe6HNE3c6i3BAx0umws5wMxIKSrGg%2F4GGB4BxnKtVle8v5Gfzo77BZ7XSLzAq9uEIBYE7UFuCZ0xaYYpzhz8v9ceDSycQZ3DF3ZvVqiTM8t4%2FH37s2NOjU32BHHhUio78V%2FH%2BElldvxM%2Fevu6C7iw7Iz2FxMv0mFgqe&X-Amz-Signature=1df0511ec9539e726f0c812cdf533461502e768887df79499613149680513bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

