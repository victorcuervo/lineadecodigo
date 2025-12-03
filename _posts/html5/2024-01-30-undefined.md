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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGHR5Q5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDMahnKgMIRV7CTRz4uFC8u4KCqAbx%2BSNJNXx2DUUpryQIgDYfq0RgyeW8itQ9CBzDcUp9XbtXzo8jgs6SXT8TWtj4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIbzgN6h4p5Ibo7EcSrcA9eAUWVRBlof7FHijLaO5DpklhZub7xXz4WTMAQCXj41l1N%2Fw%2B7cvThjsO5hkZOTqBQO53MXj0W8OslGDOpA8qHevBfeUMWxIZwJQyTozn81%2FoCtHwa7X1jMwqMAtpB%2Ft8uh7Ff%2B52mV%2Ft1zYm7NvNTHtF%2BlmBlX5y%2BKag2OTyaoh5YcdV8VZJ7Z1zpT2X9%2BxGnGU9xrTU6C72lPtvTwWZW0p9A1GHfg8BXVNaf9VIxoJKG3VsBp6sP3yIS2mCDCV2aG%2FLiiPITNocdeN%2FVMWOs2qXReWYb0HCVzmwnFAHkl4CcwZh8gkhdRpUFoNBROZ%2FZjv%2BANhtH8v6duPNt7jeiRygCq64UZ1LZDjqlYdHvsYMZnGMqgr6KmGRrYO3LYi5UwlQgRCnkyN6JLMU8xImLeXTv0ItvQG7LuWbXT4oBQMS9qBSh5dS9Mos1gU454%2BaQ4A60scG6Gn4zEvegH5AbrYyDdQSEetXRrdooN%2BoIYnojflUDjntSReXcpAU3xGWN28eDOKWRHWKPrlqNaoiOPYoSPSvSePZV9aCu3gcx2OStnC4OkOefWOuOfut4rgIrDMoJhoPu2b5HxMEz1wADbf3R8KOyzJ8%2Fp%2B%2Fb%2FI7YC6D48QErNe5LINcmdMMyWvskGOqUBLMl6QGr80wOgEetzwBYjLJ2XI%2BXyOfblYV25DaCSAYhRZf3xsvRkNwYsa640kPBHyOI7GFaAYNpS70KGwBCPtroJ%2BwFySAiFZ%2B9R5i6vcWK%2FVSGs8nSOHSCZ%2FIXZQCwYAaFWO35QzoFQzoTU4aYIerZLEKtqB%2Ba6DawHbve54fdWiAv6d5WGU%2FERagcdyn3Gugd1EBDaeYIrBKA7LCyqrEq4b%2FJp&X-Amz-Signature=273a4a04132373e2ab89a4eae6c85b98db92959a9aefd05d1ddad15ebe360403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RBOU72L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHWG8SZyzKQv%2BCdp5PZm5%2B%2BPL%2BsgJIikuldo%2FNsEqNASAiEA%2BUE%2FIQj8WE8dTGCKNDlWMnntQt3K463fAE%2Fi25Uj8Goq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDK6KwmfuCrXEOJ4ZSCrcAwGHY939Y9RS6Qh%2BZOxwyxgEnoXODsXfUMPLPUXxAhmOYVibojO%2B77IaVHde6y%2BwQ25lOfYY0pid5E6o1%2FXkAUbI0i5hYiTELL%2B0VnWhRROosYzv5kN80fZ28Xc%2B%2Ffix2n3Ojf2gswpNKdpcCbJS%2BrqC8ClfPywOYV7z%2FbLi%2BgcgqzoTT3Th7qBQ5nLM6%2F%2BO%2BWfVM4ZR3RCqjqoY3Po5sPbKnIsP9X7I0RId3Mps1Nk6oAV9V1%2BnINOGVlEdDlqL572hW6yJVKtO7h4G%2BRR3%2FaU4mqVVQkKEk94lzVQLTL64znRAYn8jVcjY50lQ77Dot2BT2JUaJLRsHLSGPSbb2gq4Tc7vHjAkwKGBa7HfaplVAYHye9gm5icXg9o7KbSH4WRJGDoHlcRfQ%2BCQGTFZv%2FKioWTE%2FKjLKcTHobEXEPOTrfB4%2BgkDAXLuXvw0AMo5tc21bCZ8Lq4HImB41zL2mq88eLO8TUTfdPxHgwG%2BHY4ZGyabGw01r9%2FOYwHs2mg0DamCqRX6o8zRBSWPdtFDzSwasPY0%2FeZXwPmYDzjHrlV5xtZMgAZL9QTttmRbyH1HXco%2BXfObidFYcQII52iETy0F8jWh39Tn%2B9dEMylwgsNGWYHFHN%2FuJOs%2FU5AhMKihvskGOqUBhtTBU47TrAEpK99Nz5FMDqkRqEgM%2BB1%2Fnx%2Bn0HzVHby%2FZ2LbSjn9RW%2FoFr0fPN8y0d%2B3fJ8o81MxiDnIBHgCXmDQjzi2YSDuIPNh5Ck9teWpipWHT9wmX9Wdj3tiW0%2B7kPTxH074Qy2tLNMXrp0DqBeaz4QgWwHJcZyAHEqPYMLwi%2BF9Z4BlNR8Yx8ANWxJ1bUcgzbG6TJ5WoE13%2FlnVdFA6IFyl&X-Amz-Signature=dbcabe1eaae289bd00c042401a16050581722477bd5977d8b4136d9b0f7c99ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

