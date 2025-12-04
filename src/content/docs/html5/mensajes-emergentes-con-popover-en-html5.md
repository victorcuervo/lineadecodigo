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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSYVC2PY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGl4yNacZpeue6NP7wxgWppqZutY7B0XSd5HSqiBQinFAiBkJbza7TQMd%2Bo%2B9N%2FPFWmfrhXK72vWxbMWf9RJ7Wb%2BySr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMPt6qS0KlBX9VOLi%2BKtwDfiTZb8sm9Qwjp18%2FL9SSUsHkfZJyO8PyXWR9DiYGm1bb3ipTPpf4pyKUOlCPDkXPY65hHpfRYo9MeBjQR%2FR6Qd0aluOVBYzp9pPyuLcB0kxdF2u5OfzhN27%2FFAVHeHiTmx77ilJVrFmVYN7z1vxY%2FsEOQoXnVidNXhJwGx2M%2BNGzZNQLWyk%2BIELEpvg2Mz1gAaOZw975OeKKauQfAjW%2F27Aa0mIDk3KuBRXh2t9nF1HttWVgsIJLkzSYRtFjAWFFbYOUA%2FM3YnS7Fzv2cZn3MidPGOnC%2FvOctW7f6zH0C1gZHCuqVaRtYQ7U6JzLA5MJ4dv5BYWPiuP%2BOotreR4PaUpvDJfnOeaOUlWxP5fzsxtd8YLd1HryiziiAoP0ZapBB9qFVl2pwZOCHYpiyBdFlQAJPhJj3khvI4PW2n2BmDP6k5ucEov0d%2FoUcnT5Nq%2BKfL4P4EUPeYZcm2oCLJaHVzMLhS0H7k34t8c6iomlbwUPLxajGSYEUa7o1POV6jGOYa83QODSU9KI4oFtC3bQ2GRMQy6BdkxIfFfRGWDR%2BMeYCHDlPd5Tv5sOkCywr5PcWFaOiSR2cs2rgoe4II4ewE4otUvVrsOGUHGH3BoyEoeGWSFCeOYMSeOkqlkwjdTDyQY6pgEg9VGcZPKWQT66dR7yY9QV5DiOldwIGZIuD5RrPyYkhGsm5zujddQ%2Bd4rFlc8XYsN3Np1%2FWqHt412tLHMTjJVH686XzGWOVRF%2BVpfQFLWoJQpdNoSqUV4yQvd%2FiUI7Ha4isyGQ9whMQepZyREbL4B7QyOYs2GBPGKX5x%2FZS0s1wew2rhEmjST9yrj0kSsInRVwdv2KQteSxZachg%2Byma8PM8HuPtzX&X-Amz-Signature=bd044df73039be9ff2bb9e5195f2bf2964ceac2616f125cba341187372d25a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NSAEVMK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGKzY6zh2SYpxMaXtrYl%2BbTaszos62t605M0e81%2Fc29XAiA%2FZVYlHXfBYve8%2BQo%2BwvX2cfHBS%2BRwrFygpsUe49jenCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMxWRB4EcvwDuj1gkmKtwD57vGJK1z6zMCsepFxy%2BhdYMAHfQ2CT4gZdb9t5dgOLQNJFvpl%2BOmiRZF9hmgDtLi8qUDWyUflbob8GhVOoTRmHsPEDYfLKSWqpypdWyv%2FeckZZUj69L716xDCD%2FFnxCHZeWLxhmlnjGyZ1gu2lC8TI7k82kQ8R0k%2B%2BIkZKKZkQUKAwcMnTj4SNnjWwC7YO6X8sty7NURMyh9VWNnR30SgY0Ox0R5656K9lO3%2BXJ8h3FXNMu%2BZIUdRtPPvQ6sT6oWfGUw29Y0dXoSnfqvR0p9RKtAejgWjcWpLLGDUo7%2F2OCQMuDZVljKDpO%2BRYAUCsvD5aFHJNTK6TVkHCC6V4HRZGCN10EzAavxOJUCSM1nUAbMTVOveSkhcUaAoJ%2FX2%2F9EqgRM2lTL0tY2EmSTn4V4uAknXZZC6sTTyJw3RZzwokG2aC5zhonxfBP0TlyeKkTr4wH5EvHhcL8%2BczU32a81WzmHh9LScMQUVE76uEmvMwCurrc95exExvD1UcobO5iJA9rZTQ%2FemJYkkrQ9rPUF02w5tKkXkwLkjbpO8hdKPTkrErpTfy1AKy3y8C5RZC5KGmNND6lb1j%2FGc0niyOtq8p%2BeiSsd%2BhoR%2Bk9LWBdNTGi3uFDD8gFvnWE8R8Ewv9TDyQY6pgEanWiuxb5Bg9Kf7xidI6A%2FnErzBjoNXq%2Fp0R8l7DkscX%2BXFiAEv9jKzZ1bBHafYvJle0m6y%2BH4tLv6PO8LOIw30T%2B2e99rMrjqAx0qVDOFCnjTMEaLQdDQ2EIarXbWlvTbWzNBdsP4RChqJL24IxONg9JYa58U%2B4to%2F5XervcyrbBTmeeZ45R%2BVCzRkMs%2FSLK2PXfV8DVTyBS7TUe36i91WY7ym1aI&X-Amz-Signature=9b28f1c516761da5f82125a8217388f802ace9b2c8293c9b86570689041f7f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

