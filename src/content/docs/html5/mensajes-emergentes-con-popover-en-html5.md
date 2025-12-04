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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG3MZVWO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD8WgciG%2FKj9r2OsiMdenfwnaHktYz1KIBWYkHDz9Fl6gIgQFgsZhI8CKyzCPmBzAcKFFQt0dZb7Q9PTieailla4GMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDZop5xSVFXnU51xUircA%2FdCAneilLgla620SNlv8y4rRiJTgk922YIDlWkRgGQXCedy2bg4EKxlK6Rfy3pig%2Fqsg0mFonI5gh5VCT%2BIcIP5P6ghcgm7nTtBnaPyqcMfNO3n2P6XP6bzmQeI53PAkkF93TN91qREJtnmk%2B04o%2F6w7w1MLzhDejx2x29cgPL9YR1%2F0DEUVHCKFjV%2F5wwEHN0NOZnKhUrDQmSnvwNgH%2Bqiq0ExlsMO%2Fe0vOWTNfBcYChDjmAtbfnp013mBdAItpBeeVl1Vt5MtrqjHVaZ6YylRwj%2FlRnNoYov%2FLKgtdrDg84ukbzv0wnNuAKMXsNnyLG6rg2%2FebTKARwWhSFTxS1ToqWk2%2FaDpUvnYNEQIGK4tdJCM070bP88KK15dTiFcqvlnWsnni%2FN87Ib%2BJvUvWqUDTP%2F9DlF%2Bl2if9ACavolNeT9i99IeZ7mLZrmHGzHeqPdBcUkVqnJ1kLDxJcWIRHYtfdq%2BAyC%2B3zVlO8cxviUPd%2FeDfFUJDmUeUEoUfXA3ua%2FlxdbBMt%2FpD60KjFSiizONl%2BRMlVrXC3g8S%2BAEs%2ByzyTOK6x0RUtr7sNP1VcPxiQ6rIxFWOu4MuvhXElB5M11ZGvAOJ6NOgvB1Z255xagHBMU%2Fn%2FAkGTJaYGrJMLjUw8kGOqUBiDINryraWL5mQiM03PwW4bL%2FtDUwYrEpqVr3LrgtfBMz4vCq9GE0hIpCeibX1%2B5aLiI2qmzTop%2BAb3fWrz9CWzqUPvGBO6%2FDv09e3UE5bcSkPOp9Ws0IzSvWEzRMqRngFdA0Mld9iAdEh1avuz0xG3Ogeo7V02PjV7FV4OZjIo7%2FxYRA7f1wa%2FxIKF8UtFnDpbpK%2BE%2FLWNBug6jB4RcV5TGHbqv1&X-Amz-Signature=df6ab91179b1464717bedb4ff67887a8f5abfa5ab8996900b2c3dc215b39c5a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F52YY32%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGwvGXRkliJMTPV8XFaM2hBKUu0nwIQywi8FJy44M2M6AiBa6EIO%2FHKlKZUjLCqKIS85KLkiWpMpenxMRzQVQ7hiWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMwHI7AE%2F4Y4YGaE%2FFKtwD50KYV4sj0uMeFECYojBdmdCcmefGfUkl2A17NHuU6jcVlSgmLvWywwBXOAbNgbwzQ6uFuXzYgjKbDZZuOXkDdhqhUs8%2FtBmNBvVCt4KKtKHfZkzV4WVrxU%2FNFHN1BIFpF%2BK2R928oKN4HB4SLUQGNVbJ1IQmszOKUAzIcQC5ZNrbxQ88tanqKcdEp%2Fa%2FpLy4sE%2Fo4D3%2BJ3hrjcKf7yBBl1DtoxY9fYaz3okxNwFj5RYJiwINqiL66mNOL0EvGe57q6smKTaLnHdBkylNCwiuoM1juoLstRDvaDtGXplmrrAXS%2BZJ4CEA93NJKdtEVBXGcdGnSJDsltbugEYZPvPaXfF5bImAkVizAm%2BRNTqyBOKIopAz%2BwnUMSWY2FbcxsW1bSGJ44igZfsqQegFY5awEP%2BXRw0T1gVe2e8kAcVXvuwAZjxYzwKRHgeAdglelV0AEk%2Bf%2B4BkG%2FxDS7w%2FpRxlZz7diuXSKfytDQIaowCiZjfEIxOmnd5h6ptdhEuGg5XdleQPJf4mROY%2FElW1K2mcpTPM%2FxOLd7CO18DUObntsqApgwyIYH6OnLqmC%2F2d5V8L7Ab8axE%2F%2F61zeFfLdPKSbrrz3%2FsoLQBeo518FjkMTgrIe1t9W0MvcJi3R9UwgNTDyQY6pgFR03UawoapbPqYkCy%2FqsBR9keXz9Rbotm6MY%2FKx8xqU%2F6JCgtoqr7lT7KJ67H6u4a88iTGK1twWdpj9mwbwjR6kqUdm10%2BZUAzteTFqjjfsN%2Bf25KqLp%2BHh7pUoDMDSU1oxGyiNP6ZvG0ZvT3Q3DRbi%2FafMccnw%2Fnwh9EbZn3eF5TYYlGf9blyWUAW9F8FCb4BPgeEAgBmtz%2By36XkS6mgPcZ5rxwl&X-Amz-Signature=96a2a8bab79e9d36a6014afe99819a77ade76d8eb232e62e31403d5e339a1dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

