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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ2AU4QL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDuOlHCtfz8yLOl5KbBllO%2BEZSz4iLk1NZuSkxzM67vQIgVh%2FyLTecSc5%2FmX2qp%2BGSmD4aTXTng7S5tqESCir4fgoqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtRT%2F4wlEafnrE7dyrcA6fiOE3T2gpRXC7f70vYMPJ%2Fb38XFOVqBRs59WFJy3zV%2BR6nZPFC3Un73jwWfWAdVzZdQdadARBiBvExkzKlu%2Bis3TeROcezTvPFAjPYbeWLjFkrnKY8azKun6RvGMcs5Ky2Ywsjaxh%2BDno%2Fxvcgc7NJ6OIELtm4x9KLjIa0lS%2FoHDKThQfn%2Fuft0rDqbnKG0lUcgAtUIndhl1zy%2FyA2Iml6LogJIiSCQrh81pXZ1dgB3DW1uQW25tez%2FKVwsBXbWvf3KCRZit1vp9GpcGOfECTJdJ8XtT5nMF6nbTBB%2F8fYiY%2BStE7svE4bBPQvoEX%2FEmUhzVFVsPe3BM3vOko01vMPLgk%2FIH8M83h8aHT2%2Bs2dYzX9VbZNDLk8J8TYFI0iaWH49%2BgUeMu1wVpJqU6tGMW1wlrPiJ3AhMvPG22kJ3N51Fuy71TgB9HUOYOfdfcU2LhxTG1nk%2BitzD2hQbJWgN9reQOeE03gOe3a8cH%2F1zp1QFhJz%2FKv9ySsYzfdbEH7FVHslsPEM9S%2FacsKgClJhe%2BXWgEyOsf%2BzwaRjVpbufM8Dc5ZwObuc0OUFRKvbHva5eNDpZVie4proDYVMqO8h%2BWt2cVe85Cm5tI%2BmKj3zxgjduNVYdXSz648SW2AMKWF2MkGOqUB9ho1V2albdeqRQ4eDjnL62LWdEc270L8x5EcGbLtWdFeouxYv8cnYcZmkAMyjoeL6OtqirOtYNTT%2FbBZ8Tyqb7XWXHfN90v2heeB%2BibN3NjjhsGOz0T8rtnaqYDCBptycWKUibHKS85VOFl0jVNwMNbxD%2BhulfqSW3H%2FhW11yQwDE4%2BnIHf04hbPQ%2Bz1qRIqGnAucYhjvlYWOPV6onh1LBD%2Fi922&X-Amz-Signature=5629d6fadc6632921beb92205077dc71bd6ae04bc9b9c19268dbdc1c8cbc8856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RZ27TD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHl6YuN58Cv4pDLt%2FYz50OL4aA%2Bb%2FpAxaXphB88JNAPNAiBVvMq8bczE6xUYO7RY2SZB4I%2Bqm8MphSqqDFuaQswxeCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVqTVK2pR2s2PpmjAKtwDPAqrRRbvYaShvd4Yxz51LP5c8d4Vmpog4IrTCzKoHFBlVWZn%2FO3wVqYmrwqHTfY8tprzWdRJewcq1Qo1OUIrucAG0nKtNuaSw7%2FH7e%2FprqT4n%2BqQZVJh7b0O%2FqrXHAlvqw3%2FzjF%2BnbeB97nQdTjiSe6AiynTxm17Gwbwo3UC0GIlovYVF3c6YESY77ls8nSLqTtFwQwoTpjHX1gjblONVm44bWBZhKpTKVNY1sS0C8T13AeamAUsGuZlqfn%2FVBHazoG2x4iDYdpy05EVoVu2jYXcOOosaE7R%2FIjblpFYsstq7V8OrQUb4hV4ALb%2FdNZAB0EflqCXrDha1A%2FthiK%2FwY%2Flm%2B%2BMotF7FEWw%2B1EWdE36aJr89i5KklZVFfF2I9hDsRqFVAjRfS9KV81hAIJf928l6L9AXNwtHSkL%2FrmohfdyLOZKxNepVm6xM0F%2F%2FTxCl09DxJcsDp%2BMmqNSq6tHHqGY3F23wMmVGo0Uv6T6hMxP5pJbSHBWKGGX5eeWn2O5XlZQ%2B0%2FSIJa2UEYB1YZ8PKoaw1bfPTM6wFBvO53T7PSBUoPQO5BOKMINJVXk%2FhqzUYlZ7xnwaW1YhE2vaY08z2TUGo2cEwurXn3SJfvYU3%2F0fzyP5WZCuTEtz34wroXYyQY6pgHi0zg38cJ6h7vFO7tiMHAMBRFWP6Nn7PGUybkVVXfRx29U7kTXF7J8mlsqFMfj5fF6KAcMkn%2FdnVIlaFHp%2BROELi12l5c9xnplSs31k6KHlUyC%2BTtX2dMBtTwc25Tbi%2FCSr2RT0b1FuqmknNgfPaKk0Bt9aUGKk9YqvS4nJ9BD1iTvUsvplJ95nwzrQpJkhwKfNdujAQ4zLv44rRIXyb2q9jV8e3DU&X-Amz-Signature=cb39e45d7f4e1c76945cb5f10950ba50663376ed5f5e61768ea17675296debee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

