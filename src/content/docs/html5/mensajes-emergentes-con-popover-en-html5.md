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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQPZXMWT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEhdJtBYi8A7xShDvT1%2BipWEQvwx7ShWvkOB8GYwpb3pAiASqMJoOS24r1RfwpeaMFiBjs%2Bic%2F3obuE6qPCML8DOzCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMm3iJ%2FU7r9Da68sNEKtwD5SqiW%2Fn9oGn32LROtSGz2Y5ZI0jJMpcXIq6OfArVPhi34mUmrTD1f6%2B8gEruzWPyg85mGdBgcClwPYqfHqpOAeUwr9aLSOqcvxWGU8mX0q91ndq26pLHHHVsjdALfJ2bZJdS0TxltH0wI2Z2vgk3M87pew%2BXnmOHO3FkmQfr6U9G2S8CjqSBaoj2qapZ6LXgJrDR%2FDzBmEKJtE9q4oYeh9F9ZKBa%2BFVTjx7y%2FsDtHYUz9d9vYAmt8pLvE5CMbtXNWb4YUxlU%2FqT6yZLASbq94cfLTo29l7dFU3DEn81Av0RjYYRaYWKgX7%2BWr7%2B9VV5R8%2FRpdIFYfe%2F3ZDhfDbJ5SNBjW%2BMgc9ooCdX16jnD7EvdTP0%2FhguFssfbl2gj0iDnbhjr2T9%2FpnWUTctWWFux1yqezRRLRMl%2BeDnBtNNFxrsOgDwxq%2F2PW9jx3nhzG398BpHTYBac1YYQgtb8W988aAnM150A3CgKrGCzhj60tcMGRFvu6R5Fs5ZWtKDEAYqVeqwpUQXYmqqjuMd9f%2FDXppO%2FvAwRrWfcDJT1zByBXDszzk3b7Rckj%2BjKSZonE3uUlUkZxhB%2FhgtHrzDyw2v6k4tGJ5cn1wm2VoMSx%2F8k6yGOhqdxVkHYhF6zLyUwzKHGyQY6pgGP%2F0Br%2FtM%2Fdp87oVVO29h%2BneeZ6atrfcAc9keI6zpfxMh0YxkP0g5iB%2B%2B38zfTNjermDXbequ0WABvYPgYgubdrO3AWKo0qFhrVFFrBwWfaS%2B4Dh%2BxyHurDfKm2%2BbOhPjv5HcFAY%2FSqptHIqrsKbUp0mIcO84P%2BaMDjGpmsmOo4nl5%2FkBX1zbS%2Bv9g91YEJl%2BAX2P12QLQhKrMvPrISzoeTuV5gAhW&X-Amz-Signature=954830d6aab4405aae4e1ff3dabe3a51aa503fcd07da61a9c2006c6c5a2ec9b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EU24UO3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD71pbYPQzOpbu6Bta7Pok%2F%2BsZn%2FDqdw74hbdr6meBdUgIgTf0IZiKVblsVTffMpbPlVq3b8KEVfsnZftF8Z2vtD34q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIdYsrHOznGOeXgYRSrcA0Qbo1hVUi3lRQFz%2F5ghrjzmBpAlD9cucYzAJoJ3cGgo8yDwLlyTxSlU%2BJJh%2FpY097anf3g9mYLQ4fmiREq%2BbJfxINlPLZafnroVE2rOODbPWlyCSRS%2B7QjaCyCoziH45RaN1K3tLDmRu6pdsBFnEziGLegHkicgqg6Da1uYSperyZVIjWN4%2BjUcPEtvSItTmiORtefXOY%2F%2BV0MCKbqX%2BQPTEJyXA00NA3Ylb7MIB%2FJOvwKfK5Lvv4uSW9rpkraIfInKMGzPVci36G35dedU4L8zK3pI3yiJIlZlAOYdhtmtk9gBgVyGjFERdJnp9N89hudI3%2BSAXu9BCQJEWVu3GoURnHcOhJ%2FM%2FFHvgsPkC3dzisOVHhhTH5T4xpeITyZYbBxb0pD1qgtkhFNJ5OXverfx1cM5zJAJidXZrErqsKY5dMrdYUA9LT3eKB8qsHm9t04iWPJK0AGjB4rvdtMnxk0fBNAojqhr6b47JqV6HX7emWhZDUFcfJNymsFqOIlh2nNXFSEaqMh3AIlQRqpFa4eDQ6hJNHYmxjrlbZNkh%2B7bKhv82S7lTVQiRP7O5OjRFKjWDsoJ8Rm%2F1bB3XRJ3lFwVn1cVPtZVb5vlCDXlNcKKj8YEcQeyzBWaBrwbMNSgxskGOqUBoGHeTEmlYaaLTfIrBf4sw8XusubBGCI%2B%2BKsLVnk3VHmcn%2FjnkssQ9gd6qemozSmAznFtYHpZQcAX%2BAiWsTNnC46gVVRq9wZXUFOCRNOX9%2BNmxvvmDTw5zeZgGpINEKgimFhIwBTMdC7Nd8Ps7b948TG%2FOlrRVdhtwIxJuSyVyw7EXQcHOjH0slxqz6NaV1kndZtSPBL2brRNrVSasKFsh%2Ba54ADO&X-Amz-Signature=db38bbbf96cfb0af35aabd204808e00e116ccbacd9efacededc5d630fd19ae0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

