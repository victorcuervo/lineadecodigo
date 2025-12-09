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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZXL7GNE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKdujmkZcXDm8DqiX11RpqZvQCa1oUQ9J8fJNc6hGLsgIgTpZvjGtd5a5xG7tkpCsdNaRYg4crZlaMlEPt7ikbm2MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaKizJNntBB%2FKaa0CrcAzKvRvQsmv7BK6C6P6B4bm88uNrFRBsr0Ahodz74UW6z%2B0RqcxIVIcqHWRiTG55HUldNCVGTSVFDhMe0DPT5O710Xkh%2Fsol2v2Bmlp6JRVS9R7g5drRGOIyZ%2F1SLTtT7t8boOvyDnctTpSIAj0c4hzOgzF8b28q9IIMZ9VN%2BFA%2FnZ7X%2F3vFya2t1CsCJbMaMOn1xxK2Uk2qESPaBtaiTsGH299a8qFRQIdbKmOYYt0CNsyfnqBMhQdqeSicwralsQRIxXnhft6e3VhBsxZHU2PEQWaiA60pMGTGTtHs9Zs2uANlqzENvbdlNz7545yjfhDqLyoCy1O7zcDpERn30bJWKmc4oPLkOGipjBEK2finjyk4Acx%2BbMolXBN8gln81aL%2BN5qqmScqt32mTLlPEvZ%2Bzv%2B2PAtuijCw2oiRrx6xDYedLQzlGaj50obwasLfZ%2Fje%2F6gYgzoWvb4I3lqXO7L90PmLD7w9UCpW4pZUDtF8KRfdLjalxF7RgtDTSADF7zkK%2BKvVK6BqoYTfIugUZW2x6bT57X98iaeeMgpXJXAFdOKCUCjfXLt8so0XOYjAFNOCbeX2WbDuVKHVcEZFZ34xIoZBaz%2BAUZ6N6FHxYdyM6sHfqfrUQ6cTSZ1e0MIbl3skGOqUBFaeE73l53e5PfUJXozKLEIJUOfVgBaGC59uZVhgxWIRS5BiXIdmteRfBVEEIRhmZiSaMD2STIYrJLH0VEdwZapbbPlTdzvGM5xD3PwDJYq4Qq1hbjyUjv1kc7vGYluL8Xfb4LELe%2FkPS0tcdMkSzNSuS%2FEqWYbhrhwnFa5R2AEZdvnsqMRERYfNi4B5UeYqKfobt63XkbWLbZMXQXPmZvkyop4Ah&X-Amz-Signature=a8a84b58e2ca9c39bd1e2f2e5173b0c3cd67c93afdd43e82127cf4d5eb30dad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG7FA32U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcpaERylyDJ5yKLYfdXiHQLCIVZLzSLURsmWPFHoK2xgIgddxH%2B3e3%2Bn%2Fasb71Qe2lUfgO1YDMTS%2F%2Bn9ebRIjEmNsqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUYSZ0mkjm8WTTCZircA1Mu7WM3cu7FWJ0H7cNU2RSzhU4%2BRuG7%2Fsv9YNCLhh1VPZvoVLOG5AOM2eF7OxywpfNsJwGqyIf4vMdsuuVwwA56zDdlY16hoh0GoqGZ1LM1H0c30PO8llHqku2HADaXTCirIw4T%2BIr%2ByTDjxr53Q4uVAlZnKwToR%2Fi2n2HZs%2Flw5imnkY06YBFrYb3n08N2Sw37zXa8CqH5lzSlFcm5Q2GP%2Bh4NN94FqgclyUtLimB%2FajxNpRdQe8Fru52G6OrN%2Bq2zJZD0Tc4Qxw4AGigw4KWqeZJ944NQKYI0keVzUiED%2BAaa5jUqAexOZic0AwIErPa%2FTXBaCRWbOBA0J7H%2F10BDUC6iiDl8PSp2HB0SFjww1ung%2BnfnGjxr4kpOwHayTQPly%2Bp6nk6ehmeSWmt2i%2B9UtzFsTSBVgpZkhBWTsqogLeG9Kch383YRW6YqAZJoVAMngZm6fW1juqBC7im0v0Pa0KIsY1Za60UJIDP3mY2CRgpcF5GE67GsgmEu3ZCh3ZOSGzlIlmZWWY6e%2BPV31zvVmJr1tBejwnLAfxx5J%2BsC6N5ESSMzSQoUpvOlDt5Vy0KYGB0WN%2BOudde2GS3WQjFY5tUfFfIVY4j3EYo%2B1rC%2F67kCvquXaiWMf1oiMPzk3skGOqUB36rmWJPQZEcYABom%2BQfkN2QxeDPeyM8K2Z4W5NbzokiTJJdMA7bxpmjSG%2BH6EdS90KOD8y9sipdRVlsCPh5RzuqD3v8Zw4fb7C%2BG9eeUJf4tRRE4Qm24%2BZ8wDoCgFPHh%2FByy%2BlwZ24ThZwCEB16D9ezhEDpgLA5k2HPv0MxaJpz3hmCurgDHwRdB6jUz4eZ%2FKPKEd3euevled0iRUyqEDCpfR%2FOT&X-Amz-Signature=83291cbf6fba8c4716afe4d2ab2a98b082acbfa465371d5cea930dd7f3bf7d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

