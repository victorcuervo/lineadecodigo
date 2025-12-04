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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D2GG3ZY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAlwXVHgL2ndlsVX9jvSnvut1%2B4Teny1YYoc42ZAMdXhAiARrcEh9mfXtVQ2AJW35XjFEBctRmF6tEwk5PCsPltR3ir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMUJ8jCYL0XmrjTAwBKtwDk0TqEYCoOnlKL0IeaRWasLjZgTcA%2BfBzZ%2F6KC3lwcQesd3HXv5uCsA0KDzytCw2Nis60OkiTh0%2BS2yFQC6N4yQgyG%2Bs51a1krDUpmJXuNAelCT2J1eSjGeoNW%2BMH3%2BCal5mpqU7x8zZK95jUS4wPHywmrLzRO5DyhdOh5e9Mz%2FA%2FSpxRbPU7LJ04Xm74%2FmoccYa8lpd6CG1X2ZCbAI3GS7rVghKatiDCQ0d1kH4rDfdwcrCD009P3JwBsKS5fVE0BTEwnfmG3ui1tAdW6NPuRANrfmbL1BzghqDNgGjrheo9WRT5WN%2FYR2s0nrrPwdy5lU0GQq4ZXxRT%2FbyJPU1I6DG%2Ft5H0f%2BESd%2Fc47jDutF1aaQfm%2BI6id7uUaNhX5UN6OOt9H5TfMdX2P%2FM5LvwwE%2BU%2FxhAPXwXAvF9qqt1jMEPnbE6FuAt48tW48Yd1I5P2YaFNLKtzVUeSEpwZz6Ake8dBYtITX4pIQLFg25ln50ztK1%2BbembGcUysSgnzpzk7KrQ6L1YkvOFrW%2Bs%2FlsSI3j0bsWmqPGgvxylNipCt2Zg5cnoEnaSRQBhJsE62tUo4mk2iXZ66Skwg2dUdYAvbQgrtqdSgRYj%2FIH5yHs8bdZsWV42cCZpqCR5H1MMw%2BbPDyQY6pgF0oKHsgj35p%2FIyGwV69yUGeRyVnP54KcC0RA49whH5B2IgYZFczmCWGREGadQY1Mwn3cLTHH0InhOR%2Biu4OIO%2BLRh8xjDE9ieranZ6T%2Fnp4mbOoOIFj0BsQ3DBOTWVSUbKqs1pgn10iChYr4YnxTKx%2FlNVcsMV6eVlrtofatizFqnL6SLmO5pZeRVMslWJWeM6V9Xxm%2FuLHtO5E6fr4Smnv9uz%2FZyC&X-Amz-Signature=7c92bb701b67c1936a54f613bf2c21c34fd9e09d5499779a51f249a3fcc8ced5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2XT7TWQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCsKKCaOVK6Xdo3uivfNTTkZLklwkVtv9DjB12VWwBIvgIhALC%2F5oym2uB8%2B4wVBNuXhbLzxhmiMCoSVidX8SL%2Fv2qlKv8DCDoQABoMNjM3NDIzMTgzODA1IgzLf5h%2FwukMNQ9i%2Bmoq3AMJAKG3LR6b4MV5CKqRvBaavuV5AbPRzLHp0vhGZu59oeWTZ6H4oLBhfK0N8g9N00VMzMGIwFdxGiQQXDYPU0xNeVMWDL8Dod3n0pFXIrhkeH0bya0JTwSbnkZG%2BV6MnFCfi97iXJfh%2BpVrmOqoLbQKsoXcllJ1Kd3coOv5thcgrW5YMDgRUjCQgrL3nK0slk%2BXCY4dFgdCDR9Hke5XNewRgZBIe8zaw88FHKkUDebQsuFnWe7qoiPQrhBm6TSpOc8UcENogaaoStatmj3EIWEbZGaRDJIHC9e8b0iL9GyN%2F5drnxIlZwSCL2TlrIvSqA4aqawCvPJUeOjQn79TK7cTFT%2FNFisZ0igvs%2BgdX9AjGTF5BzcvPXnqiszJDH%2B9RbtTgEDI7kMCTwBGk05n%2B9iIiaEvr0QWD%2BJIlrYMXHq8VqSnd7PcMx0aoeKVD8wZ5O3f%2Bgu%2F73Gz4HsyKNtt2y9KYBPQtLNegCW7Bqe%2BBgdBLUBLlIz6ctlm%2FwLvK%2BYVr5A14tzGA43oag2hfyE6D3Sc7aEuj1uhuojrWU3mvLVNZPwVApJskV7ThcOlQEdyH0UeQqCt6Qo1EqeJDBSwN5FIoObJtNYYyv5oYLhNaeJ%2BBey2lsSLwXUoBof2CTCetMPJBjqkAf2nCagsM9FkN2W3yEvOnI9MkQ20QdDwgmhVLfre3Lb71q2U77cfAa%2BU2klpA%2FvcaOPdYNpT1yyo7b7hPpg9FWc3C0Z%2FJaJ9eX8ZoqIqSm64TB5vyGJBab7GfdiGpa0aEB5gtm8Z4SQn3YmxIFomFzEv3r%2FsdwBG31GHL7QVg8O6zjFqiEPJlQoOBK8VhEQVVkhHSKDnNSfq0z7%2B2j7mr4jnN0DS&X-Amz-Signature=d86d292d545a3598c972483705e09c2bb270a8679584d133a1c1cb608ea446ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

