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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPMXZYE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf51CpngCya2Po68W1hFUhRN0L3H1i73sG1rlPT1%2B6RQIhAL6y3t4e%2Bj2ItveaDLShkaL16cJGkaErAxnzX8yejtsYKv8DCHoQABoMNjM3NDIzMTgzODA1IgymtNwFHcVMB0x1bh4q3AM9c4IrB5weDSKyJHR%2BFlRv3gtVfqjI3%2BReTN9z75q1c8T8Lx%2FMeoLS3n1jZYkdo6EcbVgf%2FMMQ66GBHUsRqBGxiEnRQODh0ZfPSH6E3TKjOIL7sHQDy4VI6aPoI219c1LLj%2BdbQUY3QT1tCB41BsjSyxyDNs8jCX3HNM4gk2CYbG0LBxZkvf0Y0ULfVwv4OYu%2FrWm34TkyusVimWAQvGziBrpLFnoPDeowpCL1OTAOEcIlIq8ge334CDIv%2BFCcEXhCRY25VG9HTQuKIaE0PampQXwhmcH7xQ40aVYUuHmkF2mGlLXZwY75zkriUUKRr5auRztrxTtT6%2BJ%2Fn9Kwiz0s4ISpHYNp4x3xrD5kmguKuIdGq%2FVl0kFVMmFEhve%2BfvUjNTQ4YwuS1v%2BhxAKiUw15vLdNBMcI7bpuUUDWLLGTnqjR1zK1HIRq3Upbm%2BFz81WA%2F9elqce7We9Ry5zY4asMm4%2BcU%2FAqBT%2FQuLEb2qLhV95K0Dvu9VaWd6jnP6%2BpTyFB2TMVogN%2BZ3vV%2F3l0fnUF%2BlDo%2F%2FZlMB2yTh5Th7l0K3Q9UM4%2BoSvYLPUhLN8pLERy6la6dE5Y%2F1LFHcRgU38uc%2FhoplK1I%2F7zdlETFy%2F7nLgCBll%2Btrfl9KSHIjCOxtHJBjqkAcKeJFqskX90CMQ7q0L5Bt7bJw%2F4b2fGLFzUOPerf3Kjh9xRVmM6uEVM3ktHw9ggpt%2FoYo3zroOLT%2Bkbspmzy2du5WRtLxaEdQED2MkxuuPKoSXEXiWcc%2BYF%2BD00Pc012xeDyY6wFSDpRymuY0IdJ1sK8kYWg0TJs3JGVJwjIlpASGaEvY0mVRBPxnG9iWr1iMBsonmCuD53E54US4a2ug0nKRCy&X-Amz-Signature=84327a66604052eb64886e36d62250a9f02951f5d7362bbfd7289d104468b160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMRUBYUE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaHwgq2cvKHvbZYVq74EaVO%2B5FfnpbAfKcj50ApaEQJAiAWC5tHEtEXyDA%2Bi%2F5RUMEeUMJUvx06YAqkJ452G7vzECr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMCMg8Nex%2Bb%2BSBRKbYKtwDBbUPTXEH3BNAVsc%2Br%2F8Lbda0vI85elZc3i8bk%2BoapB16YCJ%2Fdx4%2F9HHVKYJd1tHfsihI%2BXdqruDy4R1AEfnkiaHmnPQINftMRwcbaeOE3XkllzREH7GSDr6J5Jreqsy3%2FreSBoyDWfo4gDOHX0ain%2B0gZWBRHoBEzVKCRRgmde5kut1lNk1INtaAwcSwZWcpRkkr0rBkHAbiFiRYdKBcQC3mqBWRJMV099aPImw6W%2FKrRIOYNJKiLRr9lhpsoUk0UdczVxJRSAUeotQU22T5tp0Uy04avECD0wuD454Z3ND3qe4Bpk74pAS3NaYLOpjbt%2Fy2N2Fy2HhD3E3PXHloqbNG7Q909MhJDWnPaAJ138CSwD%2B7l4SMirTC3ZL2icm4yM03dY%2B%2BP9tMZwdxU95nA2O5R2%2FIc8VH7x988P0s3cXj%2FvDMXynHBsULKoA2wcI9GOY%2Ftq6LXfLNnEpZIcovDIxvwkfv9m7X3SD3JqkjxJKXDzBNwBSRvenVcSnwicdJwjpifGT0If5CMetbpLDTK9e%2FcPJelYTwWN5MvGGYZmFGQG%2BYvzS1CoFIf9sds02JBHGvm8MZ8wPs0v1fdBdJy99ka7sUEAeM4EBYwSMx0KtIaPaTULYyx7ekAz0wo8XRyQY6pgFZ6XSZ72E8XZqRly8DJDRR8H3kTENV802KNn7SJDUhSsn27o10pf71hAz4Iaw1QUuG%2BYg3hSEzOw1ZoUbldTBUwKkpBfNxiUubTCFlpDFE2EeiYASPSM%2B6RUTvDswtueZKeCYn7TJL5noBbPkCnVmS%2B9gaLSjgvG4X4aEMNzERqHRehd%2BZFkxP0o5S%2Fkfvey3Cg7Z2mT6UHHJVPC5OCLyFy4Xb0v48&X-Amz-Signature=876ceb5242ebbf06620d8c58c04f8c9c4cf99e2a198d16b976b1b486c192da43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

