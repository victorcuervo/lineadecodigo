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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVUDG2E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMtnJlm7QJLJow5kYfv5YOxDdyLQUzq53%2BdMeIV%2BEK8AiAoeotLz6s3pkJ%2BY7MKaJPKOGUlvFwWlrn1pNS1l8s2biqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIeqH9%2BNT7lYQfIcbKtwDtX8uryp8NcqgniHuVpoDMpj%2BYygyqPu1zcW1m9lmWgEw7p24rRK1lXYlljQ734uZQ9Szn%2B7fIWaviVm5W0sOZYnM778MNdb%2FeTe%2BH82aavLnPuOMAtlRLN8cURHjQ1s1O5mwJQWK0eIgJ9yn8b9bXpRZ3oVq2%2FeIZpGBVSbI4C%2Bcps6SCDBw6ZJhiySEsK8NZABjVctzpprcFhrADpvVXNNuL8bXg7mxxmtV43Q6JlwQp7Fiip5IgBMgJrQ%2BK5CVND367jKkZf9zoYxl4%2F7Ul536O9L%2FC0SvORRvFVaGtvOox5ZdHg53oIAENj%2FyPsV6PTkhKZu03bfQ5LdqsRW6A1cC9ea%2BAPiwIWHSBCDq6D%2B5eK2sb559ADjGsrK0CR2fU3HFsW88vUQwThvRcWCSITnvGHHDO%2Fo0vOpei%2B0TQJgZnRDE1UyEJ2YVCwf2pPPks4Vd8OABlAUQ0LCA2txzOAk6hCxccxUNxLxEboRckQRIvPyIC1KDMi2Dn73mQ3EGdZ7krWo3vLmtHPCfkeqV8NdWeV9RIVqtcZEafCtHguWUcQT7GXxErdrwl6tqHrydh7c7WdWcOOkjhqOC8vJCFmC%2FmSjBzqU9qqwEi49bR0%2BqtiiH8GsIUJbWdIgw2OndyQY6pgGX4Yehexq7n214N2wvTvTdGZ23bSiwc9cHQZIqb1%2Blpv9MKfCMfLRBW8ul5nvafOhdJY9N3ofgEuZx6Aq3hJfIqKrJtZoRodziLu%2FPeRjMW%2BCSmyQ2mEVlhYu26V9%2B6xE2VakScLHX39DBgUiBXw4iVIZt%2FVger0N04nyYNjf4HvJppnJ7ST1ggU3dL8pPPUhllaG6qt1QQIVeyhg0H8ovfPGo4uM7&X-Amz-Signature=d514425fd10f69a8cb22addeb558a0128c761aeb80141ee6d0b6ec7a93e63235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSAPW6UY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7oh%2Fhj4yGh3Vpi0oGoRq%2Ft12E7J3jTkjTykhQaFhoSAiEA%2ByvkyY7Lrus2IHFpzv0Mkbj2S646qUr%2F1csAVELMPMIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvboH0xKyUQNQzEgSrcA6llTcSSMwk67jz5Qay%2BFfk1yHLD%2Bsr13X%2FWGfXZWBc%2FcIVvpPt31hTXP7Qcy%2B%2BD8er%2FB8P2o2mvcQzvTy5AV6WmIqCxWhRs%2B1RKrXdcQu4HR6qL9Qw9d2ZdZyBm0qztdGsKOHWkqBqAJj%2FDTPfYJRJisPUYDzmg54ZvLXPeZV1GE8r8YiDOAbh8ErKGCR5i%2F0j8pQnecE1JbGH1w7aPK%2Bw9hfEqKA13FQZVigmFxiJFp9xJ06A5xOYENmdSnSq2jCAmTYhcyuO25Gx%2FON90Ms9jSqZO3sAtAv7bDHkjglPMK1kNW9KtBeMbwALEMaVtADPZlpC3r28yMO00EWfyuqZA3SNZY%2BTsckzplt7i%2B92tNyPkTKU7sq8TZMcBnEVRSBxsBdLo5oiIq48okg82qPCs3e%2FXyMdccLVHrOE%2Fi6VB8Um8%2F%2BTiAyQHOW6HiExLvFQDPGxR94tjQ%2B0NwLJaVc0ASE0DEfyyPfkT7BgdEwJXfHjwV2t7%2BXXigjl2jTUWnFmauxNhwlSVzBt5SVHNO4VwFld4%2FCCmxKymHOsZbsNSyBVcWFtSZ8x8jr7T%2Fk0aCbfABjn9dv%2BR8P4eC5siwQmnVYBiWU39sebusX3ApVt3FSi26Mgzg%2FCL0yPGMPzp3ckGOqUB4RFsmuyJ5YA2S9wyl255%2BgqPo82i1KgmEyB3pTlnaffD1sfXgy7Q3YXmplnyVOBC7w%2BRlQI6UUG246QvA%2Bd6EEtsruRD7Ek1DyDGW1cNJIuUbD3XxmDCOf1F%2B3kc5HgwHL4rD7ySr19QL1X6Kmjy1ujL6dKZ8MHxeV4bR8AFv6JcUwTsqjBB90n3uYYd%2FsdUUDSO1cQoXkM%2BW7yBL8lzHIkDo13s&X-Amz-Signature=ec661a6e91d09617110e24b02148e634d95921bae1d233f4e4dc2811fec5d0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

