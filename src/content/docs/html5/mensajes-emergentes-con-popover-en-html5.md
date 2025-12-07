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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVYWDML%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0UCPM%2FE%2FtnupiqPtWQMX0XsmRIgEGxHGNnPSG5Op8LAiEAtVRQMd%2B6r4BV2kRz5SSaRYenX0lwZpkVHnrJJLVoFm0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0SkPaBCcyYcJJvtSrcAw89wYJlaAx%2Bo2TVD93mfxpWtzJMGZ7tk220ZZjhN7gIQdD%2FqXGt%2Fufn65PnUu%2BYS%2FRxB%2BpZBsHJ9KeSiJItMYuZmbIAaVMnTDxmths0Bq3m9Z11AAEGvzIl5L9i3ekyLxGZY5oakAL3IcepMVJQEVH6LSP4FYmFllSdnS1UlQY2HQTKgIptWeJzLWfnnCd55qYnJSmHFTkGZKQLI3ilkzZnQQcdP6Yq%2B8dCD2QpP4KT1BNMBHedzxvLMctb8PfRF3qH2gsEyKHz5xp%2BdnYRKh5SqmyRFPC2d1iL%2FvhDe5%2BgVI9jSG20nRfu%2FH%2Bsa1z5r7TFUNDggi4OcWSTNOEIw2MOATPlyMzDn50RkukB1OtLBGWsubM7%2FM%2FyHNDNvhIzHzW0WPefyOCpa4EfWHgAPhsATahoOKc1Qqh896Lm7qzKqx7Bn2LJFTs3rb2SOUi0%2Bvnya1TQtRjCwdXe2gL3SQFKOLHMsc3UyqrKUG8%2Bo23YGbTbOeLGaPd%2FW%2FfrprAMAjsiOgsoFMhKSbKdrBqlmErNOsqILR02TWnEkMIghuFXGK8FJZDfb2zKdFLJWaUkmTg%2FPumTjoLozCZGckvafSjrtvutvJUqcGsbg85vH%2BJTg%2FRyj32tXKmoaNq4MKGZ1ckGOqUBEcWpscsZDhr%2FpvQ5Q4MQ9kY%2BRd1liMBYdpqKveaWuFHVz0YHuFV97E%2BW%2B%2BX8j%2Bti0XDZUZq2FXwQGm9CK%2F9RXE47zmHeR87CcohhKBVr8MLxTs0mDLMOI%2FGwdWZEgHf1fFx4eDssMhrDjqf%2F6tS1jM84e1RUW7QC7xAYpLz30wCPOhTU4wePcX%2FNBsKecnN661rG9naBpp2FvXsaRbplqb6zLoyV&X-Amz-Signature=62bd3d8e6bf450c7675b9b9829c92e0c480e768a63ccb754be248b0ceab62d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPZEB6RB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvlf26DEueMpwTDfwtmvFhoFUXPzfCq9ywvo270th8wAiBlo3Ytwff5aqYhTj6J91mgcvcpfpdbwx8lVsAvY9o2USqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgyI79NUiRPpEC9DrKtwDRRoUZfDtsnYITi54JEDYbxgVCcuT%2FNziXGUD4WiEKSSr0jyJ8O2%2ByOqTNVt%2B154hBvxcRd%2FFNBuuSQcSzAFHr3ONbpHDoTWIj3JyreQNhOYPqqw3hNC%2B2n7RWTDe7%2FaEV73bfsLpOq1jDzKFC1BJWX0HNNce1U3xp%2BdT4xm4d%2B2cJRPic5T3papMh9uPgaE4k2jGX9aFOQjgNSqglAq3XlFy4FaFdLjNJ9%2BioKkB%2BlIpzYK9D3o7GgDAX6vEo1Q7wlB1qa7u9AjkgQ6a0dVqliuUqmpLEMQApAIgtvHJYiiSUw1f2Xe0Ag1JrN%2Bxba1XwFrcwIZkWi5ZH25qCNoGHCyT19Pt3ben263%2BfODT8LifVoot4IsF4oy7btPUi5NbQVuJkFJt7oHJLMvK769n6fyb%2BYkG48p%2BEvS8gaplwu2OAn2SJscCf5iK867gb7ZSjZeygPsjLnnaHV9DJWjEYBDxZD0fpU4nrIPEAyDQP4%2Bv5BM2VlCQIN66YZ3YrneRJO%2F0mcx6DOCATdnD5k0Vj4paCYIquQIR%2Blg6NJnu%2FejHwmLcZMMM5YjHZR3mXHItJof%2FjH3jh%2BS1BlhTvH8N4A77kaKr0pIXduPGgOAdHWy2an8zAXwztLUDBkYwo5nVyQY6pgEBPhJcWJ1BMj0zuiOW%2Fy3hVIStXbfHnfthOaO1TxxUBzl5%2BIC9rneLWKsLFqrZMV5aRswLW3CTGYe2AzqzKeq4AWx1jtutpjukDhsdnEC7gYyd537a9%2BIYVRvOPmbiMGth1AHocqmPODJel7aOToekSHiO4DXB91myZS9LsdXDzGbmRM%2Fnxkf3Cwvo70f7l%2BSKy1BXzOIFEmrSnaB09%2BZrKnv%2B6M3T&X-Amz-Signature=1743ba5c82d3a1d39cc7d4263789f1b760cce91d6c61521ce8329b278cd141c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

