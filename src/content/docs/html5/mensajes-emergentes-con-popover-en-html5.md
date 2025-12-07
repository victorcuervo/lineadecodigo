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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4IQVC4D%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxZIOphGtNOi5PZYLptZ43x5FYmoqKW6NbZiNdP2V2qgIhAJrO3v%2FijsYi3OgxjY2A9HSXrTQrVbpDBzGp%2BLW7eDRoKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwf1PuecCpjzkgsl3kq3ANJESFVdWSr4TJ8Jl05UteOAZ3b4S8EO8muTJ946oVArx7MHEGoUzmpBXgOfY0RN4Dx%2B2ah1BTIQnt0cgUbvNNrZbPUnmoCrzAPyExtjyIyYwqNozqqws9QL%2FGY0XLsLZhnsnT6JSzgztUyZJDVjJetB7hS8rMlO%2Fah9f%2Bm4%2BQhXyqGmEwNiB8DMB1xUTHOBW3HR1aZr9pfIDHBW509nLnimTmkHNpaUcRzUttQYreRkqTpccLWQugBzpnYhi0kTBbU41%2FQtNM176dFZ1ZuBK6kJcjAxHz65PlJlaVLETWPqjqGSZoDS2oq%2FMb%2FWontZY%2Bqw%2BysLw4lLErDSKQbJhPA7ebpCRjRCChOZAtMmL2b%2Fc6J8zyAgijsbOPS8raZa7n4Tp7xGIstdZS6QLmaSn9xRgsl1amAOh%2FAcA%2BYIa9kxl8k2UGEQFPyW5DMEk7J0fHZ3VwZQ%2BcQXy9rpHCD3zED2upKVZzJKT9nGE10OWQYvK0%2BTnLHWBLF7E5WC2%2FGzOlEl2Y9cX00UzG52%2FUW2ymnDNKBP6lyVom4mbai%2F%2FtlzHtNV8TEOvH4NynEkVY4YqdWl8Ncxrq2qzyqdN%2FHFO8FN8yVs2F2GOZMkHc0dHmoyQqwxl5UXsKHC%2F4frzCyvdbJBjqkARGFp7DwqDlMhhuy6BgXY83jXFvfWy2pb0dPJwaIFdzsSsOG4ZoM4usWc1u6c2MslnngNbSD64dzp3vYqbwZ6%2F0i5I286XiOr7su4ILk60RuXMsgqBU1WB%2Bud1haDq7eCYApf%2FNCHMOJQ4p%2B%2FNQLwh%2FI%2BxK0Rldx72hZ3pZhaMzD%2BGl9BxnLfRXlG5Sjc1kxYjK35yzqehWrvv54keiruSz45nHj&X-Amz-Signature=8a26001cb4230f875f92388855c97c2082ff6d3a8a110976fd178d1e16fd4158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFQSMXDF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7IUUQyZ2kdUH4IZp4ZwniTWY6TcXND437TR%2BbCdbCjAIgA%2BqjijVcX3JnqPInjXMLeOaOAy5Pd6ZyW5u93hYvgfgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKe%2Fr5mbxmf9xtW%2F%2FCrcA%2BPFsgHRaJN%2Brhczj1uhH8%2FokHJmorfGOeWm57f%2FPQ3rDLk3y%2FRJ1%2BdzzUXDBvh2gPmBIAyNLpEH7FKUJZD2bsISYaWWYqsURbztfqon8dW25QQw7lmZZ6e9eqhRIeIgh2%2F0NRQAD%2BV8gQoyv2%2BGu0ROjMWf1Z8JXRdjFwSr5dcq9zV7AmJrzwgZ3E4BINJQOWLR%2FOPIyGHaCs43JiyGlsThM2udeE183AEjwO1GYWiXK72YFg8qBXVGgmfanK5qrZuAAR3sxv1FFbcHzokks8BHTzrC86ulMYA8SVO3XMk8gJ8Wt8aZaoSm5LkRg5oROMxD9k17mrBlVvUU5lSSUbPnd3MVatMyc2Twc70Izsl6HXjV65hSPcQpJ2UpDFZZ4ZYXjZQVxaS%2FKDZWVvkqqGk1IMRR%2BBr2Y%2FWO7Wr0kCpW2Nd65BMKQZAUSm9twkK0COI0vD97Q1qFJbYxt5g%2BpKRgJd%2FittdZbraBB7JQfie0jwES8SJCa04f1FO3z%2BwoFbvTx8F3JDT53IDBHOFgrzKBQ2KtzlU71FSzd3uYKTeL2Dukr%2F8T9%2FU02uSUdek%2BJmSSWZusseXQ%2FfNHeCl%2BM2r6TzkyUIvfX1drhIcGAZzSg05uvKEh8H5qdlriMNC51skGOqUBqySjNA%2FSWgpPmXWvFR%2FL8gtyBcNL%2FebgDh60eV3m2eQiK445C0CPj1tKHMW1%2F6MYagNMtcGkCGfIHdBwsrR5q5u7UD52256kcuY7chkxyb7WcxjWmsjSu3h%2FXW11kuLbotHXNvtNpQp9rtOGKjCEHPGvonnkGoWs8nuQQnitnrcqaIPGI%2F7YlCRJe3PYbn0LZIOFl6RTW6Mb75xPCO3ZjlfVym6g&X-Amz-Signature=de0b88e3a8482f325cab8804ba40a8d6c242eee864f67731ff5388c80ea087fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

