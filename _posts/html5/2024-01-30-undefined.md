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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642HC47UL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBBQ1bac7lVaUNCawO7qSUALHMTQZQqcw%2FIvqW0Wi55ZAiEArsy4c%2BJTuTuxb973EKglZM4ViXjsWvdK9DAuEygqARQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOFUJXj8AQQ0MEo1%2BSrcA5IAMZtLtjbKlI8mRT0qdYSyjGqx%2FU4Nis0udiVkKadmod43YyCHvh%2BlOHO076UHcVnQLj%2F3FDsF8lxH4wgKc4pT5ioimQ8WIyj%2F7ytTUvODBENsjmPxOf7cKH3bpRgrc2p%2BYzfnjUETueOZoJtjYiCzRamd5gBaG%2B2hzR5jetLz37ngok6Xj3N9xzFxv4wSBJXY7lBGIhmU5MfudBKmCw3vhF9EeYXcIZ2ykdjzIB%2Fvh5U9DRO2yyXtKQ800RGZ8KFbI5fQGrLcspv%2BJ6GS%2F6nKNITjvv%2FZVLVmnb%2BS1kEcSF1ePtJS%2Fj7gdWht%2FsHCcSdtZ4eDuH1u0DdWFTgo31NwFkUTQAdOmPlf263pgKhjZ0vFOBBWVS5qemYgbYx2XAE24NN5lPZgrbAPDraCEHT6XHS0phjDoWjXdmUELEiVD76Vy7XYepwe4Sei4AA7kdrG%2FN4StiKtfWGfNUYP66U3UCxJ2R4qGoFJhA%2BgohBwS%2FaTK8zUtSo9uSbNY%2BGQQm0RP%2FD%2FJrRAvMgqQH%2BfOOJF2oPl%2FbJwXiblACP85%2FdV5eo35gMEsjFncVYdfvIm%2BIeIHVbdkBnn4%2FMhJCqNLCJHefhgRxm3hj23DmLxTANn484ZSdJ8fdIQeLx%2BML2HwckGOqUBu04MCaFdCOgYjBI%2FzVpZyUD5oY5UXEKSnar8zMI0efKIB9v6TlA5TnaiOP82OqfVh2SWJPshyBDOP6LsUpwN4Uk7D8Kaf73Cgeaafx27ZvAqmsC81AOkEuHCUtdeODyWABvWK6LL1v1YPcBKNu85sb8fdeauVygIjQrJayrLRF0kg9QpQBnGU2g5ozIa8iTM3qpFL1UgPspRBsO9HQljpbc0qCot&X-Amz-Signature=b3c6b66e533b80f5288397f84e669127a3629ab3b3c92bd20daaf42329997c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNTVHMZH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIA7F8fV5JH14%2BaCWjablliRWGMBcLZYNe14fGCKIgF4eAiEA7FmENh%2FxVz54EiwUnDwdsikNnu2lruG0lylP4fDcSNwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLLrjLK2Qgy2IcVooircAyM3wUL883LDLE4pyrkoLea24JsdCtk9gp1wQfIYgQYFfHB690z5qkE3IQvgHIf9l74B8tMSSHWZFj1XBJhsSCb9HnCG%2BVwZT%2B4IcqheOxU9ZvUiDNPVXZ8c9aGVK7R1eGQXURmQy7RzxtO36YfmmsCM3TzLa6feCn2PjILHm1C5LpfVFtGUp018lyAdAWeeSawcOEQaUMhII%2B0aIwEKTBJQx3H2JOE3%2FWZJX%2BR7pfOadGjyKGeURNY%2FxV4UYgmQf6JymLLe7TViGDuaGmfQCYklP84iwJm9e1q6lxcV%2FarzZXPeJfvNy73m8pf4KYPc5Ybk5DRJsm3LrIBNN5o8Jgxs4RdXVn9Ji0DOzZ0DBw7ENwBGSx4Qudbr9sVJPd8WJaUhBTr5sDIlt4yBCQHflIDwiA8gHhECIDoeWGg87aafrb%2BkW79I%2BNObOZTfUGgppoBTstFS0d7hd3PBwCgy8HNKLi16DAdeptc4uJwAmKeAXJG6lU6YpY9zp%2B5%2FUKXV5Ho8pEfOeOQq0WAa%2Bd%2F0eC7SRgtFS7p7ylJYTyZiMMvnVonvU%2Fb8Ud8l%2BHCgMEVwiDJYlgxUE2otXu1%2Bk2ETrqbYY1SHVbBkiWasXd0gkVRVhUDF6X1nNso%2Fw5MbMLOHwckGOqUB4t58FjGuFaTDH6%2BZ6loPPCXjyOnR8C9inhoZrsrABW3rjmypdzX5B0sn38qwvoempaUksatzdNp3lY5EyxYGoN%2BkHvx5Rs1cpapGsLWNHV8VU%2BjPIOXFIlNuNgYZxzJwjr1eioDwAR8A4L8%2Fx0dhXsIsvaQh0deRFcAhSgS%2B7J%2FQgd4zYgejjl2u4bwPsLn9KMNLiB3fVRsuQCWawbWBTpKWZmWN&X-Amz-Signature=7df460cf717105490968962a50e355d96c76c2517a25e348b0ff5f7a46bf2e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

