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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEYHLD7Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDpMO7HTF%2F8ofsd8fnHr76WbXvOcNHCTRA9gbw95pETTAIgCmouBg5f6m%2BzsooA9wxpTSz8eiSdWfswYx3PjuoUoqMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDCdkSXiGxoPdaaBMLCrcA6YhYkdrW%2BAPt9qBkHu6u1IXlFxmWzv5ZuIOCjMTk5WR16VLNcpNylmk1D4qYmNYU2mdD1dD4bTz0oA%2B6Jeyg1OdMe1mhlVqc1UOSxjXeHSoGjarIxOubr8Cl8kHOcEhhZzRDJqU%2F3a3V7E5g3XdQNsh%2F%2BYLI4bh0QJbfntESOAhdAqvD68bjGce4L3pYFMNmvQSRc42JfgMyDH3qHKAksa%2BVC061FPXN%2FGqCKVFGSpAE1gxSQXwM2PTCKUoaZgzs%2BFgczmIt2%2F5n3FtjYuWnmYYtly49Pa6KGO3pezf4UTeu3xqwQyeUnJtisVQWAPvwkM5BnrLwnOksjPmF1PSkeIlv3nHOXQ9g3h20DW06cjLYjEyFTyVaLm%2BTK6i8soJDU7yfMIwV9f3H5ZmCKh3%2BO%2FKDDCDuKZAbULmjv%2FXL3q5rE6tYLWYogbUPo3chaqvbof8kDfng%2FUfClT8ooAZU2Rw8NApVPspTSwGtMjxaguFyfOIPMXB9Jb1TvxgvLAISqllCw3pYaKHfLHvGh0SOVIVHDFj7JJti8%2BdZZiy6gjWmJcaFtB%2B8s1TvQZvJqH%2Fz9OCaySibhFXJ1FnSvusmZ4M52Z7L1TQuONXLYtBeFNbwigQTxVWbCbtTVIoMMGIwckGOqUByXnrUis4YBtPwQodxMaMug%2F%2Boeyuw8tzV4YKAobCKDWSmzhzQbw47k%2FzY47fgJhk4vq0%2FOG0PBjyuCzgzVqYykBAlrZNGAZkhnhuDM3gQHgYxwW6%2Bl6as%2BJy94fY93jiY1%2By8%2F%2FS51t%2FmvpM1Qv0%2Fuk4%2BYzdyZ650UyUDxWnYrY50DIIPPyZ1DCT2DFv7qcW7Gs9xpclGky0jqSjah182ji6jTwM&X-Amz-Signature=d856cf4fe98b235ae77653db0e981e235221af61d3408b99ffaa3dafb97d22c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BAQL6Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDgjuVNA1h6C4sEayybhhvza%2F41fu4Yf3dgIf3bEWc9twIgX2RvK7u9VsVDnrIxVoHtXQFPreJVAxV4nZf2uIt0VQMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDK0knYA4wm0tqjYqfSrcA4qSasel%2BSHdyPMNw1V9Wj3Btsv92asAU%2FtY2Dr3W0KoFD05EqKJccS3A0b5l8IDBcBYS4yAv2AwUu3FiP8VSN7%2BFygmx6xL6W3veSzzn%2B%2BsrC3nvYiasagfdzp8kKrN%2FUjV7AuelEj%2FI%2BpdMwCjzY5d83WntWPgBQqqvhL4aEen2ww09hl4I6Rvg9%2FEWAEBd0lVMqxZos9ORKr0oF4%2F9IcgX%2Fao64L3QFiqqzh60xxvkaEenLdKUV8jnMd6s%2BP9Vy9Xy0q2YnANELnW9PRx5cWOu0fCAbk1lXUyS%2B%2B8t1kQ8s3QIUydogaWRq44oxBb2HtwhMLa4RRaspdr9BjbFeGnkpEM9bZLbgcnMXpVjFrqNI740NpnB19C0lKcA%2FBUjLHgiGnbPqqkgmLl5vdElY8JHqRjdn8WLT5wkgpllzNmvZIn88vmSwNZqYY9oVYNj%2BBNFxchA418q%2FR%2FGT%2BL8Ful2Kpz0FbHLc3plldvi6KG9b0252%2B4PNJa0Tpi12Ikf2ZxJ8%2FZa8taz9Umz3hDqk27pVXeIun5dk9a%2FP%2BjtBNFDLjbR3LghbSRFQyirxzOZb3%2Fv56RyuLP0uJxetE9AzxK2Dhnf2pLsH4xyA98qoGETmbke3r1cBd0fXaCMJmIwckGOqUB8Ja1m0kv1ljm27CLgzxGtUwPMyDgN9HlLnqMLrAkTEzghy2%2B%2FjVUYdWQM5knHkTgsd1LBy8zoQ3Q%2FLg5qQ0ph4m7sHsnQfEb%2F8QBxzNZk%2BcwStMabWfUv%2F3bHOUrwOiMl86Kje%2FUp8LZ6sMzgkQHDViTwueqJf2B6hsIB44I6h9nAD%2FMK7T%2BBbRY1VuT7sKPF6WOsk6to98HqvQulpYKGnsHgpfl&X-Amz-Signature=7b678696f336e9f383d6d9cd085a17e0ca8623d9d88f04df889a2b6b87118a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

