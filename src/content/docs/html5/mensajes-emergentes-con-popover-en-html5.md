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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5F36RX6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoni89SExiqISz9HhFF8203Hc31Tkg97jIBamg6S93yAiB9%2FXn7S0lsKkCwbwyL2I8YZXwqhJyj2nHl6c7k7Lrs3yqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmeD1pWi163EZPvDYKtwDYYDryDC4nbj7kswfNgIXsz8dfPlUHdqJyzirsrFLeHwlmStUYgraiaoY%2F%2FkyBTzkvEZdEB73MmCsXmpdq%2FMpaIpKhy65seGJmhb5X96cUHq9o8TJKBWMpZfS7xoTWufvmzyfl%2BCGNKebZ9sdp%2BD2EkSEOdyt2lajt2zdypNmmR9wpBPHBx%2BF0k2jRW8L6ldiTlIbHuCfBnMB80E5RN1rhuYwMM7uMlp7uLlp%2BzC7LbxRa6iUZhs%2FzqLHBDuY6uq3u7GTJKsPAUjJMLGRvl7VzNAV%2Bfd6y4WuCw%2Fl3LmIAKWR7wt7ZtJBccCpFDdzXI89kjgwXpFTSYuH2QsbpFghEoWTCecrRbVLd%2FDChY8uWkXMmivrv%2Bz8J8LYWMDUOoGPj9GFcW7pZpoxSfeHKgC0ZOliZqyGM1IorKJsykITHcKm%2BxMKhtZr2Xp9e2dXl82Imgf5drSsyve9rHNc1CFeEAHW7lwA%2BsjI83OazbRZ6JasEeWn1haRAKVomLeE7s5rjS8a64WIGtfc1D7c4gxch%2FZS9eq19zgiBb903gdDCgVuA36H9gzwpeHeFjiQzvFXEJqF8GEcRpcGcluq6FsslB5iIzF8LRulUyXHRTN9JqNCUOKdNrhy5y%2FUOOMwkO7ZyQY6pgHJv6rcI70PvTMKfDyEV3AvAy4GqMFeVvSKHCzEpm0e3PeEiPbBuBPkly5IhWP9oZjGUh9Urlr1ZMw%2F7W8KpFsditI6itmI8uYvCK6haeo7Qhr2mgq2Hly7FSt2%2BgHPsDCKZn3IZlICjkcqmApzUWe3cFbWNIhbVJ26lZR60Pjh0qoldMjTjXge4Bu8B8xZZji1uqJLUF3JO3I0Jl4pprQyqrCuobjX&X-Amz-Signature=457250d4825ecbf4fc65105a29df5ff22b1cb0f5b2ab3c42e0bce9bb9d6a705f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXBCFI4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHP%2BNN3inNnz60xyqMp9FA41sw%2BCT1EsPBUHvHaR7gltAiEAtjc0QsTyLb9rK%2FpN3Fe0o%2BQjEfGubGGVVG5r9f8IwN8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsDftx2UMZtelZbuircA0eHYD1m5Um4dYeZsur79apwgE8XCWUe8nSsMha4ISRoSNgd7HqYitzNZ5XRC0nECCKrO8RTdcNqT6aIhilIDHHn0hE3YzdMVu9srOTyG%2BewB%2FhzRCuXuU2Iga%2FI8eWNfZGFlJ5bclPDqkDWnSpu3qZBhtHPNgY%2FW9hIvHK%2BS33AsJ2tIznqgEyJCLZ0kwk8kHx28bX%2B2FNEMGtFJaHvcfqCIe9UtrtucDqiJ9GxT0WQ2heSxfs%2BI07MX2h7FZ9Oju7LtXqF%2B87hmWV6RHSGMcrLDvU77s%2BJ96aGy%2BPNc%2F5wfc811%2FZVQlWkK3%2FsILYeeGXaqu5qU9OvECwJ4OU1yj6NBH89xE5UGfxz4oNT1J0F58YOmRJYTJ03%2Fh9bQcaWpiiSdZ%2BHmPITHKjdBX%2FH%2B8m6iAFQGZw7yZVQ3OKWqd3au8VByCegC9atxuT%2B%2BoAA7UN1GleWNBs8T4%2B1RGAwxh7t%2BpbcLd8m31Ejo5qhnUjzV4ADEH%2F93rrCf6FenhpeAJ6C%2BkfpmjUVtQENcsLqUy6TH291%2FXeglVNfgeKYwc1nzqgO1zdsL1zrVnz0YMSMW71haaXh1No9otdcquLQ4f0pqPtPJ5l6jh3kjPGtqS3YAA1ZnYIVfeawLKppMLzu2ckGOqUB9Og6EmqXAFst57GYk5HV6Fo4BER230DJDoR1%2BtpvtJiul6SVO%2BTLXPtC9zPZVXExXtizK9IyZc56CQFC7ESPPLgIuRC%2FD8g1GvbtAfeUouW9kymI0hQlUX4Y05MlA8PmITkUMQ%2Fl4vkMi7Qebd03UO%2Br64pI%2Bc8lv6ST%2F2ztoUgE61kRbph9ZX4FkwGx0thybRFqtzRfZsHWCvLocFTp4W%2BesoKq&X-Amz-Signature=bcf65c6dc4fff507e1012539d024a929b739b945efa5e5dbddf559ba962b7d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

