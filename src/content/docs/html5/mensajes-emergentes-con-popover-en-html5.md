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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K3VBHLH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaHwYo1DukMuH2hd3Z8hJUCoS3crSpe0QAsvKtMiYvrgIhAIwrevswvVW%2FjfbBlt8f%2FIGfuwPccbDw5%2BCPVCGB9ZOBKv8DCHEQABoMNjM3NDIzMTgzODA1IgxgKbuzmOwfCr2QmFYq3AOARW4RHWu7Z9TsV47vyJBpkFRw1F2QcsZwEEDdD3gWRy9YFVcO%2FfvcnSIa6aN7iQgtLvZfonovrdB2FhsBf9sEFMEk47Crj%2Fi5I0PlwDQE9VMEDROspF8nBpDIzCFMc5DLvHERIIkmmyhGmQ6D%2FICWJ5mXEB8oq8OjMCwnBcBp25SiuXn8x6DqaunsLwa6WyX4%2B5YlGd401xi9YpG7OZg0R422cTVuS4JNBS%2BXeFPE9NPYAty3zpMEBk%2FFNo69HMDffEzzx8k9CbtN6kPxHD8eluTdRUQ8nDk8RbwIpCDS2SiFSBMMdmGUCZQdkqD7UftX71C%2FW3FRjEv4Ru2DDF5uMfiY8eRSGCnxLz%2BRmVlDtf4muhvIt0QXZF42mRfJ0boPM5VyAPwq2Au7ciKy1Kk%2F4cQkMW5zHG1N6mHoN%2B%2BLa%2FeAk0xlNZtHui6Yd%2B3Pn4f%2BWkk%2F1N81dvVzOlFDKWCV55PJMT%2BCCKEW2u6t9IO%2FCZ7iDJsXfJru1OUxvu6RrX3qTzujcWm8Zbae9vx7ExQrtBwZ%2Frnz1NHmhzZfGTeVi2JXuXwfWh%2FgY%2FXJ%2FWV56lRrlLPKYJ9RLhl5t54LSKTU1DX4OYf%2BIIIcIK00GJtHhTdKOYnVoLtSF7F3eDCzvM%2FJBjqkAYAqVnUhPwwnJdgvao8T%2Bpf6Rf8hI6i0obGmnv639M0DYgg1AgF2Wncsosp87QUvm7qnjLN8uDKb%2B%2BFMg7YoDkDgm7hvzieoye1AtGKdgB%2FKJxaVLtqYdwdv16YVH0GQAssRL5%2BkPgQIdAMePCxZfS0x3bJKcqa367DLv%2BDHGHpxahgysMxgUFBXlAAqc8jAQ41Q6UZb%2BJtSzJKIvKYnrcRpqG5H&X-Amz-Signature=b4f54096050e4407964a6a3dd5d77e6b79ff0dfce2658b332e4cbd9d18e148e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GNV4BAL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiXgWNyd37%2FS4xVM%2FC8GSTmJGIeObSH8PX9PMQMHaoLAiEAl5vS6Wpz8WdltIneIcfG9W5XgRra3FV8LUUBKifirGIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLI%2BCIvYE0Ps7GQS0yrcA7ZpzPgB6Fzy9%2BThtGk86DHS250LQS66hj8b7PvsoU4lLMZJPYC3QiEpI0Lm8e5NE7ppVuCGaUKGYjS%2Bnc%2Fy4A0OPZy0OAa%2BgM69FHaTqbBbDCGVF9wtKPXzclKtO%2BjsQdjqMG7U%2BpoKvwRENYpt01F%2BwvJVkmaEW6ZbWeEicKvoLrjspS5GXnDOIfPli4h0mwE8vFNw3TNBttzIUq9Jeyyci71tKtR5ACYg3%2FGrwPtAf%2FCw%2FVMGN9Q20JhjtZRmgVAu36qBhT99yEwEk3x2k6Icn%2FbhEOeYb0Cvk%2Bm9bnZrVpis%2F7lIkLiTyXKE%2BWAcnCQTW6X7FzPR6AZEwhelV91Un4ZbDRcpZSA3A9xVAjT6L1o3B%2FD2So8jGdrmeqpmltK6PzJZoPkPiUzbzBa4JmJF3f%2BXdC8VppJBdto1C7BUjBpaTCGpMF9Kl5sjuNa1oOms3pEGk6ygqGi46g2J65LCilvzW8azipaD1%2BzwoldaUY%2BC2trAK7wZRebuMsocmEwMrAp22uxtr36Vvh1lFDIRU4d8QMhIxUVVgtRn5plMalCPvYyMsN2Jkop3Ec1zlqLt3Lud3zpxUDCUGt7%2FjSWcRX6Hyzzef%2BqK%2BexRCWtE4MPwYiYeWcoDcJCvMNC8z8kGOqUB80nAzZxVKLcIZLIPTPnlOitNclmFC3X8q50NYbJq9qgvtptM83z7DaBkDWb%2BwDbYWNheUFhIT1FRQEqMeKH%2BYZ4k8Hf%2BmjkvaTmRSXgqJ9l6pjBYkwlEwauCrzGUYoOORB%2FlLNmNspMb%2FShnG17sNG8KAFVKdPPso5F36Uu5ijolremEsGv2ZV2%2BWdBxu%2BQGrkqfqqa4wYScq1VlVFsUYKBICwnN&X-Amz-Signature=27cb720281265c7877f6140567798dc44d62cdcd34875742ed278a61cb72a9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

