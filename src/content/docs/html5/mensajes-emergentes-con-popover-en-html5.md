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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHRJNLXJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBeb730tUhuI8gQUXc2mM%2FvtSc8Tmwhlf6kXXMfOcy1hAiBCO%2FwNUHewWzUjaGpugrxFFuzzBuTq2JNieHWrbbv%2Fjir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM5sWYN0VvWrOr3BhHKtwDyzAaijCgPlrCppDh9NtRlkLMa6nJrsLwvTQfmtq7P1XpaiKWMH4gEKgM6NTwokzrSVphs%2Fq5IdBrwNqtY86KexuIeiWbBRJ1mwn4EFjViGXY1WnC3EML%2Fp4MsXGZce%2Bt3ZkF5Rn03t6aNcCJq%2BNYP%2Frt%2B%2BVG1xFmYm9mpPWebE7m%2F4LgqsDnmDSnjHrunVFDA66%2FLFZbMzi0ilGhD5elniA7NYb0Yfd2NZxGlh%2BS8vPXM6ACefcU8jryt5kn8MlLlo4UxqoFj4%2B%2BX1%2Bf2ZWKnKRhjsopw4rfBr7qnF5eqkysiiQSNdrfiT1dortPUVnERWcGfIePwnMnNycMCxbFAclznOoXcnSOGG50kF%2FDUeFD%2BcSXDW6JdRp%2BMlq%2Frqlw%2BR0kqnWFT4jc7nvqAGMTM76VnEBo96aWAaNPX9ePh%2F8DeyqWnKnsQoOnOXAUtzdEB8ZnA4NGBHDyCEjf4za2oQcOSR62gChUeY5caDsklzmfffSBhBw6JW7t7aF35vGNK9tlza2MfjwXJE7J2%2FCJ77ikOikVvqlreWsITcnCboLRCrQJuc%2F0rOVBDFOz4b1kXCcKi1DLnBmOvvVYjD5h0icSuMldKYmATZybTfS%2Fo0eBS%2Bzf1feebthy13gwmtTDyQY6pgF9WbAQmTEXc7U5dDS8VhLOA84sugWME5COOM%2BRbI2cmd1qiwY7ULda7Rbrg%2FfbxrV%2FWSgKq%2F9WgWFlKM0mSgaNQ9LnFIpNpjryoS0vggP6U%2FbBRsTxweG8D7Syr0Lf2Ju7lqXKvt4Mba9Vd56OsPBgQnsP4jYfGjx6cXCQtcpUJNnaUW6UZ6p2Y372rDqADlGZkvlYwA1O%2FefME%2FGxuqI5tG6jN0tW&X-Amz-Signature=1a304f7b37becba17ccbf77948051db95c3c7d3dff06d17bfd5a31e48cf6e931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRBIKAQ3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFX2qC14hEgHequkMKbYkeb27ja01yJAjXRf2CshAO%2BuAiB9g5qIb1ca8zhWJVG15doTlIjwl1gnI%2FDFNlckQkMPlSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMJtZNQjmtuyq7vS25KtwDbLTMXe%2FFvAzTVq4ZsMMA7UMJgzffnLx%2BVhstO3wsCaVY7W6wmLKKFX73BcO3wiZT6tSMhFLs4HvmjPlIwNn7rXbE85cGjMXpv1dXm84kGN4rTMtFr0Mp51n%2FPQwyYzODvng3%2BshPCbWa6mvN3W29V0H5m4GRIL5aZX%2Fak0ZzolnO5OvMthId67%2FFGiGgkTssZuEWKjGP1Ah5R0hv3XHs9yLwjiX%2B1oMPNGtbfvEre%2BIdz27mzM7ybEIfYD%2Fpk3%2Bm2P5KUsFq6%2B%2FeQ6s3%2FyKJcbas11%2FBICK1d5Wwv2fRcLC5gDyV087XegQRqYuR06pemi6DkwMw%2FaSHc2GeJMpc7IrRqu%2BZIg3slyve%2BYcnIKXWPntcIjYOCNXfeihK2ul7pDDUXCcV1t2UdoIqOyP8b0PIKuYypz2WhqCJYHYgiCgFzdm%2BI%2B9bY2pewokHLmK%2BsR5EArpRMkTcO4qMSXdvx00%2B6RL2q9FO83vo8XF3N8slR5xPCQZD7TFvcxB81dEHS3AlHQWbVZasP1A92n4z3%2FhEaGAQjs98F5Aq%2Bpn0h%2F0trjcoH0pc7k4ZDBLFqqi7ry%2FWzE6a9dzoO7SrqFcwvZwSCg%2F7RZI5%2B3JrmvYJ5JmCWcpyfe6yXo48Y6Qws9TDyQY6pgH8FEIUIcQ7zECJnWgkz3jkw3HXd4zUApXygXSKJ%2FyAmolJhT5IZBZz2KJF8%2Bob1BCg2WARI0zicq7maRxLmbVJBQMTWDqxqaClInYsVBVCmtcBIiFtiODXLnFt8jNIUrZw8%2Bzx9%2BskMHj4WtU%2BLvlXR%2FyiR2n247OysEnAkgzJiUOtIcBnwyOB0MtGNrQ5RiPjnXSI0LTbXeLW58yoFM5cj%2BEnGrmB&X-Amz-Signature=11e0431d811aed4b618d45a17591bbee4c777d9637cd8c87019522fad5b68be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

