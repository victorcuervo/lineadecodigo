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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624ZIFA7D%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAOAfXpzu1rBbhAMTojfXTDVv5dXP8dKLLWr%2F9VepU3wIgJfowf42MyI%2FJQNuqbKHxLMM%2B2%2FQ%2Bu1vLwwltBWGWJoIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDA7HDQnR2nfgCLE3YyrcAzO6f4d0LkXRzIUPtOzoYxWsL1onL%2BlnIftpgoUnDwZIyM7QGEWFXx83H5%2Bo%2FookmRA6DTKUR6HLHCiIfxowk0Fmz1Nh2kBHUWM%2B2ee6suQW170J2CCXnQCC9%2BXrwXAxsuBx7kRWOAcfYz4nFqu7fJpdrhrEpAia0MkZ1kICulMHpA3MxVA15bSP7qB1sZor1gtMkHxDWGG5cedF7569Ni7V1kpQrwOn%2BWSr5C93qtO%2FLPP3U945bkQC6XSuddECe57yZW9RU9mqseUQz5v31i%2FM1sWsR5IClIwRmbLn9Je9PPCh6AgX4zXSks60zg7kX9Id2gL3MssBuo9SgVMzA55kLdH%2BGI5xYPxe5tMJo3wjaVM7OEN4CREJuD6%2FapbGeBYhZmxKl2fDMP7BQbOPCF08vqajhi2UM4J7gaJUABXg7DptR3tclvjdZO9sZUwv6Z1ecSY0T2B2UFf%2BJBSC1a55%2Fd7eiq%2BgxhWC7r0lrSMqXwPaCg6LFLEwfNnYz%2BbMZiH6ma8NAw6PmPOMUvooq8khpCoPjizP%2FObU8OUW1lcF%2B8grAKwDLSHACu%2FMANQqKIR42yRyNnBJ5J4qvmcErH6n4tCrenu0qABfhdhCAQu6dFrp%2FZVVDWCl0VWTMNi8z8kGOqUBrTdvK4Hm9F6Dkd0olQBNtCubiJn4Ji5NLAwNaq5LzF397pJAhJ%2FW3%2BdrqXKDGUCsAxKFOf76QHcWP3Rr%2BokIKf8PeKiUk5Uk9%2FcqMR0aWUYJRAjEIBJrJ3AyMzdJqnBf9ghDp6AxKPXayBfPX%2Bn1H9FxwUYW9Q9b%2F2nhVs7hwkPr1yDgVCMnAyWelU2byF7hBYIEzOiCmHpQj6bA5e%2FXLkg7nFJ6&X-Amz-Signature=85140334e58054f715f2fac3c81f6682b01a37a92a9ea01a9a3381dd9c02b669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2CY6HA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfQ1l1GZg%2BcXg7WKsjSGUyuj6HNVlcf%2B2FpIrcSRbN6AiAvqSjsBanFTXeqikv1P8FfyqyXQzH7vcFCwtlFbtIAmyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMpg1%2BtLbN2TaJnuJNKtwDWAr1lB%2FzfXbWw%2FQPcQQTw5CTLti5eKlrdHdezHzp8DTlM0NVxbRC%2FIQ2w6HYBGiOJPoX%2B1TJ8VPUNqZ2cwT2IZS8GPMECsonvfKIRiiCAObA4EgFAA8Kn9TY8hnKtVcGFj7%2FLp9%2BQi64GqFNEs9qWmyVsUmzqwmIPDaMr3Og%2FInytcwtYLfzpsLtDf48E1tu3nG3YvU%2BN1gK0KaitBDi%2BGi6Oe%2BA6p5VYzZsMA9qpX%2B1qXUNvGNDWRv66E%2F9gHMSy7tZPfoubT58sFwQ9kQfVg9j07HjIV9UVPNt8aafZ3FlF%2FnqVw3To81FoP72sp7LSTIAFPO86t0uUym6DzMrw1HDJVDMUEWae7mL%2BGZoeQZgeN7fyiBFgEv18dwYGum2iR7VL%2FiTY01%2BMEezKy2pRBLLVK89oqeAQCaDASS9fk%2F64vIUnGAB7bkB%2FKYjWZplQncPM1RHV2YxOVOI6yfP2Fa4FPnENZ6%2F4qDQu0hIz6dlaqQ5XeatRK7xn%2Byeh0vCc05JNSOBM4RqQLK1BdueANVW09lynFKaDVquy%2FIkldMX4A4ZyMFkZyAPvPw6mK2pDA%2BY%2FKte52co4CGx2brgR87znNmh0OuzNDDYIAVBRAnKGa672yyRxCPg50kwmLzPyQY6pgHzIwubNlHq53bkPpe53ps1c%2FXLxTNch7O6JnTLPP24rjaOSikmJg28OLiHuj2l4cIJsGPvC1Wh77ygyD83qamrakQyYiug6pkNlV8WBeR11Idxlt9DSDb5x%2F%2FVofxnQYapK4uq4mZmVNISZ6YS1EGHK2Yqkh41HQRFCJvO41WV51b9VyWXZRZ8ouJc%2BJh69rrpiuaSXToDXv65VlWdEw3rv2ne%2B6Re&X-Amz-Signature=fcdea14d92b10d35ff58fb9b4eea623377e9c94d1d0f316ded7bf11d24406c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

