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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W555JGBM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFip1AW%2FtJ6BP3lBV6iqyBQuzWrUW1EWajSFyRKmlEUAIgUCQuYomZ%2BHI3Xa2x4%2F2hvaVB9pvezA9kWMkPU%2FTNBfsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvvjBWrmbAuNI9lIircA0UmELI4iTFlQzcXV0Z6%2BC%2B0pTuj3ZV6Z396HGXFoAQzQB5m7UqZyI7sLw3EwbgbFIm6zHgRw4rB7H1nsSgLrEwYoN9KTos%2B2zrC91dU%2Fw2tG6I02df3gJyRZkoIrKAL5Vk6iDEtMRlW8H770TGNOGtkdNcww04%2BN5lZV2b%2FEHTEret6cXVcyIajSEaZx3odTy0PaL6V%2BbofgpxKU6qGg0%2F19XdLO4DuUZLNpF5bLzwGwTvC8mqc5C3Xq2oVRBCX3m0b4879rDeNrY7UZWGCpvfVPAIxKyutL0Bt1eRXr7vZ%2B5uUihLMYGTLWBFKj%2Fwcg3YIcCHOOAlKywlr9ZiF23dAkkrSYOKt3QBe34eqDgDqSKM%2BC0BPVE%2FMDmQJhDIyvw21%2FxGbhttzOQ3Jn8En4SX4uSobe%2F5lJwZhQD2BmcUTL13%2FPv3lqa%2FasTlA94nrBap70AS7Fr4JrQabbrDtYT8ozexj7gKALqMri8sTZMgC4V%2BZwTbrUOPFd6wglqGCvqmU1NyHKXtsdbA0LxwNxbpG6G7O75UIE29pSXdsBYtP5WFRMQut%2FaV3koN8eXoUECEgz1sF0X6DR0DGM%2FyTpsMI4Idi9i4YixNmkdQuj2IPr4pZUZwYOJKCSkBwMJ6H3MkGOqUB2E8dHGQAc5RkqbIkAa2CXHRUURIE6wJwk3BM6Ugkxz16U9QLI0MmDOQNYfJCh01%2BG3K9eig261aQzqWp5ZAI%2BByu794U3E5hN9%2BVfyXUBmUHBb3o0fnh8ocs57y4OFI5IuvPs1oyK82KoRLgJh9P1RDDo%2BHkpqJajaDqaO78uRD80oDKWHWxtHa6Az9eobw4prdL08seHyEk1oxeJBa6a4QmahZh&X-Amz-Signature=4760361fabc9f6b096f45b3d13d09e00e89fe59eaa02248f1b23704b3a725075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ABAA4LH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6ye0Sli%2F6OJf2qSf%2FgDIS3UgFbUCokQA%2Bf0kQGpCAvAiA2clijtOQfCzc7KzaGT6nyyhDSqWANOoekWh8rVAgaKiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdBL52zKu%2FayMr5LKKtwD04Y4BKIz3h8IxGTwKcYpTzhxbHpEeMCA5GSqFgx7UrqHYC5HYKNUfPzzqtyuq0iIOFIEVPKwEWCR4c1rEvF%2BZ9pnnA92r7ydgd%2BIVlUmSO0aRf3OBZ%2Fz7S2Itn5tL83ucroWmdvE%2BSHtYkvYS02zQfw5hBQH9%2FtbMeLnS1LsrhIxmXRv2D28%2FD6RCKyu1IiVM629QUMJCXXgyUMI%2Fc%2BbnmWfIrHpGmB%2B14E6DGPh8jZlIERxAyYNZEwMmMANTD87bCEBvdmj4mHNjNv4Cpk8IiXN2YVvJuLRTOo8dPKWAZFyIaT0hEJfPOIPON2RD3JRzUNVWKIFsxe4zy7CKb9OA6ZELSX0idQ1AtyHmc5Va64vs%2FE%2B4a364r0odtRoc31AWAwXlaGwwpeQ6WfDsYKrxTOZf8sc%2FVlpnFL5efDB%2F%2B8KDkQSSU4eIw02MhskYC9ypaEuUsl5qANna2%2FauPMw7N2AKbJEqglEe6rTMScK8oOL1a0F51PaPkQJnBCQSb8GfUKM7CT5bWQHLJ9NrESIaHdCD3pjN1jA9YymoVjLQEGQ8DyCnQtwZD1LXvwJSTzgJvfuLwx8Vje0TsxGpvAowG1hRJA6DcbceFUTJQ1lHlO5ANZm%2B2xk5QwxHTkw34fcyQY6pgF61XhooUROp4Zoui3hUtejQL%2BT2FR%2F7eYAaD%2BLLn%2BZ8Uh8Q3nXFa9ipwRytAYjXquE3nYUPVQd1jzbUxk08vGdCWKsFA4JGIRRYXMRbkBSOSktq7a6BxprjNXwHfEcv7xS0HOQQ2AzABm27p4HjofUIb6nHWQTjDQVDWtXxM9UVKHeN2hg9cc8m7IXTUuwaSt0g0SBjim4FPWyA2%2BPSRWUaVULg6Ox&X-Amz-Signature=34f49725cbb23989c984204fad34c4add3415e9195c1486500ad187043efa6cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

