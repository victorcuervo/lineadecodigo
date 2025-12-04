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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q46DL5ZW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGbMC%2Fy3kUYXwG6CgX6uk4bmHTQPNWxLXCIeRQa9RfflAiEAqCmyRgu5nj7xYzQhQc6%2BHH0SY02RDhvVNQO2dODgXv4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGWq4WQZA7g1ap03TSrcA8GlALefAp9Xg9Lv8aKclXw7IHwjo0ih12RMVgT9aAsb8u%2Fzhn6qhBz0RnEf5cIuet0moX6NYIF6AF7H2eyLiFFhscxwMi1o11KZVOuzP72LPt4DMmLYObTLeJhBObFt9ty7xZYmNy4b%2BsSmkVlTCrSllgzx4a0NkgoIj3QAjEtfhullQVb4MuqcZ6IzuF4szAZcQxlRpLg0l5aN3mXBw%2FAkUs67MhHY7Tfq5isWRL0xBjaUcwCo4D5FZMZ8x2eYmQFYqt873cBSycMdUCjoCvGYHdcjXd8hjz%2BbbHnaXboVyR%2BSB%2BxWXj7EKrhY4q4hUh7w2wLbxsX5%2FI2ya%2Fd4ELeoO0J%2BRB2AUEoRfqAcirhbbbBT%2FhatFkorcWGkom9WhZJx49%2BkbGMB5WsA%2BCjsq9LsxRzmLZA3JECpfO10%2FOZE2lVh8llSH7tajT1GkCwmafoMQENsIMeC9Kt384IPkV8h0R%2By5YZ1AyXrssPTuoqPBXaY%2FRKoBJBxaY87JGFYj1J4FlQrWfM65DgY%2BNWarrAdW5UwE%2FCtF2vd8%2BRo%2BhtvLam4W4xD6yk6Rl8q2tuUoeTFlmpJ3XAtQgnO5Uie2eb%2BEjmcUBhdFKTPhFqbYQa0CODmSxJcTLYixCvpMK%2B1w8kGOqUBJGMJfRXZchjWTw44zOc0QnEJ5mWTAqnLL2CVqXRov%2BizKbH2HM456Bp3MDIJfhk3OONZra9%2FbThc89Bsut4xL2Svc3sGhxqcNjrfvoaMuMfPPkEaUUc9etgOsD9YoRSntlfgeNIr2fk0qt20UU450iO2Od5%2Bc7vUGA8IE5FGk8NcfgC14sF485Sd3VCM8Rsb4QzDAMq27wqex7%2FSmSqxQ1mCi35a&X-Amz-Signature=29d3ce745fdf3fbe8effa6f6db87d852cb9e4db8e3ccc9435ba3364f48661352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RABIMR5Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHeGQ%2FFtrlBCe%2BmDDT7PjPAkDC0buDRZY6QX7TSQi0ikAiAnla1f4xiRdhlw6KtiwYVtDE7ZsJRzEH8K%2BmhLJq50Xir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM31WScY%2BWLTEehE5JKtwD2YbiNH%2B9W0edZVhfwaXvq1aEJK1DJfufWPhwHeT%2Fun7k0IpINGdbEfCEmLW1jHgwM9A%2FaN%2FHzG7xOZ2MTJB0rH3GaHdQdNhlkkfqOkIeM1TH8RSf8axG%2BVJruxa28fDU7Lvff8D%2Bdc8KmsxrFT8gZVzBb755nDGFh%2BwqVNNH0Ptx4uiT%2F3c7ogZfOdSpxWcSerSVeKHJPLSYEE7NJn%2Bz0CZOYbTHT0gFbwsI3rFvQepMIa4nrpwBNl5Se8Jl%2BzBzgLWTmFeERxnnnkCXvHX2kmdykqzJ%2FqUzedrR9gJReu3E4zMIWRV1hlJo%2BdwHjRu%2BiyNspeHkmaXw5qPb9JJUa1LEkEQYDJF9c1DTdka62fdGMrlKulzqmUFJNBL9%2F0Z8nuTaCtJZhK%2B62eqT7PnNJoJO3AmyShyL4JN8aNl5K%2F4V42Zt2P58ygBIA8QUoKNbjRINF9zkEOdH8mOffQuhdVHBsUJbPewkVICmGQ4SoWmZLZI3kie6AC7XMOpEFB%2Bedfj4q9iepY2rumqOFBeF1xVoaOEoDb9d2udOhVrLhiowWkUaVlpZ%2FEcJQho3mO4c7nQzJSOJ1mIb3hAm9WLBETnbTAUn6L2craHISbCVTWm8CwVYSDDNjuP2EI0wiLXDyQY6pgExrdPjBiClSXiXzxVcMj9Q%2BNrFfGHId5Uus9bjP9%2BOIhtHvQyeT9LJLNWgW9BJlXe7ikAshpqb6jU61g65hTbynA1OBjz3MWAcuQ5tGWKjhMfyfNepXPSzZ%2BVK4AJaWWDaqWcIR4iG8IeV%2F7asccsCjSQuehCAxuhLzRj1OGxB%2BmjHi3CAX3uZubCNjgq0Savths3k%2BLsmmtBnIF7HtxA6ts16uCdr&X-Amz-Signature=3da849741f7b04d87403679cb4cb6a666c38c2590b5002d6c01da9dda4c03747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

