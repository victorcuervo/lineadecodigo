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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OS7HKNR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqk%2FfF09rYSO3llbBKIiKMpyo8gVrvWhec9fPMh8f6JAiB32sGzn7D55Gg8avJ53C%2FuF%2B6hXvbtgSB9e1EDR23ahyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2eribf%2FqJeqzF%2F%2BiKtwDN1yb0q%2B6AEl4Zn%2B1qYeglsRrid5j8qQYpFQx1baf8SSPbbxClqBZ8IPMKU1CAqUMS%2FKl7VK8WOVFRzBnvuElyCqRXV6nqtHsbn6FYoU5sZLk6ERvp6u%2FVdvGF8sWXylzraGWJL%2FwBblHjecU9T8ybTk3THO6aPPxQBab%2BvcZ%2BrHAu2xGLPoR6JBI2hv22xW3Zjhg4qNyrQGQ%2FqeX1hYz7GDEuftwkkTmZoerO5uU5vq5wd%2B1C%2F8srpf0LPBmL6vyCfYTwk1BUL19r48ZFQuH1Z1x3C4kQ6nI6wfONm8l6tV0hAHE9qdKDymQ%2BvwRVub2hoAVD0e9tcWXPZYjCJzKBcDqcQXIr7BUw1jRIJOCL46Jp40foJ3z8ECXtllY8U2ETX12BhXQhLKjSntSw%2BCwMpX5gYiimvsWXW%2FzmFyYWRlsT0%2F8eT2PgoVT3Uv0uxPtII8iDOvINqvVZ5KYkInC2uoun8%2FmxtSFwqKrai8K4uQRNRFZew2kyFpoeNHPy46f6Ad9wDDspQL4YvlYvhb1YM67Z8BrU8eNM43ThzAkIcfDHavSMD8ll92wKQuwxMlQhGslOfIt2fWVflURjan1EKUXKQVvz0jhXdNXphDlBkvqlPygo9%2B9EjHQn6wwgMjXyQY6pgG%2BU%2FUfxH3ZE6219iwdpV74TLHOs8nMxVS01IG27fUgOMuUzGXCZuCa%2FKjPneHvBx4XG4baEKOgEZPDEGnwdcKHaezlhVyiYykxb2HbZ7mYYxvbv7x15Dtg%2BJiF30gDWNUbTUlpncSpVK4TkzFVuMvvXt3uFeuxxBdPRMlPYCJa76%2BS3fv6t9NkqSc7gzNDU1tdcTiGVopHrbzfYlZoYW69bjgKDevu&X-Amz-Signature=e25dfaebbe9bd65272d213607c5934438f91170a24dc635e80e59caabc8c6c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MIVSTTY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC25759b2l2ftxUTnPnv9v%2Bj3mW2HHDaqksudc7WMPp3QIhAJx3tgXS7sy5PLzkkbAEJSYyraPMQFxXszka3FWppbuRKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr1wApjLhKLzsJVNsq3AMxapUomhEpmnk4JSOEyETiHtZ6x9iyXyFx2izUU74%2Bpl1C2jLFu5rMhz1srrhZ7YfSgnbTH0DNg%2B806x3XCTWoO9Ysz1wpiGvcCidP8P9sOx48KASW357T8xV%2FIjSAW0JYVlR0Plbgic%2BCtt397F%2FyEc4n1%2BHPm0eM%2B%2BYuLrN3Vaxt2f0K7VJFmMPbYE9SSD%2BYtMEWD6J1jnLf%2FIm6Z%2F%2B0DO1%2Fwd20ZyICWUK3znNwN75iJBgxhQPk0Mu6hxJbyePtd79vH5aczhoWPxs%2Fmh0gVM8x56AzuA3vNHfVaEHTbZyKVp7kx4bqQ5P6Kyu5UQLVgLrPZ37od1iuhrB7JRG%2BQSxU1JRap6ssddQWgFMNn7AHerYiV4TxsHIs5T4BxerCGaN6a71XdpTz%2FXi6EC4zhg3XxPH2Zse2FMVdoNbNs2p%2BUDtwMdNy2QwU%2FWOodtqVyotKO3bznnvV9GX1X%2BdUycAO8kvukwjSS%2FzUHYVV9mI16UUGzqA98KSMUpDYMrXEa5aUgjLi0SK7g1utzfo%2Fg0vv9al8%2F8gDTXfzHgwg9WoEj0vRH5LMrJHJgP7pQWuWR784m2NUa9vEj8TIqwzTwF6eDh1tkChb4XGKHW161U3sYshdghvQ6zQ%2B7DD%2BxtfJBjqkAYnk%2BoZgei8j2aE1di7eNUkx8%2FKy7UYzGd1G%2FzZ3xa8OEdsFPZH1pze3NbMiDSTbcnkpIYQApdagwZIJc91o2SATkEyFojwchDZ6tRKhEFo0MrMePcD%2Fxy3r2d6nEjggRZkrZ1DIcyq0mX1zb7UZLhqqT3ICn9FAhMR2NiJ%2F45iJ%2BrPi07ubwtuHg4zRAOTW0TfUU5JPDSbjpr5n2SOL4bSUdNiL&X-Amz-Signature=07dd42d205c4263d15973e8a3794ebd59f60c042b0bbb91618c682f50329b294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

