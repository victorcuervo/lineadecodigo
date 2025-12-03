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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3TZDZFJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDASQBG5KHo2n1r30KE4mv6SVsDd%2Bd8yqub5de%2FxyuLnQIgDwTYTIK3HTABnruon0MPdoth1RQvqVX7uv63EzpBPj0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEA4GmdzzN1ti3sabircAzzWFKVSfsXpwttxi69eXoZUb4eANcNFbfJmK4IrFm8TYKKR6HwvZIsQNS79jp1m6rRvfozNk9YZn1iOlHhKINuqYWTlH67Z5CFEkLV7yS6obc4wQhgwq4WA0a5Luf4BY%2BBZqAt7TM5vnfHGmLwhMOEe4N8i0%2FaU1SwU8jyj9JtjpHbf8DNFWhLNueIWwS5H5yFv0%2FeXWFZXq6D05JUy5JzAIZ7EIpS%2BW09rbl4qriRDvHsz4A8xfZqHj1AHG2onIWudoYXm8G17BbBaq1V5Fq8NH1Nww2R4FnAvvL%2BM4oPHLiVRuPQzPam6Fdnxn3gJNGNDBXsm7Wz9Qlfhs%2BLOGUNMc7oBQ9p3Bb0Wx4Jjf7iDdWUovdW%2Fs44NlKm%2BpRiP8vq28cO%2BgL5DNXO%2FM%2F7p%2Feam5K4f61vBDpHfLWFtn5gVKN0ZE3W7IC2Ih4Wg9z4ArUJgnyzcGGrIrxU25wVypuisNXxgYCHht8f3Cu5%2BuBXEJc%2F6kI9%2F985nopx0Evk5EcGDJiZeDSKqrXxz4lIhsJyv4kHq%2Bm%2BAD4U2l1zl4h3BfjTJz5QgvSbUFEw2uqU7juHHP4oSEwV9asiOASI0opNizA3bCJtP2WjsEXUZeFWey0uGuxRNMU7UHTlGMMT2v8kGOqUBWHAbhMTIBeeI0g9XGHFwg%2FRauGGbrBOEjP4yVDBUZaX9VkVFsSBBaSXjE25np8kB4RHoJrTHcwX3%2B8OdOb1YWb4f8%2BE3I2vZIRS5kjz1rfM1HeoerQOsAoeZljlyP1Lu6%2Fq%2Bdkk9qdJJW%2FeGdvPW%2BRUBAYZDZ5CzpWip9GOcAjSWVfVAvTdINLF4cF4wqYITFBzGuvkCb9LKrkJh3sg79opU%2FF%2Bc&X-Amz-Signature=b2cbcdb9d6475808e2620506295770ad0e82604e1c549c8eb3b655ffa3ec94b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU27JK2D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHPv41CjGrWiPvp8f9MsKYZ6bdQoMpE7MxXZrOQw%2BywoAiEAytRGRblOqZKBHCLlfNMpRpwM4KNjvyEO075jp9v0ywQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDObUgN%2BIPmiZ5ybbcircAyVku%2Ffl7SVLPq9VFAP75W8CIgMPJMnkF12fpFMmdGCRBIzRB2VYoAtLKQ1XNO8jqnp5oesB1dJ9q4SuK2g92MpQFiSu9YUIJKPZNzYkBt%2F%2BTemVSGMDL0xor8%2BmOh%2F8cak0UUtx4WbjNcta8wkpduBSzTUDUr5n0xY62K4fnUYfO921TLNv0scC2MEtPk0Y8PlNSi5iDsoPPv1TidQIkKma5X4o71o%2BiM4FQG8qlngwhmJvuc4sm7UfmeKwHRtSFJ2ymUdsVhfwziRTb5mMyuX%2FfPklECcdqVBLNU9m6RzKUrU3V0qefmYaBfyv1YML77ubv9%2FOVVnFLMkvxB4F9v%2B6JLLj6BPemPTcOv4GGQcyj30qlp5fydf6pVI8OdFoSWZuCdSuziYi%2FJmEGo1rqhZSRl4DgganG%2Basbhv32%2BlaEYqOCFD2ACUR%2FigRu0WoxqYz27uyh2%2Bkzpj%2FotmziNqIbjra4OS0bAQ%2FInZvt6efQdarpAgdQWtntSfD8D66yQ0WAhMkpb2I88V8Hqxkt%2FncbgAesyYY5NyReVjGZR1V4r8VAiHVTyMzQW8TlYQKIMAhOBLYyPs%2F9UKKdIByJa%2FSpzV5WD%2FLAKMqQZYxtBRS2ZdKxOOLzUtA9x9sMNH2v8kGOqUBGlsuo%2BBXYVw%2BstwEvPph0OnxclAL1ceoWv88qGqrSUJHtHKfPyKaBU2OKxjpbbfkAENBhmck0QuPFwhLeFLvU%2FK%2BXrkmrMpFE%2Ft9It2yqVzE6L9VES1lnxg%2FERN5X3j%2FoCYv6tUbgQJnmhOD6%2Bf26LeKXlgpyN4ZbhfbVBp%2BwXtqtChHtDxb470LH%2BaM%2BPvLyAquO%2Ftme6waBSFScTJtvEE55Nx%2F&X-Amz-Signature=141298175c086aed52539369a2963c127b1ba7cebf83a885b5f8ff8e513b118d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

