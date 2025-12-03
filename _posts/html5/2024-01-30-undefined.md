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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643TIHVGN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBanYQ3Yt7iCG1KAt2VrPxZuUOd2%2BbpjOypDKQ0D3b6mAiBCbuzFxzBpRj%2FRLS%2FEVGTUKACnAZVOFgLQTptglMj9Qir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMNfrT5LsMJeZ4%2BAHgKtwD9Vbdei66Wt8TmCXWPpD3fIRQSSBUG6wV%2BX40KeC1MWI1h70Xt3m2rDmLbMDjFbG7fj91kgiRfPPRi%2BxKa6lBRC6qpKWW9dTNrEKLSiauFyaEV1TO7H1hr9Mw1nOLiWY5GbF8od%2Bw2r5Skw0%2Bsq9ylUdCGIdEcSnsIizHHE3VLNNQXsYmU41fP6bno5SO3cKcUSonr3ywM%2FnjjSSRdsa4i1ci3Zff8xO8438HmrWz1sjWBamnpNpfiQTkdQN5ZTtU5vVFikTWb5rI4AiAmC7efCtTc2Dwix7eFGuTIyHeeYiqWoed4EG2xVvdezWx4wcBtR%2FEMjQ6vPD6rc4YYe%2Bo%2B74QEN005RSuSWe3%2FwyCxLPsROVYxZm5ppUH%2FtE56Cik7co%2Bs%2BckW%2BX2F3E7egNH%2BnvPGP0miQ8dyIxVELyWCk5bkhPa%2F7OY4Ztsrqqbsze4B%2BGR399rbi34kkBKcqdF8%2Fedm0COvkEiOBvwNon27HrKLeNaY%2BfKSAT4LaPMdtIbAOVneF3jWmfGlU0DBpIoZQu%2B2lIS4NwdtUe5KZ5qbJ4naGDTjcPpA1VTPQ0K%2B%2BW%2BK3Eehg6gGAtU70Jg8l01eMaB6fUqLk7ovY2tNfe3bRjLi6rkPt3LzKWcZHQw0Jq%2FyQY6pgFf5W7XPvJ%2Bbea3%2BqVdKB5lLgYy%2B%2FdwU4bEw7VCdDtjzOwFhq%2Fygk5WZCoKhnpC3OWns8vSvIJlzAXIiAz0I1zx3Hlh0Wqm5R%2BW6o8uUzzCHti8aDEp3iwMSjheHThBgBtxHCawANOI0Cyc2Fxi2b%2F721D%2Bj3F%2B%2F07OJEU9s0zKYy3AoIRNtapuwqvrhAAjbMxw60szfkImbS5F7dBOzwlvNDT1iwmc&X-Amz-Signature=b32a4f727b22b23927489af45772d77d9be90e7ad740df41db2196ba22339225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJVJJ2W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIBkIL9AKCM9%2F41ADOT9hMn171lg6FKe%2BGtrgf%2F4uTmGDAiEAgMvb4tKhIw4CZlzX%2FXJ%2BkPfEov5OQvqXShw40wH3GHMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDO2GQQ8Lh9unHG%2Bj6SrcA7XNoYaNv5l8QnPAdRZzZGncnHkTTov4ku2lF3JjNObhu%2FbCySnpBHVYh%2B5y7xLo5yVRwEfzSBR6QErogTOsk2H913CPWEIMR%2BgL9BJH0VC1my1D3tWlNxWUF2%2BZf7wAj9dtkNg%2BqWbE44cRbiRCBOzDbO5rvZI8QV1BoHTKDh9tqRdP56Qn9jieuBnTxzodGFe9Grv2zc1zkauyQgf%2FY2vt4DgcMpilHbi0XQBlbPdRIfI0rpon2jvdUpDIk3Msj0VQli5hwzxbgYdVIEE97AP5bMY%2FgEIFZiYwzpBBW%2BXHisp7Uy0Uk9iq%2FWScjRwa%2BWbif3vZH7wbMHqbPYgKmKE80oyvRuYGFNgDUhC49P2uUbzuOUhkctfSDzPZ83fDpRV71aWEZ9rB8Vuk3h0YO%2BqeMxGzXxeAjsakasG6NE7Jr4ijwQ42Ch0oQ6O1561ka9BrKtHbU2wVVsMMKLyiyYpmhuBpGrJkCGmA5t4w3pqt3VbytNgaKlK4ZjQ9L4vE7toYMxb%2FrryS0ocz0%2BncaNAKT%2FX%2BAsX09%2FlkFAiiVGqJh3mSCqbZhmjrsUZEquufwcRAKqYveZoG8agwt87X5o35oMc5ihMbx6Ub5JE%2Fzw9K8GN%2BMq2rttRAgbGfMJmav8kGOqUBMVYrLyjgJFYvBywpZXCNTngxbAU2XZsQ%2FxO0K1dl6zR%2BACxmCKwxRiecNa%2BLkzSF9nRbYCG0PJyFXG4BmvAdpNsLHaLxWp7mMreptYelVAVxgJwRx7DB197cFbxtVjy%2FdptdYR9upxJ79oW17UUj%2FkOctlaC5ZyecS9rcehhX8opykzS6b0ubw%2BLw0EW7w8u3bCq4PKmyLuiigOg%2FvkJBa%2FwfOTK&X-Amz-Signature=46288b530c557db3026a5055f7027c4463875338b124795b53ec0bb47ff1fec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

