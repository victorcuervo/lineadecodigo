---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQQCDLXT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCxSJWeSd1abdk2uJJHrpWKcJl4lJYViA5aSRlyC1xmyAIgO9ZCrGAqL%2BEhYKMxIZ8o3gCtxPkGWxsECGW01LYwYekq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGPqTqtd5XidUGI3JCrcA6PMmUWr6zebRzT6bKSErCwD%2FvJBA3PoHfZXn4RwgZODHJTf1oSiDabylahx514FodDzgDqRRokJINmhuuB8b2PG7PpRbU1d3O9Svh2xrqbQm4eHpeidUDBQ94Ad%2FrQW2zm0Zxg2ugPodFecAZ8NyGnnS14V3XFSRAqjmdUP6tNREVM3%2F969bVuSdlXfMXCqz0snZfD3TbCwos2GwMtRI2W0vUuHFB0zfnvPW1iDxvgF%2BFbMitW5sqItQ%2BpRxGDMVYBcU%2FBwf8%2BvImfowDR9mkeaSq3rOs3mvTJq%2BROsB%2F8l5VJt5WhNv55bmK5eNcGOG%2BHzm0vvrHrJJit02pS98Qgzyf7%2FInfruuBJP24hbEUJt6mR%2BClHTuiRDzmkZZU%2B5pByfY68Zfmp%2BBNK0XdVptiz7xbQIs5Hu69t70idC42YWRN7Sv4N%2BOf3Skgl5T8jJZCQ4ne0ZkucjyMd5HxmDOt56CNQt%2BR76xqCZf3XsBoPjCjYXWJrogmB8nBfar%2FD0v11POfdlVU1JkPw2EzQJEofciRkQVxGlHbbqt5emn09IpW0LkPKSl8qja3HSiyvkakckBsN2fdVpjmuzDs3AFoXd7kiONfNRfr84MvQP7rQdr364712EiilJGfuMJSSwskGOqUBHftNiWDps7QSJQtUcO3cOS1hjSpC4sYXUHAsf2x3Yt8VjJzjc3Ke42quQ4h1oPWEABB1EtXP5smhmKA4ggTwbkdFxeF3kcCpii9CmCRcPByWTeuZxNZclRKgTODSe7F63fDk1ZSj8YJYF6Qds9PhDibhukTf9MwJJrUKwqT6aCW2wj4lJhQeEJF9xu06A7xolIvUz7pbZ3uGww1sVF4baZMK5S6F&X-Amz-Signature=4444410206e9fecff3baa088618f6800525dca590a2094a57eb6742e933ef6c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MXNQI5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDWVNK%2BMWnlPFM282tg33uEeSKT7o5mmB4GXTjZfk9l0QIhAMNS2MKCrBaOJ3mKOV517dhmLSrKbSgy%2Fcpz8j1NNMYSKv8DCDQQABoMNjM3NDIzMTgzODA1IgzoKEDZ5j%2BvZHZ28kcq3APmazdsV2xCIJTnfjfKPU6Xvpm5RENv5jOHT9xK0MDXdFXFfFRiCxKjhUyE3G1ifNzu1E%2F6%2FjkMfn%2F10x6JSQMEBUueAU2TxsZJYJb%2B55s9Zlr%2B6H8VYxPXK63V0nN4btguDmY4zesYhMSLkBGR0MuLeZd6tlb4zgbBwv16vMb6Z5tlLnwlzsYjI%2Boz%2FnDA5qP6dLh8%2Ffyk63YlkjyerLcsyE79iKbzSJzjOxZlBbIfLuUyhHOeXXFz5UVgQGCzjBMP0Y0Jbw5GexHIhnWEsXrXNW6tfkUZDHLnJALDptRMcXUJD8oMT6jh7PO9O49YiOZXOtO8yzoPkawyE6z2mAaT2vMi2ZUKIxq4V2s%2BzUPJS9L6IlTyh7RgvObcz72UFF9UIpblMHJoaBYVR9oGOJdfYa8DPzyESHCnVWFnzqTeyOdFpcZ7DGNSl5V80W6YhyZsKiamcIEcTa%2FgWbdMbaDvSXHVF3v72jEqPWlu4a1np1TLSUQSPHQRXxqyhC6j1FBKWL1Yes4JTCU9zwWjGAOSqIU1bLGqqx%2BCvcKEIINtownU2eu%2BHrAKsDHweGBAgSBQJvS2oNXLUhAWvCP6723SjeVfNIqbPWu78Yo%2FPH0GmvZXPnt%2FmOihWZcFCTCTkcLJBjqkASN%2FSZ5ePsqWXOMeZtSdXhj8DQyj0iRcwqYz9%2FZH4L8UHV%2FMNrqbaWQNBNAgbAxqiqos7LGLua6nRebTmX8FOxDjvBA3SDP%2FsNrWs6SLmRvYarn%2BYgz%2B2qaAtpWYzN7h2f2185vEc4oeqFlpDPBvsx3m9vON0doV9TJOiGYvmPMbJtISVsFy52W7c0%2BMOM5sOIFXi9ksQAGisQax7Rn6jJrbCuTc&X-Amz-Signature=daf5ff3667a5abe1356e3390230608b330ec00e91868f9f57885da4f153e0cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

