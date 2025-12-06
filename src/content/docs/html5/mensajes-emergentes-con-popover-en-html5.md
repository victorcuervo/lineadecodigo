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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJY7GKZU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGPWh%2BaqvWVKkBkHpCGwpihn9PrWoCsk4%2BJ1gWQNBRBAiB1R1eKIHoj7H0xX7w9xFu5Nk4Nl0yg0pKP5pwOAau2pyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMi4PyECGvrpXCDzCAKtwD8Y2vaZjeaAAaW8IOviNtydFCxT35NqA4xsKVak1PMFva8AdD5disbsYTCjja6K25m%2Boo8FceY5%2Bj6mzmJwf2JLUNtESSH2NiZYLfKtrMegxzTREsJYVW1TkIeHw3A9C95VU93RmSTJFCsgcD9fGXLYPc1z1Wf0sm%2BbadSbYUWd6gWuALBoEZwdqoVZRsC8cqOa6QgqZ3EA5tfA7yo%2FiggiyUdqrTmL0FYGAxMRM04l4BSVpr0cKz9VuKegFaCCPeELoXbWkHuaIk29O9WWaQyDP69j1YPhvcV3n6UGug75AmUf%2FfX%2BnoBjvo86RvW8WoQhu7R5gmzmdZxd4OM1GV4ulNkgYhROzHeq7kT6qrfG8xRB3IOKYffVJ2eINZsYv9xiqR5pmf%2Bx073cNG0iQk%2FcjQjfqTd%2BYYsUsSDXdUMitexRgFEIgSU4c9K%2FVc4FxNh0M3fQPdgHJWp0eUSjmu%2BBArUStTAIcD8hEa%2BiRIMphoZO%2BLEYTcTGhM4IWwvG17DWjL2JKaxss8ryw6kwJztaDowSOBqi3%2BvnaccKCU8OVaOU%2BWqjaqz5VmCG5g%2BMfNNn%2B4lVkc6wF8xj49P3xfNHnUTKoIyxtFFW66Fcbp8x2vJ1RKVA1smmMdWtwwo8XRyQY6pgESVFTKJKE6IW%2FQrE1fB%2BsEwwjPpWP9ZBnxnEvSHuTvt274%2FUiwJ4V%2Foa06%2B%2BCemSL8RsbKl%2B0RTVehxG1VHoUy4ZfVw390wtE5Ga54HJ6GxGB59MQU8ictprC%2B58nMKE5mJ62QXB2SFPZIz7aR76sZ1wfjkchpOuFBi1vo7%2BVQZzsyWnLloaVtVogFx1rOsfFXE0NnQyqNT19fbGy95AJWtWDKU3js&X-Amz-Signature=38c3fcda73b8b54dbc144ccf682107574590e9c47370353b397863dcbd9b33e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623PHFDPC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIM1vLKA0WfrJunXI%2Fgco6kUQMdfBELp%2F7GzjHGjV5zAiEAxAzOALFVoAQjIyPLDbcDS56vI8N4a7kBI160sfUrBAUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMbydGmKQ9rWH%2FDS6SrcA0k2X%2FpxCcREDojmktnoiHQUbDx0F9Rvudwvy5QvYJyUUF431ZB2BvSIrw28UcvgWEEKFGQPx9Fnvz%2FZ3jYPV%2Flk7Qvr0HSONeGaMKLAyINns1dFjZrSAiQF0MKnQXishGa4n3t7RgYYMySRICgNwX1GS6OmRGGzjPnI8ph%2FYJ%2BrKZI72jKSN30bXXVrNOhZSy0v5UrPK5m9JWZ6uKB4zUPBJ45wkjqlCJ6hwJNCyfu9OnOqkobBZxgwd6E1oX4FIsKxo0kr6sWk%2FUOYlV4hrL8XE7qEPmuavWjvxar3QkyHGczN%2FzO5wtDWnnAKUbNkJA8pHmlOY%2Fhkv%2FjwISF%2BIWheMHR1MiHx8iQq3Ghp15CV%2F4A%2FXCSpz8WGh1YZApzVjHKNZpbqWBFRbyonWQZ%2FaWnXHOlk%2BZzYgSDjeTIjhbEMT5AONOAYxZf3W9M7wJSRqER3yqKbg9xoLBCJ%2FJm4JIdB4i3ynvrOixZ0Rg%2BUXKT%2FdRAU4LM8iV1vZMd6YCkzr4Kh63iihMXjddSjjrlbjS7VSxz9SIswGgHgTbJ8ZJ%2Fb78HZMBzbc5KIk1ae%2Bgulna38UK3ZUcxQJ3yjErEQ4JxRFEhltcHZNi5anZGrgVj2wcOvB%2Fie%2F41picTTMOLD0ckGOqUBkVWVTMjG2HK8ijDXhGI%2BObiMEQKIAjIb8sP7qdtJwAhKLx52x9uXT7Oglz3CtyC11OMWiKF%2FYLLKdJfZwsKdwI64adeafltZZpBXG3e%2FQByB1Yd99IYtn2phWc6KioWUYTXYvNbulkREf8cXr%2BSVCfbDzg2GLJbtciNj4SCcID%2F7Kx6hPni9%2FqqdimznqUXIPV7m3q%2BQ6syKk0dOCGmKpkSxKCa9&X-Amz-Signature=a4eff39a0f8f90a0f3fda687075ce3e5d55952e533842460cd0962457da436b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

