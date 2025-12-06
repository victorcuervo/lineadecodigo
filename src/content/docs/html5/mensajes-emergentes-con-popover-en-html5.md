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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIHHQOYE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEzsx7NrQ9FDAMa6N8Lhm%2BAHG2iba51H1TRpFxCAfptAiEAshmfgWMkn31Bmo86sO8P9QgLu6QhgViYSGVaP0CDSrwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKFYhSzyaCfoUYl3oCrcA08pO5%2BYjFephLl5G7FCo8%2FAC9%2F6upX8H%2Fwbyn1217x3d%2Fceq%2BPEGnBkNzGduj5V3ujETa7wEkDCt1RpLpzMRB0BSTiCur1ypkdUkw7taT4ldAWymx4KGTHwRZ7UTkFR6OrF4Uo7ws0qVQWza%2Bo0EbhlS2o5elfGoYTE2ri0tyzwFHH3hUHuopH7G7UUiNRzfYi%2FzVzmAxgBf5UP4CSLI7zsRGtbLQsM5XOk7gnm63pUD0TpOdKNrJAmM1GTb%2FZTAgNtZNlMjaW8Xk4pOyDLG%2FOuGE0Njxz8hcsrOP8PzpA4Mp3n33L8Lcx0nEaja%2BdHM6Xr0RFHMc6WVZ44HJBy8Mz6ddeCmeU1dG%2Fc7c9oWhX0d5CztHtBYll%2BakkRX23M5knQJ1RolP2d8jsOCRkfm1gJ45g%2BJ6jWgZ%2BQ3JoCePwJ3AeoSUqbz7HSdTZkQuTwZ%2BWzlFqnb%2BHPCyX0L6IPNZlnx2ulroOm6x81gx81cE8gqcub%2Bqy4g4er5ig60Mhs1Y2blOHFhhvPYIV0mumXrH4Zk6srctLNJ79hEHr2MqwoEV6t3UTtEtiIouuuP7YbXUN7icblvpICCUZ0XWVgO%2FtcSjmw5nG0g5HkDh6igVsOnlEfVmKoPGxDQT1%2FMJbI0ckGOqUB5bIHbt2E2TmT%2F5iWtSXtxC0rcvrCMnjmJtXGcJXn4aFmD%2B%2Bi1HfdRtruDf8F7lPL3fb0tPjP4GErcBrYHJTpOYt7eBgRj8Wvu8%2BXuui4qn0Clovz2WUx%2F96DFnvZk978TKDz3aLEkly4VNWbzq85nvaBmpe5liJlcClcJKYIagXDTCzFflsoG1AINkSFco%2FK9gO7arIeq2M69ZsnWnVH7n4lV3uF&X-Amz-Signature=c3caf4be9e477afcf385a5d6a2d1df81e9da03252701f59cfec949699ae333d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AC5WRP4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAikiyK1q4PSD%2FB6H13IG1pdG32cuSHu2MZ92QtderbbAiEA7vgOluwCAhILWj2H%2BmYvAuxsQObn9zpZcDMB017%2Fnkoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPuD6QwGcx2D7H26LircA29BBgChcBXZcP8eSS5rYi29FmuBl16HMR%2FSTDUt1AQc4NssJ6HxztPf5SrOGwS8%2FdR2RiCxE4LYq3NP6uTimd3fb2%2Fmr%2FJhx9UlZ1v%2B06r0aXLtOUvK2Et%2BKQcfsc%2BSq7MKYTopRGtlv1oGeR6hClgZWBEkpasO9jkB56vIy4D%2FUoNzPcAPUfFxsFVSa%2BAulahsdWIeOtzkUv9P2b9rJIlsgVK2T0B59yqzpf%2B03YnIwacwY13%2FbDQpE%2BhYu3j9rLGMCT65R4jqJpFGWpTFCfpSFSZE6cacpV4Viz1OAgol6BSrEwurMK3%2BzmOVzEIbfvfzf3XXGrf%2FSYZKNRZ9SpWDiRo9Bbi4Ulz8Gwv4jXxwhRCZvDz4o9nRDExLRBLT2awXJWUR7iOemBhSTxYlCxU0WSZirb%2Fhzm9ps%2BBUissJfTltW7Aoq2LTtDRXlA1E7CvPmqwpGia3sE6ijjHlmlEFj12ISqL9wxUsAXYYMn2cHt3YPtnpfd4GLuohtr%2FDC24RhaaOG6LdEQ3q6pH1E%2FVBhmehB8s3Osz7O7f1b3Tt29nl1EX4ouGC0W1fh%2BsDdIPo%2BtFdAupH%2FdvBAEbcgSfoBkDAMSnnbYciz8Xa3zFDBuB2lfKTxDKXoXGrMIvK0ckGOqUBY5AtpaNYYJ5YQv%2FuUHD8rE3oenCRyoYXeXXDil5Tx7JYf66NJ5QiqOcM4KqQfMCibSljklGe2HmCEAwvEcajtMBf5aTFUorXwUwEuW%2FF0AnkTGfPZy7%2BZLjqvDNtHWhQ7I%2F%2Bef6P1WoFcD0LRDZUhDCxQeZfVKYWUSPivsS4dvUjdBTo0KlApt%2FXhHZstDkQYDz3qtNooenvZO%2FG96vUhBcBqw6D&X-Amz-Signature=1a00374ffedca820e4af0a8d212c8ab765d4ceb32038e6daa840d05395c606e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

