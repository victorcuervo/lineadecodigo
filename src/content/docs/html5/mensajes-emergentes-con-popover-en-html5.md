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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMLZ4D5F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyhwhJU7FaZJ94y7EaLt9tOLo0io6OE3BV%2FakSvo7uqAiEAvvO5Zcr9OEcUcHDZPH%2Fz06IuIEA%2Fi1aKRC%2FozAKPJm0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAPA8ld5YUqHA91mSrcA1om0jf8ijsTIURHMEqJggLRl%2F9U4fa%2B85aW91aMg1GWTZFwjg4O4TUXepwBbH9lRWI9rXAd9YPBXWHJ78M6LiSjzdCUiIV45OWAua%2FyP5X3LMyXjajK1Onfarka7Q3R90HSXTi0YrUOl%2BIYZngdaJY%2BkOCRq6rUVlM5Q3LGs9Xjqj6Io0%2BADKQ82iFkreAZzBTNIWjal7XuXKLSCo24SbXNJJ%2BqD42vplYYBKt1sfhvkvntG18FB%2BlX87Gh0nkpdYftCssUJlNMfMx0eADwY%2Fk%2FFar22mlu171VE6F2Q%2BhBqjNQRXRjOQfihXp7jvR6y5jPUxNeW5evqS%2FSgd5%2BvtsYGvBwVoOItb%2FWWd5xqBt2vWv1nCqltCR2PAAN%2BQQ4wvcyRW7gsIAj0d3oZqbfefkfC%2FWiSHDejZIi8npAMpQiXWD9GqdbsBRFsUxHbScQNVRWyV6gSqpnwfl7CJ59w0oUobOk41nsYoPf26UG%2BnxwRmpZ23w4gAOpw2GapyWqOx3GOli10GCoUdBfNkKEraFs8VvO0UFwTStnDSWC5h82lswlEK3%2Bf2ihBrSRmcHj%2Bqmf4XwVYvLVaHdLCx7VIQolM%2FJF5vwfpaXPp1V1aAJKEEWRxjAhF%2BCVllPEML2g1MkGOqUB8vUzbLTLUYXByDNxbkv%2F26xHHLjRdlOoVS3wmIIRvEB5HRMTFq63z6xF0n2vOeo%2B0vWdidSvyUCHbjD6kSrxP4OqrHRtnu8p9kxsDdAQeUCXanqH74WIawebrdbwrnrNFv8SOdth5PfNKUx3smtyk34BlJ%2FgO%2FvrP%2FFCChsdM2Gt9ruxsVdL%2Bdv9HaeJJ7xukJA%2FImztneZoYJv0lLHkvSttsfNf&X-Amz-Signature=4b88e8a86337a5ba7ef812918c18418f5d437e4c3c5154d53b5561ac47e07901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7RHZNV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjIEU%2FUtF%2FFBdiHK6h9m3EgeS4yimHIp7kccvcsN0FwwIgMd8iuj72xgK6eTEKpHSsW1QRfLt8DdZF8mESPgT8InQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKG4kSiGlI2ddS9fIyrcA%2B9gg6xiuMGbZKUGCIK27%2FnIV1kh2C%2FOwrIh8M5Tp8S4lwfZTCXE8Te3Qjbdh7vhHdqjSyFAlAyCIaErDllLi3%2BEiVoDqSOiYR1lbCTRIbAd3CabJVCsNj2JvVSgR%2B4YdtVh0nLu0je%2FsGco4ibGxjS5cNGtjVvwTmcVXGwfwHzw5XzgOdWH8If0oeRAEfwfXHvlAl1vJV50nrJECQbocjXlxOjF33QqNJFRWh66%2FZL34YvoKubTeHOG%2FxP1GpSWmfMNlEgeX%2BqIMQuYAb3sQqr79IbRwVCgXgVvOZJIVZClKKh4YGM0187NEjxS86uT1qdC9p7P%2FRvxuUXjGC3p3daTXvZBTT0fBtVP8WdnX2JdSTpz%2FdRWZED%2FEYFuxX1UKRMV0n2PA9GndaZ6tROStv%2FARRAMeQzuMxYkMegf0Ge3cAFkhU9bDGEI3iZEbUjFstcqxrE2kUoJjGXOpqgYOgV3BBcQOHFB%2FLvkyNY%2FPjmZBJAu%2BRpGdqwXjasyb%2FIPErLwiRsGgNQhcat3utgY4w%2BfGKjARiUgXS7BR1grTLg4HBFxQTkxi09%2BWcSd25wFs8gKZpmSjQnbrhXBjXh4jO4fjUEjiWINVa5C%2BOP0l7gnacvZewK%2F7zx9p7pGMLyg1MkGOqUBjDLEdZ379TjB8FGmDD%2BC7ktmHrh%2FL%2Bn3L3vu3ObwR4IK7VIF78xRVez8sEql%2B1GPhUslecPwwM75blNOz0f2Z%2FtKoprf%2BggKw23BVJe65c769zWb96cYBjSl82G5bOiA4lZq0Pk%2BxFSJTcIFjf5blcsIywOMpn%2BrPmB4Sgq6De0zE0WpIfjsjgIC%2Fp1HUeiUuCU2ZsPTX8GkIYwjZy5vXMbaAzsv&X-Amz-Signature=7d68740e81845d655f16191ef7298f46dea9c0adeccf80b6490be085feee92fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

