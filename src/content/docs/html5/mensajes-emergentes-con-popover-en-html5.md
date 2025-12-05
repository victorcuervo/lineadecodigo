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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644NW6NYC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDklJxWxXTjHSul%2FSDGL9S0%2F8DtWaqs7TglkHxn2iQWCAIgUGuVY9cymPJVSCwCI8j3nnRVFs0xj5CNwzFAoHf7OFwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLBzFuJGKXTbQp86RSrcA3Ho%2BqN%2BWev8YIqOZeALIMxfQQfoLVPW9lYdYL8XSX4GDrlZaXo8xdd5hbci6HCRq0vzaBa4gMHqyy4sBiZXnJrNDV%2FDRqXY0R4Q6Cyr2s4%2BxrwzPecqK89IhhMhDbUja5TMR3QvgvAD55R9m63WANxKdzVWqcrEqb7myv1BTjuNbChu0Z7u22b4c%2Bs93Chu0AY8q4yfSg%2BXLXsmRGcnX3fGhLOzt7tMVBWQQNdSsL6L90Ar5cqmAiluE%2Fjjv%2BpCEYkxJq0dTziXRMu5Wpz0U6ZQozfkOngqsWwyWiRp4Rs8L%2FJOvLqXU%2BBSGA0XkGQauAnW7LX8n0UB3Rlh2lQ8PjYooq2N93HhRLsHRaXyjt1eeSyEvgUIq0UFJhbsyjCVq5gSW%2Bz8X3gVF45ktP9Atm%2BKYWz529I6k%2BdZWJfzfp5J1eD88LxfzNc3%2Bm2gLW7nPDuh15orAjUfiWA%2B5zOqFeFxWNJW9JT3muA1AW2vq5j31wD7bXpdr%2F9t8J8B5lLh0Sk1jiDZBHuzL0ZxjljQyT9In2FW3bvfh0jZqbDWLN9ULRZv8Tb9SgK%2Ftc8Muljj5Pahu9LaSmxrUU8t51DWsijZV3RHVGFpQbn0XF9gy4zNBYrJNlHUb6cwHew2MJfGzckGOqUBBqkvrvnwoeC2g0oxIxGYJ0AaoxnTwTxpNG1VXGVtG7eW7A%2BGReI5YszxyXOH2auZmQdGg2HW%2F8QcOh1%2F8hJyxaCd%2BVTCTu5Hed2XaHObYL6NB7NEyG9VN6AulnlfUzppwDKE98ZPXlo5KxQAELSiFqXtfk927FuWZf78jH%2Bl4EDiJaNJpzqUyEjEvWOlSKpFTmDfLMYo%2F7fcUuHNdb5CM1x5Qgdz&X-Amz-Signature=2e0668ca5a9ade179f1e7905e89b91b27df8f2f25094ff41af1d8262e9bc9218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MPEB3ZW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICY7WaCWk7biqJ%2FZmIWYf2hFbDxJdWBol%2F8uVFp8ZMlFAiAh9RyjwUF%2FtKhbBPCE6Q54IrRE2fosot2PE3Yt1vS13yr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMw2SL%2BUx10Nw2ufsEKtwDVhNCocIMiovN7rcwQvDBSwVJ%2BO7h3C0UGhlQHmKjbt4eLcX1IIXBydAlFbFDON%2BHe0dgijhFJX%2BKWYz8EqxGahtLNL6NfxPUW0K7URIT232T2Y6ko0UY%2FRjtwEZKoEZFgN%2BwSJezens8uLfp%2Bopi%2FnD3ZWa%2Bg7DfmAgqfp%2B7Yov3G7Z2dJ5vOA3q3l%2BUvr%2FlODU%2FlNZqVEooyFv7PK8ooOjf%2BszWTfjOzvOm01FHdMBFJdVfbZ3iZR64kK42rhzn1CTnZWpqDHow3PNmtrV55eANHcDgJZh0E1mt4%2BprGNH3EL%2BGbr0%2B%2FUW0Evkv9qzPdebLgxtttE7Po1yBhZbAkkqxdVfC5sTeh5nsA3rLnR8TZkJwwt8%2FZLBRlsnE19TDFZXvS9cofp19dPhwH09XMLhvSPmnlVBAZIHnoy%2B9sqDHaCIhInIhCpzZLMM%2Fx40xDKiemvoT6KlUJwC6jOL65uf48%2F6nLAQvPpfjeJdz6VaSLPyC076C4dGVfgZ1FWN%2FZCJmi%2BNA8D2srXajC1dNLwGATrQ%2B0pbIk%2F6P7BhtcES3uexFCNhVH%2FqeAIJwlO4lt6dpSxV6EXGJdXhIGbsP24K490RhggexAjMl%2FkDvDRjmNQaburYtnFy8SbswvMbNyQY6pgHUNy9LO7J%2BOVnYN5ktwQ8PtOfRiGyg5QX2Ny6XxBTxixdyVR4kLTKqAbYAb%2FpADIllLYj9Gl4lF185LgHirKXqbs7q5Il3NNzQqA9UV46PL9QjY9AFNiTBjoYegLMcmBwZmdJanvGUYADfoCKE6eYtObQhZF7BdVRvPmyk6DJGyS4gaKRfRI90MGi42rg%2BDWCMVwS0I%2FQST6z6TdYPnLRaHWKwB0T4&X-Amz-Signature=02ec787a17ae6b46b5b5c09e7f33a82e053d55f804c68770f4bac4e183f110a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

