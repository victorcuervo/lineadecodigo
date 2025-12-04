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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCP3PGE3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICeH4ubkyhRJBhce05P9mqcPi%2BSFqPIcoEiLAryzdCUrAiEA7CxMSvtB09KwTRCKTeSwVX72NSQ0UR%2Bp%2FqMdgzwccxMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLpobz27g1m%2FUFlDlCrcAzYg68GLcuwEZ3bGaQbh5XjtUXExRUN%2BSvCTsswkTT%2FiL18z46lIbTbMpqu6wz8I4T%2BK0RXF%2BGq%2Fl0EVFOwDUI%2BU3RkBRnheNkZO2mWcGTej8v8BFm9BwEFMX4CB63F878qaB4scgb0V%2F38wNzHlafntrUWvNcAzAjxfJBo7RWUbF910FaX%2B%2FHqDFOiYaRISyH3Y847V%2BbhbjJw6YWuuoqS9j8QxfZg8zg3UmgJ23nIkD0lyX9i7Mdi32l%2BLHzOrq0Wq3wiz3BRPZGinTJB%2B09SC8Xoo0ph8XQ0dWsG%2Ffv2wZtCSAbfQCQmJcgod1Z8e8dBSMxrp9JD2X0ORu67b6PJeApw7P6DGWqd%2BT%2B3jhmdicNVllA6KjuMQv6OW0MqG8BYMK5dWr3bEiDzx167x4yR%2B1c2hZPUWG5YD3mn09y6EOswVlizRJbThb0UmEjOsnYhpsEJaxTqQA9qb7lfoIS%2BS%2FvzdCE5pxANVXPqCNPNxtsIa7k%2B4kTbnwX6YlsJMKRGZh3zJSrwaTENMYVZDBDvv73G%2F1PBiV2JiXbFzvb%2FHHfSO0G0ltleLfm4kg51fv%2BRR%2BAKwBwLcPJ7URvH0b0SnrIXVjJZGpKpbDSJgd2UR7c7QSIJ1BTwYMuBxMKOvxMkGOqUBNifxzQhDqDj4DvAq2nzV%2FrXC3t8IxlpB26RDE%2FFx8QkHGpEUoac6jRLiwCewGYWq4ZYBQpkb%2BTaCoPazTw49Lf7esoyzHzZsLnkC%2FxjzzGflzCf7zfcUD3tfP%2Bta1IMLEhJ5SFHf9QcPatSXbdbyycVal2uqgvi99yBsiS5RHhDLpEX9ygETuXzMhIcdEslydTw3XYju73Bns%2BeLfOyCNECDz2tz&X-Amz-Signature=c08a8350525ba7f96d0f17eb45063bd6dfe047bdf52d7b67a157291506597550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WWMKMTK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDpiLwEsTNpmsA37c8QnEKDdpFljJlntMqBP1vqMtHtEwIhAM7WsFYx%2BS8JkocwXkIlmsIM7dAO34g022o9c8C9Wp%2FxKv8DCD4QABoMNjM3NDIzMTgzODA1Igzy2Z0mTKpRmFjzRTAq3ANdzMeObAXwG5Uy%2FJDtyU2pwcocZ8Ti3HZBQtyDIF1%2FjytLpqewC2J0kw%2FoDG58nuHP7vyeyC5uWFOl8UAwP%2FbgzAlCS24MySs1aKo2G0ARUvQ5cBeFcahbMjZYxdb01v%2BexMV07kHYpssXWVGm5Auiur4HrrhcFDz4X2fW8On0q2KM9H0g1eoRBFHdqRveQ%2BoYCpZ0P8Zg9IoTor%2FN2j4D74dTv54rhRgw%2BH%2BAdAAOobUKdVdGgRKz4xWHFiftCA4RHpnUgkvucCEwNo7MJLBAhWH7j%2FgdQtwYjK6HMdQmg8eAf2PnC6IzTcXeKYDQtJyYpSkHgEQD7Yaa%2FSjJCVXNsfdrVcJIw%2FIeJ%2BmW6jyQ1wqOHmuM6vibfh4taCLaD91PZcm1I4j6NE3iCvkFbBOO4yIYmWwm01j0jFyDrdSrUZ2G7L9wz5zqEuG7WCfgy8SkpvRf%2Bk98ErXQMO8cVC4xFKA%2BROd5Ps3hys7uU5J5N7dKBzk2RKQrqip5GB2kP8sTAbTDZaFsOhrStRWoUvHQy6LUn7pDaJRq5y5dHaawwWg4t8WHVuwLTMYrofrOyFp6Zjw6U0fUDFVUyWs9i%2FYxyl5wAYk6R2zEY1gZDlxfOpu2oBUqR1Rn1u2GGTCtrsTJBjqkAQeJ%2Fpt4tFLRQskbYddWU%2BgdKrwIaOe0GAxfc%2FC2NweemEXdVE8nyshAfvcR5ErefTW76kh0TrWTrB5hA8gYcWfa%2FeUYixkZjHXjn9rzDCxYAzf1yMov7wXwgmDruR49vHOxrWK0M%2B6UeC9sfhBiLEmFzzKvdx5N8%2BrNldTJQWSlci2WirCY09wPhjXMkd82wJ49NS6DoSVhWzgGpcswQvcYTdwz&X-Amz-Signature=d5d176e0faa7998c5392e6c4ebfcc31a0fca39d78952cf084fa2391b8ac87575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

