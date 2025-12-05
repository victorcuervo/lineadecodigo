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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4N5G6T%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQclWXuljLHUWYOFwIbVjARy5jcSIvoh1bYWNmh75ZFAiAE1mzj8vyLji%2Fr%2F%2B5O2v0UioUzm3Tx0PlatxDDnS1D%2BCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMeV%2FuDfZsRcxy6fP1KtwD8uRmew%2Fl8xEZc9V38I1CWxQsCPOTEp3CceKe%2FBIkdmOS8yi5eY9dlyY5dmUppw4GqUPAtsoFrInGiEiBAXELFg2cKpBzIggpYcAMLGMtU2T7%2FRVY7qeB0A%2FwBj%2FI9l5NtA%2BEqSl4pIo2itU5fEq2J6aQriYMwHw1VnvajLbD7U7K1kgvOmLRytzZYFlR4P%2F9hz4N8jFiYz6bm8NKzSb3K9qZmy0plDqa3o1tIav0gP9nPHuio3%2BVOzuCwsEJ7muvMmR%2F79%2F0fjLvsiuYpuhRaH0giVK8wVpstGMACW8xd6tqPZAGgxzUPjr6EQDuWFIJa1OWBbF4prfsJ1pxxWtZD1OlWa1osgmMbyNpNSjHRabt5qr%2Bi3MraxIiu%2FY4KqC4Nz8o35caKqoCwfvbQ7zzkJE1lRg%2BAlF0qLHxuzIWdsZRuM7J73sq6kbLTroP3Eb04CKbk%2BypLezHomhEpYuTVtVsoRGDUQlIEm9ZVkwODH%2F%2BsZdMbUq6796iT4h8Ty0%2F4NVYhYWU7XQrXSN9WcNb2AovatYusqjcozFWJdodTCAT7jZYYUSNJY9Ho7o%2Fz6xTUQ0mU9Ce5k5wvbDiSYgsWiWRE%2BhaYosGn70Y87VXb0xkhzhyvqc5y%2Bk4GUIwjfDLyQY6pgGBqZZoHEwL03wWgHiZ74LAg8qe58qORdw2CeBug%2F4pJzed8y15af1LMaDXvOlB%2BSBzL2ldc4xMXs7YSYw7TP7yiBFnoiK1Saj%2BnKgvYkG6gAoSM0H96EewdkwzUbwjHBlk3T7Uh1hnCIFwgcv2%2FT1TKxGkObMRyzHvnl0jHgVTgh9BMTRmf1EeRbHbclH1gtVtaYCJ9%2FCEuUnetUfJUpDsdm5dx%2BSg&X-Amz-Signature=555ddde63c637cfb117ff577ca7cb95d3c57521b5e216c2d0aa94aec1b5d8c84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663YVOJMI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb0lDqoov%2FmbMxzsK0mSUDmZVYbXc%2B2A%2Fr6FJP2EnFMAiAdHNdpsu7A7SpJvcIa62CxJvlNvqY2OIXYq8JTd8pc9ir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMzbVMHtlJOPZittkpKtwDdh2Qz2aRH2bkQCGdQM%2Bsil68heG%2FBKIAXD4H1bckbvfpvdpBcjyny3Pwn7MTxbpm9hY25Td4%2FOvMdNLyA90T5isbwC%2BUY1HMkcoyrDPy6rzq6amTb4i978Djz8X3j8JXGrvviDEMkxMDHXL8XQ3DeC%2Blz1wYJrDtC2gRt2JpHGXAMucWKLg5ruyS0qdFH%2BSFHsSpNBkobzv19hv0enKbukdT7C4Nn1XuBGA1%2F3HbovO1l%2FmbmgaRBTaSttls%2BjTpTg7jKw2mBc%2FFpp0WfOq%2FRv9xZ5I2dQ353JaWFJA3bVRMAmnQZqXc8xcmfRjAZy2t%2FY8bqWHv56A1N0ZWLg0uwD3XdEWF2nSWeibea9AHGXZnR%2B%2BVAjCzqxMiqtnROW5bHinx2uAImDMyGOJ0S%2BTD%2BlJ0XLOSvHNAck4TFvfN0ICII3vhmOrslI9pWK1JQY5%2BTobHI2DNKe2JbkLwNu2LZgXRY27EOid8OjgoQk6ibazY%2FxjJENvdsHNroEp3xJbnrsH%2FJcSxEviEk007%2FdwBTuYzgnTxULRVnU0gJ9Ii0PRQJpei8%2Fyl%2BP6zndNdxXlZP0ga735myH%2FYS0HMEckJ57R9vzlZOsXESJE6znMauMUI1NjmlBsXAPbEFMAwr%2FbLyQY6pgGujoicQJUIQ78sxTjYXpHeirG76It8ESV7qkXc4VVXKvVs6giOR8yAS8v0J1suPhelJat2XXet5H7nnv08ByJCMAlCpjYfoQn8SKcAsFL9QdSmSo86yXzMRoBaWlz1Wxy4m09Ss3AxaK0QFH3HMxaOde9S1wicJKVT97AYcWAerD%2FjC7IZJ2a0%2BRJ5jaQ8JW7G4Zc5SO74L4TPm1pJMBO3J8u99o3p&X-Amz-Signature=58d6097040dbe83a541a21ccca3b10af5ab902c3e213f006a7c3a4d0f6179629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

