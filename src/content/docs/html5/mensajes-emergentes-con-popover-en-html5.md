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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TITNYJGT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCWNC%2FOk0GrF4XYvDxSMHqHa7hqp1Ep7SmybPSI%2FvGxLAIgHdULCKhMb%2Bu84RjvLARhYSW6X9nnui1mBp8VzGkchv0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDAmqzYQwTd8NmfIW0ircA%2BAKDtj5cgRBlFmX5k62vdkiczmeF9GeH5bm%2Fz1KDF9pQNMQjIGFC%2F767627TOel0ZlIUxS4jtF%2Fll6HJxC%2FLTC9ftqARD9i5fvUmHmO%2FI%2Byil08%2FCeIkcJLd2HxEkOt5d96yy%2FwYgGhZf5nHixqY1MjrFZguO4Nq3GET%2BmGIHV1XnkHJDsoMQQPyZFy9kUJ9e3FhUeGnIUN1Wp5O0FY5Sn3pACpYq9uR5ldmpSnYqYZ0ihv7uTDPHc3dYId8sF6e81n7xlLfRZpqkkQqBQNpcqcbA8W6HcGUYIAOX6OlFEeGJM%2F7z9rh3XGbR0qm6fYfdMOiQBCZGTVRv1xGbSrydwR0I3%2Fq5uYlyQBO5ZNQnKhvBNBOAUyeuutQc%2F%2Fr%2FiT4O8Uje7j0Y9y9knRhWTxTqNst3rBoqAWgloxpm8rFsgkEikHYIUqkqFkidrq3jvDvUNOe4VWCqKS4bnLYPN8Rcp9r3z8rk%2FFEoEzj7dXKItePSGuI0IkLouTg2psk9YKyFnVjxutnUyEemCV1c3FxfJYpMxo2DlJLLieL5DNg3NeXyZR62VPrY7sgIE2fkQNbzrMnKDFP%2BPVoaB5CJKrFdVmFsOt1Ki%2FNf6wFzmM6VpWGsierkmYKqZCT6qOMNL4wskGOqUBGN0wqSyWI0ysEpCx9ANjBr4ELck3AJu7cJDxH%2BNDgqwvxB8TU16uJ0fMP4sjwr684cCPbQokNeutZX2U1SZPHdU%2B2XTWXIXzmDvdB1Wnbae0bpj1G353cGMJS3imWi9pyPUNEQ%2BIDkDqw%2BrJK%2BwTpzZFzaudIVeJYkyGTAeYBybX7PvVXChXaGqd4b%2FvpB4r1O73KlJvMMrOVAwTMUl81G3oAoh8&X-Amz-Signature=bc4071efeecc8cf8efb7920bd102383b8151a953956310fd8c28268b602d4908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NFM55XI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIHaM%2FR5JzoUFYukp0itReMsYswcgaMZ1jAPw1%2FwM0BwsAiEAysctnAFvcKMAvvFpFcBPPClKd4Uj04SG8%2Fn64Hu5uQIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDEbmI81Mw%2B4QkShpxCrcAxXiwRGGqVYM5qYG8F8XtNYYstmIH0UOdrDJsakcDdAdUy%2FSqbR9zj4AAYlK457d%2FrPqx%2Ftm%2BMX61kfoXXoKj5%2FWonWNyX4NevwBSLam4aDN77a%2Bk1i%2F2gkh9jJsqfM759EdPrw9U9Eneoyn9XI%2F%2B0BDvyQHBmdnnOf6mPTseOWC%2Bq7VAVE6ZvSt6jr6xC3g%2FECKjfODRKcUVRAW2xVJ4C4W7p3RBZnvqtmRiqZhqAFpvc3bni9mL0j5CQ%2F3rpm555ELdDs8Ozp4Cet%2FpslnS%2BDDrFh040T3QxgmQs9JxV7%2Fr9tXRupPAnr8ZoiL6ZCzLBohxVquQ8QRrIgNYaY7neiIgMPeWHiWmwR%2FiT0HlmEyeq0cfD9GI6kaICoHRaihKuE6hGTJmn8uYoE71plRrDJJTqHIPgQXU%2FeVwt8%2B%2BGEaxJBWWFFn9nqMQXqrEJVHbSSDk0avIzpwnJyaKiF9bmI67Nb%2BZ9QNOPI6k64oa7FdTuSxhe9DZ8XRH2IxO65tzn%2F92WKxi3JlVQy30%2BkSIYFfwLkHHVEOxYNP6jzUSRoWwWSAvddWw7%2BdAcaIypXunJD6l0bk9Zr9pOuynoPxR1zUh9Vl4bX3oFFOYr75YFIIKJIXq%2FYRNO8JIOvPMJr4wskGOqUBk%2Fr3PAXeke5Hu6u%2FbNKbFsGEiRdumf3bi9yO0pPC7IxRvRX9Ybf1SzXJecixZMu9bppsguY3UW6NdwzMb%2FeITQMXdQhutyQMrEfdW4QnaMayvZp%2F6ZYs9dyGkE7gVpx6cNMMiV1jM5i2PmSbXR3TswBFfmOJfqtJCsNPZqzIm5Vik4Agdk%2FqRLBTLucrwFIAe6wkMFVTDFvzIMWxshLJMgCs%2FscE&X-Amz-Signature=638a2185af48e551511c7f67f1e3959589a13f7e2cea0e49e1829e8f9b1bfcdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

