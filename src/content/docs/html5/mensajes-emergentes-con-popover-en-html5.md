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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KLDLKPC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC53Zo%2BtRLueiLqs3tC4rCykYtnYFYR%2BV5D6TEVpYZOagIgAQHJBFpniLPmhV5UkNN1rqb5sPadLNavtLJW3yS16SUq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIrDl08ZXBhBcP8R1SrcAyODI5oBEq%2FWI%2FTusvOpm3N%2F3YpQZ2kV3tEWsiO7oNj7xxPFuomHCxwlcljtkAZtHn6nyI4uL2fkI3aADjgwldur09KTu9U0SfmWZd8YfIt%2BJVvZ7t%2BRPOmN0WmY5zhQMmewdrWtUKBTD3oaTov7rqnx1uqMn06zEzHFTIhiqYHCLNhERfyzvCPFAlW80d7Mj%2BTNhbBCBwdggghOKEH5%2Fey9olYNtCVGsxYYZefOvUmwL6Xnk3eGS2pfN9rAyiEd%2BsApZqqywYA%2Fje3vsl7zpFUnHzakMk10f4qy5294xgU8Ag8w0%2FHfBz7nQhUtoTz018034np8mo2EOqeMIx4zZV8gJUlJVvgopO0tty8v3wSbJ1TDb5JH5MzJ%2FzWvCXVwijiHsFjOhOfJsMAf%2Fd1F3jpkwf4IHx%2BNHV5nOze%2F1C1uoWpzZOIBrfB0btLfV6eUoSIVkJd7ld1N8v%2B%2B0NcP5%2BpiRIsIFXqJcPsXjJcizhiSzqDM6%2FU4S%2BudjbdFNkR4kWxLrmz9EyerW0tw2HCmCK03o%2B8MEG9OVVb0Pys%2F9mm23DZNY%2FcASG5Nz0PNyoIIEnA35TyqfcGOoKzSTTFKTRbd6KmRxWnGIAkOJfq3xcaJ%2BjYCoV5pm6XbvQxIMIPT0skGOqUB33DyzrQHGLGKEomk1jXoBOJnahnYecGAv1eSQNq7k10Sz1kV5I%2Fz%2BqI2kgpJwj0E%2FWCRhDfhfNEGCU9lRcga3QqYjjbnGV4aJIpZHufUopqdnN69%2BCYaqkg7Q0LrBWOxgUlBQoYWm1u0S4qeChyExTTdN9owwHSm0xr5YodLFQq1zIpNNQrqqgsErM360zDOvRQ4CUEqFGfQ1LtGzS8rfImSXq4h&X-Amz-Signature=4456874750f5f722698d7a34dfee156165e8b6dde3cc09a1f81203276fd2daa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMKB7KE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnQglYu3FHe9PeXZMuZXiJNpmJILusnMy7b74Km47qBAIgIMpeL%2B0%2BelaSEqQvbwG3mGp%2F%2Bc9xte1W5Uqw9P4PtPIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHTcrfo6ABS%2FQK30YSrcAwAJvYXALGf5cg1Bks%2BsnWpWIzPnPy8duQu%2BT4T%2FIddDk6ceMsB2wqy%2B%2FANlzbK8P%2Fb6KkiwYM7s%2Bbv26Rj%2FKW8L%2BcL76hqiDAYYaMMTTit%2FwGLG7rNwGK92I9JFZtQHDi5CbNL%2BFqPhds393PZSDWXJ39ckJnPUaqZHh9wupOWRrS1vd2nZ33iYB5Bvp8fsGJFtEyB6ahOIIplVNK8KtnGxBlyl87v0QIgnGj958F3E7R5EqMEgVfjvnEU4LtHbk8wLwsgusSKN%2BY%2Fa9JOsiJp2a2RvCPZcXPV3ZdmWrzoo%2BilY3ghjkISe%2FL5YMKEOIwrpDn9%2FhkHsW5mbD7K8KAgS5VV7HG%2FWI6%2BoS5hWl0RFmhwFm0D%2FoRqin7X4WKUhcuBreMW2Vg%2B7oeR1LENKXd%2FQpkbeuf%2Bb%2FN7rG4%2B7hCFRUdLxjla0e1BbWDEcLCtBujn3feLMzqSisHE9T9%2FNhzdKtSBIEJFBbOl5dpyknD0Iu4%2BD9LJJKXdV4bdxsV6XXw7UQERYwA7Z0OW0jReSEasFlagnOIFPwrW3yuIkoiOr8Dms9XeYius51NT8YySqLcxUriR%2BrctDhzFtKMaMNotrVjMlP6ifdhAEuZXt2U%2FD67K1ucL8G5YSxxBmMOzT0skGOqUBKTXBOSauH56ywOuSDdiV%2FXs7%2BCohO3AyagONdZTy%2F5QZ95o7%2BbeWX7C3%2BTtQGRIMucSfb7gusgbWBMposcag%2FjlKgRnfiW2v5TC02SpvnXkQnaF0OljvHYEdGFnY%2FciakoqpHhCddnmkNxTYfnrQfd%2BUG63Uff75svJdr3scFd70B6Oc0KRf00VxizTtx0MbREx9FyrR7GxzX5G452IcOob%2BWgkx&X-Amz-Signature=bbf96b3c28ff003c8ae3e25bfd655bb288f8864270896fbc899b03c8b2c8303c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

