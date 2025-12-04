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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSU6ZCU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnSPk36xid98%2Btu0mu9pCRa6ajUbUhBoIg5LhwajsK5AIgW8f2DNC1DL%2FVXaK73GB59sLUJVOQWN7vOr3EP6kZRTkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDL8DU3rhci4A1k2FsCrcAxTsoZYcrDj%2FOLIBubHBmXq6jOEuJjwZPudzAriFTaMI0Ajfegl3u8lYa76YQ1qfnl8C0zjvjf%2FwfpggJDMC3%2FySyMEE%2BOtm%2FC6PEyXmmRy6BSukadD4dDIOcZ5Iibu39vrBRgevDu5CZEMktuRvFRyv0V2nfNpOXYkgQRNXOFB8s3rn82NjNYTJMdVj0RsMlOHCbG3zqmtrE1gKLyi88RKgw6hTmqCObfl02ivLDbRHnO7Y3oNdvCQDgUo1EJ0oYBexBK0zQ1BTpVnY01fXJJxIi1tvo2qsNAM6S%2FPREyjekIt4gpo8aEDq0cG%2FjwYW0pSijIvp75JGoJ8ynBXDqjesVC2CilFPdgXxbs6hI4CpBqvG5CufvIxBYtMCTgAuvussoNbIKVel8SArVcXLFcHkI67K7WGd%2Fcv%2F2OymVjJeU9Q9O05v0w4Xlhu%2FECaPW%2BmT8Px5hK3iowe11fE89QWI2v1i08nx3WxhXByBSXWCTHkkSj1Lk82p5gwY4myGc6YcbxLPFPSA8o49y6%2BoJBz%2FjxgVs8vcgP8QT%2BtcN%2FGsuoE8TFVbFM6rgoCwN9U0CgFKxWCnPgFSFt9TO8KFLZ1YT9SOZKXL0jpsGACHgmo6hNKfNGb%2B6EvdMY%2BsMPeLyMkGOqUBupsbuTIKiK%2FcdFx7y40Mlw%2FVh%2F3LWBtqaeqDmFKrfGnO2KttloRbnhoSqS9fhugAoSXdjukXRLIdnbHLDxtmPb1ldJ7CFNw4KlBWLo2VAIv3l%2BmiE0ZZ1uMMv4xbWQWXi2BahZWDCGGjj5N%2B3LxMxF2bj9JvHoahNgTDyAgHj9l0Tm2%2BR8cHUF3w2ZaOqXsptAB9vIAvm%2F5VcZIo%2Fvl7gI9HLK0H&X-Amz-Signature=13d807656cb3e9a0de43dbe5b1b36b50be1ada1ac29fc5b2fffcf1673acf1664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSSIM3J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrEq4sD8SpSivPuKU3ENKBczynuwY61RPZqqAHUgxb%2FgIgVSZO%2FgO1i0SdzCPzacS1VS43zLjxQW5TgkBk69E1YN0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLPqHgyFObxASsMlgircA%2ByMNYvinC%2BO8Gcsaft%2F47VAVXBUH%2BMvx2M0EG06k98Zoa7ItYSstvo4Ni5e9LihzQF7MF0GVvrOdOIiIDAHnR8X67tJ9WiQmy%2BqYmrMQXOKRpKYpxZl%2FnSIPithAkqnVnh9drSlLLymNdZxD6%2FrkCD935ZD7CwxN2lLpxssyWkxipkvb1NrTJgF6gjVduAkEUb2%2BMs5%2BmO90EEaitKtvd6xK43RzoSNQ5siDstUBDkOp6d%2B5wU9dPtekEl6AwmYYdMr4YojJUDcWnHKc6tqlhDz8dEUXs5WY0Cm%2B29GOwSS5Ghm6aWFn0rvweUd1E6mkzyW0FiMVU06up5L%2BsZW3DJNJNACCtdve9hZZPaXIbuDYHXX3J%2FUTnZc%2BtIB5WGwNwMlmSA7ewMMZImQCk4sjwd7lq7F7VDly5pJ2W4dAITLbvj1pe4qswQc1e0PUoRi%2FV9F3oZWtmxkkHE5WeXRoZqKTNcFpFxWCF1NvLzKN%2B5TryLTfwacaG4tcnLMhbdlExVvjD%2Bspb9RyrZkSUbHqxmyhAkT4wIg3vCVozNU7q4%2Fsr64cksHrjDDZCtJ3jsfKXSzQvcobZinGcsZ6y%2BjGzvda7lmOpH8maZVIdv1OXcfflY0ahqvzQgHsdAnMPeLyMkGOqUByPvPaoKd6OcF1q9Iw8yS6Y6SNTWE%2FTOz2kckinpF%2B9%2FBuxn%2FB0BmzuTftopS7VAyCGIzsDLh%2FGOylJpwypXkzHs9EGg8d8AARM7QVKqGwulMDU50eOvQUhkeJ2e3TMTlYzAXg0nRXQ2k9FnAeaPe47yIgeI6dRCzG59Gjcuy%2Fgd96V2GSpe2Txt%2Fsi291vVmHptsRAyvqUY6N6Lqdiu7KAeCPXPX&X-Amz-Signature=a3d16870a88e38b49fc62a3b5d82c366c3abce995ae1f076d33d18034790e121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

