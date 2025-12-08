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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664IZ5XYT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHewQmM7vgOZgF9ajeXPa3WfAvcsMNBJguYa0dSEPu6%2FAiEAvlZTs7qErZ4EJxPAlr3XH%2FAo9%2B3tI6MI4lElfWcr8KEqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsbQk5V1zuHcw68mCrcA%2F3ILpOpH1%2BMjG9kFYS0bkeCfwUqDolsH%2BsA3Ljg0RyUTXO8fN44gPqw%2B4%2FKWq8%2BSXesaNdtSSpnYBPK9DfWdcntqwojlEQ0X5QKtOyThOmBiaWlfC55OcAZxEdfTAE8eXKtMtLaGt0ZEdxS2gwPmCcSByH9ytUsMxpBUpmrrzk%2FiqLR5%2B76vg31pwCOSb%2B85pQdnXcGhhUdy6tSAbFOryPbOlbAk2UoJEaiS1iEO0pKrFbqN9j8SVJcoa3PjBvsEYLLvRlANaUW8%2BTlqtylG86mMysfpjTzy37yGeE7ThLHlK%2FlXUvohBvUVmLNAYpg6QlQtSCg3Vsmt3jZndCaqdpM1QONnR%2BX0mjjOZlBDWSMCUW4PeTMD%2FZcVwsSClF9%2FP75X4JXzUOw7SQBnmDYfqCUtSxt293PDVz%2Fbl%2BUD842xJfLqIlUA%2BxGLkI0Ms3VU1B03TypbnwXe2OqYSATCUVE6GXFgFk7zDy3nRd%2BjD8LIAJmNjGbEIofRA%2FYCBmiLGp61dh5TofjZmap9TtNX%2BshNvUOf%2FufdnkM%2BPndAZyGpafDErNrpqK3R5ga5f5C6oy3ZZzFOv%2FsPCttMb2%2Bg47G7qua7vC7HaQLLzE7UYoYmFCUKyCo4AKa30lgMLeh2MkGOqUBL1Y6aKb54nDb3DWnw%2B3tsus17%2BUMcsb7huufIw8kpyl4UWD%2BlgovvMCzLOJZw%2BSLRpGs%2FpdtCVm67sWmXEYHzsGsd0OBzjlXiAilqRJ4oaAbd4WMwkWLJRuC8elj8jHLA1PTVsVytAfH%2F%2BYCHq85HOpeDKZ2d68dTNA3wJOktlSb%2BSr9Rv%2BkNA2scVnQCv2NBCwz%2BsBH81jTxvBWTz6VYXitl%2Fvm&X-Amz-Signature=c7097de3bacdf3f1a8550845520b32fae57a717e730071f053537badb7cdfaa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNETEOTR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHD5b4x7aNXedg6Xf0bxAt62tzeCWjEtkFNYZEEH9x42AiEA8ZHhVVy04fyixyJnUmkZizfcHFhSSk8Yvvu%2BidYdyMMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0IYxV1jNKEd%2BbVDyrcA6yf%2B4Max60dYf2oOi6MBi74g7TXdovNoyp55n8gITuGhCJ%2F5JM7DhQWSHv%2FPP87Uls1siSF5zN9caDnFn%2Fl89%2FmraCWe6%2FlE6A1E%2B1Ua1GzN9%2FuBuc1omNxxSnR8AjtULN5G87vQan%2FMJESDDyd2v%2BKjoR%2B%2FadscTPEvkrhcHCH3zXn%2FD86gJnfQCUESvL9zNUhEicVZnv%2FL%2BRpYqSdjyMap3515NK546JWXwp99o9lQ2pcb5JtgLk39SWhGys2%2BKiZRZ%2Bk6ZUTUe1z8zmj13HkMTgmE9%2Fytqq4SoHM2M1%2BcANl8kgP6zVcov3xzOPYduou7QZhe1SGvoFZTD77i5DWMJH98LBpHS1isBL8dMms82I48FjKzVcJnDfiAF%2FK3Cu%2FqX33Djtljbd9Vnb%2FRbbbCVA%2B4U%2BHNqN3%2FzIWjP%2FpLpNQ2eFOkaMYj0s6bwO47A7Q2FggL1b7UAvoZevawYNkAfIkCurm%2FANDWkWuFcnpezbV4wHTc0hAKLMAvu1i36HGAoIlFkxd8ZYViNdUekcWlaaWcdS5IUvod8p4EEHvDSxX6V7jR4O%2BsISaXiSewX5TfmGGhWhgR%2BbVuQjB3LGXiD7Q05iPBg7X3XjYvqj%2FuQxXiTmYqwYdT25NMJ6h2MkGOqUBHN%2FkB2ETNTXZ%2BtYGYLlDe54AwkWG%2F84wDjhFRWK8Be5JSjeMiSCngeSjcEEWfnbZBIwpGE9bG%2FiDHUNRTnbvos2Y1EyDYf334S1kDBfnT6TsNlBxKsZ46Sj2oQ0I3WnwioFuDkeslmH2Xe0I9zFREeu7vUMBDqmWF7BjUO15yJLq0HTzc0f7FQZOCfbM%2FR7hgab2Jq%2F3gSzbfa1wsEmuvT6zaWXR&X-Amz-Signature=5bd61c43e12de0fc2f0d60611e928550025ca3dae8e1e4223137ee69823c5f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

