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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UINTA3EV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Z%2BrOi76gBmWZHcIPOeR%2BWqP7rotEKh75mcwXIux9lQIgQZ4COPVbvDB0mE3%2F98SB%2BXTSaZpBm5TRrnWFJrLj%2FwoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyUQZPT2Ok1GgU23SrcA55%2FR13IcJddvS4gSVthbhTUFHXtdKZIZTg%2BIG37sXjIW36OqrLZbJ1NAfrwcBIW0nnKSyR3pag%2BmehlsJ1B741uMUxWXIa9AfHyQFGJcUVLC8Zj2X5sBhS4UsYHrUzVn1UYBt2D2E6bd9zywyZhvtAANaY3f37k8rRdHXUE609tQV10LLiAutkxV4TKDMgX2ctibMNnjua4SYNW8pHkSlz94JAFufPO2ov8ceo8xJ4SlUuy8DeEMlfkDRjwiCmd91UBoyzoB8bbd4rI0dnsqTYEetmwXWseZ4ZuJCgPl%2BpEfPVJVFT%2BolUhS5oEbzLU3%2BOXwyClfjXsfkdpCqGSSuDq2toayCoaltdvyOgXPavQX6H%2F8EivuUbAXJP%2F6yyJFieLb%2Fd8q0mQc%2B%2BthUkAUIg05hAGIiH%2Bob4b9pOAR5OwZ29nE5KsNVfC1zjIabwU5AixYzHaXhX6ymwsXU9QxV%2F%2BX5T%2FEhl9vEUf%2BRd4dvm10kP7tFCoesjjkNKGmwr%2BSTUlk6MRiLG%2Bz9cuYfM4vlvLfq%2B2RCE6Ft3bzqbse%2Bc%2B60CvrgXTj2hr2fkwvswjLtRUzv3WxrIwxjxgPX9xxQoSggbu83MyRyZy02H3Z1qVmkAv2nOF8nQKJkqKMKLJ3skGOqUBYYLNgoBG%2BIIAVwl0L%2FXj2IXayyGTqHvZN1myvUKjj7Z%2BnLFqVlMDivLvMB%2FUvI1DiXT%2BL9rD73eVC7WIzyGw4B35D27ROPMvd23Emw%2BswZ4wGx15gKNyTuchZxdpFxLwMq30OoP5yWWYj7i5PMch8Abi%2BrWrp7gzcAuWIAkcfbwn3Xzh085ZZK6A5eIJ6usH7Wq6iib4p49PTHEaFC0JRX%2FWQQb6&X-Amz-Signature=4910740b9073b8a9d182b92519ea4bbc66667437b978ab3e872ff3f8ce26a063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642WTOEIQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaXEJyhqmuiv0NGhlhbjO4GYWMj4FZmXYyEkm2UjU36QIhAIYzkZvMU8BqsJyRgxtONnwlIvsrZObrvJx%2BD99kakImKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6Qkkoyfwdb0ZkyZwq3APF2fKwJzvlV8ZYcfBTC5SqTXkRwlHN5vbUgMLpPsNIrdYd5k2bpqMjxy5P1jWbKe8M8tv4JIIgjHxaFteKsNU3%2FCFddVJHmYq%2BCU9Cp7Bmu2plXjkEgRrbtiOHaz%2BX8X7qbtU7OfTKoYIczqU%2BbPAevK4IsHdph%2BuOnmDSF9lgz8fuMRNp7s5QoFYETmBDEUCnSb8lKymTwmnLsksGwxc5H4sMg7BhxhvKrdO4NQG%2BCGuB0W91En2ks3S%2FffBjMuwr9l8q%2B%2FIKznOOCn5OUNywrUlIx%2FC5sucaohnFXPWAeA1R2Qm4RNqlIZUS5l%2BaTq4tdve9Crzh51WUMVltbb66rptY%2B28G3HnBqM7jZE%2BXUgcHsay%2FvFzRtP%2FptCZYunccWRnWNqfgRi%2BQ1AN4P%2BRxdNET7sYv%2B2XaFoYZN1ZcBXNpskaXWxY%2FYN%2FdvgrybYZa19kgP%2ByUA5T71t4qSg5gj73V%2BHKQ176xdJnAvx0SfO5MarF7TQsb08w0RsiK%2B4kXpNkEGVvcDnhpHLOoh9%2BGWHC1Cs%2F%2Bz6jqwIwbfkBQxS%2Bt9QZUFJXJUWL2Gjwhc3d5cQQN1Rqj36KUXmCDHU%2BhXdnpb%2FC7Z3LhabxwMDF4UCRVyOnA80HLAJuu6DCoyd7JBjqkAQGOse0HfDK21Gw%2B0F1M1qqyDLxJ9%2B9qJNhWi3C8HsTyEUL626cAXMenhZ%2BhJg0dD0j4%2BZ5CRA5Po0LJLNJm8KasT4PmVZ7NVTXcRasRmM1ZODJmwmnAe2sh%2FTuLrFqHn1Cy%2B1ZLRNrXIigWqzE%2F6JZEemhvQdBfQbJdn%2FRTkCU8lfs6aOhjEVlVEocirJamnGLZCM6fqE15b%2B8TE%2FCc7t1T89n0&X-Amz-Signature=78cf80c1ebb2468337820a5f0f3c9439aa57282e937fe5e209e4077bf9e610e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

