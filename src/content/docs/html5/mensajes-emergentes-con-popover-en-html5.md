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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC27PVFE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDsZgG6SlL36GAKQ22DxVXPpoebaWGdycDzXkzDWH4ObwIgRw6MxuHMA68ohA2kCKGMn8UwEob7zjKiZ8S5rYUdeQQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDQfMFcc40AVH5I48CrcA9%2FNCUusr661FLiCRQBQp5HUyOupFM9zkmnJaeIW%2FTjKizVVhfx4X%2B4rsu3oMDgWEAHt%2BKjKNGZ8dkDctXrZprbfvogy5Ln4nNmErOJkUW2cMJgygAKXAtT%2FcmZcgpe4tn9Mat67RxfcIGvAAVtv9J1oo6g4TTBY0pouLmSnt1fzWDCUCqogPXbbkkKkek%2BZ8SGpaZ%2BIwojd5LR2qrW3%2FFunQc%2FiZlsB4armgX5QkBc2dfaX7EUxtWQ2KjSkBSi%2FgD1K5pb4TsPzKWkA%2BLr23X9yiJ9SeVufEOU3wNpuDWhL%2FfDhaX9Nx%2BN2KjRyg7V3zjJDQyCEjyHCRe8C%2F2aTp5A74I2%2FPW5ZalHQ9%2FJOrOxgHlAdYqFwUWb%2BIZatlnvT2jRz1GXuy4OO9fajjRlNEylt%2Bk9x%2BtdR49sQrbOX5VL9MmTiJgLSzTtnDs2Rdmo3xghpI%2BSOXNA9yKY5ZfgkBRjR23Ig183TSTiL8HfvgN6HSJJVMhGuTrVpyvygUcgAvqNRCk1MxpgcZFUNzCTn3p%2FSnHfVx%2FXzNNaz4MwB9w9zof8RC2EQgR21K5wRQLQ786u7ulW7Fp5qw4ytlJGVh2Dr8Qo0fMpUbj%2FprQfTqg8fN7%2BUi22Zpal1NW14MOOUw8kGOqUBLlxcL%2FfF2ePUdTpQXwxydgfW3dl4kiLfZyFopzQrNyiXPuD5S%2BnY5FYfAqKxeDUEIOPDkwUaSblbTzDBfjNEn2BLXD1TDVK4UTZWWVL3MUQ%2FP6Nj%2BpNV09wK067zYDiHBz5BHpUhSbjY%2FwFbKhqqtOkTj9I%2BnDrSkXZoCssuldmO9BnbQihIfIpDbHxJxAeeXxklLqIkEz9TvsfSws%2FTApc7Uurn&X-Amz-Signature=0c7053c93dce2355ee8197ddfa2c96d7080dfb155daeb9d1149f85375ad10768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS2BQA4Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC2uCzRXD%2BcBab4mL6JquNAemhX1X4XyM%2B5JsoiMPhnVQIhAKyoTpidLdZaJbcYE1I7mJck7s%2FRstpY7sC8NjBtxYwTKv8DCDkQABoMNjM3NDIzMTgzODA1IgwqPlAxWPMoXTcYT9kq3AMVFifN5BHIKHCsygleDgHdDfsqw6x8U00YxVymViBvRh8PdBcpCCoMqPP9KTvggIj1H13G5LQEzNLh0BT4pG9B31z87NHXfyrIAlPIf1StCldR3m55F3FJ3u%2Bm4pqOrgsZUDEhpd%2B%2F68wxMecHR%2FUHBdLjf6KmFNrFeMF%2F3jSt%2BjA4UHdJBmof5p0h6XDgHNKyMSm2fV4zEME6u%2FLtf8KTJUDSD2Z8iZZ1A%2BQB6eIZKlA0hIYG%2FrvMRUqsld6FGhqcEtkNApF2cR%2B8kKengIGzXoZLEdnevZCgHKRtmT04heHk1fW226dgmWLCQ%2BH%2BOBvuvAlIR7y6%2FH6cvmc%2FLM400kQZ7HDnBn5h%2F9ueS%2FnyQrFyTTCBHX2YW2dgZzG6eo%2Ft497EKdVzp944rTEZ4%2BCpFaSFaasJTKoU%2F9FilwsGEOviJQh6l%2FIv5iDzeytYIpGKBERZxNh1KbAi6006J8NERMNtCm%2FJu7CCJ2xV%2BPYbYVjrbQulj7lWGRo2J3JE%2B8UCKnfmgiBbSPreHErCnCHej61GN9u20iiI9Y%2FkDp11XdYWeNg%2FFR1uhM4DQ5y5%2BtaRqYEAC%2BpHe54yqBWFOsuCsnRy0AfyN%2F9DvzSlUzXNIG1IOYVwVYLoiWnogjCSlcPJBjqkAaUmOeqmQ2r0OmDcljVIBIWIumSaaaK%2BTbw0bwvQ1mb9escwWzQCEvm2jvtKd6YW69eY02p24ERJoY5W9o62VBJSafmd0igwdn03%2BmDh12xJO5h%2B9G68YArTGmtOdd2s3jaCAs3p75nM%2BEQuOMSMry5COX%2Bvsah%2BYsZjsYbZ7Gl0JBkpJNMF09dUs5VxaR%2B2igwdUHGiuCg5R5DICSPQ7N%2F%2Bkusq&X-Amz-Signature=bdd534eca6bf5c2d7ec9b3f277507d30940a45f10dbbd28cf60dd456554297f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

