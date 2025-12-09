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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGFE4UMC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICV%2FydXJQ5Af%2FVLcp%2FlhIo6Fw73PcIAPJ7tVycRQDaO1AiEA2hpyvYyVaQXUEujurNtd%2BPwaVIyi01uhZf5eh%2FqoQqAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH29qiaR0AruqQLB4ircA7O5uMN7GWsTvAwRG9bY0fzec543kqYGaCR7KZYzKszi%2ByPzzIn1uIcy0a%2BmuUGcGcjUh4Km%2FO7JXpIJ6MJ41xhsOhu1suJlMX%2B7LhQnnYmdjZShNTwfdOqK9bPLr1D7U2G6TEJG2B23fn4R%2BAW9Kjq00pE5wsQAg%2FTHCmmdJRSMR%2BYmNZt%2BMPMHaj%2BXHiCAvb9jukxMUaSveCLRyGgeFcTaN%2FtfuS4PpRV7%2BETN8DnURahA9HxIN1xT2T2gbEWQUOXy8PrLe24qF59OYmSkYTdw94mvkB4ZJEoid4BYBkhTZMY4wOeN0dvQyGJ81FeGopZ6GC1QyBHIUsvZAgMMCkqLOyxGC1QqYxy%2FJCcSMyuWPSkkMj6vDUKtePb91YFj%2Ff4pbumkC6TfCx06XTkCYW4aJnrPzjKea16CZur58ZEUtzdg8TgMNaBzpyKVHn0pUGhs8Ckrl7Lo2jD1eQIPe7Fc0FS%2BU%2B8AeFluzq0H3B06vAYOzaABho9BPVQlvInuBQNI2llQuzZhmt5gEqSKRKt3lFRv%2F9vvCkrTz8DxD2Ba9MsUQR0UoVKZt1h8WIJ%2FUcel7yALmWs4NcWqT7nFvILL9QKyO4RyyKiQGaF1JTQHhVQcqAmS2xPWAIm%2BML3K3skGOqUBBB97uxzXcxDnUDHIsoSdIwkyeMSthjs7nRwdqndMRm3Y0TuPhC%2Fl9646EXEY1dxUrhGUyq1JYWcIIh1dk2KRhAcCz3XdR%2BuXtEsQv8IcL5PgjTM8EiRIpEJXXEAj4oOpDT3D4BQQ2xLuQDCLJwbrkTAqCAgivo5%2FUqBW5oZKsOe42T%2FtxTJCkfYpJSCUV98oIy7H%2BfkvCR1uG9wFFiT0as2Ruujo&X-Amz-Signature=1bd549bdc2bc69442ce66f0a190693dedc3458e151821dceaa1ade5e5c745efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LXEMW5D%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBon8KAcD8ZUyFT5Hh3yZa%2Bq23cN3e5tDp9fX9S4ZMAAAiEAgKXrqkNswILkEiqe1dP8ixLH%2F7MLKRu9C6daZoZdFnAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCNDZ730ECdU%2FkUbyrcA4EUwlbEjYecAyIzV%2Fvemp6qwHEzr6Q8ln4n5owd4NhCBsqVOz6sjbeCRr%2BeUJGWrn6SiJiCYcM7X8kEdyUqYV6kSXDYtrT9Eo%2FUCJUwqUbmQVm%2BSC93vzy8zqLvXQnWgRlIZ2WBzTT8yJhF9IEY%2FLa0ZKlJgCa2MPrDyQkm%2B6uvXitvaEoeAdTfibghY7iMed4Z1geD2G84kvAUgtTKsFOTyMP3w4BvSDv6mkLoa8jhlrRrGkLC%2B3%2B1j6EFEpE9CCql0HTfjGt4UZ9LkHwEOZEp2aL3Pf5Du4KV%2F8TADjyx5vRYv4Yk9a1muVZR14U752vN944%2FtdIhycT4hi2QsdZpPCNFQanUmSro%2ByEXBJRRg0ttO8HJKJ5M4soTRemLm%2BHdPShPB1fk8QeqnASlZu3Od10FZs7p%2BUnX%2FMZf0C6fw%2FOHD3RW73sAkt0i%2BlPWzaItUVwoLPjIwvhP5462%2FdUGERapTBHYzAJjB7aeVXLUEJ6MyQpGAE6Alf%2B4FRcHm0PRXPbGunPIqJy0eH2lTCZRKYbI9VT9f%2F6%2F%2F5Y6RZxFg5422Lb7dcnFiWsP35X7Sp1LJQ%2B%2BLXGG9qDoP599pjQpvH98K5mQYGKt4G0paQ0ThgXmMtgBtC52eq%2FoMInK3skGOqUBa1LEoIs9SRiansaAzlNGMeaC%2FzwffJafsPLPG2DzmWS1UbPOI7gD0oHIthDhUboP4nb0thst9l3ypv9IDomC20%2BLySsrTSiw1rWRjiTqCZGY09VKHWKZx0XEpzOPKeXWMDAuQn5%2FQaZQVBu7iraxFOsdc4UlhFnYEab%2FijGwmzUEzesvcjmWP77%2FYXeHKQhqCa%2B%2Bt1ZJQMugcvmXfmdGAHa3FMOY&X-Amz-Signature=d052c9578ba67897d19f34afc83430fbdc384862671bf242b72cb17cb43e083e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

