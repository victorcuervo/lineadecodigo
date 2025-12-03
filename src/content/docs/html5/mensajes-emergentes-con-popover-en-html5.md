---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SWSZSDI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIA7zoMMv%2B2X%2BUB8KLNTH9i5TG5i1uPv%2BiZDf4wMtPYgVAiAvpdAyT9vZeA6J5sVaBVIeWTminC9Xgreddxa2HFsnPSr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMM%2F9QiMSeroBpNi7pKtwDgyFe%2BZSUDS3l4JJT6UXG%2BcKKXFTeWFW9iPmww6pMLJYVTTTXzhJvVFh7%2FnP9QaT5H6J4u8wHwQzlMbu4RXq%2BSsiyiMS5wMjQ5LNc%2FRqcG26xzYFF2z6GvEQsChoG59xyZvHK6mYFJhJDz7OByMCU%2FePEEFp%2BLl12IVioqXECrDX%2BBvpRzcEuOIpx9kb6un7rR4IIhf2YSMWyB2Ea46MsFmms9dyUdGA7AkSgDFpdnRYo9q64NkI4OH8nmDAx2SYrfqxx5aTVUo72neX%2FAC8m5w%2FL6pFQt3L0sPLMOMeR5Xis7jrYGmkZr92Ph1uBpad7w7IzjdyclFJCXQ%2Fi%2BC6XIFS5CEB9%2BRMi7QJ54O5psADpwlybg4pfSYkvxm0GoVotktQfzBljuvD8a5Z7xaxXvSURfhRJBjFI5YrU%2FU5EbRiG0d9nDF7VB2YF8A7E4jbC6CclPjKM3%2FSPlN6mrKoP4bSbKOJcJTvweMxeEIpgMNisLJK3dWN4keggQZadWxvJBHa28eiJFeeZU%2Fpo4eWGvIVG%2FthIucXn5g5wEbiIGb%2Fl61sun4MTF2LX0T4mDfTPDqHA9AatIKkzQ7wVTNxLC5LZqMsttj%2FZfsEznXaXZYMvTbOgHuISRoybA74ws77CyQY6pgF7mDYLr33zuLC%2BO6WYkDEIrxaM68IReNvpWKyYmQvh5iAu64el8yPkKBj97ao9b23%2BFXrhdufLXgL%2BBO%2BcGPyqh3likx54rmAKqlWOq%2BVt2dEbXulozLbkYC0wOZoabklA7FZTylZ%2FJTTN3HowchiPKMDDwpjPePx4S%2BbPtLz4t%2FZ1uCReOcJ90NasFQGmx2Ev5YhWs6FSDt4fJwIJf36y3Evtqng4&X-Amz-Signature=ccf3371f28b5ee49ab832b6c2fe29d807aaf5fddb46d66c7f585891c3b793442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYW4XIC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIELk2E7p8PxaxPO5wV4ulDa7R5brT8yYRTPRuXucxVoMAiEA%2FhpR%2F5ILZxWFNA6AlQfXIl6vLyxke%2Fzo7a8dJrtQanEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDALhssPVrFeVWQ9SLircA6EgG9o1DLW4CA06gxngcn1JprtJg3IxBAMb5A8lCWw3hev2T1cqMSlFizVkWRiQcHKnnLhz4w7AmWghAeKaFZfnHDA3YrmcBrYqVLnuNUg%2FUPUZthK%2FqXG%2FfMUb%2FGJMorya1gSMEPRz%2FZpgj86t2yt80h2tPyqep3sMZhmkxNHsdew61hZ7Pctz6HyWyuiX48s17eQElJ4jo55kM9oEkWlolxjueRK4H1ZzoottdcLXRtqKGRyP4jwuPXSpNvi7K0rRqKHGa%2FIn%2BFRsT3l8MXc8pcR%2FAHinCELaNAwNyyZArdWqxv1a1iiN9dH0xmvBLxDWlzVBFFrHk0ntO2h%2B3eeVCk2uANmkflf3e0fudaVB9sPMhaBiCW9NRe37qWqPnTtzBDKKXvKm6%2B6lBTqdOaWOXNA9FI2qWaN63kpvL4KyXwn3hXo5w%2FDAneLxLb0jZFWzTq6pikqWqs4U57x5jCRrUMJaVbjeSHLv0k5VWoFcYYmvfu1jjR4g1FPUUdOnCd6EoQAJGZZizwmpVxA4YA0kMvCrqrkeCTT6q1kfrk9yOMNTUzRNUJX5p8mN1uayyfMQgxxqXwv2vy7oavdLmM4u8IyTgumxGYCeEVUh5%2B0TdFlWdJumwUTrfmrqMNe9wskGOqUBhCZZco6VUDaXJZULKgwtxrBhM68Uj36oh6iP9Q1a4OAblPZs15tlizKAIcJyAVtvmENM0f7K34c2dfyxmlvNAWyK%2BOWDawqyuGB9Wd7tN1HD6B4vhXhlYPlPCYZuZCA6zkhk6LOGrcndZBiqNFa9C3ut1cikYLBc%2BOlMlLrimbSpt3VeE298w8%2FwJDORt%2B%2Bj%2BZWJNyBpfBQegFhWG5N8U2NwpLJ0&X-Amz-Signature=c7da91b5f834856c000272136637fa08783462ea3154b8e38ee707fe28b37a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

