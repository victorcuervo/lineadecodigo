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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KH4WPA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx6R%2BqplHEbkEbfWOqGHE5aat5ShDDyw7T8sqZPJsYkgIgOg23nSe7b0tyGe4IZJMbcF%2BJ5Z2aTyPcP2R%2FbLTGn4AqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBicVMi9%2FJWcg4%2B6SrcAzF7dVrZ32gi8g5Es7q%2ByEUW81ccDpwz3amPLOxGduB5uYT8jllIUk3RMnd9N5kRcuOoyGqwdskvt5jh394x9hAoHmJ4frEIm%2Fbix0KtB4p8xP2bORc6JUb8JJMwz6OXqSDwftM%2FCWPUhgyj97AOA%2BYT3A%2BvhAWwtpoNZL0kxXucI9nZ86wjskZqDHQRrvUU%2FkXFqIhi0wQw9i%2BcxCs1wvM0mbd2vfM%2F%2BORQCD%2FMGIkzUGRmpNnJiYdAoCIrZwHqeCuHUvBwE7hMfM3QohRAOfatbuw0GVFjg61r%2BvF%2FWnveo%2Fn4qTrO1LMAddPBNcsoQ%2Fd35N%2BEfZPlaaPqlzbxgTLIIXzotC1I5%2BOU%2Fu73Ax%2B8by7ioh3nAux0v7rQDSU%2Brvrgd1f%2Br7ZDiyPRDFrMSfcznVlGRHl0y%2FunzMJiUenoz%2FlwRd1WWdDJ%2BdTmuTV8WMqeXtUsg13rhyD%2BpKxoupWQT22%2B1kDdq1xXuFexi4%2F1noj5kncN%2BMe4n%2F7tDiq995py3F2L2EjQrKTu%2B%2FSbOWT57988ruHBej4KnHmXv%2F8hZB2LY9SxW%2BwVkJKyR%2FxKu3uekgkicMAE0DKEcv69VwBmbJf1oGMgy2jOo8Fk8oIndSIp3KG%2BbI4NOqTtMOLl3skGOqUBUCi%2Br8qTTego%2Fw8BNhr9V7Z2z3c59G0QwieIceZfWG%2BZmFZTzODWcr5NnsxBCSmrzGkwmyU2QbykDLueAGICx1RytJsJkgWXvx2oWY%2Bb1PdoW0eHY7Rjz2CM8I%2Bv9CUx6CnSNdBx0Ty%2BO4VDP9AW%2Fst80oClyL%2Fnkz7JOWPRwtOxLc0uURSwid6Bajn0zuHAsMwErLnwzaeWB0x4qY9NO46lC7L8&X-Amz-Signature=341735e7e5d511f8991e36c3dad19a46514163ab978fcbebe361cc1e204dcbe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657GK52GP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmn17ZoJ0iDiWxSkAKt%2FmBQ5HaLw5cSK7L9Lrql5KEGAIhAOTuwCcp90jVd5j3d19TX%2Bs%2FVdLn52p83ouePQ3guVvHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxO5uECTTP2GYVeaUq3AOWHdyEl%2FGLL%2B1CKkw5vUEP39pnDMSpznbWRY9oPPzxkeic%2FDWdd2VciNQU8emjm5DaVSZuW%2BV%2BjOcZmEkWviBjEl%2FilSjbMcy1ijIs5xnxz4Z09fLe9yOVuVVW%2Bc8mGYlJMoiuBp%2F0X8WsqGIdGtub6wKEhRgAqmxRxyHmtSwmOu2B%2FdOvojU%2FfHCNnMbLph5jqvFFWi3ljBh9i0de9SZowYKMIH6GaJiXC1%2F4TamvEy3B684HbF3H94wDFLZb7QGk9rhyM7OxAZ2iAaOnykyUO5S4TTwAVFVMLoE8LUWIHjwZZK%2BfBd30BvNpuz2X3wBVOOG0tq67aRFt9nz0NjkEuZWyosruj0VvmXL%2Br321nRx1KWcOuZEgPAUqtNyvsb3HkJ1RFyehOg%2BVa1eKkjKZJDQxU13WsYda7ihBTjLn4Zjo%2Fmlu137JoC9%2FFuhZwb%2FPzBglN81%2FQrw8xHUIq%2BDjwdcmEg5eSFI4tp5cxjNWkeBtXP2q3Xmgg9mlueCJSVCt4hO7FiDPg91D%2FBwtxwExHIMrYk%2Fg75TqqTWGPSHhMwQPY0SvRoRlOO7tj5RMLQk03l8aHwvsFovOlXUI2lb1BF4d96tHQV44E8ofNT6yjpUFGlfTj75A13stuDCs5d7JBjqkARlmQM0ZQmxcjLe%2BlSK4klLrbDnV6NduyZYdJIgyAUw8g1MGifikn4QdLE8FeWe8OwA8NLcNENz1MjnYn411B5SmKyY8EVb9nz2glzVC0hVdHle%2FIjdfGc%2BbQ5NfQyfbv1QdBSP7ycgb3Pc4gkkZXQ6%2FKadGXK3mftd5ZyxhiO5tMfWR8dmbfPy8ecBWB74%2FCSlQ05S6tpgWA1x4aLqOJdZ96dmz&X-Amz-Signature=4f70ff6a49793f7f79b5cb7a36b1b5f74a25cd39eb7f409d97ee6da110f45926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

