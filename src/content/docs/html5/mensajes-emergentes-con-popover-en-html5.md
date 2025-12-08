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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVKC45BI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOToxgHviqAIVMwmmhEPPs54KXT1qH65eEug1Sj03DEAiEAlJA%2FMwf8K75LxLKfsHNj%2FApqqYYnUiDA2hZEgX7kEM0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9080jdhzjqk1ZYfyrcA5CW%2BqKiLNn%2B32EcABRDeN2IKCr%2FCNw9HSTCOczx%2FiaM0kJ8pSMUT7N3zLxO%2BEqxex8wGstRUt5C4TPDXfI%2BsOsnmTUzSWKnCCSrwn1BfDgS31QCAwkbmiWGin2nrCJ%2FqmapoC%2BMh89EkEcQWf5yrXXOE62aQgIMqy0BVzJ8ZbnynE2LkIs%2BmnZlMbGzNqKh6oYDrivESp5%2BxdW8mu%2BiBvrMJ1dph1fJq%2F9yW%2FSyicSScJy8zrjhx2g9tj9fG8kXUJXkVTtFTi59oPH0X9bnTycxa%2BGM27pJj3OVxHbvHeedtcQAdPgaHA0n42UL2il9T%2Bfm33HPO6hv%2FT%2Ff8Pmg6vwP4e4ZrMBf8iGdp%2BSS8muwWqu62q0HBao6DVPSKS6%2Fv24zanMaok4xkp2ZpvInuFq3RWEvDnBlDcDDF5yisWkGdvKj2YF4sLXfrsg99Y2LtshCCmu%2FJEBd1r%2Bh5onj5pjaNhnbbUxQRfvxRb5OKJ6sTaw7K8xbdCtA0kJqY12DRyZa4UsD2oEvDv5lhTkHEhbT44fiW4UqIJcaU0Di9NpRjvRd%2FlZzPXdXlcHmk9b88bFk%2FlvHdoGo8IylbVnBzpndyGlbtH12sXA6GzYkwEVjGNmRVRh18WdWTLbtML%2Fv2MkGOqUBFrl%2FqYedw%2BWVRPGB%2Bd84vmYxJl7MPriF1xYt%2B%2BG3nezjQPse71aO3jcPO3NF8f56hpVuZJafrgqqemCD1q%2BiCMl%2BJh4MyFWSRtDK40Tv%2Bns%2B8vbY3z8NCWFHuN2tAFsETT%2BkUa3NSW0WsXIVWFjvngQqUen9KT6rHVcfNP9JEhbuEwpcZWIRKZxS1iw2hAiQIRmtr7QwIyCAhjycH6OPK17LIHnh&X-Amz-Signature=ea429a1eef181f7c81dc4eaaec0ecf804c2da838f260fc260dc303801ff0f882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPY3K3A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYaqI7wKxJZUZoP8TcgYk7EE%2BNdf%2BYdZ8d2WNRvCUPQAiBgMcpjZIBgaWmqGxqyZKR0XNOzNuNS8gV%2FG3Hjq1WYVCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHmz5i2zfHRoIZBbpKtwDFpF%2F1aVeJjnvadTLji2xwA1qs3dUGwLSH2w3JBd968qdUEYxiLKpIGLUj8YTGdW7agniFMQf95jq2a5uCv%2BPH%2BR9x7RCVCGQucWrF%2FMEhlyqCh4HQggPia2YCaEegGGuHWZF8NOAQ8f8e79sPpiGENKf2BhOM30qflkzRq%2BKi%2BpFa10KrGLHXL%2BdcGtfE%2F7ngf9sgm935PNOU3DwaPhPthhbjxBNc6ynqzDKybbURaqfGmDqx6YYvfLkHaT6PUZ93MJ73ibS8cjiLEtAz6bCeA2eLRZBKgCHIP%2Bzah%2FMQla2%2BeQrXkkCQBz29eFfasq08HaXE%2FIN2UdinfF%2BOELzjiNTpwc4axlcluOAgB1pGyfCcX%2B5NLcXp1kRqmsFbCkZONj6Br733N9SMChjqrZyEnqWzSanXE3FKttDGIgvUzLnAJx5GsoaM6A7JkxJ6PBhfpGZeTkv2LbV7Mm4GWDxJ3hbY3Ery4dkbrkfFxqv%2F1sW6gpfz%2F0hdgSChfLWVQ9ZSc8Vp9EFyWAJWMFOPYppQpmRK4kquy5FqOWTyvNRjJT9JX0lxdlObZldPn5pywC7M1Mvm7VD9PBUZUoZ6maDu3UO1a72C32ybfhzOhklrxVlQxoPF7u6bWe6nUAwqe7YyQY6pgFp7gmi2hOk3abMBvWjk%2FVcjzP2k0FhBjUsHl1ce7Btm2PaoXplCALEYSD1%2FWYNpvCP%2FkYK5QxgQeEIRRbrJQFtTQcDJ9q%2B51uglKvqlhgnhdnocTxHCY7mccAmmMFwXqicHhEEL68nmfDy8rHxiQGxuny6s%2BOBFA7atVh8ORN%2B7TSFBaZesgOGJ1G0QB9woJvS3wCqKbt1oao5g%2BFzTNwqo5uWnOjI&X-Amz-Signature=590a67102d4e0ff6afee371103b64d7c3be06166476562c651f0390c89105a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

