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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCS7LGAF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaC5xdYnR7Pk6Tsf9cD1ObfL1kj8Bk8Q7Uoz3yGAXfRAIgUqpMFBXhUea61NC%2BJboKhSH7VkbsnF%2B0Bwu9FlOwLIoqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZs33Fd%2BGA9j45GiyrcA3YpXBFDTkqxmU%2FCadX%2FkNYQR%2BeNk5hln5OMS3J%2BlArxB08Xd6NyFcDAu38ihKu0rADqfoOUK4%2BUl29YFYIEoaJByfUIrvmA2hlPU6gdy10IYlkGuFz5W3wuvPr%2BWwhZN852Qf0qJ47IfpvWQpIxK%2B0JioqyQYlB4LaiOftCl3Avxl7L91%2B6X4JgnJw245od0Bb%2Fp5m8oxN35cD%2Be1qNfmBXbWaUT7oIkEN8m1ZNGmlWEBR3pVElOQ%2FMPYDREuadeOIgD4W12qhHAwCRTE5yhL22pEtF%2FbQ%2F5JWonCEgHeBuvg9eBfJro%2B7nLMR08DnUJNfzh9mnZwkjripQE3SsKFfSclmWZOvgH9xvnm%2BMS3jBUJTEpqudd9CivqxflVa%2FjFoJi7kdaWISC0Y%2F49KBk9tTbO8PcvUwa%2BhaYh8s%2F10NX9pT80n9I768vgGKlw4m6WTLebeI4j05hCg5EOGpyCwch1Vabq9eZDG6ZdJM2hnUxbL4IxJuVtFDlFLU66k2jIZDZm649TgZGoFbPha%2F%2FPS7btFI7LT%2F7Vwjz83m4Wj3yl2u9tHb9NESLeGxWy9ZpNlZNeSddbN0nRM%2B2vsNF%2FmI5OOp45qcEF6h%2BPXAh0cMOsEv51bMhckQd46eMNW%2F1skGOqUBymAaHmH%2BVLy0uRZD4xFOPTW2zRuPPg0lDz4VXZIdmL3BeYoMgHNE3KmVdgd5DgM28rUAf9jYPeZSS87iCYlARRQvh8pPjAkV6j1EqAstraoxidkNSiaCWQNeJgSiSwaoNKo725XCeBCHrrvrZEOZv99S3hgz4QogAx35g%2FG5bXqDJ5sDatF8dgrS6Hg1yRtiqFkn%2F4C8lIM32zoCkL%2FtfeqOgWzx&X-Amz-Signature=89612c9d39a3846a2e3e5120f235561b050392ed64fe589e19c1146a5a9c1eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLRR44AL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3MLxfrMSuiOzjmyQYZDFrzZduMbkPNyM9VfvZpGXvrgIhAOO1o1OLzTlJXK9J9%2FtvWk8ebQZ3bGxeDCVzaeQFTZCkKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3IQrN5PGIA7s0bLwq3ANGrDy6eBb5Qh7C4XuagH8EDnWIws9OK9GT9LM9tuZQQAxPiQbtbkapKkHzQViQnMSo%2B7leLvk%2Ft3zbAdfCDQxUsh0h26gn1Xu1i%2BC%2F2QtfcynxtYdQyqvQEti32lNc7ZLdMEt3PNXFeQAZ2j88WrrknnGOek8efjWwzuX2PuZpUIb1%2FI2DrVrhUO%2FUrK%2B7yid1qO6J9eZ6FW9FMOlkB5e3u3Usez7vxt4xJvlpOomchZ%2FBoUq3ND%2FWPMI6RnNhPWfpPmiXzrBx6z1ED2dlvvgSFxS77W1gth%2B4dUqPy0vSiwhdkkVwBPaAH7xDsbZASU%2FmWEihExqoQprhXSPwsPtxhBS%2FjtMApeFtp37WkEOdkcufQA9GsEnPOun96q0Fpd3UFrpOF%2FQusJJj8G%2FILinEDx9rb913MQ5CRmRjhQz9RP5aJdde7lZfNQeroyRAMUNOb03j5aXpJKQHVS9Knr3GH4p5uA2Z%2BVYUXpKoD1WvI5V9A353vY2SILvHmTaLXmwKCxGy9RQLJQv%2Fv%2BzBXwlChp1BT7dokz0GyM3RyZKEV%2BnNRevm2tlMr5tw0TByC0lNVOQruUtVPZdrw%2FCvK0f%2FrvuK2cc7m3Cgasexh%2FMbirLD0SaivFTpIKODnDDmttbJBjqkAaGeGRaWiEKHK1cfcXFRFbo7sXWlR%2B1mbSiNnkcQlBd1gJrL42cw4MJ2aHpfGDxWQ%2B5cyNEn11f25tWKpHctmXlK9WcdweVZHUhOPz%2FAxx1HsauilvI6%2F3ZhM8DA5DgitcNof9D0WWjcPYwmdPOh%2FK7IsanOwJpyxfQn5JW%2F%2FmQC0gZOmGarutk4kdXgAzQr0LzVOCrdHXDacGrR6MYOHHTYEXf%2F&X-Amz-Signature=2e58525f36b5656cb4cc35806a8d2bae45b950462f4c6407748626b933c66525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

