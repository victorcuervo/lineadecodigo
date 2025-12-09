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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ6QQ3V4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxA%2F7nhV%2F58LHP%2BT%2Beer1Rajut1fPk50pNUbO09V0pwgIgCEN66qgNyPkZrcWqozyCUPPaGtd4aSBcWicQeT1%2BtE8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwIhKx74pvJK%2Ff5DCrcAwKOnWNbYeyh98iVOTdFsh4PEFDrWTzTRixQyfQcasRrNzifV7ZL%2FVQ%2BgJCsv0AEzV7wjzP0on6OEQxuYHK8YthSPzpAcA52jyAol%2BJ3KRMDvA0ZLef5qqpDO%2FSi6kyvKkmzwCc0JH30DN1RWrz3EPmDI6pSj8SPmgNQBcEDVHd52%2FTn1FtGpvy%2B5wHDTRIvQlb35ByEjSlFAzh2FOa%2F1YPFl%2Fb9z3QkvBEOqLSXKdE2gbm9RlB74AbGsK8UH%2Blz6qpz%2BZGkC5hUWKspLwtjcwVf%2BzN4ovSFW1ycLZpbqIXKra9RGlw3S4hZ8aqUqoks59q5qgKk9VWyFf4oQ3r8ozSCDASyj%2BTIqsMUFEMxhlujieJFXeLI0A18RTqWwO1fOEODt7gg9WBan%2BEgc9Z9F47Xs3YcBAjF1sd4vzaKB0C%2BdWUgAtBGzoQINV5faHgoMdBqNQFYxSVkX43FwVb5Ir%2FAyePwJ2ZW%2BOYbafyiNhmE1%2B2j4HEKd7L4cQ5yamdAo9rXkxWms0grRM080DskG7lnbbNwrFJ1djDsiD4J%2B28W%2FCcD6IcofvkE1vWSvx5gLLUzO%2FzFXsMPR3RNEqaq0CqkrDg5CHIIOfWNq8jOGUI8uuxBfkv5Q4g7KRPdMPvo3ckGOqUBiw5oUS%2FJ5Bgwc40QU4jp%2F%2BB1CnDiBHHIX523eM1HFpIJ0eZ3J4hGBOI%2BIzvC9JENGyUwQQIIVqIFo894c3uhuvw%2F99RGheMkXc0rYSEKNxf6LiYX69sFaZk45yRzZ5BoXbXv9u7NeQLG0c70XO%2BAWRXZdjRF6krj5uXJCRll%2FFSxBBKnJkrz7E9cGl5TJwDTUmMlGxxq3i5XP23SCHBN%2FulE0vU5&X-Amz-Signature=1c16e81258f734a2a34db56ce0864c645e288b44d0d47d238db4c3758eac93b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623AXMAGL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQBLuaoedTMVQBgUE58t%2BRuMPJmIMWNkonk0rbis3HhAiACROg%2BmKfSriuDxjNbWSV2F8xEGbCZGdG6nkFvwWfj7CqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPd9zZ0CAyu6qeYiXKtwDwkeUYk3q4Cxg%2FUfrlavxRdKaVT%2FhqtcCCof%2FHcVqcr1GKdkESgFRGIhIoGLPuoiEfdFLt5q3gaOMrAzxkD13PVahHfVk6qZnoxCZtJM9zXwWKjlcDOlEQBqoGeoqA%2Fya6vtayC8Ob2AoOqc9%2BzUrMX47GDhlfT2mq14BiOy1Owxzi5s4ZEfmhNJcOOTn2CcTvlt%2Bc3kuH3v5a5AJQu%2FkuG5vcAXavy1gk1tZSflRy9qat881eR978YI0wG009niN2raM%2B1MMg4yMWM2QdfQMZxV5RZwVK8lmGN6RJpncJsi4trzEBwFh7JxnOe%2FXrj7kKdIcbPCcdWqnu8uGD9Iczm9Oh3uc5daF%2BXkRUicZUGDR6v%2Fy4HjFXxMIC2tsIWrjIi1haTn4in8vP%2B1RKv%2FZnpKOB%2FstMSrzo2nVMdYc38p9RDI%2BmzxQk37C9tvR4TIMFggtmC6ByFghA3ZY%2FyZqKaq0RS4qKHO3lpNUfTiSv2FmsLZJ3N422xAgluBX7Log2gdy4EUz7bTgeCDCHtxYI8ov1jjHYyMsNbEpP6aDOyeDyE0K5bv%2FjXS87bG4OgopUY9A0w%2BotXAJawepWw4pK6Z4fqJLVK5uaO%2FnahNAxtwu%2BWyym%2BXF2QlQljcwx%2BndyQY6pgE3HiOg1QAWs8K8jpuQmsZZtTMuEJ6bnmoPfCemF%2Foyt7Rc%2Fe6twN8161dw5o9iaFXpt5lUdKCrcLZIHqu0tlB1nEzrbif5YEiGA6bJNzIIdZ2OxelU5TIKG9cGEQRBhaD2ejbOc%2FJGc0BOVCtCVxMoO%2FWVFuMpynB99Y6N%2BNAoeQqehgg%2Bo3DBepYFxRtcF%2FqJhewCuFD86ijci%2FK%2BS8%2BwB9KTNCZK&X-Amz-Signature=90070d61b739ff2135fe822cd79ab41b84d9d4556bde18ada4bfed5b8c96def3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

