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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDMHWFPP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVsvSTwDU9jl2VCPQ3EAqNZ5AID8QrizgHwMaApA9KfAiEAgqCB6t1SKrUtGCdiRzgjdyOPIl5AJlG%2B%2BzHXOqyPdaYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDE821a51HyCUoIVrMyrcA74C%2F3%2BvEMrPAK6RQCRTEw5xzhMd7HO75GXOuqT8Evo8U6aBHnXLilAa7LkGK1TyXqdM0kyrRqj6oLmNxKlviT%2FrMUYEaJRYIiJERjS7hJGH91kuCqUT%2FINwP53W62WoYfO54YX01oDa8gTw9Lr6gZyUz9fAevGpDknYc2XIenTjbdy%2FUW7qXpeHnqwpJh2bAANAfIqHwx%2B7p%2Fg7EqwNcl9iAZbmaUJXltzouB%2F92uNSSEQ6JFfWx5nj%2FqBxo82un9TF8XBIaxFqu8FtUA0TOO5soIdaZMyuytuL7MiKRmGukIMUMdBC60lX9%2FYwv8vdYm0yLtuVzxqCoKzNJ9W%2F7RJ0wQHKRrySLJROWHDy1FV8pMvBsufQeTfYyv2bX41GHPa9kfs8qrmMdoNBQeVmq7DRQtWyD8bqy5z%2FXivTAjHPe4Z4Yr%2B6Cqb1ZVFqpPbpLpJ93MCoXgT3WOvycyoIj6nuVImAtrimNVD6gVFgAXt%2Bdxw16D0dmB4Mlzh0nQFb4WUkk21Rc%2B8rQoCR%2F1uX8MxBzcuMik%2FgSQ5Nq6vML%2BGxt9Hmw%2F7Z1ctWTX2zSApFVZau4CzOP8PoUDC%2B%2BFlkNQoz7MjPSyj1AInrlJYtyySaH67F0QWoYwVA8PQaMOmnzskGOqUBZ6wOTwO97yF8%2FOZMxxttP6WN%2BJZBq0Ap8WYe7wOLiXPIhkIVJ0ykLI2CqvgD0L4lPsY8jBSKJkZ7q3DHHFMOY%2BuQrGTfqR4IQ%2FYHC4OYQ8JBoaTfWgFihARsPQ08PefWxSirFgyiv8HYVAJzGQrEphe3nQSN%2Biedmq1w%2F8PfyzPtnyO6w03qm4X4K4hB0FT4b5IfqqCeSEERJKRCi1TBm9Ctvwxr&X-Amz-Signature=5b4fb765bb0f996f847c47ce738877fb4283f3e36f42caaca52039ccb3ea096e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSOD7UZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FZ%2BzwOW62S7dNGl5aTRWENbsTw59%2BtHHh2fGbdUFwDwIgWQQpKpIs7T%2FYHtnkbh5OIonddA7Mbmsp1oHNuVZmAbwq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDLON1pCQebD5cHbLVCrcA2a7leHu94s7wlJX6rUG0Gi%2BGRawciHCamic6XpR3PAaf1N3WiTUrzfJKWz2EEfFL9V3yPBWfIXAzzQ3PbQLrD8cfPiQgemW5fDt3AHQWhRPcG7xuhGVhQBL67hZ%2FMPW14fGFR4OL6qheLMK9FHm7hKjLtaCcs0gYbufUc0N%2BpaJ0liy%2F%2FNp8sIZP4cr1dGMwIRhNQ7dSkfv18TfqC2i%2FKM7b6Cq15BRgvueS9Yyi7XMw%2BspROs06vsTfIKkLM3TKKwIS98q1g0GC%2Fcn%2FyhNKlFoAvv0fPasVD492tN2qkD8d3J15WTW0E9mbgjljz6Kb7cXVCDC3YP8r%2BB5Ura%2B%2BICdZitPmH3U6xUXflVkkay%2FQssqoYpzmhr%2BEZhsdn2J2IXEHAiP4oEhm0yq0luOYUAx%2FEauCDL3UDZ4lRPA0n7zXDpdQ3TvDBvor62%2FfLktlPxtIMfxMKkUsOdVWvG9JRmazlHu10OnLAYLHLVt84M7rVSAF6VVH2LmYV4SphL3urB0xZZ5WQvl0UpLF5cTeC3Ms0aKZKe%2Fwv1KfVDcIzhGt0gFkTPmAkrqG49WK1Ar2jShPCPmxfSzxEyxlo1QYUuR%2BdQjZYInb3FuSYpGOE1rPDuCMQs9AP3z8ehbMI6nzskGOqUBbvgUhsEDMXGrfjUjhNyfuZWl%2BTVKAbyHzcbU3%2BMKy6cf1ZeEdn%2BIlj3rcLXhP%2BzWVZQRpDnwnawHqhg78bQZVyksb5cPbNuhsQVyYrFErdkuB4dRrbW7DnyhQRxSfeN2ehQ0odW2vuDUxhaj0HA7hbxPRycraxsGk53oYArx7d0H3Y1o%2FS0930%2BIR0gz3mOQtsSYEyciWH8q4U7ASzQqsZds1tna&X-Amz-Signature=8d56feb52de13a4d9e6022b683e8679aeb63d2ce5367b062733ba39b8f87ec7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

