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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3T3EADG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmj%2FjPX8Y5bit6VmKo13m9jezRhXIA5RrY2tHkin6%2BsgIhAI%2BZb8cWikYc8bpYtWWGwxfA2wVKJUwYcSxUymZXJ1j2KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrkpE9i1bV4EDiU0cq3ANsD9KEC4bFDA61tnWLQLADRi0JTesv61H8Tfkri8kY%2FQu2ELjHBjuvJ5usc5FC6teKHbCgjKUoBWpT8fODAQ0U%2BLlVwojzqb47ReEXKceEwDvsO%2FBrW5%2FuJ4%2BKVNmT2DNhYPVL07pXZIC7MoJzHy8X6TfczrPfMhfSeCV3otG%2Fxc6wDzz9yBGAjT8Lm4gRberHQc9NOmQknJJ1ua7bUHLRtrBbvl1e4tsKihE%2B1qRmHIe%2FdY1WO9hI7Ap3AAz4Zujbh5jdO6GSqRMJ4caCSFu24iJK%2BiKBZA%2B3OiFypfSuSRV0cIpnMCRABoNJjjYwgzXFuArYYa0Duk8i7QJM6YkuS34SbnDzKPaZTNYqp0rTObyho9pc9Q7kIMaNI03v%2BEhqvmlnme3ymvUfaaanskizVRzFewHL7HtSDEjZavuai8tiyMKO9wS8rQQXkyfxen0Xe6aXIjibStg9otDGlWxCBMHZtyNOdyQiJWiVlr3rz5lW%2Be6cGEeXXWESMnhHMlRz%2BfVp8PcmfYUDBsi1bA6OXe%2FUBzcE0nvVX3WkyzdvYJQr3nMHutmcCM3i0ug1ccx0IiuZnpejB1RgzpwakLVh6jrWPQR8u7%2FBND13ttRttQcL1f2X2oJcZ9B0gzD1o9TJBjqkAY5JCAu0G1myo0Nl7R19LVSXaYsY7Fq4FrEUMj2gvQc9ZJJuXt0yQ9PtOHOIZWlUJE07usT4yjmIr2A9AFRLWT8kYusiC3Q27vtUnP4pfz9ey01Azcy%2FWBOnGeOPt9Qs5Sj0owktBVtbdXMXZowHUP%2B9Tk93XXz9DEStKAWcovh4bIckUh5K78MVyW3u7%2BbOiwYOGLNdExVV5sX87WFAMsbRsZfC&X-Amz-Signature=6e0da44a8b85b33ceb9592b7604ae53584501a9596bb4b8a38cfe274d85a1160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77KA3BU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCceEumGsdAag82ljAkfHZnIkSUeAME30k1SjkvEjMhIQIgffHqcKfLaONbgjL87BxT6MA7gWo7kkdy95Q34rNy6bkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjUpQu%2FxygqXEWjfCrcAxIQsPL9qbsBk9JdxtFljTO7ULXwSLmPjlhXsnsPqjXcgf0dnKl7mFUItjHXnrvuESzEb07gre4%2FiHxnqVMdyl0e8LmynVFQqDvcx342bVLDxKS%2BBrYrjnrCRo8ZtdD6yX%2FV%2BsBUsxud4S4val8VEfiDJHUWqA1RuM06KDguS6Z2Dj%2FJT2BOz2XEaS8Y%2FazjbDyj%2BoXnQFjVCdNThYxFvIs04D9%2FbZNCh2jQSsGoedW1dkzn0B2MW8LIe6seb7QT%2B%2FelnUJyoJ80UqsP23utFREYhl72YKDdDYTyrjzX2EYKsOgFUvJO8148E62%2Bm5TZqbsO8tLzQH7xdAkum6V%2F1BcNe5ZIPvQtPrNr6gj07pyATZzfeBI9o%2FCPcbV7UBXqc6%2FAT2iFKL33GSPCJVYFOM924Fv4YSA%2FhhxMBaztyJlPme2lDp73YMMJHtOc1Rb7rkjTWLPnGfmCI4WkcMSW0muv6y6cvthYppCK8CjhahN1Wfr2CAcVCkFSqA6eno%2B2x5TJ08EhFbfYIFGvYHR5LZRCrbYITgDLTo%2BHk%2Fc4pQFonFcHUfjlh48DtClhOmAmDeMp1ykf32U9J%2BoTye9RxZjYt2VMLLKkOpL3e%2BDkm%2FWmq93OBAIi9EBPj3UXMMeh1MkGOqUB%2FQE6doM9SvYytI8XFfR57NHU4YBCzFiNEinBHgTqhup%2BmFRFrkDDbVqU6jZH3m27kkBP0vbY2faj%2B%2BoBti6goBGdjOsVyYMV6Vra5EBScrJbKwC2C3CZUPEcACvvLFMOkmze1p2Sww9e8hY9OPATZgZNu2LSVxQu309NEOSyhtDbwOpS22xuBEZE9%2B2RPRq5qB1EOEnO2c%2FAaukcPgszVnc4Jj2H&X-Amz-Signature=293b280a35841cf1381f17cea8cdfc9f0b8d653817cfa75ba352ef268be779df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

