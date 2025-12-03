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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6OBLIU7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAhrGwaW52NIq3hsM2jRQYR2X3yplLWqto3iOWosJjoMAiEA3UO6k%2FGleeggHrbGXO5YBEOP39hfPXP8RQuoJUw%2Bv3Mq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBvA5KjGeW2K44Sg1ircA2kdDg%2BXKx4UcYo18xOsCtqNsbaInK38Qy7Vfr9GdjbC8ZGxEABz%2BkqoKm1PcaTnJfH%2BXiPYuTHFPTBOTVpxRJhqzBkEQjGCOlnEgcCdeYNWmb018jsKZx3LLnXBzo6TefomuRFiJ2dPv1DuWHze5SqKyRASTsqB6yNadm8QYSO%2FwPcYSNHpKC5SYkbAr9VDBQhdfxiPaJQEkPgfwkBQXThY3%2Bn5XYeMXlTUrLg%2Fd1EKHOH99VOBq9F4FiqFbGOYrAKU2cR1clwLXeBrBEII9TG87FhPC1UyHnSTp33r7%2BhM8pIbq0VeQOVvrh1WhgfnIvmx%2BzDIvju1KXyrkh9K0%2Brln0NZEZSUyE0rXT9KaHb4Fe7%2BTgWjXTrWt7pVYNpp4PGXiTxrIqA5tqiVJqNyuguzdSk3dqYV9j82YQs4GcDFx7xkdjO3ItEcwgsFWLvD8tWBeDBbSCAiJCuPjVIdk%2BMDXWd1%2BfalGHewosoCHJAQiRIjZ2p%2BDeDOCfqy%2BTPHZ6kbROu4E82wRYR%2FoSf%2FrevRXiD4%2BZR9F%2B%2BioyVFFEVGTVs87cd391%2FU5%2BmHeDrPqwY%2BotSll6AirANRLqmmTuNSEkkuOS7FxRt5czNRQD%2BjOYI%2FY15d3i54%2BL7BMKKWvskGOqUBq6twGLCrGWRaDxnrMsSCs7K9tCxrUi3FaQ8eiB%2FXpa1gsg3gcfBCoEsZQRFzxMKqVIE5BJ%2FgS%2B0de1T8s46qcXSQkhs2QfrlUtENydtekW6X7isKKhdfM2CiBRfSUcKNDDlV9j%2FZz7cts8ygaQvJyQruhHm200%2FA07Ou0YFdNeprepHW5jIZ322aa0hhmZ9MTe5gQ3T5G57IeZk5StVapI9uY6ot&X-Amz-Signature=9f25dd01f03196ccaac2ee01258b2947ca8aaebec45ed33e78388ba6a91a875c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEWXYEJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDTr%2F5o%2FqMfWf4E%2FIhOZoY%2BDhThBDMBYz47UfQJsUBiGAIhAOYtaxGzRZAR%2BdqTTXQoGfbAw7ZlIuCH4tmUs1hYFpTSKv8DCCIQABoMNjM3NDIzMTgzODA1IgzWJCmbkm2zLZN7L0sq3ANp58xTdTauzE4GIdXkY%2FJ95XpMhL89PvQtIrXpKAoDDyjmEnXwq3TiHVdtGYuUbuLBLTV6G5ASPobUa6Ype2EJvmg%2B5vYupHVj7UbKB09tcaYuY2ioWPjR8oRFmFu%2FfGsUIo6jXmW%2FutlwnfQSNiN%2FC%2F6RIjew8inEopw6TMSl9iYoMo5QIHDwRucPCSk6pVW2Dkq2PmH83OcTEWaQ2vUvSkOzXnMC7B%2FIXbWP9LHx5r9bdegeS0M2fU7QAlGQk09umhHFan6L0x9Yi96rG7KORX0iC3%2F2jvmcoZSDPIj1tlMj%2BWcZN7CmDH5rsLaDqjp46FowkFgWyz%2BOGJR5QGyBX1D3VbVHU0V6rxwCd2BSDsjA%2FCMUs%2BP2eL9GY4GV1FLQGP9QHF9fa621bKNqip%2BLFd4SCas6mSaU5w20FHpABjJdbPT%2FVphxPn0ToZkTHptPU%2FZ7cRiRQkqQjZSfG4KfOFJ2Qlmh0bgBFQn8lZIS%2BPSiX3%2FSUlpYkq9x7vWeqQeUFlTFTMSityo9QzqlGi%2BA6ZTlCZv6fSxqrQUNuaA4kwdhIpnnl7GbwLJNtpNnzHaR%2FxzpQN7XIZ6z5k3MioR5VLuJ%2F%2BOOfkVn%2FEWJji01Ssd8mQThJ0HE3U%2FUoDCjlr7JBjqkAfA%2BIMdioEQVhKkgpjibokAMdvUDKkQe6Vyd%2FKX0NxEj8FoYwJALb1I40LIR%2FQ4u1cXVS8sNU4Sd%2Bt2cd2ww44%2FOOg1kAvf0e5mJIyhO19CIa%2B23lhcXLYcihgTJq8775r6%2BaWCQfI9to%2Flmopqndv2lhccZIFby0Em4mX6SXUqPS5%2B7yKc%2F9o1P1pULi%2BCnXILeHBQSQvmvmzHCZJBMPWYSZH3t&X-Amz-Signature=1da049bc04951113ca801303541932d1abe92e88e60c7bd5783fe9226c2c1ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

