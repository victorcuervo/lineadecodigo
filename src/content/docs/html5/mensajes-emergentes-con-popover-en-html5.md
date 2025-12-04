---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z44V3GQN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDldFhW3WBL8oBQBQj8aZHShhrcAVOWxlHI3vr8NmJ8JAiAQ6Ah2SP8Bom14PSzvdSyVbL3QJgyi0pFBnVAxG%2BWIYSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMbg%2F%2F%2BnjihfADN5aCKtwD8LO9gJ6YIXHw3FMLlotaK%2FhhkK4ancRPeq5KvAOkFd%2B3wBF20cAO1saLVRUCHLYlhhvxzNv3W6A%2BCAHSYfdZY1AcdXw19TaJ8biOfux4aB5KqAQyiR9A9YNXQ4ofUFIZkkduX0w0n9VdPfRHsmcVjaz9aPGhptXcjzaA75lfC7YDNvW8K01z80lL6WIfq8DvA2dHQmdfWpMZ0q%2BsBMRraV5Qu3V0qP1mLECKDqK8oxHYdrmDk5P1sen4g6tP4oatTDhnScyF6WBSL53Ag9qetk6hni%2F2%2BNFlXqYsTi19w6ciP7MwGSTz1YnbMfa1uNPhOklqD5PQzzMsSp63MbJFwdC42%2FKgZLhCrUMlOyIZANNaaPBXzJplO73mXVaKqFGxjatVR9EDV2v0gb%2BytlIMxcuJSPN961ybfbFUrBOhlf9hoRVW9O8cjIhVxRoClNi3Y5PcGYosqML9wCf5fX4VLffhS2jT8C4XuajSuahrO97%2BAYJUNEm2Hom6oD77THQ9aTCG0aA03SWBnxa8VnT%2FMNB9McH7QMKx9eBoM2BXDbthbLAFETndvpqoyv3VMqosuZQIe7IFHs6Z0WZiM%2Bg1Insw155aFh%2Bu7VOce9zkyygrIOPR3ZUpsp6%2BFngw1%2BbFyQY6pgG6Z%2BicbGRY7O15v5pM92ZOjOaeolBdUl1lWELBRBX9aXnnThZ76r0Si0r8TMOuPZICJ7Y1kMyTXBIeVgnmkdj9vhhUUTWTqamT2iAWL6oZ7T02g1MutK7RrMCo7ApWi%2FSJNQhDqBvd1PNYLG4GW8JABfjFPvgr8LwyTUSOpb8aCuWEDnMpZ3%2B26rB5A0z%2BlJjaFserZnFtk1vKVRAnlfKLN223hPzx&X-Amz-Signature=97a5dc3045a5ac1c5f712865d28a9d6e65da75757a616bc6398f901792f231ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXFW5NM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD1BVk88Ugi5bZOPqErsV2ILgH2mCeTarWXJUHocX0fGgIhAIVbdJ4AP5%2BmkaymfUfBhrNeMSgwBbe7lwGyCQAFyXe7Kv8DCEUQABoMNjM3NDIzMTgzODA1Igyn%2FbpA042dNQth8C4q3ANSqLO9lKWoJQ%2B2SlYry8cYRLaaAnUqq5%2B0y6YPgXKS%2B8EIuhZ3Vm%2Bb7g2%2FDYbbvWN%2FXClVx%2BjZUrGiL2boVnIdPH1MZYmoKKA7tSW9Adw14lNVIScVbkbh82CF%2Bhid8UwNP4seawodEBnc6PGJhohTEwEjOPsntMPoC7Gzvg9S7zTU0mJGiM%2BgPrhA9N8HRQsC6fKjUDH8XS1ztWOpnLGSpoJX0t7sYthRxF%2BNDA%2FpNwVsW2sid6yAGm%2FhJKe0bm85JDR6v5OV%2FC31Re7MGLjithdGbj5CaV6oaZMFsSgzyJo1SUe0mg6BWkAYuxE1DQxZpCCylkf12M9Iw%2F3PmuzmIS7%2FAiK7S3H3fxhUktPCaHJERr9lCr9WeUdRDLB9%2BKEYrlwJ%2FSN%2BFZENWuqCVvKIotHR0l1GupXU4mZiBJXg%2BOet9U3Lbwj3zTib7ugjosHA5Tsd5omTIq%2Bhb%2BmSdDAQukqzw6YBGPGEzYdujil4rEitR7aV2SW8ob%2B%2BhfmYoejsJMUlNwmGsoeMUZEozXlK8wCdZj5KjoGT2EHzKgF5J%2BFdHZ58W5lMmUoxuUuhC4P5Kkv4vSgnAZyfIlatiB5nBUdwF0WqQ%2BqaUGsmg272HOM7fyk93kvGPXgh3jDU58XJBjqkAYCkEoxf03HggqMHjM0QGhD9g7f0BzvwKlKAfvArXt%2BAeF9VLDXEIqeMeuPN3zKZg3Pv8D1xnqaGXjzxCLX%2BbGXlMhr4G0W3OFSpIToQCRJuKXCGjmIyc8d3nmkfVvTqIqk3iLIpHVcTM%2BY%2BZldZOTknz2UGYi1S1kyxsVh4adezkMY%2BiDYq3zn5sIxIMoJSXErzce%2FYlrhrWeflLjbrr3XraLnY&X-Amz-Signature=09104e2c8bc7ce5253295fa8c1b10fdf5fbffe6ff3f131a4187d431287ff484b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

