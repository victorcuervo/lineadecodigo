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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RYXIK6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCXTiQk3DjIJydX9wUqF0XASV%2FI3%2FuJga9XrDBkgInbkQIhANbkUp7SlKfQISpzmGLTy6iNnXQNTDO1KsYQKOJAW%2FD9Kv8DCCoQABoMNjM3NDIzMTgzODA1Igx402nvC9hbuLRhWtAq3ANnnx5DgE4Ja%2Bum3j5FihL08IkFT8ZaYqVO7pwSXidg3AoK1XS1yZ%2ByO1oEKlGiOHO7jDdH95IJIvqk4uM5FIS9OFEhI2qFjDLQE54mAH0%2BX45Jq6kKb%2BnVfCeX1gchyp57u9SZmqZ0Cc5HN9gS9pBUgEyuRET%2BKk6ddmOKxjVRnzUBf0OgVdETm9wIf4rAAoP0VsO0BnpNwrnTD3M3qz%2Bwdrr8PcKmWkCEiJowQQhp7LK8YauK1p9WWlVmH4zRfSZ%2BKwhpp%2FLMrnsl82MQoSLfPdsltJTLY1Jqez%2F7TgRJRQdvdCCc%2F9BGcWfYfU7dn39uB%2B60zVa5UWHuARDnIxdmMzi%2B4ksfihppKmzJus2%2B%2BcP3lw%2BFhrul4uf%2F1ZRUl0U%2ByWvvUP17%2BrWej6iRCFpgswZ%2FMOjVdKk3WOhYSx1OU7TGMI4BtcAT%2FQWWnKDUmlGioMjsjH7t1d0Lnp1k5%2FNMsjIDNpfydiIT1OSZmLUSSS%2FMcdoCnDtDBmxnLcobOwGgAlAbRnlhIqHlxScHf0wuXDu5fwixR8iDWZK3SZEC%2BtE6%2FVk9xFXZeeK43s9wjufqEDu%2BCzW8ky7PJLpaBjrSUxvd7%2BEfEtROQWCFkt3ZY9B8SZpwo4FMuvFPYTDC%2Fr%2FJBjqkAQHRj6qQLZuac1cJPJDDrZqabIrUBumqPLMHZIzvC67mo2TJ7JCsD757n%2BiM%2FbwJ3ThU8Q4ZEECDhUAAyrXl6kOTcbo2SmL2FLeJmaBXNm6OYNC2uUOMBxcdFAXORRXDTWg8kYTFtipfIPAksfBHgaCj88AFXLwEHcNRXCYOHLUHmVMu1RqyiGEsY6M3%2BeyqxRooaGy6CxGpbk0ypMdvZ8uU68Rp&X-Amz-Signature=e3c3ba488f1e59ae448eef637a1397e425e0c8609a4df3bf98e43e80bcd65778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQQ3ZSSQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC%2BYlfw94kDaunvpqh0Bf3XzA5bTHVWitdenhA39mQaewIgO1BfzYKxcpQifvWH2Hc%2FotVRMmsxLU8ujCy7%2Bm3qDv0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGZzWsU9iExX858YRCrcA0e36dW%2BIWiMRuTmexyALlKsVNbR3Ysx65juIrDrQDvq8n%2BY97tYnnO3zfp0B5tB76U78ljkFPP2D5OSQgRR8HZgZUbzFqXqidwvOAFLwoZT432xHUj9vvxBHcTI8dLfqy%2F%2Fa%2F35V4rHp00G8Vv6ggRRS8vE5fKnx2MhY1wKipyHSeagPm%2BCQViJebEkg5Y40kne6cjSHAHU2pTJAloR2k8MFKZZefLuTrdOWR6At7hcOGEgKGTTQu%2F2l6YI85NzH2iMS4lvPPfBY%2Be3vEAVru2k628LPdnnO0WIh3VzGJO4R727KnkDZ0LnxmiutkLwwez68hxLbXttsrNLPAImIIGUEiqzA76WM%2FnAuzdp9TdVKCpoNlUFetMbDamYvHo4OXSujSMmtyBPFvorg4QApGAkW2mo6KOD%2Bd3MVGMl%2F4bT1HHYa5tPS4eAGHZmG0UzXWj%2Bkb1kq1R%2BM2tsYP4PJ4F0n%2F36N%2FAADEJ73vZpSybOC%2B8BEPSHckShG%2F%2Flc%2BSk2wg6bh%2BDCJ02rmejx347UR3XQf%2BGZo57YNsvhkB7pgEO%2FCsVEQ%2BrTBR8kyR2kXDedQWafi2%2FQ19Gp8H5AHdHBLCDNhG8goIEpNqxh2OT9W49BuAQiTQFLThblYYqMOH2v8kGOqUBALvmHeCAW5k4bUkqaZRHJd3YZpRe%2F9JmdBOsmJ9hQSfQ%2BGXCzAvLqj4C0Z2Taxgk%2FzLpB2aDlQOkjqxiwnde4vfeBHQ%2B6S7zD0VlXy8ITuz7tIKXDoB8aLyzB33pTQcqFx7SoFw%2FEU%2BEhqxn53j5TRu7CVHKJ8%2FFrELyClwJeGtMGdmLCUtD013lh8IzTcGAecFGOc8Qg7kqKsXGgQV%2FCzMigwSP&X-Amz-Signature=8792dce8c1a818cdca4fd66cd8599e96c583aa152da37b9ef8b900fd7aa101a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

