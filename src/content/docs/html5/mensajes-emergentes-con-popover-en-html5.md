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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AO56CW3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwAPhoVnMeYWSUssyE97C3oz36mkvOtlKvtJFcStWEXAiBmeC081Tt4PoK38FPwZPgjJyUf8YKRN28tbTLXSZ2DwSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6oZNCLLx1lKhc2YKtwDLBRtunHh%2FdAsUWzc5zq66h7iE8qWuslzMJgoxAKlYVzxInt94P8%2BsEKkkQ8oOXqCHZRlM1Q%2Ffuf3r4dzJRgGNe4awHfd1N5TttBPo8hbykgQvgzpc%2B5ACZOB8iOu0UXaffStOUC88fn4Pag4XZ%2B9L0baeEe3uXW%2FAZiPeRIu6qEhNXTVM44BWSgHKw2HMYWBrwzxOC%2BTZE7wXD%2F1gRsBgIDsr%2FkBc3DxIMQ8fpPH%2BtzAYvFt49O%2Fbp2N5wjhi8MG1kNv7eWGOsQzzZ%2FSA%2FdbCQ6iwRLVZx6a%2Bam1MxUtphaYwVreEyv9vnHgfG56DdkCh5EOv6gbOKgKMq9AkV5V1vwQeAnxe1agOLo4Wwm9E2Ped3Y1yIHASDw2qtTVzu3lpaE4BlX5iT0tt48O%2BHCcUl2zFJoHaqr%2BOKQ1NuttNtCxYapo01U3pHiT%2BNzO80KazAn%2ByaIasJLVhOLkaSvFuKY4FR4maDic%2BhFpZtT%2BlSFNtPJfRWTGkXqwAEYBxWmKmG%2B3LGE6b2s7ybEadDJKNypveAcFu1avaVDDxiQmYt3AqQ0nE1Y6aAFrGEUFWwqZkXEvKxA3hNCGKMVOFbcp4zI3EHiQCsNNumj9NYqwbFdPp7k0%2BKJdhbEKt94w2uTbyQY6pgFseAKfwE7ToloGoA8MtlOnDmZseMa1cqx0x47MME5jmeUNoZP8fayPp8tn5ocM4Z4EyQ7qMwRWwx2nndD8BQDV3JyyepQnMBnD6uLBC5dF%2B7JK56JQjc1pd1IaVOr6f8%2FTHerYIKx22pJuaTukh2GC5B7enMNo8q9MbOZ3Gq2RjEifABvaG6SkHeV9XGGohylwxEjMqIaD9zBzgc2eVVFk5oW1Db9u&X-Amz-Signature=577ce100c9f3c9c3330baf26befca394ec5c1181ca6220f3ad6ef6ef31e84326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJGZHJDY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn7ejaII1FW%2BYG4nKYROnoYeKwBPsegwWl%2FTOjQtzmYAIhALolv%2FHR%2FNLRjCHtxrox85D8AyZcRWGi9jB4udIg9PxeKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FXma9DKk%2F5hLwCmMq3APDe3ZkUDxv%2BGXfzgw57zEZUvKHaNELrvlUC220givFYEAI57rgSoCdQiF8bpTlbxOdFxL%2BkCsQJUavw25n8%2BZsh49quGiVCr3FjR2QISUW79PDtPqdg3JSoujHK2YE18FlT%2Fv6LJ0%2B1C1CSFkT9OT41IS2nP4dcOO2I5GN57X8A4mh%2FcyAu5EOGrQc4W9zPk0P96F4C3qQKz7UytD9OZiBwIdN5sOEkKMI4ufUrj57iDqp1QT5aJq6dR5wdU7qWZUyzpBzsfVaOMqo5mmyF1ZmSsqepo3fkqyS1BlQjcVxGS1XzHSKURCQSJJ8fzcWey91Dnw%2Fj20xOyK4cWskKvdqQ9h6iLFTtqHKHLwy1fcr%2FXU%2BLeYPaDqYWLdxKqgm4WdHBh3qRbfegaHoZRNl%2BEZwko2SLuizi1W%2FPyrsf%2BiP3BZaslgefuW4vEjxdtMd4l34fjloFcR%2FZG9WXfZlckIXlns%2FD1uFqOWsiCSebOsUemzCIM0v%2FwiPHFn%2F%2B57p9BF41yvZMDv1yy%2B%2BmrpAAlmzToQJBRf1UnIIzLe32t4UlChpx7D0xQkPAemMQSVdoCdaDiCQ6qbBDSOujEBnkuhJLBgIBHbtnNyoY169GMwct1vQF2wz93ozR4F63jCz5NvJBjqkAQMykdbatLH1Hb8ap5HduXXKNIqmx4i666HF%2B%2FcLw0OPq0DN6VtfsKbKFMowxNaaKRsCJYsvmwBGWw9nOK0LIT9o37MAOco2HfYI47%2BaNfhOFNjUpfm%2FvgdSTuEGv4aDahkbh3R0miVQ12q1sUXzwco1E%2FP0420i2vCzHN8CTt8Rep5u8AuXWvpo%2FbFadhpHVXvpvLCm891kkNxkUqzo8u%2B03KSJ&X-Amz-Signature=92314c267270b0938cd66cb2da679741fdd5e3d60426f3e4398f42e09bd194b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

