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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YX7IMD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFxL0MXmPmzHZ9BlwRlB2%2FPEBxdNzc%2FDU3XGuqdDTFggAiBVqu77pZ7e4%2Bd%2FZoCDyH43RRFEDYaYBDv8fOPDPMT84Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMT23O%2FLcDyFGZhvOZKtwDK74JVta85LFedIyBNfwa5tu1GPrp9D4f2Ug14iPhUomu7Trm9rqLGP9mtW0Z%2BNwj2RPFL5VDYbo6RM%2FL6y3yEcwQJ%2F0bk8LoUVR4EYCndgWJ%2FAE9mwSxcsdWsz2N2SW48kYD1CZMDiUVLeTbEQ4rotQVkZJLV1xqVIudlTjD0IZyl42jG%2F%2BPDmIVFECql8e6yV7Dqw8hhpQPBliUZ%2F6vTDdNJvZwSsizaV0mPn2HwYj8Ojo%2FNcCP4rTzP%2Fp%2BcQ7%2BUthyrc8ZYdzoz1RbdlwHyXrkSOa%2Br6fVkfMMipu4FLuAssI9K6T2j%2Fse9XfFHIwnD7EkLc1xcx7Mq4hK7rpaEVH8RKEsrull00ph3u%2BK%2BsrH%2B5%2BQzMdfqsYuJCSQ8%2FBGqoySJaYyKRTJ%2FNgfp2EIWTwtj3eGVpyknnZGqmdNMP%2BTn57QBfDPHw%2Brb1yPNKW%2BeCUvQmacSnoaVMyWbyX0R6qXcGOjp01yL9Ldp4i1uhXiETRVl9mN3%2FFn2FwbAvJ9IRcEowWZc9B67P4AReIF3e02nyYQD79TqEwMjhrtLvQv0HLPrOCGE2nszJhtwrbnIu967BanyaUyKywIskB2o0papEIrELUQIsuVkVqiHWawrQqHd9cQQwcbUEEwp6G%2ByQY6pgFVQneq%2FOEptf6OFmiO9r4mOd4uZFy7UM0Sljhntg1yWMi6Euf%2BNOZYFDoeXCpL1DRc9VI5jR0Z5E0mIar2aoXsWsCS0PzGYn5Oqvyo7glJVlnFVo4zCnuJSWQEjiISaGl2G47%2B8XUdWc7xRdrUc59fsrEtMxrLc%2BEUuAw8AtlnoXY7gI%2Bso%2B7eiaujH3mgtEY34BmyF1N0PUPS2KeeLcmfNCo%2BDQW5&X-Amz-Signature=33587eb51237f6ecb97958c3dd727bf13e59f01b6768b70d4119d02b7c270408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYGSMXQ5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDLxFm5RLce8j6cTrTn7aSKp5rRxa7v54ML%2B9BIXtviCgIhAOMRsW6Q85y%2BimF5g35F7oUanGbt3UDtc6BGY2cvVF03Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzGsOY8zHCAQ4957Fgq3ANhW0b0K%2BnNnJ%2FASG14H%2BiRSXmmd40btvYIO73zfHByGNx1J9uAtNvzvBGjQ8ndJ3VFoTTiG4%2Bcas%2FFA%2B2uFrjL04fNfSHPsCumbXa0nuYzHXCWj2JpsRYifvueNC%2Bc0Z%2BZwwk%2Fpj70HZpXKIvSbjWu97HNelIg51vtp%2Bj5TUN2IuxVEdiOd2u3qJxO2wLZWSX416fWTaEN44z5PVZA75%2FVoYYgCGrS9vE32opWte6EM6jE7WTeVGMchCv%2FM0QH950gRHm4pyw9qC9zIHyxhsN3Q2ReZZpCnTIB8RlsgKAYcxOzZttFQSZxvgngX%2Bm7kWVgE%2BNow94h4470S1D5Rfk1pmfdr88QmkgHLQrvNLh7%2FQf2z9UTZj4SwlTkRBxNIa%2Bc2fiWNsUtEpOnoyaQWkl8e%2FSvU1PwQ1rnX45DQWDVXvDQu9AABMlKv6ldbt3bu44nUv7NAtnqxsHTN3USoy04bxKeV1lNllMXlRgCudU7IcpmNapBkMd%2FFpsjikqEPkZA1JUSbpfF3p2vh2g138EyecS7TkJ495ho58%2Fi%2BSdiCjJsaqQ8O30Xdym9VVOWj2ooJDrGkxvlTZ9Jc867uCgU3bKk%2BE7z83NMeVJxWZeKB%2F7ZwQKQuJUl52G0aTDAlb7JBjqkAeDUbamll3475aFsRIPMajky8mcndmGxt6BT%2FZ0FYcnabTBs2P81OEpOM2ml0xTKEdeMjeHJyPuUi256p1k5wTg2p68EJEhWFlcpKiqCQaB9AGyeScFE%2BK6ADHdpADYhwAE6YNLDc3YQpUJOqydy%2FfKmwy9canL898WmZeV%2BGuPp8VnfzDnJyckREK5ug3BMgCZgxftpJqADCnQSjIjq9wpi3tms&X-Amz-Signature=d57724c9de02df592843beac015a306266e1dc1b01f13b1195a4f5dfde10a158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

