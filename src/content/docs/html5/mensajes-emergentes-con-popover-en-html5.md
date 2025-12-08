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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7JQISV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdJTDn5I3eew7rOan3n9gXdFcKVaVhyo4ejM8zm3b90gIgbu0k8F9XZTljTos1%2FVJfsu3O0AlgInW82rpH1MsoAaIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS3D%2BfZ1FzX0XeNfSrcAxKLFvvfln4TS9eQXplpzV1WIxWwodaxqM9ECd2dr6X5Nh3pjEFbl0%2Fg2Za1v7OzwhEaaQI19WwkmWjBE%2B%2FvVXzxaDgLfCFy%2BKsIwtwyJOMr%2FpoZNEXyskMk%2FKwIO9NV6X3sNeI3gCabZEewWOkY9kAfKGa1dnWgUwmGGZCzsPvcs%2BhZ682t%2FZ6Isi%2B6kKiOmYERjQTmMBHu0nCZVugY%2FNntpGKypKth%2BaFRlGaxA5Bb5QTjc%2F6DNMIG0hl9YMABE0HUnsaRMxTwPdoBTWvevQcq1qx%2FCWkO1B1x1nWKtbHLLlWYywJUADfZgVlpXCUv43obk2yxuhWBjJOeCGrY2xIXUy5OgKfV2lB%2Bd%2FzLdTw5NLtwIiUp295XGYn8SQMwLI5OSS5RZ2MIixtK04NG6%2FEknqllU4gn%2Brut%2F1xtBn0S0QQDVIVzMhoe%2FMtd2AcHEBsJm3GAhGAA8Zqd70k1ZIsMCqKhtJTKH5N2NUaHl959IJ1ubD4fKXeMBgxmuD8AGmc4CNrKlZHmyvL4tOGZdghXC6xY6uaZJd6XMSdrfazkON%2BZ08qXwPSEn%2BrYQ0LH0FjPpJgoaKqwkkXGFsy%2BlX6e2u6PTFLHxI5eZ6jEbCOcvQGoPdUo78n3Qjc2MJXv2MkGOqUBn4p4FVLlE3c2Go2Pp3RYAeDWzAdtzSwrm%2FRo%2FI%2F3Vz0YmjBI5UwDMq8%2FSP6BmYJYPd0cHCeDIdsCUL9lrTej3R6ItlroLPekfqP2VnB%2F%2F9t7kQr7F8VlxFHQYcg55oFWh7uHCDPgISJvIVKnCkrmtk204I4jI6Qz6U3cnDb%2B1L70gN5q%2Fos53XTojY3TUnWd%2FjHXb5PHVRt7NW%2BaKDMuq8F%2FEDZA&X-Amz-Signature=b2d549f77a9c1fa37b8fc2b669713e47f36d5663e5d4e125f4970bf1c0a26561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDW6AZD6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoGNB0%2Blb09s%2Brghn2IdCOrhk9EuVkppm1m%2F0DfdOBrAiA9AGURhAYySwn5iYW1k5InesR6Xd73aP3MxfK4Z08wgyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1V2WY0Yi3GyKKEb%2BKtwDaQLBaAowiid%2B%2Fb%2FwVd24vNGQqDGsFnqtTVOVKrlGtJrdMr03XLng%2BHInsSvfNPgf%2FlINmgtPQQqLzXZuZjoKES%2Fel%2F3aev8QQU4XC28Aliqip9zVqZP6MfoyetYClZDMGj25OQ4yvI%2B3xvWUqNPIQOy%2F8NccHAW%2FC%2BdYEKAJk%2BXqCKT4b%2FLmgDJGsIRguZbJci9r1C%2BWAdmh0UBK1HgztFjoFzX37r1233u%2Fj8S%2BjqYSb4Hc5TyWfd6cHcME1A7CYBdaOw43mjrNII06Z%2FuIo9hKbs5Z5W372ZmPYSsgiaxT3qKwmGEtWQV9sQIgDWIRed07lo8cwY%2Ff6KrQdz29CQcz%2FjOq%2FYPEPnIA102Gg62p1xTo081gNibU7Z65eyRdkMO6a7al1Dr63Dku6xoKbclgZWN5Y9JDxhX%2BlunQv%2BEWo47nbgzjHlByhqWEYmgGbgncKYHCb%2Fy5JiCWCvvV6lA2CI%2Byj7YcqQ4ykrb2wlFWIUeFpx8r8Gkzb5IewEgr4MKxwRuGnoBLf7fG2Y%2BYjnri%2FCasY33TlDy0GAK7EdUe5BQ5%2Foq6HO7a2f1JVycyuuJrZp9rJAz3Oy3jfU3ON954xRBCKTKayiyHP6aCeOZaa0aAMtaIJOMiKeIwlu7YyQY6pgEpLoXVi2SQH%2FgEdAEy5BJ%2Bs%2F4gfpnqpRu6e0%2FbJh7T6izP2hFkAoPRtU7xPWogH4IMGO5s0%2FN5f01lBbog7PhRTUvUBCq3Z8BsFrbZTxm0ODHByF%2B9bk4j93gddSVoOJYJI%2F9Fvj49Eb%2FPV8bl9pS4zhJPfSIRungj5LuTny6Ib4r3BXseY4L4EeYrOPTvq%2BFVTySehX383gEX49dYl1MjpeK6f2Ya&X-Amz-Signature=34b5cdd0ca825c571767ae2dc00f159bd577f7b53e9ae27a5c9cf35c34682b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

