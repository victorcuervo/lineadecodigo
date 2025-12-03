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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQYZHJL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDjm0PH779EI9Q54GNoiv6vMYGnFPihM3AFO0ULalRIcAIhAOH7cOdaG%2FmRbZCYsJINwXyaxudT8u8WvnCDj6QECbnvKv8DCCwQABoMNjM3NDIzMTgzODA1Igwjy%2BoC8xoR0AMBwNAq3AON%2FoBIVh6wHQRq6nRbWDVLcp%2FPihI9l6J3Gm4I229EnPCLwA%2BR2NNWxw1FQD5kFeOhNgNAEZ1oZ2JDytWwogHFWC8c1uakX1obDPARB4yIN6oGxCSmqg8bsV9fQMCl5%2FI02anl9WXR6ES8y135fGVOhYDQjAppPgzBrw2vIL5OxFdCqP9f9B2Wmiq7n1fPepYsVlVLdtR7K4qkcH%2F7AcGyGakdBYgLRZ3yHTb%2BFBGppx2GsUry5Hd4y7oy4nZ%2FAuI6YE7OCdmPKfP5SldJZvwTCSQhIqPt0%2B3FWTi9zjeHc7G9xZVga6vnoV4kZzCFML%2BU1%2F31D%2F2Ueb8vUCg%2FtMb6MUK1xlAld4JiY3PZov49pP24oXRClj6FK5iTF%2F9beMv8sf0jlNr0nVAG7wUkO56u6wpq5Qt8mHrDlM8cFbyd7wZm1HKvZ5nIQp0ZiRLhFbwHYt%2FKuuT56teVR%2FEqS%2B9hUPlZmaRRTjwyDNiyxIotb547%2BGJPswrbWrFncYgKRP8h86qG9j%2FXZMtz4axZunqMh65OJ7IzeQ3N6h6IbN%2FW1wmI35w%2FYwUurgpF5u0172TdRmHjclTpOYbSSBFJmE8GfxwSMq7bu4OAvLo66URXSWvv%2F0C%2F9%2BiQpRcW1zCbrsDJBjqkAT9D%2BzDruLmiKUtYS4ZmA7DqcBURbeXPVpQ3EGa3Bz09ISIXCHuDEG8nm0S%2Fm8h6glp5%2BmDfzuzMraIP1H2KBcNiTHxWOy%2FS%2FRFdxD2HWxARX4qazKOtpkafEjEd02QjWomoyD3ZgcxHw1mqOocLPxbT6I4UtLC%2FhCUKOnfeHKkighLlghmyMD05ptl%2FeamxP5h7jHSW02ILXycMk9hjmAXkVum2&X-Amz-Signature=b119396ff4dd8ec00df02fb319244ec85a7cdb808048b8046ae8faa78bd3375f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IVB3RX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHEjWze9Gy7EXF5w8qtCmpRw9tI37FaDioRwLsOZfNWYAiBVB5VyFv%2B1cVB6Fd1dD5MI9CK5AhGuSmHXL08N8rUa0yr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMEJenXmf25H%2FSq8jpKtwDw2iPrpAxA7%2BL7KwTGO%2Fm81D5F3k1jzNSuKf77XaOcRL0del6sam06i%2Blb260slyd%2BzjPOL9nnQoe76ZQ1HFNIoIpY4zvXQ4XaDb1%2Bvrpd4aJs%2Fzjb4%2FuxKTJTQg2fjkWQW%2B5vOPj8wxQGhso5ZA04rqs2sAgqCQj4QBCX46HSm6pLVdJcU3mmJ2GX3gKmutuzlOv1f3kkYYPzN4gCgCrGoed7annp6CPLIhRNj93Nj4gZ32jgV9AxWxOxcNC%2BHbyNf0DCjusrur%2BklbpqB8ItYyKxmCBu1zjxLQ3MALyV3M%2FUkjdbz%2F4DzVP9oJ%2BQ6FgLxPfRpC%2FDfPy6w6qKwY9nc3xWDChdcauMVOa7m%2FJidpFzkThGCAQ3IyUgYI%2F5Czweqht7tymc%2FTDR4q7xKC%2FWIJN8Axb%2BZ%2FQOOoLFMdAoij%2Fbq74wFSXDqfZmDeSohIMgjpG8eQ1EArWrBc0xHMCbB%2F1wJkEpa6TUpj4hNKhcx3nPBlc68cCFOVIFiO4VyQGY9%2FZDKzRCmP7E8a%2FvGpXSbahq2MvA1jcdPAHnPUt2YVAJqEWjiVkA3xJnbAcT5N%2Fa5VtA5xfFWt2%2F7t0TzHVaYtdKa7h9laY%2FQ7yZccmM301qTWwF6SgRJoNFnkw9q3AyQY6pgFV6msj3UNcHplMm1MvTM2wSov0wjjz6xikEPvSiE2gIPQxD7nT3RvraF4egXlsi4gj2dewV9FyiL8jbHvSCjWSfX%2B3TI%2Fn9E3ic4Eh9HkUBgne6cn9r6oNS%2BFKuuJ3Rr2ZfzGULF%2BM%2B4d4EP7Cr5Kr5JYH14K%2FQCah7GgiKB%2BDdbav5%2Bqydep9vwjABbMzVAkVJtoFrh9Q2NaHVEeeROBZdhGgmrZL&X-Amz-Signature=bcddb5d769be689e90f752ac05a3aec69035f803c0dfb17d829734efccc030c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

