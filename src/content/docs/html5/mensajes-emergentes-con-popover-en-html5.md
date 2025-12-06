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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVLTUIZY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDApRoq94cdBNiAMiZVG%2F60IkxgWt7GlXxVWDcWDC4XNwIgCWKoho3t4rw1w%2FmHslBYgpSVlu2Adk2quCjl5nSSxggq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHd9Hmqsgfv7VQ5EaSrcA4PhulaTP%2BMxY%2B5xzak9AFiE6maClTt0i3rOCVR0KQxRbxbA5Os7ZcnpVTyzl22IwfoSx6NSgG8d9ttXR46ZjT9rQ8%2Bsz8W2suh18VfGJUazsIvKg4f22zJzeQk9XiCw8BhBzZZ2j6IcbQRU8XVEovGM2TV4p4%2FDXbXl1iWSYWQ%2FNqv%2FarAHd0GN4mXGjH2uDlzsWUn5sH8CUn91mLSQOpi3clZMJN9iHyERQnAoSeHQzpMvtMy5rHv58MTSRvYSk%2Fras7%2FWFZnZ6SvmuYHg0Cijx1wrO%2Fri7VwnAT2tquDhbaFTLoUNgx8ajZPyCMQF8AohS8kATdS5x23aIXFNMT4dWggzEcja%2FnZMHMCpzFgnLJ1zjovmHWFKmcYBLV7JyVKltdTX%2B5Fpuw%2Ff6VZLpW%2BN3twPyDGFPDq6so%2FI02iHsfBTqGR51vJpPIMCV1MqTx7%2Bw2eg9Zw0KDMsYQFKSGx%2FztkoFf8SBM77vhjVRJlMW9rvSZElzW%2BtDKnVVvTaLwptoQv1apSrX%2B%2Fq4K7H9DvvpniNBEZHt9zAJY0v9neBwBXyCFO99C5UYWd%2Fd%2F4GJ5DVyiwh9tglb9IUVX8uC%2FusGL3tUu50SwFISvO7mwXJ%2BguDEpZXUZEEl%2FBjMPem0MkGOqUB6ec7NNAAMeYhsw95OMvUFyygCttv%2Bb6liDIxvi5dm3LpdALYBGpdAU92m2LN6r6OT39urNBIeq5vGICLmRMK4rOLxeY81ASUaF7ejgMjjqpuc4uyTUkvhUeeLdMrpNtuEdexdXpVocmp0cPEGNmh%2FGkorU7i2vpRvSm%2FRGk2k29A34KrimdwpcS0AH48LzsYOid7ouRDgwnFgRDBlab62kDGuPzq&X-Amz-Signature=291cb3c6887630c37df568ff3f1e70fd91741a1af08ea512fdddbd9f07e6c518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST6UFKJC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYCajzq1zNYxWbvhqdHflyJYB2L%2Bl3b7tu66DlP0owbAIhAPAnULhcVqj5WtOdB6YpHIGQ7gNZeYFSxj5wFvb1qSBHKv8DCHUQABoMNjM3NDIzMTgzODA1IgwcjYLcZ3lmToJii9gq3AMSRELvWNr7WVeb3CmUD%2BkKcGCNeTEFHhj43nn28wEy7%2FkkP0USSgTrzdHGNZpv%2FcL8HpyTBeN4%2FHOuvTlcjUhKpAHqnDpXhVrLQvCM3xh5Ra8pcjFKl3bDR8F4%2FJuxsWaq1J4feP9N3OiaSL6vH81s4RxAoebQb2sDJpPhg9aQeN68EaRbhB8Ce3JH50bFCk98BX6vM5vCxAxWAvc%2Bp2YhmBkMVrxcW84UwU2w7KznnKfIW%2Fh4HXIAoE7SJpwO4Xob7zTSXzX6AKlzWiNQNtK6nNZSAFG358%2BLh%2BDmhwPk8GIjpd%2B4tgdj3vX9N6UCoiMioV9hleg5QCaseeUOB5bBfcO8k3XarmlX%2BCH5W7nL6R2pseb%2FaPrdwFDlaDwAmGNij68jcyDDPkI9E6JK%2BU7YlenwEfbXOx291DKKCaNDOLsEWHlVbP%2FUZ0RJ6b5Wj6DW9IvKT3bQOqHWEobnNGlum1UdO1BPEV%2F%2BrasULOUpszvmW6ds9wKko6KOrNo3eTqspRA9pnsItmOaHDeJaUGPjQvpq%2FDWDKm0IbZsmd1h%2BWOJ6LMIzbidNFc4WPQN7BDn%2F6d4Jx%2Ft%2Bd%2FlPBRgN2KTkPe73gsCdKYMJviOU8S01OdjFr9a5GLsQOPUhDCDp9DJBjqkAV6kccQn3oTLh2D%2BczWjJG3IOC2hvOAATd1VpxpMpbmcQNPiwVshE8t%2FcsJdOAtrjHn0moYi7o89abDZ%2BQbeuYUL7r7YCS3Rgo7INXnoEQmCRxzJeguDSLF0BCnjxImkE%2Fd0yiu%2Fxa7WtTOThLDje%2F6GQzguVxGimmEYAYxhKwmrStOWlsPFTA7QYh9LvumaiCezQ9MmANumGXSWaNTlJcXfMeVx&X-Amz-Signature=f4147d8bde38a5b960c22c2cdf6df627ca0707e1dcdd72d451f8b1ae260695dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

