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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEBUCPQK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIDhnolJwBIw5doQJJroQUo3x%2FgEHya44ub7JeXhfT5CyAiEAwlFuYne6tiY7Djlo9I75I6YYFPWS1j5nY3uPmfizS6Mq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDO4LvXkYKOt%2BAAc3UyrcA6kSNtEPP2QZQ6xiSJNHSNvdHyT3RgyK8o3DswIhn7fadtfptg%2BgGqrnjn6hrwbwl7dN4JCl%2Bh1zdpf2I0Xi8lP8qcVkeEZPXAmYTuKrEll7wVsVTdYTghU6EujI8kTZ28xlpa5cdMZb%2BEiXYVaCtB4bdf7iAXPGID4VkSvHN5ZA2a0omxlKck5kaeRw2%2FlasPDq4niTei0EuCz0jOzX%2BG92HT%2F5a3pKnl7UQhleqbBnC8oi1UZpm1gl9oxdcHVlZvkmdFochWdV2GS2Qk20WxjOuketOHqyJSbzaRlQogOAIa0y7M2SrUixA6ubeQ5bMHASdHCUPY3sX5im%2F7oOFr%2Fe1WgyDDFsH5cxRUJ6D3yJvNJltBkk%2FOjE72DOUs%2BaGOwuRWtfHeH64xSAuG0neC3JcbGKC3YFoK4HvWeHfR6xPiSd%2B1402YxWVzNPHldr%2FZbZbwHQZnyy7qxN%2Fv2xeysDVs%2BsJg8m5NG5Q4ZUyCaQhTMmrskBCmYlvK70X57yMtonlyniX4AyrlrnZ87uKtExOsW5VXxD6bGaP0ra77KMG3AT02vBHjdr1i2NKirQtgKFiTVJUujCZADj5DzLHYYRUAi2%2FuHdC%2F4ZRaZRPJtWSC2q8rNo3lBUeMFTMOKFxckGOqUBWJlHhRrl6csT0B2745mxQ7UeWPB3bm5mzDn5wBAOKibLVHswllnkUdLmFlWfcJpwBDIu9RhrZ7nAdLyLkPukNp5GIG1chck6gXSYT2MUJm%2FuFG8Y7npx7K7nLPVTCOEpBonyXsbvQ2A0Y32jLLc4Gohuo5rfLaP8IcCDgId0YrH7n3Y6GyWM8%2FIwU%2FMf9OObV0ePUpn0tVjagGVuuCTBrCffREtP&X-Amz-Signature=8db2a863bd7008e7790ed55fcbeff58e68887b5061bc8a2aa98524f3c2a3d63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B5H7F2H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQD8qYTWsoy5RsHcgLkVZ%2F15SE2LtLAaiyzmLhv42gErywIhAMa1baDFLoIDrERQ8npzzYZuy2qorUh063eeEVy9MGVnKv8DCEEQABoMNjM3NDIzMTgzODA1IgyEMtzCpbj%2BQkiBSEMq3AN36gKQo7AnbGCUTFr2E6W5%2F3w%2B1zR77ZNCkBC6wo1POz86nyDsu5b7YqzBvcxt5JmDM4aphs2VkhGDP2z7JZevEtahcRWhArjsxehlwdgGYzgwpmJtsHmOcgvff22tiLU6gucdsy%2BqDQAwzFOn2mNpW9y1HxsYKsvHXc4GpIi1awK27KUOhRnjS0inF86SMzZ0Q4cDRogaT2kreExwD7R6oeRnycEmPAVkw1a5BVpmARJcFpwuoD%2FC17AfgMMz5Ex1OFsr1bAVIw4DZaQKlYPsCFxWLesFe3Vo%2BtEO9oL5BL7XjavLRhTIABcSDK%2BxwPJxfrT7MgO%2BEIZBmOAPuGoujjGSqDaMoM1eq0Shztbu9qEbCjZLToWE8ZXV55%2BjqVHY0wf9KaO3%2BKygnE88eJzl2lmm%2BOrGSR%2FHKuun6rzY%2FJiL4qB8Q6xWKaFJwRXB43p5m5VyOkA%2F6FKdpcC4bJka74%2F5eThKPoXq8L8x7qOQMxqBpCDJW%2FMt9V2xOlBL4jsafWTJ4Zb2%2BM7RIaXvtwQq7ZOku2qMb9SYEP7haR90tsLGxOfv6Zh9VGBPxAqCb0YgLpbFuC%2BJ%2F1aSEshl53IlEn10y8VKFEsewFb7TEN8y1WiJDyNGJrwmq1xuDDNhsXJBjqkAdowPLQonoYl91Jn6dgD4RmMELBYsXgt1%2BOAG3f3jjQ4jUTWAPbgpv3lrwI8JLiaHWIAtF%2BA5jwbZY8TIp4IdFbM%2By6EwhQXtic7ixJsp2SL9U4F%2BQK9uuQOHZGeVZ%2FtiZERWD4KdA2Ytz2%2BvwD8Nkp0ccPtf5O5p9RNEWN4Bfh%2BRu4cMKtYjkTbwXXQVCWbzXH%2Bjo7ZFILjjRidyYH5qM4EPS8V&X-Amz-Signature=f2888f2976078b477d2ef7ae2f986cfb4c6a3f98df959b23e075a6d64e3a958c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

