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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4G7NAX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2LmObItopMW7228OtoI6oYw1%2BIZDP9D2i3h8ldn26RAiEAufXGvP5MamyUibEtJAzMILQ%2B2GhX1xTPrpj6vXhnelAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKESL6Ir2RyhJwAY3yrcA1L7%2FFX31A21tNlJkMDn7YByKQBMfre56VfLrK%2F9pqIdCYmNl8iVfaRWmTja5Rf7c0U9MND5jlqa6N63WcA%2FXDlsboyc1yAFQsm6RaXgP7pqYQoip8VP%2Bou0f%2FxTwV3IZmORNgkkAnhGXUEU0ppb4deRYTERaZ7OZavAtURGgothC%2BZLuP%2BTqqP4P9FRU05nxkfjjz%2FYYnkznf2Mh9%2FTvw5oWd052q3LVZuAzqHTYJNY1r%2F%2BsG6BEGBEie3368LTN8Pz7gUV160OaX8TPhbtWZnMQmRx82L%2Fq%2BezUC2Qj2BbIxxzXr4m5KLiDyVpDi3SQbWTkwQVCj37s5zTnZwz86Y%2F%2BWNFzRT3RNcl3RYheTVWKQ8e%2F8QBc9xPki82gIk1h2Jt2gIa58CPhRuwEdQWqDG9fgx2tMyypoLL68sC7ybLqH3k367pairLOFd9cdOwFJYvIDyOdIEWBk%2BWgDzYqD6utCHmY%2BmX%2FoXsZZM5Jr456B64gFdCaOarDZNiaYoPVDur6R6gx6CXPPKDC13yEtVbpBbRcFMStBKjltvCxcbzYc5h5CVlXzNpCF%2Fq1hdwAgXqvAGhJC%2FPBOP%2F8k1notZFcjIiCOzKkTojWZ%2FZkmECaFWH2YF9YWJrFgNMMIOMyMkGOqUBLIErZbkAw486GMNelZTpIByvdjNrVsbipScC%2B3VRgU2RCMAwgKxQnhdjOMnqn5MufQ9t8rjl%2Fv3FTe4uGIRCffbnxe%2BqQNYK%2FBmvGiVbau38W61Ol4QVpHwCuzpPYVpNn9OuhCrOI7iIxYBegrhK2FtaHWkPkUu1yGWfosFV6M1c5XYXCksatyHcz8qtOXA19Om4Pw1gfh9nXQ4M2JBubk7L6X25&X-Amz-Signature=6a4576649674729c42efb438fad466d9273ed4469249de014a4d7d82f3c698cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZIQTTW5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIPg3U%2BF6m2JPkllDXCDwUKMY3ONk6PEHt1hgwblmV6QIgB7pTsinDgIJ4f%2BAhbC3nI%2BKSSFq4Vli4mphzG26A12wq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDM0B1hihf470aGmAgyrcA7wkpWwSUPF7EGfQ9aBR%2Fgh5q%2FzJFlmliwft%2Bxi0Xk60EjWj6xUVQPwq8AAXAjWzN3DaWTgXFWE0TiSucTWQX16bpEb4NYq40wmo0tMOsOSxXfmLfhBvi0u3jg7gDcI%2BNCQFzKsXN51Lsbk%2Flf5i%2F5dEfOimViBVYfLrLfidglyy%2FHAjvvxSdhAusKcKIa98HkZfFKHwa%2Bf13YugvB4%2BjX9gQpV87%2Bt3KiTOwOo1GXDRUxSDwO7%2Bs%2BW7kwxTuH9KqijzACVfHxo4QDRDUHFW17iKBxXrpfKxHW1xyH6m3jBDDlS8BGVZH6fKf2diBOq%2FYEx3plaLFFet6IP3l%2B3U32aCEHi58TdGIlqgdKWPPxWwjSRjB%2BNvaCMz1luWMRCV9eDDuJhA1l4do6dQNxouW74NZd2tNbDIOUJBKtTintKT3FZmXJKZdnHRPf0Bhl%2Bw7DuJ%2Ffmf1DLoH3Qx9KSL7VKgfkvOuf99hyWREh2s9uEsn1KNCHt%2B44fyFbVn6tzk0019KxXVMxXlr2Io2oZfzI%2FzKv4bTItyORXH%2BBWnmuKzI83QuGeLwpJe69Wjf%2FzlSgjy9foOXkwr1pGRUaciTxib8k0n6INyVlTtwqLvtbV5rGknlxw39idp5GieMLCMyMkGOqUBG26GdSCU8aFj0muC9cYVBGt%2B7T%2BWD8cSpnqVJ4ct%2F9KOdocn4kyEdAmZXpPhCaLoNgRaqjgfUmtKBEyPg23EF2YiN2T2ZzLrzuhqAjRwinSxCaW6gPMgPPBz5%2FEEh0qVy%2B3CEJk%2BN1uAmkyyWhZEIuT8IGW2b3BmuigYSQMj9THNphJOP4KZWCX2kZGzy0CDLPnwFWJv%2BqX646bAv%2F1Nk8wz%2BT25&X-Amz-Signature=7be57fdcd0325aa2d019a46284893fc0ce7d3710eb4c68055bdc24e61f31e0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

