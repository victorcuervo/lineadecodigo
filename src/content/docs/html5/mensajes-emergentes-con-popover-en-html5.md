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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVA3UPJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIeD9cP1ciz7uMTqWJTem2tuvEF2TAjZsh%2BCvh4Y1MyAiBXJoMVDzmI21wa6DGz12jfM60A4n5R6Ikw9ByVJPKd3iqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5dQ%2FpiHUBbjfEo6oKtwDmV%2F3L8Yff1mtZPKD2BCz8Yr%2Ff1iKl0pS1RlfIu85B1pDLGNbrb98dtQGXIdUOaM0gQ%2FOWm%2Fp%2BKnWI%2B%2FbTmusH0RZkgmp%2FpC%2FAcIKqUa5IT0U4gl980lVetk0t5zHmgLGHLAkX0F9X0Bj%2Fshpe6vZA6mlK%2Fe%2BX1gxdjVBc1uiWLTEXpWIwJZx6o7Ld2s2LFNK%2BK%2F8flSmpkMiMHZ7wDVV8r%2FtSO%2F5fJ7KHN81h66nEbKUUxFpxfxhquw21zme1a8YyBhWZ9aAKPEA0Jp%2B5%2FIfRjHCS9JLJFKPsXIabFVJLbkVtcWmnQkRiLkXwcjHngY5koGMbz5satwXYiGezUJnw0emAql5FtpuS1%2FBIynZGqwylo9Rf2%2BGkjATx%2BMWukJA711ZvAYIbRih%2FVfseZowKu%2F7OXsbl7udikAIkrzkW6q9xyJFCBfrSpnGg%2FUPg9Zj6u8itYALOwarSB1jTKHM0qFZtiqaZ%2FwvzsfltzS00dRJAlKRk3v7qmjM2W0fxJ7scJR6w7ElXA5wHuK%2FxLqhf6Vtg6ZUNJsRlJT1442unLt4khpu1f1BjSUKrOcwtQ0IYSQ2o2KRwi9lTI4KkmjpooaOWdOwnG0XreWTNNMqzL3BuNSOYOs9587eOd8w09zcyQY6pgF2r3V7r55yTEvy42l4Xu1hl9WGowuEAqteonzNk3v%2B8jsn9CPvQgQ3b2K9bS8pv48Ch18qOoPFxeoiP4SgIu5GeNcNnMQ8y%2Fnlg43oth72DKnW6%2BrqI3c6XQO9unpw50N%2BjAa2qpzWvHJ%2BAJjRRbws2mDe7iiZbrOQiczoPpPFNQwknyiMJpYXkb%2FzBHarR%2FMyrCBd5UobK5CjUBRBXPloEIjzbqmv&X-Amz-Signature=5c923c07d2c9a6eb19b81c3e68661c02aba871e48ecaff7d8a83a9815f6a1d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3SLA72K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvLgn2cW9tOZxTGdA9WbR0nrysb1Q0qDIOdLuurxAo2AiA2j8s2LGw5yy245QGAHLhYWjc15NzlQuerTMpTA9ZzZSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4WCgF5O5%2B4lfMokQKtwD4Aoz1JmD1yfh9TqoQMarPk8omA78eueIkcznBPjusMNq3Hk%2BH0K45e4z8%2F0dDyrzqzXTZo3jE7EPRKAz%2FXmWAZp5FZzTsZVJ1wPx46qr1IYLq9VK9iEYZoK7uDh%2BDTPmBIbNWnIPdfQ1totLbk5%2F5KoTHrXNRp74dxSkqVSUNU3kS%2FNeufCE7C12ctwmTd0gnDQIHA6hX7jz%2Fv9bIbzhJISAgP4O3y5MTR%2BA0oatT5BkkQ%2BmOzZpMjZNeKP%2BC8r0hxeEr4UlqAIY4bx1GgfeDgL5FPBfjT3uWwj1lm9g%2Fx18j5pacoGm3YRT3Dq25QGwPhzGbueGQcDPrlhqilKfq8dZSZZBi%2Ff%2F6oe5lIpZEvKis9Nf5CqmsQJB%2FwqEOy%2FHS4ib2tvBy%2BoPBFjA%2Fbh8b0gvY9myTRvOQXPwSYcV3XF1G%2BrEOkAXeYkzFUM9A7uwP1bzkckMSLFzHHPBJcSju5Tt0EG7%2BSmDxGyuhj45YZwyQpkKd3JmILAlT5i25yoj7P0OSQmn3VUO0EtzF6FuhaVDKpL1E2eWrFlvIBAdz1AxS08wC1yimQDmaqQe4eY%2BDW%2Ftd10ja%2FHYVICLP4bXBceaVwNVkudlLlGjKP086mlStqGduIki4BWAy6Yw1NzcyQY6pgFi1hRZtrjFTPbxoWXvr1VqdzQE%2BxPGCtif%2F7rqxykc%2Bia8muSNz5uqREOPEJDHwfaUhkxfiS8W2Qjf%2FRrKmHTcOqMPkiQ03KZ%2BiIpa3rYegvaQ5qDjN4WEiXDr4wblocbu5IAkwndaCJ3QaDnZ1CJw4uGOnJDeMHu2H2rWgIgDJNxRvjxidKgKFj1%2Bfg65ezT9eCJHo5u30on3cjW5FWWcqATHdDgb&X-Amz-Signature=ce2f7e8e630b71985062a44416d24c1329b8de74fb0b2068f078953437b1e2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

