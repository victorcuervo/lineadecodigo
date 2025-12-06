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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MWP6XS6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmhvWOobfAl4gJQSbu52F03QJUWShAxfX9NzNFBVZyBQIhAJcq%2BSB1%2BIWcjPUBNN1h98evS8mvVQOP8qTDHqWgWpPcKv8DCHoQABoMNjM3NDIzMTgzODA1IgwLyBTnoCgOulQQLSAq3AOU%2B628haafEIDmJULwWr2dMh7bP9CnBph8YmSDpi0MxKrfQxzipLEKc4OsaLpQxtou8Ht0kP9C%2Fzrir%2FzcXSE0tCoel9Ab1ad3Oiq%2BqjvCY%2BLY5MRxemxzBMjg9FcQp1hJFves2wgTraqlDxUDbptBca7vNJjeXlCc59pXdJcF0USDMP6Sy1MSMvsOhYq%2BEpmfTP08Uz9de47RXkfKP60qltzNRZGD7qEw11qMyGrQwbj1D5JYY69vBxlG007%2BlzdhU1cq8u%2Fqjy6F1fHZ36uDQzw8ENbckdiqExNw0d1rZr%2B59qeNxNNoaH9qfhpVWVt4sVkHxhVbXVQEafWL3mfo6VWWJeYWZUjxIKqCIVmonzqZ1pOPXXx%2FaLRGk6lH7uXNsm4LIfllUs9wH%2F859UIBsi27CCEm%2B7TfHn9bsS%2FqNUEOb4WN5ZNvPSoyPhPv2fwqmlwLXEpmp7%2FxiuHlZ%2FNKY9vfKUx%2BmQ7B2kttP%2FCDjC6C0QWYW%2BsHfqVv1mKrQytoko8oUDCJq4oerDio1yK7%2FJQOmlTkBYlyzuTdh%2FNh2nAkhZeLYNPEZ6jPg5182Ajb53ZZfxjf1p7W46TPwDt%2BBFO84g3%2BOB6wAL%2BBqBP8C1T4tzk55n%2FCB8IRQzChzNHJBjqkARrhZ%2BPuI86tnLojc4dZlNNBeEj03lOOBCZ9EOMGx4vE7LgtDU%2B%2BNv7PVsiF97bE8UfSBYDHhzxYKKYfOEbiLPv1%2FIvuZx5XMRUHiNudqDzzkf8LK%2BWPu05eKuithynzt8AX%2BhaKdetZUd%2F4FJez0M77q0Msj0JGR0fKNT97uXfVHAylizjVyGvVGoZm4VkIVwBpzOa54QZJ4jEnaajVMXxuYowl&X-Amz-Signature=856ed6cfcfb21fdd211d088ed49782c4a564c6dbb07fc4377943dd25ffb955d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXTNT6VS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoLjsJooE6KC2imy78nIF%2F5JjrK%2F1wYfY7%2BuOBwJpXMgIgd5XzM%2Bg7fvuMJjuji9iHBe9c28XT2A3%2F0MYO6T3Sb8sq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDF9nawcGdzRCMnfQ%2FCrcA6GrsQwHemGvk9xj%2BNvyxgHCBpoKrcCE7YCw6bXjpF57oUyg3%2BWhfNVBJj3vktQtUVm4gIOUgXYcFTmxCjV2%2Bzn4MC%2FTl9niDbE0WTUEszYrI5wHFQ2At4ufFnnBlLmHc0k2raOzQfjkKVioAQKZvVv11ZTxNdSiWz5QIzx1rUYZZzZIGzOZmOXZfkBpFYwWaDW0VetyV7pT6zvvjQ3eE9zxkli4m7%2BNlCZHpTUMUosEHGfmSuAlKfAgYEuYGjoeIfYQA5agOBjXNQIp5ISuhCEZhRNxt%2F5UshVYzmkvcYUaUwz9VoU%2FS7MiBlAB4rxRGkdwDMoxnAwwbm8XcULJSwsPbUkS%2BG9CFFxjecBqezjuRocLrsmA8%2B8iCUrW%2F9h8H94PZIh%2FjqYE9LLzJBOSO9ZOrUogCib4vFQt3thuU6KpsOjYPSr0WYehb5y1744JzW1FSDJQoDoc1qcAhEUw%2FihpTM6ZzQ9E69ZSEk0thak6nHt0VaG0lkd0rsarki%2BGQ1yK9gYYwttpm53FzVZk4Zwm8ksZMlw1lcfxZElGhbBW9h%2BRFmhUFuBvLNXob7Zg6vnK0HR3OayAHdTkiyBu8EpQeNKyoC5vJuk7BP68flDohuRx5Llqlo3Mv2CVMNPH0ckGOqUB5iysuzlKvl69vxmaML0U5CN6J5HfJRVsdrPy6%2Fc6jGU6K4GPyYZxiLsmk%2B%2BSLk9bjIfVVGQG%2FaZBxYtaM%2FRPMCZLMU5DyuCbEa2Icaf3ziKPVnvzZKUjc50GhsgIVAC%2FJwdyTq5wy9JO79hzfKd3e2QeNH2QO8zh1Tipa2JyJfLSHrVOIIADv3SAFcouYBwb16Eq0BEWTZ2rtzf2q6W9BBwVhYvP&X-Amz-Signature=328643eb51638f6d18a8eee072cb9b65872513904e8aae5d323ec8879d26d01b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

