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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGUUUKFI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGY7eJAF7PWtIlZ9n3JEkbJrVkMmKSP2VOwTHOGQJxGHAiBAqHuZ7hezgwgWriCllsX%2FSEhhbr4doPoS1pcQQu62MyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJxRIW3uRSB%2BxoKFmKtwD84tBSWYO%2BvVzUOuMZY55FnC59UQg2r11pIQIcyChQywaDT55wWVc475LHe8WH5TRJA%2BEmJJtNQ2dYWc3UZLbP3HFqhYDGdWjvcP8EzX7lv8d%2FUa81cZ5QEPPAaW4dodKJSIXJcRNICljG6N8bL71oTCRZ4o8Z8NkpLkETyAZf6bzOfXAxEdYDjUUn6BmZYyvHNvk6dRt6fb1k6LB1NlcrFs4ds7%2FXXIaGMu4te60N%2BF2MHgGCjj8LeZz864UwoSagQIwLZA9BVERkViPdetRZUh6v%2FIegRI0gv4dwyVYx1W71vEwdCQHeW72s0Fy8Afd6k%2BIBX73iwRxms2nvf58Dlwcq8E3UCKtlJbDfmRAT5bPJ5s6BZpOhIS76Y%2FXP5CFca%2BjfBcWl5D2PVxLLC5OR9pS8SRfozsJ5%2FCA91aAjYcvE196DBBJjLAUkJQqiCOgppKlijbgtjBPZl2%2FqagJ1DE7IgqCBub2CqRha3uZc8YTcNC1ezoyMqWeZY7kS2Lm5mriH%2BMlV0giD%2FyGwtiiUloctbERIJDIM3%2BqikeFagsZrzin%2BFOjvP4s5ud49zvWYpfq5enbb1UsLRyrN%2FMft4jMH0XC%2B3V4OtwJqo7gnhisczfWdoxJyTJPPSQwkcXfyQY6pgG2H7u%2FYfmWBx1RQs3KHsx91LoyVTrGtR%2Fh6%2F4uD6bP%2BFElMre%2BEP%2Fps8TzRKdMOGBnaHjRTFUUa9nT%2FWkdI5WaBLgj2gpRg0wMuBFtJ9COa7cuOq92u2M3oZEvgEuRNr%2BMkgDtrky0vSoA24zFFHlRh7Z%2FdLwJjHmC%2BtW0dRiArI3QdsxR1D8ILQZK6RwKCEURRm%2BcF0TAfAD739SUH4kbiZd74ChB&X-Amz-Signature=f91973a5b9b6dff4272b6117d4a2f34fd4b94cd6e48465c2494d849339090876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPGWVRO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzWVWxDK282%2BqcH9%2BB2vbIH1MRNjuTV4D3CWYOyBo33AiEA73k6gQWGHfwktUQfBs7l7rHs%2FL%2F106hvuvDNZN5Qe8wqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0oQ%2F35bs8Mt%2BIK3yrcA6KxcR2bh3AV0S%2F6BtnppHxj6WYQRHx%2F1%2Fhrl6Ztd1zpi2C6gu3ycWHYAWttsqc%2Fci%2F5vrkCgsv02yAqC7nv8ejs146FdU0UXzoCDIOO48xgtJE4qC04kT4yZ%2BGSRdYGNQzUNTVY%2BsYBjDFtIwxxZPv0BOpumQlCadg6v3ln3YgPXR33qjQGctSQAzEmz1TYVYMiktYhyV7H%2BMDggakrcukLG4HXsHOBIYouZO%2FoLxI6JzgMbW6DYf%2FYiTBuUT9fo52thp4mhYa%2F9ssnLWQAOZdDrt6b7vWhSwDrITU24ZYd9MwEvL2obnLwLFccWcYM%2Bo5%2BFt2QRmfInKtKZmydNLnkmbdMpvsbL%2BrxPRt3fTzoTeYweAl1DECiXRPFGMJ8Imoq0O%2BgKvC%2B2TYoEcQ0aLSp0WKi4LFjSnqDdERtsWnNIFuxaJcan5bBqYReDsAuTBFJsYqKxr0qhVLfjTMkrHX2kwbrAEA2fmgZ2asgB8EF8Yxe65avMOEZHeutmd4yuSz6jsWBE6Xehrmbb23MKj7Xe0eIhgm%2FQGCPseqX47vaIF3VN1pt9%2BHz2F%2F4qEDHJNFFbNub2nGJpxEtpjHn6BPYPh8QTo5VG%2Bqao5DPY2cBFeyQm2HxsycrJlhSMKzE38kGOqUBA4umf%2FMUn6pmIzYIw6DvuhK4JPwGY3FoARnq8movp0%2BYZ9enRNRH5gaAqMPJ0g7XheK5TPtZ%2F3jWLbT6h5%2FRzagGDoPFxgd6wkOLLk3x%2FRnZWskfr2QlNAzFDeTXQA1tNcGEplQuvwZkYPXXipwWVssHn8DAcwIMezUWmyhD42zW6s1bTp7tea%2FdcMZcWbASZQjV0%2FyA%2B9gKZgPlmOOo82FikEMj&X-Amz-Signature=764f23f92f5da6863163a83df317e9658a98f836cf3b721a48ddd76c6cd84624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

