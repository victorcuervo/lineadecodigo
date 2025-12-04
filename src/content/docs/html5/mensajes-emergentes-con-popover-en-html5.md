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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TZC3TDG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIB1He5THNShbCJMfF3BKkDWc6RPIDmqrmrJa1MoTguaRAiEAx43wDv1cFImbvoAb%2Fb2eBzE%2FOUfn6YNG8s6cIPL6K%2BMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKxlDtjQJKL9IhbEqircA8rpYpSUurHlkJLHo3w3US4cRYKly2PVvxpeBpKiiz%2B%2BIL5D2aEr4nQEZHEBUGN5M6DpLKkdWvjGkAbwzv5g5ItxwiRc8wHtab4LDWX4k8MivCarBFpUiApznfK0elIB83LJFI4gBrceQKY4uZl7oKbQ81S9Z6uwoWgnmHJa6xPrkp2WO7VpN%2FiNnhQHppyWqk9BdsL0tJjY%2FxVMSSDiSCIuy%2FVJwZ7N5fbUoF5lnq%2BJRCntVDDv5xD1zWBsS6cqGwiO3gsIBn9jMlPBCDlpPmsqcawVmPiDryqj%2FFcwnU3XajZv4nRUU7cGphjeutIblFauWnNX6KOKbzoUmmlAXRueq1z92JOzLujixTL7AshZeYRiVX1%2BXvv3G6CMfICRI2wNOYRHGUZFiYfI8FIOaYP%2BzLQTSI3JGcjRlE%2Fx7TPhp7WF9BLLbi92LDbOkbJJI3jrRMGI6bb3iFM0%2FT2eeLz2fuhe1zxuZt%2F2euN9AE9mHztilMN9CL%2FMWYUD10LWVQiR34il%2BxS85J7ENlSD3Dh%2F2qyLJ9XJXqfRnkUgK%2FOMxK%2FMivqhawT74XZKv7ube783zEbHoAMsEQIelCiGTTjZi4R3JQOpOsGIuSi%2BIKME%2FcAfTRi2BskYGoaXMNvyw8kGOqUBphhzcIEKWv%2FFpqqt4vBKWvdH6zL4iyO62mcn47gaR1vyH0uEPxzUZBZt2c49kCq8HWM%2FdEO57T31B4Aqv1%2BU9PVTevt7R%2BqhT4kUajxoLl7rJjPzBcsGOp9reHPzpM3rci9jiEF0AgxBy8xJuVklpjsChYq%2Boc0eSlU2t97tnMO4iIDNLSG1j3i7HegFh%2FhCkUYXDO879SXmp1z6dCf3bqHZFawm&X-Amz-Signature=cf368a2d84e6d39908d4d337d5f79f4bc79a3f3001d6d813aa7f2ae4cfa502c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT4OIAUI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAPqwpf7DbeOXSuQeWR0FVlIiKuGFWjpaXBPN%2FfR9k61AiEAwhNOfkMcHi%2FxbjApfehrMaprrA0dEjXjB8%2FvkkSHY54q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKNAjX8%2Bruz%2Fa29rFSrcA167nmClzUqGdGcEtdKnPYLKEqc5Z9BKg7Ig7yyKFPip7yVyfBRyNhwBkHYKevr0twfiyPJe8hDu4OFOF5jCeKY%2FtnClQA9A1%2BKngombp6%2BXKyxhM3qBJPHiHx7DPDqBPXEr6%2F3SC52ra%2FuWpm%2FOnr0vf74hgjI9bpb5Y68ZGQA%2FKUaidQWm6%2FPa%2Fvb%2F%2FCUWW7tHbSq0A4BaHRBIbv3SsKA422dEyJ%2BzhpS446aZYFDNmCnKSJia8mvJnslLJD2dvSS4Es3KYlhbfwzumOrardpviFqnobqNJ6uwR8VCjimtwqDQfgqF6W6M4hJKoOr86yh%2FBedNQodqBn8mHwqUTI%2F1xXyb9ySojENWdvDhfsLzkSquT8qgVIK5BSMoaqzQPcVIAW2%2FildW6ka8j%2FqSNUpO3WbRKYwLlhxicSlv%2BpkWk7hRkBX3Ii22S27UAXgtvMS%2FYPyqHh%2BK%2FIsjyaCibLLOLrZ2oz9JK%2BppwdhRr7o9EcmpOXi49wzUhG9Vsw%2BZG0jLXfjmRewa3wfG7orhtYbF2AG5os%2BQ0%2BiFKKrBMeO3oBEZyqBy%2F7snbnAz2QWrmvZHPVzGUl8WAPRTOcWufg8LitWIZEHCGWQyns3Xla23sHdBFSxeEtdTrZQFMMTyw8kGOqUBEViDh%2BDCpuAaCARwVChV7Q7Un9tp0ZOS4saWogBdI8knqGBJn7QjYjC3P70Zd0q7v8VxhJqGvXuJXEIQBLyocWY5RXTN9jMv34NyJwdS8Xe3n5C8m21%2Fo6um7kRiKIxDo2y%2FVxHsaZjx3CBFjsvx7Tz%2FH%2BIFu%2BdeEqcxtIXrzpez3B2mD1jH%2B28DEOujqICETVwQm4s%2FmJeeOivW7axl4sWjzBQb&X-Amz-Signature=286715e1cd5652e52d6c4429b83daeb80f2c59a660caf26cac67728918e844c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

