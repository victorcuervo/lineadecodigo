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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575DHGR6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnJo5aA8%2FgplxGD3%2Bsy6JPI1xg7vBUlzRZvTf2OJ2oNwIhAOx3dH7fRBEEa1E8uwRKGwlPr4c4EfPIT9WmrTg0uiFtKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRpuYwBqGaCcT00x8q3ANJZXL1hBaCLAYUD3QEDvGaarRLP%2BWvdoZPFbnFozBpWUUt7OCZfh1I5Hoj7g065fk2%2BSSfgy3%2F7ZAPeUxBM%2FXsdKJaKnOdy8mOMjwk%2B1XE1MXLPUMZ72QHGNn63ZZSPP4jztyvQeokh%2FrKBG82awG4I%2FrYnmqwDZTUo9dTK7Awz5KRE3zCvNDKtszUonfeLgTHw8CWayi1KSetDENRvURW4eVyZ3%2FGcY%2F4IioX0c%2B9ZsCzc3ls4h7S6nMM%2F3WL5jVRjhQ1k%2BDFiq2UtnKhFb%2BUZI2Jo0%2FAgaVHpK5LJ6AnOQDexdpCZ6QlVgXkoS3VoQkN%2Fi%2Fz%2FGA6VZQiBeHP3tVQnqvii7a0SOQ5edyDjzrlygdgeNBq55ac4%2FUAbAxCFLw5G0lK6OwmvvPPss6F3BkXqUxrXjhNyHYas6mKG2cZXXGd2%2FfePaiVR5u223Ws93AlI8PNW2OGUPbcSc47h781Hk%2BRN3jI%2BTl1KphAdOK%2FEhDpipz%2Bzit2FhZkM3Isf6IOV4WAIrGoBo5G%2Bv7GPVP5S7%2BcrZA5AzrZlMSj5neF9GlDqJXTtggY1Q%2FyFH54xAq0hhBKZrMLG1P%2FCvg2lMjebDUD%2Bhjv%2BgqfLlWCNlR4BhIlg4yMEsUSE7GUKjCu7dnJBjqkAXwCZA1%2B5AqraSWXy16gmBJlkLRhn2PJeZdKFqUF68TAUXWtu9tiSsW2AkPpE1FZJwdCQs6wIAkInALtn02WU11lvn8xT1%2F4qWJe57Em1rzHNFW3IViCNytOPjrDkywmlI9z4Py1%2FGCGCvp%2BRmgNLw%2B7TU9m%2FYg8fSym49Pw7i3%2FgovCTVg%2BYIm%2FphkNEMuXvLA7UCLEOnYbVQMmzrG3TEf%2FU6Lu&X-Amz-Signature=e0053c35ddd1a94b85211a7fad36c60e4e4586adc60847bc01ecbbc68324824c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNOIAGS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLbc%2FWA1NlMBg%2FCUC%2Bx9IwaLIXq7hmZdFLKktYX7tiAAiEAv%2F%2B%2FD5QuI4BsIaL8FjEt1nZnPOWne7MyZPT3OrEl3CcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSqRKKTsPwpJAtK2CrcA6EJue%2FxEZX5VfnWcptdeay4%2BSwokacquyjx3qe%2FuliOcpBwMuxKrDw%2B83MALZH0i3OxJ%2BOhZkQ5Q0IhKEkKBEjGIHqxMqmpqcI2%2BQfZ4Xkrr7uqDQ%2Fg77D8qMB1kYCf8%2FHtN94vYykvi70nnmFh5EmcMyYp1z1Ny4EGXaOE6BJmFAuNPpgzTvLKXJgnoppAMKCUK1amK8eOrAU5NDpOQB92RD6Dki5eOkVCoAlQ8%2Fnbtq3xI1f5PCsFc5Fp9Z%2FYtbxUgVWfkk3izF6e25ZDAAfQ%2Fcz0u0kVN6eYQFcbZ6hPGzZU9BjGfGitsmUjbjKWIim4dliPb3fQIvMaJZFqQcmimrvK0ZG9NKR7Gzep%2FSeHZ%2B4jMLJ72t7HS7t79ATsQr9PZbrnQHS8BcFPaXc6tKCnuTUhaLw3HGXIiuDc0dgqmSmtN2O%2FCsyyPDizJwf4Tqxy4%2BwdltBhFMwVfZIlwYZCcJp3rOzX1aDJG%2BTTWMBEogplsp6FM%2FxqdOUuyzXYmyQ4qsYfq6ePO%2Fq0CZAXlnam1PktGnE1HtAPgxHZqMg%2F9g0x5xDhvQoXPfxCZisM9Wp9NjwgqEdszWDuZVYZSeV0KxhtSYOvQWFiDRQmy%2F1XR4r3o7%2FnF8VJPjVWMILu2ckGOqUBZ0J1u86RAkrUN3a1tarwHR263L75wXr6Baq2yWsKp71Vn5sKqXARm2rne3RXTr0iGWGHna9r1FA14UQmBbXhHkrwMRPxtFfRPPIu18zwT79lZnfKnP3RzT22TY9Ic6m7WFLjdUMe1TICMU2aACNj1PYsW6p%2B%2B1AlUq66a%2F1xgx5nGg9TeVjYi8V9YNWSAz0fEI%2FzFFzMod0DZJnvKvnUuhELpQJJ&X-Amz-Signature=0e62591021ca36471a6402d42ae5ab0671d683782f4c391d4366c6e45f76ab55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

