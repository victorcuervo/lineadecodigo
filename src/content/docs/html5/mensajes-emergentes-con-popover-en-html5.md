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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLS4CDX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC0XGtOQqNzv70XFhGqfjdct%2BQsSh6PfLoHV2NGwhBsMQIgfpfBgz45uQB2dUQvJvz3BHceI5cN%2FI4ThOqIv4SfIwMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDPVObidMtVQB7N02fyrcA8QUE%2FCmv6CADzO3I6r3ZQsXhODRFnFG3IF3Py2ZOLXLhuy2sEby4dk504Yg3pM6jxSKNLzfb9Rnrynbalxxwmdt94LxKWWFfSWQplafjHPhcg%2Bfja4UYfgj9mnA%2FEGQ1x4q42WXS2XeBeZbUP4d7zfvVnvrs%2BUaR1J%2FH5YOVlZ3KOIQl9%2Fjj90Tlqna61IevwYGpQpQrxGGheAJvxROCQVWAT6%2Fx6dQmlnlavq5pr%2BFXHkWu%2FWsBtJiQM9MmwTHdj505wA34ZZx%2BwmwA0mYDZyYqBIVJaiGErQX9vf05WDKD9rj4rnjM9ia7WlQPzsDcosT636DWpXMU%2BIMJ8ELb66jq%2FaIA6KYf0JypkMkli0KS9h9SjFkHZQZVcrYlOIC9obBG%2FOPiSoQBAaflnWq0g8vMlEcaDy%2Fart5ZFDdvhinGePfPEdFKe3E7iI6%2B73BXYrw5nNUMG3fZtcOXUSAG0TTNLdaLDm7ACj9DeMLosXW2ybBcQlBmN7TFkki2uamynGGd%2BL3ttuTJVYLdk7KZqzX9PqRNIBugNMZgedZABLoe9%2Bzg2OOTpbFheeMV%2BFwSsgSgnAl0I4cC6Duobu%2BGNssZ%2F7bUSk%2FwiT7RT%2F3GIVlSsNc70UeuM4qBjZOMMDnxMkGOqUBy0OJhpmI9YmdhvtbiWhSYw9jjjvXYpB0Wl6ttAUnslA5Wmb6Bh4HjlHjbYFHvsadrabNlwDFyPGBRLZs4Gsp6beB0NsTADsfQk%2FmPvtTmO9VktPNEhnz7AFU2idl3S%2BcOdE%2BZPxloaLK62Tqzf7G7fcT0%2BkAqufu0uC%2FjqOfYukk4CmNhEmJu7Eo4ruXo7o2wYnhwroyQhYalbbNT9qEsaK3KN8w&X-Amz-Signature=51d8db551f64d657d4c5dc8ae133a998b667750e1c959cd4e6abfab203d98d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHVSU7FB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC1nmBbEZKfxJNigk2kZMe%2Bdmm%2FDUiuuRe3%2FhjFKbD3vQIhAPl%2BWExrluK2zokLs8LlkxCf6Ej5RK%2FmuGOi28dm6RxjKv8DCEAQABoMNjM3NDIzMTgzODA1IgyN%2BEITexQb9Vj288Qq3APlcvU%2BKZqk5DFJtfaRsLb8otVQxqlku0P7UWVc1EomEMFIYFOmG3OpfsX9hEbInEDMWUo%2B9veZHgUX8AX9veQ3WQ9x4dfPJytwm%2FE8aXwiSkcqbcozom6GT7BWLFbu2Whv5X6zF2ZEenmKGbbuEnEh3tdLsSB8yaRzSypj9Dna4ONqgZ34%2Fmk%2FzRKQbD70oCSb6IHAM%2BDetqWNoMmHmyb48dwcvUsRlHbbsCW00oWWZgXq0DJFlin%2BKIwImoZKbCMXg68wNgIRMsou%2Bc2tPRbb25i8uMRXF2cJJVxa2DsuNQBvmSjfAp5W6BKaLV87FYbPYRFin2WK0wmFHqlcoF7Yyn%2FsrHWQ5p6eI7FP6v1Lk6DeRuwkTdWa0x2oipITQpZYglo4%2BD7vz7h%2FRUkFJJ5YhweSxQn0G5q8nJUyNMi%2Fk21O17y3ItnYeOuGDGxlSk29xBlqeGDdO9YZzA5NtGvEXgHm2mt6Yap2QRmwPhb84yrtIHpdqJqK1T%2Fwx0DvBqTocE8F91hrHqG9gWaTKHtbk0Tly%2BZJ3IqAulGmKckAXhwBDTAevH%2B9QyCTmUu8W9crp8JQAwFWqr3dn1KjvTEAjuIlbiT9ZkNvoqaM2Vk1TYrCr9hDF3FS3KaG%2FTC358TJBjqkAXwxTjW5%2FZ%2FbLMD8ICN6XMEUrimt1FylSsP5OuGAc%2FKB86vX0aI%2B%2FzNsiArHkt8OEOAJeGgGguLAN0Y%2BKfQk8LDrB5MvypetpxOdhq0%2B0bGrC1eX7mDJMaaMpkpIcMAH7Tk1uVS%2FPpjwgXwL4YXk9iXnEHx8Vxlcq2scn3x3JHrxSc0Pb%2BE2YrXbacgtHAKS2T8%2B4fm9mo3rosGqG2XFEM%2FEIAVX&X-Amz-Signature=8ca0155ae60d1cc370a6659fbb7f2049e40b04881e70c3b99e57d7368c916747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

