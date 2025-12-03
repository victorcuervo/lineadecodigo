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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGNWANP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDNMD3OlH2P8A%2Fej2M%2Fau7%2B9oTkNbo4k8atdolGPP1J0wIhAMu58FPvAHRAjE2FzCZxmxu9doRm%2FNmLtgDwgO0M24dhKv8DCDkQABoMNjM3NDIzMTgzODA1IgwmySleXHa80jYBw48q3AOfNk2nBb7EVYZX3aG9HVg6cPlnpLg89OVQGpSisor1ihOL2bOUBbylzmpNhuuIFPHtufSKXizs3QsoChipaStQ%2BD2HfS%2FIgA83vjhxHgz%2FesA%2BFJdwi1xf%2FnOTnypp%2BByXluC2R5wodNrQMKAnKfmty0y1lg8CMrVvN2QYsj8bktg3FaLz4sN0nkfwgTv%2FlEEHq%2Fz8tvnsFzZf8lh%2FRH9cmJLxWwVF%2BnMj2HgMYpE4hN80DoXB%2FQXYSpihZr4%2ByKbVkMxuPr2OVxwzal894DpPryzaVJZF%2FPs9Yq%2FoPkzqqzDIL5Td0gudZxX74qsOZ%2B8uSA%2FrL5y4XFXsnnwwBgVGnv5T6uX4A6HgDrHJb3hAf%2BmlmDBQmTZPXDcGcNRvWyMCFge3QDhCQol%2Bh%2F8sKPeB2hs%2BVxmIJkHtNi8FeX8AtOJ7x1196Vj0vh5Acdl43X5zvMQgsoPByiV%2Fa8ArcViUt4kTKLGdz%2FgTLOlG6tSxu0cP4xoECpnFFIh1kmIZNpPR7BGVhWjDWibYIbrXVeOUUlLBwDBoVzYJ85NzWDaHi8NYDgM5wcBOncb0CyjywjsF3%2BgV5fLARJs%2BRUhqFTydHrTFsMY4zeMNNy%2Fgmvq6rNrV%2FrEncbADViR4zzDplMPJBjqkAUREhAuZPFKtjobd5hS%2BdnxnckgfsVYEjp6T6kWO5DoeX4RGUu1h7DP0KGFPjj27O9Vpkn2waiy2FAmV%2BxggEuLEOrhnnNIkEd44Q2U0Hv%2B3I6BIyovBJ1hrG0VmWDY81SMW3u4kIppZpKXUPGwxqQYNKxnXynR7iRtUiGFbxNm%2B004rJ3zwgAZyLnFCVhhM03hKp6ZHOmoNknBbrFcEOPWlnp%2Fx&X-Amz-Signature=64e7d873170b4ef9dbd30a022fc420839995fb4ea9106d0f78b8a8c7a4c38593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THKEL4UA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDRCTY9rps49g8I8oiNwW8l%2BqBOxnDA7OJHDbqM74lB%2FQIgBWIMaIFZWnlsoLYGXYOcCykVqe0NEsQ2KITPFvfopiQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDI7udCb2MrGdR%2Fln2ircAyQz6VAnc5pyXbUPiS4Bxj5zWYMz2u7%2Faw7omQ8gY1dgg7b8EOrn%2FXB6%2Bx3IZxDtweNfuJrjDsV2Mr%2BtDM9qE3JKCDt7u4sY7gwo4u4cfAYwabkGBaS4lU2KIBwdkKKiYS%2FRazRa2jUjV2dOMB1FGTQhwyVsSzSykgBJ7RHxaJFYj8XCX0m6aiFg2%2FPwr3g9%2BzuZ8iAXsDUkid5H%2Fd7uJPzTgEUnKBQzpa2zx8ZNd5wxHaHceoQJDZS2WhH2krTl55KoFIHOReYDkiBk0X0mtZjvwfglqHD9N2%2F11azGFGiJXkQYx2s%2B40mzPdUkQIRe051%2BfQyedZ8QWcDXZjWIW5BU9YubEFVY7YDBHZ3n7A%2B9mapdnmfBrZwXgBm2X%2F%2BilJCD9KgCcJyIpuYpq9mikk6LNqIZxTCpV9aE4njwoePCRl74HR4u0uZkwIHa84yn%2BdgdpH8R3o5bp8RPfMoKLlYjD4%2FoyNVpRSOsm2kRypGWY%2FxSkOLVeth5rzvMyCtd90j7rgcIVn4yPschP8%2FOx9cAJ%2B3C9kIS%2Fb8fUsaYok1pEdMc9USNSE8HZZhAP1NwllXmX3tFR5jK%2Bw%2FMiRvSrJccXG3Bt%2Bz261AJpZUslEIh5nDI7QHHn4s2bt12MOKUw8kGOqUB6A7BRVZZXIYUywI5C07HJX%2FEjyVuEsZALkorJx5%2Fc%2FJyts%2BkOiRWU7DdNFHXmaL%2BkBWy1McPxLwCPSR7h12ObuQArQxxGC1sRXnnw1G34AwvSRgj29y4njhvWDCEt9yKVhWTQORtW3uy3wEuhZkcDbsxwqEWXwMCG8v24IfRXqgPAxIRQ8XYEcSwZRI2bFKwIHVetXUEWIBtj3PT%2FoQ%2FMU6Ueg8Y&X-Amz-Signature=499d2906550c2c182634fee5a9b1dedb8187722874736ba4332b61cb54f91a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

