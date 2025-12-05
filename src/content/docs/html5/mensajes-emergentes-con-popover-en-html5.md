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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAWRDMCL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BJm4YAzEKxZBfxkLLgkybXbS2jYPIH8jPI7doxpClFQIgYA0ve4fm8L46ytEp15uyfEEoBtyHvtH6xrvfVzslVSUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOR3ULrWkPfCD1s6YircA7vBnGkayzk7Tp4NCDgGJ5J0Jm%2BhvLkpwAcSDdO6ejXW6hobUKBivLDf4NwisuggKYTCNH6Alhv3t4c4o%2Ftwoi5FxYrkkmH0YeD%2BnTfaybaLEmXk8fC06NQLhcN9dR0O%2BqgrhdkKzJfE99224G7k8CfN1JVAE7n6yO3z%2Fcdd2LUVzlz6qrWz2xmi8F40giI4urVfBV2Is7OjfOM90TvRipW9pxExhwqmcYNpG0VAywIb3YkJSINUTP7BxppQnIecRObLBktMa4NDpr2mAfwOFbWa7hcbznI5%2BLCWTej%2BE2gqvaCeP7g7fy9%2B4W4mpCi2S0rYzRZaGrNtDxG0VTcbeQKNvRdI7TyebjqjokKztnD6mkaMzIocZL8F1izZ5rjZJoeZUIp84orVASlsRn2woucg6ASkr4%2FmyFcTEThKNMrheYz0pABHLFPZJvNuWs1cH30uHznoX1nQwuevGrp%2BGt7%2F3GfRoCh%2BEpYV%2FuRWVfi7pB0eZIqswAPXSdOqDgANKMs0M2XOZGgd5ovi3k90SiQV9ttGC%2B9rKQbGnrlwH5g6GOB%2BZ9kieCyGpZfJviSJv7aRc5bgfr8DQowbr7XWv2J3b5b9HmNPV4AF0VcvDUswrauBN9lTLPF0QMCNMJ%2FQyskGOqUBA2CVfx6U%2FzdSVJDqeJGcS%2BfRPff8SdGIv7rFd72NEoq4BP2aKUelpa4ArXkxaTDB87J5jXNgaU71vqzFvUN0dZBhNjNMprLwuUk8%2FQ9VngloV5yOaAZO1hCj0RnkfcR4S19qP2GxdRMjGWMsbUtmzznjBxhOuq1IEO2RxtLSjnWhRi2dOVTdF8v4ym%2F1%2FHlWoHpEWPQMP9Z24TbOreuYx4WiFyH0&X-Amz-Signature=257e2ea5abf1a0df4eebd19577dbcb018c24681c50926769832a41a40866c805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WKUYL5T%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApKLl0zXH2UCSiEmbo%2FmsvmHjqodC1kwUHbfnkKyzQ5AiEA2JAMqTS8ce9hke0%2Bcfprik%2BNzpr3HBbrxUpsI3t9Ivcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDH%2BMDZy%2BOP5%2F7rsxZircA9M%2F2cyRXQ0DEjF8A5FT6Z%2B32eGF81c6cwgNSos1VoAUK6XsljoOLFQ%2FauYWsTvobq0sMb2JjbscX6R6646cNhQT1XQ25q16P4y5VYu6cOcjV%2BtQzI5Lm0Lq1qiv9mxIeJqDpV01Wod2oBUYcNuskVAnm%2BxLqT6ubx%2FT%2BevhUkAAJ5r8t47OZc6oG7vpgmwW77%2FdtMM5P70FZmMHmTADJdyVlGHr5rYENyxpLyiOY%2BZIJBLSh7YRMyrqjaAr%2FR%2BjS%2FAbJ13ww2c5tz%2Bt48fwSwwar82P4o4GL%2FMs4FQ22OiyuuBtlb47FDDEkw4drBJxY7B5rLlxCJL65MHu65zVEna0v3Y5sudLTY5q72kRFKzjZ%2FNBCw4KpywxaHnbD8q2Z38KTvYE2pd0y1Zs06gYamjPl6nDIVOWoZwHo8yvgJM1kz%2FXPfBIHqMxQKhdzoSULseBRE4Mt%2B%2Bk971yyf5x%2BRBFJ7cK9smcEV4FY1sK%2B5g9wTeDG9Dl1PZYvoJDLeMcDDL%2B%2By%2FBfxXxPLvFdsl0SQn7%2BsAlrk%2BV4woEZUIDzAANTq1bw%2BaBMNHVdK%2F63AyFLKGFrdPNWIQlS4zzhJ7sMnA4zF0qpaOP1g2id15FbEKS3DrbYrs2k6SSQ8XUMJTTyskGOqUB2STa42kdZ4pxoS1xcZcWuw%2B5qBjU%2F6Ycpqgd3yiRaYKzkmxB7HqETZOFECSwEAc0ltLNzEP7hMX%2FBBSwl%2Bfq7zbudpQZ5OclLBH5jJJ5LLzKp0hFgt0XzEPpDvkuDMDfgtC77sxp%2Bqu7ZXbMlJ1g5Ql0vQD%2B6HMcLFGChqXy%2FOBDAiBL1CqsdnAFnA8g%2BnpDRS2usk3joUq1SS856%2F%2FQJISkH921&X-Amz-Signature=2165c69de36ec44b2db5cacfb5098329e745015a9160e73fbe4f3039dc4586c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

