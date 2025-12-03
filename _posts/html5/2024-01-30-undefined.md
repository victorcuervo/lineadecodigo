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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKEYDZRL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQD86WMhiXuwc%2FMjd2z0LT5iN7%2F5NTNquIH9R4NdypI1%2FgIgGyfEKeF7gzjUUyrgfpUlJ57%2FEJyPA7yI4snhkUzr40gq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNQ71P4h2sUwbUjIGSrcAy9ENE%2F3QVfEhbvpTCm9DLHGgQaQyZtu2VNGGVXOATjBe1bKLImIR0bzDIq7amLYJ%2BNi72FlWUXVcwjYo3m1WfiRwwkbo65zr%2FIdQRMHFo84TxWarkM0ycwWkh07G1lZyFJ73jaBzPenM8lvrxh3x5FijPVTjdlo9NxRFAmjPe1061z6hG1CUjx69a%2FM%2BA6wW4K9gHajeC9%2FRQPosqmj6zz0N5lza1qRjwsqz6dAPZbz6rOFSDQyauW1RfruD3doCUZjUt6Tmkz2cDI%2FHyUB135AJzAY1iRyEwROwOyDHoQ7yYiagRAeOmj%2B01a3sSgDkOCZJvfE8fW05BqRei5wMtGsS4KZE9KK3KCk9jpigbp4L7sli3ln9Jo9SkIp5425gj%2Bt763lNKsEo%2FvaqX2TjlxPFCFzrui%2F4k%2Fq7MaIeQB3Uf2c0Gi7HC1aUmTO%2BLLVicYSU400PW17%2F%2BeCURHcnjI3JqXRBfVl8PIm2ywaw5PKPPcD4YiXxvOw0NTIeUos04qudktcYYwza04BE%2B4QddD2psmqyipKTu8zIMHSovssFXIFsk8YGyJF8mjAe1YBI24996PlIkDZI41zo%2BC4Uek%2BRf%2F1u11aB9s6t8YlSx2P2RpiKhwwG%2FsERlV4MOvBwckGOqUBx83rt%2FbvHisFpEN0YyVtVsE5sjH0y4ZFYtb1pigC%2BqL3fZC5iIagsEJ1jiUEVa5tGZ0Z%2FMzVbdkngDPyewc0nra1zZaQXabgyneFCKgI0Fedy87hQ35e1mSFii4I7nGsQiq%2FSJtyKMsPS9Y07Sur%2BoCH%2FtMiXXn%2BwrejJVqSg1IF4PgAIGrZbXoWEpib%2BqShlaM23djcMxbgSKYr0FCPM%2BySwoX%2B&X-Amz-Signature=5ee6f1edceeba6e144afedf1ca96347494469f90099e8614276a524c7a0ac1fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK4XHYJG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIFG9%2FnjmNGI7qZsO3t0Kb%2FKNfrXMRQkPiIgojmSEAWdSAiAWGtHWzR%2F52wqBivfMJQRzzBDPpu31M7Qi9VeFBZ7voCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM8xuAb7HPMGGpIUV7KtwDM%2B3Q12Un6mgUFm3ZSshGfuswx47O7pLoXk0mv%2FRyuKKW91Eh9pl4HlwKOxpiwkyUJxM%2B3kBRpSkGaKK9QvHKgpFeXy8mQOGeQfaobyM7HHBso3mSz1kw9uo2BK1jH9CRQ66kxJF99igIY8wpm5IEKyJNz%2Fg5mAJO%2BSUHQ0HSleSrFlxU7%2F4aYCsJGF5noR89p1oMFivb%2BR4hKYmFezQAjPUh1zk%2FEx26g9oUk70joP%2FVAob5VbYEMxOwuDFNQ3pPiQorKfAuLcCe44AKQicE3JeTka0eiOGe6skdsuRtIA1q89MXmvmvaYh4XsspOyjLG0atuEOvmmhRU2GvXbAHqxd9yKz%2BhJ3A8Pv6MXI1tp4EwOtAp877ppVPI21lZWFhXA%2FQXjtFreSztSZxnWnoQ168LFEju81KKLPS6H82qSuHLd2tAt%2FHh%2Fhv1gNVu3G3cKmlmgGGwF%2FjidIzaZ%2F1YDeOksIrygiChCYUmxG%2FvbV9DKXEuosjWZanGN5yek9ypcmioYAMM%2FA6h5meIq18NV2TIrh%2BJimo9GDAiOzPzbSQtXMcK55DN7LxqXUk8%2BJnFz6LK%2B3N2%2FqfDCLPys5R0EiUhM76ClIVj9AhPbzH2NCbb3w92rhfOtwFF1YwxMHByQY6pgEv1DWR0QBENxdNap%2Fit4r2Y0vIBh840RajIygXXf3onp5yWdbEVFDVuSHOgwD7wMdaFvWnQpJedeYAV33Wrg1n9OvGhLFC%2FDC3TNQLXnn4MKYHgKhYj1%2Bu%2F4fHKgHd9UA2pjEVphf2Bka9N93nKFhhYpoV5cE3lmkrLsbEVQvivv4jxN3U%2FqQdZt5iHQXdCJk8fJ84kXsGmeQDnIn3s3TLAB0s%2Frpk&X-Amz-Signature=e93075a6426ef74ed5ed5e910ab2e8f5e980230ea26f82a9463670cc146cf6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

