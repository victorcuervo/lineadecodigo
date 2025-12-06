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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXRLHXZU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiOBk%2BUq5aayZSxdhCDmRvHUSIY1LC1ZJJ%2BNwheiWxdAiEAgH7L113Zdu9xgdIMSAeadWgH%2FLo1h%2Bym%2F4k7e13EKk8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCycOjnT5YxzP%2BpwxircA920WnqzOHtcZkrFZ6mtBW9gFRNf1F%2FHJ6vs%2BGRaEDV2ndYbDbvAGNcG%2BVbctrClayn3u2U9YMmYdDwNqQZW6FxzM1Y0T5sm1zjQ%2BNJ9hhXg%2BHp60x9Emf8B1K6BwFdi3XUpepJ9EKV0%2Fiap%2BU1Sk6KVKgcgIgJzl8OiT3583Xs2DPcxekFWzCWT2BHW66Rvt7CuHM8rsZRAUg2vBLuSX%2BCKH9QWT25G88Sc68x29%2FyyVcjHSY4hp%2BAZqwTUUcSVi%2B8UOVymxrw2LVjx%2FOautvXFmRoWW4o51PJiOOeRIt%2Ba2Qq2tPbBeq5gJQSiEy6ag42R4mwUzdIU0VQQcIijSgrpDVhvGSyO4XkqGuJkCz%2B0rg6Pv%2B9HiW2U7nOQejO%2B91ZHZBJNiwnMxSsoCKMKRv9KAQdOcjV4fUo4Zk9Z%2BDcSVJGuUhw6IOhW9e5N%2FDRhzNHh47V%2FM401tzH33vKESHJKLcxa3DWNpypClVKhZxgcFIBkHwTysagcfsEstNosQ08v1pe4WYFbRFf91IStK4wSqixlyYbHkLKekh1o6cs6%2FOeKWOemK7HHmyaJNPSKwQQ63a%2BAcip%2Bjf5k9Xa8N9oiW3I8L7bEodTqfVrmpbF7nfXBu6uSiwpQq5w9MPLL0ckGOqUBtUtivlCqL%2B5DHKYl94swN%2B9G2te7RLK4KW372RvXZZq%2Ffpbgr4YRF9YWtYSqW8qi6w4AFtqGSnxG0npWGkZC%2BW%2BUdvBrm2fLFQ7%2BnX8WCjTUVgKXXuOWp201VurToDaJkzTTRumBatXmHC%2BzQOvVoI7kR5xLNMVbaiK3CAjmtx7z9JaFA1XLUHEzh9CvdNnsJ6IIf6hJcGJO2uWRZ5dKWUsDT1hc&X-Amz-Signature=5b1b73b64a9bb8cdbe40a631f87d0e5964fe4338e1ab388541cfc1b4a4cb24ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6JPYQVN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHLRi%2FptN%2BCrqWQh1f65aTUiPtXSFuNY1x93KNrK%2BT%2BAiEA0M4LRdx3k96FYx2%2B7eapnjZz4ROwJkzZ1pwCBI6TDj8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHGtB9%2F1E22ddJjOuyrcA5qR554AR9kHMWBI20pq8CTmbLkohuwOijK%2BR4OBJfbpzwrr0zf5hbCfdE3%2BsgvrZ%2B2uk0lzEqdA10opOcjriYc30T7FH5%2BFT5PeTB76ynBeat6HEKKEB1pI2hxuniMMllS7Id2%2B96FRN8HJ44bh%2B98bZi6Srz8XykD2yMi5eMRQVt6PLFOrrPOS6mlBdeJf3jVRCumtz%2B%2B2u1ngz3UXnU%2BxVnltUCRYwFH3%2B7hgBwOOmgHcoI3p%2F5mmwqc1usPR4Oo2dmJn6ATUrPxq2494CoSdb4wi6z90JXDTT2fud9j%2FotUV2WVkDDr59yfTedv%2FCcSF8ybt6Snf3%2B0yK6xkY5JESBnTt61pUwENUM97O7wfNx9BmwKlpsN%2BOzLEnFJMSI1J3eUl9LsD5aEkk00l%2BAx72dfLdh7MbofLQ01yckQae2B7RddYRKsIugGGcv9R3cNFCtl1cZIGKGjgJP%2FKZGfRh8pyEZh3du6tbMie%2B148Ya9vqhfl1WKIOngZ8Yk7tN3u2uo2F8XhJNiZd7BTEpphDPdbo2I8k4%2FCOeXnN5qVWBQzWkD%2FTryClIF70imP%2BFRIdeq2NtPRsx3GoUvDSjG00EAj%2BLT4%2Fu18ZDR%2Bagn045GP9GEBuv%2FAIWphMNHG0ckGOqUB7HHX%2FUScGW1Tg0Mq8MZjIP2DTffxVPhkIPrRW3zqBVHZHOF7Unh7M4%2BB0Ca%2B%2FsKcMVDlrO8RfO5jQIl3ox7XZKBbxhmvItsSG2CrIEuBxjeoZCMFOC%2BttCyP5EqR8JV4DjXvViKPRdIFovyNhTqXbTUfNqxZ1i3csPqQM9yF%2BilrzxVmjDZ1Zk2bXp1vz8mwYJOH8okUZQ%2Fmh016A6VcC%2Frp6KgI&X-Amz-Signature=13aa2a82e7bc3f2a5a6dfcda3aeca3e099d3c0b11a382f1db466b225db22a2f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

