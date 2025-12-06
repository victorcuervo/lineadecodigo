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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CCKKZOV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpNd6sXiSosVttWWeH9xEXv%2F7igWNvkocJYSMzVyA6eAiAPNGX9UpExapsKNau4VLb2FB7wKJ6hLlEDVPD4JBRQ3yr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMbj2FNBTVGUZu1b5pKtwDf2fCNlLcORiL43mUwplOCR1jTqxu55XDgO0aj%2Fb6%2BcIoXLuu7KBo58GCpN2Ys9V0AXHsfV%2Bk3X%2BbEtgIuJgjIGOOqaoPHhVliE%2BAEsmA0i6e2BgYPkr4A2gdwFt3kkMjfbE2Z3qdlFMcs%2FifNgsYvwCAi4Diq028dfqECUC1mxnfdgUNrXPRPoPXoCcgI%2Bray54kgKiZ%2FbDoW2NYIvq1O9MxhVLLjEoZluPkP6eLWB%2BreoklrfrbxmlDpKakAIAsgbr5N9p5UQZu17Ntstx%2BxppP203hc%2BzYmh6H74it3RvyM0pwg%2FkqOyrGQHbcDaID%2FmzqI8PsraL5AbeSZKDF529PfijSG4RdzAMx7nI%2BTJ0N2dW%2BMx1yloJpRP90DbFT2Q5%2FwboixNxKTlv7%2FDf4j4MmE589bQUijKz9OxA2jt1l7Pv6%2FeE4L2CNscAHxq5Gg4D7HNu9udRYnxKyJsiWCDPqmvH4h5yqkGYlLkFh%2FUP37b3Ho%2Fc23aOC1ehchtVxk5szBbgjzNu%2B70HFCW4oNw3ZLkdVEKPTLWVUSdgm15IfTkvEEX3aYjnSqDIs8dlsvWeEMUKkPu6L6zB1n9xEk2dSE5lHmcZZ%2FZf0X412TVwwryTPSUuB1cEDi1IwvKbQyQY6pgHxDP3B7j8YZE%2FfNkBpN7TbW8nfg4Sc71JwRZG0j1OgpIdkt%2BQYS3vDCPVvAZHny30oIwBVCmJnqNaz4a1RYBILVRWY4xAu8sxCRH0NbB60pzAIvuNit4KRHLBnUU882IDCzXjGS67yWBKjszMERURCP%2BBNaP5rLAzkEJIFHkI1X6KCSnOiTcIw0bpfMpzXHe6Ef6IE6%2Bi5RzEkvtKzkObYD6gMGdgC&X-Amz-Signature=c68390e46fa0b8e2303eeaba428d41ecbe81212c9b693c92ab48ff80ace264e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626IUSQSR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ2AE9uXXRR0edz6xLqKyMCOhDxWWoJGm2YPmcgoa0OQIhALba8SgMPt4Ur3T5314cwH9uJSnwo6BIobNW1hvXyMZlKv8DCHUQABoMNjM3NDIzMTgzODA1IgytHBcEtioBPr5k4P0q3ANavYqSZEU2Exnrt6mj3er52rtBOLTBFUA06b21GoVdC%2FFLAU%2F5oTc%2BouWRJ3S2BqicDFUoZ253jmJmLR6ftCxus0AFwunsCqXh4OAEBDW8ei35G9YN9xMI6E1Bm1f%2BbObUf6UGqCw%2BvNM2UWHfnQeRbKyGVHskIxqq1C%2FixEXrbaKWToulPtIJt8OfeYzjXNsodZEg552us1w2mdGjbfD2TbmAOHmwOSvRkKf8MSYu0VGjKLL7F1Wi3kt3boE8Xc4f05yX4LWraWNy59d3lCtVJopxF6t35E%2Fe8x43YwRrEfi6JoKrNoyuxjOH1t0ki0Xf235aBV7MhBfp4a68NyuMacbt7fP94UA9h6UIvgKg9DCnS3%2FRJNm1oHQl6T3jq7XZ3ePgP9HWsgvu8SwWq%2FP2VjLICmvGMQbAQNmYBU8c58WIKsqS29LtaPEO3feXmbdppf81n9jCUI0TpYmUYH2Mju9DqpHlD8dMlyEBpPeOQhSKy5UF94ZYJTo6eWp%2BxYou0evgnt%2BC7Ci9lw8TaIsnPlTwmuUbyFUoP1ST9muldez9j39NSA9gubYnVedWVTeQx%2BL%2B4chQ%2BeH1nAXFqhuIyVz0JYQo2cOC5MZRUhbUA1od6%2FtdqJlClbhWkzCQp9DJBjqkAaqU81fwOSvKEA4no9v%2FvgfSDmswnVbIkoTNRD0CrR1i%2B%2Fi3Y%2FyKEcCc7e%2BLopMXH3oIYKZQy8l15dG9dFWd2OfQZh5OZxHAS53JFJ2eerc6rjifjhJrZq4cSKhGRPc1N%2BEz8LmxQfU7O8281%2F6xsTx91P%2BBnJ9tJn0CHUKOkVOEMw%2F%2B5I%2BMZl4m93o1%2FfcvjF4Nhx5jKf82MbjNAOtJxwItnOVy&X-Amz-Signature=bab5521c404752cf6e60070b7e3d30e672565684ad598a5eb59884577893858f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

