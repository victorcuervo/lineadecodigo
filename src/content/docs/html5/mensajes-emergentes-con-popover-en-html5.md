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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNQ7A2J%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFACtNOO8kS4z1q%2FgDMEO19W0t58ON3DWkgTbVMYR4VnAiEA%2F0SU0F3BhHQEvzGDQbfwC9%2FxWl9ygUK255L8CdPM8TcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRjWQoiZNBj1WITFCrcA8MKwy9j5yq9JcFL6r%2B844T2MB61Dzlc%2F%2FLTh1pQQsRT4ZJxOuo0tOlLc7DLZK%2FEHKwuKxVYdRwGvI1rVqqFgETdC8XVncmHmRVnldV5u8ti1Cat7Jl3y61ISAWEW8SRIisB%2F8%2FHM3GOcQwN2EchpGE5PdALyptY1XwiAm6RqI%2Fp1atrglK88358qo%2B2ZodhCT%2FlLCPWJgAm%2BzLeQq5%2B1SVZzmIecrJTz7PS%2BG7OlF6dJIGYO8xewcI1%2FNhBYyTc2woN0WcxohLZtWgEE13z61W1v2pVPUpBdShMFYmFIjCGzUlZGBl6%2BY1AXTipjFrJhrSMLy8m1etjMN720BQAamIHTqEWwrQuv0Jldr0IDn%2B4vd6lrvCXhJ1zNRtWdmBI36gXJrvvHPG0kOMIBO93WDPeqSnn2Cw88NjAC1xVcYpI5uPttLq9diZmHk3%2Fyne7%2FSFtcbzZLUZ7f39KM0gdw4csw79QbRLMSW1CpvR7FAitjmbsmm%2BK1qv83CejZkfhBgSGRAqRXwrCIX0o5iFesssy1PVMC1mB%2FjJPoj9ZxV3r9SZLYjWR0JjXSpudZfLEDub05U7LjIGB22EjEMHPk5CxBr8vPok5NuUoowx78SspWLgl0ESqacafOMn5MLeO3skGOqUBYaC%2FHzKJA9m28jxBr7YmhXI%2Bk2yuiukDkor2riQ07lcBwxCUwvebTXFpTJ3pzz1kTkERUyvGMUwlynwvcJT3IevgRvJjMzHCFQKTOXdE22J1bkJEEgnWbzfzDptxoELf1ZpQUIQcF0lqM%2FzmD7UIJa9BIvgEaLyT%2Bn8qayPD8UksDuWcUY923CDLZp3JZak1LJ15rLITXRP%2BdRBAdU2sqMNwSb0Y&X-Amz-Signature=b0bf1f61860ecff57c8119cbb059c7666ac4805e16d7c8d3493672d65cbe0618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665REDHQQV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdpBVL8wUubuBjR4%2BUegUiUwVwJRAtUVBaHwJ4R4EJNwIgKqyoiR9gFI87MhPn1fZS7ianzelVoW8WIYiFDRIrl4cqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3S4YVvMoidAVAXcyrcA85HVvI0H0Z%2FrnBO6032S%2BWAQjsErH1amdP8N65L1RlqHd70V802ev8Iq0GVliaA0uiOpBVNrsZ89Y5%2FV%2BXIDcoinqGBpx8Nf%2FhbOBvlWCLlu2iDMCxEgWVgR8%2FR1D533IFbppIlkrTWCH5ZzlNwQIj8B9J591IIQ1Ww800N7e6VHqsetFAaUX9g5kcj5lJ9kC7hjPosTzFUxtzCNaAcYB6mwaGClfV%2FjZrU3Zm8iOgsXrCy8Qn3KbMxKotTJpvz9luK5QsZ2%2FlwPbWyNv%2FcuYUV33olYkkgfDfHXYfdiGpRGLKdU2GjRcWAplan8ol0FBPabIjAn3ZvUM7m5elFjbprvhvJQk2vO1fSlDe4H3Sg%2FJSTfXPATh9v%2FPxoUknoKOTlmpM7U5ru5QCeFWJaUoC0eG9PcAwQiwMk92CacTHs%2Fa3zUU3ST%2B2MGP2KIwTgcpOmGYdUpFW%2BadZsC93VXt%2Be9Xfjs7RJ9P%2FIWTWkVvRfzqmzcZl3apFFzY1%2Fmmm02LpRe2sWcXT8OOLPNCTBK7Svvsr7V9Qp18EPSG08gXDNlsVdQKZ8jfIOuq2arWikMcgirBm6kU%2BgqoNpYkRCpCvqCH%2BoFev9E88dx%2FYwxzQR%2Bt%2BL0K%2BQDp7Tc%2FoGMLyP3skGOqUBFrPSls4KS7i4j72topYVkW4YGgC2ghoGGPpEPW42z0%2FrVcMgAmsjHecrJmF2PcOTR69KH6R1KVwb28tg1PtIskrTU0ObFQ2MZCLJDj35VnExO%2B9zIoklN%2F%2BKJv9vGF8GOYN3%2Bq8lKpp5ZfZMoxiYEcm%2BvGD7QsP667T3jexCMp4l8t7Vhw1yUA4HeNNNZpDh8nPHUxzYal6hVQTc4ujtiakiyIX3&X-Amz-Signature=4b52d8e7ecdcf627ae43caf65731fdf372233bd0ddceef16d51e13e8c4d7f65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

