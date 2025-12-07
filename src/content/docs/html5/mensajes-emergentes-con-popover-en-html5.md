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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XAR63OD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDltynKv%2Bfm%2BOkhqmoq18Wokhk9JxIiK2arzxm3ozKVSQIhAKHWx5Un3ZOZzG0W5ZtnnVzOOCwK7gY3XcPfJEROEjrEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbXsIu7nknKdqFXUAq3AMocitLqchMMe2Yt6SJjOZaBPa3BfaUIwXcs3KjfI9fBSPGJW%2B6iVA2%2F07SDzzhkWH8lbs6gixpyUfV9OESOkwY%2FjgXXFy8AWdNsQz965UlDGXDj8vqQr%2B1mEMeloANCSFvaGegyqGhct2b0cuD5tKo3WdzgNyWT6Oq4wH2dgl6brcD7hdt5kEVJlnN8t9BU8PUcurIXSs8x%2B3J7pxrH%2BDs3gXngaFczwlooEnN%2F%2FETiJmCKRIthguXe4Pt%2BNu%2FGeIjkDgbGJRDDcoXpq74poeoHtZDPBnDzcHsrN5GYg38c5EpYMGN5NuXRxJ5rz9PChbJRQhIBzHIfQyHYAej8bcpekiXvBPPYIvhhqzjSLV7r9tVbeI9rrcfhNVgfouQ3u4k%2FKEqxuwUxfS7v3oCMG%2FIT6ZPjEouTuu%2FdSrNNq3aj4KwsUaNLhnUe%2FU8kGUtstvwEZvKnfpMooiGTzgntfzHTB86QqPXbeSXjYuCqCJ%2BOZ9jfsqUiYYrujJk5pEztX44l1K3W08QBhKH34htvyr6mGCDIDoun5Mn%2FVE06qQ3Xh0et7d3GNMNnX6ZoVdujnsGJ10beAd%2B3XGV%2BW9kBEqR7zjHrirzBlhSO%2FGqyTfwc%2BfP96sFfJ1TFTX03jCL%2FtLJBjqkAZZJyjTrCdK3AmiVMtAbfacvq4ag3FxzZfuhCb3iwiCCSDKgm%2F7tIC8TLGOdZwYltw%2BWui1JVnRystbj5qQU45M5ORBBe6mvHaRH2AT0Ae9lCgFKmmzx%2BYcQIUG0uG3HeGUQHaeRlCqydZnWjOzRnWn5Oz9hfqEg8ZnISszQln%2FF86EcwC9y8On8QvhEla5mQUY4UfZ3v1%2Fz3tp3LI6wmzZ4zGNz&X-Amz-Signature=97964d73d56a09f9007dba2866f4c79566bebbc518db64ccb99974f0b234c364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G2WVPVB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIvIoiIljWVma6RM%2BalxB9qJaLLZH1%2FI%2FVvpQP2GRX3AiAHBKHexwW5QwcrP%2F8wQiiC7PfJi%2FutcJDLMhpUWt28viqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRq8pwxxOFSALlZuHKtwDzh3ZtijgVJ9qj14D724bttfECdUTbKswkxLQMinbgTZZSXjcSkZybM9nBRgFvJJd%2F2vdzfBRfX6sO%2FlmxKCGBDEWmBx7LF2sGqxZVh0a2RkdDilVJayPcgWqNkwzTOVJH%2BjLDdgdbASNBiIRoGCcrVC6zfA2zBl3dHoJTnbm1hAu0Pskiy3zIHuuT0cE6y2CuYR2uWQGJGBRNGT2Wgo%2FYdAKM8gJRWyNQPtdSA2AYunADD%2FrjRxS%2Fm7GHqsTrqIogGdJaIJtyMXZncULYnFcKTY2wS1g5c00ZfdjCrjLS5UT%2Bun02qibDNLhNk2A4QloxTIcgcbsNaDeeSpICVzdM444fjQ%2Fb57d9gYgeTeEqxNtvZhTPEgcWGc0E7rji8jRGUH4n1E%2BV%2BnT2wp7u8sMlJMBwb5QTcJolX8nDVPRy8j9I9PHLVuzz18nppG%2FsLdtXEHirWCfRqYY6ltonDChulQqO%2Fn2P10XONyEPNzIP5SGOd5K%2B9JJoT6oaDlTiKG92BUFieIgD8oFmyXACWGdBwp3qMeJjw92wlMwPqNqd0u%2FA%2Fai3MS2JwpaNGj8RWahuTk9Xky%2F3Ia1Z0hL%2BO84SCOUwN5wcC0kajFWVBhU%2FFav4o8A1o2Tqp8joXswiP3SyQY6pgGf4oJEkJF79lSdW7JfBHmtmqQaXkneZisOGcMWwE%2BZ%2FSsrrnHLFuiUpiqNbUblblxYgxsklnhOJnuMhEwUaLH2vBuOjElfXpwinVvNCDxKU2exSf2Dy3bvMbF587cNCPV8CjZd3UrnAeMl4fm%2Bc%2FKrjNVZLhVGMDOxG%2Bm4Srv8PqIGAEkn67ejrArBude3Gk9O97IL2kpq7evsQws7WzQmkLu2XZMP&X-Amz-Signature=02912a9e570a6ac89c5522d1e3b63dbeb1af3115f3af9eb8c508a43274a3b630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

