---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLARBHKA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIEMSvdPKXXA4AvhyTuwj6rzN2aidP2widX%2ByHBacCexZAiEA6ezAX3tt6ZavM3NuVOmX1cGa%2Bz7uDZqLIT266YNByCQq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDE72GxJdBRK121Hc7CrcA9BJ%2F4oTk3tqgjIKqgqRt6F5LqdXOoykerCPLun%2Bz4Spnlpa6Ez4biMP0Pdix%2BjLaEh8jolIwAEiwM7MGFWHKS%2Fd46UZQ09g49U8sPAhmSWA9GTyXwm0QWO9c%2BtNm%2F1OU4pSt8PUpU0GJ9Yuocy%2Bm27J9tqm6HHS%2BIbeYgE9Lc8mStWHZQ2EyXkR%2Bdf%2Br28pLebgFghBULYr4D7PEXExHx7V1PsXa7hRVfJnbeXd5DeIjsv2c96FHJtT1x1E8rHx9DDJKUUVC8XJTXAvbcqPQybErXESiOzh7sO9OP9XwNBslQSLxNHgVW1xTAY%2FkGYagEwl5S5M9x81H8bsZd5Z3XavTJ6WwX8d4JefwnVRUYVCeqV0%2BNQ9VjmtmLrRkJfU5XiRXLNKJ%2F5nwtpGPsfGESS44OFlOlxUPMZ8ML8stqAoS1Pa37FrwW0PAfdF23tWqp6N9BnXwe6n0gZcnjgfRpJgqBdxjAUmI%2FKp2UPVkx1W5pzoPYS4wveim%2BfBsrzSQxID1BJ3og%2F3TGPDCTt%2BC5LN1luxTvBjc1kFsQcFMg4tKyUu0WgOxMq9ngxsUkuZUre59vals1rEiYFC%2BYkwqmN2Nhe4mkcmTGStsQPTwzmOqeUl7IEPcQxdBidvMPiZv8kGOqUB%2F6L32uQRa1hTUmCw69YBfF3DzzM4r4ZqRAsXLI3I2sbkQ2R25OkY0QET8FM9qu6HhfXKZdsVZoW3H4YeShD8MdSnhqujoM4uO%2F53xBDGHPSchviCYyXQ6wTmbIgIx7K0Cf5StCf%2FKa97Aob%2FlnBAFAbIavDFTIhVo8Ruq1jjKKWhvhFyvHLpGCyuGQMglEc11SxaLCSAEz8AiPmvOWmeZOdYufzC&X-Amz-Signature=4cf73cb6e958dba9cf9abc3121010921e1f96bcfa2fd1136bd1a44f0247bb54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJYPHOO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGgfg9DfdsvQ%2FaqQjM5OQoFcXkRGnHKPqmyDa6qGzHuiAiEA5BtzY1XO2bIj%2F%2BJsy3fDVQB5YKtuQ7W1fybMTQeZfCcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOZaXHv97yoY4Od7sCrcA%2BXRKbyxjgoTMiYXwG4dDMnI%2ByNOaq%2BeKQGlqIsE8cxdQAEJsxZNUlpCggxJPYT1jv6N5sWMdMkxCZ0PsvBVtpXEYtZNcO7oCyNlptJVkAKlSF%2Bi2H%2FyRS9V2EvtwZvexhc2ABSV%2FOC6g3aoxFl%2Fuh8pvvVXaGnqYW%2ByCaUN1zvqvOcj33Y88axPKQ4cFIaBtSWoLOn0n%2BXh0ptZ9NVayd4%2BNzzZDuZZGq8WXeV3QJGX4%2BCX5Tkaco8aaTv85lEDkmG1nuKVJcWk%2F0VYR4EwOb%2Fe1SbQhI7shkGm9Il%2FNL9eBOKbwAsBYQ68oP2jx30PhfdqIibVOGQKDJyJ2quWFLhmxfTPtXaTLNlpW0p6BRmF0TS7DnhrtZzn4ywkjxwWwnw%2By6xNz4pXUnWc%2FO5sTOG%2BXhub%2Fel2pyrGwTOaAbbXGWEc1gu3IADp7LkmXQggjtEGPual1APINqo10Tv6yblc%2FupsIb8emzxXBp6zvYfn9rxyNQiz9pWLN7vCWqWOWUgX0DbPXQl8xeue%2BTpMOsWK2XRXFSXPUhU6QPxQnL0GR6OnuSaIr3RNt70aLfzF7wwPI1ZpZcEd0Qt4uDUmqsu42Nv%2F%2Fuwf3vTCq%2FS8PZeLdWlCDyd2Y5WaVRPgMNKav8kGOqUBGD6vyudGMQ5yImkObjyMFSXCN%2B3mRLeEjAw4KefA%2B3QBwZGNWtBOTAAgPQoP8I%2FFgCTyRRH%2FdC4u4NjS3FCP4Rix%2FEGXTT1DGFDH%2FstXdHfeQ9JT58xjxX7VyqmJG%2Bv0PfnquZo11II2QZ4S6MGvTJS6kEAPSqdrV%2FugCIjYm6r1%2BBLOjhQwVz7gzOy6lotiSygnUVON1Ult4n4Gz7uHA%2BN8j8Kk&X-Amz-Signature=717979321bef7ce0212413e6e6307662120a19401d26cc99b96a04358ee596ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

