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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3IAW5SM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIH82pfzvpywQt4f6E1rqTvc1GM8dqEYJ1NmHRh%2BsPArYAiEAvDpEX9h8CeUjc56Cj4uj7qebF9DpE7pqKzkgiC01Uq4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDEaav2m0JWkMbErbLCrcAwpNv2EbvK%2BubloOJjr3lNFSK%2BJ98ZH7gBWfjVXvgSr%2BZqUyTfqoRcgR5YUt%2BZyZkmMul3SHm0DD2ns5p%2FdwO5y5Fv%2FVuf%2F%2B0BGp35vnpaOkeSEzc7gcZ4%2BEqfuNBTLqVkV%2FXeYU1XPUgplKt0sCW%2FGk0PHcKS%2BEkvJuR3wT1EthbjamIhcz8zbhmxOxA4hsoatVf6UnfuAn3UulUEmTuFBPP2NeCyrvkxObI7ULrw%2FGGRQgpy%2BeeOen70sY6zXOoCS6%2Bot0txpnAdOIho4n9msr2dId96mjt0eEb7g978n%2BhYnzLT%2Bu2uab0JmL9Z%2B%2FtraSqtSSSnUWr5xH9ECKCcWs%2FrYx2ceRGjSGp416syqu55LtdKsAwsP6eyyEPKCBFwGzod1fsZMAIRNn1Mu4GVpq8R1D4HBJs3d3NZ98ts82WFAwbzU0GXDj3CsfMjOoLzOZwEt2aWV4dgmQE6kuxlF2OAomxsMUImXRgq6Zj7ksXs3uZvW43PPAG%2FzkfmGdO%2FF%2FB9a0z8iUTmKvdABSiYBQqpMp%2FMwtBRpacIGH4rIGQIWeVmQYbLLhVnVCU55LhHFYoPUrAbSShz%2BaJr0IZTo27hqpQjRtDPVxP2nbds2mJMKre2oY0GWUNsU8MIa1w8kGOqUBs1ng7gP1AekHxJwv4pSPcrCtoczf%2F6EUyJ93dHvll%2BR4J%2FK4t8dHIfWyo0qC%2FEDWtqPwAMtJWLhQlYZX1ym6CrZpFDo9XCgZ7Tc2FySnVtAatWydDILiDApPMZtzh9Bo6YHxk15CemcF5uTqBuFmD4ALR70DQYzVHrybD7NtwF4SnoeUwgX1q4fvYCtVQS0VEGVvcHJUvb1x1tPn1K3r0X01uS3Y&X-Amz-Signature=a5c561701ce555d3384c7c63569e7b4fbef3162bcda016823d3a0f7b49391c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6JA2CX7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHIv8tVEwNgpUZ5Y%2FyJn4kQy6kb1Od7vvGXxjPTJSPORAiEAlGqvbDj3Hk8wGHuHcukSn5MUlgLbo3ZxZu8fbhZG6A0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKfCvbpzbrjp8e%2FD7yrcA7jlL8NzVqEaeDIpQFIF40FIglm5WVnXf83hUSwUgjZ9P5ZEdZXZ74F8MxflgOg1Glws0gChdM9qKY8pGvat4PJXMA1sHefqrdtmrNAvcfrjLSV4dsyOK8CLw4zwJcZ%2BXB8mbmBtl6kPZQGex4Oy7uE727kskfjImlEy0kUn7dMTVTEanhZqjzBA0n%2BwqhTzZwccaparKlsPbuCTRaisH4NVvuyGRJaNVL0LxhbLI5rCTt9LbanHL8caWubH8%2FEmix86%2F3Vsqj3lJg0Iz7cfe%2Bm%2FT9QkUBqdhPwB9xeiHeutUJ8ANNWMfNkmMrdf42RtQBYqCWfj%2FaVwupaVoUhpzW1vBwLrNpT191E2ge2MSa0GLhGGOIfOzooaMS%2Fg7NVlSFvq3BeS1lTh%2Fyi%2BZhE9T8648zi%2FbZ1htwpjULej33H2%2FfEg0jYO%2BqwxZCu1rX2L8OKsJNBheQVhoIZxW434bJ2jod64DypSLA4syJsirznhYrFjDrWJbGY8Bx07vPQjVFA9IduZj3ZXJIw4OzIK%2B39M%2Fc9YMekLyv22REgCq5sgrkdduPyb66m%2BK%2BQuh2VW9myrb6QgyNfSd%2Bt7H3MDIAXsLI1fNSfe5%2FoPLCs4DL1T48J%2FPxzy4w5tiTKJMLm1w8kGOqUBpEHRD93X9uHXgckfoGERoP7cXc%2FrC7sGUjKGMvDaIgyjhXjmYUSzArIyV5Y3WAAdvggm4Xz4iv0u93El%2BJ0cvsP4hNsa%2F6jf4jxA%2FF%2FuBXlobmpw9jNIy%2FxQFJ0Kn8pOebq3gCCPKCealzR5JeBfrqyaL3Jwadw4mwcFOLFAUZsyBXmFAzHHRwI9BgxIOO1r7psug9zQSK3c9w6ekjykoQPalZyI&X-Amz-Signature=a9cd9ad00a55076417044a6b70fa90d540f2912262bfdb5603845698d4cee5ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

