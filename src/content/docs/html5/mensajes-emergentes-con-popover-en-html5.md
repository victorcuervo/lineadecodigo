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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN6TKU4B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj2aX774DuPg7Q9TokfSYd3h6G8F62I0UUrr48cv1z%2FwIgOWmavyTr1JtrhsjomyGF7j9pZ2weyCuKxAia3vGAq0wq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKh5CzYMvsCDsk2VtyrcA1%2BFDKzBWndWOG%2BjK4GqRwJB9oCTyjaa%2Fgrdj%2BVee8JfJVqMiLg9vFtc28JxBrfPJRyHlaWleqjAdC%2B9jym0tIcoBn941lg2u7aGeBnkDKeG%2Buxj%2BudWqv5v1jusJm%2FnmF3vzfOdKUKRtCx5eVMXuPbg4X32ZYZHEmIZZyeBJcgb72uU6tvmY3kUO3nCY5c42b6%2F%2BVYIkKvg7G2rcoEdmFakHkSjWnxSvzoIaQo0EujS6LBSLqhX4wTq4m7NnRsVToFz9tgOCTOIby79hWYvppZx1h7W082aqcwCYgU3GCVJIu3qhgq7nhghvRzpqLLutEhn5xYfxN6UuqUH03ZE1x%2Fec54aJ1TywV0NB8gn7MtcDy2Z6OubmoRxJAWy4noqn0suvwh0OJ0Y%2Ff7Jue4QBms1j1rQDuY375lAsaWTsHzZS7uteQsevvBAbfQ7HDiITtRw%2FxeraGRX12ruFIuXQlAoTuQlWM596lfdgjexqLLFoj07EkGwIPBuy482tPLm9j8y6usbQynTYrB%2Bp%2BMQs1yssrZHpR9Zp0L%2BCo6RA09OPQuKyn%2BR8cEb98qDzucnzGKZPrlY9WqDpOOu6%2FPReyhDHSk%2Fwa5BROhaUcPT9j14nWnEtmHXAyjqbOgHMLqm0MkGOqUBIxhbM6JvWVbDL52Z6vuLoKO126tI29OrMhSgtznRlpkq%2BSDLlgWGr5e%2F0VOgORQ8UJKNgjbSkM%2BDeGRNiqVP%2FtIiTZXDIbJkaKp7tzb%2Ben07w2%2B%2Bt1qsN%2BsAGAtoTUFSo%2FtzaBFHusTKbFZZQ2%2FJkDJncBty2%2BZFwgvrtj0kT5DrxwgUBiSIwIwrwNOF7JtXJdnVINYQyQuZVMcxudBTrj3Pcyz%2F&X-Amz-Signature=3d0fdb71bdb412f4242a852cb119ee6e28eaa6f93b14cc426b7abb9a6b1a7570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB5BPBBM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvogDBUim4ylQc3l%2FfIsI9iMsgw%2BRvA4cuyfoLogVjRQIhAPZCqDfgjm5FSEwKQYhkuC%2Bu4xThJSAZpoB98YdypH4vKv8DCHUQABoMNjM3NDIzMTgzODA1Igx8AJXHt%2BY4POWhGzEq3AM4o8qOIQJqNhMCkJx8Pp9S4gMPMiQhsY6qAG3NfASMaX6e8t6hjWQh4xNEnyPoiEoslaGHOyENHhj4yN6xiouhkzUUUyC4lRAIqOrjQJZ9LP%2BhhncnmpZpMViYx2NkfiuSnZ7YTCuxxaKiAC6rVXGQstF88%2FZ9pnSbK3Tp73dzFaelM5ZMMomdhlLK2sNF3CroqmXr2A9wvYM8Eq9pahFzKsPtYC1WSMsrDKeuOZS5QamqexRpvIMJ6TOcKf1OlUeUbdZ04jhL1OW9N5dZQ9eFYb0nSlIOjj%2FPweLp0glfPBZl7V65NTk289ow8CInlFnV2oJAX2RVyKTTFo%2B5%2FQ0NKwf3fw9L9aW4OFRvg8s6WykfuIKkY4qr%2FR%2FtGj7ljBZntYx3WMw%2Bunp%2FLRbPgabBDYjDt34tgks7F06wk%2Bwvr1Mcbkjhbp%2B57cGe6Mw68K6RjPODBQ3Fw5lKvIUfnfWRL6SBYzZfYYGF1PV%2Frsa8ZZcntjlceRRepsUtUMQ82Akt5LMPqjweKn6mQaa7bROacca146DpYXytdSC47c3pSNqPOwoPtLqKTcvG7mboC0k2Jp4pPF%2B1z0kwFeWk2F906LbARNlugJuarkmI%2F5k6fsNhelRrUfz2M1OMzDD1ptDJBjqkARIy2ALKivP%2B4wmE9Qw4sEiBEk5OWz0bL4K%2BXoFNsDNwhevxLqzSZF3inQK%2B4wldIr2zmCUK0T4T%2BWKrOA4Z41G2ejZpBUi%2FYZ%2FuOv8Q7dbWYaP6YCSWlRtDxvhl3GcEzpAb6VX1FaaC7yYPYPuSHwvsMWnAfl%2Bcu5XxB8fbwqzDkAylP1S34dhTtLtWbZ9743x7%2FJhXYhydmIDJaJTRDnSi3k7y&X-Amz-Signature=4145e5928e1b5e37257a52621eca37f71b69e600c409ca689a112d07fc8e0f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

