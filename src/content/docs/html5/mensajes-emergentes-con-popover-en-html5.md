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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQXRTHK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDqvipnYWm22Kk%2BeRHkF8bXibxsbbp%2B9BESDi9KdUwxywIhAMbfLlHUpHtq6EjPeJHWqvGKn6VQm09qKC%2FfQCgjVWKKKv8DCD4QABoMNjM3NDIzMTgzODA1IgwBmbG4SKYafySRq6Mq3ANSadDA0ZG1VLJA0BuaW6Ygh%2BeDLZOhnQWxmuC8kP8nXPrGkqTJt5RGAc%2BDmbT7WKVRQ5HpAvRLUOScp5RuIa4zPRvA%2BEmT6QCOL404JtewxPDEcjIL9aa6h%2Fiwg%2BQgTzJBMGS4vSmaPfUTNkutadv1fkBhVVTgn7xYcMtI%2BSGbcPdNj8vEK248iPDo6xBHF%2FnyM6gqCJRpv4VEY6fonuXJQ6zkOVipsYHDHP6uAjYgetAb7LPvhi%2B3QW%2FRx4bvESJwvXwxjp7rDMLIT0pr%2F7UORzWeIxBlWKD5BraG3LnQ7vDXWBcHubSGzgG5lYFQPiMlf9WZ73R0Nv06hVzIbk7Wl5k4UC03eCE08IX86Km%2F0Vg2uRclViD0iK403CovBaeoAQHLIZB%2Bmnu5hoESHMaBd7VvoJbdKvXId1E4ui5wKYRcKZVhTJ5zH0wu7r7sFdvCH%2Ffpr2k6l%2B8zdhCc8S%2BLHlAXKvCXqed5AbDqAO2KSG2coyKSTPBMyK020iBrngb2ihiSM5k8NRnAtRnk9zFfON7HRmWefaU2HRwXfQHc5luPtR0B2g0j5hwyDslej34IRjy%2FMsEHJl2ZA3l35DSSrRvk8fpDa1XPBvJmt5gBdDV1xUd7cPcBN6%2FKKjDgrcTJBjqkAdcP4sEBT3c%2BgjPReM4ErUjPG6o1LHYbA8wO1nlJTR74Wx9Yv%2B0VOzCu6rM2Sw25d5hydqdZM7qhw9A9tTnUcFCkwzwBAiHP1YRg%2FJxOUoR9Ui5%2BNflWtrsLZ7VZ2d6aIywaMHywRBlyJjxitJ8w5c1%2F0VQBkodK1yaGQd9QBaDOGu31y8faG6eF%2BmDDMivmtyUfWCb9nvsYiAGRhISUhKjbvfN2&X-Amz-Signature=50dbec5613fedd109fdeceafb72541b77099ce6eb60d4b72666b781aa0bf4157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647RGTP2M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCsW8Mj5ZdPARuynjMnJNhCbUaBSdXRY5Zzxyqxz9YN%2BwIhAJU%2BWySQ%2BI7qw%2F%2FoGbx%2BaIBems9ul8MAmc1jdg%2BGmBHdKv8DCD4QABoMNjM3NDIzMTgzODA1IgzYXrGK7EYbaQshXbYq3AMGYXXzthr54mXAkUvdIqS9s5tpaYv2U264sB%2FIKiWt8eHWZ9Az74N8Opa6law%2B26305Ihw1jwXYeuwnyKFgV%2BHle7l7C42Z6YL4%2F4TNpKkxs5KxMdk33ICH6Pc0TTV7NZFFe7CNuHme%2B0iiy2dIAEvICwrzDV6Vrp0vy%2BZEmNGpWP9xb6NHY%2FCUn1SI72%2FFyYpIEZXEfW9HgHjxyMlTst3eojcwv5e%2Fl676oBtu6R1TwC39S5ib8IUdZlobdy8rTs0PloDUZzfaRe6Un4TS5NoMtzFr8V7Ie%2Bzdcr23vsRPO0p%2Fper4xRpVVJqOi%2B2OVPaX%2BzasavTuR5pCXwT8MedzHC6lTK60iiK1lriePLkzx%2FJG%2BKCKiTJg5R93FDUdk7DsIL21xV%2BpJTNdWo65cigtLP2zLDbtQVKRo%2B0EFv4FthkAjj4bHH0YvGuNye%2BCXtMzuuyiB9MHqpX8SQF%2FzwssH0D8VLVJVNBGw%2FWHCP8yRQ%2FlRhGW9J77%2FcoxNcBssXWEMigA8yNZ6ghfl4phReYI%2BTIwSmZSswEF%2F9RHA5tEaoTZv7L482VHNaKNbMVr0qvBVKNiiDpi%2BSh4Yx6beZraz3k3Pj%2FteAFG7Ij9wzYEJYISXvkNH5UmA6S1TC8rcTJBjqkAfZ5qzyAKGwSgXSyYGXW4Etqz23gvY11pP0LGPRZLKVpeCdrnN9PDRIGl120vRiUkP3JqcypY4qzq%2BlfmASg%2B%2FW1i7m017u85wc2%2BnOmH2fiwTRmJ%2B4Wc32yQLvywPL4GhCGgvhtJL%2FLL8McgZWhV%2FzK5Iq%2BY04%2FaAl7eVGhOxTXUyt0ExPj1IpC6pgTKBiVefTw7XlV6j1LRw7BXyvipnzd8VSh&X-Amz-Signature=45af1ebb31f0587f905a3f9908b6b3376901946864b1a121624e73d028fde219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

