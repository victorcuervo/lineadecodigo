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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRKX7ZNF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpAOXmnrpc7pFh9aDl%2FtEuy%2FSLE0sPNWVWWbzDO9HGcwIgPeJop7p13%2FPrZ8rjEHtsdJCTlwH5zW9leMoIKmWh56Aq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBQQURWE%2BCKId0Ar1CrcA1SZ6dCwPjhw0GXXieFsZ%2FSupGC%2BNTgsr5dWB7xDLoekLAvm11GHfPxY%2F6W878vgRQsWsMvErJesGX%2FTo4GLaikrdZH%2F%2B7EM%2FcSnJURRrUnDc1Hve8HbPHMbOJEki%2F8Kl41GX%2FNe%2FAq5ivyTHDE6Ux%2Bs%2FFeLykMGYZ3fOQIOgE6mNlM0aezfmCPDjBjnBQQ4TGS%2BcRiQqfzp90QWc1jWFqSrT6wAjo%2FfClvOnHw%2B37Qc6SebqrwuvOMrSSrL77Ea8RzVv10i5Duvsj%2FewVpQ53DgQ9FyplLWbSXRljsyyTKvlCZGXeciPFl4OiTrP5WnilK0YNjj8kCiEp7CzACXzy0LaiMwQSK3LjduHfJqcVJd2DG3%2B4GAYdL48SxSz70TV4zVHHpfu7LK5NqcbhuBxATYYx53VrCaK%2Ba5Npj4XkT5b0eSHPEpXKlVaAot%2FPfbqJQDsJ2EDglcC5hoI8DOI2B7xBaeV%2BGFqJIXz%2FTpZ2jJmDJVKUjtD6sZGXaFatjV8610yaLJDYOwI1QSAT2wBTpP3Yjs%2Bjznlfwn50hkJj1bB1LjPRTKVqwLrP4qIvEqHIa0ZX92N2TKD1vnTE4gYbekmKDvC7aU2rcY%2FXcEPcliHMp%2BQ%2BPshBHHzWpNMIOJ0MkGOqUBkeWY6BMwt7ZIlsYKSLBgx9%2BCU3HII2worqn7hu9%2FFm8l8ebqxaSxdt0KiAbjjJf4nrrywM%2F%2BAkKneGPW%2BpGNwpHmQ%2BcbUF1yM%2F596%2BIpFEFBOKc7oW%2F4ouTb%2BF4wumET3ICIvj38gwkyq%2BiUBAdLvSjhZs3uDjzrsKem4vbsYXj5I3B4eDHPzPVjDYsK9I5AdkGCnF4sLSOTVoyMsatbSv0QJTqC&X-Amz-Signature=04a6fbafe7b9aee768f172690afb8796b825c7d7d15601d7ada194411b34c87a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675LTQPBF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSlz6sgj0CsjPnUxuEabVKnRKldrXzT4QHqeWQhEb2RQIhALc6SxvPeRFBYkSvirBa2YPA3PUwgkRzX04mOhSxkpMmKv8DCHQQABoMNjM3NDIzMTgzODA1IgwlOlnEYPgMdm4P4%2FQq3AOH8xRA5OZ00cjt8RPM9PX938PZUc6%2BErIMrSoC52TvkUvIFVq2JloV7Zi5ZI8uXStKCCQn0Lwzt8Oy882ecST5H%2FDElUBkc%2BoltrJF6eWdvfGI2LX5c6T1RyXrHYBuB9cuqDxXvkjrcZTltvprcF8Yiwvx2i5D4SMM6ETPQ7Y%2BMDi29Owle1zidgVTB%2FnLiYApnwX7ZFgCZ3VOl%2BOQmGuPzwVZo%2FXoFeZsddvCzmSMr6amjvNaddgvX5QM60Pfr8Zq52b%2Bd9fWsJIF%2B%2Fwjk6IZvVOgzu%2B2mu9jf459JQn46m%2F7es55Fl1J%2F%2Fphdg1glT80kOUSKZ62PNQLY%2F17gFswzmMC%2FVWYX9vMIPdHj4tChxLlwNdSceWz3kl8xpo29DTDISfuIksSE0Kk0T3%2FnJG0olBtnRz3i6C0lEkB%2F5Nqr%2FWKrQG%2FB0SahNPHR92tvPrxMu6n4XmVYqxYWhMnv%2FpEDYpd3m9hJgQ55v6EAhtTqypycnu9gRv9HX7XqW163VnMRZw%2BsNQzNGvYkcIb%2FxINeLeBskPFsBeb3Ddo1meAmeQiBmkuK%2BmmVZRtH2r335AxVmZfkacR0P9vKvKMaI%2Fg8NQBjyb5uO2LHrZgag8mVlCntnckCQCgtrde3jDeidDJBjqkAVpOBJNVOJJ4G7Gyi87STlAByi2hwGAcNSvCel%2BX%2BJbi63ucpduGi9%2BdviVG9a%2FY0jPj8gnP1uldW7lzaq6oqoNltHBTBdlWVKCYghZ%2FeFosjrA4lAv0%2FHFDiZnux9r%2F4kRTaAgS0yEpcJ3Z4jCTntNKGzRDXOKRyxd3M4wFVS%2FBAiQSmvwqhC1hwLA9vrkC082jkZQ6QhTHq7iFhZjPUy4bT7kD&X-Amz-Signature=7a9d5a4b9d3a279d613cfdbac92b257f793cdc9824035989eb45399d133547e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

