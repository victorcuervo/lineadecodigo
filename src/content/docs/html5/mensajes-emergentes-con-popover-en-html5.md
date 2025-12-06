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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYIUNM5T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICl6Q7j4OvCkFb9gnqzyZuuASJ99h2J%2BLxsoZIqQQMa%2FAiEAyMJTK4M33KXG4J6OZZd01%2B2hTwEgsaHTBAhloioTNq4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFeY9jMTNwL5fX%2BzLCrcAyIOrjVPaIy3yfxsCYzRNv9wQiErInnEiPJwoAYYkT0B0SHn4ADrIFEkCvfHg2rq5VVqdW03EtsNALKy1Nm%2B57LeiBZODeWlFqDL7%2Bw37uv%2FqchLSkGbDLlvsV%2BsynhzIr9l7qpkLeYNnqBPbc038PIaDNplWyBcqPsVxm%2BuCeqQgr8Ecjh7kyV9CpXmKVGbw4kQkEwU8ojwpD5yhYpGDWJxPMKMHvSvZ1dOJb0eRnPOx552o2%2BbDgVwxFUOIpKHcmCbKZzehgr8cUKa2fnLOtcxmyAM9MY%2BIfD8EECmVljB3q7CABPNS7O0AtPUAPbjO0nO2uQchGgSAZHDvQ%2Bc3JFt042DiQzmSPYF0IKdsgXmEbxHPK6DCvaE%2BC%2BpXex%2BqLHVVKKVyIJ0RurrwskB6S5PdUQTvZH0FOC92ErxlZDy9%2F%2BcA2vaTMKGAu%2BKYDzE0U%2BQ%2Fh9YjZQrpxMjlIK3rDlHtohDYkzVi8lF5jonVAhdXQhMhiDa5Ww67pDpf85iysIoaxPXtseSDLOB%2BY6k2sps4j%2BKIontKq2OCBt3EVnQpJJEI9fQ2eEdf2IUAy8J%2BTY%2FKWa2GZLLTLW48B1AF8q2e%2Bivrx61J49G%2BVABmYMXLWoTHccJ4usEso3AMIS9z8kGOqUBToGVO6OxaVNkYDfW2ftn5TCeG9RU0wGquYpiYsRLG3dOFAS3Uk5yWBRI5E3bSdf4d3xaS3raT7bRpf6ggipywU10IcFP%2FCB3Rn5o8RBEbr5GflwHvoiIXHlsbh8c0dWOP685sn7nb5hjBArFK4eZ7zpX6ntjZ16jLshwnqoB%2FA5Q213jA0YxxQV0DXyCfA7KiCpfmAv0a2YXizA3l7Wzcd9SE0cf&X-Amz-Signature=81912dced6bc6a5441fed9836cb09d9902569d66fb986faed590cc183c166c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELY7FBV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk2F2TNqx3l2ocaxFgK31vQ6%2F54U9YO2fOeqOnBDoZGAIgTeuvGzQhiU1%2FJf5S7bDtVY5Kj10ACWhXjbPfxssFnnoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDApgz3K%2FhtzvSmeMWircA5vzUXxU1R0hfCSme7Hz0IdCebMo2zkJfx1KQ0MPhn9iv0AIOLM8SZnaVi6YYHB8RDYvcpIP90kXiBbMgHkI3Rd%2Ff5KFvVNi1RSO2tkmKIGeE3BPsYI2BkSXRE593Oud%2Fzqqj%2BuGL0I61Rk%2FnmmX5QqpunJ1O2L5odxG58zToBTABrk5Ww%2F6J6PSUqbsD%2FHamv8Nn8MrlG49uXH7AQA5%2BbIcqHugq12CysxUP9Fzg6N0XQ7b%2B7nSlvsMPyHmjgjShQASSB0wsG5jXbvRqWVSWPCDjKGo%2BnDTwHPTuJDz47DKNZ0BI7q%2BM40QD1YXgXBOgOW6kp22gLuy2eEXjFLLOChmEHt7t56Xei%2BDkbUkal1JF5FgJ5J4FXE%2Buat1ZH0mhq1xkO%2BBN2apxWz%2BalL7j9OD4nwpy4y%2FhReYDmRUOdWCGDyS9YSsS7iKuKkSThYD7aIipXCDfbP%2B%2Fy6pxsVeqMRU9AfiD6I1bK3EcreyYK8d7iYr90XCzgRzTaIt2lK5%2FONDKgnfUPFfiRY%2FgCiWDUs589G7TdVf3MNH6uzrGQ94uTEI5Dp912nHGeDPrpxVCar7ZdvDS%2F71%2F0Cp0%2FP0W4Z9gNQ7P9vOGTQYu8m5IfMSNZVy1ptl0vDy5OwxMIu8z8kGOqUBCe%2BwB6EZO2KmE95X0T%2F8b2FZmdu3sl%2F1qtQsPeaCVUhCFPSmAPEMS3vEbnbkGVVpxVN8907Cojeo2GfO4J4h0Rj8%2BKCCwh3hBWqKYUHZyxajR%2BM3kkDe%2F8iHsbOIy0wfazL9THDzHjAYqbxDluJfrpy0h9ANrh3W1jEZXv0iQiWzSvtVelbbUzAJSJFG68UepnURxRAEwc9fzToAfaul4BJKTlx1&X-Amz-Signature=9f40798b0e459a892e8df4fa056282c669deb1524d51190ba6c809bdca32d0b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

