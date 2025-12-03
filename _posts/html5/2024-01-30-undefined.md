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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDV37DFX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIHu%2BgiwxlXj51tl1v6V81OAMsywCqbkr6v5RJiyOnR%2F8AiB3nTQVqLI72Rv0RSmIufZfvZ9BZVALFj9FZOyiwzsHtCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM6sJ22w2flm4cTNarKtwDo6Cqv4pQt0TciNMyCVh07KGvfbhySyGZWC2TK85D6BeNen5fu2TzohB57V%2FNWSp1dwcVvKXjg1vgdSIi5wTKJEZE0gxN8ShAdDrpQ4Mms4WgnF3P%2BWBK4Ly%2Btn9fFI%2B%2F4UEkTodMhlVO4yrrMf%2BXFlN%2FtyNFrAGYpKwQIEu7n7rrt43zDMrU1v2U%2F6If0v%2FLXH4c6j1efwIxbB6EizJUw6UkcDoKaQ%2FvHFqw%2BnU20eUAVRF%2BexJ6wmyGoau1Lj%2BX%2BzMe5A4JD6GkBDj5FhGCEsAoQMb021ZL8GHUDEEkqGR97C4YBMkEnZiTvUT8PmqloyC02c4Bxi253qlIICB3BF3wUcI7SLThuB9hSgXYPdXrNh8KSPyhx6LvdzrMvqhm8zfse9nJamVq%2BQtkg2SOoJurfP%2Bd0CVkUiVZe8UVttpwgIAJIYBhFVCGTpvtkixqEVj%2BEoQNTIw8tf1ci6hAQByK%2FieTNgIf0SV3bB24cLK3XtQALHrXo7kHF1H%2FvQnOcTJIPBqI5cIzEheIiK%2FxuhDvDM8%2Beh3gc4AA5RXwuSKbVEUhqu2oDaRswdjQZQOdUhcs75BA0XizSNzpbSW9uB8xoM6iBywvP7OquthSkc5iXpRUUptcrhNXO6Ew78DByQY6pgFobSWo38w5LHNDuMRxsyuTFkw%2F5uXrW6FyneTccxWW1FfxQTR3z7C0sa3uhxwAa4D8PGLSHYFZ4HSs2PUl9OeiLOezq4VpBnOjL05ESPjlI74oTkGwVwICHystFgIW76oroVUAOdzs6xxzeA6Gh65cfYQu52BM4YYSYd7ayBo3lO6kVPYobECBnpd8vpO0ppnzhCziZbi4oSLQD65y6iFRc5XQP3qr&X-Amz-Signature=bacfa2b5c5d042b3956d6bcfb8b70aac9b0a638d4bfbb2d5741d5aafbc4447b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEPQUPS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQC9Lv%2F9%2BORp%2BmxnXWteoYdiiktSYaXk83yKNzD2ETPIYwIhAIVE7XoMhxqLqSyFximaNuSLbNXbhoDuk%2BiRboL8xGHGKv8DCDEQABoMNjM3NDIzMTgzODA1Igw45vUJt6%2F6IQRiWwAq3AMsT9rO64YwRbVP7ZTmNZS8hDE%2BJOE%2FiysN6LGZd1o47%2BI2%2FHvCbgAYolpO4KvvbVc%2BLQDeo0VjvUAqvJp7fUGLjRdpOBc3HrtHoG2%2FGKDwPEP%2FRYyBzWiiCjcckrR5SQJdP%2Fvg3lsjsPGzOMF0FBrswR6YUxDpl4cN6bmWwM6WkcNnHl7nZ0ZCgd57dBLc7wRCWAW3miN4wqX%2BH71YWY3n2fjVJqVAdZNu9mU4lqO%2FInF%2B5YH%2FqosXy1v40z0zJHLTyzlR7toVdTq%2BbtQpAFkwmPqvaDL20nPGKh01PdYmpuXXWICdvX118RCvNfWPvvQbBLDMYdlTJlCa3%2FpXZp0bNJsWPQeJA3nooP9zNz6V4kMd%2FKtuPZWTBA5xbdRKn2Ktr9uVzGHyCVIa7ptD%2BZtZT5ZxBnu8nYke%2Bf20L1l%2BPkUJ2gr5WovmlpB7eiSl9Gb1TTGzsnnDgE5tEZM4JzNYKkAodflhm%2BtEjocipPmRy3y3cx%2BPbDZy1VvDRQz0hF4iL3kNT%2FyuhrXy8O9ITWCPfmnMg7202X5bH90f4zkO7Mglyhx%2FwghInxorAdiSvyco7IdFiMM3MS3Z1HnLORF1h8r%2BoL7insnZDqw2zd20R2G3naZNpB8OBY34HjCCwcHJBjqkAbY0WC1Bx0l7Zczq7uIGAAGhII2rwmWacg1dJUh%2BowMnvU45YPDEbdloPApi1oLza8Jl%2BHjiGGgG%2BfiLIOGELXG3LpFGQD%2BFwkqlnW7tcTQLqVVcrdkiW6hTKz9vU%2FcEDHxTa2CLq7C3eJDCOEYXVLv7JboVlF0dTnwtX%2B%2BvgF5JNAxLLP0mzKlMVn%2BwtdokVUjch%2BvzcKbiSoBtBcnOwJLJ9sJz&X-Amz-Signature=a78bc4e1bd2a61c7c86435c9e3ace528d81e7cb4a6d2a43dacf1a02237b00a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

