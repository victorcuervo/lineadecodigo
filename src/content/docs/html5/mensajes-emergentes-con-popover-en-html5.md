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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOHFCN2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn4HpC3y9mXn6Bovd%2FjeRI6Q%2FzAQsDgNZ05ixRcJGLKwIhAJbHqrNPS2PLes370xo%2F5m1n506FN3SUf%2Fo1h1H0O0SoKv8DCHUQABoMNjM3NDIzMTgzODA1IgwxJt3ExFsT%2F7YXqKEq3AO4lKqzQTxoLkPrFP7k2pnJMfu37eibZxuh6cDAYTcQZfcI4OCYUTcXDCUkb7FuEK79f1HzQWpk%2BzMzfHF3Y%2FpI%2FikXDTKOFF2a9488ZopvAA3K5ofCYTA54oU4aULncpMleTgmvnK5fvOmfq8DcfFzlT85mV%2B216h%2FBC79lxzdmYn7B%2BVRStwgFvT%2Bwl%2FrR7hrUZJWBH4lwKsI4yj1Q2H%2BTxM2Xg4jct%2BfjeA93OyDoN9nek%2FGfQFMB2x9Xc77Z%2BDkMRYDNgqM%2Fza3q2joABC6%2BS2B6Xi8AXdwE943ddn65pD0wJ2nep5y%2BgQe4UqZqf4htA9vF6wCY8IZ7ABEbHNNm%2BQQffSQbT7hjRl8%2FsfGwl%2F%2BonHh5bKqnyIyOvXpJ8dynj7iOLME93j5kurScHXGBfFWMG3xln8rprBz6D6G1PjLdaTlTxxNjkay6WBIW7YUgZ7PsMazvcW4Ez37yNglTJPaqNR59iSKF5yw%2Bk0r9LR6P1Q5f48NlIck3HGzOW8T39a27Avncvp7e3kU6mUYV1xgWFz%2BsBPdHpTrAIPQqQ%2B9fvLF0SZgrFCBVLldFgd0zgqQfmHrr9ezMKTDcZxLoAH%2FCGB1q6QVMJOuE2KnElT%2FysDUQpNdcvYQVDDPptDJBjqkAXDIwqO3HxIYoT53SOoxLkZAA4KgXztC2FVc1835ZFzBuUhtJCNP9KEFzy1WCH%2F%2BfA8CuYe7TJCruLKg5okUde0jDabbHbbKtcmqDLcCRRHGAQpIglIxq%2FOK3V6VYjIWoAZWiD4a4KauVSpDIa%2Fkjxj72HXtEgzbApLv0rgqkFFH9MVofa8l6irl0VNNbqIQo2xoqTJ9Y%2FS3cl6kSpAIbUL%2FJiGN&X-Amz-Signature=f3582a8afbcbd03eb35e2df0ab14114ce94d2e8b8c500d2872d7f342323fe5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643Y7OUAI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCETLSBALjb7ooxG%2FK8fnV%2FDnzFiPq1TZVnf3BspoJYqQIhALHCoiHvpF1c5YWP4edlsODjP%2FJ%2BTA9tFp0NkbmOfbdMKv8DCHUQABoMNjM3NDIzMTgzODA1IgwwDZECjE7m9mG%2BNVwq3AM9w1HdIjEwnPn98xV%2FY45hauHbUbSayuklNvA0ctRkSyOE%2Fd5nANV1UpK1hW0dH40lHf57s%2FPP%2BQwAe0H55rDs0Mjdj6M3KLj1RKfk7XDfRxOD6fNTCbfhQn7VarCvEhS%2Bah2SIzKAyhHPh4KZrI801OzKNPWr7t8hmJD2FDD%2BAu79J36%2BphPLsA2FxZAaMyiHGMijuIrOjvQzgR9Z2vEd5iY9MLvO8uMktCc2ESUE5sIY2ZvB7dVl3vcP3KELeZ22VdMbRZDIZrCRC5pknFTbTbbbUFuC%2BnxE6WKo6H1BYJvfbXzPMM7UpbQVFbkNrVlrEI6YHCyvOpzKRjbHwYSU%2BRaJNRfedVIq4EwvLuJH%2B8l8EkK4bY1c0eoZCGu0WCIiXIkD3feMaQracLRRfAQjkKXlkjNEnw9RMwXxbN4jO%2Bjd%2B9KIgj5WGtmLvVho8xYcp%2FT1t7z1OrFaShaMxsjLTC08H55iiUzL0ZB10Kxw18kS9B0C9NfUAQMiWp%2FvZvzCnDHREhDzgfQV8%2F1P9A7spCRlpZWZEWXNlslp7U6ndcJcMuWZAtCTBxuNrpzMYYrhuDq0L0BTkv9lM4kup2UH0FJWlugm%2F0cnBpvuam4%2BryTbAIsv5vrrnZ1%2FijD1ptDJBjqkActpHv3QTnP84b1uqPaTn2pjOJQgwcN0hJok242Nk%2Bi%2BbHjWZnfPMVcDVSxOKtFvdYO5tKW%2BpHVMA8yorXhBziiwiAk8Nd8C%2Bl%2BnwQ0SkoGhLEztEpRnGy1fg6m5zlpjeAZkESFvc5pvWORyv%2FxzMqP%2F58tgG5l5fAuDa1V8OjlX%2BY%2Bv%2BPzWjiOh1maMezZ8qMRux39QnqNpzXNpzGrr%2BpI4jNy2&X-Amz-Signature=9feee8af78021ab414ca3627ac645455e75a4ac21ca89bcbae2717cdd83b856d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

