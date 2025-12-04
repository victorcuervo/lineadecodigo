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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q24FGHBD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDCYb84qPgoNEINh2OAd%2Bo47AGii3UrYdxthlTShQmIjwIgLMYGjo6zK%2FW8VZfxCEZFURO8prK8xWFlsR%2B4K0bx5Ekq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKslxdd5LSAW3XwzMSrcA17%2FLsjjyyeGE48%2Fre%2F6VqyUYV8keiIVkS%2B1dKZOFrV0tpB1f4L2IL2qkrB4FKqnk40RdImW2%2BKNE5LaiYGYwOoeyjji9%2Bq0a4sz%2BBYkAl2oh2svgnRMMEXuJrUgusmTVYQIccm%2BTAUjQHmZfcrmAMRkCgnniVaUMFDXHdTEhUuhPq8K5ngj7polaiQHLDg7NXxII6yfIe%2B0QE0f0mLBkiOjeAYs6FXeiOcdNiIGVydrSEjsC9gPYk%2Fx9W5zSVmqs3E2IrFSIWLD9LmLc3USUoSAOtkEF6BCHVdz0ycyaovxUfv6CHxz6f63nkL4rDvvhLJCLFAknU67N4D36We71HBp7PY02kYCaRZa5brik7ihLKq9TGO5Z2e%2Bithl1veNpIB2WXx9qAu4j7pigB3xF5LJAW4hdiI%2BfD4l%2BNg4CbhWEW9L6IgA%2FQjoCjVoMAdGAlqXwAmxQZnrv4BQh6KeXeX5fpy3IbM3E775YY2sv8b0rn3yHlbkdmDLp2K0uGLJ7NBQobM6xnZuAeAhPG3CswyKEgpEWQO8dEX55cJcjS8uHY8C3eD4Rvep4aRutClM%2Fk78VXMIb3pfjJPE2ghmuBob6cfo1IRE7jNtuKXF8W%2ForXY%2FQAWotNCLWFrKMOnUw8kGOqUBpDnoIbgCOA53H0sUmpSiCH5Vp3qDwBm5lDScRHj%2Bggq1MoV1lo%2Fo%2FezoWLbxwLI0LI53d05xuOSDyJvqYpvj6Af5SOEjw8otEBBLqqTLNl1CDzmCn9gkCs06X4fB3DMjkZ%2FMrniJdqpVImNLGAwJpLmPdJKir4g%2BtKdCIQMQ52LpBmxidp%2FGZlJ3UEm%2Bubx5HcWAa9Vz2rCF5YCnJ2hyb2g8vT2y&X-Amz-Signature=7858e331e9ff23f3888c0125e96fc7580d35e664ed57a56a280bed1f37d026af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GG3EIVS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGp8NK94OoekTPsbSPaGRsq3rSLRsLsGJ%2F%2BfIAirNIOMAiEA5KMhhd3uxM%2BtZtbsrJa9jH4HgIOjlgU3YlYydhI5Bfgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOqi2pMqT0yD16FNpSrcA5BgEOfETrYk4qeqEZj7n68ClyBaI8g9%2FXC8xq3KBKO5NDRm50sI1vFHZicyg3aqL6uOf1jbgNB6LCG%2BcR5H4C9%2Bi4jivlVL8ww9LK9kXGdHnwohdFFXpoaELQxaJhxZ1cPHrYWQvP5NXv7J%2BTCHs7u5foUMYYkslTGM9pBkrvgKOAoY5Qx3jz9T9p7y7cXGF3gKspn5Wz%2BQOP%2BZz9nXDyTeiPs1rStoatze%2F%2F%2FWy%2BaFGaDyle%2Fgz%2FvRTk377RR7IZ%2FXJbq7GtihYT6LAYRNHISoeVDM6rdrAToY6JANnezjzeeGm671A4DQn2usJG4qllH0X0ar6XUhhFtvV3t%2Fmw%2BND8MJzX0nAr7bJ2R%2B8YlWzQrjVsYieeab%2F%2FlnOkik%2FHBVv6IF4Myog2LDviDhosZHfyBh1oppMKp1MXLdrqyf393ulFVlMCgA7dTgY04a8b8XyCUIzEIiHsLCchi6kYJrNKwLTn13%2F6lTq88HBJdbFrwV%2FkIq7KUNng5P81Qn%2BcdOdigvIv4%2FdomFQEaC6OD%2FYI3toWDKScQXmZnEvgaCjMAAZmJZBY2z1V5tVycXT3BF2gLLs8xBF2wkE%2FRVFNM2nq%2BlOY3pEwwc0UYMhzKKbniOfCvExlrk7XMbMLHTw8kGOqUBRgwtZ3RNzKVstCEYlJSoag8aWkMSC93dn4vRP5Mlw8cTr0Xb8jr%2FPsVGUPleY%2Bg%2BInTJAsLfW9GbnZXf4GutXtex6rUrH1tRrDifA6%2B6kldjHyQvpClFZS0S6N11Cf4fxzsaV5DrBk2OygWFsNdo2OcWp8SaEmloWwy9VjnvWzRQv%2Brj%2B5%2BajA7N%2BfNUNQifcnDm6rqFe8VpIzH%2BkNWnJVcytJk9&X-Amz-Signature=ceb2d6faa132d21d26f7487873a51e5d51b36a19541f53b1620befe5c6d67ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

