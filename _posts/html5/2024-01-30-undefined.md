---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFKPZB6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCxeeDH93tFu%2BF0%2BK0eF%2BZsxhE2Vc7v%2BJV%2Bp7jZuUSG6gIgabr0XtWFPqS%2FHw%2B8SCSzI0Ff9voTapkRpj8uebLKJ08q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDI0UwbNwEm79rR29nCrcA3wsnOmz1R6AxaOkR2y8odF2gpFIhbe1l1mPa1LNScMygYYvIAk01pnD4Kisl7yzi9WJLoD3mUHWZ8J%2FcS8BXk0M7PcIno2ZDMMrRTTOb3WSRBrZ6TuD6cXjLQeENEMoIMo9ib80WoRxGTlV14AQdwfyNj8t4OCeRpBB2AXmCVyz5hEwoV04IZ0OrmW9TzC3AYqpTXanhbPjwgM5L81JKVo8FNG3HDTt8LnPg9v9efCY4z%2Foe0DePfPqg3JlRy7XJZvI2Vj6hajFF5jCREGxd0kf%2BTgYcdVWWN46ivNCT%2Bex%2FgO3s22lUSOyld3R4IN4tsB%2BqR55WT2YtCxFc2SrijipyBxIHG%2FMuBpVqlwCBQFWl1Wv5E9jUv8CJVMyK2c2FHK1UunJtqDApbdsTVeHGjeBttakQHf%2BxUhcWORMXYsYB9JK3Eyuy1zZPpXgDUDNN3dLb6Zb854%2BQYdqOVLxxH80Fo3kYMDU35m%2BNyXFHxRWMTb99%2BwxFMlsvo3IkevLXGQj%2Fn5BcAn17%2BJtegS6XG1YLV8o4oKOgn8hvpiQsuPe9i%2BPgbF3lQvEbll0G4RH39oNBdZ6Mk3ezpli5iz05NYJhLAY9d5awlOjCnUn07Rq%2BbWB66uSkMfdKoB3MPuWvskGOqUB%2FxNJ1WZg5u38ULvenQ9%2B1TfOK86efgV4r0utk1XEMchLXJ%2BMnlstmj5w2VEdnkrWmZ%2Fvq0VisxgSXvgr8KtnkK4sQziJR4ECPaWrRHtNEL5WCqcSCmG%2FXFvGq4ndmZpv9DnE%2B3PvKzg2Gc62NT%2BkjzyE%2FVoJPV%2BAGYEf1di9kLkwDSNPImlnkIJoytF5pOOGwnak%2Br9C5YcfAs1O%2F9d1K8hzJ%2BmL&X-Amz-Signature=661854c15d3e282ce899cfe11b5476aebde98b0b584eb6037e670bc860ef850e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7O4KPF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDRReiewxmRHgUKgGw1xUCCR7OM4YP2Ktu0Nm%2FQz8jluAiEA8snyhXf4FhsNxULe4Fxx29wpcsBnqEgKircuYgZE9bUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKEt5Zo%2FbXuGJ46AgircA%2Bvymmai2ml%2F9Njkh7iWTsYZanvYBF8hCV2CeUcXOVaSFXrCvnArRUnl7p72iMmjdq1BsrykB0mHDPGnLMICjdRQHZhZoZPNEVPjaq3CgcJgbqD7mk42aaAiB20hP1Kklof9D6liHMan43OSSr4%2BmU1uP4zDKyCw74VgaWrF37prRiZgGLWXs%2Bd7yYw%2F4Evd%2FzYMyr2ABjD3bMfHdaJ8mnK7xKbawGt5olb3zZo%2BaIbe%2F1wJEstNMS78a2J%2BfDLdMrs5xfQisDhvM1f79Dlh%2BOxqC9hJoWu%2FRtipmfly7s%2F1G7FfbYjWzq5ppL6eDowLy1xNRkaBb%2BTuS3y%2FXPfaBlJ4Fyc4TmEQJ24Tle5YXy8LvJYH2wLI4vfT%2B0dljY4khyZXOOrxdRgDVge7MFjyCI8E3aBBw82rZUxy7HwIAONDUms8VwsE7JavMObaL5Zqul5YXyEpO5bdqV9g1c9LEy3utU1FgpsUrOGkE5FJBt%2FmnrUPMIfyL7c%2BF9YDWtFzwt0A3EXC4Ram7Q6kTrOUdZc4%2Bz8QSq1cN2z1EIYgRxm6eVJikj3l4YMI9HlKA9R3kTcZnUuKXT6%2BmhQ9TeDCQRmTyCobZQH9Yc6QlRYys%2B7d51vSZ8fxyDOFBwodMMmWvskGOqUBe%2Fv%2BE866%2FcQe6hBfk%2BLrlMCV5ZSnYOsa6jHZqCIpI8XwFxPxrgccJFdng7RKK%2FgAZBGxahbvhQr%2BK9iEoiZi0p0iYCM36pC%2BCqbXkZ9Ps7oOJfr%2B8GZmlQMXStAFv3p%2F7DsY%2BGW%2F%2BQD0C8Q%2BieC02yIb78miDOlWh%2FxH0JBx%2FcODpAj34CKWCSlgh1nEffNKLYrsStOA8pwn8stIQd6mzE7oyF%2B4&X-Amz-Signature=d65f443e9b6e6e9130e09998a49987454541dd11d139a7a0a11c7b524bad5f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

