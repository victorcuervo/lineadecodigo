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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XBS3GEF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDeJQmgbi7L2H3saFVzKnDEryD2wvvi3WfW6DrEuZoNGAiEA04sOSuaeofyXoTeBXg6gV%2F5Zv4vbbh8f5ftk335wHsEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFXHQBFFJ%2BY3AeprDSrcA6wLJvKXamwYm15tLzB2RpebIq9ACsck7ZAjhLkdQUwqUCov9Gtea0StszazZ9PNktdBEqu13r0gbHi0%2Fj0%2FuoO5rLmTNll2viaH0VD4UckfXzvxpPL01CAFixwQizYuKp0%2Fr%2BcdbJFZkG2lvHOnfr%2FkAe4DioIzK3zu7iFtUOW50amGqVo2HSwOOAryPoVOXiOXWI7Q7oPQk5awPvspSueRrRdQaJAaIX8G7MvRdgfeJS9o3MD7dan7SlFS2vPQJ4IUoQBsPJvLhSozN6u%2FdxxvzyCIrj3giOJd7aWubr4KyfUdh9G%2FJBZbnqhbBTnP1AWxbSPat3puzHopx5sDejAJSCzu6iH2%2B1CXMfbvBL77AoGv8X74v3lC0hO9ynT9PaSUkz35YEOd90ejrKRvaj2IE2u7FXhnAu06NpZ1uRvUYfbTRBpY3k%2B3v4ZmBJiFCUq0ai8o%2BNUfhPEIZcaGFeVr5PTM5OPWjoaI7i7hwBIIFIcMCSrb%2BZkI4ARP5AGPPf5RyrCh5LHSm3jmytsjLgBN5u3PWJnMqWPUO7mLZDCcuEcshIC2bNyti52cwkaU1L2Np70PInOIYyWy8EuImbOBxx4Kzq36ZiZhQ1FXQ2qKlFQNy8Q%2BHYEcB7RqMOy5v8kGOqUBWhz%2F2n%2FO9mLs0ipSgxx33DeeAsTQf9ceuykTl5PQcuXobgLWFHrj7Z1wxhC3lwbaot7sZT%2BxUsjlDs73i83Eciu%2Fc3V5ojT0nDtgk0gruFjQ109zLfKPZVYobGLdao4u5AClfq%2F6rmhnIZcdXSI%2B8Me%2FaCy03lhwxPGK8Rw6wBLVqzw1n%2BSE%2FMBlaP5ZCasfeCoplOLBl6OCNShBsz4bp0kIxJNG&X-Amz-Signature=7e9b7c299f5471ca5aca46aa55a21e263bf7b17c56487876341ffe3f3646adae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTGVH4FO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIECM1IpMIeleigvhchfdIc5dBy9UYKct4XW36QRvXcc2AiBtDzkkJo2EZdPmBYV8DolFTbw7ktA4CLe4ifvuAUrHSSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMCW%2BASbXYHI0jioeDKtwDKfl%2B1B%2FEsDgAo7ShdpIf1h%2BB2djXKyz4ojPJWBL%2Bk%2F5v5O55nk0xyWerdXj%2BsZszKHt%2FWJ7M0GJbIovkHVOoxcT0vT%2FZB71WKNf5nYK08gXnNGfdI9x2mgUwplPHQ1t9CpoH6RRmsS9TzgTOfVb0Wp3Tjn%2F5F78UXARrFqULmTAfyzQ4gqVd99TU5MgMAU%2FWW8OGiP3E1FsClYy5KiwVRmRBXfWqtrjl2IdivgcGJco7nr%2B11RuU6y%2FTUzHKPL1MgwebNm3ULIQFz9NGyzUUUW2IswdnaNpHzN2yx%2BTYsreckFYLvwQq09z2LuOQCYGEUArY5IEYfc6EexdKYXwZSZFJe3A66RKnVcrD2beEMAEdTnblZqg%2FOzO0wB3bD9uORsiZXy085VD6zp0KKv0Gdwvj4DKEOVudPVTCeBtJdUrNGPkmeueAKtkXrQDFt%2FQxjI%2BYeBP2KG9fQdhXXlLPq68H3VRXZgaRMYHoqzI%2FGO6sunwdeXSa8o7%2Bj4d2ro%2FGy7V4vydQfntCb72jeI465OpeCEJU1Mm7r4BDvIRorCJyIfdtcdsJmAbKX6D7dgs3zxzZexiIf5Ey5ZEVKRHYaTddrm13hb4%2FV7kS0wwAmnnbpP6p0ln8WSGPdmswy7m%2FyQY6pgF1H%2Fv37a3wJcjZaosrJSGBnXMNIoYiGl6TJrxce7ASlvl7%2Fj7B8pl8W6kUouEfg%2FYDmL04fRzGo%2BSNgDBWIbF%2BOF10c3NhpOj6nS2p3gXK2cBu4ONvxbC9oi3XBUHTqDgJoh8ufQn%2BP2nzEm1MENdfJUayvlC5efOyyf%2FUKNZ4cvMyBCzlkB%2FHcmmTXedjldlGqLXj%2F%2FFlTNrM%2BqxHQaMT%2BI%2Fx%2FBVu&X-Amz-Signature=f74c3fdeb0e85b3ff11877b6b777f589c70cfb51845b7718e30f6a5215796192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

