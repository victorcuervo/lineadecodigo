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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JA4DIVO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpKUPAKaiV%2B84GEFpXr38c%2BfWJLwqJO8yHTh2t3eahYgIhAP44uHxnnnDBIsnzJKRae%2B%2FcEQ4b9Yn9OTq7n0o%2BGHAkKv8DCGwQABoMNjM3NDIzMTgzODA1IgztX9Zku9Kq1NJT9Ncq3APCIztzNLLrPAzbZTFElZjcjAbd779giXV2Iv4VQ%2BHgrQTRfylySnjXbuaeipGGqzh2Y%2F7dLc2JAkYsBaHt1sZcthks%2Bc2z4jaj5%2FbJLT%2Fad3NtqJwdbgXc7MX8gf8%2BSei7%2FeV8GA03CU1hK4T6aDS88Jgiu8EwwC1klId7MAtW7AkLHvs3h1fTEhv94TW0ApGH4521PW5%2ByoEF82NvDOBd5AwfLfgQxmmhaEY%2BXZrbVelkMJ70JCuV%2F33%2BG%2BEBrIs9uhM%2B7Angw8b7Mjht%2FAkl2ksFIq0sQvJ6wUnmMBqdzt%2B1wpBuGR6nGjeG7FfKksshhdJV53UZM56EU2l%2FhR6tKBKwgCVc4gkPeYykojO7KOSrbA%2FOW3x734V3gNxRbngpjEOyPNVwU4Tkc%2F3KZv86Co8xZ97K4x4CB01fwMbw6b%2Bd3pGhksWfE9%2BtJNWxc%2FufW2MG3SCg%2BWvbbl50EMUenQ3aYDA5Bezq7MSp%2Bgva%2BSHpht2cMdbjvTC%2FZZ39cbjgc8XECJaZMF2E1RvdJgXJHYeFn42lYWyHKl4XiU8sEmki2jkEt0Gf2woLrocgeDNviZDa1CQsMf%2BNq8SKovwZezRgCadzTspxjAqTGwYtA%2BhPxSjoxBe8%2B7%2FwWDCJw87JBjqkAQjFS7aB4Ll22yR25QXPRhOWxMNvYag%2BbqKu3hmixxrlpMbTC%2FWti0nSVxlXzCIZaPL%2BFRQmQs8hSJcOxBATdIHWiCJXcaywOfwT9wWXjBJTgQ1maQOsxj7i7nnzidHT5VfcSgXcneYvIBp5Bb3wx5Jm06jvgmNXjuvJ8lO7Tre2JThlMdet7QdYIZ1u44FzbiG0ALU5%2BfnPVLfgT15fSsP6pA9v&X-Amz-Signature=93b31eaea8c647e5920eb2912858804c69b1e38f1a5e01db68b40a65084db0f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLCARZGJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHmwSqhvAHGLtzjRNZvdiu50CVBjAu0f1mGIm6x1xf2gIhAJMXLqlcGijx%2FhJBLzQe8GMDZuq3SXOcYiQ3Fj1%2BXh24Kv8DCGwQABoMNjM3NDIzMTgzODA1Igx87RoSxU%2Fy9Dqae74q3APLP4U%2BKy97XqohMZ1muw%2F1TXGRapsF4TK22oI5oBwDn18mbqYh6pIjyH8gvKo6l2BJDhlrA44T2FFbx7%2FSBPD%2B%2BoX5F%2BteGn85%2FIDk9q2ay5oXbCOfnt7isQX8%2Bjb1tG2L3zmFyxhIQ9vkjv8gYhHDEutYeswno27alBeddGKEH1QjvwHNSqTailVnH%2F7YKFJQTAwyJ%2FM1plKD0MxXxZ7u0wwgMyG%2BrC5DGWNQ0aOFSBIeeQpB5aoGrAIvmlf6R2DKoJ59f4WnC6rQl5va0aEA7RLDCL0%2B64jTcPFBRXbJSZmDihABn6wB8Z4slv5Ach6Kwxg4jaNo%2FFNWbSCqaIXMn8ZTwV1xUmZp9gC6XRvfknU8vr4YhYyDKxJHJeLyR1J4GcHhdCH3R3WMpz0xl7wvEEYDjvbfH7kReqQUU4lKbKmGwJ62tKvvVoqfu933%2BwC2Azmy6Sf5ky1dFD0eYV3eQMeKieFsUfyBj6c01l7dsWTvjWK7aVrCoQFk12AuLTiNmeN4hrFN95StjKcofZsUkanXHVibtIhZcoyUPGyp95Blt6qK%2FRY8wQH0DgRn%2BiLZSkhtacsbrQs42xUN7XjAOQxpeh9NmNebotA%2BwRqoUXcH%2FI%2BXe8AgV4a5FjDUw87JBjqkAbn%2FShOJIkqeIWfvexBZo3KsS3bZju86vb88Iu0lG2ygZTJmCy7whX52j%2FCWJoLNwF3O88g6OwFWbKsr%2B5R4ZDC77MwqR1NCjx1lGB3NhZ9EQOxL84W8dSKhkn6HiWd3DBN%2BGE0nghkhW7qKU8kkpKQHAWgryWRjphNNMiVGRJS65me2mT5GdiJSncv6YiOwE51gPyHtIho%2FGS8FzzwycJBQCb8s&X-Amz-Signature=e1e9b41f24310947c1516770cf171afc87e98a08d7413e242301b9c88dc81fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

