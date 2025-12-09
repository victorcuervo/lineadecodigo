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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q76VVEH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRBfB5ZuRINLMwmI2FpXLfamTq8INDIAfq8DGd28IS9AIhANwz0gVAA9nCR6GYefSln%2BBlX2lUtW1IQU%2BYWq5%2BrDJtKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGJlTgRsc%2BnI532k4q3AMeqQHbQwV55O3CM%2FCBQ2LPNYJENEquM22k8GYI%2B8HqudsfsdNxcmvyI9xSY74zVyEjS3sX2YA0GDn18dGY1JBZLFaYtGgbK2LdNV%2BW5ULsQ%2Bbq1bo5GRqZprcdmL7l%2BieLsJIGSdl%2BCt%2FHd5HB1NeGdPqEwqXU2qrFSOmt0IA3Fp8JrXwMSSKBLOMCdyLe1Nuby1gGwM9EiHp4c4Keh4r6fb%2FpRFjsZZlWZo7hXw4fLbCfvEcrMj3brNIt9DZ7eNjaF2XwOA%2BKlPpADHaN5iPyHb2mwrN46yOYBrS1D8SWxT1gF%2BSPkmHjMXBr7aWHdzBCY5tCDwpQ7GA71E2oTyx63Y5ORa%2BvprYEuw8F3pWpxzsjLD9q8BJOSVPbFNd6Bmlasd%2F9Yry5L8H2oQ2BFpPAxmFejL5AurRpJD9ip3T8jzdI7Y1WQ2ZFcQ0Nf62DF%2FOxB7rR32YrO0PaFgy6HlwB1l8ZOBuvBQs6F%2F8Njqhm6S%2FwbJpW41260GOTnMqxTdGAPC6P6nJlJ3PmCoz8i6UHhpEc4OGX0WTkkK%2BJ7TmNt9zfa%2BoplFR3vvZvcWQjg%2FkRCnI3cVv6vX2nXBPB6b7XX1wETyTUU%2Bx%2FDP%2Fwtws7U2tcqptTsDjS8hKu0DD3h9%2FJBjqkAaunvuE2G%2FW2ustlDRNm1hVIFz3jBpSVmMeKq%2BjqWh%2BK%2FIg5i%2BFhCgB8UeukBmG7%2Fje2mfpAzdJfdjqSVqcuMoLvNsJZYluWyD2ZWtLjJLN0FmvGmnaeljYvU3mXkYJkLsvEMriKZN%2FVpSFhG20odZ%2BH5XPjbXCL%2FW2LpdbPD8VrbKqe9Zm%2ByyLgbmdgYak7S4f%2BaxpWQYOq0FXpdmJe6JqgfE2y&X-Amz-Signature=e01ff61306cca3b2d131f5e15dc5d810a75b9dc6bd49eb01e9633086a6783702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZEMJV5C%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVapnQjpfxaUVeDE3yy8Y7prpr95i%2BWFLGKCflHfWA%2FAiEAizYVnq8csn2nhpXRAT4IG%2Br%2F1EOZPjTvc27rZUFwH1UqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhnM2SUJY%2B5Q5jT2CrcA3%2FiZQL8g4vIf1eugYzsWf%2BFVfQip%2BqRQmFrwnoUAp3yU6UYe%2FncIic2%2FPCWDiL%2FhicnXvcmLqxmK34h4APyGkIDfa9RsUU2A7TUW6HHYTxDQZ%2BM7AizrhYG4J%2FCdyL2oWudqx0FzjL4iKkn8LGVzqcctJdTLUULlDfrGvfsKxSsAO7UleWYgz0kPs6BT3e5ukln2llMZZ7%2BAgKhiyRE8J2RMK8RvKCXxXX0sa5bxztmAft%2F6D6WfISXhPAv58IMHl0%2B4GMS85nf14gMVsXb13u46oYrXRrwxTOECMnwDMarJMTfpHRLKLfUorcfQYAxhuCMN1XR7%2BMheBCrZU9yZzAgyFS4pYAvDFtgyuhNIjuq8xkXqTEc54hENAlJWyGNXEBfRDHuojIK9jALVkN4l8c6glCPR%2F8fqUAe0jqu0C9BWF9fsX6VKrXTB5seWza53T3D4C5ITg8p7JkWA6YE7NSLHwZwCK%2Bg4keKOA6tRQEr6z3yOrJxpOJit0gyWtRXk86%2F%2B2zDqkKi1oDYKMc2AzjeiVU0dRvtWktunpvH15tM%2F%2BfTR73FBjY8xT0tg2uhwD6VQD%2BG0yqqKGgrt36xxatSwfGE%2Fbc8jbMnr9EsF2Tw5ZwV5J2kr%2FBa2dXlMLCH38kGOqUBxhxdwA8bEH2YBPbDmxFk7ZrRqrHowneZ4bVyvxu1WLgyAolSPxtbkdd175B0gTch54ce2hr31v10bYZt9600dDt71pDgYqIspKNYYWvmvjWRCR%2FT1CaN2ztQPOW8PSEE2xv5NRxqbKOKDlC5ZvrtdzPRtKMN5tuk1dUYWuPhTickuhSbLojbSouAk1OlSNhm%2FKmFupzZwm6Mo25akWa%2FL9P2Lgv3&X-Amz-Signature=38005fe3d03f6be05ca8516b5bab0c62e69bc725d6f8fb29c41845443c6b5dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

