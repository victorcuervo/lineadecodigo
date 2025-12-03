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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXYLLEU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEIodEWXWc2T7Ec7QAuXMBKQy%2BeoGqi2Z2QAtgrvLAdwAiEA1cjdxAJL0S7%2BBRf%2FG6FaujA1u0FvWQ%2BOoagwIWSPtM8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOqc7Mqq6kEbWk5zBCrcA5AdpyCcHJg%2Bv2dX1kKYiEmaP6hY5d7LOrpYaF53b8fKxYH4cx%2FxOF19I2JaUbLH2lQ2M87XbWgHJBMNYyzG30czemcR0hNPNA3O1E1d%2Buy4pvctg%2F31C%2BTM1IWYzQ4LZzLlDcKY1kakheZ%2F%2B%2F3cYqup9v%2FyWOYg2oPybWO3MyGcTy05injMqCxHHjTzxQDv3XqeeqUTjjdnXQKyoKUto58pf6WUEX4eVFandckt8JRGM%2FE44z8n%2BqhtrrnLzq86BI4WIXLJiRTiWVPK2TYr0SF%2FyHWEYvhKWVlIX2itbZ0sg2osnVQFo2%2FCb5mWQhvOgvFG3tvewRpX18Hl0Y%2Fbiedy1KuQdyicPRIUZNgcc6NrCPAIFjFJvZz78BG009n%2F%2F7YCtTSnEpqv7klQEHUvkoLIxe1Ry2HNa2HVBJ%2FDIcJ1W3IZ9y8A%2FUC6uiH5ZbOsdQZfmT50fsmmgcmA0SIwAGln%2FMZWv1tOAIPpQV1BUIVVs6vuqmaPANzJXxD%2FTZp5o%2FlTTBZPjbaWW6VcfzBxLXdAJXP6m5KVLSYHWoa98jfA1052Qmcf7Ip2wYgQCE1OyFsiy9QKvVN2jbRou47N%2FynZ%2FQqmIxduj5GQIe7ao0gPhJ3C7cYxSMMdhbnLMN6UvskGOqUB%2Fh3DuVAf0RSCbU0MeCIY1I0juTR%2FuzLgSNC%2FGNXtLEwKxmBwgnvxMcDCqZ%2F45VkFFFoRxsqu5o4XPL2ExT6S0VthGtJwh4Sjhk7fsi2vTstjkjABwllnNwuwq9R8VxTZ4z8r%2F18pYOs4HsRP5GNZLBgjKRx%2FMe8BGERitLyETil42n85MMJhyzUafEieiBBQIHvjstkvikR5fCcKJPYPZW0YTbIV&X-Amz-Signature=5678367d174b53137b9691b688cd458f844eb4d5de23892ea0e06b580d069ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YX7IMD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFxL0MXmPmzHZ9BlwRlB2%2FPEBxdNzc%2FDU3XGuqdDTFggAiBVqu77pZ7e4%2Bd%2FZoCDyH43RRFEDYaYBDv8fOPDPMT84Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMT23O%2FLcDyFGZhvOZKtwDK74JVta85LFedIyBNfwa5tu1GPrp9D4f2Ug14iPhUomu7Trm9rqLGP9mtW0Z%2BNwj2RPFL5VDYbo6RM%2FL6y3yEcwQJ%2F0bk8LoUVR4EYCndgWJ%2FAE9mwSxcsdWsz2N2SW48kYD1CZMDiUVLeTbEQ4rotQVkZJLV1xqVIudlTjD0IZyl42jG%2F%2BPDmIVFECql8e6yV7Dqw8hhpQPBliUZ%2F6vTDdNJvZwSsizaV0mPn2HwYj8Ojo%2FNcCP4rTzP%2Fp%2BcQ7%2BUthyrc8ZYdzoz1RbdlwHyXrkSOa%2Br6fVkfMMipu4FLuAssI9K6T2j%2Fse9XfFHIwnD7EkLc1xcx7Mq4hK7rpaEVH8RKEsrull00ph3u%2BK%2BsrH%2B5%2BQzMdfqsYuJCSQ8%2FBGqoySJaYyKRTJ%2FNgfp2EIWTwtj3eGVpyknnZGqmdNMP%2BTn57QBfDPHw%2Brb1yPNKW%2BeCUvQmacSnoaVMyWbyX0R6qXcGOjp01yL9Ldp4i1uhXiETRVl9mN3%2FFn2FwbAvJ9IRcEowWZc9B67P4AReIF3e02nyYQD79TqEwMjhrtLvQv0HLPrOCGE2nszJhtwrbnIu967BanyaUyKywIskB2o0papEIrELUQIsuVkVqiHWawrQqHd9cQQwcbUEEwp6G%2ByQY6pgFVQneq%2FOEptf6OFmiO9r4mOd4uZFy7UM0Sljhntg1yWMi6Euf%2BNOZYFDoeXCpL1DRc9VI5jR0Z5E0mIar2aoXsWsCS0PzGYn5Oqvyo7glJVlnFVo4zCnuJSWQEjiISaGl2G47%2B8XUdWc7xRdrUc59fsrEtMxrLc%2BEUuAw8AtlnoXY7gI%2Bso%2B7eiaujH3mgtEY34BmyF1N0PUPS2KeeLcmfNCo%2BDQW5&X-Amz-Signature=1c56b3f1b5760328f26e72d07f1a3d49b666609d209679b99a59b750a2573298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

