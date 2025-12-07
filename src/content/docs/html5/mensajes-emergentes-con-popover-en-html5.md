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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNSP6MSY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY4YdFBIb9QPxaf6zarDuMJem9HERtJe8JXab%2BKrcB6wIgZ8shMiMs9H3QpIGDyjgE%2Fli0uc3g2ioERPB%2Bk4j%2Bs2sqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgrHMh7fs7kllZKAyrcA4unEyhKpht0G1s22IV%2FsmRoY5Rai22y%2FdnafXIZpYa55Jn26ZlJDpJjLHyT%2FZ3%2FEVu1UhrCAbzLrk7aiUzf9IfeeMHInACLjX2RARc%2BOjJ43Hq96QHf7SZf8ayC1z9ykwekRMF05H%2BPOIUx2GqB2PBgrKuOhRiwKmVHgIH%2F37vOxf5pheOVxBDtgxqAM1eV74clrRxTdRpx8AVxWPX%2B7fpC3LvXaaBwVoY3a8Hzs2%2F9MusWVFjmusNuybAO%2FXpQn7uG7o6NGJCeE%2FVlsxcyJMEq6N3IFny3Rl4bt7BWKYqdLSTs70c%2BaOV0Ss82FklebevIgzAzsVZvk6GKAj%2FH%2B3ZD%2BTvwNJ6DWDLnuJeid5AqoWoen8bjsWeDUmI2LKi8kKhVPM4cB5JrSTKV6g4N1y5%2BR5%2FkjYaXTnuq9mCo58BlyddknVv9357uJow8KRvW%2B7sROt7O83zsVul%2FPC3fRYcqBLPCplrhDCJNQUD%2FY6SRF5ulDSm4EFh4SAkapu%2FT%2FgYqjhxFRSDjRegxwD7BXlpuIpBdmhHxXeJF7ygOLT3b%2FLIgsFxESNfJc12UX%2FgTsUgoO6em1Fbwr0NgYjfP73TLqkVsAh3H7trFKkT4LI8BVkIJCDevtruJ9t2KMO2j1MkGOqUBzu%2FkOL%2FBUjOILPOLQ4t9vuYVMG4ibujaHNOtuZl94aSoFLtXpc3D8EWO%2FJPOx8D8FoEnzHG82gCMFgzM53tB43pJljQPq%2B326Jc1ooqXFjUEDpbKGJB%2FXBboVsXQYK2Jr7i%2FfVp6FiUgvs3M6uZJ%2FwSCYT3e5vO9pURW9KpZNxMc70zLUJq1RUUl3bZyKN2xTIXH4L3FjZFKUw8EUrpyAZVhwj%2Bc&X-Amz-Signature=583fa00bf81a5032f05baca66df4628d6129d370e34661c6592ac98847a6b00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWT5O2R%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI%2Fz5yAuG1v4nqCgInC%2Fj8kw89%2BAE04j%2BPAhIfxsi1XAIgfF97%2Bv%2F8oNYN2N2nxZYWvlV%2BuXZj956mjrpoBImItY4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIfcyxce1qpAWYjPSrcA%2FuZo99cR7EJ2EBGohdXee7gvr0bH4qIcggzjjFVSxD%2BEppqok2f4T3ql%2Fhr98DBpLl9bpdfUxHhL0j71dOyUGdrqvsrQN4P0Uu3IHKifJmUTzIC4oujsHOmBJxQRoUdB3OjiJzBuhdD9j%2B6NZkD50JM%2BG8wlKBPvjtu%2FXP%2FKfHxeFo%2B4ubQoU%2FFFAM76f93GOKzsiigCyo1ymPvp1MCaet%2BNm9pOjrfrXJ0v%2BRTfJZCww5I1fkhQTJ5lNbpPAy3aJpeIrdblOzBzlr%2FBrdQxXRGb%2BTLwSVdt1LdTvNUlVUEL4vwuQsUSAb3Q4q7%2FdPCWoSnssWw%2BqG8J4rz7TmfoYJ3MG2FGkIR1%2FEIev6rV5ryL0oUIn9nQ1MTEdEDN4m2xoL3irPDl6dk1%2FnY3Yk5TCzGJdJBu8NplqzdZNdcDYvYh0ujBcgFw5aM8imY5r4KIMzuiaTGQkTWEcgTfMnuFPSPCppoHB%2BUGzYGMzBCLEeYuLhJx8pb4SYAivATIE0%2BF%2FWYVdsLQlVzxwlLzGRfXEg8oaNUKIJK1R1Lt2u1sSbIFZLJer4vYKNvbTCAWEOcDIcI%2BTHf6Es0FTMidfZvK8%2FZNsq9N%2F1lEGb9kSiOl9VZ7NkBdRIs0yepTDRZMPia1MkGOqUBOZABTMQswShHGR48pfkO%2FszYXMVy1SZQYeiKqvRg%2F6O%2Fp%2Btyqbdk3reYrRqYryQN4%2FR0ZJnqO7TsKRDC%2F5uDZAOn1zxELFv0wdrfO1%2BjfMCOL%2BBZguWawBnAcCwbC%2Fq%2FWXZLPYHg6Ovoen9lQyC9PYXilgjBD2WO4%2F3OUaeopXQxy4LHPYwKvxB1aJsdlNCE2vmU5yIpVeY5V%2FD8rj96UcxtCX1W&X-Amz-Signature=3d0db1f9e98e7cacd12ee5e4684e58f66d4ada279888d1d59cbd2346daa43175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

