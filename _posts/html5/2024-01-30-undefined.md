---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466466ACCAO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAjNZS1%2FfcIKbXIFFWdazuvscj4Bra0kRPfhyvf6vip4AiBq5NtENV5GqdEh53PIYOoBNcdLXx0m6cMVEjvSlp2LWCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMQY24eHPwk6i1C4YXKtwDsNF6vrDtfZlqxSp6QSK29df9spC96HwR5XarwEJXLJTIi9YRHE2WlHw2w4XP%2Bh5tukgRXf6yIFxiv%2B2ZtQbQHv1VIy5MiUzVlR4f%2BTBleyjPI%2BLeuLPYSa05EYJvkTsGGL0qxOpW8MtMoojFv8Nn3UFltjMZQ3rBkIV%2BVIqNj%2B54Thi0o1bYGYH%2B592XvzjmO2VwEO3iMxkxgnZpjqXiBJ6bxHNfGOA3Ui6pkNQDTSqJ6QhDhppVtqgaIqoteM588ZSmnL5D7ymMAc7Y3WALirT%2BC1KOmzHqhvEip6CPGAcCrur1cVKkPJ5g5tGPl%2FYQYvihFl9AUFh44kBbccq8smiuYvMeTAKU9NGuxgSsmayxWH0271%2BVElild6CpdWYg6q%2F%2FB%2F7a3bmwgRqiCtS7Bn7itn24eHxMJQrAkZsCzhbA4HPNPnxgHd3z1BF0Dtvs3I7Uk4eL9tfC7lAWoPZfj2tezCQf7iCi5RLqv7gynh9ud2pD92weIYYV6aej7r6Tt%2F4oGpOP2GRUR0VihMTFkb9b3hzZoF6fKoxGmd3rAS161i2fgNotnMYlfPbVVcWwtGUf9f%2FgQ2pvN%2Ff5NQedDp3Zt9s34N7TZGIMwUotpjlxkZOL7izA0d01QIkwy%2Fe%2FyQY6pgHCaCcxh4UoryMN0qj92D%2BgV7Yrg1tvLavYWGtGuP7iZTr9mBehABGFaT17k9ks6HQIjmVflvLrW5QsFmFGlol1vUgFOAOYRlUOnVsf5ppfrxj2ch0JDPRNzTcZ%2BM%2BVwmYmo1IMJM3YBhORhIhBlop8ubIGcMXFy7UE%2F5yCv8xvufVaI8EwWq4A2AfYkf3sW9sh3xERSYV2by%2BUa%2Fv789YUjviV2JEi&X-Amz-Signature=0a1a2e5e1b4c8699e74c57bb009ed632d9433785334ef10531babad4771aa5ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5JIEZI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2BPZJ%2FN1ad6kvRUntWxIxRg4xyCYk1C9fyAh%2B9zzBzUwIgXb6Fx7DS0eeudmpEAR2NuWv%2BoSIrttUwnmYIUtJuRzUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDWkcrcYX8Pbp1Ez6CrcAylSlNVTxY0q0WfspjDmDqEkTPFxKZQWieTrks2TQEODunLSw6TkTA%2Bn41M%2F3z9JSfA1kS5At6jQc7w2ljPl32uaMjha6g9MyuibsaSxECM30eOZhdU3%2B%2BKW6xe46VwWhMkiuB53xTYjE1W7TExFBAlC7FauqhwMMkyPfbKCn0pmcCrtKiN%2BFlBadL4%2BnBXhXaOIbtElB%2FHOD%2F9E8zP5vDyI8ExrxlNist3siNZTDkoTE6%2FDO21Xv41IjYuIVFZgFrHThGhz2yo6EBzh%2FZMG7edwQbUbjQdz%2FxV2pNGGJ0Xr36aiaXfP74osGYHljAgl06nDUmSOmWgGy%2Fzvy4dIs6tGyO3Td3Ls%2BDOg4a7K3uJsXYmuzXfgjwkpwNmw2tKiqlztwDFx2rZU301XhvPt5WNA0VKa9ii4mqEx8CzmTWMgXaNvg09xibXtRATva08N5L%2FnBgPxULOQO6u2U1AXoGhXv0PalhzdK0uMbuSTjEhb92yxpTvwZ%2FHoVE4RhXklDePcC7B6lrBrxUTDAmlIgLah3ndTBQ%2FwMujj%2FOhT56J%2BKou2PgnslOk%2B693SfiDF%2Bx%2BIjFNHX8jU42PHitBNm9hbmgZ2neXBT4pS5NopwS2fvpxPAabYdeX6%2BfhhMJn3v8kGOqUBTaSGPltBOdehqnzM3YvzR6gy%2FpF%2BHlTXa3IDO8Jj%2FwJ1tDAeLs9LYUmUlH4C87YPQ0qjVfeV2bQib9mk0goiwiJbL9qZVak0hbDSBd8RLhK0uyWiR%2BcYeRXeL8DDLErWM7HfZIZM1piuzkT44L6gkcMop1b%2FzG1hr11d9lozUPcu2hkflgh2kGOeW15wEwllRyo9V3wbD%2FJEeB%2BNBwMmFhZj0um1&X-Amz-Signature=fcb6ad22e274705ba454d22af9900dc069ccae1ec2bc8a4e0eef84d5a63506c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

