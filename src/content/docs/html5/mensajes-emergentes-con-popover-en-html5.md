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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUCMH2JY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqhXxP%2FdS9z0wR2oV5WbLGtEQ6JBmsFOo1M2MPsKswCAiBcJnQYxYzx0D9y7rSNSR24N%2Bz%2BZOcrG8iuWK%2FliLcZACqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvwpsx0pHokiGWESbKtwDTKIVvm1LCr3wii%2FqNrD7I32KoGn0aeGBqgQr%2BkTUiOLpExJAR19V5QbwMBBRiXBwaojILKq4rd%2Bx0O%2Bg%2FsPO%2Bl844BztT%2B3GJ1umzP2Y8xDAQuBaJbBdjLQpRxz%2B6yssVvp4RDIYxa7cOOi2S8%2Fe7m%2FmfXcJMX6aesQYi6RR2hoDgVyyh63KBOy1CNzeUK22%2BCX9j70XgOgJ5Z6yFL0j3sY7tKOQcm5SvvWQ89vpizQzN4Hz3uwZ4UHh7bn5a2RbUqpXbal2Cc%2F7AMehHVKl5gpc5xpS%2Br0LPCLvTSHrP6dgFJ59m6GZqV6MIaEBng5e0CwxZJoact4JbKtb5iWdDQHQlFwpmWx%2F7IRa5adREgCGgWc32gUpZdNpWkYUyRg3mm8GJ0w6Ew8dS3AkIefgFubcIn4fafPrP5o3WAIAosoeilrGwg6qll48Tc72Uyzzm%2FM63RDTjoRT6hTaB7%2FExmtO9yULn6eV5XIBxEBwKHfS6KSShMcCs1xqqk3VaRQu%2FOQt%2FnTGker1FzZYNFIijJZY7jV2NJOE9a1YLYdJeflVXs%2BU5dG4FtTj2mQEG2eu2gzF1Oe9dRQ9hWs2zbg2usAN0Evx4CoSYe4X7nA9Za9PqbbeMnb5v8rXNtowhsfXyQY6pgHDYA%2B35nezAI0QOZ0e6XbRvLCFb7Wagy8EQQyDlgAkDOI8UZdB9kpk4s3qitMI9z1jp9XFdv%2B1d2Oc1X%2FuGOezY3lX%2F2UtQWuoQHgUZQTVO80ugRa7hq%2BW6M9eWeIB9171gduTPTiB4ywo6x2PyUTFlN5Z0kEdj71M%2BDE6EttAhJI4KX2AMUMWQOPY1%2BKFE8CRU8xGw3tlzvVgM6UGxF4OGlSSOUE2&X-Amz-Signature=1477a0aeb490382fdd893cc236940c077c47345a6629ce986f99c21f46c31f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLMM6VFY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFmeZkno2Q4t7f2izVMxF5HUhxZ0XraOIomkSvsvTHIAiBqmgskc%2FFdb7VH13GMfk8kFbudq5wBM49LTAvrrHfqISqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcEnViq99MDDLcaTsKtwDIBnwdZdLT24BocvCcx8j5unQLn7b6F2ofBhLUbkRe3rsqV9Vim8LLAamVCIWj9749sRdZ%2FZ1d58XgOHabIO2oPwfVFt95gHvvKyBhcI2YVHLSwSZ2rHxBH3o43iq5ulpHkMCzsJEu5RPgqFGL1iMMtV%2FFXiw6YS4s9CiuvGMPwMXiVAGkXlBilr8%2Fgdt0BS0RE93OYnbe8OBqoeEwE67bH5HfL0jZtk5A%2BQnIus3n2Jw85bDu0uaRzT8iYjMU7uJoDI6FiOaGAynCCtufiK4z61%2BkkTZchwzT%2FZSJzBo1m2arfx%2FGquF%2FZdWICjZJPRhAWckq8AClLQP80XnSb7wYrtOvoIHA%2BX5wcCN6Tw95BfBLZfjVxbp4AuHUZ%2FTEsp2BtXBIUPe1519SZ%2FGqUOVeCY9Sah2oazDwbUD2cdyNyvTDhKNOa%2FQYklJXRT9UO1z3RhZTV%2FBsByfkDhWKZUM9DR1%2FqRU9RWI7o%2F2FSExpV5NjDD%2BiKkjJvI6nynCTLrXvdXwLZcGmr9FDScmp7%2BA6yD3x%2BT9fsMxdGGu%2B61%2BjLR%2FFHd7%2FfboDrIy4eldDfiRnSeI53a1C6Yjwzz4I%2F86%2FxZdtbg1u8SWXaUoMvr4ZNrE4giE%2Bbplmx98PTQwvcfXyQY6pgHzMvx9PnyVzztYqgQQ6vjB9ON0TaBxxGaJVUv11yk945rckvTF%2FE3m1BZCAL5sdIxbyAWNHoS4sJhFwnW0xoNZDcRtYezMyAwfeUvEpOlopyM9VHrGsbsT7H8Omq2OIWnoZ77jl7AuCCZcjgTgLiO6Vumfz3BeSN5AytKgeNzru41s6XaPJSZdGlFH0fEm21iCKKDY9X2BuaBcLa3vmOtYDwihKZVt&X-Amz-Signature=800765c6dac7f9d6e425c1d63cbb1dceca5d2f821791709a4baa0ab93206b6bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

