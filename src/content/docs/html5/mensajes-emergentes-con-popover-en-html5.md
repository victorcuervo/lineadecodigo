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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLS4UIDQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B1jYxdxFHY47x9buuFhGl%2FHha%2Fbz3V%2Fxk8hZPJf42dQIhAJFxh9TGm2RedmdCPOe6UF1joEvq%2BOHb27UyHaJ3hLY2Kv8DCFsQABoMNjM3NDIzMTgzODA1Igy4980po0WIORBulX8q3APecCgjLt%2FKX8uI5TMJB%2Fg8ssUrdvVK5%2BFDgSaVb15XURB2IGHKX44x3%2F3yGfn%2BnXJ1f5MrS0m02HiF6a5x2IniQ%2B7B9j7QMMRua27lOnSlxbspsDDuzwTiDqByvh%2BY2vKds0nXdcZfGvWFmlSUyPnvpD0d%2Fz3Q93BBCkWypiz7MlSx9Pnxl%2FirOUjTLmD8v%2FAGSwjT5wU1G6aZq8nkgX6d5lEwbOEBRTDbSWZ1%2B%2B4EzxdDakd0b29upRAgINQFQ21RGbI2gKTth1ozG8RHAnIKsJgUvYStOn4w1313hRnehlPKSdNL%2FispmACAER9dCEsRE02SPDKyZejbDyCPchBp0ijs2q15FmMmzcE%2FbP2n80Caeq6m%2FyFQaTe7gkjReOOXv22lGf2K9BY0rt9SGC1HcySXgJkBN7YL9Ug4N%2BwNfnaKt12A9aW8B0L%2BIwUd%2FPTqKmqJFoGys15UC%2BCVF0MmNq1IZRmlfKjOkjXsyLLlLRd9CzmkQtGBDvjyJDVdTTuHBQt1F6C%2BDCiYEkCdu1fpkzJr%2BxSjCVKhAo77JyI5zXxUruhD1dyoXlpDRs2w5E1OlArvihfl3uvq%2FTP3ip66fJqW1o2PVqFGAk2m6EHLKjkOlQpx9OVRZCsDcDDr1crJBjqkAWWpqGldRmKn7G2N6wJ3kJFHK4LXnSypOV%2BDN77YXKlWKZjbOPp1hmiEKie6YKKv3NtsHcMmNgF6IuGpZOCL0U1SWm4RxL4Htq%2BL5wQjnJXq24fdyiXqDLB4PhiDMRy%2BMFrqT96058E1p81VHdYrX1G%2FfEM9ok2Ad%2BCSbHpUSQN8gr0QO5qyF0TS%2BRjtLlR0fgydHb8jaPvpfZ2wYJlYuu93cazP&X-Amz-Signature=b7d2be02a7125886614ba3aaa5d7b210f7d3d8c5257eac363e4e9ee67bc3bbe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665636O6XW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDkc3TFMtFTOzdgsKCVPjwX9WBMsUACsF7QihfEqMbKwIgOUNzn87WBbkNqaIcLGUbWvk6xINOhyGL3jYP9mL7Vu8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKpwauS2W9tTouRJ1CrcA49rM5V5W1h%2B8wyf%2FPP9IJlyMdLKGLvl1IIGvogFOfa38tddUa7rilTFWypo%2FCjtZrLROno4tzkgTQ9VK4jFikqB8Je%2B482jgsv9JAEg7e3YqT1pmG4xBiZBETOfSywwrdsvMoJGzGUpbW0tfapDjTFtH%2BBI0gClkpSjN4P4oen1fRq9oKpazv4SrhhNme55ZbTyYLC7oSC7Hy0InOby66%2FedWZq5%2FEYidbwms3eIWQwnqNaP77mfGz1yNryI6uwIbTw8%2Bt%2FG4w5YqJ4%2Bqx2yLYtNXSvgQ60vuzuDP33ln%2F9vZq4vj1Z56fLIDx0lMdOAHFh39KjnO%2Fx2CRyQI1DCONoF%2F41p%2FenUR5Dky%2BZwxy88Q5aUDHc5jDf9OL3LjtJDiMzQSNKu%2BtjKdNqA1CvxkZgAdxIRft7rd6Yek1Nlj8LLlIsBvJtWZ25N95XBCMaw67h29HtcRIyykBarscPsDO2xtV1L7T2mzXxe61w4g7gsN%2Fc7bf0b8jc0D%2Bv675x42LU1SQq0Vn4WMsoDqexQSFsCVIm901z8qfyUBcbbZc2Qqp5w5v3BiaqN8zF3PxrAQ4Md4roXfTKcx012ibX2DbkJfx2MEuvby9jdcLbvx5iqgT2RuEwADoyZpfSMJzPyskGOqUBhXLRyYSuBWR2p30DL61F69sv8%2BQxdZP8jWLspCy5DbHT19KJ9o9eIsr1xVTsTPV6Pc64sP8YwuwbWokWesdTQykuqINTO9XYn3peapgA8WBhuadxXPGnWs%2BBb1SVFkPX4LH4PELhG%2Bx3xmxA9911cWAxK17%2FiQcP7gM7XD1O1OKfe1yrb230emsw0GIsckZ3phBhPCzJRAcXjsg5%2B8inam%2FPaShQ&X-Amz-Signature=3fc7e73efa822ea7528d35165f1e3f4254171c379cb81597255733d6a2dda621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

