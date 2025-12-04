---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUNSL26M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEkqJVODBnM%2BR81pHa1j2YBIiuSFQXcvJ4lqyO6mFzbAAiEAotAjXfKkabLrwyU2li5cGnvyrlBMKpvNyDsPQmMFgNMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPgDiPsRjwYGghl%2FUircA4bu9Gf3AaT8%2BvoQtEjHLD5MMrP%2F3G9GFoWkAh0MfefQTxERpNZCsvP8W6JT8RPE3J5ajmt%2Fbp%2FIyFXZ3KeCrOI%2FSII8ufPagNHfm9lvt8ARoV2SzvstXcNPDOZVuH0IzV%2FUUnPZejvJEy9CWxH%2BB8YYDlEWu9CG0v7TJxDuwo59Jnpt4gDvXsI2g0GRDNAbVVwBfHuTrH9ss68A8BasyAMp5VsOrVfEelnkDLzt96qaYzbn%2FU5PyDkp01hdy04r86Ayq99Llc8MTYFPFMCJLsCnAQs0Gutsj2%2F7bNJExAsi8nSeRIIYTLaEGoqiO07oasinHqZxL3VgcmjD7Z8xYC%2BRZteHDVTSFbs41ZUzlhwB0gSSgN09sbwH%2BkuIid4GddamvspmcnAwhXYzo3KOwxnu63nUm9YmA%2BBGXTBycGTilIAB0uWcRl7DPu8e%2BuKxxhPJW5dcY%2FcyniHKloEcqLCGt6XP%2FBzE90ZYx69a%2Fk7tDfwlDKgN%2BS0mih5%2BoPQ7%2F2cQ2qsbwUreX2bfti4JYy4jPyHNB3I7oDJlh%2FkOcUaMBWVKmued5lFXOw1SX6HJUXIAC9MaCMlaXIcMRb5aJ6eeLmyRSzp7coVxGbpZWzIaLo915MP7FbgGJzGNML%2FUw8kGOqUBa7Awfu6ubLgLeO75zs7IDfr1b7Y55joKbnZGD3aA4h8M8ZqbwLzxydhWZ7ESuNloRqP7akgm8rK2xgB8KIqLVXVHTDr5eEiXuSVp6FI2BsBWrlnTA%2B13yTTy76rLR%2BK87%2FZvozxzZmnxxNT516roEYXWT0BI%2F1ynwjwmnL7YFobCLN%2F17O83jnvW7bh%2BcaExkwBKOXX8CjxesSUpn2orQhkFHLbn&X-Amz-Signature=1641e05ade2caf772af56abe605c388bd363b4955d548a724763f9b094b98220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBHIJUR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIA4sbrGgi7dt7ec0sfyH8FoOOrL%2F%2BqR%2BNOSN4bNKJndCAiB72PQ9xBlvy6ybEI3p4XhS%2BKgQzX3GmxJEYl1zJajj4Sr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMayPxCQZBImlA%2BsFuKtwDqSHueGrZpK4Orq70LKQvNir33HgXxmtD3oQ0dh5YOR%2FpbaxlCUbklsEBjif%2FWemwrFPUoX4rMinPNhJAC7R%2BW%2Ff1YS8lLoARfkFBph%2BcFowpWvv7J639fXCwDJoErZJDzZ8IvmlqbeYLb3COTTBc%2FZ9MF2JiqGpCYaPpnO97wuzXYbY6XyOZIl0MUKs9XbDBWW2%2FSP9wiwZNseoHO7kKGomDxXInLTj4uO0auhfkhGi2Rqbcln%2FumRC10Avjzoz0zHedqRqi6bjBv7uc%2Fj6fSp6C%2BfD38%2BeHfKvV8Ifjz3aViI7DPp%2F2FuCpqmMiIQ0DqjCwRDhxDBTc9tgB0cPeYn5fz6GpzKnOcJCsH8Y8DfEWcew9Evj%2FdPYBXvzQF5%2FwNcInYuTagHIiRvKDNjiv06hfV6W2eTx547ooCb2gpMxutDY4wkcNe3rdEs2si0lSF5Gurf3KrdUT4HghU2AVfkRseV4O0WxTRuFlTpxTU%2BK86T7h7qbm5s5maIenaOwVwcAvqLzv%2FJSQ0hiRGEXP0AHJ0iFCUfIvdEKn%2BWTvKR5u56lLSQILLwqgk14THly5b3gFmcGY2o22bhlt3AM5cpImuBNXHZcVGpQfTrnJpCtj3AW%2F9pt87uyuzmcw5dPDyQY6pgE1EVR6t6nqahIb6nceMX10LeZJ0mKgja9L8BMRiYxO7lgMA4oDvD4ixIppy9BAUbLRpuDB7t1Lpn2StIzvflZ0vt7eKwg7P9LmgYvIC5CnpzM%2F4M6HXqKtW7hWFRC9%2FRtcjxFZOzf93KM38n8YXsUeOzF4FjbBHX7B0Mrpaj%2FBV7gGNLwryxf2m6UomupTIY7SbciJZ4Z5Bys1iaqQSA3N9cuDty6c&X-Amz-Signature=5b9c7974207ebfec8277f607c2f29b6d2c7b040b82552fdccfb8fbadd6fd69f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

