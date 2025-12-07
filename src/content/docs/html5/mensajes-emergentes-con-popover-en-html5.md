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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX6U3ELP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDHnI9qYAZnbOmt0nlkKxLjaVElohL65%2FLA%2Bx1COE13AiEA%2FyWx6lhFJrWCDDKrNJOo%2BR3yQYQZJcRMQXloRb%2FFMzAqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDapoQJTaVi1C1%2BrrircA8GXAyvvEhwv%2FtMjk3B0Bl%2B3%2B6c7iAIGExrAuIdIqvQLI7YA7r1ln6xopSDaL9lD89b%2Fdl3tFue3AL92HPSj23F1IBJcdzb3XWCj7Kv4GTvEBaNHI%2F6CiJ6xe7%2Fpzq4VWE2wAHgcU6wK1%2FMkt8xFWgzbNUAPWeQyVKwKMDPLxhc2LOF4xROW2cVvw9cyS1nJG1fuAoK2ZzB6nmtsEUivcKTQcppHtIgEzbro8edAdlC2GubFQIHRiDYiXv9NDlzfgkvN9cmwPrLsnuWjHkrK69d5V3UUILrJU109L8Xq30Szl6XJ%2FB2kvZPhn8AAyIuCjapTN18UccwnKAa%2FVy6%2FUeHDXyjI9v%2Bg3%2FIUu5hGJBVCekv4Xao6GZeS3EHSrD8SppZEtuMQhJzZoFQhXkByjHk%2BM2MQgcmECV70pG2RRfCg1yM4AEEl0u4bmSY3VsafLi0Po9gAdZ9ZfNgUjxRdRxUCjUHlrqhQyn9dPsSkbrn9ImQRwRtm5vfdaTRFejKy9mDbQw631Ftd4Sc5uWvv9T3dbu6Y2Wv7S7OgHM6hiyudFvLbzEx31GZvFdDo2hf4HYeZQhHFdosjvGYYQUZzwFtpe7LBxDmGoIKVhaWhKYGWbcgaU2CykY8OhkS%2FMISF2MkGOqUBrwovXg7tASyabSshH89KSGra2t2FfHmldHu5UIw7k50NKpNX9qUKQ4uPpUoDZvEOMYSwrUZqE4gzxSLl1q3NwS7Yau32fIxnssNBPFa0QhH51Sb%2FUVRCjEpsP8QgIgzDJPD44UEP6kD3LJVA4VbmzC0Az2HzVKwIYXM3j4P0pnlMCVeVbEJ008BfbEd366chl6uujzUET0Dlq4N%2BmYVKLC8%2BcB9P&X-Amz-Signature=229aa8dd82f991bae074596671f468e11b72e74a82b46e2cebaff29c52a0e975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EDZEOS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbpq2O%2Bt%2BASN4vHUCHa5RpACQWr3U3jB%2BsqKXZKo%2BlFAiEAyIK91kL03IA7ZfSjrHCRsHkYaSMZ4rJ72kadwwfOACMqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTtwQT0g5ZPVm1v0ircA5qMK3mD8AKAWgXqccCJvnola%2FAhtkX2uFCPwXYsfryutVnF4WMbt3O48jiQetWYShnBGgs4X2%2F3e6AK3TLDdyopSrr0QOXQf%2Bg7%2BEJbWO8%2BhJqbte6cilZn1FOhWkCE1Vp6HX8T01Hna2QXSO%2FtIDQwFjTrZYRQX9Y4m%2F0PSNIunBG9e1ck4e64Izd6rWpYaNt8O7Krim2zr2WL91xkCQ6lsnXCaLAqQTKZmTxMpNKPiGCQUCulAH7zOIdM1ubh%2BmTk9WR0C%2B4P3TRQ8jwm9rabdRRNhQefMZuBGGPyTPkzhWw1UEebpeOpKDVzkouS83Rx0GqBQjpscW%2FWiOTm%2FOP40NZTstFSJv6YvOr%2B7JBh0e%2B12yyVhrJVKOWtMrzwi4VU5%2Bi34DSyYg7SA0TF%2FOBCoelqenoCZLX1PX8tnTe%2FK2s47C0Jnq8sIiTTIj9idksgOeSCnN6XzgO%2BbDXLmSk1Dg%2FqslUT8M5b9VeR2YMIJ7%2BSUeiTUY9%2FwCSXy0tEj0pBhoUqCuGSKPeklugw4akIcUY3x%2FQLXtbG6IBS0OXxj0p0GfJt1nTd6lZ3Bqxstd2VjWKrrdnPAHKvAmAMYgGcW1bDBY%2Bm%2BUjqQqxt7kWPleSYFzF0XHEZDa0XMNmE2MkGOqUB%2BKX3dlfReEgfNyCf92dO3pQzK3qbW8PGTlKhQ6vG1AXWm5PNC1%2Fw4lVGtJqQP2lfRSyk%2FzSqxEnOMxlFl1qif1JDjeJu%2FeN5bHbih0sklSf30JXdhUrjaDUnkP8jGSWhO9cuSyHsV56lzfD8HxSSa1nHeLOkOEx9wt8SRURfUHZj9kl4%2B%2FcsYt6WXtgjR3M9DJwJHrWBbvL2rtgVf1q1iaD%2B4V62&X-Amz-Signature=e3b87c15c55c0ef889d2333966f7ff1d01e42e385981d761a57eb9f0ca79a5ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

