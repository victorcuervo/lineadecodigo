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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHYOSDL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPy3ahnP4r%2Fo6J8J7RwjjCfDZ5xA58l7uB4GTuw9Sl8AIgWSO6AcjeOSgm5Bsn0nWx6FJF4DIG0k1W373ghDLiMTMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUXZtmpmV0%2BFu3CmyrcA7988JFWrhsaHkxPfH27ynj7P7u8F9szPHtRZz83GzE1osmfwz1YrhaA04%2BIy25E%2BzuqOKON6OJUQcvDMJ6QK%2ByZbn8VobdHRqZP%2BmWdchrL2Hm1qq0o5eLeuE7aB%2BDfvr4auTI5MLdPfd9voerMdJGn8AAHWQylAubV6rMFnxEIt2d8cMfA%2B03ZQdUdkJKZs7EiaaXIF%2FqhbTey0xhw%2FdZCR4dLHeGU38CC9eMNVbL4WNhJeeIBHoDlZHnsVWQkvC2KFyGCShbOMtwMfIY5%2BpVV8pGa8mNzBvMBKxNZPEtVNe1RlBE70pZuxhM%2BK7CmnEZLqFgoRo%2BOFyJHzmT9N8mTRfdzB7X%2FlHx4q5pPyzCUPq8ijKHRi0589u48MBvvVFftbJUeKlUEkhuiVul%2B2qj71E5dsKQCDB6V8Pgec%2Fmp1SvNfSsyKyXydfg3oEG%2FFIoecetKnHjZhf3%2B509HgHXvIBdFWI5eCybwcddZUzTYWQ%2BFC%2BF%2FEmz9fpK9O6bCqx%2BiOYt1n2oqMkK2x9t3sDZtzKwjtKo6yEBkBhqMMdg4wV8gdUzeXEeeQKSSbyn%2FNQNWLTCg8GZ80mukcU7kbhhe9h0liE5pUS9Bxp0b0Pf8rivuEbGGM6FeXfIJMIPv2MkGOqUBwWDTIeOzY6dr8FnBze9JWqM5RprTFzZvHLlB4GAldR0BmDmnuViXad%2B%2B5Dehr2%2BMzvhIuNEghK9kMwh7sZgx%2BQ0J%2Bd1oLhzkehM82HQRx7NSRcWrzqg9l3LOlFflnyVWEe5B9%2F5Cmmb1Ra7VG6PU0RIHJIpYe2AmMtKV0kbQd8YrbUyKm5ArT73Z4KAtSdhykfIIOyQKHCidoUF2w4MfO5E9HaUM&X-Amz-Signature=7f92e6375ad66e9d1a0d6e301ba05798d464812d471d84863e30dc62e63047e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BIXFQH7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzf%2F5vwRtT4hQ2Kbb%2BOvQ0yQYs2YD5M8A456GrRLcZRAiEAisB4IUx6uGq8%2FdSuf9CMkAdL1yc1faC%2FtCpBVzLOgQMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUAVJTWkK2TJEqGaircA13%2Fcqw1EU4Mjb8IdWEqVH9tpgh8518ea6iMOC47Pjng9Q8fM2mh2uiTq99BNsmA4INPdemO3abAkEO%2Bn0dZAuDOJirHLqKlgxYaexFilxDTXPgAf%2FBWPpT29rfb44HemuOgAd1RkhlUZxgSpAWnoe7hJChHuHlx33MQP4fA%2BKKmMlbRrQ3rkUN6bRVPaeNivhdDlyg2dB8MpqQecBh%2F2PXW9ZUywiXyOhkWhOSbfDAaHAdy2TnS2i8sNx1t1km0SH7HcEUF%2Bxs7WbfPXTaMjgFq5OCNftfYQdQCOxKFw5Q%2FbUjdzFf1XejCOmMQTARQ61NktutiLiajakIwsSeULKs%2F9H15L%2FY%2FyBI%2BLiaGf7x2q%2Fs0%2F5M8XrO5EYPfEwrsyXKU9kj%2B070kfDsx5bXxSqRKV0TAMUgoL8wYkQWahiozrkPGzuX8EzDL8YT5S7sBXPf8zraL%2FXxhta%2BVuIywT%2F2tgYhUogtTpZlHnHFGUNuk8sTIQbwwi4JhM5gC%2BND7tqqCimB1jmC9xHxENYw8bUdcawTa6jUv%2BL42CEptxfUpF3AFCjKMKMExy0bNBOaA6pc4a6EHrokn1PEvBcHFHDEGdU%2BMQ1NOyGt1JhW1jke%2BwMTUquX4yKs3ZUiGMNHu2MkGOqUBCwqDn5RrHY1e%2Fs7IGhFgXF7hU9G87lim9LyuY%2Fb%2B9Atwg5o72jJFB9P4lSveBXU1vBC7uTFlofTxPoG8xn2p8iID%2BIw8iUGOfrhpBHcT864Buz2dUQlmCcfunJ0Cj8nhI%2FcJxsKZkjjfgzQyl5ml099e2QkAwkyF%2BHr%2FPmpPG7qT7jEV%2FeyO7Xsw52wOEljtURhSfXN7S1kVlFsx6hQK45zep5qN&X-Amz-Signature=564eab54c18fdeefcc7c75055e9c15eb78e1ba55df8dd0f338b470abbd22ab56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

