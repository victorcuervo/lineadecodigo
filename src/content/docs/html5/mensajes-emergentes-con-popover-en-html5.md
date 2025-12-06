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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5J6K6IR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE3avvdOkCJYBgrETHFl%2Fb99T12Bpj%2BK6QAz46bZ3LTwIhAOQBxLPFeqAE9YbnbLSSW4ces%2FWMR%2FFWObE2MNhJy6ocKv8DCHoQABoMNjM3NDIzMTgzODA1IgyY5aCCFjHAORdPrU4q3ANLaDoSApj97NXYfsD5ODlVW4tXEdylyq9RG1gRkmbLphGbpRO3vKFhNx0GKC0Q%2BuQeFwJZMamPUp%2BblSqwVu3wuuDdSGqFMpF2rhF82ed9bE5e8zMI2gz1kwHpxogccQLA1ULTtrSvC6kkW4yYhaQzE5u4Gxjpa05Xve7tOFKbFP5FvsO%2BNBgNhFDkqRUIvb4jGWrzF3H7ytNjBhD6NYCFSEoZQjfdliKgw1jNoxn0Fq0J7fjXvCCI%2FZjum9SIpX2eXULGNpNaKk4z5Sqmax7RL9TslL%2FKiQgIcW3sUdZgR4uqP8r4lPO8Ilt%2BxXSN8Drn61O1iPwca%2FZxOeWlPFC2yI3ppfgezN4wYETIcq1CNKw1rWa3WI%2Bnk6prKNxfyE4a222JiKZTGV5tsugWa22uvvMrlmO3FiT3zS4xyPjeAUpXzEbnGcTofYnbFuVuG2gGOVVZakPLuuSz7d77rXhsfhTacG6MmAVIUcqGPaE9o0NDkF8s4PSz0S6gXM4Amr404q347snXEde0QyFRgY2vRF6Jsfis7DT%2Fuyv5OzQRzIeqsany8LR%2Bbd3gT40uTUMq2sUhWrMKI%2BlE25TgVnIcWUT84r17cmh08%2BoQyKAiLLjmhDKKKIG3v84ZMDCEx9HJBjqkATNFkn67gQpnNPf9rSDKz%2Bvwj2O2KfZNV%2BMtRBhTU%2FSUt23AD0g%2BrVD%2FTsV7H8p0EkuHI5mjDDaY0IvBiCCqJqTRawN0lADq2JREQG%2BhZfFJagWfpJ5jcNvwnECCrfSBuWzlhpr4zVZlxbv8IW%2FP0BmC%2BhAUUHMdWi%2BebHaRq292d9MG%2BeWA%2BbEQyuoY%2FCH18uWh8hC%2BtnBIDGTBLnrBELnZNzSS&X-Amz-Signature=3bbe9475e4f5db52db1fc51b9b1c58992976e44f1c9fe85518cba441dfb07be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOMGVFKW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsBe%2B52GQa2yPUdn1l%2FkDNhIUWde%2BYRSi0LfBymxnyqAiAEBNwnbYB0BLfPip7AROyd4BOq0MDxv5j3cPzIvUe3dir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMNfKUdnsKsIQsmhNjKtwDAypryatv4rKQU8s2QUDdtnIRmhTvY%2FXJiR9ZTbiS5ARJO4IYaSS8YRbM4P9GcRAIZIczNKD2riDJc0ERFD4rFWx9T6QSBMy3I%2BrxS0PS6lBl1XxKG4hOu%2FMK0mivFSNXxHoVhRdKDkKyVUlTb1UdOl%2BROhd79dtuX11CZR08V1D9u1Vir5gJI7Or6Zakat1kjLnNpd%2BQqZD6aCJGcRFMVglouYPe7QkbXWZG8rygZssJl%2BBFQFQhgkUnCR1XgVU9cXKMywfvq8tI5orW9vH78CjO7mgAky3T7HdfYHH6wAsKPwVQA1ZOWnbkDtDIQRgXNBPI49HU%2FSsjEQI09%2FwgJrXzO7izQH37g82Qv2C3pmLrzVXUzPfJ1w7CRAG%2FWjJnH6D4I8dec9MPo24%2BNqeETTzzRAbjzA40xMOu99WsephFR%2Fiq5vQXa8dRNHVk0gpcTMLGVpKUv9WoNi2Sv5tG6o2IM7EZjfcRXif9mylh6puVwX8ha3r70ybMbzdFJFBG6MI%2BXs%2BRfvuwyPi9HH0wvGJGooN1skx31Wl4zgeJTBTnMt7afB7DjJoYh4gu5cWged1kciISpW%2FrWcWjwwMoAjP9va61BdasTfwWBqlY4uWIB1tu0%2BGKBp2fsNEwtMPRyQY6pgEY7eLhN41ig63XAG1OVVYEygdAiIKw7sLIb%2FMVxzdnu0J22xFa%2F2zF%2FTpgUNY93llJDBVjoKzM%2Fur6%2BMGtRT0R1Fd%2Fll0TYTf40xitQi6DU3b3ySYYw%2FS1UHJ6s0SGkLGiVCjDC1yLzLTw84um17Nor4f0R8hbzOAZRzF8ecj727QSm5D8cOUvpddmJxafe5JyVcGlORjJrLO9eQAVoPP37yFQZoJ6&X-Amz-Signature=447dcd47d76783929e81fb7fae444009d383be7da1cf453b0b76f7b94e34b5de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

