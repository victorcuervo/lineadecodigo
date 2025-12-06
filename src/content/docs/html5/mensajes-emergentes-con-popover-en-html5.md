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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV5S7GTJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxQK8cvDSr5rg8JGI81z9%2FQ2GyTFwFB17JyTGRfRJOBAIhAJ%2Fdn7SyQfymdnVMctko%2F3xZVrNaS1M1tz6wzTUtc531Kv8DCHoQABoMNjM3NDIzMTgzODA1IgxNIKr9whrMp9T9gysq3AOezF3BsukQScuzXnGV0b118hueC0LbLbAKYnPx22XyZ3%2FAtTkpXs4cHVHolHC2tDTJOpJd9QdrZ9ztA%2F86kSYxQP25zR7jYYsnM68pH9aHRetpmPRL9J27MgOTneuO64FVPoBg2bL6GgwtVdzyneomzfmU3ckR%2Bnbi0orjKa%2BxPhW0bpNlhtSBlwKhD2Q8HpIZILqllpdqRN00sXhkyILD9Me3gCahXxukV5aO6X3Zoixg%2BANpWn0A8kKlt9R%2BrPGoKZP241CSKHx8LqrWbQ5%2FxfCDu86tMX0%2B%2FPRdBjawtEXl2G4fPeHQNteKfZeXadOU3B0XabT701q0nYHmU0fyWJ4HowL9GehIDISegohM25DWWs4ymoBEAdckt7tpCQaaE5EuGJHyNcCSolSbotI7duchmw0SEE9PaKiZVB9iy60rWqZrBWFO7WBSZBizijqWCJQZ0wkW0A7TQPN4jAI6PedjktGy5El5kFozUAYRKoKCJPs4UU0bH2GHyURrrDbb9x2qIDNiW3u54amOlEJvmQF03UeyIc17nw8myzSSOIxs5iS9OmZxykcz%2FGmF1tCfc3q60j99ty8TT%2Bo9MXNSyZu8AYK7oth79hYH1HKACXc%2FwBZLAt6fcy78zTCkxdHJBjqkAe0K4MF3pDGMUbffuMdGJRNp%2Bs6%2BL6i4Vo4XOQs%2Bz7Uium2crTLla5p9IVy3nC8xubyqrR6zEl3fgSkQvGCP6qngwV%2FG423JB2iyFlJoPn%2FGIKI8xSI8gqaM4fNNCJU6pXhTESen1cP6DW5TS%2FmJq%2FDEs5BOrAlxe44qls3aQvDzA7YZFvmXy%2F5ulS%2Bya34IOF8G4Lj%2BQ2NcEM2%2FpMiIqYqL3PZS&X-Amz-Signature=8bd98ffadff4545b64acef0d11598079cd7c7f4d02c5c823e5fc4725e24c0bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4LOU6OT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2B9bHZkMXhpptbB7vgnZsbsuxptzIx7T%2FKUyF8DNu1qAiBpyqQIxrebDd8%2FILgBq%2BvXMXBTYqtcf2c6FWzghxc87Cr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMhhnSUpn1mekMizlMKtwDGzdmyKAhmHaqPKJ8CZNEqXH8iEBIfJjZ1Ee1iR5Jvv8T9PPvwEBePAjtSEAtG82RfbOz3y%2BxJlW2NAxNkdU4yFnmUgWlQWCvooks2JFFlegyBGfvwTsuQYHzNvGteatvp69Btz3qYFTHblF2Fp2X5Y1OrkxObRoc3yYEBaBDJXLqrzx2WLokgailnmVpVioKUTsONqJXMuDknF41WAQU0foHprToe%2BA3fw1rKtaksg%2Fck1wBPpLy8s0iy9r4D0S9vdEwd9iHtFpIDTN78cDldJVwsI83am0KfyVOnOQGnN5Pk4SXfDamKAR4uPtATk%2BepTQ8eLVAyOnsdertaCbs6M9vrie1gCSqcvBdjl%2Bo5JPo%2FpGukr406e6a0djB8I4sqFCiP%2BDozof2w3HZp%2F5oEbxj6neEuZ7ATedZN%2FQKyOLTQEgB%2Fz%2FkVw%2FWlbWZWY19mLc16BQnG7GGA9ABuQtHIoSN5maTBLzUO3ZD9Vcqf92G6bstte%2FJ0GQZa2GnfqQSqukiF0YZACUo7QJEHgdMfr7dqPz%2Fk1XzHY7c9KQ8pgSb0TWcMVls%2B3vuaz8SazQ2zUsKpYEeHIRo365Lg3lUSdhLmJgUU2%2BT33zJdQDY70KShSTzkqBSCHChXwkwiczRyQY6pgEQk9NMt%2BxLkj39DLt%2BxXLVNpYRz69AL6K1Vrg0rfK5TyZWyqhCwh2WRJJU%2BinA6VuNth1Euuz4UQK6DkxYFD5hfcmEIj6kgPF89GdCl0f36QDGrlsgY3GTW3ruFAsEWi0BbYhvLDDh%2BzGImjiO13EQDVJ%2B5xuyfeXRydt6dTGDNV3GqhKnUmiOCVcKl6grSFEOOhBazr5nXqvWCEBqC88RqXSSSHve&X-Amz-Signature=fa7056ba9d59f180a28d3f31042450ca19a312ef32276f9cf3ba9f64f340f49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

