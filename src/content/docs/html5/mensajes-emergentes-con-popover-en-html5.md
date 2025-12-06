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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WHDPIF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6QiHnapMn%2FFfFa4QVLxyKDl3mDYY04JTxjmjTPw9l1AiEAzWX103MAlQ5LKpZvDQG64%2BCWLBdNHxBQsQ7E2JEGKl0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBD55Veh4dVZam4R5SrcA%2BFyLBqhl2qKlWIpGZXUtdmD3nVqEJZe%2FdUmgH8g09A7yJazFZEvZc%2BIMROIKg1lcUE%2FD%2BrlYLtiOazBOyJ2NuoN9041H0GJnBJKc%2BomPjx%2F6akm3NblkC%2FyI2P6B1bbgCeOHSON6QB6rOsWjwFEQbalYLzAcDpXUkwRkbM5GFBS%2BgAKQch41st9%2FLbO6Zuq4UdpVcQ%2Fcd%2Bg7W1Fi83nV1h57O0pTJWBpX9Al8x16saDxsAaeCA8XTrHWbi0hx5dGDm5tGZ5sy9%2FFN1e4czPm3EKt%2F%2Fxzwgfpv4HJhyDtKnHoKC%2B0DFUclL7T9YfrT3m9Ow5DEoSmoFgenH0ZNQ6gsBM8F3IZkwIu5Lq9caWXKvyq%2Fm6Vp%2F7Dt80olp%2BkKKEsqJE%2FLf8Hx49oSkavWm81kT%2BTZ2bsx3GbiJp%2BUS6GmvWdaieQagzp4MsktQDmcgyTNWmSZa74j%2FL7cGpod7g7rHKo6q6ip2YTessZFgI9iPisgFueQgWfGRuU4tlOlCuNJBF6PJtOsqIZtZV0vE%2B%2BAfRaFklL6x%2FI3j%2FuOb6yz0WtCaq8WwzNiXugjF8Z3FW%2BLCR5tVUqeYXMJCRuinQB73RG0O23IAktHU9Y8FptcaXhF5%2B63IF7CwSOj76MIu8z8kGOqUBP%2BvxpY0obQKhTGuGGdXsPF8%2FjRA%2FqCw%2FFtHqGKLiIZCzIwqSUMz0ZZwUBrZQ35t0usp9F85xBLcgj0M1e7w1VnJWd4QVBjm1xWe1V7fBJDAcIGAXCz0mMzchaMm%2F4UKuR1G6faf%2F0Hbrk02Y2w6PuLZxAbyZPC%2FCK0Va30OmXVr7jvFzZlUMXk0u%2Bdbd3eItz9beIxlOoNGniytnqm3o6Tuek%2FDy&X-Amz-Signature=cdbe6c71975b80ebc629cd2123db8220af3673362957c85d2fb6fefafdcf60ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WNCQYFS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSDFQ8ylsYmZ30GJDz0g0CE2MWqhy5FWPA9vvkNFjaFAiEAp7p%2BAN2AwuVktvLD8jSAm%2B2qtodxnCmvH6Rs8gT7pLgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAOAfB46BwS3RyNU6yrcA0yQk0g4ap1skGW5L58DnXDG1VCpyYbz8Q28CzPwOUDpsBw7Ppx5iQell%2FQIP3vA4ftjZqjAKbq%2BbChQnUgZMaepS%2BxSTz3L0LjIhiFrxRGvjGxMoRHz7PD1jL%2BwfAcXUnVs6KxEZFuNcV2lT%2BvY%2BPW96%2BkjhnRTobyniBNCMq2FdaAUcGbL8nMZKaKoHjSbF5qiC2sdMfIerY%2B8mX09v528O1UvjvxBhyZTMR56s%2FCyt%2FuSqjLshEvr%2FJsJOFwVd4%2FbFYFzdjbv8%2BRtToYJOmcdJNDpBgdVVjG4W5%2F35Y5ybiejoKBR7KUhbn4TdibKiFM%2FHttbQhWY2XZt2ZO4LwGH%2FsjQduHiB3EXMp5OkK%2FAaYSC2W%2FUSNj7ilufmrmWpB83FQ2I8iYXiExwjj8app68LEaQttnsSoTqt9Zz62zRpGMeeQRujr27Q4vofk4OMIPla1BLIyrZLV1%2Fow8l8ShPcCRLYSmT7I0sO8urz8hoElH12I0oBqbua88Vs%2FG8JXr5k6McodPoRvgF5FUss5VCkejciC2ex8D%2FaL8CY24diOFNqzsMGhp1AGRxWia4jWSINC05wJQUfxH8oRJ3i6bB7USzTw9pAlhuW8BUq1tHnTTZ%2FiGG4usl0%2FliMIu8z8kGOqUBoVPNWx0RYfchemJVXbaAHwGjhSuL1I7IIgKdH8kgUcXPgpc6AMIe4spGUe65zcsf6%2FHWZ4AAaSZD7HuLDl7IRQGT6ULvoIPUBDrO1lQbSuMe0UfrigNJ8bz2WT7YWh0Z%2Bbf15P%2B%2FwnR828%2FXxacZB2diCP8OGR%2F73iFc3up%2FjF3Vj%2B3aOJZcgjjeP66Bi7vQLazu7ZM0jeNCUa4pMja6dl%2BtuVRf&X-Amz-Signature=f2a80ecfd8d861597089240d5437c8bd702c5adbe1f9cc4c60335bbde96a7256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

