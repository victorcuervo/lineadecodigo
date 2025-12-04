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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PO2ZD6S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo9EwE5H815WHSwwqxqlY7qkg%2FwqLDxvTtR3HMwgHojAIhANttf1guR9sqJzGas3DUc4YZzVzvo980WTG%2BeAi3sCYMKv8DCEkQABoMNjM3NDIzMTgzODA1Igy4JkfGiM4jEwhnnbgq3AOEU21Tp%2FBN0eDw0qGcodVMuh0x8kTx8e4pcjVHbHZ8EtcA4BDXBm8YC1jLgcOEUWb1GBL3DhABni2vRP2Z2eUNDIug0abe4b1EaA1h1p9AJ4KglVJ9Q1fHIXYHxgwAp7AK53mZ9mboB1QCZo1NoRF55s91GQ3Ed%2FpTRgVyrt%2ByRD2IiR6sK%2FR13%2FMK2g9mXVzSpRX0Gn9Fjn80%2BMEFvmSsMrEatql%2FU%2F32sSpN2J6kKGybkWIpPC0HtM%2BAaiwfI5llcUnM3fKSPg0IFBgdJuyt53JFOGf%2FZaQJVZhIQE%2FuzWTNQOxUutQ4l6JbAXAE0iqR%2F8vkCRwyQ9hCxwd3rHR5QhGy6aJe%2FoXaJ%2B55RCX0NdrmLCgSNaKZ1ugrlXAGUuEFtuLPQzxhXR3vxpmbSfPgSFhMejJfNTjRZ5FG%2FLtd1gbJoZUxpyGRaYygFgthBzJOHm14QPagXcdY%2B%2B61PYrxVEvZJLurIHdyVwNmtGV1YzvNtGS8Pwx4H2kbKGjmzef14l325IsqAy6lzEeHunOK6U7%2Bwx5RMUGtRWav8zalM0PtuzFrKrKsg2nx%2B6eSvuenPOn7cIASoQtOMsevxAMXs8ruGDqow3%2BL0GefEI1ZJK4hf0kRJ67Sfn0TgTDX28bJBjqkAfOWIgTFdQikYHhEWaGL0iKIAlmYHnXB9nbvR38Ikm4%2FYijR5%2BAF%2BtPnvGoWNgjh79%2F%2FrD4DZgkz6L9bk2H4A3g%2BCTgzPmpKJb4XJN4fgAzAmVcVE8lQOI6P%2FloFvIvnv2Lt2H9Iws8eVarBSa0MgS0gvZyanaX%2FJJM%2BIri%2B48PYxzALPsfbJxUOs00fFFapcZulqFi8iSdNhPZSRFSKB7g1rSMm&X-Amz-Signature=5be344725adfde643bae0eb996154a8a1ce81ac6dbec632fbfb6cf46388abfc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2UYD4S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMqrdpOkjt%2BtxuPgO8u%2Bvy15f73%2BQcAmw2O7bei4LpDQIgQVE4isEertBCEklbyR1nQgxvuXjns83zQ4YugbYmGlMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHM8jjPWmZVjAc4M9yrcA%2FA9gC6w%2Bc0IxXPfpsCPVo8ApkeRk9wC8a6c%2F7FlCiaxNdpIkxfVbc99fVNE308WTewlec38YC8D3pIPyPQ33uaLGQ6MBAgYPUeVKFBXSH9OXeCy2VNP7rDEzdmAJ9WE%2Fq6TXlbF05Xr6nCD9QwbSBv7Wf%2BNnTKOHcRRRbutykNZbXCcMCnTedzhLgEYiuXH%2FAs2%2F34AJKXQHAaOv%2FeYGea3DkHAs1obomEqZK3gbHzXpRXcKmo1ixKRUSKAsw4EhnkTxs%2BugTawlPgixcPczsMt5nwk5is2IDqNAc%2FhlhSVYZxvGULSHG1G%2F21tTWwiIUiwolVwhKz7x1vOXB%2BfUXdbBSIskeOV2KIwzs09YCS7rFKu82UcVD3N5xtp%2BdPG%2B2tsabHfsw8zTCnIetomaUb0vXkHBh64xtPQosjmg8xSfGFo6Mhfb80%2F0DA7WJeHa1ppE4qBV%2B1PgA%2FGqYK10ossqyfXOfKYtoJCwLFs%2FtSnTNxmCkkkb59YsDyZKIYiZLk4YwjIUFF1RWFbT%2Bl1d5vCw82lm1TiMXZtfwVi9KFALtwJ0X413U1quZdKDweBEYLPgZxzbTH9x7dwBk4YpPUGgix2HrIVUeNvza1aiRRzTAQa95qVHzEqX4cDMMTcxskGOqUBx7jUvZrNh2pGT6K0EOcu1pI6pu%2F5Urf3Epf%2FeT5e4fZhtgDorOyTXphF0dB9rnyOlZ0tJz5lX0lvNgwAzoTuTxQdSguOmdJ9leKdkzmFjdOYMHWjtMv1kVKOmakzQi2Q9sA31Q6vwVq2feMJ5RNwdg0h5xq8s4fzTkStez2tFxiOuz1bZhbWmcAdUxUePCbjgprn5Ctj7UbhPNV%2FCxpRDmqQoVpq&X-Amz-Signature=17d82d2d71fa906861869e1abe5aade04c63979ba5a635a4aca5cfbab11aab44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

