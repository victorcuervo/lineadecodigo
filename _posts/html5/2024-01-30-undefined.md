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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ACTFZSL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEsUjEcWVtO654p6TgCJI083kspTU5hjCSO89EJfHCO8AiBKHrciNuT1%2FaXTTKksyRdzMH9W6DWbfM7VBbMl7zzlzCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMsFzEoggkQNpq7fg9KtwDn4CVUrZwIonVXpO%2FWZkwbSFSrslPEULHA3pVpqesijskWoA6eISTXmsF5UbKAF3ypJvupTMBmNVNbtWLVTrsg%2FNAFp2Psh3vs1ldhk%2B7SCFpVgGX5C7rcSRd%2BKmQCPsJ6K6xj6JAYSVXtDq1d5DHHOA82ldiB7UJNNGcOMe1jJ71mkZ%2FdQ60a9yYPevMr3QvCMcfmn4zaNMyo6lsPywjQ%2BE6oZjXHVG5Nc4TDnfxmtHX95cmDoPl80Bdx9Ox8JRdHCqyKDkf3BmyD30O8QtBcpMB04oGgOJJhg8cs45ytqtdIck8mn1BBE18w5zM%2B21LFCd3yZ%2BEZ0TZL6jisFWOuz7ByerMCyi6R%2FL4DZ3Nle%2BT%2Fb%2Fc46lAAqcFjXQeY%2FUfBtzgvASGRcEdGOLpE5LUieCWSHhbQ4dgSKXDRI0DX1a3FoWAvcnUf3C4H5uUJkBU%2ByVmRS%2FYeejFUjdK6slK4%2BFUh21OyWfl2MFWFbSlOHa7%2FKIsEIgtvE1p2uH0odjQzaVHZY1Wgy55IKgBRJ0RuurpR%2Bwdn75Yll6T8SJPmbtkjPxhNHuG1VS8f3tynCRofYiTmeHtNWrLuiZ5SIhtBaMwGJffPSAAyorrWVy3Gb67MvOyobuUI4XknkEwrOnAyQY6pgGnpbsHKGZrr1AWmEEBR%2BjnSBfMrWXX9dVQuK4L%2Ftldy6jxhH0r9vhNVwLASrwfdZ9vClMpDrAyMzL6y17ybDE1c8UouauUzp76zeNbz0kE1b0HqKbdCUSFOBkDTt%2B98Jwx9m3eyPsvS%2FjU2XX06lqdqqlCQdoLJr5NmRbtFs1JedZeg4zjrMCmAoXs%2F1X1y2y3NGXihc3IFPp7TUXHDfW6uEWlAXD9&X-Amz-Signature=73ae34763dffef7ab1a721260a2530e8ee0f85d55a4f162744a180083ccb0e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RPIHC3K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCXhEvBMS%2FP7nWUteZOnKlYkNYjsKMEHgiyKe5nl48g%2FgIgCFXLaCcijJkpm8wp7Kups3Wd98%2FL2EvWapt%2FkBrcsx0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDASg4dsiltVVRnnysyrcA25yBtHXPGYrW7jsZuxfmJw2FE1CQQZqNRWPvaP80s6IBHVDaIeXXvgGWyazhkPzsuH%2FZUpCeR%2Bw8FbgL3Fjd8hAq3c8OqUtf1%2F%2F5Ubscew9IC2KPGdEvfarhsfZqPUnhFMWQfbuj7QS0Z%2FQuGvRyxeF3nhrJe3HyHV4IjSqqAPQrVjUf1Xg9nzwM9i%2FJvy%2FKKnRhqisePgzVbgaRt4CE0A%2F2Z5ZIDZ8nHZxs4B2ydZ1wty2Vpfu%2BbK1QkjQwHtCJyfVwBkFXQZ4ChwyzNvz8uZx10rsnK5NTlHGF%2BWuOciGikdBQ6x%2FjouhRWNdv8e7ofZgFHqBNEfJ%2Foai%2BYaGkc0YT360rwStHm6m8F6WbFRqKYU%2F00NXJSGm8fIXKHOxH4sJMuc%2BHQlCvCjdlJZe%2BX%2FS3JhozHDJyC7FVBgOAJWIB8H7WWBN7qAU8dK2%2B8kr3V05hvs0eCDlslksfOH2I7vMhU3c7OiH%2FOuSNUutVkSqzLZviXDrVCSndFm2rsyxgb1aEZVU%2BYn0cP1PY1KFCZUG8hfiqJxuc0kfHR%2FCbA0ptkHuY6o2ZILazdNZ8J5K%2F53DtOgWb%2BpWaQAhVDCrIGlv%2BNum4WRfq5DaXi3exkDLzHBMsJJVOKtiQkQrMLXrwMkGOqUBoCP4wI0av5QMmWMuCbA1lO3YGd%2FUJt9YRxMGukV36%2Bt%2FSDQUglsem85j%2BFiEKCbpXBk%2BvvrJu0UdXP4kO%2BYK1KcgziWkccnGM3yLkPrAnYAVv%2BWsSN8stgqdOrLi71BULQMMH8anLK1YbmVpuicWbZp58eWA7cTRB3PnN7kw8dFen7htknQSeZQVz7a%2BpAYUbgvZqdg2QmdQmGqNso1eLeRg4hgc&X-Amz-Signature=1abe18012aea12d5b4d3c421c72490542ab1a186fa40b8c231281242f71292a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

