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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMKDVHQF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDG5J7qnaegBDY5gA8SqDOFI8%2BWl1kFOOQBhJwvX%2B2YrQIhAJAfO4d4v3XnYIn7mnraIU9pvKs6I%2BDFcu0mVwGUt%2FzVKv8DCCIQABoMNjM3NDIzMTgzODA1IgxjGgGX%2FWL0Rz3tU9sq3ANQJJcge5auZQChEbyrMtBdkIhay%2FZTxQTELK%2Fgb9iMYXJpSRFyN49JV2PtUA4YFDOaqZlpx%2F65V%2Bgo12EZ7Q%2BwBjquTIScoJlj59TGS3tAMzHIeLVlhmRrIKCJ%2FtqK6H%2Fy3eJmwgJxIJ5lRnJgKry%2BZy3uA5bHccaUF5BoSYwinsuB69FRYfrB3ICzuL3kje5lsWa2AUZ1LM%2BGhSJ9buDOWK%2FBccrHNJW2ztVfkT%2B%2B9bVpbnSk125Yi1WttsvIt3KlWkly8R%2B7ib8GtyFkxM31zD44tcNB2C%2BgO3R%2FO2MB0168nqau%2FR7P1d%2BQFQSHHWaNDmzCjFjq36bPb1owaW8YVeZQbK8RD%2BBDeynxnCkQuc4ZqkbxQt3EQaKZY9TA%2BTcNH776u7fyMm1OB2YZHbkRcrsk5anzV1GqJb2bkGEUaJ2rKPoyVO0erwk3KT1%2F7n6%2F6o1QKxWQWl2i%2BMCIUEXwG%2BGWPFSAOoUOFLMGmIxMOL8q27zRGNk%2Bw4KRpsk5vi7EV9yGKN6dpqtWfVEqC6oFETU847WtW9P692udYa3JpmYbyvE%2BKSC0HtRAOWgaQis2D0gO2rJwCS5xCQ%2FIRYBicKw2qk%2BLqrX%2BiMPMmqG68Ikcd61NErSUsOAcpzDslr7JBjqkAQMxu0TP%2B7Vgl1skedPMENKnQbRGQvgWOCi9wnqfeQeuqOiiDqF8uMFx1y7dm5F7xPkuISrSkV%2BjSM%2Ff7tLiuYfSiIFpjOiT4k7mti2vEIEvHneP6ig42l8YHgzSszrbBdbsDljbQR%2BvY%2FGMqYpvfC3bmmax7FS1UfnRLht1EwHAMr144cnwKGCh%2Bx59BBlyIBl%2BaAzhIDLVrYhva%2FtugJWVF%2BRT&X-Amz-Signature=3111f737567d58ce4af42b5692282665a9a64bdd65ac1efcf600fa24c35dc29d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IEUC2NU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD08rOWO%2FW4n0qXyQXsykO2VItGcEjiBv0avKFqETP6QAIgf4Wz3mD8u7mldnhwncVsMoJzuTL3f37mc%2FLytQ3dRA0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAS4kVu%2BVlQ2A%2BhGVCrcA87cuXmXluACBI4u0mfbaIZ3tNoHSplDb6qaPBWs3z1sLNnufudK%2FtViJpqy7xtGF2MMSM3rlBKZVtLI5jbfgc13VmX%2BdskdGMlZu47LyT1jx9DVKb5IjSEFLNazB%2B22HyU%2BxpfKAJRZZT%2BuBJU3SwGmskbLRy6V3YmGKySh9olmWmfOL%2Fale5mODyffq9f1VcQb0BTBwE1jCT0B58CJ%2BSD%2BeyjXo%2BwJajtVZyW%2FMCf4g5arG4xAZe%2B036FvnZ%2BaChz1VYh8t4igOQ32iK0a%2BRPJWhNax%2F4jIAH4dNJfjjHsolIK7oynESeMuARvf1Ml%2BMkGWub0WIAMWXzc%2BMpnJ%2FocNpVgkFeRo%2F7FfFbZ22GEknKAJO7u3R8gYbsUF3CRNQ0%2BcFnsnloYOTU3g4XBHI3xKf7tUfd3a2CcM7g1h3Y9I7pOSfOyCRDRz4%2F9X82%2FEwejLPgbXBLG4wY0hcvUhQFixYeRgIhwcfXGK6MnSgZ1bcSZN4epIQzEWX0oYBfpOR3atxRmfntxBMM2szmTzMAciqtCq81CASyjAbmZL6J8VtJOiEkBGdz8kM6LVrv4tshtMA%2BvRBHyvhT%2FRiEW3yBvIrYdFzxn7zo52%2FxlqkbakCASPSB2A4czrIFWMMGUvskGOqUBeK%2F%2B%2Bgm9eKLbxywa3WM2zhpjslsEcL8%2F2Bmwhg0UGqEiNHb50kLMKAa6awH9PoOP33xtHLec0eTH%2B1FrF%2FbxK04bD%2F4mFvWgIcBfmf7g4fgcZnjV1fTPZ8bPKw%2BRfVGp5Cohzl6ESzYQFqLBffQxjlwmReLvAOVwStq9LHn5F%2BH7LpIXh0oTvvvMEOEp39ZrYpcs1LrEvpKR6caGO75itfXnm%2FU5&X-Amz-Signature=81bfadabbd7b87d5cd0c3c9045213fb01b77544714d0834f0d032dd04ce12220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

