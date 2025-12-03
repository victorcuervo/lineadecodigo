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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY4HDM5C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCJHaS62TOyxmnigcxbZXJbd%2BsSR%2BiHcPBpAn2Ov%2B07RQIgI1QyhqupyHbK%2BOUxYnLstCpS%2B8muRdFGdew%2FHVTQ%2FbYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDB4ZGhHUorDHIJWxgircA3HLHTRWGysdwidpahc%2B2UdAHpTBmS4HY6mqIGsAPYd346acNArgk3NDy0nwYHK%2B851jTKD8gudN8xsNnU88wGiZG1aDyHi8WthyqeYyj2QEgsoj7eFkavAgPZubRN9qQmYYXvC%2BSHSe%2BSlbJso2vLFM0gBQxZWIp8cVWhKYbCPr4q%2FlfYQtJIDvMyJ%2FouecUy8eCb9lukI83p%2F8BEWuYb0yX678VVpCtdSXS3ZfPbe77RSnSeI16RQ0HfCTXjBM2vRKRydKog5OMjvwqdYzhG3%2BmLJRSZfEHhjWfzRfdANd32WloiHVJNF9PDi%2BjjC4FAO9kg2slawbDkGpY3BQ02z%2B8SD%2FVPZcBnu7GVlxPYuYe8XUUBjyNsAtsu1j7NoqDACI4K7zv%2FAih4Qlso5A01eqxNxEl%2F%2FfHr5LIB3tjWJF0%2F72NsPMFmbZGonc7f6Nn7CZn6TcqqUO5B2qBvSoERDmVzpjK2A2jVQ7gANZ7dnSxtSsPJn%2F3wtP6l8R86qQZwkrur6IznLMVOXmK6f1DP8QxwtquVgw%2BcML%2FMT28kb%2FY4%2Fx%2BSBnPSM8nkuC06cJYbN6KM692mTD84pTb28QQ3LbbgKeJoO52SEPKlT%2B4e%2FNxJmL45zJg%2Fu4zh54MJOTwMkGOqUBRjS4vwEj7FkwTF6FGcX3yJ1KEjjibVHWcjjlOynsaUnIjLU%2FXcB%2FdP4ZVjx1xUdcA1ctkrDG4gKYhjOFJJRMSBSD73zbIFcqCvAfFzAokDG6u92wmXkmhhpIWh10LBlFVptYZ9hM6dERr6VC%2BKRl%2B30xgkxogB1dcopZ6X14HV1V93nPkDKqKbLDc0FBdvoRf%2BlupKXoIbR5rPX%2Fhhv23TlzYmxG&X-Amz-Signature=5edb3ffa428e19652dbbeff640bdc9b8de4948f35061428b1cbe95db4e788646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BPRCH7E%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEEwela7uMmEPfSl%2B0wwjFWEdaUHmNM3IAjkBr4bU75MAiBLdTBDHLWenRgzUhh9UqIhx8K9jGf%2FDz8KzYOEeFrOGir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMHQ%2BkYPOxMefcr9%2BCKtwD1IdtJ7VG8%2FJp3%2FuCkXeXxqDJzob%2BvLEbA64BDRQkmaTsrD0ZpGLHMpq2XQzvxwk1ptwzM8Im%2Fs23IcxD9yNAk0Z8TOcNHqmsxDKnJRBCq6559bczyctBLexkpZ%2FvA2zgugcsinl8H5BGyQZGuvSUT5hlJTHDxs6R%2Bz%2FD5JYTEiBIYwPebYLU%2FeC95ysRgeBY%2B24fFhVUN%2Fsf62%2BbK55i3MIMz1RPxkjaeHbLehFn3DEZcSDJCl5aTVwHek%2Fj%2FByKYKAAZbTvgo6FckDhOt2Rh7%2BeaxTMtiDrkePkSojpAtivUtz1ntp3nfLmqM6q5MPg7yOVHz38nTlLwiQ8%2B0Gpnx370b6AIfnMuXilP8J7NdLqBJZkS4nOc64wk92zPZDzKxasmq03D3GtnoQSkXxR9f4Erb3nxOlNskJpHc1vtaB5ryqA%2Fm%2Bw5HIC%2FOi7ojGIGc7YipBPEaOrb340CYxSr6Df39PuFVst18svHp1%2BslSW6E4SYQ3snrlXrxMQoCibNxfbeeaepbZ3VPk%2FCNAfozrwCQ3Zo5iI%2FrsCJQqji50YLWKpfxX8q34fxvFH05im1USiZzQob9513ZkmD7DtG1k0pjf0OOAq4GLO4ueDvb8R0TNus0D6oJ1ursAwkZPAyQY6pgFqkPqJBGk8r2ayjDFsGTxd%2BITI%2B4QuEWEN0kaDu60c1vC9x%2FaFdDMB7%2F0DVG%2Bipf0%2FbvIQlU5HDYKjZa%2FBDPaNRmzRoimudmVDA5WyA14Qcuz%2BIP7QQxoHTdhl7KE%2BEkEgG5zaYdRXGGMv2NVoN1V8z8nM71TDw3wx5gyHjpwn5yUCCoCKg86qPQNnfRSYUJZhnsF5BjO10N5Ml477eXlxQIDpHoPJ&X-Amz-Signature=86201f77e01e756d03a853761477ddd1fd88b96a8281bb7645b9bec12fe71bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

