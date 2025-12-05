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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K5KC5Q2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8p%2BxKwdpLYcHxYZIaOoRVVdTYFNiYYgUox6TI3RSzfAiEA79zrzMigktEo%2B1sTYnf50KDCtZlM7Lh8Z5ZVs79H3DEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAIMrls7yLkFeQ3zlircA4Z6RClNHvJHAz3V49IdBLjbFDoVpCb8gKbfXXHnsgCc1RCqTUNVM%2Fssu6TrlC%2BHpb2OkOs0wAOVstpCLPL3AQVYBKmD1n8eubIMDPC2k4US4f6R5fvPPUrsuLrNGsuIG5GWZcTchQ2KBuwAO2VHaqY4URg%2B1LKLFly0Apz8RVALnd6McfiOJGlj9FQDOGTa6vav4UmP4AD9CB4Q57OnO7sKPp%2FuwrHVaVtyHMO6dNkrDoy%2BohazhTKau4qoiyOJs%2BUPsFb3pPH%2BfNCGl5kNblhXrL2M%2Fi8%2BXWmlpUfOjo6am7EEzGmjtCBYq9GYdhk%2FLMb0IDXuQkhOkrMLPltn83dgSgC4yHcSxk%2FLMuccND%2BKENKaONLTmiHUj8H2ZtkhmJeLhMBuNRk%2FnO1Py%2FbpcK%2FTN8YQcWLMXxc87IlQN%2BdNVr%2F%2Bj8d2AFG6LYP20WHJL7Aj8OTh2KqXk0mJi7U4oB19ccOxXmvYtHiMmEdNTdViozLSntCfjC4tIiLD5trQQM78YeZgFmGRJHXB79D4f0lho9s4xoFfFSYiUvtY5%2F65VBc4TgaquPOzECeObKwAE%2BwWY9ldZ%2BBOj2Y4OMTomtVDykfV1KVgrWYZXbebRhRZRWUMxyieN1ZZt5bBMMGMyMkGOqUBRdIv37yv4HxWJd%2FokGm1FpfaTsdqFPJRMk0lhRDLZPi78jk1a0hk4R3gsuG6xVd55zL5hV1Zsd%2Bye77hNX6ue%2BEAGx8MXZGfnN10AmBvCNKaLIZqYzjy7gDjW8d2z0Dio5hKH9gGHmeOlmvmvDP4EgkTOf6zltPJFmBqRwFCcpKbAU6d7T4wPuDC3CreCCuj4ZEIJrG8q7SfGrnVSCJtTkZetqw7&X-Amz-Signature=e3b5c31313e921a1ed1eefa0b5762b11f4b060b97bafa2335e2a321d6f565386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI3DVRH7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3H0XdibglVOcXTYnCdJWLFt%2FbxTY8YmtZF1D0QrrEIQIhANlvIiHM%2FrIKSPcIUXpsJmleZNkQwIpLY1KHk4qsVyOtKv8DCE8QABoMNjM3NDIzMTgzODA1IgxnlaV8VUgqB9ACzTcq3APKrs5tIc0K0RyUAC0xeAHdFsbl3TJh97hRRxrC4pRNeOvclxFKLJ9BYKeuNXhJxejCCjRxzvIFqwbNjT6W9DNJqd20ogBEXztWhBR36HmxdLl8Kf7ARsNIPCajbrsEeWCEYUpU4yAyq2Ie2%2B8WkUVJeu5FLL0gjf%2Bt6UZucHLZWohBojujnU2nYV7ZmkcOxRm2%2FwWYcobbghIsAq3H%2FruOyz%2FhLvQdema2L%2FQHIz7KnF5bWP5VEbnvVJhtz56heC0P9soB1CHIILbLXlyXua5JKpXfd2hPEZNcccY%2Fk8mUQz0nJjQWh7qSuThtxlUjieFomrZce%2Fr9pm0dmJ6XrCjmiJOlPXuHQVBLGMdzUc%2BZ048OdhsXbWGY%2BKE10e1tea2Eak28rNL%2FAi6QibGICkxhGceLRDGMjVVQn0YDYFNwVOs9Gff5xIGZES%2FhzpF5bQKi6FV49KTbc9XVFBBilqoTieUQbt2TjE51ZqhOyqDNMLAOt9LrxkpRvAO7sU%2BYW9TkOaripTYNfdTthvUYQzYNrDO25HMjlK6r9G%2Bv6%2F0l8bPwQsfBrx%2FcK2VVOJgSrirtT7K1OomXO%2BT5xYnRHta3E9L%2BYh7wXqVGzOfj9RntworoaNG0svfEsjbNyTDyi8jJBjqkAdWpxJfxoQRwnTgpbGWf%2F%2FxMuvaVdz3Y7TItPfrNCEDz6L8pBD4TUHlR203Khy7rQ6J6dwUmUoT9oP8mZf0BOwkReMARUk6yb2ajH0x%2F7XkVEIXZS2uyVsRPPtqv90Gb4TajCcLj6ih%2F1%2F5hZKOVvBqzoUXf5QhK%2F40dVq0zEYBeSKEFGsipkNtKtU0RqBWolA%2BkirlMJ%2B%2FX8vk691quLp9XOs5Z&X-Amz-Signature=626718e1407efc0cc8a16dcb1c66b824ad96d66de60a77a10fd1028d5b8a4d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

