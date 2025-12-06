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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYDUXI6D%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHyJOIUyjKlie4Yg8XCw%2Brplof2vx97Ds6rhIVMPx0OAIgLMP6dvK%2FRVzosY5OX4BbGIKo5o7EFUm9AySMs%2BNIaa4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNgtbZV8lKKmnW1kwyrcA%2FcnYorDBh0dA3nUHGG8fKKzJi1jB%2F7ZmE92lkmEnQxGdx%2FzyJhK9DDxx%2FYNHAV3%2BFW9iVttNOSk9U71JpPvN%2BRx3JwksK9r%2BOLf5w24oZ1PFF%2Fdji81grs5j4Mc43K1XRh8tuXb%2B5Egv7MFzr%2BFwgOPXLf41ptdz%2Bux77xkXnArF9LQLsbQOqmaHMZFWK2%2BDxqU6PpwTBpn36YPPbL88wlvbCDLCodgbGunSsCXBrGy2kYXa4G0qj4v%2B1t8YbPRSY32cTI6aY5uIUf7hIVqHfeWDmY6Lso1f4kXGEiOYooNBR7dL9o%2FWSJjdLmo0PaeYv0zn2Dli5kO8gUVrFbsmFcTu0vkhP2HlsJ6tet2k6c7V8DvLArDXzeVMJuV%2F%2FwHX%2BXL7cfED5AWlperhK%2FkcyK0exd3s%2BiBaIzcNM7iZijTdrWx1sAmHau%2F%2BE1lbsSNFQTLGrr7%2BvdWXs1t3wfVndO8JmhzVFUjpkhtQ9xSPvTtBJq%2FHPKo1oC4QaYe%2FOkTmmPM1%2BxOxQTyVsrXD3NWAo7YhS6Ux4hDwZwHmZzVjHNNjyfWNA%2BRxNWqmDzW6nNipv%2FiQmAfVofOpb06itqrYIOvl3w9WlzmQUD3qArYnohvNd2bKQEAppzdOUabMPCJ0MkGOqUBfyiLk3Z3Dyhu0g9X7XF%2FRl6YGzb1M1G%2FbH0Ft3JAHxkX2cfc02N0XvTbrGUebPateCunzFS0buAgdO1ERZSG0qb8z27wAeG2jHKvLdvmfM5YTcbxJsCLb65TI0E8Xnu%2Bq%2BPs6djdTQo8LOFgbnBI0gWb1hHGsn%2BcmtGNu3DlhaQ9KbhcHB9%2F76%2F1QGCuQ09xNK5PLakd9vfsX%2Fgt5%2FoQesBio6P9&X-Amz-Signature=0bf26472fa8aa73e76d376ee4c71e600219616b0f60e540399601525f23bd441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A2QELPD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy%2BiBFO82NkUZnx6Kpr8cFLriBEfh4BinnnlPy%2FCVKNgIhAIemWPBCZeCbhJzK1ICjXDDDM1KlPEKbMH8%2BDkcSB5QvKv8DCHQQABoMNjM3NDIzMTgzODA1IgwaJCi7QNw%2FjEsc80sq3AMgo4me1X2z2%2BLaaZzMlymXOhbHGnsVFJxxnuEI9ORiq9lD462dNguYU0sYecauZ8qhWDXLD3gyXLiNsJhxlezYBRhz2WG%2BXFlREl3fUJt4ijuO3PRou22TwLoxLjRYXiOjWltN2N4BPj5X4locXl%2BtBy5phgjknHPuDSIjPIpKTNxa29fgel%2Bw4eK07Qwz5huCQnJTIyfqPypjYAztz2oimlozHbJvbRbCRVmWeHvYu9nbGIMdPp0mP0dCtpohypr8B6vaDbQR1%2F1gy%2B1BseDjBlcXVzQaDBYKQIItuM1r1Ke6XVhxaRkj%2FhK6nEhW0f3yEYRuttQ4qnMz6kvFxOGBEy%2FydtSMVFX2hV0Yy0gNOT7ALJ23wB38rOUISz4Xm2AXjr3g5vhStwuRwHXDTiWYZp1uJx8iZejA5enTAI0Aw1kl1Qqzr9KrPLdzD2onGcbdANYjgpqE%2FHfCdIaXz6wMppkwo1toLxyXp9P26rxR25v1f1%2FTvs6uejqGgzVIf09PeXApRD6vtQQi7x85VJzI6lZ3RXLDj3pqT9IsqWo3NajLSH5P0ceTKDKwTIysmyl3S95nocHT2I7QS2kJmjXvI04I3sI%2F46zfAU0O1CVvwtexWj6z54eq1hF0mDDOitDJBjqkARMXsaauY6OrVP1PGc7isaY8qaWQtp8wjsF%2BV29QoJl1VHqeYEMdK%2BIPvxX18hQNcJW5Hm7rl%2FCUB4XJM9jZ3iCjg21GJjeX%2BW8MO%2FTvygqup2ClrVv6mhwgTKb2Vi3%2FfXdvdhy4A1Gm%2F1hEBwQtNFiAhlg%2F5IlhWhmyJAXaZ9DJxKip9ta0Ib1fVEU%2Bu9mJqF1UmsBuwuzBp1zLLSQOrPANDSBE&X-Amz-Signature=d8b41c0e2b21ac76acfc71e774b120f69313779c3deadaff11993982b151ecb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

