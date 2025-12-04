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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SERZ3BN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCbJjwcdb9cYNJ0EWD5R0nQMt5P6GK1cl%2FI8YqMI6Ms%2FQIhALt4udZHAofs%2BDnn3Kcgz3m105SzB6K0uOyQiNd3djPNKv8DCDwQABoMNjM3NDIzMTgzODA1Igx6txlCITwxAVBYQegq3APCyC5isW%2FYyZ4KtJWkPbTeG%2BXSCiNDJ9EokNvZ7BjfSqsb1WUFF5ubWR3HYLFyZvFGqbutsOWKfwYu%2BF9e8RxM%2BCSCMshLAZ5aTggs%2BiTpU%2F4xQDwf5V%2FIt%2FS%2BNE90CaawLKTzQ8xelNuncI3uOdBJn8U99vVA4rHdKzXXEpHOSgckzB3TDFzax6jD7EQvAeWWIlg4%2FLzDZxfdIXAb13so3t%2B%2FeP1rt20XTUEfxHf9isJkwmtMDW2fqX8N5s6kINN0A41ncSLcm4e%2Bdzf44gy0E5yo5XyMIPMbLEacVoLFIs35vyTlIQHTzMJ680NsQmN3vId2j5qaIEfPyVnalnk4pDy9XnAJYQeF%2BSK7FX4D0QENMLzTLy65CLievLzj9TWu0wOzZvgwp6Jr0hxi7Odeu0AmRQPvcgSNNoDjHDkXN3f7xqRN2qXHXJCEDi%2FFJ5BF%2BnfKacRBCDhjUkmcU6uNnWHH43vl%2F6V%2FP5d%2BkRtrmhmMWoy1sviFjF3vWPtB4O0saZkAEpVXry0vQpKiU%2Bi0xgKMRcToaVF5ey84WYLsgHjen29uU855SvxjlD0OtdOSaA7TzZwS%2Fv%2F%2FQYAFyrZsN3qEcys0zYDpZfqB7KHU6MqT4KzYoV7KiyebIzC58sPJBjqkAQOCSdu2v2XKFMwZPbd%2BeBAppV%2BxUGDytSczai8i12jqO6nE6PmWjaPtBVmotGNuRX9nJnNBjUahmNOn%2BmRVVH0HQXfn0jOOR3bMXJx5%2FqHM3U%2FJgkxHpjByg9KNQtCXmROPTLv4tTtNQZdyMDMMyJEdJJ%2FT400zsG%2FUD%2FalvqKXkncTByF16qAUlQFy9O0MQgWsR1ChXKLVaZ2t7p4tkJxFK%2FGa&X-Amz-Signature=45e2f9d10e2632e45be27bcec409d3509385702bdc2c4c8833966c60968a404c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPOT5OIK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDlH7KUP9WUWE8HlqA7TCfZ2R%2FF9FAiDOMfapz9W9%2Bc0QIgFq8S9r939TDnyxZgBAy4IVxQxI1HZCcj%2BMplgAZ3Qngq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCPfub4HnUB5dOpBNSrcA8KW6nvhetaTrxFtRw9%2FoLFuGd9XbelNu9BDwI9QfUPeJed821uDvG9Kfp9tR6S9h4jHrlsPBnMreGD1VnyYxU7imeo8oLgKb6bDIaGjQmbNeAn28mKlrpIyukFKjT0Y0RTfITauuUJbMBd1ojNDX9xdxZhDLjaPu%2BjWRAe7VgJFq7ioqXDoYLxYjc6Mt%2Bzl3aO%2BXAg3hXDuMc0yzKIwuAwrF6y3eWFV5fmSwXvepbl5i8iqzQHBjmiWbjUKXBqa3ANKiz2b4c85ZpeodwYq15tiiHFyPo5n0%2FfOkHdH8enQAhVSU96Ylx3qf041%2BSpOa1R%2BheQxB6ZovC%2FlXud6%2BEZLHztWnWs6PJN0P%2BYZ21bDHoZ092d5xTWBfiFMie4S6zKP%2B5JHLKX2EGkmAFRtjeeZJMuM9ASSr92Ws3K5473SEp3Shp79cEho78cWhucHgcJdf177pPg%2BbPlvh3V7vLiG1u1kZF%2FHXlNZmcahtvF%2B9Gi8%2B34c05GFER6WWFchrLKNgtw5AoE2YnsDwMbIKAjfBgdZTyUHVl%2BUuXHBOeM6s1D8B8OI1g8O2%2Br3uL78DS3ydv7kfQJKo9ZDrwJoEme4hA1ACgdpbTCkcGMUCs3d%2F%2BdAQkGjYalP%2FKSsMLnzw8kGOqUBlPeygcSX45Nvf6FjAEY8Lwanl7xRmjl44L4wCLmTNGtUm8zquyk93RBVV9%2Fz1UAfF%2BC%2BpFg1OBhmcTye80tF8%2FiHgLcdjBxHWk5zlwpEdmXwMjZLVL3j2Nm0b8y2JIXGJq9IDUG2aRBr3vtIaWK3Xvv9bfh4CJYRAxHkX%2FTMGxI2T11PurmUuGInk7VCpC597WJRwY5AGdMlxzKs0NrzEcd80TcY&X-Amz-Signature=0798fc88467ed0aa46495043d2414c39fc7868aeafcb2ee9cf9f247136861514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

