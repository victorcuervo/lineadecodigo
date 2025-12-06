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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3363G6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDodmvFkX2d%2BdS383eAE2LQwcIdePkappMznNqF1zbFvgIhAMkpxvrIQ9Ar2eLixf6a6c1urvFGPrBCbsFFodgZgN3TKv8DCHUQABoMNjM3NDIzMTgzODA1IgzRDlE5E0P%2BjAVwLFsq3AOcKk4wFPIDg8T65zC9cMGX%2BGEXNMpbihJUVlCrhj3F%2Fv14uEluSB8qEawrFEOww675KuhFIQ5FgHAkH5X0CieQ8N%2Fzq93GCRhTBPPExbYlJWL1ZfsD0NWTUtgPiK0uVsquVizOkwgzsbs12FNj%2FgOxvKO33tS6Pgp5Xoe5N6SDzG3JOPE3329nrorr8UkB530FKj70WMUzdEmh11ocG%2F2OKM8qxn25ts3IqEiSAELdIM8w9ldz7j1I%2FJnqT4RiQ26QJ3Zc2yjcMAwoRl3pPj4q5gjtJK56jaXA6rC1td3oYE1%2F4Nuic%2BFqSt3et%2FccbvsZt9abKmwkiarjLskEPB0H72bTF%2BY5jqxjT2PczNOzN%2FUW2tQP2vdUHNdHDWHQBKv%2BqUvFfzLsM0g0C1EfBPWuDYDfD4gBJ%2B%2BOilvBmYfK2SoK0uxrdlnBxY9%2BM%2F%2FJuToXwQvdZfQiJ7r1hsst6I9YUbLvGiGbRbLzLIwsPmRkFzoINJs%2F%2BiZS7DKrLUsjI4k0z6HXL69P%2FH04w6hAXBOuoMd2rK9v8OtR%2BouZZKGs9qZogMr8jgFY3%2Fl8TqeTvNq2Elxdr4vkn6TxgRlWCMhDBJhWwjlYMQp2xIdbJbXSXFFWEC68Z31iak%2F6dzDvptDJBjqkAb0BvbWqIWMdFc01PcVxEmDsfHm7ljga52IZVb37GduC846qEWbbrEIFldMaB1zp4yGLWhSQwZ507mij9JiVfMcFwGn70%2Bat5D4ifZ2xv8dKiEhjHCARkrsf6X27elQzB7yFlJ9%2BuHixkpgacfxJBJ143ykQ47%2FglnZbryR%2BlA3kNcucnVXVib2satb3QUtw73Y6dz6jffBkUx3eXQsCOltVpeZ2&X-Amz-Signature=59d500e5094d33b4a8c77deb86028763b6c498d7782520e996de06ee03c539cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VBCIONX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGh%2FPxeK%2Bxi2rjWc42Z1rqFEqUWoJecpJWozlbhwN0qJAiEAljxBUupG2z9NCqrmndQowYx4fnGNVrMQDFy%2F6yKDMMsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCwElbQLjFLNOk%2BCwSrcA7HDMLsa0XyzjKgWGqzXg1mSSG8NideBgeO3ZCMM5qZ6qjVx7pAUuiCUNchDmpO9S3%2BrL3fC459N7%2FBnzHbkllrprsV4ZfoxjGc2qQKlEbBkZdkNJDErYJtOf5qr549zuRcj23NHIGUitPmxucK5jJVu6WiwMjPPnIe%2FK%2FAJ0guu1oIaFMrkEc%2Ff%2Fk%2F%2F%2Bjd6E5VVph1AA5uOk7T%2F28KDf3JLm1gLzWqCxe4rTUj%2BNy6takiM3AEoKZJjjX8mQAYXDOYCw5KJcWBRZEEiEqPT%2B6quPdlPitSjCv8KSiZ4qiG7mybg9jSwvoSpejU2w37eVv%2BWp3U%2FmeUQbEq4Y7hWx2rqaG6qq4znflVOTWyI18EkOkYuTP%2BRT%2BSpka5915vdJL8mj0qr85fT28WH0gedqVrnWHbdszFv6reMH1LHvcTkvd3WKynDW0XUbAAG0AZg0Z3MX0ZEV6ZP0F4AHZTaU9Gp%2BAlqKBtQie4KEUDVBUxSLIYLBIywJlrQaRUDg%2Bvnv80aD2wW2mc%2Fuorbct3V5rPCzA%2B6JNBWCKw3i0aZthsPZ%2BMT%2BolNPJE0qE1zwvSohkI9tcJkZMLHphb3H3Xl2GY1MKKrTzLADl5P1Z%2FMzmMWm2O%2B%2FwLeCbxdwZWTMLOm0MkGOqUBFeWrAy%2Bgbux%2F%2BM0vE9%2FWbvSvc8mNxYqn3nez%2FhpYCCQTSzYvhxKI0WyezRA9tAkNd1AtjIqSjhbo3IKdZRFeUfPCTqO4uzoWV03K06D%2BYz5WooZQi3qtBHNRjVPZz%2Fw9d28Hj%2F9gKAsIFpDwA8Cg60vVEzMKqCCOkbXFoU7rGWYRUQ0MhBL6liazoZjlSG6tVqj7VhNcha%2FLZpDwlxDFh2OCD52R&X-Amz-Signature=3c8b4bc349f4cfd52882fd63a5caad52245a11e466136bb756c1e681a34ee599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

