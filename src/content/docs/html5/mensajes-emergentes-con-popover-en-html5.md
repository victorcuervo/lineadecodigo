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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV4JBPNF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHGOVJ6OcEeUnVQdLPCSN8H5HpozwfBYIPpn6joC3UpwIgDEDhCDqcFyFyFjAqEMSsLjyJVeKyXeMWFfwwakB5WhwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsoaOzOsa0WiuejYircA%2BzaEJORetEE34igx0hCOszLDV%2BB%2FHODaZ2NYXq5aYAAAvr8nX7cknI2%2FmW00zFVavbYaqtX7OCEcfdKYde8kCBuVLTOSYQokjzmja9ADky%2BOXRV4kaaPA31AL0wi22j6Tuc3kBqnLsuuNwHPmbSRQbwu4p4GKSE1HjXD2KPcwB7RUyUgZgj9Q8UAI%2B4gOcHLdVdtqZU%2BlgiQzkYYGHUIqHZjGY4kU4aJ%2BcNwtaWRCLmvR8Z2577ym2kXlYE3BOhfDJRgcOLZ0l4TLr%2BU9G2xPElp3gItEd7y1SHeFKXHonOm%2Ba0rU55QnXWByfWVofH5yVcCWNFzvXeN4j65cKhOck8dUdjDzwabDnGk6n7CtkWTQMmNCNPYCazAwckyf9sFk%2BoTvPtXgylnliIaGUhGNPjgunHp0CmXyv9rKEh0tkPj2rbBIXDtjLMlsHzNZM0fibC7Fs0h06nhITOdPCvgBS0Q9V%2FDV4hcjhZPRvr4pE6rmi0aYviXrzulbZMUFsN3Tn%2FtxBgCyWONu1RHhRv72%2BdOPLEW79mz%2FiVBTrD%2FroLxq8GYwUliwcZfC2d%2FXDTqHtiDidFdXBZ76IUBP%2FFc51p3ef05jpyUOQFCaZJ8zggYUwpYJF2uTNVRXEZMIbE38kGOqUBrb695AKZxpBTiWx8DM%2FVv9n97PshNhm8SKe0Ak2gng4RNq%2FfE4M1s79JCcas3rkfB7s4M%2FD3UWx70Fy8tXEjN2w5m%2Bk08Xj3AwVzNQd0cLZHyxnTD%2BMfhlxteqJmiRRtrsc5rC3BDYun2efS95cuI4vYEDZmiVrDjd81ASK3K9WWdKx6LQGn5dOs1hxb9S6JF9eXz05HAMksHI5eu19iPYlgMJrB&X-Amz-Signature=4543c879d6445c99ae08ac7b50c2063dba8edfdb1096d1ea8e603209dbc83284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLORZSTQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0I3hefYxlORvCM04hxXIgpjxKuauCpOC4qtOkR2ojtwIhAN8UTcwJ2L9W5C1CnoJENm%2F6Nd8JgV23VXDo2kITifKuKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywzqWAtxFjxgubv9cq3ANipFQPndCsoX%2FBGmi1EK1wkA9SWpXWekNkquCbVTQiceEZm9jgHMDHrg1cIge6tLfZH%2B%2FetmlvdN%2B%2FOQMo3Qtoo9IPQv7fMMU4BmllQ5eIdyzO4rmaI%2FegMq1dpMFXxRLesiOO%2F8YNBPu2Qkh%2F2SkmvE%2FfZBD9zkgUpqaS%2FAJ8zFCBgT0UK1ht%2FhY0aS6U0Gdaey4m3A1yMUPmKhG%2FZc0Mxjr0r%2BSN%2BXfSWEHsf15N8QlmQLp5EY2zKjG4rrd1eD5caqyDQ6PjpQNrdKBgBHmHtaAszG%2BxYuY1J%2BN45BcsGGaBKt43JIzWmjHA6bM8J%2B1OcB5r68wqq0A2ypdoBp3PmxU71hLzuuRWde5N0oWDjkG2XFsgf80n2qCKN0k6QF1km2YT6CsZYH%2BCx6lam9sYx%2FyTUVtLVyqVAsNwqlsmTCqd5t7RiXXRvQlPZqWN%2F4KgCnUb3iKU602wkWEJ3r%2FFtUFF5L05XLRZYEx6hv66c4GFoFYUEKb1XBGQwNlBvsX%2BqoijE6yA2iKZ5trRSZrLZKbpEe0rPVhKC%2F6mxyjiA%2BkwyXbtaJmQ4nPtMeH2Thopbd3gbHT%2F8JT%2Bcsjy9dk%2Fckh5HyIrjRWtlEelBrgDVYrmu6kE2dDcB62LszCnpN%2FJBjqkAY7Nw53kkLJUtuk3wAvP%2F9bZFW3EeFViKiralL%2BxjWqY02yS1YTBWeDQczE5ZFXOefoWHmsL0dUKYvvu2yF4c9BVHZzIIB4STrtfos3u8qiLOZlDHLs25R875n8muZTery8blPR%2BZdejeYf6ALfkHkQor%2F70CVZ0TS%2BZhrS7UriQhpFpKCiUibPdnU%2FLHpjce30H%2FCBUPquK0fHKlMzLj9x3E5z%2B&X-Amz-Signature=9a6030aa78629d1d28f79c79b1d9ad556b047a9e3847099e3ad0af00a6b64c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

