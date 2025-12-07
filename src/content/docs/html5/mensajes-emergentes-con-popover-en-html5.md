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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677M3YW6T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtXsXOowWgqfitE1Adsccc4H8OqZyMrOm4oXgF5ZdKlAIhAK33PKtsQN31UOX7vRHrZ8R5RlWC5BzmdsDwPgoHN%2BV9KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWrVIJhBDCU4SXiSIq3AMg9ZBBMQxYPkSX1d9RfgTTW3GrHEXtQy3%2FdXR1Rdfk%2Bp082ZcEBHCmTYxmbmgPHPzNosALSJpcstr6tR811CVSH%2BbZiFhCOS0fv2P6XbhRhNyKY0WCcfpOc9GWNgsVrKmIua%2Bmh2ghT5A7zuJQMgoat3PJQfC%2B52ObXfzO%2F5USA%2FOYRq1cZMrMV3x5%2BWeLeqrm9dwFDX8WrntSFUNQjJAUNlC9RtbEgrQP5x3hGflrFteT10O%2Bi9l3E1Tf16Zs0dceWFVErZghmXi7rf8kMeOtd0ZUCu5WtXsx8QejcZWujg049LIw2Yg6%2BrN%2BOeH9TWiiKiOzUN8GNL7FVGYmBb0Smyiz7bapWT7Ku0JedCPvteRaVeJBrNKIOuYZGkbiPJ4d8UdTFtmWJbm4uYdcqer%2BDgQ5Q7GzTYh7nthLz%2BKOOeOUeapkw69K9j7U6PwVnebGA9q7nmozvswpcxUvN7Ay%2F7bJNVmqr9jXhIno8D3Tjnn7Sd3Kr6PStAflD9LHykpTaQCassYVKIX%2FohGlBZViSU6OTUcFgjM0KQmcaHDIRKremCL3TQYG1ZSGsgwgGMDmiJzJipIhOPeQ4%2FT0YX%2BXPVtmckayBWN5PjmuRTLyASKMTNOtiDAa7ZvmhzCAm9XJBjqkAcT4dExZh1ipBF7ADHl4tBfyqwYsTtzYEqhi%2FpTav3WL2cYeFWqbumlIWNUUDsG5UrHs7kl6P%2Bzmc2HgM3JJoM6F6DiDnVWtB0VoDhi2tkkALfR4XSS6pzXMZ3h5iSY2Y29USp9ek6VibMBZKKldjQnp%2B4NhM86CENdd8isFyD%2FwGgpqSAEcInFFcDv8tJxJbusDadFQ8edQucOv1YP%2BDCBavxRM&X-Amz-Signature=b36cb98d9b5c0d2543b713341e2f3f3871cbd5d401372430355ebc4d51f880d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LN37R6L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrMkr%2FlbrNMv7iteZqnMxsj28MED6HaUUjMH5BQRemoQIgcDPzpycBYm3IuDk7vsci81IwJql0BYUwY6C4niUtjGQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2ycK9tCHKDEipE5CrcA%2B2U8MT0eOpEqmAPHHkESt4PESrktgswzmJTWwmpVWhEneSb40ttjRkiHsJn8mWRovzCqYz%2FUApQWM1d1ULElpAZbGv8RwWpeLlfc7rEnKXpRM7KoYtGBgYf%2B%2FIwCgQVg%2F7bgNWGkrrQUM4QRaFtsIEOhrN4j5%2F6ckwiumi2VoxwmxUPIIwvgQuzi7MkKoyIO3GjzLaNdo37LQFACpVH7gVzpjbzx4J7joVdmaL2kLAA6AZK2%2BSQK549NUqTiTuB0WoswgkiCBZtAACP0A29Ca0sMhdGZ7lwygwvpGBqSy7o5DODyLbQSpVg8BtLrY6TrEGpX6oYE5R%2F9iUwje1cn6x7SJPZZEBDfIumfXxYwZaLmvpOxVVYcYOPikmKgYJwwAwtGXHUtm7hq4VzscdDw%2Bsxd2i0ViTLrlPk7RtczkOmDJI%2BkoAlcfjJ8cdKKYtIzYjZA5XdPfrcYRcWDxYXY29mbGCT%2BiR7T6F0eRGkHsw1ySctRNmVrsRQS2iCJVLCJCR8Y%2Bm55B5%2FvJBZT2fWIVz2OfBdzCgMPT49kX%2BNsSTWCaS5IzvS67faibN%2Fe3Xv8YkD0lrPnBwv1%2FQFXAfVEjFu31cro%2Bz4pK9ybbWt6ATlyyWMxhNdQnpYpVHXMMqa1ckGOqUBZhyYLJhPF%2FCEVtjJNsY4xaJ8vkp7133JJKp5XhSpBV2U%2Fk0IhycORKzx7iwwbWmkWj0vlQG1XTKI0a63k9hhUii17m0OyvpgiLQ5oz562Vim%2F2lah5aPAP0lGJjlQeyrYg2jM%2Fd4BU50Vaacdt9BT%2FPDqB6iy5E8%2FThJK1n%2B6as0MRvRtqs6QCfLqIMosqYWxpanKLI5yRDmRcBjrp4AgLX2%2FN1J&X-Amz-Signature=3abcdefc0c079d1610d3744d4a026e0f14c2377f323b8a2e3c5b63986beacbee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

