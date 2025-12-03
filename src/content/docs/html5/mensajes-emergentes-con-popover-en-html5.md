---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52CAAD2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD8IoOHhhCa3%2BRDa9psJRy7GpX7x2%2FrcoX9R%2B0v%2BZf1igIgdVGgBVldz6R9PRhxcjCYecmrPjqrs%2FIwvuI4b6eoIyAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBtfgNm3UWZS%2F0%2Fg9CrcA97HMtaJVqC0G2%2Ba4xoxuiJqCFF1XQXy0Q%2BH8Kkp8qzK3i59oFEFB6pwcYcYWdqTMWmdaeNsDJ9r2PpfnlBrrLa2QrawSgScerSRyJCmnlfQ1I0%2BAcIrXuP4Pf0vkSJCju0cI9YL6yMbiXF2vXCWQXJDglaVE8oUELwUd0uUKI9zg22ErAiORU1KZr3odxaTyrg04VFah9JprMRvaB60Uq%2FDp%2BJRmyNcWi%2BuDZW%2FpsN9D71mIzAV9MzkI6ftpSb5zRSApbxfw9EihJrQDi8GMFCOWwIH7qQR74cSDZapvXjEpwOLBxY%2FlV9T11VtL18LmRPr2gUjVG6096q3CwwzTff3Sivcifdkbzd75iZkFYcxUM1ZPHJESt%2BRKLFpecUrHmzQBha65Uqft%2FYt9O5j%2B0Xp%2FsuachKVSsYDeK9p8neTO7gHkeOhjMGnH2gOmyZmv776CZnkXV1ItFqW6U%2FtSY19yyx38l3bdvkCclTbbp%2FHp9oskGcCyuk5%2B%2BMWKjVt21JGZaUuowoCnWSkCTfkJ0njaj2KUvSPqANUpgIYB%2FHcnqr5zswWVHVUnkLJDvy1IYBn2X5Xydsj1L63gOSy3105TvFHWlF6ipAqopI4AJO92Lwrcoue3uArbo7%2BMJHdwskGOqUBArLMphPbs4EDpMDSv6p%2FZvjz83L9TASKLbJgRRVbEtjGJDB5l8Y8XlMLF%2F74T0r56yYMujW4voq9ThXmLGj%2Buon5j%2FxP6JQfkreGYhubPFPsR%2FD89%2Fp3IJTWjXOKzPzBpyFaeGRaz1QWzVRMT0GQ5dWY1RIb%2BdxuCA8DcpqPa%2B3t4mfOxB1g%2B6IFiM5qzHrOv7DgJvvaMYT3uHaVYGCDF1ziEMBa&X-Amz-Signature=16811b807d3cc1a096fb5febdf357360a890c9552b91b1e8629b4479ffe2e7bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2GLIDD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCICUGCxeP5bsv%2FdrlCpRoI%2FrtikASfGcVV%2BaocfVqWXnLAiEA8Ku%2BeELhDVRoYRn2b4qqdXhZv%2FyQVbgofBeLq8u0vPEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIS2B8Egn0vZbR5mpyrcAzRPusfSuDZD6W9wC%2BZEjMc0%2BVNYntZBaHap%2FnddZwOCoSIEZI%2FnNSjI%2Fzp93QQEusFLvJxgGgUCzrOjIJ3gqy7p5dbTsDDqwlCNVpy1tnnlyMEH5X1izzqaZESk4OEPSIKMkORn%2F7u3yqmLpzJ%2Bkgvv7NXz5n6dAjT80GSZ1K7JVgHTKIQ6gmCpkjzSCMY3LLikL2koS0m3EPHQmMq3T3mw%2BgsjkdBDel5Nb%2B5Biw%2FAQtKLdvj83AwE%2BcfqpgINz8%2FfgWIVkv3k4qNKzwLUmzPEOVN9dHmca1xAbCj4rARo4B0ojLuX3farVFh1yvMBke742urd16zuJrYVBI2czOvXYYHeXA%2F1v7f6HVkta7tDG0iQSjB9UZ52QcvUMNToT0eY8gf7lDB5FnploSZBlzUdQbi3nMWhRm%2BWBdQaMiiUqjXPZ4kxek7KlDsqI%2BDvLRihCiOx54qyft9k9idaJMJHz5hijIZ%2BU5jW0%2Bv3uKfYSTDn5eXAHLj4rnylYPoZ%2FFgzMWx0Q0D%2BSoTiDC2uVvAu6C%2B3K2zcFuSokapm36evKfSfTLq%2FGb1G32WX6HYQxGFQkKI%2BQ3aQX5PF7eHz3wGKF9%2FBNU3ohXSYgZonyzPCFMDaPuq2%2FVGf0pfsMPncwskGOqUB67xmFi7RFes79tFniG2st3WfmQebTl4GzddNBx6O8u2LcTlbo4oDdDPCFDZWbSkvB1may936G2Ib9Js1FNATpwA2ZLkBiQCdrEspgUzJWTykzHz8Hdcb%2Fgpfo5ZDI%2B5amARh7UTisyMYRqcZpqLpVjkMl5WRH60CDBbqHF%2FESCNsBj6IaxcWtqI1KrNn06jhbwGf9aDKT5j327ZHsYPgC%2F0%2BbdRn&X-Amz-Signature=28c9e2c9e2dcaf2770c92c242da7cb803b944cdcf4672af36d9f748f0e298481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

