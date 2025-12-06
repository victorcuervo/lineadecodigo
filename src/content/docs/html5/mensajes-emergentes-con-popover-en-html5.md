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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US7FT6J3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPv9STPuqgypyHBA4KCcn5LapyphFlU8Tg7hAcfUc2vAIgb%2B61KOLUQXAydcbYnnu%2FjKRkooOdXcWNcHV7tV5NsKkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLHN%2Fz2rocXY00KukyrcA4Ap350sHaJOrk7YIcqZIxfoQcniqZSCpWPkTEzySpweJ%2Fkjz8IGTDwhy92grUkISgLzAdyHmf5MYhHGnYLV2%2BB4b4UG7SnJ33%2BJj8ACatz8RxlYL8GhAyGE4o4Zq5vRVKqauyQ3%2B%2FuNyk8jd7v0F1%2F8svLWtcmLVR3ZfsMBone6N9p9NYRf2rYE8%2FPxsLtIQw56M6f4Wmq81DWjplvwBRRcAqW0E9cGC3O9uXsK1%2F9zokftZOMmyshshuGhtFhh4te8Y3LPhqwDngkBw%2F2TTobo4ZQS10Fhj47wim6mEpGUKCEfCbTND62GFkQtUxxgwsH5Zz6%2BK6TAxD692nSlkiivUPksF0HohDblmxSHeyQLr4NpPc7lFZa82744PjY44k%2FccNq10MvwHyqHKJtCFLLGMs3krnqL4pstqP%2FSQpXrr13dMcLmfyDiqMMKhU1X2PwJXPbXpe3hgx0CN3iJ%2BbmwgbHwT7GNK3fsuuaXNEyEUs3%2FtgxCbSjP%2FQPl0ZD5MkWCGgNgGlBlzaS50tP2HbMSl7yQ%2BrlTpEmR%2B7mscdNleAIj87eEU62VEp1DGamLdG69WBXtgi97IlSN41ZsA4ez2JRjCGqqwMVCRPvcHp9uW%2BWxHw4t3O2lwtDgMJ%2Frz8kGOqUBmpN4NK6MDuhWxEDQs3mMSllig4GERb3E6xdx7weewgM4kk4yMg3jspHkYmyJWQLOAr5N93JuOle9lQsjYW%2F4kA9w9fO3yGeS4FctJdDqpZhVx%2FBW0JQqhJwkCP0zEgGNHaL7y8UGieMtp%2BAgDu8TuWp27CmvUWIfuzdPhGtIwGeSTk5BTMzFVS1Bzlpw4NQSvV%2Fg8ffbV9CdTezftRekruvIz9Zi&X-Amz-Signature=6167c44c9b3d0f82b6f1f58cae28e0fde1ec86a90f103e2e7ca77bbf86bc98e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTEFKJL3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK9yzkJY9Haa7IkHB1MCBJ2JL2fbt2Sc850LSG0cpqZAiEAzcWZTswMFtASuhLuHoMBnxwKwGeNwMKS6kbjkTIudfAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIZ1A%2FVaiylWAx%2FSMCrcA%2BrqEy4S4qnQ8pogHWoU0ZUo0E4EvsH4Qxhhp4qTG1ulH%2FBjzmbdyi1Hw7XVLM%2B30rnUNHgMeqDWdV%2FctUDpHJ5gUdJfhMR9Oz6quCnkexIGKoQ8GLAJC9UWK0v2nCmgMPbHgLgpxr44%2FzhuQYrJvCtlYC2M3ObJJloDztJrlJpye6NJdTGFhspQk5%2BMCgQMsFp5gvMTD5zrpNNsWo182nq6z%2Ba2Ora7qiPDMluDQnLjNEwT8s7IxWkPqy3uzle4rVUt7dUDyCLKxlhVGzbTdRxcq5Nslix2NL96ly%2FbFydKDf6gL3WIjZmOlI4VhnPmCy5f7u44X0BbLuw0SZdrO%2Fg913GEGKDScr6A8siKs%2BBvbBsVE4%2F6xp2zyqmIL80rTSi%2Fhna4TY%2F%2BqZDiVDKKTxuuY6aM3%2FvEcOOo17noZ4RSpUZYP2bHYRDRvgAiIOQ1Z2CFeQCa5gNcW%2FDCPEeSw%2Fb8Jg4sObb3WuJrrsxd9WBDCJxhiitaVA0Un4i5XWCGXu9z63yYsmo9NSNY8EO1RQmf0HYI54RtgzorwTYdEdxPuBLPtuBrclkhjEJ1ajHMR64XDPZjS4gSdIs9Aeq5hNS%2Bhhk3TvGeLgElwqvWkesyG%2By2ncdSwgr0VjN0MJbrz8kGOqUB7SQ6bytlNjNpXdBssGCfr55%2FZhvBy93nKDQ3k3cmmQZJK6snDg0C42V%2B59znFyq9hrA0rfRa8RPft2gHkjbKvH1fdP4Q1X7K9B3UvR6jnDS5Ht6eF8n%2FMwzqnHnM07n%2FUbsZaz%2FW6e6TYToRPXsYvndT6od8EmK3zoZC1pffgZBrjmth%2FSavhMGrftbfYJuVaEEOEfyhqJ7EI%2FyJOM6drTafmt8s&X-Amz-Signature=74d17fd2753157bf7210a5213e682fa151f345958ea4f818b205d8f2554483ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

