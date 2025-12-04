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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PVIHX56%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDtjfzVz31OwmsCKYCrJW6TYemTehruRhf3WxVD9vbDqgIgc506SmW61UhLh5%2BP63CSTBtE68pB2ScoMVX3vmsrqFIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDG0cUP4tpNQ6nAwStCrcA%2F347zzpHO54fmvW9tCKCG%2BjbKNdN%2FQiPwOO2xPPQ51h%2FZ%2BptMJ32HYyNXj5Ezl3JxgN%2Fi9BxarWQw33fIhAPiuq81f3lCRVUbQtNNfHP2c72aFRIy12RqSu%2B5faaok0b7L0qXtoN3kn8UCtvvvuMaXWvkbpsbczcYzk5jG%2Flcg5AO4KNpmQexS1VAKDNFLXmasqv6qOUDqSwbWfZ68TLZwy2vTREIplfSyfwsjb5cuMuBRfaR%2FN4mECBdpNvWQ2S%2FubwcOjdhd7gej2WyNoO7Q3ake0P8iCT9KulvACON2rA7hbpIRFiNMnSoRgwYxyUYqCpH74xnoQxDlCq%2FQCBA2vzr96m9JHkb%2BRglfie4iu4LoONsHp9YoMa1iZHHmB2h7IZE316gYhqbCPC%2F7NXBhYVN8TqP3AfDxsouKGZ8bCW2jCE5FllVPfW8WVrT9LsnkTv%2B3J8ymqVkWdSxmTADijzlP9DN%2BhNecXOZS5M4bdtHB0gMlcGwxIGG0JlX%2BUF66y%2Fz4rOhbSYNi9Jnmm2JwZbJfiaMogNmCG7wk%2F7XE9FU1UHnID7aWhP4g5%2FqmrKS49kZg37kyvIQ81R5whTvc93JR3VoASQzrvThdLVnbcblslMJAzq8JPgEw0MPe%2BxskGOqUBylrCFda21Ff6F0MbAPIrFHBBWrflPCo5UIy2aptFfUVZu7uGyEtDvsLkCxi%2FvSIUx8H%2BpyOGy3Pg3RU8q9olnIl99%2FXbRnsUEQE6sZvg0vWq3yAUFRm3u2biyXGQkuQUse%2BZ%2BD17rZu50lDYdBtgJ5iWlLIxTURuxBLUO7%2BBsMCubnPbjeLGSRD1SmMyZhQk9e689FuzneLy3qCfC35jNQyE%2F8b8&X-Amz-Signature=2909a6255240127ffea593f02acb77743d75a493b4e4d63b70a2b699ea19a978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRISVA6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIC7t81ONfTQv6XSKHnSoUEmGsHLHRN%2F36SiVX7ldDa5uAiBKqg74j%2FtV2Otz6dNgryx9WxesnTff4e5Awex7EwcXBCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMHcK9gbsiggpGjReSKtwDovesnHs70Fb0k%2B7NZd%2BE87AsgWNhLrUQMpfDjL9MsHylOoQmrjkeBX3DsTuuUZ6yH5q3wWxxnNc74imQktWpoOtzHRVcCXyQYsXqKWORx7h5L%2FWv7LsJv5fWv3QI1baDNimhy3zGlsEXINGhrQrPp8iqeJl68rfKI3p4i7qEcrhsYfvgSHf6YnkJSBZm%2BjJOkHLGTRwsBApv%2FKI2xbRNpxH2ATKNefwtfe1BwBOmtJsutBchFek83642OBZNcdc1gYppf3UGHJyZa8khk9niMAG6qsNaMB9Z5pjjwZZXgmqky7CiSwpDkd6ynpLhrs2YuNIJFdw%2BO%2BnyMRhRTO7NXmcdlsfdc9hIsn3LydQzZIM3t%2BxRdnOKgahVqlkUrLjd2LA0dUWQ%2Fu7skAsk5hA5GLe0PFBhPa9RDs6otgZpen19sDFzrffgEQ5XAtLpoT8Jif%2FOaoiwvUocNBpTRAiNmXQJcN0g1fpHZ2WjIPE9syD1gxe5%2BFmDqutjH6WAJbCKOLLFEI5QJ4JqINVhdxmSlADDnP9DTuGjAZnlogIRkKO1NVzMRMoxvlZxY%2FPL40qj4pxaA9m9jKvCbAhXOwuWOSMB9vmOej9iol53c18w0phJpr2LJxRWIht80ogwvr%2FGyQY6pgFQZvEYSl4JQCcJBTXfwGFyOwRrgI8SsdPF8nyZt3noK8JO%2FJb41HBZKOKf4vBP%2FG6SLSJzZlfggoyxLJg9nLdKLjY59hnm2fjaTzIAss7lfLGM1Z%2FFuqVaLn3hEZ9okQd1GbKSwrTv%2FhDYgUaqfE8GL1%2FH88GcIUR6fQfERHveLkYI7dhCRE%2F8i7e8cp7Qy94CNMEgMxSb7Xvy6bnUjhd5hqjBh0sn&X-Amz-Signature=ec1b94cf9891361ab7b594f33469239d78fa5e1bd08bc5d12943f3ac0d9aac45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

