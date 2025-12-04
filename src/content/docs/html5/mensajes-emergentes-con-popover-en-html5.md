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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KX4IICQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCRCkCpM7C4of5K5hGKuXr1Ketq2zfTdFkKASwQtbKNmQIhAJEmcw%2BS4cnkXsA5Q%2BjczBsePHEQPxM8sJqAXTblE9mOKv8DCEAQABoMNjM3NDIzMTgzODA1IgxcnNYzG399lXzfomMq3AOjYPs%2FXfwR6XIyS4Q6hI5aWpBSQmr1pn65PRBsyWrSrETxMJWrh6roQTuexfHmBcH34L9hzQQZQTUng29DuYq6Jp7hWYcIOg3u2iRQlOeiTBJcIs0ReuTV6nUpHlmffE3iHr%2BT%2Bje80uM5DR3fqXxpOuEfARpV2S4vqhNkwXRByc%2F2yC07NNPgHHJ23V9Av8u0OtcI767NGlJ1vtH14KYsZViwDSm70rKi9kmD77v5bpuZf2KjmwLqvCTzPHQWcR96GVbI2Ui6TZgahkg9xMpvuLC0VFR7Ux%2FDIRUEn7PuMek6f%2FQ%2F%2FkyyZXnRn9R36tgP3HYUbatUzZS5tV3Piar6Lo31VpRVxfiXUu9UUa%2BlU2hjeDuJG0wLmune45oDG8dltF02HE9bTOLU6m1hKF6sXMqy513uwCw77u5IVjt47MrDuejHgzZXVR63RAUYSqB6uF5M1F1D0tNRUu4DamKswRP3Xoxf6tdlRnnWeVdFcU1cvcsRBXLLmvMjFUm8ubCHs4KFCofnEd5jRILDf5%2Ff5xZz1C8mXN%2FSdIk8YbQD6zPjQ8YbUVmD2KApAmmCMSIHLQ1YnN39evTSnG66x7zfbZv0H6F8feBeTIuwPvxdxuH930Hzn79cOmyvnDDR6MTJBjqkAZ%2FLQhSuGtqMm0U1KOcQ11KpL63eW97E5xLengXJUjYBXkKTK3luutheuPG6m3uNR4xocizJSrPVkAWUfx0z9JJ1fEnAHwnvKSEKqv%2BKQZTh5UujLLoeZ%2BiUrIVXQe4l%2FGr5nlW%2BZqnad4jU0qafc32kLmn6O0HTbrmlTZMoVHHbFEBC8uQ2gUw1QxmKYvXN2Ba0vzhgq%2Bj5QmZVCvxyNBW8ifpo&X-Amz-Signature=8f1c59805a4c5e0d18b1e12ac795cf017cd79b1da35df7faaebf69ef548cccf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KTAR4II%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGlVyRFmaBI3Qtb%2FRm7qBCBlJTz9%2BPgTWOTwu2MWL8McAiBgOdXAHz%2Fv89XYyxoISGLd1tB%2BoZgQUYgNIGycicDDNir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM40fkxhcbv4wvwG%2F2KtwDApXH7sWRKAviNyK%2BFowdngH5awJQYt2xks10VpIgRjcQjW6LEwnlCOFLjCjrJeNcSj1WL%2BmyV0oijY1JMRDRGuDiRcwL8lvwzCs67HY8TvHRE%2BAsfCZ7k0suRDEWfe0CJ4EI5yZh%2BtmfwuW5HyhGT1ZmH3Uv3xHNND1viF77%2B1lhxOadMDEf7o1TA%2BCWAD%2FBzN3p4KIPOL6XY2ziUgvNkbvA7IcdkQCBq9DG4ZxdTstaRoMQMAgqYHyUsoL8MKdxm5%2BmNvHPpBN4SLjgvcuRn%2FwFEePYkrDVrSCwT8tiCuK4onQyIoVnyM%2B56awsxvTzWX3XP36p1sxGnUQ%2BWx4%2F4r03mkjI5RAdWv3c6SQd%2Bkse%2FKSjp6qrCZXMpaHXxOaxSqQnY%2F0%2F%2Bh%2FnU2Jeo9Ss9otOAVTMI907vbkHxN7tF5LLWYamJf7usFp%2BTF%2FGZW%2Bk4PYEXpO91rth3xWL%2BR2paQgq4ROZDSO9z8i1lJcNTyHVNOWfYjlLrEme4ELYdH1HW33Ao40ISir87PLDzs4B1wDbUsQhOMdT4TBU5doJ%2B0%2Bn%2FwEdDnWTV%2B4d2uhiQ7VgFJXlBzrLv5HAR7wLXEaz0kC1J2GVDRUjYBlubAcLRbUWXw%2F0kSmscwBiAqEwjOjEyQY6pgGYc2ZzlG2WePlolkV3S81sHQH3uk%2BpjLVM%2FPrN3OC3Ax54Zv0rVLj6GyPxunkFN3doHBKZCqBCaS64VSvuUBK6NBrAC%2BLqfFowflq01K%2Bz4zxYgEBLkqd%2BhuxEI3QEuYfEDEIeBErQHxDSHI0Arhli8cfrMl2iLZd4d97%2ByzUjx4%2BnwuDmklK0Qzf0QHmtOr%2FWESJeM2LdhsR8X82cfCbb%2FlMpDl9u&X-Amz-Signature=43d4c2c712fe12cf9ae82f26d258a5e54b9e9cb598922aa0eb93ab7dd15970ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

