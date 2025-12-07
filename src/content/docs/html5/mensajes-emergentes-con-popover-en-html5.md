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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKY2XXGE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdqOhwqx19yvEDDS7BLE8nGOT%2F707TffnShAwPS3iuaAiEAjIiUT4d0aCNh%2FBiQPKCaNg5fbDpLExYCl9IDZny8UacqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BmWSN0ClCyRXN%2BVSrcA8pTDBWFxRUV8imCtyjaDMIWGUdwEwZ%2FYbblk5C4%2FMAagaA1p1cBFt7%2FLbBW%2Bagvrph2nmIEZn3xYN7fYBXdyRxPB8inOh5m5m8IL4XKnZfNTEDKOAIH%2FGiiWo12pQ3%2BpzBz7Ryok4QXGmEwjNz4GQiuC86BLRiCayai27GLePLuORsmxlMDzOfSNpELGRhYfoSswX3KsrveRGFXvKtEGlWn4enZRIi4wkSy%2FBlClxiY1NQsukVrR8DIG184Jl8OpevS4hlvSBGCZbl6ut3tePzL4MOOxmBOdqIbAhH3EL%2Fw9IFtw0t46uZvNs4MUrobbeSidAi11DxF%2BHOCYnZ9M8BCHeDgFZjzM7ZrUa6phUfYMyh9uRXa5KN1JOw5Lbl0IWsJepHkEnOhVY7pGkey9e4jf%2BpTq7tQhmy9LKowW4TufgL2UUFZ%2FoL%2BR0yWTmIYaYtSQLMg1fqhhotzc9d5ISC7EJMwpUu443IjxohkRIwFhPKXpVNKzYAik69BrgzH6%2F6PRwtIz7g5%2B1f61KU%2F30TP4odd7K418xYUOgLKWD0p6a%2BH3nus7w2L8RtvoPXRsoVNf0c2sSObCvivvW8OzQ%2BM9J6QsL6dhcmuKrkiMGzuzUGNyLdQFxPXHhk%2BMMX90skGOqUBeqSGyDnUapUYUZFC5WH0qAXk7WegipvIPtt7xy0H4WMKKviTsBSGmDc%2F01L4OF0ox4SNa9WTrOHq8agf06G4674dEvxCjqv%2FG%2B2EWUf5C5fNpiKqjKGNSfVUdZBLfuHTQJDRNTMX6cOXrb34Zd0kmzfzQRNRpPWTgwPqDTiJt0GmXyQm1uXa2KiNELAmc5%2FgJ8PMsWwkbByaAp8GOHH7z1Y1d9KO&X-Amz-Signature=6dce0ef1085366858326da2f39bc6cce8aca44b1ba53929b249a6154a09e9fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFNABSW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmo9Jg2T4gBjG%2FJfKyEKncsK%2FHu757A9cYsx7uP3LHZAiEAwWDGWKa6mez6GvioYfpIjc8s26a66IlqWF7zzP6XImoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALd4qqn8s%2FD0ofHOircA07kx7L6C0vTlRiLeFtHOzQ%2Frf%2FhZiNXIkwM5hAKXgKXh%2BQwnOKlovCcNlFCs7JNjLs7F7lo6nVF%2FDw%2BkXTFXei1YlrrM8Q4DF8uHTX%2Bw4ayATYXRtcRonjAg0hnOuVZC%2BpUOBBihnBif08w9EjRxRrEQ74aJaxqguwng76L2x5kbTSGP%2B4n8Sm4x6FXxzxba2dP9OEn9Ttw1MypmdJoJqGR5qr26pFx7P7%2FiaU9cnNclUl%2BqKMK%2Fn3mSJoF1jtuCqYkO9VwjJM%2BaPLqA%2BIHqKjDShrQbEjartOTZOah96G743omQ9LId8Oz9xdbECF6SNHvkw1ZeLJFRTiVXuSIwDkvQQTjEZi6mjNuz4EQFGg5xu%2BwasHWzu%2FtCAZ0MnxVJnm%2F0wfYoQG7A%2FDNWrbOzFgfK6SoyUcJPhESQXQyx2S3SmgWfmbi1CN0%2B%2BxIg7cTdtrVfubMZjpIgAtBQSq7G43%2Fh5evGYMl8vsBlLMLqfIsyE98NKuL9SwPS6tWyD47IUNx1VnriDy34cjnIjy3xTlyKtJ2gG1GnLKT1y9lOn4HVQWjCvPoiyCYyXn13vNuAnA%2FBnrHpaS1qWQLpPCbNJj9qu%2FAtpJREnKG8l1%2FoiEm%2F8MKyVN1tQ4Qczt0MLD%2B0skGOqUB2vDbebyO%2FK9nhoyojXEHeLWZZzI1Gc%2BlhOKMfqImP5EtRBli%2FjUrR2tcN5Z491glXA3MKWhiEdndiHe0UOWY74NxCliDfM9tjcrZcX10mf%2FrTde9qWdQSVhfCUYtQHYLE63Ste3gVCLslWT3rD8gP0nkNO2hBwaXBFBHhESbcllTbCEYo%2FhItSHk0KKbuKOD3F%2Bcj5lHXcuF8KE%2FzMfoeZsMGro2&X-Amz-Signature=3ea8400536b3e95541969209a4cd6a34eb98078a3ef84a2a73c3075e8eb9d253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

