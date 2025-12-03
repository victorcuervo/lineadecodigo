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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTWWIOND%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDCsr%2B2626EzfIVHJSQ3xy%2BLOWdlkc3mGjGrdX6hKfXvQIhAMX74Zkfvm3OWR9w2T83YBEgoMC%2BR1lP%2BqNbXWN8AcqIKv8DCDcQABoMNjM3NDIzMTgzODA1Igzu4BsUCme2avTalx8q3ANHsYRAoIuMZ20k6ONAa3QvxtHU8JaFZeCl0%2BUV1Qk35uEVeqE81FAqaSMqgBJDbppOhVaMmfO9q%2BEg%2FKmOOj3xm7h7EQHiRfvlTkl%2FXa88f16qtMWFaiMaEpm4uBD5Aa5c5UqVa%2BCspraMjNpRpLUv4Xritt%2FLXKNI3Un37WNo2YyJKEzuU%2FFCQ53CFyO0nCIBUQZplvBFsOQHZ8Z5fJ45o1SraQb869rfQl0A07VpZasTeKVeRqrzWRrZkLFbOVrFsD8HBvjDHrG09HoGtzqbdzHs1raMour%2F7y5vEjITcXOiR6%2Bxa5QJiBsGvBaFIuqYiESNK8%2B0e8tp1wavE8bPr7152Ar5GdND3Lh9WCX%2BqKMQNNvMYuqkgnmfdNDQ8MgX4GFFcsn5PB2eeezdswec6XVusOaI7gbsgRcdZShL%2FA5Ilaw%2Fv8wVk7eDdjtNkdIVo4UXAJqI4VjDlHQAmWt9KbswmGpzodb76NR3sM5B%2B5MU12rcmOMUYRnNJP2TZn%2BxffNzw0LIHTL57mARAECSRVy5Z3MSkYI6GoeiGI9TiHXABwrvsot504sd%2Bk2Uc1J4BhoqYtW%2Bd6goAEipAGzNpOSO8VOoxvG%2BwUcOCG1lof%2BvmRMx%2BFNvSK8gOzC53MLJBjqkAcZLIgfjK8EKRHo3SbG%2FMEVj6WiXmiup0IycA0LWsKI2MbsKgMzQ1dtQ%2FERqiMp27w%2BZ6wxB8XEfrmw7jlTcSQiOf%2ByBUZM9RlrjzMRGNm0sj4FhSScY6UaJfo4QAcTmZpmDXEIJUuxlKWj9SOdapN%2FtnTa%2BhmykiMgboTxzGl73bjsxQoILM54PaxBO9Q60%2BhSQDimzTeCKfryZ3byH5VMbsNis&X-Amz-Signature=d64a09d9cd41c5a2fd71608b2c70ac4f37d83f6934485ee2a8220d76720f42e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNRJ7YVM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIB%2BeR%2BBBuqvV0Y%2FgttFgwCU94CmXsKzqh4NDa9wQFTrnAiEAgOcEDY4myaeZO7XUGHGhv2wMe%2FEG%2BU6lio%2FSBfbd3CQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOvB0Ly09oBxacd8LCrcA%2FynaI3gZuK8kP1KhpnrgUNfPEUCkUJtNQVh8Ftutd3rlgnXctIL79ZlzVYmDTYYMOVfuY%2BgcRBZtR6zE4P14Si0EguKMgQohLMLI2gz6Qp0d2h5TDSdTf9kiulLooddrzfxJEpayYbT9WnPQtsUajD5qzLK%2FTMN3T8qa7OTHtIn01V89tfvcU3LpUzEUynkg9SJJmgsOSOMAFOl6N%2B85I8%2BRnVV%2BPx%2BSabSnYS%2BQ%2FmNZoCIwZ50vRlAHHFctRTrLpSxMnoeiduos2Am0NPdhZzNehYTEALvTvgeqsV4li0uIj4JEsrRXlayXqeuiLweRrfSZIS1RK1myh91jAQN9L7lIOIswWd8uXHGfEBh3mYY%2Bxl4WJagR4d4WaNfCgPfJQn34u6GvCYUDTZG3UqnXpMyJhR%2B6cDNwpJO9LxibBtREZpyawW997HVGyriG9fu8VvdUw6mb%2F60R5fGMllmQhvld%2BQsvEPO67e1w1iWNIOhSkr6kizGG%2FLOrbqSB1IEeYvIs0hdNyDTkCRVDjTgPtGbujEyiTem99dy8NmqgqQk%2FbH0U3AYbqoiu6CoTkg2tDwmH3d7TzVomG285FYLuccsbupfzPa7IQZUfyHK7diABuKzuSDP5joyfcfuMK%2FcwskGOqUBlyAGBGsftA%2Fa1FJFvfr9jk0vaCbWdNGIrAb9bh86nBTAkKgW5comn9%2BmmIo9ItbPu0%2FRj3WlUXEsN7YaYp8jsHIlF0fS3W%2FPyCyA5hh90UqRj7SqXxlEXabo70T59fYJgjm9a1LRhYyOKy%2Bm6EGMwXiQa6ZHTYjqDcDyPwPFQyApWvs9QshGUTjx0m2YTfXP0E8tYJ0SmFkfZxb8HMGC9azQMah4&X-Amz-Signature=919c0f686dba98c3547274031201e951165482f96482a2e93e8d23792ae0e5fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

