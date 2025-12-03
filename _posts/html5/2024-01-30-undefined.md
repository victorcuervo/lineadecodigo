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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSAOR6VO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T053349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCvpfMreNw%2F%2B30UZFqbwam%2FtKmaN1H1R8u%2FrCao%2FTzyAQIgaCvwD%2Bp94WiqnsTMXluYgCFrnDhr%2FfXOPM8Ua3TPf0Yq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDEL6XndgMKI6ZBjfyrcA0r6KtVkNb6jDMsXk%2BlP8TmuoAxdABpuqD%2B3hp6iR1vDvzBEpcAwHw%2BKlG2KZu8QXPDtPP3tGO%2FYbDtpZc%2FdRtzIbxgT2he6qsN57SHqCKkGYIQQYqzohuC7SjGdBhRZHmraHBt9u5haOni0uSWYVHc1GrMQIwqjPgkKJp2DZyMuQfF6YjnrHY2e19ao18RYA5mQZC5e%2FwDWXDJTjOTIuPMKnlFwpbN3Hi5sNvQc1Cz3GTn2%2BQba5Oikl4YPheNH6883IJEQ%2FDhevaAN6samGhGbCvsnDIP21izhknm8eN%2F5eyyt75wIxy1mY9vUKOnWjYPkxWADhfRVIjfG6rhv8jcNUljl50SQL89RyoRUqPCE5wxQ8aj2TDfElavG5LcWHBEG0XLCJiwEFbz6CFE8qKq1gtzDCLYRnPVcM76WTB8RrG54Jbw2L%2FcDiZdPQPPIMGxjRg1%2BN%2BKtMnyHv1t1qcItgxA9%2BrPObesP%2FuITkq3Hipqpd%2Fng3dvSOejAeICK%2BQ%2BT80QgI9iQ%2FB1kVXMZ8wB%2FuBvZ8E4eFUdmWf4WGjMkghs7w6EESvLuNsz7V%2Fjx1xlQh6ZP4HUNwnNqSJ7std6PI6dt9bGid%2FQMUNhspmjrQjCf5Kp%2BBKNFrb4CMKahvskGOqUBL0xojx6BSBbEw0w5q2GXOO%2FjSY9OUFbCorFtnRV52hwruoD7PjCE6yxbgi487g%2Fxr5ondQ5NSKqEVeso1Qbh6IZ9%2BBukIOeuy6UBnirwsoSJ99Iwv5P9nfx5GzcD5BZpoElr1%2BVgyUPq%2FTvlyTLJL42o5PkC3Bx7h7Dy38vAHxm9Lg30FFeZKaAMerRzccYzb8tNoUgpDge9LLBZ0Nrx3Q9PJ3Hj&X-Amz-Signature=b523d69384cfeb4996a43792342d635d38c0460053baf30ab3f6fb2f0a07f9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNGJU5L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T053349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDdMAnTQdLJUclDxBnQjmpM4a6zhtjDjNzHYT2NonGRSgIgMvG2M8LR037uOqoJS4uyr9OmMqoqcmdsk%2BR85nN47P4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHu%2B%2BCS8Ik%2BBzJlPiCrcA17eWMP%2B7gyMzRCtiRFxJuQDXyGSHCv7%2BOrZCLNadl3RX1F%2BHVcIjMKGMC80TGXW%2Buj%2FNsdxZeQlxYsU4NQw04BZwMuTReNGYKA9rQ0vn9C8JxaruKN0cp2jNlkjZiY39o8z8FvA7n89EvLq8Q4gp9YF6Wi51IBJ3%2BjBme1wy2aekMOklGaSK89HOod%2FB0kaSfVsw4fsTJfKbQiGLsj3rSmx3OzDcjsxOpMRHnsaI47xHGIgk199tZ86%2BORIJ4pu2WdKd89SBWu3M4Z%2FoNFiHl%2FizuFLf4147sCREHI%2BrIVpm76V4t3rMoIpl0YG3oi07gp%2Bkyo60dwYBgq1Xpb%2F9gOen06NuG1xf2tHre%2B%2Bn3LQOoA2wmHLtJD6jaf81NXRzo2WGMIxG6xzYuk3FbCQo6A%2FdSIKnDMAOITdSOhQnANkid37OH%2FXIYS5YC2gdUtt3ZGI1%2BHsw6u6v9CcutyZucCJzGSdMy2bHe6g1RxYYMhG6tldTXcPbo5YZ%2FiHidmWOKQMsL2InKBkB0ty8W0xVNISmlDBi0eVR6C55j4ZIat1NsnTyzVmgfMhTqVnJdaoPZhUBMlDp36w56KTSVKB1WnbRZa98pb%2F7rf%2FikH1PuQ0r1muGvrVidg9oEjLMMaWvskGOqUBI9%2BVZET9ILQ64j5lt5Cb1%2BwCaiQtHmjZvNoJkSJ7rhBAf9%2Fw%2Bm0bzoz%2FWdgmr7IwgO4d%2FrGMKZ10pK9wvq2n%2BuaJYu1WJ2rqG%2FPuU%2BihkZkfPypjzDg1eTsUPjIGpCQNcfrVqIkjP%2FfpvooFLe7QVY6e%2FjtXrRNCyR5ygLBGH0hyiFx56Uyw3Dh3nyX1JXy6rJTTNvk8n7ls2vmRsmhypBGUVrhO&X-Amz-Signature=4808029bbb13a2fdceef17bd26f6f01ddee52ad85aba7acb79b9c96163d9a286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

