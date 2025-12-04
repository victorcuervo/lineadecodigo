---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKVRL35O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCPbgbQUuwvvG%2Bu3%2FoSM7i4I08%2BV0yTgD7Q22FKtWjF6QIgA4jI1mDujwldGs2fMvSr%2BdsF6tp0yA68%2F28c8l8pErYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCPYhkodZLxU1eNR2CrcA2JnPayLXlgXBCX1%2F2vPER7mjkaDVePAxydmvHLfvfSTVZu%2FxkoadeRk4bJ5Qp3wsnHIqaEDyGHluUyiwyIxWTGU684mWYWZ6LGPqlQecV3L78CJ0PfjzMD9I%2FSy6qKvCG0vA8MbI2dKmBSIgbB0t9vh%2FWbtwRic2zgp1Chuj4%2FVr206m7SHlJL0rSIByZZCyxUktKcAAjymIL4gpVJQzLCbJLZsYSahOuk9iDvXocnVE%2FkLQ4veSUvmfnpFFtI5eh3FWZFj7rAGX0jo%2BxfPO7DlouxOlarE4XqVqPBn%2F%2FbKMjcJ4uSs3C2A9T5sIo5xZnCefZwkYBP9i7xlt5nmto1ggRdXqCwxb5xtPX%2Bzp5nocuZRLwiPLPsvSY0WdoaabN%2B7Y6EmUl6aXG00FPvuhCfl4pE0q9knlBhHEtNOMuVNcLZqPqramtB6UFIUmySawPxlC8e06LGoJ9zs56s14L78NDCv4OBtSWXOX5OmVpFes9zP2fQOrlGcDUCKUToAlfUcj8aGp7aw%2FL7glDPp5qsNsdBzWFwJejNAO%2BC8FEqDf1Pzr5luxd9O1lAhM%2FX9hQtkP6VeSrrt46i90LkcSSKO6zxMV3KgqC5CM%2FSJQYHa4XpWNDJGF5SI4fQLMMLzw8kGOqUBwfFvqCgZv5wQ1y7ROSn%2FbdEm3AhF8q1T%2Bkzcxyxgh1rkt1T143%2BMGRSYzw39%2FErNvwUZGPasTXqwJD%2FW9ek0A%2Fc0mpRECzjhdHn7jDQAWZqGOqfLVeTHXLacjgCzVtBOVzkLuVaGIgolZRCOHdPTK%2F9aJTAmeAGSCYSPKnhxNWIL0NVwrt6s%2BVOt9qd6TCawlOgIs%2FKAc0eg9AGBFSQeTqGzU%2FSU&X-Amz-Signature=b0174b7c829c75db7fc33e1697ce93c3578377ea1a35af40908adae5415b8ea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2QXONQA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCsNgJ00BQIJlShEUdSmWa4qMTz1gTTRL15WnfELRuFzAIhAPhlq0T1QS3bocKWE9HLq6fI3jMH%2BbIAenu0F%2B6WD5IaKv8DCDwQABoMNjM3NDIzMTgzODA1IgyqkhpKhq2ZN5wagRwq3AOuHcY1W%2FEW34e08D%2F5YGI72LMwafu173d1i57cl62ZTjbB8y%2B84MJvW26qdkivuu2kjmg%2F%2FwDebt4GMHz9cGWXIj5Q1zhi%2BuRRVdm9c14R%2FGJYdPRMfEm2ghIHRqw7j%2FEHxBpzsk9S4bekEEbWEHHwHbAOzb5JvFBZH6k0EoIk3ydpq5eXb7YbfsSt2tOeHFfUwRCHDqTCpO8okmMtnsyasC9ENcD2rtZCMhVJd2u%2BPDbSU0OsS0hHxGGm%2BGELDdIsvO5dc1oX7grpmr7FQMtYCvNGz7rE7hZVvk1Q7JtFd03SMbIwaiON97lbswJAuvXb4HVQmufSi3q4DeVuHQSZrulWsvlBKEF1IbW5Oo6S6MF4GHcrpBJx2QLQGJRVwnFhYSgBddz98xRhnLh53qmj4ZG16TwxKoXV1y5vmCtl97RekC4Xaz01TMXTp8GjlBF0tLg90yo8C59Qz8SlVZnQXSGs85zHaPERs2IXlr8gojzAHTxQFJGZyxbHOJ7JDfPGFjvsHlPybpIC7IVS7QbFNXcyBFldgTGmGXMtdEgL%2FkgtxJ8mxye9uzoZcWFGAdUJbdCmCNWTnwcwI2mFV0Jw4gl9ZrYKuH9mMVFnm093gBl4%2B1qEyLgyWYNjUTCH88PJBjqkAQhxKTHGGRxlI2nDBCZdUdxw2LMdjIP40Lxtj%2B0znsTmE1gyAB3LXBWY6%2FX0mZ9L80wWSe%2FN51W8lAORqkS8XQdGV3ZOGL9XLoWfVKAxu%2FEF06tFy2bxLbF4AegrZsR7W3QIGkZzJmQL9pM%2FjLCtY2%2Fqlp92NZ4MLCJgtcm%2FL2UeUKQ48Hm67NzBP1LTtQrU9HpV1t1xkhqkWls2epli88dBjQ1o&X-Amz-Signature=f060d3bb4be70c650406d8f87c07430a077a6a9703043d42444ee629f3992a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

